"""Android Inceptor - local ADB bridge for inspecting emulator/device UI hierarchy.

Run: python server.py [port]   -> open http://127.0.0.1:8765
Needs only `adb` on PATH. No third-party deps.
"""
import csv
import json
import os
import shutil
import re
import socket
import subprocess
import sys
import threading
import time
import xml.etree.ElementTree as ET
from concurrent.futures import ThreadPoolExecutor
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlparse

import emulators

ROOT = Path(__file__).parent
# Common emulator ADB ports on localhost (MuMu, LDPlayer, Nox, MEmu, BlueStacks).
EMU_PORTS = [5555, 5557, 5559, 5561, 5563, 5565, 5575, 5585, 7555,
             16384, 16416, 16448, 16480, 16512, 21503, 21513, 62001, 62025, 62026]
NO_WINDOW = 0x08000000 if sys.platform == "win32" else 0


def adb(*args, serial=None, timeout=20, binary=False, check=True):
    cmd = ["adb"] + (["-s", serial] if serial else []) + list(args)
    r = subprocess.run(cmd, capture_output=True, timeout=timeout, creationflags=NO_WINDOW)
    if binary:
        if r.returncode != 0:
            raise RuntimeError(r.stderr.decode(errors="replace").strip() or "adb failed")
        return r.stdout
    out = (r.stdout + r.stderr).decode(errors="replace").strip()
    if check and r.returncode != 0:
        raise RuntimeError(out or "adb failed")
    return out


# Emulator brand from the process that owns the ADB port (exact, unlike guessing from port numbers: 5555 is BlueStacks AND LDPlayer).
BRANDS = [("mumu", "MuMu", r"mumu|nemu"), ("ld", "LDPlayer", r"^ld|dnplayer"), ("memu", "MEmu", r"memu"),
          ("nox", "Nox", r"nox"), ("bs", "BlueStacks", r"^hd-|bluestacks|bstk"), ("avd", "Android Emulator", r"qemu")]


def brand_of(proc):
    for k, n, rx in BRANDS:
        if proc and re.search(rx, proc, re.I):
            return {"k": k, "n": n}
    return None


_lis = (0.0, [])


def listeners(max_age=0):
    """[(ip, port, process, pid)] of listening IPv4 TCP sockets. Windows only (netstat + tasklist); [] elsewhere.
    netstat + tasklist cost ~1.4s, so callers on hot paths pass max_age to reuse the last result."""
    global _lis
    if time.time() - _lis[0] < max_age:
        return _lis[1]
    if sys.platform != "win32":
        return []
    try:
        run = lambda *c: subprocess.run(c, capture_output=True, timeout=8, creationflags=NO_WINDOW).stdout.decode(errors="replace")
        ns, tl = run("netstat", "-ano", "-p", "TCP"), run("tasklist", "/FO", "CSV", "/NH")
    except Exception:  # noqa: BLE001
        return []
    names = {r[1]: r[0].removesuffix(".exe") for r in csv.reader(tl.splitlines()) if len(r) > 1 and r[1].isdigit()}
    out = []
    for line in ns.splitlines():
        f = line.split()
        # listening rows have foreign address 0.0.0.0:0 (the state word itself is localized on some Windows languages)
        if len(f) == 5 and f[0] == "TCP" and f[2] == "0.0.0.0:0":
            ip, _, port = f[1].rpartition(":")
            out.append((ip, int(port), names.get(f[4], ""), f[4]))
    _lis = (time.time(), out)
    return out


def local_ips():
    try:
        return {"127.0.0.1", "localhost", *socket.gethostbyname_ex(socket.gethostname())[2]}
    except OSError:
        return {"127.0.0.1", "localhost"}


def port_owner(serial, lis, local):
    """Process name behind an adb serial (emulator-5554 -> 127.0.0.1:5555). Exact IP bind wins over 0.0.0.0."""
    if serial.startswith("emulator-") and serial[9:].isdigit():
        host, port = "127.0.0.1", int(serial[9:]) + 1
    elif ":" in serial and serial.rsplit(":", 1)[1].isdigit():
        host, port = serial.rsplit(":", 1)[0], int(serial.rsplit(":", 1)[1])
    else:
        return ""  # USB
    if host not in local:
        return ""  # a phone over Wi-Fi, not a process on this PC
    on_port = [x for x in lis if x[1] == port]
    exact = [x for x in on_port if x[0] == ("127.0.0.1" if host == "localhost" else host)]
    anyip = [x for x in on_port if x[0] == "0.0.0.0"]
    return (exact or anyip or [("", 0, "", "")])[0][2]


def boot_id(serial):
    try:
        return adb("shell", "cat", "/proc/sys/kernel/random/boot_id", serial=serial, timeout=4).strip()
    except Exception:  # noqa: BLE001
        return serial


def list_devices():
    devs = []
    for line in adb("devices", "-l").splitlines()[1:]:
        parts = line.split()
        if len(parts) < 2 or line.startswith("*"):  # "* daemon not running; starting now..."
            continue
        info = dict(p.split(":", 1) for p in parts[2:] if ":" in p)
        devs.append({"serial": parts[0], "state": parts[1],
                     "model": info.get("model", ""), "network": ":" in parts[0]})
    # Emulators often expose one VM on several ports (MuMu: 5555/7555/16384, LD: emulator-5554 + :5555).
    # Same boot_id => same running device; keep one, list the rest as aliases.
    online = [d for d in devs if d["state"] == "device"]
    with ThreadPoolExecutor(max(1, len(online))) as ex:
        keys = dict(zip([d["serial"] for d in online], ex.map(boot_id, [d["serial"] for d in online])))
    groups = {}
    for d in devs:
        groups.setdefault(keys.get(d["serial"], d["serial"]), []).append(d)
    lis, local = listeners(30), local_ips()
    ports = {int(d["serial"][9:]) + 1 if d["serial"].startswith("emulator-") else int(d["serial"].rsplit(":", 1)[1])
             for d in devs if d["serial"].startswith("emulator-") or d["serial"].split(":")[0] in local}
    if not ports <= {x[1] for x in lis}:  # a device on a port we haven't seen yet -> refresh the cache
        lis = listeners()
    out = []
    for g in groups.values():
        # prefer USB/emulator-xxxx over tcp, then highest port (MuMu's native 16384 beats 5555/7555)
        g.sort(key=lambda d: (d["network"], -int(d["serial"].rsplit(":", 1)[-1]) if d["network"] else 0))
        brand = next((b for b in (brand_of(port_owner(d["serial"], lis, local)) for d in g) if b), None)
        out.append({**g[0], "aliases": [d["serial"] for d in g[1:]], "brand": brand})
    return out


def port_open(port):
    with socket.socket() as s:
        s.settimeout(0.25)
        return s.connect_ex(("127.0.0.1", port)) == 0


