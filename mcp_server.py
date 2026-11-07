"""Android Inceptor MCP server (stdio) - lets an AI agent see and drive an Android device/emulator via ADB.

Register:  claude mcp add -s user android-inceptor -- python "C:\\BOT\\Android Inceptor\\mcp_server.py"
Selectors: same XPath the web UI generates (tags = Android class names), or simple text/resource_id/desc fields.
"""
import json
import re
import time

from lxml import etree
from mcp.server.fastmcp import FastMCP, Image

import server as core

mcp = FastMCP("android-inceptor")
KEYS = {"back": 4, "home": 3, "enter": 66, "recent": 187, "delete": 67, "backspace": 67, "tab": 61,
        "menu": 82, "power": 26, "search": 84, "escape": 111, "volume_up": 24, "volume_down": 25}


_default = None  # set by use_device(); per MCP server process = per agent session


def _serial(serial):
    """Explicit serial > use_device() choice > the only online device. Several online and none chosen -> refuse,
    so an agent never taps/types/clears on whichever emulator happens to be listed first."""
    if serial:
        return serial
    devs = [d for d in core.list_devices() if d["state"] == "device"]
    if not devs:  # adb daemon may be restarting (emulators ship their own adb) - retry once
        time.sleep(2)
        devs = [d for d in core.list_devices() if d["state"] == "device"]
    if not devs:
        raise RuntimeError("No device online. Call devices(scan=True) or connect(addr).")
    if _default and any(_default == d["serial"] or _default in d["aliases"] for d in devs):
        return _default
    if len(devs) == 1:
        return devs[0]["serial"]
    listing = "; ".join(f"{d['serial']} ({(d.get('brand') or {}).get('n', d['model'])})" for d in devs)
    raise RuntimeError(f"{len(devs)} devices online: {listing}. Call use_device(serial) once, or pass serial= to this tool.")


@mcp.tool()
def use_device(serial: str) -> str:
    """Pick the device every other tool uses when serial is omitted (needed when more than one device is online)."""
    global _default
    devs = [d for d in core.list_devices() if d["state"] == "device"]
    match = next((d for d in devs if serial == d["serial"] or serial in d["aliases"]), None)
    if not match:
        raise ValueError(f"{serial} is not online. Online: {', '.join(d['serial'] for d in devs) or 'none'}")
    _default = serial
    return f"using {serial} ({(match.get('brand') or {}).get('n', '')} {match['model']})".replace("( ", "(")


_tree = core.tree_lxml


def _bounds(el):
    m = re.findall(r"\d+", el.get("bounds", ""))
    return [int(x) for x in m] if len(m) == 4 else [0, 0, 0, 0]


def _query(root, xpath, text, resource_id, desc, class_name, contains):
    if xpath:
        return [e for e in root.xpath(xpath) if isinstance(e, etree._Element)]
    conds, vars_ = [], {}
    for attr, val in (("text", text), ("resource-id", resource_id), ("content-desc", desc)):
        if val is None:
            continue
        v = f"v{len(vars_)}"
        vars_[v] = val
        # resource_id may be given short ("btn_ok") or full ("pkg:id/btn_ok")
        if attr == "resource-id" and ":id/" not in val:
            conds.append(f"(@resource-id=${v} or substring-after(@resource-id, ':id/')=${v})")
        else:
            conds.append(f"contains(@{attr}, ${v})" if contains and attr != "resource-id" else f"@{attr}=${v}")
    if class_name:
        v = f"v{len(vars_)}"
        vars_[v] = class_name
        conds.append(f"(@class=${v} or substring(@class, string-length(@class) - string-length(${v}) + 1)=${v})")
    if not conds:
        raise ValueError("Give xpath or at least one of text / resource_id / desc / class_name")
    return root.xpath(f"//*[{' and '.join(conds)}]", **vars_)


