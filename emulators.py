"""Emulator lifecycle per brand via each vendor's own CLI.

Thin wrappers over the installed console binaries (all verified on this host):
  MuMu 12     MuMuManager.exe  info -v all | control -v N launch|shutdown|restart | create -n 1 | delete -v N
  LDPlayer    ldconsole.exe    list2 | launch|quit|reboot --index N | add --name X | remove --index N
  MEmu        memuc.exe        listvms | start|stop|reboot -i N | create | remove -i N
  Nox         NoxConsole.exe   list | launch|quit|reboot -index:N | add -name:X | remove -index:N
  BlueStacks  HD-Player.exe --instance NAME (launch only; no create/delete CLI)
"""
import functools
import json
import os
import re
import subprocess
import sys
import time
from pathlib import Path

NO_WINDOW = 0x08000000 if sys.platform == "win32" else 0

_PF = os.environ.get("ProgramFiles", r"C:\Program Files")
_PF86 = os.environ.get("ProgramFiles(x86)", r"C:\Program Files (x86)")

# brand -> candidate CLI paths (first existing wins)
CANDIDATES = {
    "mumu": [rf"{_PF}\Netease\MuMuPlayer\nx_main\MuMuManager.exe",
             rf"{_PF}\Netease\MuMuPlayer-12.0\shell\MuMuManager.exe"],
    "ld9": [r"C:\LDPlayer\LDPlayer9\ldconsole.exe"],
    "ld14": [r"C:\LDPlayer\LDPlayer14\ldconsole.exe"],
    "ld4": [r"C:\LDPlayer4.0\LDPlayer\ldconsole.exe"],
    "memu": [rf"{_PF}\Microvirt\MEmu\memuc.exe"],
    "nox": [rf"{_PF86}\Nox\bin\NoxConsole.exe", rf"{_PF}\Nox\bin\NoxConsole.exe"],
    "bs": [rf"{_PF}\BlueStacks_nxt\HD-Player.exe"],
}
LABEL = {"mumu": "MuMu Player 12", "ld9": "LDPlayer 9", "ld14": "LDPlayer 14",
         "ld4": "LDPlayer 4", "memu": "MEmu", "nox": "NoxPlayer", "bs": "BlueStacks 5"}
# what each brand's CLI supports
CAPS = {b: {"launch", "stop", "restart", "create", "delete"} for b in LABEL}
CAPS["bs"] = {"launch", "stop"}  # no instance create/delete CLI; restart = stop then launch below

BS_CONF = r"C:\ProgramData\BlueStacks_nxt\bluestacks.conf"


# Registry fallback for custom install folders: brand -> (regex on Uninstall key + DisplayName, CLI file, subfolders)
_REG = {"mumu": (r"mumu", "MuMuManager.exe", ("nx_main", "shell", "")),
        "ld9": (r"ldplayer\s*9", "ldconsole.exe", ("",)), "ld14": (r"ldplayer\s*14", "ldconsole.exe", ("",)),
        "ld4": (r"ldplayer\s*4(?!\d)", "ldconsole.exe", ("",)), "memu": (r"memu", "memuc.exe", ("", "MEmu")),
        "nox": (r"nox", "NoxConsole.exe", ("", "bin")), "bs": (r"bluestacks(?!.*services)", "HD-Player.exe", ("",))}