def scan():
    # Drop stuck/stale "offline" tcp entries (emulator closed, or connected before adbd was up); open ports reconnect below.
    for line in adb("devices").splitlines()[1:]:
        parts = line.split()
        if len(parts) == 2 and parts[1] == "offline" and ":" in parts[0]:
            adb("disconnect", parts[0], check=False)
    with ThreadPoolExecutor(len(EMU_PORTS)) as ex:
        open_ports = [p for p, ok in zip(EMU_PORTS, ex.map(port_open, EMU_PORTS)) if ok]
    addrs = [f"127.0.0.1:{p}" for p in open_ports]
    # Two emulators on one port (BlueStacks binds 127.0.0.1:5555, LDPlayer 0.0.0.0:5555): 127.0.0.1 always reaches the
    # exact bind, so the 0.0.0.0 one is only reachable through a non-loopback local IP.
    lis = listeners()
    lan = next((ip for ip in sorted(local_ips()) if ip[0].isdigit() and not ip.startswith("127.")), None)
    owners = {}
    for p in EMU_PORTS:
        lo = {x[3] for x in lis if x[1] == p and x[0] == "127.0.0.1"}
        anyip = {x[3] for x in lis if x[1] == p and x[0] == "0.0.0.0"}
        names = [brand_of(x[2])["n"] if brand_of(x[2]) else x[2] for x in lis if x[1] == p and x[0] in ("127.0.0.1", "0.0.0.0")]
        if names:
            owners[p] = " + ".join(dict.fromkeys(names))
        if lan and lo and anyip and lo != anyip:
            addrs.append(f"{lan}:{p}")
    results = []
    for a in addrs:
        try:
            results.append({"addr": a, "msg": adb("connect", a, timeout=5)})
        except Exception as e:  # noqa: BLE001
            results.append({"addr": a, "msg": str(e)})
    return {"scanned": EMU_PORTS, "open": open_ports, "owners": owners, "results": results, "devices": list_devices()}


def node_to_dict(el):
    a = el.attrib
    m = re.findall(r"\d+", a.get("bounds", ""))
    return {
        "cls": a.get("class", el.tag),
        "attrs": {k: v for k, v in a.items() if k != "bounds"},
        "bounds": [int(x) for x in m] if len(m) == 4 else None,
        "children": [node_to_dict(c) for c in el if c.tag == "node"],
    }


def dump_xml(serial):
    path = "/sdcard/window_dump.xml"
    last = ""
    for _ in range(3):  # dump fails sometimes on animated screens ("could not get idle state")
        last = adb("shell", "uiautomator", "dump", path, serial=serial, timeout=30, check=False)
        if "dumped to" in last.lower():
            return adb("exec-out", "cat", path, serial=serial, binary=True)
    raise RuntimeError(last)


def current_activity(serial):
    # Android 10+ lists the focus under "displays"; Android 9 and older (MEmu, LDPlayer 9, Nox 7) only under "windows".
    for section in ("displays", "windows"):
        try:
            out = adb("shell", "dumpsys", "window", section, serial=serial, timeout=10)
        except Exception:  # noqa: BLE001
            continue
        m = re.search(r"mCurrentFocus=Window\{\S+ \S+ ([^}\s]+)\}", out) or \
            re.search(r"mFocusedApp=.*? ([\w.]+/[\w.$]+)", out)
        if m:
            return m.group(1)
    return ""


def parse_intent(s):
    """'act=X cat=[A,B] flg=0x.. cmp=pkg/.Cls dat=.. typ=..' (dumpsys Intent{...} body) -> intent dict + toUri(0) string."""
    g = lambda k: (re.search(rf"(?:^|\s){k}=(\S+)", s) or [None, None])[1]
    cats = re.search(r"cat=\[([^\]]*)\]", s)
    cmp, act, flg, dat, typ, pkg = g("cmp"), g("act"), g("flg"), g("dat"), g("typ"), g("pkg")
    comp = None
    if cmp and "/" in cmp:
        p, c = cmp.split("/", 1)
        comp = {"packageName": p, "className": p + c if c.startswith(".") else c}
    it = {"action": act, "component": comp, "categories": [x.strip() for x in cats.group(1).split(",")] if cats else [],
          "flags": flg, "data": dat, "type": typ, "package": pkg, "has_extras": "(has extras)" in s}
    # Intent.toUri(0) layout: [data]#Intent;action=;category=;type=;launchFlags=;package=;component=;end ('=' and ';' escaped)
    enc = lambda v: v.replace("%", "%25").replace(";", "%3B").replace("=", "%3D")
    parts = ([f"action={enc(act)}"] if act else []) + [f"category={enc(c)}" for c in it["categories"]] \
        + ([f"type={enc(typ)}"] if typ else []) + ([f"launchFlags={flg}"] if flg else []) \
        + ([f"package={enc(pkg)}"] if pkg and not comp else [])
    if comp:
        p, c = comp["packageName"], comp["className"]
        parts.append(f"component={p}/{c[len(p):] if c.startswith(p + '.') else c}")
    it["intent_uri"] = (dat or "") + "#Intent;" + "".join(x + ";" for x in parts) + "end"
    return it


def current_intent(serial):
    """Foreground app + the Intent that started its resumed activity (from `dumpsys activity activities`),
    shaped like Shortcut Maker's export: action, component{packageName,className}, categories, flags, intent_uri."""
    out = adb("shell", "dumpsys", "activity", "activities", serial=serial, timeout=15, check=False)
    m = re.search(r"(?:topResumedActivity=|mResumedActivity: |ResumedActivity: )ActivityRecord\{(\w+) u\d+ ([^\s}]+)", out)
    if not m:
        raise RuntimeError("no resumed activity (screen off or locked?)")
    rec, comp = m.groups()
    lines, body = out.splitlines(), None
    for i, line in enumerate(lines):  # the record's own block: its "Intent { ... }" sits a few lines below it
        if "ActivityRecord{" + rec in line and "Resumed" not in line:
            for nxt in lines[i + 1:i + 10]:
                im = re.search(r"Intent \{ (.*) \}\s*$", nxt)
                if im:
                    body = im.group(1)
                    break
        if body:
            break
    it = parse_intent(body or "cmp=" + comp)
    pkg = it["component"]["packageName"] if it["component"] else comp.split("/")[0]
    info = adb("shell", f"dumpsys package {pkg} | grep -m3 -E 'versionName=|versionCode='", serial=serial, check=False)
    launch = adb("shell", "cmd", "package", "resolve-activity", "--brief", "-a", "android.intent.action.MAIN",
                 "-c", "android.intent.category.LAUNCHER", pkg, serial=serial, check=False).strip().splitlines()
    vn, vc = re.search(r"versionName=(\S+)", info), re.search(r"versionCode=(\d+)", info)
    it["app"] = {"packageName": pkg, "versionName": vn and vn.group(1), "versionCode": vc and int(vc.group(1)),
                 "launcherActivity": launch[-1] if launch and "/" in launch[-1] else None}
    c = it["component"]
    it["activity"] = comp
    # ready-to-run reproductions (extras can't be read from dumpsys, has_extras tells when some are missing)
    it["am_start"] = "adb shell am start" + (f" -a {it['action']}" if it["action"] else "") \
        + "".join(f" -c {x}" for x in it["categories"]) + (f" -f {it['flags']}" if it["flags"] else "") \
        + (f" -d '{it['data']}'" if it["data"] else "") + (f" -t {it['type']}" if it["type"] else "") \
        + (f" -n {comp}" if c else f" {pkg}")
    it["u2"] = f'd.app_start("{pkg}", "{c["className"]}")' if c else f'd.app_start("{pkg}")'
    return it