def _fmt(el, i=None):
    b = _bounds(el)
    cx, cy = (b[0] + b[2]) // 2, (b[1] + b[3]) // 2
    parts = [f"[{i}]" if i is not None else "", (el.get("class") or el.tag).split(".")[-1]]
    rid = el.get("resource-id")
    if rid:
        parts.append("#" + rid.split(":id/")[-1])
    if el.get("text"):
        parts.append(repr(el.get("text")))
    if el.get("content-desc"):
        parts.append("desc=" + repr(el.get("content-desc")))
    parts.append(f"@({cx},{cy}) [{b[0]},{b[1]},{b[2]},{b[3]}]")
    parts += [f for f in ("clickable", "scrollable", "checked", "selected", "focused") if el.get(f) == "true"]
    if el.get("enabled") == "false":
        parts.append("disabled")
    return " ".join(p for p in parts if p)


@mcp.tool()
def devices(scan: bool = False) -> str:
    """List attached Android devices/emulators. scan=True first probes local emulator ADB ports
    (MuMu 16384+/7555, LDPlayer 5555+, Nox 62001, MEmu 21503, BlueStacks) and adb-connects them; an emulator hidden behind
    another on the same port (LDPlayer 0.0.0.0:5555 vs BlueStacks 127.0.0.1:5555) is reached via a LAN IP. [brand] comes
    from the process that owns the port."""
    devs = core.scan()["devices"] if scan else core.list_devices()
    if not devs:
        return "No devices. Start an emulator then call devices(scan=True), or connect('host:port')."
    return "\n".join(f"{d['serial']}  {d['state']}  {d['model']}" + (f"  [{d['brand']['n']}]" if d.get("brand") else "")
                     + (f"  (aliases: {', '.join(d['aliases'])})" if d.get("aliases") else "")
                     for d in devs)


@mcp.tool()
def connect(addr: str) -> str:
    """adb connect to host:port, e.g. 127.0.0.1:16384 (MuMu) or 192.168.1.20:5555 (phone over Wi-Fi)."""
    if not re.fullmatch(r"[\w.\-]+:\d{1,5}", addr):
        raise ValueError("addr must be host:port")
    return core.adb("connect", addr, timeout=8)


@mcp.tool()
def screenshot(serial: str | None = None, max_width: int = 540) -> Image:
    """Screenshot of the device as JPEG, downscaled to max_width (coordinates in ui_tree/find stay in real device pixels;
    multiply image coords by device_width/max_width if you read positions off the image)."""
    # raw screencap -> JPEG (same path as the web stream; skips the slow on-device PNG encode of `screencap -p`)
    return Image(data=core.frame_jpeg(_serial(serial), 75, max_width), format="jpeg")


@mcp.tool()
def ui_tree(serial: str | None = None, full: bool = False) -> str:
    """Current screen's UI elements, one per line: Class #resource-id 'text' desc='...' @(centerX,centerY) [bounds] flags.
    Default lists only meaningful elements (with text/id/desc or clickable/scrollable). full=True prints the whole indented tree."""
    s = _serial(serial)
    root = _tree(s)
    lines = [f"activity: {core.current_activity(s)}"]
    if full:
        def walk(el, d):
            for c in el:
                lines.append("  " * d + _fmt(c))
                walk(c, d + 1)
        walk(root, 0)
    else:
        for i, el in enumerate(e for e in root.iter() if e is not root and (
                e.get("text") or e.get("resource-id") or e.get("content-desc")
                or e.get("clickable") == "true" or e.get("scrollable") == "true")):
            lines.append(_fmt(el, i))
    return "\n".join(lines)


@mcp.tool()
def find(xpath: str | None = None, text: str | None = None, resource_id: str | None = None, desc: str | None = None,
         class_name: str | None = None, contains: bool = False, serial: str | None = None) -> str:
    """Find elements. Use xpath (e.g. //*[@resource-id="pkg:id/login"] or //android.widget.Button[@text="OK"]),
    or simple fields: text, resource_id (short or full), desc (content-desc), class_name (e.g. 'Button'). contains=True = substring match for text/desc."""
    els = _query(_tree(_serial(serial)), xpath, text, resource_id, desc, class_name, contains)
    return f"{len(els)} match(es)\n" + "\n".join(_fmt(e, i) for i, e in enumerate(els)) if els else "0 matches"