@functools.cache  # ponytail: read once per process; a fresh install shows up after a server restart
def _reg_dirs():
    """[(key + DisplayName, [folders])] from the Windows Uninstall registry (InstallLocation/DisplayIcon/UninstallString)."""
    if sys.platform != "win32":
        return []
    import winreg
    out = []
    for hive, path in ((winreg.HKEY_LOCAL_MACHINE, r"SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall"),
                       (winreg.HKEY_LOCAL_MACHINE, r"SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall"),
                       (winreg.HKEY_CURRENT_USER, r"SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall")):
        try:
            k = winreg.OpenKey(hive, path)
        except OSError:
            continue
        for i in range(winreg.QueryInfoKey(k)[0]):
            try:
                sk = winreg.EnumKey(k, i)
                with winreg.OpenKey(k, sk) as s:
                    def g(n):
                        try:
                            return str(winreg.QueryValueEx(s, n)[0] or "")
                        except OSError:
                            return ""
                    # '"C:\x\y.exe" -u' / 'C:\x\y.ico,0' -> the file's folder
                    files = [re.sub(r'^"([^"]*)".*$', r"\1", v.strip()).split(",")[0] for v in (g("DisplayIcon"), g("UninstallString")) if v]
                    dirs = [d for d in [g("InstallLocation")] + [str(Path(f).parent) for f in files] if d]
                    out.append((sk + " " + g("DisplayName"), dirs))
            except OSError:
                continue
    return out


def exe(brand):
    """CLI path: INCEPTOR_EMU_<BRAND> env override > default install paths > Windows Uninstall registry (custom folder)."""
    env = os.environ.get("INCEPTOR_EMU_" + brand.upper())
    if env and Path(env).is_file():
        return env
    hit = next((p for p in CANDIDATES.get(brand, []) if Path(p).is_file()), None)
    if hit or brand not in _REG:
        return hit
    rx, name, subs = _REG[brand]
    for title, dirs in _reg_dirs():
        if re.search(rx, title, re.I):
            for d in dirs:
                for base in (Path(d), Path(d).parent):
                    for sub in subs:
                        f = base / sub / name
                        if f.is_file():
                            return str(f)
    return None


def installed():
    """[{brand, label, path}] for every brand whose CLI is present."""
    return [{"brand": b, "label": LABEL[b], "path": p}
            for b in LABEL if (p := exe(b))]


def _run(args, timeout=60, check=True):
    """Run a vendor CLI. check=True raises on a nonzero exit (MuMuManager exits nonzero with a JSON errmsg on failure);
    LDPlayer/MEmu always exit 0, so actions also validate the instance index up front (_need_index)."""
    r = subprocess.run(args, capture_output=True, timeout=timeout, creationflags=NO_WINDOW)
    out = (r.stdout + r.stderr).decode(errors="replace").strip()
    if check and r.returncode != 0:
        try:
            out = json.loads(out).get("errmsg") or out
        except Exception:  # noqa: BLE001
            pass
        raise RuntimeError(out or f"exit code {r.returncode}")
    return out


def _spawn(args):
    """Launch can block until Android boots on some CLIs -> detach."""
    subprocess.Popen(args, creationflags=NO_WINDOW, stdout=subprocess.DEVNULL,
                     stderr=subprocess.DEVNULL, stdin=subprocess.DEVNULL)


# ---------------- listing ----------------
def _list_mumu(x):
    data = json.loads(_run([x, "info", "-v", "all"], check=False) or "{}")
    if "index" in data:  # single instance comes back unwrapped
        data = {str(data["index"]): data}
    out = []
    for k in sorted(data, key=lambda s: int(s)):
        v = data[k]
        i = int(k)
        out.append({"index": i, "name": v.get("name") or f"MuMu-{i}",
                    "running": bool(v.get("is_process_started")),
                    "booted": bool(v.get("is_android_started")),
                    "adb": f"127.0.0.1:{v.get('adb_port') or 16384 + 32 * i}"})
    return out


def _list_ld(x):  # index,title,top_hwnd,bind_hwnd,android_started,pid,vbox_pid,...
    out = []
    for ln in _run([x, "list2"], check=False).splitlines():
        f = ln.split(",")
        if len(f) >= 6 and f[0].isdigit():
            i = int(f[0])
            out.append({"index": i, "name": f[1], "running": f[5] not in ("", "-1", "0"),
                        "booted": f[4] == "1", "adb": f"127.0.0.1:{5555 + 2 * i}"})
    return out