APK_CACHE = ROOT / ".apkcache"  # pulled base.apk + extracted icons, keyed by package-versionCode
# Per-package locks (not one global lock) so icons for different apps extract in parallel; the semaphore bounds a
# list's burst of concurrent /api/appicon requests.
_pkg_locks = {}
_pkg_locks_g = threading.Lock()
_icon_sem = threading.Semaphore(8)


def _pkg_lock(pkg):
    with _pkg_locks_g:
        return _pkg_locks.setdefault(pkg, threading.Lock())


_warm_pool = ThreadPoolExecutor(8)  # extract icons 8-at-a-time server-side, past the browser's ~6-connection limit
_warming = set()


def warm_icons(serial, pkgs):
    """Fire-and-forget: pre-extract icons in parallel so the browser's <img> requests become instant cache hits."""
    def go(pk):
        try:
            app_icon(serial, pk)
        except Exception:  # noqa: BLE001
            pass
        finally:
            _warming.discard((serial, pk))
    for pk in pkgs:
        key = (serial, pk)
        if key not in _warming:
            _warming.add(key)
            _warm_pool.submit(go, pk)


def _pkg(p):
    if not re.fullmatch(r"[A-Za-z0-9_.]+", p or ""):
        raise ValueError("bad package name")
    return p


def _comp(pkg, activity):
    """pkg + activity -> 'pkg/fully.qualified.Activity' (activity may be short '.Foo', bare, or already 'pkg/...')."""
    if not activity:
        return None
    if "/" in activity:
        if not re.fullmatch(r"[A-Za-z0-9_.]+/[A-Za-z0-9_.$]+", activity):
            raise ValueError("bad component")
        return activity
    if not re.fullmatch(r"[A-Za-z0-9_.$]+", activity):
        raise ValueError("bad activity")
    return f"{pkg}/{activity}"


def _shq(v):
    return "'" + str(v).replace("'", "'\\''") + "'"


def pkg_version(serial, pkg):
    out = adb("shell", f"dumpsys package {_pkg(pkg)} | grep -m2 -E 'versionName=|versionCode='", serial=serial, check=False)
    vn, vc = re.search(r"versionName=(\S+)", out), re.search(r"versionCode=(\d+)", out)
    return (vn.group(1) if vn else None, int(vc.group(1)) if vc else 0)


def _launchers(serial):
    """package -> 'package/LauncherActivity' for everything with a MAIN/LAUNCHER activity."""
    out = adb("shell", "cmd", "package", "query-activities", "--brief", "-a", "android.intent.action.MAIN",
              "-c", "android.intent.category.LAUNCHER", serial=serial, check=False)
    m = {}
    for a in re.findall(r"([A-Za-z0-9_.]+/[A-Za-z0-9_.$]+)", out):
        m.setdefault(a.split("/")[0], a)
    return m


def list_apps(serial, kind="user"):
    """kind: user | system | all. [{package, versionCode, system, enabled, launchable, launcher}], launchable first."""
    sset = {l.split(":")[-1] for l in adb("shell", "pm", "list", "packages", "-s", serial=serial).splitlines() if ":" in l}
    dset = {l.split(":")[-1] for l in adb("shell", "pm", "list", "packages", "-d", serial=serial, check=False).splitlines() if ":" in l}
    launch = _launchers(serial)
    flag = {"user": ["-3"], "system": ["-s"], "all": []}[kind]
    out = adb("shell", "pm", "list", "packages", "--show-versioncode", *flag, serial=serial)
    apps = []
    for line in out.splitlines():
        m = re.match(r"package:(\S+?)(?:\s+versionCode:(\d+))?\s*$", line.strip())
        if not m:
            continue
        pk = m.group(1)
        apps.append({"package": pk, "versionCode": int(m.group(2)) if m.group(2) else 0,
                     "system": pk in sset, "enabled": pk not in dset,
                     "launchable": pk in launch, "launcher": launch.get(pk)})
    apps.sort(key=lambda a: (not a["launchable"], a["package"]))
    return apps


def _apk_device_path(serial, pkg):
    paths = adb("shell", "pm", "path", _pkg(pkg), serial=serial).splitlines()
    return next((l.split(":", 1)[1].strip() for l in paths if l.startswith("package:")), None)


def _pull_apk(serial, pkg):
    vn, vc = pkg_version(serial, pkg)
    APK_CACHE.mkdir(exist_ok=True)
    dst = APK_CACHE / f"{pkg}-{vc}.apk"
    if not dst.exists():
        base = _apk_device_path(serial, pkg)
        if not base:
            raise RuntimeError("apk path not found")
        adb("pull", base, str(dst), serial=serial, timeout=180)  # direct subprocess: no shell path mangling
    return dst, vn, vc


def _icon_fast(serial, pkg, out):
    """Grab just the launcher PNG/WebP straight out of the on-device apk via `unzip -p` — no multi-MB pull, no parse.
    Works for apps whose icon keeps a conventional name (most of them); returns False so the slow path handles the rest."""
    try:
        apk = _apk_device_path(serial, pkg)
        if not apk:
            return False
        # list only the raster drawables/mipmaps, filtered on-device so the transfer stays tiny
        cmd = f"unzip -l {_shq(apk)} 2>/dev/null | grep -ioE 'res/(mipmap|drawable)[^ ]*\\.(png|webp)'"
        names = [n.strip() for n in adb("shell", cmd, serial=serial, check=False, timeout=20).splitlines() if n.strip()]
        named = [n for n in names if re.search(r"(ic[_-]?launcher|launcher|appicon|ic[_-]?app)[^/]*\.(png|webp)$", n, re.I)]
        # fall back to any mipmap raster (mipmaps hold launcher icons by convention, even under obfuscated names)
        pick = named or [n for n in names if "mipmap" in n.lower()]
        if not pick:
            return False
        pick.sort(key=lambda n: (next((w for k, w in _DENS if k in n), 0), len(n)), reverse=True)
        for n in pick[:3]:
            data = adb("exec-out", "unzip", "-p", apk, n, serial=serial, binary=True)
            if data and len(data) > 100:
                out.write_bytes(data)
                return True
    except Exception:  # noqa: BLE001
        pass
    return False


