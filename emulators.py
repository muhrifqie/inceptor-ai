"""Emulator lifecycle per brand via each vendor's own CLI.

Thin wrappers over the installed console binaries (all verified on this host):
  MuMu 12     MuMuManager.exe  info -v all | control -v N launch|shutdown|restart | create -n 1 | delete -v N
  LDPlayer    ldconsole.exe    list2 | launch|quit|reboot --index N | add --name X | remove --index N
  MEmu        memuc.exe        listvms | start|stop|reboot -i N | create | remove -i N
  Nox         NoxConsole.exe   list | launch|quit|reboot -index:N | add -name:X | remove -index:N
  BlueStacks  HD-Player.exe --instance NAME (launch only; no create/delete CLI)
"""
import json
import os
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


def exe(brand):
    return next((p for p in CANDIDATES.get(brand, []) if Path(p).is_file()), None)


def installed():
    """[{brand, label, path}] for every brand whose CLI is present."""
    return [{"brand": b, "label": LABEL[b], "path": p}
            for b in LABEL if (p := exe(b))]


def _run(args, timeout=60):
    r = subprocess.run(args, capture_output=True, timeout=timeout, creationflags=NO_WINDOW)
    return (r.stdout + r.stderr).decode(errors="replace").strip()


def _spawn(args):
    """Launch can block until Android boots on some CLIs -> detach."""
    subprocess.Popen(args, creationflags=NO_WINDOW, stdout=subprocess.DEVNULL,
                     stderr=subprocess.DEVNULL, stdin=subprocess.DEVNULL)


# ---------------- listing ----------------
def _list_mumu(x):
    data = json.loads(_run([x, "info", "-v", "all"]) or "{}")
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
    for ln in _run([x, "list2"]).splitlines():
        f = ln.split(",")
        if len(f) >= 6 and f[0].isdigit():
            i = int(f[0])
            out.append({"index": i, "name": f[1], "running": f[5] not in ("", "-1", "0"),
                        "booted": f[4] == "1", "adb": f"127.0.0.1:{5555 + 2 * i}"})
    return out


def _list_memu(x):  # index,title,window_handle,status,pid
    out = []
    for ln in _run([x, "listvms"]).splitlines():
        f = ln.split(",")
        if len(f) >= 4 and f[0].isdigit():
            i = int(f[0])
            running = (len(f) > 3 and f[3] == "1") or (len(f) > 4 and f[4] not in ("", "0"))
            out.append({"index": i, "name": f[1], "running": running,
                        "booted": len(f) > 3 and f[3] == "1", "adb": f"127.0.0.1:{21503 + 10 * i}"})
    return out


def _list_nox(x):  # list only works when Nox is running; fall back to the VM folder
    txt = _run([x, "list"])
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
    vms = Path(x).parent / "BignoxVMS"  # offline fallback: name per folder, index unknown
    if vms.is_dir():
        for i, d in enumerate(sorted(p.name for p in vms.iterdir() if p.is_dir())):
            out.append({"index": None, "name": d, "running": False, "booted": False, "adb": None})
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
    running = {name for _, cl in _bs_procs() for name in inst if f"--instance {name}" in cl or f'--instance "{name}"' in cl}
    out = []
    for name, v in inst.items():
        out.append({"index": name, "name": v.get("display_name") or name, "running": name in running,
                    "booted": None, "adb": f"127.0.0.1:{v['adb_port']}" if v.get("adb_port") else None})
    return out


def _bs_procs():
    """[(pid, cmdline)] of HD-Player.exe — only needed to detect/stop BlueStacks instances."""
    out = _run(["powershell", "-NoProfile", "-Command",
                "Get-CimInstance Win32_Process -Filter \"Name='HD-Player.exe'\" | "
                "ForEach-Object { \"$($_.ProcessId)`t$($_.CommandLine)\" }"], 20)
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
    """Every installed brand with its instances + capabilities."""
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
def _ld_cmd(x, verb, index):  # launch|quit|reboot --index N
    return _run([x, verb, "--index", str(index)])


def action(brand, index, act):
    """act in launch|stop|restart|delete. Returns a status string."""
    x = exe(brand)
    if not x:
        return f"{LABEL.get(brand, brand)} tidak terpasang"
    if act not in ("launch", "stop", "restart", "delete"):
        return f"aksi tidak dikenal: {act}"
    if act == "delete" and "delete" not in CAPS[brand]:
        return f"{LABEL[brand]} tidak punya CLI untuk hapus instance"

    if brand == "mumu":
        if act == "delete":
            return _run([x, "delete", "-v", str(index)]) or "ok"
        verb = {"launch": "launch", "stop": "shutdown", "restart": "restart"}[act]
        if act == "launch":
            _spawn([x, "control", "-v", str(index), "launch"])
            return "launching"
        return _run([x, "control", "-v", str(index), verb]) or "ok"

    if brand.startswith("ld"):
        if act == "delete":
            return _run([x, "remove", "--index", str(index)]) or "ok"
        verb = {"launch": "launch", "stop": "quit", "restart": "reboot"}[act]
        if act == "launch":
            _spawn([x, "launch", "--index", str(index)])
            return "launching"
        return _ld_cmd(x, verb, index) or "ok"

    if brand == "memu":
        if act == "delete":
            return _run([x, "remove", "-i", str(index)]) or "ok"
        verb = {"launch": "start", "stop": "stop", "restart": "reboot"}[act]
        if act == "launch":
            _spawn([x, "start", "-i", str(index)])
            return "launching"
        return _run([x, verb, "-i", str(index)]) or "ok"

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
        if act in ("stop", "restart"):
            killed = 0
            for pid, cl in _bs_procs():
                if f"--instance {name}" in cl or f'--instance "{name}"' in cl:
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


