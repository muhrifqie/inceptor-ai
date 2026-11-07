---
name: android-inceptor
description: See and drive an Android emulator/device (MuMu, LDPlayer, Nox, MEmu, BlueStacks, phone over ADB) through the android-inceptor MCP tools — screenshot, read the UI tree, find elements by text/resource-id/desc/XPath, tap, swipe, scroll, type, press keys, wait for elements, start/stop apps, adb shell. Use when the owner asks to do something inside an emulator/HP ("buka app X di MuMu", "klik tombol login", "cek layar emulator", "cari selector/XPath tombol ini"), to prototype an automation flow before scripting it, or to open the web inspector (uiautodev-style) at C:\BOT\Android Inceptor.
---

# Android Inceptor (UI brand: "Inceptor AI")

Project: `C:\BOT\Android Inceptor` — `server.py` (ADB bridge + web inspector; also serves static `.css`/`.js` next to index.html), `mcp_server.py` (MCP tools), `index.html` (structure, ID/EN) + `style.css` + `app.js` (split out so index stays light; plain vanilla, no build step).
Needs only `adb` on PATH. MCP registered user-scope as `android-inceptor`.

## Web inspector (for the owner)
```bash
python "C:\BOT\Android Inceptor\server.py"     # http://127.0.0.1:8765
```
No device online → a full-page setup guide (ADB check, emulator/USB/Wi-Fi steps, port table, troubleshooting) replaces the workspace and auto-scans every 5s (also drops stuck "offline" tcp entries); the first device found opens the workspace and captures. The guide shows a live port map (closed/open/connected). Header device picker = cards with live thumbnail (`/api/thumb`), brand badge guessed from the port (MuMu/LD/Nox/MEmu/BlueStacks/USB/Wi-Fi) and state. Colours encode mode (inspect amber, control sky, recording rose, XPath teal); tree rows get element-kind badges. Otherwise:
Click "Cari Emulator" → "Ambil Layar" → click element → copy selector (graded Terbaik/Bagus/Cukup/Rapuh).
- **XPath tester:** UI Tree search → "XPath" mode; matches highlight green on screen + tree (browser-native XPath 1.0, same tags as MCP).
- **Live:** MJPEG stream `/api/stream` (raw screencap → JPEG, ~5-6 fps); UI tree auto-refreshes every 3s + after each action.
- **Recorder:** "Rekam" turns on Live + Control mode. Each tap re-dumps the tree first, then stores the element's attributes (resource-id/desc/text/class) + a snapshot of the screen. Per step the owner ticks which params are the reference, plus contains / timeout / optional; match count + instance index are recomputed live. Replay & exports (u2 Python kwargs, MCP args, XPath) use those params, never coordinates (ADB export is the exception — it has no selectors). Swipes stay coordinate-based. Steps persist in localStorage.
- Owner-recorded MCP steps (`1. tap(resource_id="x")`…) can be pasted to you — execute them in order with `wait_for` between screens.