def _list_memu(x):  # index,title,window_handle,status,pid
    out = []
    for ln in _run([x, "listvms"], check=False).splitlines():
        f = ln.split(",")
        if len(f) >= 4 and f[0].isdigit():
            i = int(f[0])
            running = (len(f) > 3 and f[3] == "1") or (len(f) > 4 and f[4] not in ("", "0"))
            out.append({"index": i, "name": f[1], "running": running,
                        "booted": len(f) > 3 and f[3] == "1", "adb": f"127.0.0.1:{21503 + 10 * i}"})
    return out


def _list_nox(x):  # list only works when Nox is running; fall back to the VM folder
    txt = _run([x, "list"], check=False)
    out = []
    if txt and "failed" not in txt.lower():
        for ln in txt.splitlines():  # index,name,title_hwnd,box_hwnd,pid,box_pid
            f = ln.split(",")
            if len(f) >= 2 and f[0].strip().isdigit():
                i = int(f[0])
                out.append({"index": i, "name": f[1], "running": len(f) > 4 and f[4] not in ("", "-1", "0"),
                            "booted": None, "adb": "127.0.0.1:62001" if i == 0 else f"127.0.0.1:{62025 + i}"})
    if out:
        return out
    vms = Path(x).parent / "BignoxVMS"  # offline fallback: Nox names VM folders nox (index 0) and Nox_N (index N)
    if vms.is_dir():
        for d in sorted(p.name for p in vms.iterdir() if p.is_dir()):
            tail = d.rsplit("_", 1)[-1]
            i = 0 if d.lower() == "nox" else int(tail) if "_" in d and tail.isdigit() else None
            out.append({"index": i, "name": d, "running": False, "booted": False,
                        "adb": None if i is None else "127.0.0.1:62001" if i == 0 else f"127.0.0.1:{62025 + i}"})
    return out


def _list_bs():  # parse bluestacks.conf: bst.instance.<Name>.<key>="val"
    inst = {}
    try:
        for ln in Path(BS_CONF).read_text(encoding="utf-8", errors="replace").splitlines():
            if not ln.startswith("bst.instance."):
                continue
            key, _, val = ln.partition("=")
            parts = key.split(".")
            if len(parts) >= 4:
                name = parts[2]
                field = ".".join(parts[3:])
                inst.setdefault(name, {})[field] = val.strip().strip('"')
    except FileNotFoundError:
        return []
    running = {_bs_inst(cl) for _, cl in _bs_procs()}
    out = []
    for name, v in inst.items():
        out.append({"index": name, "name": v.get("display_name") or name, "running": name in running,
                    "booted": None, "adb": f"127.0.0.1:{v['adb_port']}" if v.get("adb_port") else None})
    return out


def _bs_inst(cmdline):
    """Exact instance name from an HD-Player command line (a substring test matches Pie64 inside Pie64_1)."""
    m = re.search(r'--instance\s+"?([^"\s]+)"?', cmdline or "")
    return m.group(1) if m else None


def _bs_procs():
    """[(pid, cmdline)] of HD-Player.exe — only needed to detect/stop BlueStacks instances."""
    out = _run(["powershell", "-NoProfile", "-Command",
                "Get-CimInstance Win32_Process -Filter \"Name='HD-Player.exe'\" | "
                "ForEach-Object { \"$($_.ProcessId)`t$($_.CommandLine)\" }"], 20, check=False)
    return [tuple(ln.split("\t", 1)) for ln in out.splitlines() if "\t" in ln]


_LISTERS = {"mumu": _list_mumu, "memu": _list_memu, "nox": _list_nox,
            "ld9": _list_ld, "ld14": _list_ld, "ld4": _list_ld}


def listing(brand):
    x = exe(brand)
    if not x:
        return []
    if brand == "bs":
        return _list_bs()
    return _LISTERS[brand](x)


def list_all():
    """Every installed brand with its instances + capabilities. A brand whose CLI fails carries the reason in "error"."""
    out = []
    for b in LABEL:
        x = exe(b)
        if not x:
            continue
        try:
            inst = listing(b)
        except Exception as e:  # noqa: BLE001 - one broken CLI shouldn't hide the rest
            inst = []
            err = str(e)
        else:
            err = None
        out.append({"brand": b, "label": LABEL[b], "caps": sorted(CAPS[b]),
                    "settings": sorted(SETTING_CAPS.get(b, set())),
                    "versions": [{"value": v, "label": l} for v, l in VERSIONS.get(b, [])],
                    "can_rename": b != "bs", "can_clone": b != "bs",
                    "instances": inst, "error": err})
    return out