def create(brand, name=None, ver=None):
    """New instance. name used where the CLI supports naming (LD/Nox). ver = Android version choice."""
    x = exe(brand)
    if not x:
        return f"{LABEL.get(brand, brand)} tidak terpasang"
    if "create" not in CAPS[brand]:
        return f"{LABEL[brand]} tidak bisa buat instance via CLI (pakai Multi-Instance Manager)"
    ver = ver or None
    valid = {v for v, _ in VERSIONS.get(brand, [])}
    if ver and ver not in valid:
        return f"versi Android tidak valid untuk {LABEL[brand]}: {ver}"
    if brand == "mumu":
        out = _run([x, "create", "-n", "1"] + (["-ver", ver] if ver else []))
    elif brand.startswith("ld"):
        out = _run([x, "add", "--name", name or "Inceptor"])  # LD version is fixed per install
    elif brand == "memu":
        out = _run([x, "create"] + ([ver] if ver else []))
    elif brand == "nox":
        out = _run([x, "add", f"-name:{name or 'Inceptor'}"] + ([f"-systemtype:{ver}"] if ver else []))
    else:
        out = ""
    time.sleep(1.5)  # ponytail: CLI add lags behind its own list; let it settle before the caller re-lists
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
    """Keep only known, non-empty fields; coerce numerics."""
    out = {}
    for k in SETTING_FIELDS:
        v = settings.get(k)
        if v in (None, ""):
            continue
        if k in ("cpu", "memory", "width", "height", "dpi"):
            out[k] = int(v)
        else:
            out[k] = str(v)
    return out


def apply_settings(brand, index, settings):
    """Apply a template of settings to one instance. Returns a status string."""
    x = exe(brand)
    if not x:
        return f"{LABEL.get(brand, brand)} tidak terpasang"
    caps = SETTING_CAPS.get(brand, set())
    if not caps:
        return f"{LABEL[brand]} tidak mendukung ubah setting via CLI"
    s = {k: v for k, v in _clean(settings).items() if k in caps}
    if not s:
        return "tidak ada setting yang didukung untuk diterapkan"

    if brand.startswith("ld"):
        args = [x, "modify", "--index", str(index)]
        if {"width", "height", "dpi"} <= s.keys():
            args += ["--resolution", f"{s['width']},{s['height']},{s['dpi']}"]
        for k, flag in (("cpu", "--cpu"), ("memory", "--memory"), ("manufacturer", "--manufacturer"),
                        ("model", "--model"), ("imei", "--imei"), ("androidid", "--androidid"),
                        ("mac", "--mac"), ("phonenumber", "--pnumber")):
            if k in s:
                args += [flag, str(s[k])]
        return _run(args) or "ok"

    if brand == "memu":
        kv = {"cpu": "cpus", "memory": "memory", "width": "resolution_width", "height": "resolution_height",
              "dpi": "vbox_dpi", "manufacturer": "manufacturer", "model": "model", "imei": "imei",
              "androidid": "androidid", "mac": "mac_address", "phonenumber": "phonenumber"}
        if {"width", "height"} & s.keys():
            _run([x, "setconfig", "-i", str(index), "is_customed_resolution", "1"])
        msgs = [_run([x, "setconfig", "-i", str(index), kv[k], str(v)]) for k, v in s.items()]
        return "ok (" + ", ".join(sorted(s)) + ")" if all("ERROR" not in m for m in msgs) else " | ".join(msgs)

    if brand == "mumu":
        kv = {"cpu": "performance_cpu.custom", "memory": "performance_mem.custom",
              "width": "resolution_width.custom", "height": "resolution_height.custom",
              "dpi": "resolution_dpi.custom", "manufacturer": "phone_brand", "model": "phone_model",
              "imei": "phone_imei", "phonenumber": "phone_number"}
        args = [x, "setting", "-v", str(index)]
        if {"width", "height"} & s.keys():
            args += ["-k", "resolution_mode", "-val", "custom"]
        for k, v in s.items():
            args += ["-k", kv[k], "-val", str(v)]
        out = _run(args)
        try:
            return "ok" if json.loads(out).get("errcode") == 0 else out
        except Exception:  # noqa: BLE001
            return out or "ok"
    return "ok"


def rename(brand, index, name):
    x = exe(brand)
    if not x:
        return f"{LABEL.get(brand, brand)} tidak terpasang"
    if brand == "mumu":
        return _run([x, "rename", "-v", str(index), "-n", name]) or "ok"
    if brand.startswith("ld"):
        return _run([x, "rename", "--index", str(index), "--title", name]) or "ok"
    if brand == "memu":
        return _run([x, "rename", "-i", str(index), name]) or "ok"
    if brand == "nox":
        return _run([x, "rename", f"-index:{index}", f"-title:{name}"]) or "ok"
    return f"{LABEL[brand]} tidak mendukung rename via CLI"


def clone(brand, index, name=None):
    x = exe(brand)
    if not x:
        return f"{LABEL.get(brand, brand)} tidak terpasang"
    if brand == "mumu":
        out = _run([x, "clone", "-v", str(index)])
    elif brand.startswith("ld"):
        out = _run([x, "copy", "--name", name or "Inceptor-clone", "--from", str(index)])
    elif brand == "memu":
        out = _run([x, "clone", "-i", str(index)])
    elif brand == "nox":
        out = _run([x, "copy", f"-name:{name or 'Inceptor-clone'}", f"-from:{index}"])
    else:
        return f"{LABEL[brand]} tidak mendukung clone via CLI"
    time.sleep(1.5)
    return out or "ok"


if __name__ == "__main__":  # ponytail: smoke check against whatever is installed
    import pprint
    print("installed:", [b["brand"] for b in installed()])
    pprint.pp(list_all())