## Playground (web, for the owner)
Header "Playground" button (or the "Playground" tab) enters Playground mode: phone stays on the LEFT, the MIDDLE card switches from the UI tree to the **Automation Flow**, and the RIGHT card becomes the **function list** (Actions: tap, long press (hold, ms), double tap, type text, key, swipe (x1,y1→x2,y2,ms), scroll, open app, screenshot; Waits: wait for element/wait until gone/delay; Logic: if element exists → then/else, repeat, comment). The "open app" package field opens a custom dropdown of installed apps showing each app's logo + name + package (searchable, launchable ★ first); names come from `/api/applabels` (streams manifest+arsc), icons from `/api/appicon`. Add a step by clicking a function, by the "+" between nodes, or by **Grab from screen**: turn on "Grab" (pick Tap/Wait/Gone/If in the dropdown) then tap an element on the phone — it's added as a node with that element's selector. Each node targets by resource-id/text/desc/class/XPath (or x,y). Run executes on the device with per-node status (stops on failure; phone goes Live during the run); exports to uiautomator2 Python, MCP, or re-importable JSON. The flow is a free n8n-style canvas: drag node headers to arrange, drag the background to pan, wheel or the −/fit/+ buttons to zoom; connectors auto-route between consecutive steps (execution order = that order). Nested if/repeat branches live inside their node card. Node positions, pan/zoom and the flow all persist in localStorage. Rewire order by dragging either port (bottom output or top input — two-way) onto another node. Each connector has a wide click area, a midpoint "+" to insert a step between two nodes, and a draggable handle at each end — drag a line end onto another node to re-route that connection. **Data loop:** the "Data" button opens a table of variables/rows (or paste CSV); `{{col}}` placeholders in any text/selector/package are substituted per row, and Run repeats the whole flow once per row (Python export wraps it in `for row in DATA:` with f-strings). The **Open app** step's Activity field is a searchable picker (that package's activities + cross-app search, Shortcut-Maker style; picking a cross-app hit fills package+activity together). **Auto-arrange** restacks nodes into one tidy column and **undo** restores the previous layout. A persistent **Run log** (below the code preview) records each step ✓/✗ with the real error and the XPath that failed, and auto-opens on failure. **Download always exports JSON** (flow + data) — the only re-importable format; import rejects Py/MCP with a clear message, and the Py/MCP/JSON toggle only affects Copy/preview (code to run elsewhere). Built on `/api/act` (op=wait/gone/check), `/api/start`, `/api/scroll`, etc.

## MCP loop (for you)
1. `devices()` — nothing? `devices(scan=True)` (probes local emulator ports) or `connect("127.0.0.1:16384")`.
   Emulators expose one VM on several ports; the list is deduped (aliases shown, `[brand]` from the port's process).
   **More than one device online → call `use_device(serial)` first** (or pass `serial=` per call); tools refuse to guess.
2. **Look before acting:** `ui_tree()` (cheap text, has center coords) is the default. `screenshot()` only when the tree is ambiguous (games/WebView/canvas have no nodes) or to verify visually.
3. Act with selectors, not coordinates: `tap(resource_id="btn_login")` > `tap(desc=...)` > `tap(text=..., contains=True)` > `tap(xpath=...)` > `tap(x=, y=)`.
4. After each action that changes the screen: `wait_for(...)` the next expected element instead of sleeping, then re-read.
5. Text: `tap` the field first, then `input_text`. Quotes, `;`, `$()`, `%s`, `%` are typed literally (no shell injection);
   non-ASCII (emoji/accents) is refused — use `shell("am broadcast ...")` with an IME like ADBKeyboard if installed.

Current app + Intent: `app("intent")` → JSON {action, component{packageName,className}, categories, flags, intent_uri
(Intent.toUri format, same as Shortcut Maker), app{versionName, versionCode, launcherActivity}, am_start, u2, has_extras}.
Parsed from `dumpsys activity activities`; extras are NOT readable (has_extras=true means the am_start lacks them).
Web UI: right panel tab "Aplikasi" (flags decoded to NEW_TASK/CLEAR_TOP/…, copy JSON / URI / am start / u2). HTTP: `/api/intent?serial=`.

Browse every app + activity (for building shortcuts / launching screens):
- `apps(kind)` — all packages (user|system|all), ★ = has launcher.
- `activities(package, exported_only)` — EVERY activity from the APK (androguard parses the pulled base.apk, cached in `.apkcache/`), each marked ★ launcher / + exported (openable) / - needs root, plus deep links. Far more than `dumpsys` shows.
- **Cross-app activity search (Shortcut-Maker style):** the App tab search box finds activities across ALL apps by class name AND resolved label (type "add an account" → Settings · com.android.settings.accounts.AddAccountSettings), grouped by app, each with Open / Shortcut. Server streams each app's AndroidManifest.xml (no full apk pull), resolves labels via arsc only for matched apps, caches to `.apkcache/<pkg>-<vc>.acts.json`, and warms in the background when the App tab opens. HTTP: `/api/searchact?serial=&q=`.
- `start_activity(package, activity=, action=, data=, flags=)` — `am start` a specific activity, the launcher (activity omitted), or a deep link (`data="scheme://..."`). Non-exported activities need root (off by default on MuMu).
- `app_manage(action, package)` — enable | disable | uninstall | backup (pull APK) | logcat.
- Web UI: right panel "Aplikasi" tab → "Semua aplikasi": searchable app list → detail (icon, all activities with Open/Shortcut/copy, deep links, permissions, manage). "Shortcut" writes a Windows `.lnk` to the Desktop that adb-connects + `am start`s the activity. HTTP: `/api/apps /app /appicon /start /manage /shortcut`.
- Note: Android ≥8 blocks creating home-screen shortcuts via adb, so shortcuts are Inceptor buttons / Windows `.lnk` / MCP calls, not launcher icons. Intent extras can't be read back from a running app.

Emulator lifecycle (whole VMs, not what's on screen) — brands: mumu, ld9, ld14, ld4, memu, nox, bs:
- `emulator(action, brand, index, name)` — action: list | launch | stop | restart | delete | create | rename | clone.
  list shows every installed brand + its instances (running state, adb addr). launch/stop/restart/delete/rename/clone need brand+index (bs uses the instance *name* as index; bs has launch/stop only — no create/delete CLI). create (+optional name for ld/nox). After an `add`/`clone` the CLI lags ~1.5s before its own list reflects it (handled server-side).
- `emulator_config(brand, index, cpu=, memory=, width=, height=, dpi=, manufacturer=, model=, imei=, androidid=, mac=, phonenumber=)` — apply a device-settings template to one instance (multi-account isolation). ld/memu cover all fields; mumu covers all except androidid/mac; nox/bs unsupported. imei/androidid/mac accept "auto" (ld/memu) to randomize. Set only the fields you want; restart the instance after applying. Instance must usually be stopped.
- CLIs: MuMu `MuMuManager.exe` (info -v all / control / create / delete / setting / rename / clone), LDPlayer `ldconsole.exe` (list2 / launch|quit|reboot / add / remove / modify / rename / copy), MEmu `memuc.exe` (listvms / start|stop|reboot / create / remove / setconfig / rename / clone), Nox `NoxConsole.exe` (needs Nox running to list), BlueStacks `HD-Player.exe --instance NAME` (stop = kill its process).
- Web UI: header "Emulators" button → dialog listing all brands/instances with Open/Close/Restart + ⚙ settings (template editor, saved to localStorage, reusable across create/recreate) + ✎ rename + ⎘ clone + Delete (two-click confirm). HTTP: `/api/emu/list /action /create /settings /rename /clone`. Logic lives in `emulators.py`.

Other tools: `find` (inspect matches without acting), `swipe`, `scroll("down")`, `press_key("back"|"home"|"enter"|...)`, `app("current"|"start"|"stop"|"list", package)`, `shell(cmd)`.
`app(action="clear")` wipes app data — ask the owner first.

## Selector rules
- `resource_id` accepts short (`login`) or full (`com.app:id/login`).
- XPath tags are Android class names: `//android.widget.Button[@text="OK"]`, `//*[@resource-id="pkg:id/x"]/android.widget.TextView[2]`.
- Absolute XPath (`/hierarchy/...`) breaks on any layout change — only for one-off actions.
- When writing a lasting script, translate to uiautomator2: `d(resourceId=...)`, `d(text=...)`, `d.xpath(...)` (the web UI "Kode" tab shows all forms).

## Gotchas
- Port clashes: BlueStacks binds 127.0.0.1:5555 and LDPlayer 9 binds 0.0.0.0:5555 — 127.0.0.1:5555 always hits BlueStacks; LDPlayer is reachable via any non-loopback local IP (`scan()` does this automatically). Brand labels come from the process owning the port (netstat + tasklist, cached 30s): HD-Player=BlueStacks, Ld9BoxHeadless=LDPlayer, MEmuHeadless=MEmu (21503), NoxVMHandle=Nox (62001), MuMuNxDevice=MuMu (16384 + 32×instance).
- LDPlayer's 0.0.0.0 bind exposes its ADB to the LAN (no auth) — fine on a trusted network only.
- `uiautomator dump` fails on screens that never go idle (videos, WebViews, heavy animation). `act()` now retries the dump with back-off and keeps polling within the step timeout (so a transient failure no longer kills the step); for truly never-idle screens, fall back to `screenshot()` + coordinates. The error now reads "screen wouldn't settle…" instead of a bare "Failed".
- The soft keyboard (IME) is NOT in the UI dump, so a bottom button the dump reports can be physically covered by it — `act()` auto-hides the keyboard (ESCAPE, then BACK as fallback) before tapping non-text targets, then re-locates. This was the usual cause of flaky taps on NEXT/Submit right after typing.
- `uiautomator dump` kills a running uiautomator2/Appium session's accessibility service on some devices — don't mix with a live u2 script on the same device.
- Platform automation (Google/Shopee/TikTok/WA) → mention ban/limit risk; pace actions like a human.
- Self-update: on launch the UI compares the local git HEAD with GitHub and shows an "update available" banner with a one-click `git pull --ff-only`. HTTP: `/api/update/check`, `/api/update/pull` (git clone only; it won't flag unpushed local commits). Source repo: `muhrifqie/inceptor-ai`.
- Related: `mumu-device-ip`, `mumu-google-login`, `mumu-gplay-payment` (MuMu flows in `C:\BOT\Mumu Automate`).