# ---------------- actions ----------------
# Failures raise (RuntimeError = CLI failed, ValueError = bad input) so the HTTP layer answers 4xx/5xx, never 200.
def _x(brand):
    x = exe(brand)
    if not x:
        raise RuntimeError(f"{LABEL.get(brand, brand)} tidak terpasang")
    return x


def _need_index(brand, index):
    """LDPlayer/MEmu CLIs exit 0 and print nothing for a missing index, so check it against the listing first."""
    if index not in {i["index"] for i in listing(brand)}:
        raise ValueError(f"instance {index} tidak ada di {LABEL[brand]}")


def _mumu(args):
    """MuMuManager: nonzero exit is caught by _run; some calls exit 0 but carry errcode != 0 in their JSON."""
    out = _run(args)
    try:
        j = json.loads(out)
    except Exception:  # noqa: BLE001
        return out or "ok"
    code = j.get("errcode", j.get("error_code", 0)) if isinstance(j, dict) else 0
    if code not in (0, None):
        raise RuntimeError(j.get("errmsg") or out)
    return "ok"


def _memu(args):
    out = _run(args)
    if out.lstrip().upper().startswith("ERROR"):  # memuc exits 0 but prints "ERROR: ..." on failure
        raise RuntimeError(out)
    return out or "ok"


def action(brand, index, act):
    """act in launch|stop|restart|delete. Returns a status string; raises on failure."""
    x = _x(brand)
    if act not in ("launch", "stop", "restart", "delete"):
        raise ValueError(f"aksi tidak dikenal: {act}")
    if act == "delete" and "delete" not in CAPS[brand]:
        raise ValueError(f"{LABEL[brand]} tidak punya CLI untuk hapus instance")
    _need_index(brand, index)

    if brand == "mumu":
        if act == "delete":
            return _mumu([x, "delete", "-v", str(index)])
        verb = {"launch": "launch", "stop": "shutdown", "restart": "restart"}[act]
        if act == "launch":
            _spawn([x, "control", "-v", str(index), "launch"])
            return "launching"
        return _mumu([x, "control", "-v", str(index), verb])

    if brand.startswith("ld"):
        if act == "delete":
            return _run([x, "remove", "--index", str(index)]) or "ok"
        verb = {"launch": "launch", "stop": "quit", "restart": "reboot"}[act]
        if act == "launch":
            _spawn([x, "launch", "--index", str(index)])
            return "launching"
        return _run([x, verb, "--index", str(index)]) or "ok"

    if brand == "memu":
        if act == "delete":
            return _memu([x, "remove", "-i", str(index)])
        verb = {"launch": "start", "stop": "stop", "restart": "reboot"}[act]
        if act == "launch":
            _spawn([x, "start", "-i", str(index)])
            return "launching"
        return _memu([x, verb, "-i", str(index)])

    if brand == "nox":
        if act == "delete":
            return _run([x, "remove", f"-index:{index}"]) or "ok"
        verb = {"launch": "launch", "stop": "quit", "restart": "reboot"}[act]
        if act == "launch":
            _spawn([x, "launch", f"-index:{index}"])
            return "launching"
        return _run([x, verb, f"-index:{index}"]) or "ok"

    if brand == "bs":
        name = index  # BlueStacks keys instances by name
        if act == "launch":
            _spawn([x, "--instance", str(name)])
            return "launching"
        killed = 0
        for pid, cl in _bs_procs():
            if _bs_inst(cl) == name:
                _run(["taskkill", "/PID", pid, "/F"], 15)
                killed += 1
        if act == "restart":
            _spawn([x, "--instance", str(name)])
            return "restarting"
        return f"stopped {killed}" if killed else "already stopped"
    return "ok"