@mcp.tool()
def tap(x: int | None = None, y: int | None = None, xpath: str | None = None, text: str | None = None,
        resource_id: str | None = None, desc: str | None = None, class_name: str | None = None, contains: bool = False,
        index: int = 0, long_press_ms: int = 0, serial: str | None = None) -> str:
    """Tap by coordinates (x,y) OR by selector (same fields as find; index picks the nth match).
    long_press_ms > 0 does a long press."""
    s = _serial(serial)
    if x is None or y is None:
        find_el = lambda: _query(_tree(s), xpath, text, resource_id, desc, class_name, contains)
        els = find_el()
        if len(els) <= index:
            raise RuntimeError(f"Selector matched {len(els)} element(s); nothing at index {index}")
        # Same as the web replay: the soft keyboard isn't in the UI dump and can cover a bottom button, so for
        # non-text targets hide it first, then re-locate (bounds can shift once it's gone).
        if "EditText" not in (els[index].get("class") or els[index].tag or "") and core._hide_kbd(s):
            time.sleep(0.2)
            again = find_el()
            if len(again) > index:
                els = again
        b = _bounds(els[index])
        x, y = (b[0] + b[2]) // 2, (b[1] + b[3]) // 2
        what = _fmt(els[index])
    else:
        what = f"({x},{y})"
    if long_press_ms > 0:
        core.adb("shell", "input", "swipe", str(x), str(y), str(x), str(y), str(long_press_ms), serial=s)
    else:
        core.adb("shell", "input", "tap", str(x), str(y), serial=s)
    return f"tapped {what}"


@mcp.tool()
def swipe(x1: int, y1: int, x2: int, y2: int, duration_ms: int = 300, serial: str | None = None) -> str:
    """Swipe/drag from (x1,y1) to (x2,y2) in device pixels."""
    core.adb("shell", "input", "swipe", *map(str, (x1, y1, x2, y2, duration_ms)), serial=_serial(serial))
    return "ok"