_DENS = (("xxxhdpi", 5), ("xxhdpi", 4), ("xhdpi", 3), ("hdpi", 2), ("mdpi", 1), ("nodpi", 0))


def _res_files(arsc, rid):
    """Resource id -> file paths it resolves to, highest density first (names may be obfuscated like res/3pL.webp)."""
    try:
        cfgs = arsc.get_resolved_res_configs(rid)
    except Exception:  # noqa: BLE001
        return []
    paths = [v for _, v in cfgs if isinstance(v, str) and "/" in v]
    dens = lambda n: next((w for k, w in _DENS if k in n), 0)
    return sorted(set(paths), key=dens, reverse=True)


def _raster(read, res_files, path, depth=0):
    """Resolve an icon resource to a PIL RGBA image. `read(path)->bytes` fetches a zip entry, `res_files(rid)->[paths]`
    resolves a resource id. Follows adaptive-icon XML (composites background+foreground) and <bitmap>/<inset>/<layer-list>
    wrappers; returns None only when everything in the chain is a vector."""
    import io as _io
    from PIL import Image
    from androguard.core.axml import AXMLPrinter
    if not path or depth > 4:
        return None
    if re.search(r"\.(png|webp|jpg|jpeg)$", path, re.I):
        try:
            return Image.open(_io.BytesIO(read(path))).convert("RGBA")
        except Exception:  # noqa: BLE001
            return None
    if not path.endswith(".xml"):
        return None
    try:
        root = AXMLPrinter(read(path)).get_xml_obj()
    except Exception:  # noqa: BLE001
        return None

    def ref(el, attr):
        v = el.get("{http://schemas.android.com/apk/res/android}" + attr) or el.get(attr)
        if not v:
            return None
        if v.startswith("@"):
            try:
                rid = int(v[1:], 16)
            except ValueError:
                return None
            for f in res_files(rid):
                im = _raster(read, res_files, f, depth + 1)
                if im:
                    return im
            return None
        return _raster(read, res_files, v, depth + 1)

    tag = root.tag.split("}")[-1]
    if tag == "adaptive-icon":
        layers = [c for c in root if c.tag.split("}")[-1] in ("background", "foreground")]
        layers.sort(key=lambda c: {"background": 0, "foreground": 1}.get(c.tag.split("}")[-1], 9))
        imgs = [im for im in (ref(c, "drawable") for c in layers) if im]
        if not imgs:
            return None
        size = 192
        base = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        for im in imgs:  # adaptive layers are 108dp squares drawn on top of each other; our UI masks the corners
            base = Image.alpha_composite(base, im.resize((size, size)))
        return base
    # <bitmap>, <inset>, <layer-list>, ... : grab the first drawable/src raster inside
    for el in root.iter():
        for attr in ("drawable", "src"):
            im = ref(el, attr)
            if im:
                return im
    return None


_labels = {}  # pkg -> app label (in-memory; cheap manifest+arsc stream)


def app_label(serial, pkg):
    """App's display name. Streams AndroidManifest + resources.arsc (no full apk) and resolves application android:label."""
    _pkg(pkg)
    if pkg in _labels:
        return _labels[pkg]
    lab = pkg
    try:
        from androguard.core.axml import AXMLPrinter, ARSCParser
        apk = _apk_device_path(serial, pkg)
        man = adb("exec-out", "unzip", "-p", apk, "AndroidManifest.xml", serial=serial, binary=True)
        v = AXMLPrinter(man).get_xml_obj().find("application").get("{http://schemas.android.com/apk/res/android}label")
        if v and str(v).startswith("@"):
            arsc = ARSCParser(adb("exec-out", "unzip", "-p", apk, "resources.arsc", serial=serial, binary=True))
            for _, val in arsc.get_resolved_res_configs(int(str(v)[1:], 16)):
                if isinstance(val, str) and val and not val.startswith("res/"):
                    lab = val.strip('"'); break
        elif v and not str(v).startswith("@"):
            lab = str(v)
    except Exception:  # noqa: BLE001
        pass
    _labels[pkg] = lab
    return lab


def _icon_stream(serial, pkg, out):
    """Resolve an adaptive/obfuscated icon by streaming only AndroidManifest.xml + resources.arsc + the icon's own
    entries (a few MB), never the whole 30-60MB apk. Returns:
      "ok"       wrote a PNG
      "none"     no <application android:icon> at all (most service packages) -> caller caches empty
      "fallback" has an icon but it's vector / unresolved here -> caller pulls the full apk (legacy-name fallback)."""
    import io as _io
    apk = _apk_device_path(serial, pkg)
    if not apk:
        return "fallback"
    try:
        from androguard.core.axml import AXMLPrinter, ARSCParser
        man = adb("exec-out", "unzip", "-p", apk, "AndroidManifest.xml", serial=serial, binary=True)
        app = AXMLPrinter(man).get_xml_obj().find("application")
        icon = app is not None and app.get("{http://schemas.android.com/apk/res/android}icon")
        if not icon or not str(icon).startswith("@"):
            return "none"
        rid = int(str(icon)[1:], 16)
        if (rid >> 24) != 0x7f:  # framework/shared icon (@android:...), not in this apk -> no own icon to render
            return "none"
        arsc = ARSCParser(adb("exec-out", "unzip", "-p", apk, "resources.arsc", serial=serial, binary=True))
        res_files = lambda r: _res_files(arsc, r)
        read = lambda p: adb("exec-out", "unzip", "-p", apk, p, serial=serial, binary=True)
        for p in res_files(rid):
            im = _raster(read, res_files, p)
            if im:
                if im.width > 256 or im.height > 256:
                    im = im.resize((256, 256))
                buf = _io.BytesIO()
                im.save(buf, "PNG")
                out.write_bytes(buf.getvalue())
                return "ok"
    except Exception:  # noqa: BLE001
        pass
    return "fallback"


def _icon(a, pkg, vc):
    """Render the app's launcher icon (manifest-resolved, adaptive layers composited) to a cached PNG.
    Empty cache file = "only a vector icon, nothing to rasterize" so we never reparse."""
    import io as _io
    out = APK_CACHE / f"{pkg}-{vc}.icon"
    if out.exists():
        return out if out.stat().st_size else None
    try:
        arsc = a.get_android_resources()
        path = None
        for call in (lambda: a.get_app_icon(), lambda: a.get_app_icon(max_dpi=640), lambda: a.get_app_icon(max_dpi=320)):
            try:
                path = call()
            except Exception:  # noqa: BLE001
                continue
            if path:
                break
        im = _raster(a.get_file, lambda rid: _res_files(arsc, rid), path)
        if im is None:  # manifest icon is vector-only: fall back to any legacy raster mipmap (AOSP apps ship both)
            from PIL import Image
            names = a.get_files() if hasattr(a, "get_files") else a.zip.namelist()
            cand = [n for n in names if re.search(r"(mipmap|drawable)[^/]*/[^/]*(ic_launcher|launcher|icon)[^/]*\.(png|webp)$", n, re.I)]
            cand.sort(key=lambda n: (next((w for k, w in _DENS if k in n), 0), len(n)), reverse=True)
            for n in cand:
                try:
                    im = Image.open(_io.BytesIO(a.get_file(n))).convert("RGBA")
                    break
                except Exception:  # noqa: BLE001
                    continue
        if im is not None:
            if im.width > 256 or im.height > 256:
                im = im.resize((256, 256))
            buf = _io.BytesIO()
            im.save(buf, "PNG")
            out.write_bytes(buf.getvalue())
            return out
    except Exception:  # noqa: BLE001
        pass
    out.write_bytes(b"")  # remember "no raster icon" so we don't reparse every time
    return None