# Android version choices per brand (value -> label). LD/BS are fixed by the installer.
VERSIONS = {
    "mumu": [("auto", "Auto"), ("12", "Android 12"), ("15", "Android 15")],
    "memu": [("44", "Android 4.4"), ("51", "Android 5.1"), ("71", "Android 7.1"),
             ("76", "Android 7.1 (64-bit)"), ("90", "Android 9"), ("96", "Android 9 (64-bit)"),
             ("120", "Android 12")],
    "nox": [("4", "Android 4.4"), ("5", "Android 5.1"), ("7", "Android 7.1")],
}


def _name_new(brand, before, name):
    """MuMu/MEmu create & clone take no name: rename whichever index appeared. Returns ' (index N)' for the message."""
    new = sorted({i["index"] for i in listing(brand)} - before)
    if not new:
        return ""
    if name:
        rename(brand, new[-1], name)
    return f" (index {new[-1]})"


def create(brand, name=None, ver=None):
    """New instance. ver = Android version choice. MuMu/MEmu get the name via a follow-up rename."""
    x = _x(brand)
    if "create" not in CAPS[brand]:
        raise ValueError(f"{LABEL[brand]} tidak bisa buat instance via CLI (pakai Multi-Instance Manager)")
    ver = ver or None
    valid = {v for v, _ in VERSIONS.get(brand, [])}
    if ver and ver not in valid:
        raise ValueError(f"versi Android tidak valid untuk {LABEL[brand]}: {ver}")
    before = {i["index"] for i in listing(brand)} if brand in ("mumu", "memu") else set()
    if brand == "mumu":
        out = _mumu([x, "create", "-n", "1"] + (["-ver", ver] if ver else []))
    elif brand.startswith("ld"):
        out = _run([x, "add", "--name", name or "Inceptor"])  # LD version is fixed per install
    elif brand == "memu":
        out = _memu([x, "create"] + ([ver] if ver else []))
    else:  # nox
        out = _run([x, "add", f"-name:{name or 'Inceptor'}"] + ([f"-systemtype:{ver}"] if ver else []))
    time.sleep(1.5)  # ponytail: CLI add lags behind its own list; let it settle before the caller re-lists
    if brand in ("mumu", "memu"):
        return "ok" + _name_new(brand, before, name)
    return out or "ok"


# ---------------- settings / template ----------------
# Canonical fields a template can set (same names in UI, API, MCP):
#   cpu memory width height dpi manufacturer model imei androidid mac phonenumber
# imei/androidid/mac accept "auto" on LD/MEmu to randomize. Brands differ in coverage.
SETTING_FIELDS = ["cpu", "memory", "width", "height", "dpi",
                  "manufacturer", "model", "imei", "androidid", "mac", "phonenumber"]
SETTING_CAPS = {b: set(SETTING_FIELDS) for b in ("mumu", "ld9", "ld14", "ld4", "memu")}
SETTING_CAPS["mumu"] = {"cpu", "memory", "width", "height", "dpi", "manufacturer", "model", "imei", "phonenumber"}
SETTING_CAPS["nox"] = set()
SETTING_CAPS["bs"] = set()


def _clean(settings):
    """Keep only known, non-empty fields; coerce numerics (readable ValueError instead of int()'s message)."""
    out = {}
    for k in SETTING_FIELDS:
        v = settings.get(k)
        if v in (None, ""):
            continue
        if k in ("cpu", "memory", "width", "height", "dpi"):
            try:
                out[k] = int(v)
            except (TypeError, ValueError):
                raise ValueError(f"{k} harus angka") from None
            if out[k] <= 0:
                raise ValueError(f"{k} harus lebih dari 0")
        else:
            out[k] = str(v)
    return out