@mcp.tool()
def scroll(direction: str = "down", serial: str | None = None) -> str:
    """Scroll the screen content: direction = down (see more below) | up | left | right."""
    s = _serial(serial)
    m = re.search(r"(\d+)x(\d+)", core.adb("shell", "wm", "size", serial=s).splitlines()[-1])
    w, h = int(m.group(1)), int(m.group(2))
    cx, cy = w // 2, h // 2
    dx, dy = {"down": (0, -h // 3), "up": (0, h // 3), "left": (w // 3, 0), "right": (-w // 3, 0)}[direction]
    core.adb("shell", "input", "swipe", *map(str, (cx - dx // 2, cy - dy // 2, cx + dx // 2, cy + dy // 2, 400)), serial=s)
    return "ok"


@mcp.tool()
def input_text(text: str, serial: str | None = None) -> str:
    """Type text into the focused field (tap the field first). ASCII only - adb `input text` cannot type emoji/non-Latin."""
    core.type_text(_serial(serial), text)
    return "ok"


@mcp.tool()
def press_key(key: str, serial: str | None = None) -> str:
    """Press a key: back, home, enter, recent, delete, tab, menu, power, search, escape, volume_up/down, or a numeric keycode."""
    code = KEYS.get(key.lower(), key)
    core.adb("shell", "input", "keyevent", str(int(code)), serial=_serial(serial))
    return "ok"


@mcp.tool()
def wait_for(xpath: str | None = None, text: str | None = None, resource_id: str | None = None, desc: str | None = None,
             class_name: str | None = None, contains: bool = False, timeout: float = 10, gone: bool = False,
             serial: str | None = None) -> str:
    """Wait until an element appears (or disappears with gone=True). Returns the match or raises on timeout."""
    s = _serial(serial)
    end = time.time() + timeout
    while True:
        try:  # one dump try per poll, capped by the deadline; a never-idle screen just means "poll again"
            els = _query(_tree(s, tries=1, deadline=end), xpath, text, resource_id, desc, class_name, contains)
        except (ValueError, etree.XPathError):
            raise
        except Exception as e:  # noqa: BLE001
            els, err = None, e
        if els is not None:
            if gone and not els:
                return "gone"
            if els and not gone:
                return _fmt(els[0])
        if time.time() > end:
            if els is None:
                raise TimeoutError(f"screen wouldn't settle for a UI read within {timeout}s: {err}")
            raise TimeoutError(f"timeout after {timeout}s ({'still present' if gone else 'not found'})")
        time.sleep(0.5)


@mcp.tool()
def app(action: str, package: str | None = None, serial: str | None = None) -> str:
    """App control. action: current (foreground activity) | intent (JSON: the Intent that opened the current screen -
    action, component{packageName,className}, categories, flags, intent_uri, plus app version and a ready `am start`)
    | start (launch package) | stop (force-stop) | clear (wipe data!) | list (3rd-party packages)."""
    s = _serial(serial)
    if action == "current":
        return core.current_activity(s)
    if action == "intent":
        return json.dumps(core.current_intent(s), indent=2, ensure_ascii=False)
    if action == "list":
        return core.adb("shell", "pm", "list", "packages", "-3", serial=s).replace("package:", "")
    if not package or not re.fullmatch(r"[\w.]+", package):
        raise ValueError("package required, e.g. com.android.chrome")
    if action == "start":  # am start on the resolved launcher activity (same as the web UI), not monkey
        r = core.start_activity(s, package)
        return f"started {r['component'] or package}"
    if action not in ("stop", "clear"):
        raise ValueError("action must be current | intent | start | stop | clear | list")
    cmd = {"stop": ["am", "force-stop", package], "clear": ["pm", "clear", package]}[action]
    return core.adb("shell", *cmd, serial=s) or "ok"


@mcp.tool()
def apps(kind: str = "user", serial: str | None = None) -> str:
    """List installed packages. kind: user (3rd-party) | system | all. ★ marks apps with a launcher icon."""
    rows = core.list_apps(_serial(serial), kind)
    return f"{len(rows)} packages\n" + "\n".join(("★ " if a["launchable"] else "  ") + a["package"]
            + f"  vc={a['versionCode']}" + ("" if a["enabled"] else "  [disabled]") for a in rows)


@mcp.tool()
def activities(package: str, exported_only: bool = False, serial: str | None = None) -> str:
    """Every activity of an app (streamed from its AndroidManifest, no full APK pull), with exported flag, launcher mark
    and deep links. Use start_activity to open one. exported_only hides activities you can't launch without root."""
    d = core.app_acts(_serial(serial), package, labels=True)
    acts = [a for a in d["activities"] if a["exported"] or not exported_only]
    head = f"{d['label'] or package} ({d['package']}) vc{d['versionCode']} - {d['activityCount']} activities, {d['exportedCount']} exported"
    lines = [("★" if a["launcher"] else ("+" if a["exported"] else "-")) + " " + a["name"] for a in acts]
    links = ("\ndeep links:\n" + "\n".join("  " + x["uri"] + "  -> " + x["activity"] for x in d["deepLinks"])) if d["deepLinks"] else ""
    return head + "\n(★ launcher, + exported/openable, - needs root)\n" + "\n".join(lines) + links


@mcp.tool()
def search_activities(query: str, serial: str | None = None) -> str:
    """Find activities across ALL installed apps by class name or label (e.g. 'wifi settings', 'account'), grouped by
    app. Each line is a component you can pass to start_activity(package, activity)."""
    groups = core.search_activities(_serial(serial), query) or []
    if not groups:
        return "no matching activities (query needs 2+ characters)"
    out = []
    for g in groups:
        out.append(f"{g['label']} ({g['package']})")
        out += [("  ★ " if a["launcher"] else "  + " if a["exported"] else "  - ") + a["name"]
                + (f"  '{a['label']}'" if a.get("label") else "") for a in g["activities"]]
    return "(★ launcher, + exported/openable, - needs root)\n" + "\n".join(out)


@mcp.tool()
def start_activity(package: str, activity: str | None = None, action: str | None = None, data: str | None = None,
                   flags: str | None = None, serial: str | None = None) -> str:
    """Open a specific activity (am start -n package/activity), the launcher (activity omitted), or a deep link
    (data='myapp://...'). Non-exported activities need root. Pair with ui_tree/screenshot to see the result."""
    r = core.start_activity(_serial(serial), package, activity, action, data, flags)
    return f"started {r['component'] or package}\n{r['out']}"


@mcp.tool()
def app_manage(action: str, package: str, serial: str | None = None) -> str:
    """Manage an app. action: enable | disable (hide, reversible) | uninstall | backup (pull all its APKs, splits
    included, to ~/Downloads/Inceptor/<pkg>-<version>/) | logcat (recent lines)."""
    r = core.app_manage(_serial(serial), package, action)
    return r.get("log") or (r.get("msg", "ok") + (f"\n{r['path']}" if r.get("path") else ""))


@mcp.tool()
def shell(command: str, serial: str | None = None) -> str:
    """Run an `adb shell` command on the device and return its output (getprop, dumpsys, am, pm, settings, ...)."""
    return core.adb("shell", command, serial=_serial(serial), timeout=60, check=False)


@mcp.tool()
def emulator(action: str, brand: str | None = None, index: str | None = None,
             name: str | None = None, android_version: str | None = None) -> str:
    """Manage emulator instances across brands (mumu, ld9, ld14, ld4, memu, nox, bs).
    action: list (all brands + instances) | launch | stop | restart | delete | create | rename | clone.
    launch/stop/restart/delete need brand + index (for bs, index is the instance name).
    create needs brand (+ optional name, + optional android_version). rename needs brand + index + name.
    clone needs brand + index (+ optional name). Use emulator_config to set a device template.
    android_version choices on create: mumu auto|12|15, memu 44|51|71|76|90|96|120, nox 4|5|7 (ld/bs fixed).
    'list' shows each brand's version options under (versions: ...). Returns the refreshed list after a change."""
    emu = core.emulators
    if action == "list":
        out = []
        for b in emu.list_all():
            tags = ",".join(b["caps"]) + ("  +settings" if b["settings"] else "")
            vers = "  (versions: " + "/".join(v["value"] for v in b["versions"]) + ")" if b["versions"] else ""
            out.append(f"{b['label']} ({b['brand']}) [{tags}]{vers}")
            for i in b["instances"]:
                run = "▶ running" if i["running"] else "■ stopped"
                out.append(f"  {i['index']}: {i['name']}  {run}  {i['adb'] or ''}")
        return "\n".join(out) or "no emulators installed"
    if brand not in emu.LABEL:
        return "brand must be one of: " + ", ".join(emu.LABEL)
    if action == "create":
        msg = emu.create(brand, name, android_version)
    elif action == "clone":
        if index is None:
            return "index required"
        msg = emu.clone(brand, int(index), name)
    elif action == "rename":
        if index is None or not name:
            return "index and name required"
        msg = emu.rename(brand, int(index), name)
    elif action in ("launch", "stop", "restart", "delete"):
        if index is None:
            return "index required (instance name for bs)"
        idx = index if brand == "bs" else int(index)
        msg = emu.action(brand, idx, action)
    else:
        return f"unknown action: {action}"
    return f"{msg}\n\n" + emulator("list")


@mcp.tool()
def emulator_config(brand: str, index: str, cpu: int | None = None, memory: int | None = None,
                    width: int | None = None, height: int | None = None, dpi: int | None = None,
                    manufacturer: str | None = None, model: str | None = None, imei: str | None = None,
                    androidid: str | None = None, mac: str | None = None, phonenumber: str | None = None) -> str:
    """Apply a device-settings template to one emulator instance (great for multi-account isolation).
    brand: mumu | ld9 | ld14 | ld4 | memu (nox/bs not supported via CLI). index: instance index.
    cpu=cores, memory=MB, width/height/dpi=resolution. Fingerprint: manufacturer, model, imei, androidid,
    mac, phonenumber. imei/androidid/mac accept "auto" on ld/memu to randomize. Set only the fields you want.
    MuMu covers cpu/memory/resolution/manufacturer/model/imei/phonenumber (no androidid/mac via CLI).
    Tip: restart the instance after applying so changes take effect."""
    emu = core.emulators
    if brand not in emu.LABEL:
        return "brand must be one of: " + ", ".join(emu.LABEL)
    settings = {k: v for k, v in dict(cpu=cpu, memory=memory, width=width, height=height, dpi=dpi,
                manufacturer=manufacturer, model=model, imei=imei, androidid=androidid,
                mac=mac, phonenumber=phonenumber).items() if v is not None}
    if not settings:
        return "no settings given"
    idx = index if brand == "bs" else int(index)
    return emu.apply_settings(brand, idx, settings)


if __name__ == "__main__":
    mcp.run()