def app_detail(serial, pkg):
    """Parse the apk with androguard: label, all activities (exported flag + intent-filters), permissions, deep links."""
    _pkg(pkg)
    with _pkg_lock(pkg):  # serialize only same-package work; different apps parse in parallel
        dst, vn, vc = _pull_apk(serial, pkg)
        from androguard.core.apk import APK
        try:
            from loguru import logger
            logger.remove()
        except Exception:  # noqa: BLE001
            pass
        a = APK(str(dst))
        ns = "{http://schemas.android.com/apk/res/android}"
        man = a.get_android_manifest_xml()
        acts = []
        for el in man.iter():
            if el.tag not in ("activity", "activity-alias"):
                continue
            name = el.get(ns + "name")
            if not name:
                continue
            if name.startswith("."):
                name = a.get_package() + name
            elif "." not in name:
                name = a.get_package() + "." + name
            declared = el.get(ns + "exported")
            enabled = el.get(ns + "enabled")
            filters = []
            for f in el.findall("intent-filter"):
                filters.append({
                    "actions": [x.get(ns + "name") for x in f.findall("action")],
                    "categories": [x.get(ns + "name") for x in f.findall("category")],
                    "data": [{k.split("}")[-1]: v for k, v in d.attrib.items()} for d in f.findall("data")],
                })
            acts.append({"name": name, "exported": declared == "true" or (declared is None and bool(filters)),
                         "declaredExported": declared, "enabled": enabled != "false",
                         "launcher": any("android.intent.action.MAIN" in f["actions"]
                                         and "android.intent.category.LAUNCHER" in f["categories"] for f in filters),
                         "filters": filters})
        links = []
        for act in acts:
            for f in act["filters"]:
                if "android.intent.action.VIEW" not in f["actions"]:
                    continue
                for d in f["data"]:
                    sch = d.get("scheme")
                    if sch and sch not in ("http", "https") or (sch and d.get("host")):
                        host = d.get("host", "")
                        path = d.get("pathPrefix") or d.get("path") or ""
                        links.append({"activity": act["name"], "uri": f"{sch}://{host}{path}"})
        try:
            label = a.get_app_name() or pkg
        except Exception:  # noqa: BLE001
            label = pkg
        acts.sort(key=lambda x: (not x["launcher"], not x["exported"], x["name"]))
        seen = set()
        links = [x for x in links if not (x["uri"] in seen or seen.add(x["uri"]))]
        disabled = pkg in {l.split(":")[-1] for l in adb("shell", "pm", "list", "packages", "-d", serial=serial, check=False).splitlines() if ":" in l}
        return {"package": a.get_package(), "label": label, "versionName": vn, "versionCode": vc, "enabled": not disabled,
                "activities": acts, "activityCount": len(acts), "exportedCount": sum(x["exported"] for x in acts),
                "permissions": sorted(a.get_permissions()), "deepLinks": links[:40],
                "hasIcon": _icon(a, pkg, vc) is not None}


_NS = "{http://schemas.android.com/apk/res/android}"
_actwarm = set()


def _app_acts(serial, pkg):
    """List an app's activities (name + exported/launcher + raw label ref) by streaming ONLY AndroidManifest.xml —
    no full apk pull, no arsc. Cached to .apkcache/<pkg>-<vc>.acts.json. Labels stay as @refs here; resolved lazily."""
    _pkg(pkg)
    vn, vc = pkg_version(serial, pkg)
    APK_CACHE.mkdir(exist_ok=True)
    cf = APK_CACHE / f"{pkg}-{vc}.acts.json"
    if cf.exists():
        try:
            return json.loads(cf.read_text("utf-8"))
        except Exception:  # noqa: BLE001
            pass
    out = {"package": pkg, "vc": vc, "labelRef": None, "resolved": False, "activities": []}
    try:
        from androguard.core.axml import AXMLPrinter
        apk = _apk_device_path(serial, pkg)
        xml = AXMLPrinter(adb("exec-out", "unzip", "-p", apk, "AndroidManifest.xml", serial=serial, binary=True)).get_xml_obj()
        appel = xml.find("application")
        out["labelRef"] = appel.get(_NS + "label") if appel is not None else None
        for el in xml.iter():
            if el.tag not in ("activity", "activity-alias"):
                continue
            name = el.get(_NS + "name")
            if not name:
                continue
            if name.startswith("."):
                name = pkg + name
            elif "." not in name:
                name = pkg + "." + name
            filters = el.findall("intent-filter")
            launcher = any(any(a.get(_NS + "name") == "android.intent.action.MAIN" for a in f.findall("action"))
                           and any(c.get(_NS + "name") == "android.intent.category.LAUNCHER" for c in f.findall("category"))
                           for f in filters)
            declared = el.get(_NS + "exported")
            out["activities"].append({"name": name, "labelRef": el.get(_NS + "label"),
                                      "exported": declared == "true" or (declared is None and bool(filters)),
                                      "launcher": launcher})
    except Exception:  # noqa: BLE001
        pass
    try:
        cf.write_text(json.dumps(out), "utf-8")
    except Exception:  # noqa: BLE001
        pass
    return out


def _resolve_labels(serial, pkg, refs):
    """Resolve a set of @resource label refs to strings via one streamed resources.arsc. {ref: text}."""
    refs = {r for r in refs if r and str(r).startswith("@")}
    if not refs:
        return {}
    res = {}
    try:
        from androguard.core.axml import ARSCParser
        apk = _apk_device_path(serial, pkg)
        arsc = ARSCParser(adb("exec-out", "unzip", "-p", apk, "resources.arsc", serial=serial, binary=True))
        for r in refs:
            try:
                for _, val in arsc.get_resolved_res_configs(int(str(r)[1:], 16)):
                    if isinstance(val, str) and val and not val.startswith("res/"):
                        res[r] = val.strip('"'); break
            except Exception:  # noqa: BLE001
                pass
    except Exception:  # noqa: BLE001
        pass
    return res