def apply_settings(brand, index, settings):
    """Apply a template of settings to one instance. Returns 'ok (fields)'; raises on failure."""
    x = _x(brand)
    caps = SETTING_CAPS.get(brand, set())
    if not caps:
        raise ValueError(f"{LABEL[brand]} tidak mendukung ubah setting via CLI")
    s = {k: v for k, v in _clean(settings).items() if k in caps}
    if not s:
        raise ValueError("tidak ada setting yang didukung untuk diterapkan")
    _need_index(brand, index)
    done = "ok (" + ", ".join(sorted(s)) + ")"

    if brand.startswith("ld"):
        res = {"width", "height", "dpi"} & s.keys()
        if res and res != {"width", "height", "dpi"}:
            raise ValueError("LDPlayer butuh width + height + dpi sekaligus")
        args = [x, "modify", "--index", str(index)]
        if res:
            args += ["--resolution", f"{s['width']},{s['height']},{s['dpi']}"]
        for k, flag in (("cpu", "--cpu"), ("memory", "--memory"), ("manufacturer", "--manufacturer"),
                        ("model", "--model"), ("imei", "--imei"), ("androidid", "--androidid"),
                        ("mac", "--mac"), ("phonenumber", "--pnumber")):
            if k in s:
                args += [flag, str(s[k])]
        out = _run(args)  # ldconsole modify normally prints nothing; surface anything it does say
        return f"{done}: {out}" if out else done

    if brand == "memu":
        kv = {"cpu": "cpus", "memory": "memory", "width": "resolution_width", "height": "resolution_height",
              "dpi": "vbox_dpi", "manufacturer": "manufacturer", "model": "model", "imei": "imei",
              "androidid": "androidid", "mac": "mac_address", "phonenumber": "phonenumber"}
        if {"width", "height"} & s.keys():
            _memu([x, "setconfig", "-i", str(index), "is_customed_resolution", "1"])
        for k, v in s.items():
            _memu([x, "setconfig", "-i", str(index), kv[k], str(v)])
        return done

    # mumu
    kv = {"cpu": "performance_cpu.custom", "memory": "performance_mem.custom",
          "width": "resolution_width.custom", "height": "resolution_height.custom",
          "dpi": "resolution_dpi.custom", "manufacturer": "phone_brand", "model": "phone_model",
          "imei": "phone_imei", "phonenumber": "phone_number"}
    args = [x, "setting", "-v", str(index)]
    if {"width", "height"} & s.keys():
        args += ["-k", "resolution_mode", "-val", "custom"]
    for k, v in s.items():
        args += ["-k", kv[k], "-val", str(v)]
    _mumu(args)
    return done


def rename(brand, index, name):
    x = _x(brand)
    if brand == "bs":
        raise ValueError(f"{LABEL[brand]} tidak mendukung rename via CLI")
    _need_index(brand, index)
    if brand == "mumu":
        return _mumu([x, "rename", "-v", str(index), "-n", name])
    if brand.startswith("ld"):
        return _run([x, "rename", "--index", str(index), "--title", name]) or "ok"
    if brand == "memu":
        return _memu([x, "rename", "-i", str(index), name])
    return _run([x, "rename", f"-index:{index}", f"-title:{name}"]) or "ok"  # nox


def clone(brand, index, name=None):
    x = _x(brand)
    if brand == "bs":
        raise ValueError(f"{LABEL[brand]} tidak mendukung clone via CLI")
    _need_index(brand, index)
    before = {i["index"] for i in listing(brand)} if brand in ("mumu", "memu") else set()
    if brand == "mumu":
        out = _mumu([x, "clone", "-v", str(index)])
    elif brand.startswith("ld"):
        out = _run([x, "copy", "--name", name or "Inceptor-clone", "--from", str(index)])
    elif brand == "memu":
        out = _memu([x, "clone", "-i", str(index)])
    else:  # nox
        out = _run([x, "copy", f"-name:{name or 'Inceptor-clone'}", f"-from:{index}"])
    time.sleep(1.5)
    if brand in ("mumu", "memu"):
        return "ok" + _name_new(brand, before, name)
    return out or "ok"


if __name__ == "__main__":  # ponytail: smoke check against whatever is installed
    import pprint
    print("installed:", [b["brand"] for b in installed()])
    pprint.pp(list_all())