def warm_activities(serial, pkgs):
    """Background: pre-stream each app's manifest so the first cross-app activity search is fast."""
    def go(pk):
        try:
            _app_acts(serial, pk)
        except Exception:  # noqa: BLE001
            pass
        finally:
            _actwarm.discard((serial, pk))
    for pk in pkgs:
        k = (serial, pk)
        if k not in _actwarm:
            _actwarm.add(k)
            _warm_pool.submit(go, pk)


def _resolve_app(serial, d):
    """Resolve + cache all label refs of one app (one arsc stream), so later searches are instant & label-searchable."""
    if d.get("resolved"):
        return d
    pkg = d["package"]
    labs = _resolve_labels(serial, pkg, {d.get("labelRef")} | {a.get("labelRef") for a in d["activities"]})
    d["label"] = labs.get(d.get("labelRef")) or pkg
    for a in d["activities"]:
        a["label"] = labs.get(a.get("labelRef")) or a["name"].rsplit(".", 1)[-1]
    d["resolved"] = True
    try:
        (APK_CACHE / f"{pkg}-{d.get('vc', 0)}.acts.json").write_text(json.dumps(d), "utf-8")
    except Exception:  # noqa: BLE001
        pass
    return d


def search_activities(serial, q, kind="all", limit=80):
    """Shortcut-Maker-style: find activities across all apps by class name or resolved label, grouped by app."""
    q = (q or "").strip().lower()
    if len(q) < 2:
        return []
    toks = [w for w in q.split() if len(w) >= 2]
    big = [w for w in toks if len(w) >= 3] or toks  # tokens worth a cheap pre-filter (skip "an", "to", ...)
    if not toks:
        return []
    apps = list_apps(serial, kind)
    with ThreadPoolExecutor(8) as ex:
        details = list(ex.map(lambda a: _app_acts(serial, a["package"]), apps))
    launch = {a["package"]: a["launcher"] for a in apps}

    def act_match(a):  # every token must appear in class name OR resolved label
        hay = (a["name"] + " " + (a.get("label") or "")).lower()
        return all(w in hay for w in toks)

    groups = []
    for d in details:
        # cheap pre-filter (no arsc): a significant token hits some class name -> worth resolving labels
        if not any(w in a["name"].lower() for a in d["activities"] for w in big):
            continue
        d = _resolve_app(serial, d)  # resolve + cache this app's labels (once), enables label-text matching
        hits = [a for a in d["activities"] if act_match(a)]
        if not hits:
            continue
        hits.sort(key=lambda a: (not a["launcher"], not a["exported"], a["name"]))
        groups.append({"package": d["package"], "label": d["label"],
                       "launcher": launch.get(d["package"]), "activities": hits[:25]})
    groups.sort(key=lambda g: (not g["launcher"], g["label"].lower()))
    return groups[:limit]


def app_icon(serial, pkg):
    """Launcher icon, cached as a small file. Fast path streams one zip entry via on-device `unzip` (no multi-MB pull);
    the slow path (adaptive / obfuscated names) pulls the apk once and composites with androguard. Runs in parallel."""
    _pkg(pkg)
    vn, vc = pkg_version(serial, pkg)
    f = APK_CACHE / f"{pkg}-{vc}.icon"
    if not f.exists():  # unknown yet -> extract once (empty file = "no raster icon", so we never re-pull)
        with _icon_sem, _pkg_lock(pkg):
            if not f.exists():  # another thread may have finished while we waited for the lock
                APK_CACHE.mkdir(exist_ok=True)
                full = APK_CACHE / f"{pkg}-{vc}.apk"
                if full.exists():  # detail already pulled it: parse locally, no transfer
                    from androguard.core.apk import APK
                    _icon(APK(str(full)), pkg, vc)
                elif not _icon_fast(serial, pkg, f):  # conventional name -> one tiny zip entry, no parse
                    _icon_stream(serial, pkg, f)  # adaptive/obfuscated -> stream arsc, no full pull
                    if not f.exists():
                        f.write_bytes(b"")  # vector-only / no own raster icon: letter tile
    if not (f.exists() and f.stat().st_size):
        raise LookupError("no raster icon")
    data = f.read_bytes()
    return data, "image/webp" if data[:4] == b"RIFF" else "image/png"


def start_activity(serial, pkg, activity=None, action=None, data=None, flags=None, extras=None):
    """am start a component (or the launcher activity when activity is None). data is shell-quoted for the device."""
    comp = _comp(_pkg(pkg), activity)
    cmd = ["shell", "am", "start"]
    if action:
        if not re.fullmatch(r"[A-Za-z0-9_.]+", action):
            raise ValueError("bad action")
        cmd += ["-a", action]
    if flags:
        if not re.fullmatch(r"0x[0-9a-fA-F]+|\d+", flags):
            raise ValueError("bad flags")
        cmd += ["-f", flags]
    if data:
        cmd += ["-d", _shq(data)]
    for k, v in (extras or {}).items():
        if not re.fullmatch(r"[A-Za-z0-9_.]+", k):
            raise ValueError("bad extra key")
        cmd += ["--es", k, _shq(v)]
    if comp:
        cmd += ["-n", comp]
    elif not action:
        cmd += ["-a", "android.intent.action.MAIN", "-c", "android.intent.category.LAUNCHER"]
        comp = _launchers(serial).get(pkg)
        if comp:
            cmd += ["-n", comp]
    out = adb(*cmd, serial=serial, check=False, timeout=15)
    if "Error" in out or "Exception" in out:
        raise RuntimeError(out.strip().splitlines()[-1] if out.strip() else "am start failed")
    return {"component": comp, "out": out.strip()}


def app_manage(serial, pkg, action):
    """Reversible app ops. action: enable | disable | uninstall | backup (pull apk) | logcat (last 200 lines for the pid)."""
    _pkg(pkg)
    if action == "enable":
        return {"msg": adb("shell", "pm", "enable", pkg, serial=serial)}
    if action == "disable":
        return {"msg": adb("shell", "pm", "disable-user", "--user", "0", pkg, serial=serial, check=False)}
    if action == "uninstall":
        return {"msg": adb("uninstall", pkg, serial=serial, check=False)}
    if action == "backup":
        dst, vn, vc = _pull_apk(serial, pkg)
        return {"msg": f"saved {dst.name}", "path": str(dst)}
    if action == "logcat":
        pid = adb("shell", "pidof", pkg, serial=serial, check=False).strip().split()
        if not pid:
            return {"msg": "app not running", "log": ""}
        return {"log": adb("shell", "logcat", "-d", "-t", "200", "--pid", pid[0], serial=serial, check=False, timeout=15)}
    raise ValueError("unknown action")


def make_shortcut(serial, pkg, activity, name):
    """Create a .lnk on the Windows desktop that adb-connects and launches the activity."""
    if sys.platform != "win32":
        raise RuntimeError("shortcut export is Windows-only")
    if not re.fullmatch(r"[\w.\-]+:\d{1,5}|emulator-\d+", serial or ""):
        raise ValueError("bad serial")
    comp = _comp(_pkg(pkg), activity) or f"{pkg}/"
    safe = re.sub(r'[\\/:*?"<>|]', "_", name or pkg).strip()[:60] or pkg
    adbexe = shutil.which("adb") or "adb"
    args = f'/c ""{adbexe}" connect {serial} >nul 2>&1 & "{adbexe}" -s {serial} shell am start -n {comp}"'
    q = lambda v: "'" + str(v).replace("'", "''") + "'"  # PowerShell single-quoted literal (no backslash escaping)
    # Resolve the real Desktop in PS (it may be redirected to OneDrive), save there, print the path back.
    script = (f"$w=New-Object -ComObject WScript.Shell;$p=$w.SpecialFolders('Desktop')+'\\'+{q(safe + '.lnk')};"
              f"$s=$w.CreateShortcut($p);$s.TargetPath='cmd.exe';$s.Arguments={q(args)};"
              f"$s.IconLocation='cmd.exe';$s.WindowStyle=7;$s.Save();[Console]::Out.Write($p)")
    enc = __import__("base64").b64encode(script.encode("utf-16-le")).decode()  # -EncodedCommand dodges all shell quoting
    r = subprocess.run(["powershell", "-NoProfile", "-NonInteractive", "-EncodedCommand", enc],
                       capture_output=True, text=True, creationflags=NO_WINDOW, timeout=20)
    if r.returncode != 0:
        raise RuntimeError((r.stderr or "shortcut failed").strip().splitlines()[0] if r.stderr.strip() else "shortcut failed")
    return {"path": r.stdout.strip()}


def frame_jpeg(serial, quality=70, width=0):
    """Raw screencap (no on-device PNG encode, ~0.2s) -> JPEG. Header is 12 bytes (old) or 16 (Android 12+: + colorspace)."""
    from io import BytesIO
    from PIL import Image
    raw = adb("exec-out", "screencap", serial=serial, binary=True)
    w, h = int.from_bytes(raw[0:4], "little"), int.from_bytes(raw[4:8], "little")
    im = Image.frombuffer("RGBA", (w, h), raw[len(raw) - w * h * 4:], "raw", "RGBA", 0, 1).convert("RGB")
    if width and im.width > width:  # thumbnails for the device picker
        im = im.resize((width, round(im.height * width / im.width)))
    buf = BytesIO()
    im.save(buf, "JPEG", quality=quality)
    return buf.getvalue()


def tree_lxml(serial):
    """Dump as lxml tree with <node> renamed to its class, so XPath like //android.widget.Button[@text='OK'] works."""
    from lxml import etree
    root = etree.fromstring(dump_xml(serial))
    for el in root.iter("node"):
        el.tag = el.get("class") or "node"
    return root


def type_text(serial, text):
    """adb `input text` into the focused field. Spaces must be sent as %s; a literal "%s" has no escape there, so the
    text is split around it and sent as "...%" + "s..." (a trailing % is typed literally). ASCII only."""
    if not text.isascii():
        raise ValueError("adb input text only types ASCII (no emoji/accents) - use an IME such as ADBKeyboard for Unicode")
    parts = text.split("%s")
    for i, part in enumerate(parts):
        chunk = ("s" if i else "") + part + ("%" if i < len(parts) - 1 else "")
        if chunk:
            t = chunk.replace(" ", "%s")
            adb("shell", "input", "text", "'" + t.replace("'", "'\\''") + "'", serial=serial)  # quoted for the device shell


def act(serial, xpath, op="tap", timeout=10.0, dur=600):
    """op=tap/longtap/doubletap: wait until xpath appears, then tap / long-press / double-tap its center.
    op=wait: just wait for it. op=gone: wait until it disappears. op=check: look once, return {matches} (for if-conditions)."""
    match = lambda: [e for e in tree_lxml(serial).xpath(xpath) if hasattr(e, "attrib")]
    if op == "check":
        return {"matches": len(match())}
    end = time.time() + timeout
    while True:
        els = match()
        if op == "gone":
            if not els:
                return {"gone": True, "matches": 0}
        elif els:
            break
        if time.time() > end:
            if op == "gone":
                raise RuntimeError(f"still present after {timeout:g}s: {xpath}")
            raise RuntimeError(f"not found after {timeout:g}s: {xpath}")
        time.sleep(0.5)
    b = [int(x) for x in re.findall(r"\d+", els[0].get("bounds", ""))] or [0, 0, 0, 0]
    x, y = (b[0] + b[2]) // 2, (b[1] + b[3]) // 2
    if op == "tap":
        adb("shell", "input", "tap", str(x), str(y), serial=serial)
    elif op == "longtap":
        adb("shell", "input", "swipe", str(x), str(y), str(x), str(y), str(int(dur)), serial=serial)
    elif op == "doubletap":
        adb("shell", "input", "tap", str(x), str(y), serial=serial)
        time.sleep(0.08)
        adb("shell", "input", "tap", str(x), str(y), serial=serial)
    return {"x": x, "y": y, "matches": len(els)}


def hierarchy(serial):
    root = ET.fromstring(dump_xml(serial))
    activity = current_activity(serial)
    return {"activity": activity, "root": {"cls": "hierarchy", "attrs": {}, "bounds": None,
                                           "children": [node_to_dict(c) for c in root if c.tag == "node"]}}


class H(BaseHTTPRequestHandler):
    def log_message(self, fmt, *a):
        pass

    def send(self, code, body, ctype="application/json"):
        if not isinstance(body, bytes):
            body = json.dumps(body, ensure_ascii=False).encode()
        self.send_response(code)
        self.send_header("Content-Type", ctype)
        self.send_header("Cache-Control", "no-store")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def handle_api(self, path, q):
        s = q.get("serial")
        if path == "/api/devices":
            return list_devices()
        if path == "/api/scan":
            return scan()
        if path == "/api/connect":
            addr = q.get("addr", "").strip()
            if not re.fullmatch(r"[\w.\-]+:\d{1,5}", addr):
                raise ValueError("addr must be host:port")
            return {"msg": adb("connect", addr, timeout=8), "devices": list_devices()}
        if path == "/api/disconnect":
            return {"msg": adb("disconnect", q.get("addr", "")), "devices": list_devices()}
        if path == "/api/hierarchy":
            return hierarchy(s)
        if path == "/api/intent":
            return current_intent(s)
        if path == "/api/apps":
            rows = list_apps(s, q.get("kind", "user"))
            warm_icons(s, [r["package"] for r in rows])  # background, non-blocking; launchable sort first
            warm_activities(s, [r["package"] for r in rows])  # pre-stream manifests for cross-app activity search
            return {"apps": rows}
        if path == "/api/searchact":
            return {"groups": search_activities(s, q.get("q", ""), q.get("kind", "all"))}
        if path == "/api/app":
            return app_detail(s, q["pkg"])
        if path == "/api/applabels":
            pkgs = [p for p in q.get("pkgs", "").split(",") if re.fullmatch(r"[A-Za-z0-9_.]+", p)]
            with ThreadPoolExecutor(max(1, min(8, len(pkgs)))) as ex:
                return dict(zip(pkgs, ex.map(lambda pk: app_label(s, pk), pkgs)))
        if path == "/api/start":
            return start_activity(s, q["pkg"], q.get("activity"), q.get("action"), q.get("data"), q.get("flags"))
        if path == "/api/manage":
            return app_manage(s, q["pkg"], q["action"])
        if path == "/api/shortcut":
            return make_shortcut(s, q["pkg"], q.get("activity"), q.get("name"))
        if path == "/api/act":
            return act(s, q["xpath"], q.get("op", "tap"), float(q.get("timeout", 10)), float(q.get("dur", 600)))
        if path == "/api/scroll":
            m = re.search(r"(\d+)x(\d+)", adb("shell", "wm", "size", serial=s).splitlines()[-1])
            w, h = int(m.group(1)), int(m.group(2))
            dx, dy = {"down": (0, -h // 3), "up": (0, h // 3), "left": (w // 3, 0), "right": (-w // 3, 0)}[q.get("dir", "down")]
            adb("shell", "input", "swipe", *map(str, (w // 2 - dx // 2, h // 2 - dy // 2, w // 2 + dx // 2, h // 2 + dy // 2, 400)), serial=s)
            return {"ok": True}
        if path == "/api/tap":
            adb("shell", "input", "tap", str(int(q["x"])), str(int(q["y"])), serial=s)
            return {"ok": True}
        if path == "/api/swipe":
            xs = [str(int(q[k])) for k in ("x1", "y1", "x2", "y2")]
            adb("shell", "input", "swipe", *xs, str(int(q.get("dur", 300))), serial=s)
            return {"ok": True}
        if path == "/api/key":
            adb("shell", "input", "keyevent", str(int(q["code"])), serial=s)
            return {"ok": True}
        if path == "/api/text":
            type_text(s, q.get("text", ""))
            return {"ok": True}
        if path == "/api/emu/list":
            return {"brands": emulators.list_all()}
        if path == "/api/emu/action":
            brand = q.get("brand", "")
            if brand not in emulators.LABEL:
                raise ValueError("unknown brand")
            idx = q.get("index", "")
            if brand != "bs":  # bs keys by name; others by numeric index
                if not re.fullmatch(r"\d{1,3}", idx):
                    raise ValueError("index must be a number")
                idx = int(idx)
            return {"msg": emulators.action(brand, idx, q.get("act", "")), "brands": emulators.list_all()}
        if path == "/api/emu/create":
            brand = q.get("brand", "")
            if brand not in emulators.LABEL:
                raise ValueError("unknown brand")
            name = q.get("name", "").strip()
            if name and not re.fullmatch(r"[\w .\-]{1,40}", name):
                raise ValueError("invalid name")
            ver = q.get("ver", "").strip() or None
            return {"msg": emulators.create(brand, name or None, ver), "brands": emulators.list_all()}
        if path == "/api/emu/settings":
            brand = q.get("brand", "")
            if brand not in emulators.LABEL:
                raise ValueError("unknown brand")
            idx = q.get("index", "")
            if brand != "bs" and not re.fullmatch(r"\d{1,3}", idx):
                raise ValueError("index must be a number")
            settings = {k: q[k] for k in emulators.SETTING_FIELDS if q.get(k)}
            return {"msg": emulators.apply_settings(brand, idx if brand == "bs" else int(idx), settings),
                    "brands": emulators.list_all()}
        if path in ("/api/emu/rename", "/api/emu/clone"):
            brand = q.get("brand", "")
            if brand not in emulators.LABEL:
                raise ValueError("unknown brand")
            idx = q.get("index", "")
            if not re.fullmatch(r"\d{1,3}", idx):
                raise ValueError("index must be a number")
            name = q.get("name", "").strip()
            if name and not re.fullmatch(r"[\w .\-]{1,40}", name):
                raise ValueError("invalid name")
            if path.endswith("rename"):
                if not name:
                    raise ValueError("name required")
                msg = emulators.rename(brand, int(idx), name)
            else:
                msg = emulators.clone(brand, int(idx), name or None)
            return {"msg": msg, "brands": emulators.list_all()}
        raise LookupError(path)

    def do_GET(self):
        u = urlparse(self.path)
        q = {k: v[0] for k, v in parse_qs(u.query).items()}
        try:
            if u.path in ("/", "/index.html"):
                return self.send(200, (ROOT / "index.html").read_bytes(), "text/html; charset=utf-8")
            if re.fullmatch(r"/[\w.\-]+\.(css|js|map)", u.path):  # static assets next to index.html (style.css, app.js)
                f = ROOT / u.path.lstrip("/")
                if f.is_file():
                    ct = {"css": "text/css", "js": "text/javascript", "map": "application/json"}[u.path.rsplit(".", 1)[1]]
                    return self.send(200, f.read_bytes(), ct + "; charset=utf-8")
                return self.send(404, {"error": "not found"})
            if u.path == "/api/stream":  # MJPEG: an <img src> that keeps updating, ends when the tab closes it
                self.send_response(200)
                self.send_header("Content-Type", "multipart/x-mixed-replace; boundary=frame")
                self.send_header("Cache-Control", "no-store")
                self.end_headers()
                try:
                    while True:
                        jpg = frame_jpeg(q.get("serial"))
                        self.wfile.write(b"--frame\r\nContent-Type: image/jpeg\r\nContent-Length: "
                                         + str(len(jpg)).encode() + b"\r\n\r\n" + jpg + b"\r\n")
                        self.wfile.flush()
                except (BrokenPipeError, ConnectionResetError, ConnectionAbortedError):
                    return
                except Exception:  # noqa: BLE001 - device gone etc.: end stream, client reconnects
                    return
            if u.path == "/api/appicon":
                data, ct = app_icon(q.get("serial"), q["pkg"])
                return self.send(200, data, ct)
            if u.path == "/api/thumb":
                return self.send(200, frame_jpeg(q.get("serial"), 60, min(int(q.get("w", 160)), 480)), "image/jpeg")
            if u.path == "/api/screenshot":
                return self.send(200, adb("exec-out", "screencap", "-p", serial=q.get("serial"), binary=True), "image/png")
            return self.send(200, self.handle_api(u.path, q))
        except LookupError:
            self.send(404, {"error": "not found"})
        except Exception as e:  # noqa: BLE001
            self.send(500, {"error": str(e)})


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8765
    print(f"Android Inceptor -> http://127.0.0.1:{port}")
    ThreadingHTTPServer(("127.0.0.1", port), H).serve_forever()
