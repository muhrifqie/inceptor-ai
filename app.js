const ICONS = {
  layers:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
  grid:'<rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="8" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  sliders:'<path d="M4 6h10M18 6h2M4 12h2M10 12h10M4 18h8M16 18h4"/><circle cx="16" cy="6" r="2"/><circle cx="8" cy="12" r="2"/><circle cx="14" cy="18" r="2"/>',
  save:'<path d="M5 3h12l4 4v14H3V3z"/><path d="M7 3v6h8V3M8 21v-6h8v6"/>',
  check:'<path d="M5 12l4 4L19 7"/>',
  pencil:'<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M14 5l4 4"/>',
  refresh:'<path d="M21 12a9 9 0 1 1-2.6-6.4L21 8"/><path d="M21 3v5h-5"/>',
  camera:'<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
  radar:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 12l6-6"/>',
  link:'<path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/>',
  moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  help:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14"/><path d="M12 17h.01"/>',
  target:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/>',
  hand:'<path d="M9 11V5a1.5 1.5 0 0 1 3 0v6"/><path d="M12 10V4a1.5 1.5 0 0 1 3 0v7"/><path d="M15 10a1.5 1.5 0 0 1 3 0v4a7 7 0 0 1-7 7h-1a6 6 0 0 1-5-3l-2.5-4a1.5 1.5 0 0 1 2.5-1.6L9 15V9"/>',
  back:'<path d="M15 18l-6-6 6-6"/>', home:'<circle cx="12" cy="12" r="7"/>', square:'<rect x="6" y="6" width="12" height="12" rx="2"/>',
  send:'<path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4z"/>', search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
  expand:'<path d="M7 15l5 5 5-5M7 9l5-5 5 5"/>', collapse:'<path d="M7 20l5-5 5 5M7 4l5 5 5-5"/>',
  chev:'<path d="M6 9l6 6 6-6"/>', copy:'<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/>',
  tap:'<circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/>', cursor:'<path d="M4 4l7 17 2.5-7.5L21 11z"/>',
  up:'<path d="M12 19V5M5 12l7-7 7 7"/>',
  enter:'<path d="M20 5v7a3 3 0 0 1-3 3H5"/><path d="M9 11l-4 4 4 4"/>',
  bksp:'<path d="M8 5h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H8l-6-7z"/><path d="M11 9l6 6M17 9l-6 6"/>',
  keyboard:'<rect x="2.5" y="6" width="19" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10"/>',
  down:'<path d="M12 5v14M5 12l7 7 7-7"/>',
  flow:'<rect x="4" y="3" width="16" height="5" rx="1.5"/><rect x="4" y="16" width="16" height="5" rx="1.5"/><path d="M12 8v8"/>',
  clock:'<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  branch:'<circle cx="7" cy="5" r="2.5"/><circle cx="17" cy="19" r="2.5"/><circle cx="7" cy="19" r="2.5"/><path d="M7 7.5v9M7 12h7a3 3 0 0 1 3 3v1"/>',
  loop:'<path d="M4 9a8 8 0 0 1 14-4l3 2"/><path d="M20 15a8 8 0 0 1-14 4l-3-2"/><path d="M21 3v4h-4M3 21v-4h4"/>',
  dots:'<circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/>',
  play:'<path d="M7 4l13 8-13 8z"/>', stop:'<rect x="6" y="6" width="12" height="12" rx="2"/>',
  table:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M3 14h18M9 4v16"/>',
  fit:'<path d="M4 9V5a1 1 0 0 1 1-1h4M20 9V5a1 1 0 0 0-1-1h-4M4 15v4a1 1 0 0 0 1 1h4M20 15v4a1 1 0 0 1-1 1h-4"/>',
  applogo:'<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="3.2"/>',
  hold:'<circle cx="12" cy="11" r="3"/><path d="M12 14v6M9 20h6"/><path d="M5 7a7 7 0 0 1 14 0"/>',
  dbltap:'<circle cx="10" cy="10" r="3"/><circle cx="15" cy="15" r="3"/>',
  swipe:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  layv:'<rect x="9" y="3" width="6" height="5" rx="1.5"/><rect x="9" y="16" width="6" height="5" rx="1.5"/><path d="M12 8v8"/>',
  layh:'<rect x="3" y="9" width="5" height="6" rx="1.5"/><rect x="16" y="9" width="5" height="6" rx="1.5"/><path d="M8 12h8"/>',
  upload:'<path d="M12 21V9M8 13l4-4 4 4M5 4h14"/>',
  trash:'<path d="M5 7h14M10 4h4M6 7l1 13h10l1-13"/>',
  download:'<path d="M12 3v12M8 11l4 4 4-4M5 20h14"/>',
  apps:'<rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="4" width="7" height="7" rx="2"/><rect x="4" y="13" width="7" height="7" rx="2"/><rect x="13" y="13" width="7" height="7" rx="2"/>',
  spark:'<path d="M11 3.5l1.9 5.1 5.1 1.9-5.1 1.9L11 17.5l-1.9-5.1L4 10.5l5.1-1.9z"/><path d="M18.5 14.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z"/>',
  bot:'<rect x="4" y="8" width="16" height="11" rx="3"/><path d="M12 4v4M9 13h.01M15 13h.01M9.5 16h5"/>',
  k_btn:'<rect x="3.5" y="7" width="17" height="10" rx="3"/><path d="M9 12h6"/>',
  k_txt:'<path d="M6 6h12M12 6v12"/>',
  k_in:'<rect x="3" y="7" width="18" height="10" rx="2"/><path d="M8 10v4"/>',
  k_img:'<rect x="4" y="5" width="16" height="14" rx="2"/><circle cx="9" cy="10" r="1.5"/><path d="M20 16l-5-5-9 8"/>',
  k_list:'<path d="M9 7h11M9 12h11M9 17h11M4.5 7h.01M4.5 12h.01M4.5 17h.01"/>',
  k_tog:'<rect x="3" y="8" width="18" height="8" rx="4"/><circle cx="16" cy="12" r="2"/>',
  k_web:'<circle cx="12" cy="12" r="8"/><path d="M4 12h16M12 4a12 12 0 0 1 0 16M12 4a12 12 0 0 0 0 16"/>',
  k_box:'<rect x="5" y="5" width="14" height="14" rx="2" stroke-dasharray="3 2.5"/>',
  monitor:'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
  phone:'<rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M11 18h2"/>',
  wifi:'<path d="M2 8.5a15 15 0 0 1 20 0M5 12a10 10 0 0 1 14 0M8.5 15.5a5 5 0 0 1 7 0"/><path d="M12 19h.01"/>',
  loader:'<circle cx="12" cy="12" r="8.5" opacity=".25"/><path d="M20.5 12A8.5 8.5 0 0 0 12 3.5"/>',
  undo:'<path d="M9 14 4 9l5-5"/><path d="M4 9h10a6 6 0 1 1 0 12h-3"/>', redo:'<path d="M15 14l5-5-5-5"/><path d="M20 9H10a6 6 0 1 0 0 12h3"/>',
  more:'<circle cx="12" cy="5" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="12" cy="19" r="1.6"/>',
  power:'<path d="M12 3v8"/><path d="M6.3 7.3a8 8 0 1 0 11.4 0"/>', skip:'<path d="M5 5l9 7-9 7z"/><path d="M18 5v14"/>',
  video:'<rect x="3" y="6" width="13" height="12" rx="2"/><path d="M16 10.5l5-3v9l-5-3"/>', pause:'<path d="M9 5v14M15 5v14"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>', recdot:'<circle cx="12" cy="12" r="5" fill="currentColor"/>'
};
const ic = n => `<svg class="ic" viewBox="0 0 24 24">${ICONS[n]}</svg>`;
const paintIcons = (root=document) => root.querySelectorAll("svg[data-ic]").forEach(s => { s.setAttribute("viewBox","0 0 24 24"); s.innerHTML = ICONS[s.dataset.ic] });

const I18N = {
  id: {
    deviceHint:"Perangkat aktif", refreshDevices:"Muat ulang daftar perangkat", scan:"Cari Emulator", scanHint:"Cari otomatis emulator yang menyala di PC ini (MuMu, LDPlayer, Nox, MEmu, BlueStacks)",
    connect:"Sambungkan", connectHint:"Masukkan alamat ADB perangkat/emulator. Contoh MuMu: 127.0.0.1:16384 · HP via Wi-Fi: 192.168.1.20:5555", connectBtn:"Hubungkan",
    theme:"Ganti tema terang/gelap", help:"Bantuan & pintasan", screen:"Layar", inspect:"Inspeksi", control:"Kontrol",
    inspectHint:"Klik layar untuk memilih elemen · Alt+klik = elemen yang bisa diklik · klik kanan = menu (M)", controlHint:"Klik = tap, tahan = tekan lama, seret = swipe, scroll = gulir, ketik = keyboard ke perangkat · klik kanan = menu (M)",
    dump:"Ambil Layar", dumpHint:"Ambil screenshot + struktur UI terbaru (R)", back:"Kembali", home:"Beranda", recent:"Aplikasi terbaru",
    typeText:"Ketik teks (ASCII), Enter = kirim · Shift+Enter = kirim + Enter", send:"Kirim teks", live:"Live", liveHint:"Layar realtime (stream ~5 fps), struktur UI ikut diperbarui",
    welcome:"Mulai inspeksi UI Android", welcomeSub:"Lihat struktur layar aplikasi & dapatkan selector siap pakai dalam 3 langkah.",
    booting:"Memeriksa perangkat…", capturing:"Mengambil layar & struktur UI…", treeLoading:"Memuat struktur UI…",
    playground:"Playground", pgHint:"Susun alur otomasi langkah demi langkah (seperti n8n)", pgZoomHint:"Perbesar / perkecil / paskan", pgRewire:"Tarik ke node lain untuk menyambung (atas/bawah)", pgInsert:"Sisipkan langkah di sini", pgReroute:"Tarik ujung garis ke node lain", pgRefresh:"Ambil ulang layar", pgNoDev:"Pilih perangkat untuk melihat layarnya di sini", pgTitle:"Alur Otomasi",
    mcpHint:"Hubungkan ke AI agent (MCP) — setup 1 klik", mcpT:"Hubungkan ke AI agent", mcpSub:"Daftarkan server MCP Inceptor ke AI agent-mu. Pilih agent, salin, selesai — AI-nya yang beresin sisanya.",
    mcpStepCmd:"Jalankan perintah ini (klik untuk salin):", mcpStepJson:"Tambahkan ini ke file config agent-mu:", mcpStepToml:"Tambahkan ini ke file config agent-mu:", mcpClickCopy:"klik untuk salin",
    mcpStep2:"Restart agent", mcpStep2d:"Buka ulang {agent} biar tools Inceptor kebaca. Cek: minta agent \"list MCP tools\" — harus muncul android-inceptor.", mcpCopyCmd:"Salin perintah", mcpCopyConf:"Salin config", mcpAsk:"Suruh AI setup-in",
    mcpAskCmd:"Tolong daftarkan MCP server \"android-inceptor\" untuk saya dengan menjalankan perintah ini di terminal, lalu konfirmasi kalau sudah berhasil:\n{cmd}",
    mcpAskFile:"Tolong tambahkan MCP server \"android-inceptor\" ke config {agent} saya (file: {path}). Buat file-nya kalau belum ada, gabungkan jangan timpa isi yang sudah ada, lalu kasih tahu kalau perlu restart:\n{code}",
    mcpNote:"Syarat: server ini tetap jalan (python server.py) + adb ada di PATH. Dapat 20 tools: devices, ui_tree, tap, swipe, start_activity, emulator, dst.",
    emuMgr:"Emulator", emuHint:"Kelola emulator: buka, tutup, restart, buat, hapus", emuDesc:"Semua emulator yang terpasang di PC ini. Kontrol lewat CLI resmi tiap merek.", emuRefresh:"Segarkan", emuLaunch:"Buka", emuStop:"Tutup", emuRestart:"Restart", emuDelete:"Hapus", emuCreate:"Buat instance", emuRunning:"jalan", emuStopped:"mati", emuNoInst:"Belum ada instance", emuNoCreate:"Buat/hapus instance lewat Multi-Instance Manager (nggak ada CLI-nya)", emuConfirmDel:"Hapus instance \"{name}\"? Nggak bisa dibalikin. Klik Hapus sekali lagi.", emuNamePh:"Nama (opsional)", emuBusy:"Memproses…", emuDone:"Beres: {msg}",
    emuConfig:"Setting device", emuRename:"Ubah nama", emuClone:"Duplikat", emuTpl:"Template", emuTplSave:"Simpan", emuTplNew:"— template baru —", emuTplNone:"Belum ada template", emuApply:"Terapkan ke device ini", emuCfgTitle:"Setting · {name}", emuCfgCaps:"Didukung: {caps}", emuCfgNone:"Merek ini tidak bisa diatur via CLI", emuTplNamePrompt:"Nama template:", emuRenamePrompt:"Nama baru:", emuClonePrompt:"Nama instance baru (opsional):", emuCfgApplied:"Setting diterapkan — restart instance biar efektif", emuTplSaved:"Template \"{name}\" disimpan", emuTplDeleted:"Template dihapus", emuPickTpl:"Pilih dulu template yang mau dihapus", emuAndroidVer:"Versi Android",
    fCpu:"CPU (core)", fMemory:"RAM (MB)", fWidth:"Lebar", fHeight:"Tinggi", fDpi:"DPI", fManufacturer:"Manufacturer", fModel:"Model", fImei:"IMEI", fAndroidid:"Android ID", fMac:"MAC", fPhonenumber:"No. HP", fAutoHint:"isi \"auto\" buat acak",
    pgRun:"Jalankan", pgStop:"Hentikan", pgStopping:"Dihentikan", pgDone:"Alur selesai", pgFailAt:"Gagal di {t}", pgRunLog:"Log jalan", pgLogEmpty:"Belum ada run — klik Jalankan; kalau gagal, step, error, & XPath-nya muncul di sini.", pgLogClear:"Bersihkan log", pgLogStart:"Mulai jalan", updAvail:"Update tersedia", updN:"Update tersedia · {n} commit", updBtn:"Update sekarang", updView:"Lihat perubahan", updDismiss:"Tutup", updPulling:"Mengupdate…", updDone:"Terupdate ke {v} — restart server buat pakai", updFail:"Update gagal", updDirty:"Ada perubahan lokal yang belum di-commit. Pull bisa gagal/menimpa. Lanjut?",
    pgCopy:"Salin", pgImport:"Impor", pgImported:"Alur diimpor", pgImportBad:"Cuma file JSON yang bisa diimpor — export sebagai JSON dulu (Py/MCP itu kode buat dijalanin, bukan buat re-import).", pgDlFlow:"Unduh flow (.json — lengkap + data, bisa di-import balik)", pgDownloaded:"Flow diunduh (.json)", pgPreview:"Pratinjau kode", pgEmpty:"(alur kosong)",
    pgData:"Data", pgDataHint:"Jalankan alur untuk tiap baris data (variabel {{kolom}})", pgDataT:"Data loop (variabel)",
    pgDataDesc:"Alur dijalankan sekali untuk tiap baris. Pakai {{nama_kolom}} di teks, selector, atau package — nanti diganti nilai baris.",
    pgCol:"Kolom", pgRow2:"Baris", pgVars:"Variabel", pgNoVars:"Belum ada kolom — tambah kolom dulu", pgCsv:"Tempel CSV", pgCsvImp:"Impor CSV", pgRow:"Baris {i}/{n}",
    pgCount:"{n} langkah", pgEmptyT:"Alur masih kosong", pgEmptyS:"Klik + atau pilih node di kiri untuk mulai menyusun.",
    pgAct:"Aksi", pgWait:"Tunggu", pgLogic:"Logika", pgAdd:"Tambah langkah",
    pgBy:"Target", pgValPh:"nilai…", pgContains:"mengandung (contains)", pgFromSel:"Dari elemen terpilih", pgSec:"dtk",
    pgText:"Teks", pgKey:"Tombol", pgDir:"Arah", pgPkg:"Package", pgActivity:"Activity", pgDelay:"Jeda", pgTimes:"Ulang",
    pgThen:"maka", pgElse:"kalau tidak", pgSumWait:"{s} · ≤{n}dtk", pgSumGone:"{s} hilang · ≤{n}dtk",
    n_tap:"Tap", n_longpress:"Tahan (hold)", n_doubletap:"Tap ganda", n_text:"Ketik teks", n_key:"Tombol", n_swipe:"Swipe", n_scroll:"Scroll", n_launch:"Buka app", n_screenshot:"Screenshot",
    n_wait:"Tunggu muncul", n_gone:"Tunggu hilang", n_sleep:"Jeda", n_iff:"Jika elemen ada", n_repeat:"Ulangi", n_comment:"Catatan",
    pgFuncs:"Function", pgFuncTip:"Klik function untuk menambah langkah, atau nyalakan \"Ambil\" lalu klik elemen di layar HP.",
    pgGrab:"Ambil", pgGrabHint:"Ambil langkah dari layar: klik elemen di HP untuk menambahkannya ke alur", pgGrabOn:"Mode ambil aktif — klik elemen di layar HP", pgGrabOff:"Mode ambil mati",
    n_tapD:"Ketuk elemen", n_longpressD:"Tekan lama elemen", n_doubletapD:"Ketuk dua kali", n_textD:"Ketik teks ke field", n_keyD:"Tekan tombol sistem", n_swipeD:"Geser dari titik ke titik", n_scrollD:"Geser layar", n_launchD:"Jalankan aplikasi", n_shotD:"Ambil screenshot", pgHold:"Durasi", pgPkgPh:"Pilih aplikasi…", pgAppSearch:"Cari aplikasi…", pgActPick:"Pilih activity…", pgActSearch:"Cari activity (mis. \"add an account\")…", pgActLauncher:"(launcher — default)", pgArrange:"Rapikan otomatis", pgUndo:"Urungkan (Ctrl+Z)", pgArranged:"Flow dirapikan", pgNoUndo:"Nggak ada yang bisa diurungkan",
    n_waitD:"Tunggu elemen muncul", n_goneD:"Tunggu elemen hilang", n_sleepD:"Jeda beberapa milidetik", n_iffD:"Percabangan: jika ada → lalu/kalau tidak", n_repeatD:"Ulangi langkah N kali", n_commentD:"Catatan (tidak dijalankan)",
    vApp:"Aplikasi", appT:"Aplikasi & Intent", amCur:"Layar ini", amBrowse:"Semua aplikasi",
    ak_user:"Pengguna", ak_system:"Sistem", ak_all:"Semua", appSearchPh:"Cari package…", appSearchPh2:"Cari app, package, atau aktivitas (mis. \"add an account\")…", appPkgMatch:"{n} package cocok", appActSearching:"Mencari aktivitas di semua aplikasi…", appActNone:"Nggak ada aktivitas yang cocok", appActCount:"{n} aktivitas di {a} aplikasi", appListLoad:"Memuat daftar aplikasi…",
    appCount:"{n} aplikasi", appNone:"Tidak ada aplikasi", disabled:"nonaktif", appParse:"Membaca APK (activity, izin)…",
    appBack:"Daftar", appOpen:"Buka", appDisable:"Nonaktifkan", appEnable:"Aktifkan", appUninstall:"Hapus", sure:"Yakin?",
    appLinks:"Deep link", appActsH:"Activity", appActPh:"Cari activity…", appPerms:"Izin", scMake:"Buat shortcut",
    scOk:"Shortcut dibuat", opened:"Dibuka", appNoLog:"(log kosong)", appRefresh:"Baca ulang", appEmptyT:"Membaca aplikasi…", appLoading:"Mengambil intent layar yang sedang terbuka…",
    appAct:"Activity", appLaunch:"Activity launcher", copyJson:"Salin JSON",
    appExtras:"Intent ini membawa extras yang tidak bisa dibaca dari dumpsys — am start/URI di bawah dibuat tanpa extras.",
    mRec:"Merekam langkah", pmT:"Port emulator", pmSum:"{o} terbuka dari {n}", pmOk:"tersambung", pmOpen:"terbuka", pmShut:"tertutup",
    devsT:"Perangkat", devN:"{n} terdeteksi", devCur:"aktif",
    ldSetupSub:"Cukup sekali. Status tiap langkah diperbarui otomatis.", ldCmds:"Perintah ADB berguna", ldCmdsSub:"Klik perintah untuk menyalin, jalankan di terminal.",
    ldT:"Pengenalan", ldSetup:"Persiapan", ldTrouble:"Kalau belum terdeteksi", ldSkip:"Buka workspace tanpa perangkat",
    ldIntro:"Inceptor AI adalah mata & tangan Android untuk AI agent. Claude (atau agent lain lewat MCP) bisa melihat layar, membaca struktur UI, lalu tap, ketik, dan swipe di emulator maupun HP — sementara kamu memantau, merekam alur, dan mengambil selector dari browser ini.",
    tagline:"Inceptor AI — mata & tangan Android untuk AI agent", aiT:"Pakai dengan AI agent", aiSub:"Daftarkan server MCP sekali, lalu suruh Claude mengerjakan apa pun di emulator/HP dengan bahasa biasa.", aiExT:"Contoh perintah (klik untuk salin):",
    aiEx:"<q>Buka Play Store di emulator, cari “WhatsApp”, lalu screenshot hasilnya</q><q>Cek layar emulator sekarang, ada tombol apa saja yang bisa diklik?</q><q>Login ke app ini pakai akun tes, tunggu sampai beranda muncul</q><q>Ubah langkah rekaman ini jadi script uiautomator2 yang tahan ganti layout</q>",
    ldFeat:"<li><b>MCP untuk AI agent</b>13 tool siap pakai: lihat layar, baca struktur UI, tap/ketik/swipe/scroll, tunggu elemen, kelola app, adb shell</li><li><b>Hemat token</b>Struktur UI diringkas jadi teks + koordinat, AI jarang perlu screenshot</li><li><b>Selector yang tahan lama</b>resource-id, teks, deskripsi, XPath — dinilai Terbaik sampai Rapuh, AI pakai yang paling stabil</li><li><b>Pantau AI secara live</b>Stream layar ~5 fps; lihat apa yang dikerjakan agent, ambil alih kapan saja</li><li><b>Rekam → langkah AI</b>Rekam alur tanpa koordinat, ekspor jadi panggilan MCP atau Python uiautomator2</li><li><b>Inspeksi & uji XPath</b>Klik elemen untuk lihat atributnya; ketik XPath, hasilnya disorot di layar</li>",
    l1:"ADB terpasang di PC", l1d:"Android Debug Bridge (platform-tools) harus ada di PATH. Belum ada? Pasang lewat perintah di bawah, lalu buka ulang terminal & jalankan <code>adb version</code>.",
    l1ok:"✓ ADB siap", l1bad:"✗ ADB error",
    l2:"Server Inceptor AI jalan", l2d:"Halaman ini dibuka dari server lokal — kalau kamu bisa membaca ini, langkah ini sudah beres.", l2ok:"✓ Jalan di {h}",
    l3:"Sambungkan perangkat", l4:"Deteksi otomatis",
    l4d:"Halaman ini memindai port emulator & daftar ADB tiap 5 detik. Begitu perangkat online, workspace terbuka dan layar + struktur UI langsung diambil.",
    thPort:"Port ADB", thNote:"Instance berikutnya",
    portsB:"<tr><td>MuMu Player 12</td><td>16384</td><td>+32 (16416, 16448…)</td></tr><tr><td>MuMu (versi lama)</td><td>7555</td><td>—</td></tr><tr><td>LDPlayer 9</td><td>5555</td><td>+2 (5557, 5559…)</td></tr><tr><td>Nox</td><td>62001</td><td>62025, 62026…</td></tr><tr><td>MEmu</td><td>21503</td><td>+10 (21513…)</td></tr><tr><td>BlueStacks 5</td><td>5555</td><td>+10 (5565, 5575…)</td></tr>",
    dh_unauthorized:"Buka kunci HP lalu ketuk Izinkan (centang Selalu izinkan)", dh_offline:"Emulator masih booting atau koneksi macet — tunggu; kalau lama, jalankan adb kill-server", dh_other:"Perangkat belum siap, tunggu sebentar",
    ldFaq:"<details><summary>Status “unauthorized”</summary><p>HP belum mengizinkan PC ini. Buka kunci layar HP, ketuk <b>Izinkan</b> dan centang <b>Selalu izinkan</b>. Pop-up nggak muncul? Opsi pengembang → <b>Cabut otorisasi debug USB</b>, lalu cabut-colok kabelnya.</p></details><details><summary>Status “offline” atau sering putus</summary><p>Jalankan <code>adb kill-server</code> lalu <code>adb start-server</code>. Emulator membawa adb versi sendiri yang bisa bentrok dengan platform-tools — usahakan pakai satu versi adb saja.</p></details><details><summary>Emulator nyala tapi tidak ketemu</summary><p>Pastikan ADB di pengaturan emulator aktif, lalu klik <b>Sambungkan</b> dan isi port dari tabel di atas, mis. <code>127.0.0.1:16384</code>. Multi-instance: tiap instance punya port sendiri.</p></details><details><summary>HP lewat USB tidak muncul sama sekali</summary><p>Pakai kabel data (bukan kabel cas saja), pilih mode USB <b>Transfer file</b>, dan di Windows pasang driver USB dari merek HP-nya. Cek di terminal dengan <code>adb devices</code>.</p></details><details><summary>Perangkat ada, tapi struktur UI gagal diambil</summary><p>Layar yang terus beranimasi (video, game) bikin <code>uiautomator dump</code> gagal. Jeda videonya atau pindah layar, lalu Ambil Layar lagi. Jangan dijalankan bareng script uiautomator2/Appium yang sedang aktif.</p></details>",
    ndT:"Belum ada perangkat terdeteksi", ndSub:"Nyalakan emulator atau colok HP — halaman ini otomatis mendeteksinya.",
    waiting:"Mendeteksi otomatis tiap 5 detik", adbErr:"ADB bermasalah: {e}", found:"Perangkat terdeteksi: {d}",
    hEmu:"Emulator di PC (MuMu, LDPlayer, Nox, BlueStacks)",
    hEmuB:"<li>Buka emulatornya sampai masuk layar utama Android</li><li>Aktifkan ADB: <b>MuMu</b> sudah aktif bawaan · <b>LDPlayer</b> Pengaturan → Lainnya → Debugging ADB: <b>Buka koneksi lokal</b> · <b>BlueStacks</b> Pengaturan → Lanjutan → <b>Android Debug Bridge</b></li><li>Tunggu sebentar, port emulator dipindai otomatis</li>",
    hUsb:"HP lewat kabel USB",
    hUsbB:"<li>Pengaturan → Tentang ponsel → ketuk <b>Nomor bentukan</b> 7× (Opsi pengembang aktif)</li><li>Opsi pengembang → nyalakan <b>Debugging USB</b></li><li>Colok kabel data, lalu ketuk <b>Izinkan</b> di pop-up HP</li>",
    hWifi:"HP lewat Wi-Fi (satu jaringan)",
    hWifiB:"<li>Android 11+: Opsi pengembang → <b>Debugging nirkabel</b> → Sambungkan dengan kode</li><li>Di PC jalankan <code>adb pair IP:PORT</code> lalu masukkan kodenya</li><li>Klik <b>Sambungkan</b>, isi <code>IP:PORT</code> yang tampil di layar Debugging nirkabel</li>",
    s1:"Klik “Cari Emulator” atau “Sambungkan” untuk memilih perangkat", s2:"Klik “Ambil Layar” (atau tekan R)", s3:"Arahkan & klik elemen di layar — detail dan selector muncul di kanan",
    tree:"Struktur UI", search:"Cari teks, id, deskripsi, class…", expand:"Buka semua", collapse:"Tutup semua", treeEmpty:"Struktur UI muncul setelah mengambil layar.",
    noSel:"Belum ada elemen dipilih", noSelSub:"Klik elemen di layar atau di struktur UI.",
    noDev:"Belum ada perangkat — klik “Cari Emulator”", copied:"Disalin", identity:"Identitas", position:"Posisi & Ukuran", flags:"Status",
    tSel:"Selector", tProps:"Properti", tCode:"Kode", selHint:"Klik kartu untuk menyalin. Paling stabil di atas.", center:"Titik tengah", size:"Ukuran",
    nodes:"elemen", tapHere:"Tap", copyBest:"Salin selector terbaik", parent:"Induk", scanDone:"{n} port emulator ditemukan", scanNone:"Tidak ada emulator menyala ditemukan",
    tapped:"Tap", err:"Gagal", matches:"{n} cocok", unique:"unik", absXp:"XPath absolut", captured:"Diambil {t}",
    best:"Terbaik", good:"Bagus", ok:"Cukup", fragile:"Rapuh",
    h_class:"Jenis komponen Android (tombol, teks, gambar, dll)", h_rid:"ID dari developer. Paling stabil untuk selector", h_text:"Teks yang terlihat di layar. Bisa berubah kalau bahasa/konten berubah",
    h_desc:"Label aksesibilitas (sering dipakai di tombol ikon)", h_pkg:"Nama paket aplikasi pemilik elemen", h_bounds:"Kotak posisi [kiri,atas][kanan,bawah] dalam piksel",
    rec:"Rekam", recStop:"Stop", recHint:"Rekam aksi (tap, swipe, tombol, teks) jadi script siap jalan", qText:"Teks", qModeHint:"Cari teks biasa, atau uji ekspresi XPath langsung",
    searchX:"//*[@text='…']  ·  Enter = hasil berikutnya", vEl:"Elemen", vRec:"Langkah", steps:"{n} langkah", replay:"Putar ulang", stopReplay:"Hentikan",
    clear:"Hapus semua", download:"Unduh", recOn:"Merekam — tap/swipe di layar, tombol & teks dicatat", waitHere:"Tunggu elemen ini", test:"Uji", copyS:"Salin",
    xpErr:"XPath tidak valid", opTap:"Tap", opWait:"Tunggu muncul", opSwipe:"Swipe", opKey:"Tombol", opText:"Ketik", byXY:"koordinat (tanpa selector stabil)",
    replayDone:"Replay selesai ✓", replayFail:"Gagal di langkah {n}: {e}", recEmptyT:"Belum ada langkah", recEmptyS:"Klik Rekam, lalu tap/swipe di layar, pakai tombol Back/Home, atau kirim teks. Pilih elemen lalu “Tunggu elemen ini” untuk langkah tunggu.",
    exportLbl:"Ekspor", confirmClear:"Hapus semua langkah rekaman?",
    reading:"Membaca elemen…", noElem:"Tidak ada elemen di titik ini — langkah tidak direkam", params:"Parameter acuan (centang yang dipakai)",
    contains:"Cocok sebagian (contains)", timeout:"Timeout", optional:"Opsional — lewati kalau tidak ada", optShort:"opsional",
    nth:"urutan ke-{k} dari {n}", minParam:"Minimal 1 parameter harus dicentang",
    runFrom:"Jalankan mulai langkah ini", delStep:"Hapus langkah", clearSure:"Yakin? Klik lagi", cleared:"Rekaman dihapus",
    fromHome:"Mulai dari layar Home (tekan Home dulu sebelum langkah 1)", goingHome:"Ke layar Home…", running:"▶ Langkah {k}/{n}: {what}",
    stopping:"Menghentikan setelah langkah ini…", stopped:"■ Dihentikan setelah langkah {k}", retry:"Coba lagi", skip:"Lewati", dismiss:"Tutup",
    notFound:"elemen “{w}” tidak ditemukan dalam {s} detik", nowAt:"Layar sekarang: {a}",
    failHint:"Pastikan layar awal sama seperti saat merekam, centang “Mulai dari Home”, atau ubah parameter/centang Opsional di langkah ini.",
    willRec:"Akan direkam", adbNote:"# ADB tidak punya selector — koordinat diambil dari posisi elemen saat direkam",
    streamRetry:"Stream putus — menyambung ulang…", noMatch:"Tidak ada yang cocok dengan “{q}”", noHit:"0 cocok",
    recPaused:"Rekam dijeda (mode Inspeksi, tekan M)", kbdChip:"Keyboard → perangkat", asciiOnly:"Cuma bisa ketik ASCII (tanpa emoji/aksen) lewat adb",
    longPressed:"Tekan lama", quotaFull:"Penyimpanan browser penuh — rekaman tidak tersimpan. Hapus langkah lama atau ekspor dulu.",
    opLong:"Tekan lama", enterKey:"Enter (perangkat)", bkspKey:"Hapus / Backspace (perangkat)",
    cmXPath:"Salin XPath absolut", cmRid:"Salin resource-id", cmText:"Salin text", cmDesc:"Salin content-desc", cmCenter:"Salin titik tengah (x, y)",
    cmTest:"Uji XPath terbaik", cmLong:"Tekan lama", cmPgTap:"Playground: + Tap", cmPgWait:"Playground: + Tunggu muncul", cmPgIf:"Playground: + Jika ada",
    kCtl:"Mode Kontrol + kursor di layar: ketik/Enter/⌫/Tab/panah langsung ke perangkat, Esc = Back, scroll = gulir", kCtx:"Klik kanan elemen (layar/struktur) = menu salin / tap / Playground", kRmb:"Klik kanan",
    kR:"Ambil layar", kM:"Ganti mode Inspeksi / Kontrol", kSlash:"Fokus ke pencarian", kArrows:"Pindah ke elemen sebelum/berikutnya di struktur", kC:"Salin selector terbaik", kEsc:"Batalkan pilihan",
    helpSel:"Tips: pilih selector berlabel “Terbaik” atau “Bagus”. Selector “Rapuh” (XPath absolut) mudah rusak saat tampilan aplikasi berubah. Lebar panel bisa digeser dari garis di antaranya.",
    pgRedo:"Ulangi (Ctrl+Shift+Z / Ctrl+Y)", pgNoRedo:"Nggak ada yang bisa diulang", pgUndone:"Diurungkan", pgRedone:"Diulang",
    pgDeleted:"Langkah dihapus — Ctrl+Z buat urungkan", pgCleared:"Alur dikosongkan — Ctrl+Z buat urungkan", pgClearT:"Kosongkan alur", pgClearSure:"Klik sekali lagi buat kosongkan alur",
    pgLib:"Daftar flow", pgNew:"Flow baru", pgRename:"Ganti nama", pgDup:"Duplikat flow", pgDelFlow:"Hapus flow", pgFlowName:"Nama flow", pgFlowN:"Flow {n}", pgCopyOf:"{name} (salinan)",
    pgDelFlowQ:"Hapus flow “{name}” ({n} langkah + datanya)? Ini nggak bisa diurungkan.", pgFlowDeleted:"Flow dihapus", pgImportedAs:"Diimpor sebagai flow baru: {name}", pgImportDrop:"{n} langkah tak dikenal dilewati",
    pgCancel:"Batal", pgOk:"OK", pgDelete:"Hapus",
    pgMore:"Opsi langkah", pgRunOne:"Jalankan langkah ini saja", pgRunFrom:"Jalankan dari sini", pgDisable:"Nonaktifkan", pgEnable:"Aktifkan", pgDupStep:"Duplikat (Ctrl+D)", pgDelStep:"Hapus (Del)",
    pgSkipped:"dilewati (nonaktif)", pgBusy:"Alur lagi jalan — stop dulu", pgOffBadge:"nonaktif", pgStopped:"Dihentikan",
    pgFragile:"Nggak ada selector unik — pakai XPath absolut (rapuh)", pgMulti:"cocok {n} elemen, yang pertama dipakai", pgWaitUpTo:"Tunggu s.d.", pgIfErr:"cek gagal: {e}",
    pgCsvDone:"CSV: {c} kolom, {n} baris", pgAppSearchFree:"Cari aplikasi… atau ketik paket / {v} + Enter",
    recToPg:"Ke Playground", recToPgQ:"Ubah {n} langkah rekaman jadi node Playground:", recToPgAppend:"Tambah ke “{name}”", recToPgNew:"Jadi flow baru", recToPgDone:"{n} node masuk Playground", recFlowName:"Rekaman {d}",
    kPgKeys:"Playground: urungkan / ulangi · Del hapus langkah terpilih · Ctrl+D duplikat",
    noDevShort:"Pilih perangkat", appUnSure:"Hapus {name}? Klik lagi", emuDelSure:"Hapus “{name}”?", emuBooting:"menyalakan…", emuReady:"Emulator {name} siap",
    emuNoneFound:"Belum ada emulator terdeteksi di PC ini", emuSupported:"Yang didukung: {list}", emuLastMsg:"Terakhir: {msg}",
    appBackupBtn:"Backup APK", appBackupT:"APK disimpan ({n} file)", appSplit:"split APK — pasang lagi pakai adb install-multiple", copyPath:"Salin path",
    appNoUser:"Tidak ada app pengguna di perangkat ini", appShowAll:"Tampilkan semua app", appStatAct:"activity", appStatExp:"exported", appStatPerm:"izin",
    moveUp:"Naikkan", moveDown:"Turunkan", pgGrabAs:"Ambil sebagai", zoomOut:"Perkecil", zoomFit:"Paskan ke layar", zoomIn:"Perbesar",
    mcpOrProject:"(atau .cursor\\mcp.json di root project)", mcpInProject:"(di root project)", mcpErr:"Gagal membaca info MCP: {e}", mcpSetup:"Setup MCP 1 klik",
    updReload:"Muat ulang halaman", dpReconnect:"Sambung ulang", dpDrop:"Lepas", gutHint:"Seret untuk ubah lebar · klik dua kali = reset",
    palBtn:"Perintah", palHint:"Palet perintah — cari & jalankan aksi apa pun (Ctrl+K)", palPh:"Ketik perintah, aplikasi, atau perangkat…", palNone:"Nggak ada yang cocok dengan “{q}”",
    palRecent:"Terakhir dipakai", palAll:"Semua perintah", palNav:"↑↓ pilih · Enter jalankan · Esc tutup", palAppsLoad:"memuat aplikasi…", palAppsN:"{n} aplikasi",
    palGScreen:"Layar", palGView:"Tampilan", palGDev:"Perangkat", palGApp:"Aplikasi",
    cLiveOn:"Nyalakan Live", cLiveOff:"Matikan Live", cInspect:"Mode Inspeksi", cControl:"Mode Kontrol", cRecOn:"Mulai rekam langkah", cRecOff:"Stop rekam langkah",
    cTabEl:"Buka tab Elemen", cTabRec:"Buka tab Langkah", cTabApp:"Buka tab Aplikasi", cTabLog:"Buka Logcat", cPlay:"Buka Playground", cEmu:"Kelola emulator", cMcp:"Hubungkan ke AI agent (MCP)",
    cLang:"Bahasa: English", cConn:"Sambungkan perangkat…", cSwitch:"Pindah ke {d}", cOpenApp:"Buka app: {a}", cOpenAct:"Buka activity…", cOpenActQ:"Cari activity “{q}”",
    cKey:"Tombol {k}", cLogClear:"Bersihkan logcat",
    saveShot:"Simpan screenshot (PNG)", shotSaved:"Screenshot disimpan: {f}",
    srec:"Rekam layar", cSrecOn:"Rekam layar (video MP4)", cSrecOff:"Stop rekam layar & unduh", srecHint:"Rekam layar jadi video MP4 (maks 3 menit) — beda dengan “Rekam” yang mencatat langkah",
    srecStopHint:"Stop rekam layar & unduh video", srecOn:"Merekam layar… klik tombol lagi untuk berhenti", srecSaving:"Menyimpan video…", srecDone:"Video diunduh",
    srecLimit:"Batas 3 menit tercapai — video diunduh", srecLost:"rekaman berhenti tanpa file",
    infoT:"Info perangkat", infoRefresh:"Muat ulang", infoClick:"Klik nilai mana pun untuk menyalin.", infoAndroid:"Android", infoAbi:"ABI", infoScreen:"Layar", infoBatt:"Baterai",
    infoIp:"IP", infoUp:"Uptime", infoStore:"Penyimpanan", infoRam:"RAM", infoFree:"{f} bebas dari {t}", upD:"{d} hari {h} jam", upH:"{h} jam {m} mnt",
    bat_charging:"mengisi", bat_discharging:"tidak dicas", bat_full:"penuh", bat_not_charging:"tidak mengisi",
    vLog:"Logcat", logGrep:"Saring tag / pesan…", logLevel:"Level minimum", logPause:"Jeda", logResume:"Lanjut", logCopy:"Salin baris yang tampil", logCopied:"{n} baris disalin",
    logClear:"Bersihkan buffer logcat di perangkat", logCleared:"Logcat dibersihkan", logCur:"App ini saja", logPkgHint:"App yang dipantau · klik = ganti ke app yang tampil sekarang",
    logEmpty:"Belum ada baris log", logNoMatch:"Nggak ada baris yang cocok sama filter", logNoRun:"{p} lagi nggak jalan — buka app-nya dulu", logNoPkg:"App di depan belum ketahuan — ambil layar dulu", logLatest:"Ke terbaru",
    logRows:"{n} baris", logPaused:"dijeda", logGap:"… sebagian baris terlewat (log terlalu ramai) …",
    kK:"Palet perintah — cari & jalankan aksi apa pun", kEnter:"Di pencarian: hasil berikutnya (Shift+Enter = sebelumnya)", kTreeLR:"Di struktur: tutup / buka node, atau ke induk / anak",
    kAltK:"Alt+klik", kAlt:"Mode Inspeksi: pilih elemen yang bisa diklik (bukan anaknya)"
  },
  en: {
    deviceHint:"Active device", refreshDevices:"Reload device list", scan:"Find Emulators", scanHint:"Auto-detect running emulators on this PC (MuMu, LDPlayer, Nox, MEmu, BlueStacks)",
    connect:"Connect", connectHint:"Enter the device/emulator ADB address. MuMu: 127.0.0.1:16384 · phone over Wi-Fi: 192.168.1.20:5555", connectBtn:"Connect",
    theme:"Toggle light/dark theme", help:"Help & shortcuts", screen:"Screen", inspect:"Inspect", control:"Control",
    inspectHint:"Click the screen to select an element · Alt+click = the clickable element · right-click = menu (M)", controlHint:"Click = tap, hold = long-press, drag = swipe, wheel = scroll, type = keyboard to the device · right-click = menu (M)",
    dump:"Capture", dumpHint:"Grab a fresh screenshot + UI tree (R)", back:"Back", home:"Home", recent:"Recent apps",
    typeText:"Type text (ASCII), Enter = send · Shift+Enter = send + Enter", send:"Send text", live:"Live", liveHint:"Realtime screen (~5 fps stream), UI tree keeps refreshing",
    welcome:"Start inspecting Android UI", welcomeSub:"See an app's screen structure & get ready-to-use selectors in 3 steps.",
    booting:"Checking devices…", capturing:"Grabbing screen & UI tree…", treeLoading:"Loading UI tree…",
    playground:"Playground", pgHint:"Build an automation flow step by step (n8n-style)", pgZoomHint:"Zoom out / fit / in", pgRewire:"Drag onto another node to connect (top/bottom)", pgInsert:"Insert a step here", pgReroute:"Drag the line end to another node", pgRefresh:"Recapture screen", pgNoDev:"Pick a device to mirror its screen here", pgTitle:"Automation Flow",
    mcpHint:"Connect to an AI agent (MCP) — 1-click setup", mcpT:"Connect to an AI agent", mcpSub:"Register Inceptor's MCP server with your AI agent. Pick an agent, copy, done — let the AI handle the rest.",
    mcpStepCmd:"Run this command (click to copy):", mcpStepJson:"Add this to your agent's config file:", mcpStepToml:"Add this to your agent's config file:", mcpClickCopy:"click to copy",
    mcpStep2:"Restart the agent", mcpStep2d:"Reopen {agent} so the Inceptor tools load. Check: ask the agent to \"list MCP tools\" — android-inceptor should appear.", mcpCopyCmd:"Copy command", mcpCopyConf:"Copy config", mcpAsk:"Let the AI set it up",
    mcpAskCmd:"Please register the \"android-inceptor\" MCP server for me by running this in the terminal, then confirm it worked:\n{cmd}",
    mcpAskFile:"Please add the \"android-inceptor\" MCP server to my {agent} config (file: {path}). Create the file if missing, merge don't overwrite existing content, then tell me if a restart is needed:\n{code}",
    mcpNote:"Requires this server running (python server.py) + adb on PATH. You get 20 tools: devices, ui_tree, tap, swipe, start_activity, emulator, and more.",
    emuMgr:"Emulators", emuHint:"Manage emulators: open, close, restart, create, delete", emuDesc:"Every emulator installed on this PC. Controlled through each brand's official CLI.", emuRefresh:"Refresh", emuLaunch:"Open", emuStop:"Close", emuRestart:"Restart", emuDelete:"Delete", emuCreate:"Create instance", emuRunning:"running", emuStopped:"stopped", emuNoInst:"No instances yet", emuNoCreate:"Create/delete instances via the Multi-Instance Manager (no CLI)", emuConfirmDel:"Delete instance \"{name}\"? This can't be undone. Click Delete again.", emuNamePh:"Name (optional)", emuBusy:"Working…", emuDone:"Done: {msg}",
    emuConfig:"Device settings", emuRename:"Rename", emuClone:"Clone", emuTpl:"Template", emuTplSave:"Save", emuTplNew:"— new template —", emuTplNone:"No templates yet", emuApply:"Apply to this device", emuCfgTitle:"Settings · {name}", emuCfgCaps:"Supported: {caps}", emuCfgNone:"This brand can't be configured via CLI", emuTplNamePrompt:"Template name:", emuRenamePrompt:"New name:", emuClonePrompt:"New instance name (optional):", emuCfgApplied:"Settings applied — restart the instance to take effect", emuTplSaved:"Template \"{name}\" saved", emuTplDeleted:"Template deleted", emuPickTpl:"Pick a template to delete first", emuAndroidVer:"Android version",
    fCpu:"CPU (cores)", fMemory:"RAM (MB)", fWidth:"Width", fHeight:"Height", fDpi:"DPI", fManufacturer:"Manufacturer", fModel:"Model", fImei:"IMEI", fAndroidid:"Android ID", fMac:"MAC", fPhonenumber:"Phone no.", fAutoHint:'use "auto" to randomize',
    pgRun:"Run", pgStop:"Stop", pgStopping:"Stopped", pgDone:"Flow finished", pgFailAt:"Failed at {t}", pgRunLog:"Run log", pgLogEmpty:"No runs yet — hit Run; failures show here with the step, error, and XPath.", pgLogClear:"Clear log", pgLogStart:"Run started", updAvail:"Update available", updN:"Update available · {n} commits", updBtn:"Update now", updView:"View changes", updDismiss:"Dismiss", updPulling:"Updating…", updDone:"Updated to {v} — restart the server", updFail:"Update failed", updDirty:"You have uncommitted local changes. Pull may fail or overwrite them. Continue?",
    pgCopy:"Copy", pgImport:"Import", pgImported:"Flow imported", pgImportBad:"Only JSON files import — export as JSON first (Py/MCP are code to run, not for re-import).", pgDlFlow:"Download flow (.json — full + data, re-importable)", pgDownloaded:"Flow downloaded (.json)", pgPreview:"Code preview", pgEmpty:"(empty flow)",
    pgData:"Data", pgDataHint:"Run the flow for each data row (variables {{col}})", pgDataT:"Data loop (variables)",
    pgDataDesc:"The flow runs once per row. Use {{column_name}} in text, selector, or package — it is replaced with the row value.",
    pgCol:"Column", pgRow2:"Row", pgVars:"Variables", pgNoVars:"No columns yet — add one first", pgCsv:"Paste CSV", pgCsvImp:"Import CSV", pgRow:"Row {i}/{n}",
    pgCount:"{n} steps", pgEmptyT:"Flow is empty", pgEmptyS:"Click + or pick a node on the left to start building.",
    pgAct:"Actions", pgWait:"Waits", pgLogic:"Logic", pgAdd:"Add step",
    pgBy:"Target", pgValPh:"value…", pgContains:"contains", pgFromSel:"From selected element", pgSec:"s",
    pgText:"Text", pgKey:"Key", pgDir:"Direction", pgPkg:"Package", pgActivity:"Activity", pgDelay:"Delay", pgTimes:"Repeat",
    pgThen:"then", pgElse:"else", pgSumWait:"{s} · ≤{n}s", pgSumGone:"{s} gone · ≤{n}s",
    n_tap:"Tap", n_longpress:"Long press", n_doubletap:"Double tap", n_text:"Type text", n_key:"Key", n_swipe:"Swipe", n_scroll:"Scroll", n_launch:"Open app", n_screenshot:"Screenshot",
    n_wait:"Wait for element", n_gone:"Wait until gone", n_sleep:"Delay", n_iff:"If element exists", n_repeat:"Repeat", n_comment:"Comment",
    pgFuncs:"Functions", pgFuncTip:"Click a function to add a step, or turn on \"Grab\" then tap an element on the phone screen.",
    pgGrab:"Grab", pgGrabHint:"Grab a step from the screen: tap an element on the phone to add it to the flow", pgGrabOn:"Grab mode on — tap an element on the phone screen", pgGrabOff:"Grab mode off",
    n_tapD:"Tap an element", n_longpressD:"Press and hold an element", n_doubletapD:"Tap twice quickly", n_textD:"Type text into a field", n_keyD:"Press a system key", n_swipeD:"Swipe from point to point", n_scrollD:"Scroll the screen", n_launchD:"Launch an app", n_shotD:"Take a screenshot", pgHold:"Duration", pgPkgPh:"Pick an app…", pgAppSearch:"Search apps…", pgActPick:"Pick activity…", pgActSearch:"Search activity (e.g. \"add an account\")…", pgActLauncher:"(launcher — default)", pgArrange:"Auto-arrange", pgUndo:"Undo (Ctrl+Z)", pgArranged:"Flow tidied", pgNoUndo:"Nothing to undo",
    n_waitD:"Wait for an element to appear", n_goneD:"Wait until an element is gone", n_sleepD:"Pause for milliseconds", n_iffD:"Branch: if exists → then/else", n_repeatD:"Repeat steps N times", n_commentD:"Note (not executed)",
    vApp:"App", appT:"App & Intent", amCur:"This screen", amBrowse:"All apps",
    ak_user:"User", ak_system:"System", ak_all:"All", appSearchPh:"Search package…", appSearchPh2:"Search apps, packages or activities (e.g. \"add an account\")…", appPkgMatch:"{n} packages match", appActSearching:"Searching activities across all apps…", appActNone:"No matching activities", appActCount:"{n} activities in {a} apps", appListLoad:"Loading app list…",
    appCount:"{n} apps", appNone:"No apps", disabled:"disabled", appParse:"Reading APK (activities, permissions)…",
    appBack:"Apps", appOpen:"Open", appDisable:"Disable", appEnable:"Enable", appUninstall:"Uninstall", sure:"Sure?",
    appLinks:"Deep links", appActsH:"Activities", appActPh:"Search activity…", appPerms:"Permissions", scMake:"Make shortcut",
    scOk:"Shortcut created", opened:"Opened", appNoLog:"(empty log)", appRefresh:"Read again", appEmptyT:"Reading app…", appLoading:"Fetching the intent of the current screen…",
    appAct:"Activity", appLaunch:"Launcher activity", copyJson:"Copy JSON",
    appExtras:"This intent carries extras that dumpsys can't show — the am start/URI below are built without them.",
    mRec:"Recording steps", pmT:"Emulator ports", pmSum:"{o} of {n} open", pmOk:"connected", pmOpen:"open", pmShut:"closed",
    devsT:"Devices", devN:"{n} detected", devCur:"active",
    ldSetupSub:"One-time setup. Each step's status updates automatically.", ldCmds:"Handy ADB commands", ldCmdsSub:"Click a command to copy it, run it in a terminal.",
    ldT:"Introduction", ldSetup:"Setup", ldTrouble:"Still not detected?", ldSkip:"Open workspace without a device",
    ldIntro:"Inceptor AI is Android eyes & hands for AI agents. Claude (or any agent over MCP) can see the screen, read the UI tree, then tap, type and swipe on emulators or phones — while you watch, record flows and grab selectors from this browser.",
    tagline:"Inceptor AI — Android eyes & hands for AI agents", aiT:"Use it with an AI agent", aiSub:"Register the MCP server once, then ask Claude to do anything on the emulator/phone in plain language.", aiExT:"Example prompts (click to copy):",
    aiEx:"<q>Open the Play Store on the emulator, search “WhatsApp” and screenshot the results</q><q>Check the emulator screen — which buttons can be tapped right now?</q><q>Log into this app with the test account and wait for the home screen</q><q>Turn these recorded steps into a uiautomator2 script that survives layout changes</q>",
    ldFeat:"<li><b>MCP for AI agents</b>13 ready tools: see the screen, read the UI tree, tap/type/swipe/scroll, wait for elements, manage apps, adb shell</li><li><b>Token-friendly</b>The UI tree is condensed to text + coordinates, so the AI rarely needs screenshots</li><li><b>Durable selectors</b>resource-id, text, description, XPath — rated Best to Fragile, the AI uses the most stable one</li><li><b>Watch the AI live</b>~5 fps screen stream; see what the agent does, take over any time</li><li><b>Record → AI steps</b>Record coordinate-free flows, export them as MCP calls or uiautomator2 Python</li><li><b>Inspect & test XPath</b>Click an element to see its attributes; type an XPath and matches light up</li>",
    l1:"ADB installed on this PC", l1d:"Android Debug Bridge (platform-tools) must be on PATH. Missing? Install it with the command below, reopen the terminal and run <code>adb version</code>.",
    l1ok:"✓ ADB ready", l1bad:"✗ ADB error",
    l2:"Inceptor AI server running", l2d:"This page is served by the local server — if you can read this, this step is done.", l2ok:"✓ Running at {h}",
    l3:"Connect a device", l4:"Automatic detection",
    l4d:"This page scans emulator ports and the ADB device list every 5 seconds. As soon as a device is online, the workspace opens and grabs the screen + UI tree.",
    thPort:"ADB port", thNote:"Next instances",
    portsB:"<tr><td>MuMu Player 12</td><td>16384</td><td>+32 (16416, 16448…)</td></tr><tr><td>MuMu (legacy)</td><td>7555</td><td>—</td></tr><tr><td>LDPlayer 9</td><td>5555</td><td>+2 (5557, 5559…)</td></tr><tr><td>Nox</td><td>62001</td><td>62025, 62026…</td></tr><tr><td>MEmu</td><td>21503</td><td>+10 (21513…)</td></tr><tr><td>BlueStacks 5</td><td>5555</td><td>+10 (5565, 5575…)</td></tr>",
    dh_unauthorized:"Unlock the phone and tap Allow (tick Always allow)", dh_offline:"Emulator still booting or connection stuck — wait; if it takes long, run adb kill-server", dh_other:"Device not ready yet, give it a moment",
    ldFaq:"<details><summary>Status “unauthorized”</summary><p>The phone hasn't trusted this PC yet. Unlock it, tap <b>Allow</b> and tick <b>Always allow</b>. No prompt? Developer options → <b>Revoke USB debugging authorizations</b>, then replug the cable.</p></details><details><summary>Status “offline” or keeps dropping</summary><p>Run <code>adb kill-server</code> then <code>adb start-server</code>. Emulators ship their own adb that can clash with platform-tools — try to stick to one adb version.</p></details><details><summary>Emulator is running but not found</summary><p>Make sure ADB is enabled in the emulator settings, then click <b>Connect</b> and enter the port from the table above, e.g. <code>127.0.0.1:16384</code>. Multi-instance: each instance has its own port.</p></details><details><summary>USB phone doesn't show up at all</summary><p>Use a data cable (not a charge-only one), pick USB mode <b>File transfer</b>, and on Windows install your phone brand's USB driver. Check with <code>adb devices</code>.</p></details><details><summary>Device is there, but the UI tree fails</summary><p>Screens that never stop animating (video, games) make <code>uiautomator dump</code> fail. Pause the video or switch screens, then Capture again. Don't run it alongside an active uiautomator2/Appium script.</p></details>",
    ndT:"No device detected yet", ndSub:"Start an emulator or plug in a phone — this page picks it up automatically.",
    waiting:"Auto-detecting every 5 seconds", adbErr:"ADB problem: {e}", found:"Device detected: {d}",
    hEmu:"Emulator on this PC (MuMu, LDPlayer, Nox, BlueStacks)",
    hEmuB:"<li>Start the emulator and wait for the Android home screen</li><li>Enable ADB: <b>MuMu</b> on by default · <b>LDPlayer</b> Settings → Other → ADB debugging: <b>Open local connection</b> · <b>BlueStacks</b> Settings → Advanced → <b>Android Debug Bridge</b></li><li>Wait a moment — emulator ports are scanned automatically</li>",
    hUsb:"Phone over USB cable",
    hUsbB:"<li>Settings → About phone → tap <b>Build number</b> 7× (enables Developer options)</li><li>Developer options → turn on <b>USB debugging</b></li><li>Plug in a data cable, then tap <b>Allow</b> on the phone prompt</li>",
    hWifi:"Phone over Wi-Fi (same network)",
    hWifiB:"<li>Android 11+: Developer options → <b>Wireless debugging</b> → Pair with code</li><li>On the PC run <code>adb pair IP:PORT</code> and enter the code</li><li>Click <b>Connect</b> and enter the <code>IP:PORT</code> shown on the Wireless debugging screen</li>",
    s1:"Click “Find Emulators” or “Connect” to pick a device", s2:"Click “Capture” (or press R)", s3:"Hover & click an element — details and selectors show on the right",
    tree:"UI Tree", search:"Search text, id, description, class…", expand:"Expand all", collapse:"Collapse all", treeEmpty:"The UI tree appears after a capture.",
    noSel:"No element selected", noSelSub:"Click an element on the screen or in the UI tree.",
    noDev:"No devices yet — click “Find Emulators”", copied:"Copied", identity:"Identity", position:"Position & Size", flags:"State",
    tSel:"Selectors", tProps:"Properties", tCode:"Code", selHint:"Click a card to copy. Most stable first.", center:"Center", size:"Size",
    nodes:"nodes", tapHere:"Tap", copyBest:"Copy best selector", parent:"Parent", scanDone:"Found {n} emulator ports", scanNone:"No running emulators found",
    tapped:"Tapped", err:"Failed", matches:"{n} matches", unique:"unique", absXp:"Absolute XPath", captured:"Captured {t}",
    best:"Best", good:"Good", ok:"Fair", fragile:"Fragile",
    h_class:"Android component type (button, text, image…)", h_rid:"Developer-assigned ID. Most stable for selectors", h_text:"Visible on-screen text. May change with language/content",
    h_desc:"Accessibility label (common on icon buttons)", h_pkg:"Package of the app that owns this element", h_bounds:"Position box [left,top][right,bottom] in pixels",
    rec:"Record", recStop:"Stop", recHint:"Record actions (tap, swipe, keys, text) into a ready-to-run script", qText:"Text", qModeHint:"Plain text search, or test an XPath expression live",
    searchX:"//*[@text='…']  ·  Enter = next match", vEl:"Element", vRec:"Steps", steps:"{n} steps", replay:"Replay", stopReplay:"Stop",
    clear:"Clear all", download:"Download", recOn:"Recording — screen taps/swipes, keys & text are captured", waitHere:"Wait for this element", test:"Test", copyS:"Copy",
    xpErr:"Invalid XPath", opTap:"Tap", opWait:"Wait for", opSwipe:"Swipe", opKey:"Key", opText:"Type", byXY:"coordinates (no stable selector)",
    replayDone:"Replay finished ✓", replayFail:"Failed at step {n}: {e}", recEmptyT:"No steps yet", recEmptyS:"Click Record, then tap/swipe on the screen, use Back/Home, or send text. Select an element and “Wait for this element” to add a wait step.",
    exportLbl:"Export", confirmClear:"Clear all recorded steps?",
    reading:"Reading element…", noElem:"No element at this point — step not recorded", params:"Reference parameters (tick the ones to use)",
    contains:"Partial match (contains)", timeout:"Timeout", optional:"Optional — skip if missing", optShort:"optional",
    nth:"#{k} of {n}", minParam:"Keep at least 1 parameter ticked",
    runFrom:"Run from this step", delStep:"Delete step", clearSure:"Sure? Click again", cleared:"Recording cleared",
    fromHome:"Start from Home screen (press Home before step 1)", goingHome:"Going Home…", running:"▶ Step {k}/{n}: {what}",
    stopping:"Stopping after this step…", stopped:"■ Stopped after step {k}", retry:"Retry", skip:"Skip", dismiss:"Close",
    notFound:"element “{w}” not found within {s}s", nowAt:"Current screen: {a}",
    failHint:"Make sure you start on the same screen as when recording, tick “Start from Home”, or change params / tick Optional on this step.",
    willRec:"Will record", adbNote:"# ADB has no selectors — coordinates come from the element position at record time",
    streamRetry:"Stream dropped — reconnecting…", noMatch:"Nothing matches “{q}”", noHit:"0 matches",
    recPaused:"Recording paused (Inspect mode, press M)", kbdChip:"Keyboard → device", asciiOnly:"adb can only type ASCII (no emoji/accents)",
    longPressed:"Long-pressed", quotaFull:"Browser storage is full — the recording was not saved. Delete old steps or export first.",
    opLong:"Long-press", enterKey:"Enter (device)", bkspKey:"Delete / Backspace (device)",
    cmXPath:"Copy absolute XPath", cmRid:"Copy resource-id", cmText:"Copy text", cmDesc:"Copy content-desc", cmCenter:"Copy center (x, y)",
    cmTest:"Test best XPath", cmLong:"Long-press", cmPgTap:"Playground: + Tap", cmPgWait:"Playground: + Wait for", cmPgIf:"Playground: + If exists",
    kCtl:"Control mode + pointer on the screen: typing/Enter/⌫/Tab/arrows go to the device, Esc = Back, wheel = scroll", kCtx:"Right-click an element (screen/tree) = copy / tap / Playground menu", kRmb:"Right-click",
    kR:"Capture", kM:"Toggle Inspect / Control mode", kSlash:"Focus search", kArrows:"Previous / next element in the tree", kC:"Copy best selector", kEsc:"Clear selection",
    helpSel:"Tip: prefer selectors labelled “Best” or “Good”. “Fragile” ones (absolute XPath) break easily when the app layout changes. Drag the lines between panels to resize them.",
    pgRedo:"Redo (Ctrl+Shift+Z / Ctrl+Y)", pgNoRedo:"Nothing to redo", pgUndone:"Undone", pgRedone:"Redone",
    pgDeleted:"Step deleted — Ctrl+Z to undo", pgCleared:"Flow cleared — Ctrl+Z to undo", pgClearT:"Clear flow", pgClearSure:"Click once more to clear the flow",
    pgLib:"Flow library", pgNew:"New flow", pgRename:"Rename", pgDup:"Duplicate flow", pgDelFlow:"Delete flow", pgFlowName:"Flow name", pgFlowN:"Flow {n}", pgCopyOf:"{name} (copy)",
    pgDelFlowQ:"Delete flow “{name}” ({n} steps + its data)? This can't be undone.", pgFlowDeleted:"Flow deleted", pgImportedAs:"Imported as a new flow: {name}", pgImportDrop:"{n} unknown steps skipped",
    pgCancel:"Cancel", pgOk:"OK", pgDelete:"Delete",
    pgMore:"Step options", pgRunOne:"Run this step only", pgRunFrom:"Run from here", pgDisable:"Disable", pgEnable:"Enable", pgDupStep:"Duplicate (Ctrl+D)", pgDelStep:"Delete (Del)",
    pgSkipped:"skipped (disabled)", pgBusy:"A run is in progress — stop it first", pgOffBadge:"off", pgStopped:"Stopped",
    pgFragile:"No unique selector — using the absolute XPath (fragile)", pgMulti:"matched {n} elements, used the first", pgWaitUpTo:"Wait up to", pgIfErr:"check failed: {e}",
    pgCsvDone:"CSV: {c} columns, {n} rows", pgAppSearchFree:"Search apps… or type a package / {v} + Enter",
    recToPg:"To Playground", recToPgQ:"Turn {n} recorded steps into Playground nodes:", recToPgAppend:"Append to “{name}”", recToPgNew:"As a new flow", recToPgDone:"{n} nodes added to the Playground", recFlowName:"Recording {d}",
    kPgKeys:"Playground: undo / redo · Del deletes the selected step · Ctrl+D duplicates",
    noDevShort:"Select device", appUnSure:"Uninstall {name}? Click again", emuDelSure:"Delete “{name}”?", emuBooting:"booting…", emuReady:"Emulator {name} is ready",
    emuNoneFound:"No emulator detected on this PC", emuSupported:"Supported: {list}", emuLastMsg:"Last: {msg}",
    appBackupBtn:"Backup APK", appBackupT:"APK saved ({n} files)", appSplit:"split APK — reinstall with adb install-multiple", copyPath:"Copy path",
    appNoUser:"No user apps on this device", appShowAll:"Show all apps", appStatAct:"activities", appStatExp:"exported", appStatPerm:"permissions",
    moveUp:"Move up", moveDown:"Move down", pgGrabAs:"Grab as", zoomOut:"Zoom out", zoomFit:"Fit to view", zoomIn:"Zoom in",
    mcpOrProject:"(or .cursor\\mcp.json in the project root)", mcpInProject:"(in the project root)", mcpErr:"Couldn't load MCP info: {e}", mcpSetup:"1-click MCP setup",
    updReload:"Reload page", dpReconnect:"Reconnect", dpDrop:"Remove", gutHint:"Drag to resize · double-click = reset",
    palBtn:"Commands", palHint:"Command palette — search & run any action (Ctrl+K)", palPh:"Type a command, app or device…", palNone:"Nothing matches “{q}”",
    palRecent:"Recent", palAll:"All commands", palNav:"↑↓ select · Enter run · Esc close", palAppsLoad:"loading apps…", palAppsN:"{n} apps",
    palGScreen:"Screen", palGView:"View", palGDev:"Device", palGApp:"Apps",
    cLiveOn:"Turn Live on", cLiveOff:"Turn Live off", cInspect:"Inspect mode", cControl:"Control mode", cRecOn:"Start step recorder", cRecOff:"Stop step recorder",
    cTabEl:"Open Element tab", cTabRec:"Open Steps tab", cTabApp:"Open Apps tab", cTabLog:"Open Logcat", cPlay:"Open Playground", cEmu:"Emulator manager", cMcp:"Connect an AI agent (MCP)",
    cLang:"Language: Bahasa Indonesia", cConn:"Connect a device…", cSwitch:"Switch to {d}", cOpenApp:"Open app: {a}", cOpenAct:"Open activity…", cOpenActQ:"Search activities “{q}”",
    cKey:"{k} key", cLogClear:"Clear logcat",
    saveShot:"Save screenshot (PNG)", shotSaved:"Screenshot saved: {f}",
    srec:"Screen record", cSrecOn:"Record screen (MP4 video)", cSrecOff:"Stop screen recording & download", srecHint:"Record the screen to an MP4 video (max 3 min) — not the same as “Record”, which records steps",
    srecStopHint:"Stop screen recording & download the video", srecOn:"Recording the screen… click the button again to stop", srecSaving:"Saving video…", srecDone:"Video downloaded",
    srecLimit:"3-minute limit reached — video downloaded", srecLost:"recording stopped without a file",
    infoT:"Device info", infoRefresh:"Refresh", infoClick:"Click any value to copy it.", infoAndroid:"Android", infoAbi:"ABI", infoScreen:"Screen", infoBatt:"Battery",
    infoIp:"IP", infoUp:"Uptime", infoStore:"Storage", infoRam:"RAM", infoFree:"{f} free of {t}", upD:"{d}d {h}h", upH:"{h}h {m}m",
    bat_charging:"charging", bat_discharging:"discharging", bat_full:"full", bat_not_charging:"not charging",
    vLog:"Logcat", logGrep:"Filter tag / message…", logLevel:"Minimum level", logPause:"Pause", logResume:"Resume", logCopy:"Copy visible lines", logCopied:"{n} lines copied",
    logClear:"Clear the device logcat buffer", logCleared:"Logcat cleared", logCur:"This app only", logPkgHint:"Watched app · click = switch to the app on screen now",
    logEmpty:"No log lines yet", logNoMatch:"No lines match the filter", logNoRun:"{p} isn't running — open the app first", logNoPkg:"Foreground app unknown — capture the screen first", logLatest:"Jump to latest",
    logRows:"{n} lines", logPaused:"paused", logGap:"… some lines were skipped (very chatty log) …",
    kK:"Command palette — search & run any action", kEnter:"In search: next match (Shift+Enter = previous)", kTreeLR:"In the tree: collapse / expand, or go to parent / child",
    kAltK:"Alt+click", kAlt:"Inspect mode: pick the clickable element (not its child)"
  }
};
const store = { get:k=>{try{return localStorage.getItem(k)}catch{return null}}, set:(k,v)=>{try{localStorage.setItem(k,v);return true}catch{return false}} };
let lang = store.get("lang") || (navigator.language.startsWith("id") ? "id" : "en");
let theme = store.get("theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
let tab = store.get("tab") || "sel";
const t = (k, v={}) => (I18N[lang][k] ?? k).replace(/\{(\w+)\}/g, (m, x) => x in v ? v[x] : m);  // unknown {x} stays (e.g. "{{col}}" hints)
const $ = s => document.querySelector(s);
let flat = [], root = null, sel = null, hover = null, control = false, scale = 1, devices = [], activity = "", capturedAt = null;
let qMode = "text", xdoc = null, xmap = null, xmatch = new Set(), xlist = [], xi = -1;

function applyLang(){
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(e => e.textContent = t(e.dataset.i18n));
  document.querySelectorAll("[data-i18n-html]").forEach(e => e.innerHTML = t(e.dataset.i18nHtml));  // static strings from I18N only
  renderHow(); $("#lsSrvSt").textContent = t("l2ok",{h:location.host}); adbState(adbErr); waitState(adbErr);
  // icon/glyph-only controls ("✕", "+", "–", an svg) get the tooltip as their accessible name too
  document.querySelectorAll("[data-i18n-title]").forEach(e => { e.title = t(e.dataset.i18nTitle);
    if (e.matches("button,summary") && e.textContent.trim().length <= 1) e.setAttribute("aria-label", e.title) });
  document.querySelectorAll("#landing pre").forEach(p => p.title = t("mcpClickCopy"));
  document.querySelectorAll("[data-i18n-ph]").forEach(e => e.placeholder = t(e.dataset.i18nPh));
  document.querySelectorAll("#langSeg button").forEach(b => b.classList.toggle("on", b.dataset.lang === lang));
  fillDevices(devices); sel ? showProps(sel) : emptyProps();
  if (!root) syncStage();
  else if (qMode === "xpath") evalX(); else qCount();
  $("#q").placeholder = t(qMode === "xpath" ? "searchX" : "search");
  $("#recLbl").textContent = t(recording ? "recStop" : "rec");
  if (view === "rec") renderRec();
  if (view === "app") renderApp();
  if (view === "play") { pgRenderFlow(); pgRenderPalette(); }
  if ($("#streamSt").dataset.k) streamState($("#streamSt").dataset.k);
  if (view === "log") logMeta();
  if ($("#dlgInfo").open) infoRender();
  if ($("#dlgPal").open) palRefresh();
  srecUI();
  syncMode();
  footer();
}
function applyTheme(){
  document.documentElement.dataset.theme = theme; readPal();
  $("#btnTheme svg").dataset.ic = theme === "dark" ? "sun" : "moon"; paintIcons($("#btnTheme")); draw();
}
// No explicit choice yet -> follow the OS theme live (the inline <head> script already applied it before first paint)
matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => { if (!store.get("theme")) { theme = e.matches ? "dark" : "light"; applyTheme() } });
function footer(){
  const d = devices.find(x => x.serial === serial());
  $("#fDev").textContent = d ? `${d.model || d.serial} · ${d.serial}` : t("noDev");
  $("#fAct").textContent = activity;
  $("#fTime").textContent = capturedAt ? t("captured",{t:capturedAt.toLocaleTimeString()}) : "";
}
// Toast: lives in the topmost open <dialog> while one is open (a modal's top layer would cover/dim it otherwise),
// stays longer for longer text (errors), and is a polite live region for screen readers.
function toast(m, ms){
  const e = $("#toast"), dl = [...document.querySelectorAll("dialog[open]")].pop() || document.body;
  if (e.parentNode !== dl) dl.append(e);
  e.textContent = m; e.classList.toggle("bad", m.startsWith(t("err")) || /error|gagal|failed/i.test(m.slice(0, 40)));
  e.classList.add("show"); clearTimeout(e._t);
  e._t = setTimeout(() => e.classList.remove("show"), ms || Math.min(6000, Math.max(2000, 1200 + m.length * 45)));
}
// a dialog closing with the toast inside would hide it -> hand it back to <body>
document.querySelectorAll("dialog").forEach(d => d.addEventListener("close", () => { const e = $("#toast"); if (d.contains(e)) document.body.append(e) }));
function copy(s){navigator.clipboard.writeText(s).then(()=>toast("✓ "+t("copied")+": "+(s.length>70?s.slice(0,70)+"…":s)))}
async function api(path, params={}, signal){
  const r = await fetch(path+"?"+new URLSearchParams(params), {signal, headers: {"X-Inceptor": "1"}});  // header: server-side CSRF guard for mutating routes
  const j = await r.json(); if(!r.ok) throw new Error(j.error); return j;
}
const serial = () => $("#dev").value;

// ---------- resizable columns ----------
for (const k of ["c1","c3"]) { const v = store.get(k); if (v) document.documentElement.style.setProperty("--"+k, v) }
document.querySelectorAll(".gut").forEach(g => g.onpointerdown = e => {
  const col = g.dataset.col, startX = e.clientX, startW = g.dataset.col === "1" ? g.previousElementSibling.offsetWidth : g.nextElementSibling.offsetWidth;
  g.classList.add("drag"); g.setPointerCapture(e.pointerId);
  g.onpointermove = m => {
    // leave room for the other side column + the middle card's 300px min (+ gutters/padding), so nothing clips
    const other = $("main").children[col === "1" ? 4 : 0].offsetWidth;
    const w = Math.max(240, Math.min(innerWidth - other - 36 - 300, startW + (col === "1" ? 1 : -1) * (m.clientX - startX)));
    document.documentElement.style.setProperty("--c"+col, w+"px");
  };
  g.onpointerup = () => { g.classList.remove("drag"); g.onpointermove = null; store.set("c"+col, getComputedStyle(document.documentElement).getPropertyValue("--c"+col)); };
});
document.querySelectorAll(".gut").forEach(g => g.dataset.i18nTitle = "gutHint");
document.querySelectorAll(".gut").forEach(g => g.ondblclick = () => { document.documentElement.style.removeProperty("--c"+g.dataset.col); store.set("c"+g.dataset.col, "") });

// ---------- devices ----------
function fillDevices(devs){
  devices = devs;
  const cur = serial(), d = $("#dev");
  d.innerHTML = "";
  if (!devs.length) d.add(new Option(t("noDev"), ""));
  devs.forEach(x => {
    const o = new Option(`${x.model || x.serial}  ·  ${x.serial}${x.state!=="device" ? "  ["+x.state+"]" : ""}`, x.serial);
    if (x.aliases?.length) o.title = "alias: " + x.aliases.join(", ");
    d.add(o);
  });
  if (devs.some(x => x.serial === cur)) d.value = cur;
  const ok = devs.some(x => x.serial === serial() && x.state === "device");
  $("#dot").classList.toggle("on", ok); $("#dot2").classList.toggle("on", ok); $("#st1").classList.toggle("done", ok);
  const land = loaded && !ok && !skipLanding;
  $("#boot").hidden = loaded; $("#landing").hidden = !land; $("#main").hidden = land || !loaded;
  const cd = devs.find(x => x.serial === serial()), k = cd && brandOf(cd);
  $("#devLbl").textContent = cd ? (cd.model || cd.serial) : t("noDevShort");  // short: the long hint would push the header off-screen
  $("#devKind").hidden = !k; if (k) { $("#devKind").textContent = k.n; $("#devKind").className = "ek e-" + k.k }
  if (!$("#devPop").hidden) renderCards();
  $("#lsDev").className = devs.length ? "fail" : "cur";
  const byState = {};  // one row per state: an emulator shows up offline on several ports while booting
  devs.filter(x => x.state !== "device").forEach(x => (byState[x.state] ||= []).push(x.serial));
  $("#ldDevs").innerHTML = Object.entries(byState).map(([st, ss]) =>
    `<div class="ldDev">${ic("phone")}<code>${ss.join(", ").replace(/[<&]/g, "")}</code><b>${st.replace(/[<&]/g, "")}</b><span>${t("dh_" + st) === "dh_" + st ? t("dh_other") : t("dh_" + st)}</span></div>`).join("");
  footer();
  setTimeout(() => view === "log" && serial() && !logT && !logBusy && logPoll());  // a device came (back): restart a stopped logcat poll (deferred: log vars are declared later)
}
let loaded = false, skipLanding = false, how = "emu", adbErr = undefined;
function adbState(e){
  adbErr = e;
  $("#lsAdb").className = e === undefined ? "cur" : e ? "bad" : "done";
  const st = $("#lsAdbSt"); st.className = "st " + (e ? "bad" : "ok");
  st.textContent = e === undefined ? "" : e ? t("l1bad") + ": " + e.slice(0, 90) : t("l1ok");
}
function renderHow(){
  $("#howB").innerHTML = t({emu:"hEmuB", usb:"hUsbB", wifi:"hWifiB"}[how]);
  $("#ports").hidden = how !== "emu";
  document.querySelectorAll("#howSeg button").forEach(b => b.classList.toggle("on", b.dataset.how === how));
}
$("#howSeg").onclick = e => { const b = e.target.closest("button"); if (b) { how = b.dataset.how; renderHow() } };
document.querySelectorAll("#landing pre").forEach(p => p.onclick = () => copy(p.textContent));
$("#ldMcp").onclick = () => mcpOpen();  // landing AI card -> the per-agent setup dialog (command filled at boot, see bottom)
$(".aiPrompts").onclick = e => { const q = e.target.closest("q"); q && copy(q.textContent) };
async function loadDevices(quiet){
  try { const d = await api("/api/devices"); loaded = true; adbState(""); fillDevices(d) }
  catch(e){ loaded = true; adbState(e.message); fillDevices([]); quiet || toast(t("err")+": "+e.message) }
}
// Swap the button's icon for a spinner while busy (rotating the real icon, e.g. a camera, looks broken).
async function withSpin(btn, fn){
  if (btn.classList.contains("busy")) return;
  const s = btn.querySelector("svg"), ic0 = s?.dataset.ic;
  btn.classList.add("busy"); btn.setAttribute("aria-busy", "true");
  if (s) { s.dataset.ic = "loader"; paintIcons(btn) }
  try { await fn() } catch(e){ toast(t("err")+": "+e.message) }
  finally { btn.classList.remove("busy"); btn.removeAttribute("aria-busy"); if (s) { s.dataset.ic = ic0; paintIcons(btn) } }
}
$("#btnDevs").onclick = () => withSpin($("#btnDevs"), loadDevices);
$("#btnScan").onclick = () => withSpin($("#btnScan"), async () => {
  const r = await api("/api/scan"); fillDevices(r.devices); updatePorts(r);
  toast(r.open.length ? t("scanDone",{n:r.open.length}) + " → " + r.open.join(", ") : t("scanNone"));
});
$("#btnConn").onclick = () => withSpin($("#btnConn"), async () => {
  const r = await api("/api/connect",{addr:$("#addr").value.trim()}); toast(r.msg); fillDevices(r.devices);
  if (r.devices.length) $("#connPop").open = false;
});
$("#addr").onkeydown = e => e.key === "Enter" && $("#btnConn").click();
$("#ndScan").onclick = () => $("#btnScan").click();

// ---------- device picker: cards with a live thumbnail, brand colour and state ----------
let thumbT = 0;
function renderCards(){
  $("#devCount").textContent = devices.length ? t("devN", {n: devices.length}) : "";
  $("#dcards").innerHTML = !devices.length ? `<div class="dempty">${esc(t("noDev"))}</div>` : devices.map(d => {
    const k = brandOf(d), on = d.state === "device", cur = d.serial === serial(), tcp = d.serial.includes(":");
    const body = `<span class="th">${on ? `<img src="/api/thumb?serial=${encodeURIComponent(d.serial)}&w=120&t=${thumbT}" alt="">` : ic("phone")}</span>
      <span class="di"><b>${esc(d.model || d.serial)}</b><code>${esc(d.serial)}</code>
        <span class="dm"><span class="ek e-${k.k}">${k.n}</span><span class="ds${on ? " on" : ""}">${on ? "online" : esc(d.state)}</span></span>
        ${d.aliases?.length ? `<small title="${esc(d.aliases.join(", "))}">alias: ${esc(d.aliases.join(", "))}</small>` : ""}
        ${on ? "" : `<small class="dhint">${esc(t("dh_" + d.state) === "dh_" + d.state ? t("dh_other") : t("dh_" + d.state))}</small>`}</span>`;
    // offline/unauthorized: not pickable, but explain why + let a stale TCP entry be reconnected or dropped
    return on ? `<button class="dcard e-${k.k}${cur ? " cur" : ""}" data-s="${esc(d.serial)}">${body}
      ${cur ? `<span class="cur-tag">✓ ${esc(t("devCur"))}</span>` : ""}</button>`
      : `<div class="dcard off e-${k.k}">${body}${tcp ? `<span class="dcact"><button class="btn sm" data-recon="${esc(d.serial)}">${t("dpReconnect")}</button>
        <button class="btn sm ghost" data-drop="${esc(d.serial)}">${t("dpDrop")}</button></span>` : ""}</div>`;
  }).join("");
}
function devPop(open){
  const p = $("#devPop"); if (p.hidden === !open) return;
  p.hidden = !open; $("#devBtn").setAttribute("aria-expanded", open);
  if (open) { thumbT = Date.now(); renderCards(); ($("#dcards .dcard.cur") || $("#dcards button"))?.focus(); api("/api/devices").then(d => sameDevs(d) || fillDevices(d)).catch(() => {}) }
}
$("#devBtn").setAttribute("aria-expanded", "false");
$("#devBtn").onclick = () => devPop($("#devPop").hidden);
document.addEventListener("click", e => {
  if (!e.target.closest("#devBox")) devPop(false);
  if ($("#connPop").open && !e.target.closest("#connPop,#dpConn,#ndConn")) $("#connPop").open = false;
});
document.addEventListener("keydown", e => {
  if (e.key !== "Escape") return;
  if (!$("#devPop").hidden) { devPop(false); $("#devBtn").focus() }
  if ($("#connPop").open) { $("#connPop").open = false; $("#connPop summary").focus() }
});
$("#dcards").onclick = async e => {
  const a = e.target.closest("[data-recon],[data-drop]");
  if (a) return withSpin(a, async () => {
    const r = a.dataset.recon ? await api("/api/connect", {addr: a.dataset.recon}) : await api("/api/disconnect", {addr: a.dataset.drop});
    r.msg && toast(r.msg); fillDevices(r.devices || await api("/api/devices"));
  });
  const c = e.target.closest("button.dcard"); if (!c) return; devPop(false); if (c.dataset.s !== serial()) { $("#dev").value = c.dataset.s; $("#dev").onchange() } };
$("#dpScan").onclick = () => $("#btnScan").click();
$("#dpConn").onclick = () => { $("#devPop").hidden = true; $("#connPop").open = true; $("#addr").focus() };
$("#ndConn").onclick = () => { $("#connPop").open = true; $("#addr").focus() };
$("#ndSkip").onclick = () => { skipLanding = true; fillDevices(devices) };

// ---------- auto-detect ----------
// While no device is online: re-scan emulator ports every few seconds; first device found -> auto capture.
// ponytail: fixed 5s poll, runs only while the empty state shows and the tab is visible.
const POLL = 5;
let pollIn = 1;
const online = () => devices.some(x => x.serial === serial() && x.state === "device");
// Emulator brand from the ADB serial. ponytail: port heuristic (5555/5565 are shared by LDPlayer & BlueStacks), getprop if it matters.
function emuOf(s){
  const i = s.lastIndexOf(":");
  if (i < 0) return s.startsWith("emulator-") ? {k:"avd", n:"Emulator"} : {k:"usb", n:"USB"};
  const h = s.slice(0, i), p = +s.slice(i + 1);
  if (!/^(127\.0\.0\.1|localhost)$/.test(h)) return {k:"wifi", n:"Wi-Fi"};
  if (p === 7555 || (p >= 16384 && p < 17000 && (p - 16384) % 32 === 0)) return {k:"mumu", n:"MuMu"};
  if (p >= 62001 && p < 62100) return {k:"nox", n:"Nox"};
  if (p >= 21503 && p < 21700) return {k:"memu", n:"MEmu"};
  if (p === 5555) return {k:"ld", n:"LDPlayer / BlueStacks"};
  if (p > 5555 && p < 5600) return (p - 5555) % 10 === 0 ? {k:"bs", n:"BlueStacks"} : {k:"ld", n:"LDPlayer"};
  return {k:"avd", n:"Emulator"};
}
const brandOf = d => d.brand || emuOf(d.serial);  // server knows the brand from the port's owning process
// Port chips: built once, then only classes that actually changed are touched.
function updatePorts(r){
  const box = $("#pmap");
  if (!box.children.length) box.innerHTML = r.scanned.map(p => `<span class="pc" data-p="${p}" title="${esc(r.owners?.[p] || emuOf("127.0.0.1:" + p).n)}">${p}</span>`).join("");
  const st = p => { const a = "127.0.0.1:" + p, d = devices.find(x => x.serial === a || x.aliases?.includes(a));
    return d ? (d.state === "device" ? "ok" : "warn") : r.open.includes(p) ? "open" : "" };
  box.querySelectorAll(".pc").forEach(c => { const cls = ("pc " + st(+c.dataset.p)).trim(); if (c.className !== cls) c.className = cls;
    const ttl = r.owners?.[c.dataset.p] || emuOf("127.0.0.1:" + c.dataset.p).n; if (c.title !== ttl) c.title = ttl });
  const sum = t("pmSum", {o: r.open.length, n: r.scanned.length});
  if ($("#pmSum").textContent !== sum) $("#pmSum").textContent = sum;
}
const sameDevs = d => JSON.stringify(d) === JSON.stringify(devices);
function waitState(err){  // only writes when the state flips, so the page doesn't twitch every poll
  const w = $("#ldStat"), txt = err ? t("adbErr",{e:err.slice(0,80)}) : t("waiting");
  w.classList.toggle("err", !!err);
  if ($("#waitTxt").textContent !== txt) $("#waitTxt").textContent = txt;
}
setInterval(async () => {
  const w = $("#ldStat");
  if (document.hidden || $("#btnScan").classList.contains("busy") || w.dataset.busy) return;
  if (online()) {  // every 20s make sure it's still there (emulator closed / cable pulled -> guide comes back)
    if (--pollIn < -15 && !streaming && !replaying && !recording && !dumpP) {
      pollIn = POLL; w.dataset.busy = 1;
      try {
        const d = await api("/api/devices");
        // fewer devices = usually an adb server restart (another emulator's adb) dropped the tcp links -> reconnect them
        if (d.length < devices.length) { const r = await api("/api/scan"); fillDevices(r.devices); updatePorts(r) }
        else if (!sameDevs(d)) fillDevices(d);
      } catch {}
      delete w.dataset.busy;
    }
    return;
  }
  if (--pollIn > 0) return;
  w.dataset.busy = 1;
  const bar = $("#pbar"); bar.style.animation = "none"; bar.offsetWidth; bar.style.animation = "";  // restart bar in sync with the scan
  try {
    const r = await api("/api/scan");
    if (adbErr !== "") adbState("");
    if (!loaded || !sameDevs(r.devices)) { loaded = true; fillDevices(r.devices) }
    updatePorts(r);
    waitState("");
    if (online()) { toast(t("found",{d: devices.find(x => x.serial === serial()).model || serial()})); if (!root) dump() }
  } catch(e) {
    if (adbErr !== e.message) adbState(e.message);
    if (!loaded) { loaded = true; fillDevices(devices) }
    waitState(e.message);
  }
  finally { delete w.dataset.busy; pollIn = POLL }
}, 1000);
$("#dev").onchange = () => {
  pgAppsLoaded = false;
  // new device: drop the old tree/selection right away so nothing from the previous device is ever shown
  root = null; flat = []; sel = null; hover = null; xdoc = null; activity = ""; capturedAt = null; appInfo = null; appErr = ""; lastSig = "";
  appList = null; appDetail = null; appLog = ""; appDetailTok++; appDetailBusy = false; uninstallArm = null; appBackup = null;
  appActs = null; appActErr = ""; _actAC?.abort(); _actSeq++; appActBusy = false; noIcon.clear(); for (const k in appVc) delete appVc[k];
  if (view === "app") renderApp();
  emptyProps(); crumbs(); draw();
  fillDevices(devices); streaming ? setLive(true) : dump();
};

// ---------- capture ----------
// While live-streaming the screen, a capture only refreshes the UI tree; concurrent calls share one in-flight dump.
let dumpP = null, dumpFor = null, streaming = false;
// The stage/tree empty states are DERIVED from (root, streaming, dumpP) in one place, so no code path can leave the
// "capturing" loader stuck or show it next to an old screenshot.
function syncStage(){
  const has = !!root, live = streaming, busy = !!dumpP;
  $("#shotWrap").hidden = !(has || live);
  $("#shotLoad").hidden = !(busy && !has && !live);
  $("#guide").hidden = has || live || busy;
  if (!has) $("#tree").innerHTML = busy ? `<div class="empty"><i class="spin"></i>${t("treeLoading")}</div>` : `<div class="empty">${t("treeEmpty")}</div>`;
}
// Concurrent calls for the SAME device share one in-flight dump; a device switch starts a fresh one (the stale result is dropped in doDump).
let dumpTreeOnly = false, lastSig = "";
// actGen bumps when a device action is SENT; an in-flight dump started before it (dumpGen < actGen) shows the old
// screen, so callers chain a fresh dump after it instead of joining it.
let actGen = 0, dumpGen = 0, actT = 0;
function devAct(path, params){
  actGen++;
  return api(path, params).then(r => { clearTimeout(actT); actT = setTimeout(dump, 600); return r });
}
function dump(treeOnly){
  const to = treeOnly ?? streaming;
  if (dumpP && dumpFor === serial()) {
    if (dumpGen !== actGen) return dumpP.then(() => dump(to));
    // joining a tree-only (Live) dump would skip the screenshot -> wait for it, then do a full one
    return dumpTreeOnly && !to ? dumpP.then(() => dump(false)) : dumpP;
  }
  dumpFor = serial(); dumpTreeOnly = to; dumpGen = actGen;
  const p = doDump(to).finally(() => { if (dumpP === p) { dumpP = null; syncStage() } });
  dumpP = p; syncStage();
  return p;
}
async function doDump(treeOnly){
  const dev = serial();
  if (!dev) return toast(t("noDev"));
  const img = $("#shot");
  // Screenshot via fetch -> blob (not img.onload): it can't hang when Live swaps the <img> src, and a stale one is simply dropped.
  const shot = treeOnly ? null : fetch("/api/screenshot?" + new URLSearchParams({serial:dev, _:Date.now()}))
    .then(r => { if (!r.ok) throw new Error("screenshot"); return r.blob() });
  try{
    const [h, blob] = await Promise.all([api("/api/hierarchy",{serial:dev}), shot]);
    if (dev !== serial()) return;  // user switched device meanwhile: this result belongs to the old one
    if (blob && !streaming) {
      const old = img.src; img.src = URL.createObjectURL(blob);
      if (old.startsWith("blob:")) URL.revokeObjectURL(old);
      await img.decode().catch(() => {});
      if (dev !== serial()) return;
    }
    activity = h.activity || ""; capturedAt = new Date();
    // Live refresh of an unchanged screen: keep the tree/props DOM as is (collapsed nodes, scroll, text selection)
    const sig = JSON.stringify(h.root);
    if (treeOnly && root && sig === lastSig) return footer();
    lastSig = sig;
    // background (tree-only) refresh keeps collapsed nodes, tree scroll, props scroll and hover
    const closed = new Set(flat.filter(n => n.el?.classList.contains("closed")).map(n => n.xpathAbs));
    const tsc = $("#treePane .scroll"), top = tsc.scrollTop, hv = hover?.xpathAbs;
    root = h.root; flat = [];
    index(root, null, "");
    buildXml(); if (qMode === "xpath") evalX();
    footer();
    const prev = sel && sel.xpathAbs; sel = null; hover = treeOnly && hv && flat.find(n => n.xpathAbs === hv) || null;
    syncStage(); renderTree(closed);
    if (treeOnly) tsc.scrollTop = top;
    if (view === "app" && appMode === "current") loadApp();
    const keep = prev && flat.find(n => n.xpathAbs === prev);
    if (keep) select(keep, treeOnly); else { emptyProps(); crumbs() }
    sizeCanvas();
  }catch(e){ if (dev === serial()) toast(t("err")+": "+e.message) }
}
// Spinner only for user-initiated captures; silent background refreshes (Live) leave the button alone.
$("#btnDump").onclick = () => withSpin($("#btnDump"), () => dump());
// Live = MJPEG stream in the same <img> (~5-6 fps) + UI tree refresh every 3s and after each action.
let liveTimer = null;
function setLive(on){
  if (on && !serial()) { $("#live").checked = false; return toast(t("noDev")) }
  streaming = on; $("#live").checked = on; clearInterval(liveTimer);
  const img = $("#shot");
  if (on) {
    startStream(); syncStage();
    dump(true); liveTimer = setInterval(() => {
      if (streamAC && Date.now() - lastFrame > 6000) startStream();  // stalled: no frame for 6s -> reconnect
      !dumpP && !replaying && !pgRunning && dump(true);  // a Playground run dumps on its own; don't overlap it
    }, 3000);
  } else { stopStream(); img.removeAttribute("src"); dump(false) }
}
// MJPEG read with fetch (not <img src>): we see every frame and the end of the stream, so a dead/stalled stream
// is reconnected with backoff (0.5s..8s) and the state shows on the stage instead of a silently frozen frame.
let streamAC = null, streamTry = 0, streamRT = 0, lastFrame = 0, frameUrl = "";
function streamState(k){ const c = $("#streamSt"); c.hidden = !k; c.dataset.k = k; if (k) c.textContent = t(k) }
function stopStream(){ streamAC?.abort(); streamAC = null; clearTimeout(streamRT); streamState("") }
function startStream(){
  stopStream();
  const ac = streamAC = new AbortController(), dev = serial();
  lastFrame = Date.now();
  (async () => {
    try {
      const r = await fetch("/api/stream?" + new URLSearchParams({serial:dev, _:Date.now()}), {signal:ac.signal});
      if (!r.ok) throw new Error(r.status);
      const rd = r.body.getReader(), dec = new TextDecoder();
      let buf = new Uint8Array(0);
      for (;;) {
        const {value, done} = await rd.read(); if (done) break;
        const b = new Uint8Array(buf.length + value.length); b.set(buf); b.set(value, buf.length); buf = b;
        for (;;) {  // part = headers \r\n\r\n + Content-Length bytes of JPEG
          let he = -1;
          for (let i = 0; i + 3 < buf.length; i++) if (buf[i] === 13 && buf[i+1] === 10 && buf[i+2] === 13 && buf[i+3] === 10) { he = i; break }
          if (he < 0) break;
          const m = /Content-Length:\s*(\d+)/i.exec(dec.decode(buf.subarray(0, he)));
          const s = he + 4, e = s + (m ? +m[1] : 0);
          if (!m) { buf = buf.subarray(s); continue }
          if (buf.length < e) break;
          if (streamAC === ac && dev === serial()) showFrame(buf.slice(s, e));
          buf = buf.subarray(e);
        }
      }
    } catch {}
    if (streamAC !== ac) return;  // stopped on purpose (Live off, tab hidden, device switch)
    streamAC = null; streamState("streamRetry");
    streamRT = setTimeout(() => streaming && !document.hidden && startStream(), Math.min(8000, 500 * 2 ** streamTry++));
  })();
}
function showFrame(bytes){
  lastFrame = Date.now(); streamTry = 0; streamState("");
  const old = frameUrl; frameUrl = URL.createObjectURL(new Blob([bytes], {type:"image/jpeg"}));
  $("#shot").src = frameUrl;
  if (old) setTimeout(() => URL.revokeObjectURL(old), 1000);
}
$("#live").onchange = e => setLive(e.target.checked);
$("#shot").addEventListener("load", e => { const i = e.target; i.naturalWidth && Math.abs(i.getBoundingClientRect().width / i.naturalWidth - scale) > 1e-3 && sizeCanvas() });
// Hidden tab: pause the stream + tree refresh (no screencap/uiautomator load nobody sees); resume fresh when visible.
document.addEventListener("visibilitychange", () => {
  if (!streaming) return;
  if (document.hidden) { clearInterval(liveTimer); stopStream() } else setLive(true);
});

// Build flat list + absolute xpath (index among same-class siblings, 1-based).
function index(n, parent, path){
  n.parent = parent;
  if (parent) {
    const same = parent.children.filter(c => c.cls === n.cls);
    n.xpathAbs = `${path}/${n.cls}` + (same.length > 1 ? `[${same.indexOf(n)+1}]` : "");
    flat.push(n);
  } else n.xpathAbs = "/hierarchy";
  n.children.forEach(c => index(c, n, n.xpathAbs));
}

// ---------- tree ----------
const short = id => id.includes(":id/") ? id.split(":id/")[1] : id;
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const name = n => n.attrs.text || n.attrs["content-desc"] || (n.attrs["resource-id"] && "#"+short(n.attrs["resource-id"])) || n.cls.split(".").pop();
function label(n){
  const a = n.attrs, p = [`<span class="c">${esc(n.cls.split(".").pop())}</span>`];
  if (a["resource-id"]) p.push(`<span class="pill i">#${esc(short(a["resource-id"]))}</span>`);
  if (a.text) p.push(`<span class="pill t">${esc(a.text.slice(0,80))}</span>`);
  if (a["content-desc"]) p.push(`<span class="pill d">${esc(a["content-desc"].slice(0,60))}</span>`);
  if (a.clickable === "true") p.push(`<span class="flag">click</span>`);
  if (a.scrollable === "true") p.push(`<span class="flag">scroll</span>`);
  if (a.checked === "true") p.push(`<span class="flag">✓</span>`);
  return p.join("");
}
// Element kind -> coloured badge in the tree (order matters: ImageButton is a button, CheckBox a toggle).
const KINDS = [["tog",/CheckBox|Switch|RadioButton|ToggleButton|CheckedTextView/],["in",/EditText|SearchView|AutoComplete/],
  ["btn",/Button|Chip|FloatingAction/],["img",/Image|Icon/],["web",/WebView/],
  ["list",/Recycler|ListView|ScrollView|ViewPager|GridView|Spinner|TabLayout/],["txt",/Text/]];
const KLBL = {btn:"Button", txt:"Text", in:"Input", img:"Image", list:"List / Scroll", tog:"Toggle", web:"WebView", box:"Layout"};
const kindOf = c => (KINDS.find(([, r]) => r.test(c)) || ["box"])[0];
const kd = n => { const k = kindOf(n.cls); return `<span class="kd k-${k}" title="${KLBL[k]}">${ic("k_" + k)}</span>` };
// closed = xpathAbs of collapsed nodes to keep (default: whatever is collapsed right now)
let qHits = [];  // search matches in tree order (text or XPath mode); xi = current one for Enter / Shift+Enter
function renderTree(closed = new Set(flat.filter(n => n.el?.classList.contains("closed")).map(n => n.xpathAbs))){
  const box = $("#tree"); box.innerHTML = ""; box.setAttribute("role", "tree");
  const q = $("#q").value.trim().toLowerCase();
  const match = qMode === "xpath" ? (n => !q || xmatch.has(n))
    : (n => !q || [n.cls, n.attrs.text, n.attrs["resource-id"], n.attrs["content-desc"]].some(v => v && v.toLowerCase().includes(q)));
  const keep = n => (n.keep = n.children.map(keep).some(Boolean) || match(n));
  root.children.forEach(keep);
  flat.forEach(n => { n.row = null; n.el = null });
  const hits = q ? flat.filter(match) : [];
  if (hits.length !== qHits.length || hits.some((n, i) => n.xpathAbs !== qHits[i]?.xpathAbs)) xi = -1;
  qHits = hits;
  const build = (n, d = 0) => {
    if (q && !n.keep) return null;
    const w = document.createElement("div"); n.el = w;
    const r = document.createElement("div"); r.className = "row" + (q && match(n) ? " hit" : "");
    r.innerHTML = `<span class="tg">${n.children.length ? ic("chev") : ""}</span>` + kd(n) + label(n);
    r.tabIndex = -1; r.setAttribute("role", "treeitem"); r.setAttribute("aria-level", d + 1);
    if (n.children.length) { r.setAttribute("aria-expanded", !closed.has(n.xpathAbs)); if (closed.has(n.xpathAbs)) w.classList.add("closed") }
    r.onclick = e => e.target.closest(".tg") ? toggleNode(n) : select(n, true);
    r.oncontextmenu = e => { e.preventDefault(); select(n, true); elMenu(n, e.clientX || r.getBoundingClientRect().left + 40, e.clientY || r.getBoundingClientRect().bottom) };
    r.onmouseenter = () => { hover = n; draw() }; r.onmouseleave = () => { hover = null; draw() };
    n.row = r; w.append(r);
    if (n.children.length) {
      const k = document.createElement("div"); k.className = "kids d" + (d % 6); k.setAttribute("role", "group");  // guide line colour cycles per depth
      n.children.forEach(c => { const x = build(c, d + 1); x && k.append(x) });
      w.append(k);
    }
    return w;
  };
  root.children.forEach(c => { const x = build(c); x && box.append(x) });
  if (q && !box.children.length) box.innerHTML = `<div class="empty">${esc(t("noMatch",{q:$("#q").value.trim()}))}</div>`;
  if (sel?.row) { sel.row.classList.add("sel"); sel.row.setAttribute("aria-selected", "true") }
  (sel?.row || box.querySelector(".row"))?.setAttribute("tabindex", "0");  // roving tabindex: Tab lands on the selected row
  qCount();
}
function toggleNode(n, open){
  if (!n.el || !n.children.length) return;
  const c = n.el.classList.toggle("closed", open === undefined ? undefined : !open);
  n.row.setAttribute("aria-expanded", !c);
}
function qCount(){
  const c = $("#count"), q = $("#q").value.trim();
  c.textContent = !root ? "" : !q ? `${flat.length} ${t("nodes")}` : $("#q").classList.contains("bad") ? t("xpErr")
    : !qHits.length ? t("noHit") : xi >= 0 ? `${xi + 1}/${qHits.length}` : t("matches",{n:qHits.length});
}
// Enter / Shift+Enter: next / previous match (both search modes)
function qStep(dir){
  if (!qHits.length) return;
  xi = xi < 0 ? (dir > 0 ? 0 : qHits.length - 1) : (xi + dir + qHits.length) % qHits.length;
  select(qHits[xi]); qCount();
}
// ---------- XPath tester: mirror the tree into a real XML doc and use the browser's native XPath 1.0 ----------
function buildXml(){
  const doc = document.implementation.createDocument(null, "hierarchy", null);
  xmap = new Map();
  const add = (n, parentEl) => {
    let el; try { el = doc.createElement(n.cls) } catch { el = doc.createElement("node") }
    for (const [k, v] of Object.entries(n.attrs)) el.setAttribute(k, v);
    if (n.bounds) el.setAttribute("bounds", `[${n.bounds[0]},${n.bounds[1]}][${n.bounds[2]},${n.bounds[3]}]`);
    xmap.set(el, n); parentEl.append(el);
    n.children.forEach(c => add(c, el));
  };
  root.children.forEach(c => add(c, doc.documentElement));
  xdoc = doc;
}
function evalX(){
  const expr = $("#q").value.trim(), inp = $("#q");
  xmatch = new Set(); xlist = []; inp.classList.remove("bad"); inp.title = "";  // xi is reset by renderTree when the hit list changes
  if (expr && xdoc) {
    try {
      const r = xdoc.evaluate(expr, xdoc, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
      for (let i = 0; i < r.snapshotLength; i++) { const n = xmap.get(r.snapshotItem(i)); n && xlist.push(n) }
      xmatch = new Set(xlist);
    } catch (e) { inp.classList.add("bad"); inp.title = t("xpErr") + ": " + e.message }
  }
  qCount();
}
function setQMode(m){
  qMode = m;
  document.querySelectorAll("#qMode button").forEach(b => b.classList.toggle("on", b.dataset.q === m));
  $("#q").placeholder = t(m === "xpath" ? "searchX" : "search");
  $("#q").classList.remove("bad");
  if (m === "xpath") evalX(); else { xmatch = new Set(); xlist = []; qCount() }
  syncMode();
  root && renderTree(); draw();
}
function testXPath(xp){ setQMode("xpath"); $("#q").value = xp; evalX(); renderTree(); draw(); $("#q").focus() }
document.querySelectorAll("#qMode button").forEach(b => b.onclick = () => setQMode(b.dataset.q));
let qT = 0;
const qRun = () => { clearTimeout(qT); qT = 0; if (!root) return; if (qMode === "xpath") evalX(); renderTree(); draw() };
$("#q").oninput = () => { clearTimeout(qT); qT = setTimeout(qRun, 120) };
$("#q").onkeydown = e => {
  if (e.key === "Escape" && $("#q").value) { e.preventDefault(); $("#q").value = ""; qRun() }
  else if (e.key === "Enter") { e.preventDefault(); if (qT) qRun(); qStep(e.shiftKey ? -1 : 1) }
};
const setAll = open => flat.forEach(n => toggleNode(n, open));
$("#btnExp").onclick = () => setAll(true);
$("#btnCol").onclick = () => setAll(false);

function crumbs(){
  const box = $("#crumbs");
  if (!sel) { box.innerHTML = `<div class="legend"><span style="color:var(--id)">resource-id</span><span style="color:var(--txt)">text</span><span style="color:var(--desc)">content-desc</span></div>`; return }
  const chain = []; for (let n = sel; n && n.parent; n = n.parent) chain.unshift(n);
  box.innerHTML = chain.map((n, i) => `<button data-i="${i}" title="${esc(n.cls)}">${esc(name(n).slice(0,28))}</button>`).join(`<span class="sepc">›</span>`);
  box.querySelectorAll("button").forEach(b => b.onclick = () => select(chain[+b.dataset.i]));
  box.scrollLeft = box.scrollWidth;
}
function select(n, fromTree){
  const focused = $("#tree").contains(document.activeElement);
  if (sel?.row) { sel.row.classList.remove("sel"); sel.row.removeAttribute("aria-selected") }
  document.querySelectorAll(".kids.onpath").forEach(k => k.classList.remove("onpath"));
  sel = n; $("#st3").classList.add("done");
  if (n.row) {
    n.row.classList.add("sel"); n.row.setAttribute("aria-selected", "true");
    $("#tree").querySelectorAll('.row[tabindex="0"]').forEach(r => r.tabIndex = -1); n.row.tabIndex = 0;  // roving tabindex
    for (let p = n.parent; p; p = p.parent) { toggleNode(p, true); p.el?.querySelector(":scope > .kids")?.classList.add("onpath") }
    if (!fromTree) n.row.scrollIntoView({block:"center"});
    if (focused) n.row.focus({preventScroll:true});
  }
  showProps(n); crumbs(); draw();
}

// ---------- selectors ----------
function xq(v){
  if (!v.includes('"')) return `"${v}"`;
  if (!v.includes("'")) return `'${v}'`;
  return "concat(" + v.split('"').map(p => `"${p}"`).join(`,'"',`) + ")";
}
// Ranked candidates; grade = how stable it stays if the app changes.
function selectors(n){
  const a = n.attrs, out = [];
  // counts come from evaluating the real XPath on the mirrored XML doc; a non-unique one also gets an indexed
  // variant "(xp)[k]" (document order) that pins exactly this element, so the top pick is always unique.
  const hits = xp => { try { const r = xdoc.evaluate(xp, xdoc, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    return Array.from({length:r.snapshotLength}, (_, i) => xmap.get(r.snapshotItem(i))) } catch { return [] } };
  const add = (xp, grade) => {
    const h = hits(xp), count = h.length, k = h.indexOf(n);
    out.push({xp, count, grade: count === 1 ? grade : "ok"});
    if (count > 1 && k >= 0) out.push({xp: `(${xp})[${k + 1}]`, count: 1, grade: "ok"});
  };
  if (a["resource-id"]) add(`//*[@resource-id=${xq(a["resource-id"])}]`, "best");
  if (a["content-desc"]) add(`//*[@content-desc=${xq(a["content-desc"])}]`, "good");
  if (a.text) add(`//*[@text=${xq(a.text)}]`, "good");
  if (a["resource-id"] && a.text) add(`//${n.cls}[@resource-id=${xq(a["resource-id"])} and @text=${xq(a.text)}]`, "good");
  if (!a["resource-id"] && !a.text && !a["content-desc"]) {
    let rel = [];
    for (let c = n, p = n.parent; p && p.parent; c = p, p = p.parent) {
      const same = p.children.filter(x => x.cls === c.cls);
      rel.unshift(c.cls + (same.length > 1 ? `[${same.indexOf(c)+1}]` : ""));
      if (p.attrs["resource-id"]) { add(`//*[@resource-id=${xq(p.attrs["resource-id"])}]/${rel.join("/")}`, "ok"); break }
    }
  }
  out.push({xp: n.xpathAbs, count: 1, grade: "fragile", abs: true});
  const rank = {best:0, good:1, ok:2, fragile:3};
  return out.sort((x, y) => (x.count !== 1) - (y.count !== 1) || rank[x.grade] - rank[y.grade]);  // unique first
}
function code(n, best){
  const a = n.attrs, q = s => JSON.stringify(s);
  const uniq = k => a[k] && flat.filter(m => m.attrs[k] === a[k]).length === 1;
  const u2 = uniq("resource-id") ? `d(resourceId=${q(a["resource-id"])}).click()`
           : uniq("text") ? `d(text=${q(a.text)}).click()`
           : uniq("content-desc") ? `d(description=${q(a["content-desc"])}).click()`
           : `d.xpath(${q(best)}).click()`;
  const mcp = uniq("resource-id") ? `tap(resource_id=${q(short(a["resource-id"]))})` : uniq("text") ? `tap(text=${q(a.text)})` : `tap(xpath=${q(best)})`;
  const [x1,y1,x2,y2] = n.bounds || [0,0,0,0];
  return [
    ["uiautomator2 · Python", u2],
    ["Appium · Python", `driver.find_element(AppiumBy.XPATH, ${q(best)}).click()`],
    ["MCP android-inceptor", mcp],
    ["ADB", `adb -s ${serial()} shell input tap ${(x1+x2)>>1} ${(y1+y2)>>1}`],
  ];
}
function emptyProps(){
  $("#props").dataset.for = "";
  $("#props").innerHTML = `<div class="empty">${ic("cursor")}<b>${t("noSel")}</b>${t("noSelSub")}</div>`;
}
function showProps(n){
  const a = n.attrs, b = n.bounds || [0,0,0,0];
  const kv = (k, v, h) => v ? `<dt>${k}${h ? `<span class="help" title="${esc(t(h))}">?</span>` : ""}</dt><dd data-c="${esc(v)}">${esc(v)}</dd>` : "";
  const flagKeys = ["clickable","long-clickable","scrollable","checkable","checked","enabled","focusable","focused","selected","password"];
  const sels = selectors(n);
  const panes = {
    sel: `<p class="note">${t("selHint")}</p>` + sels.map(s => `<div class="selc" data-c="${esc(s.xp)}"><div class="top"><span class="badge b-${s.grade==="fragile"?"bad":s.grade}">${t(s.grade)}</span>
        ${s.abs ? t("absXp") : "XPath"} · ${s.count === 1 ? t("unique") : t("matches",{n:s.count})}<button class="act" data-test="${esc(s.xp)}">${t("test")}</button><span class="cp">${ic("copy")}</span></div><code>${esc(s.xp)}</code></div>`).join(""),
    props: `<h4>${t("identity")}</h4><dl class="kv">`
      + kv("class", n.cls, "h_class") + kv("resource-id", a["resource-id"], "h_rid") + kv("text", a.text, "h_text")
      + kv("content-desc", a["content-desc"], "h_desc") + kv("package", a.package, "h_pkg") + `</dl>`
      + `<h4>${t("position")}</h4><dl class="kv">`
      + kv("bounds", `[${b[0]},${b[1]}][${b[2]},${b[3]}]`, "h_bounds") + kv(t("center"), `${(b[0]+b[2])>>1}, ${(b[1]+b[3])>>1}`) + kv(t("size"), `${b[2]-b[0]} × ${b[3]-b[1]}`) + `</dl>`
      + `<h4>${t("flags")}</h4><div class="flags">` + flagKeys.filter(k => k in a).map(k => `<span class="${a[k]==="true"?"y":""}">${k}</span>`).join("") + `</div>`,
    code: code(n, sels[0].xp).map(([k, v]) => `<div class="selc" data-c="${esc(v)}"><div class="top">${k}<span class="cp">${ic("copy")}</span></div><code>${esc(v)}</code></div>`).join(""),
  };
  const keepTop = $("#props").dataset.for === n.xpathAbs ? $("#props .scroll")?.scrollTop : 0;  // Live refresh: keep scroll
  $("#props").dataset.for = n.xpathAbs;
  $("#props").innerHTML =
    `<div class="hero"><div class="ttl">${esc(name(n))}</div><div class="sub">${esc(n.cls)}</div>
       <div class="acts"><button class="btn pri sm" id="btnCopyBest">${ic("copy")}${t("copyBest")}</button>
       <button class="btn sm" id="btnTapSel">${ic("tap")}${t("tapHere")}</button>
       ${n.parent?.parent ? `<button class="btn sm" id="btnParent">${ic("up")}${t("parent")}</button>` : ""}
       ${recording ? `<button class="btn sm" id="btnWait">⏱ ${t("waitHere")}</button>` : ""}</div></div>
     <div class="tabs">${["sel","props","code"].map(k => `<button class="tab ${tab===k?"on":""}" data-tab="${k}">${t({sel:"tSel",props:"tProps",code:"tCode"}[k])}</button>`).join("")}</div>
     <div class="scroll"><div class="pane">${panes[tab]}</div></div>`;
  if (keepTop) $("#props .scroll").scrollTop = keepTop;
  $("#props").querySelectorAll("[data-c]").forEach(e => { e.tabIndex = 0; e.onclick = () => copy(e.dataset.c);
    e.onkeydown = k => { if (k.target === e && (k.key === "Enter" || k.key === " ")) { k.preventDefault(); copy(e.dataset.c) } } });
  $("#props").querySelectorAll("[data-test]").forEach(e => e.onclick = ev => { ev.stopPropagation(); testXPath(e.dataset.test) });
  $("#props").querySelectorAll("[data-tab]").forEach(e => e.onclick = () => { tab = e.dataset.tab; store.set("tab", tab); showProps(n) });
  $("#btnCopyBest").onclick = () => copy(sels[0].xp);
  $("#btnTapSel").onclick = () => { recording && record(makeStep("tap", n)); tap((b[0]+b[2])>>1, (b[1]+b[3])>>1) };
  $("#btnWait") && ($("#btnWait").onclick = () => { record(makeStep("wait", n)); toast("⏱ " + name(n)) });
  $("#btnParent") && ($("#btnParent").onclick = () => select(n.parent));
}

// ---------- screenshot overlay ----------
const img = $("#shot"), cv = $("#ov"), ctx = cv.getContext("2d"), tip = $("#tip");
// Backing store at devicePixelRatio so boxes stay sharp on 125%/150% displays; drawing stays in CSS px.
function sizeCanvas(){
  const r = img.getBoundingClientRect(), dpr = devicePixelRatio || 1;
  if (!r.width || !img.naturalWidth) return;
  cv.width = Math.round(r.width * dpr); cv.height = Math.round(r.height * dpr);
  cv.style.width = r.width + "px"; cv.style.height = r.height + "px";
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0); scale = r.width / img.naturalWidth; draw();
}
new ResizeObserver(() => img.naturalWidth && sizeCanvas()).observe(img);
function rect(n, color, alpha){
  if (!n?.bounds) return;
  const [x1,y1,x2,y2] = n.bounds.map(v => v*scale);
  ctx.globalAlpha = alpha; ctx.fillStyle = color; ctx.fillRect(x1,y1,x2-x1,y2-y1);
  ctx.globalAlpha = 1; ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.strokeRect(x1+1,y1+1,x2-x1-2,y2-y1-2);
}
function draw(){
  ctx.clearRect(0,0,cv.width,cv.height);
  if (qMode === "xpath") xlist.forEach(n => n !== sel && rect(n, pal["m-xp"], .16));
  // hover box takes the mode colour: inspect / control / recording (what a click will record)
  if (hover !== sel || control) rect(hover, control ? (recording ? pal["m-rec"] : pal["m-ctl"]) : pal["m-insp"], control ? .18 : .14);
  rect(sel, pal.acc, .22);
  if (control && down && dragAt) {  // live swipe line while dragging
    const [x0, y0, x1, y1] = [...down, ...dragAt].map(v => v * scale);
    ctx.strokeStyle = ctx.fillStyle = recording ? pal["m-rec"] : pal["m-ctl"]; ctx.lineWidth = 3; ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.stroke();
    ctx.beginPath(); ctx.arc(x1, y1, 6, 0, 7); ctx.fill();
  }
}
const devXY = e => { const r = cv.getBoundingClientRect(); return [Math.round((e.clientX-r.left)/scale), Math.round((e.clientY-r.top)/scale)] };
const clampXY = ([x, y]) => [Math.max(0, Math.min(img.naturalWidth - 1, x)), Math.max(0, Math.min(img.naturalHeight - 1, y))];
// Smallest node containing the point = the deepest visual element.
function hit(x, y){
  let best = null, area = Infinity;
  for (const n of flat) {
    if (!n.bounds) continue;
    const [x1,y1,x2,y2] = n.bounds, s = (x2-x1)*(y2-y1);
    if (x>=x1 && x<=x2 && y>=y1 && y<=y2 && s>0 && s<=area) { best = n; area = s }
  }
  return best;
}
// Alt+click: the element you'd actually act on = nearest clickable / resource-id node going up
const actionable = n => { for (let p = n; p?.parent; p = p.parent) if (p.attrs.clickable === "true" || p.attrs["resource-id"]) return p; return n };
cv.onpointermove = e => {
  const [x,y] = devXY(e); $("#xy").textContent = `x ${x}  y ${y}`;
  if (down) dragAt = clampXY([x, y]);
  const h = hit(x,y), rc = recording && control;  // clicks only record in Control mode
  if (h !== hover || tip.classList.contains("rec") !== rc) {  // tooltip text only recomputed when it changes
    hover = h;
    tip.textContent = !h ? "" : rc ? `● ${t("willRec")}: ${u2sel(makeStep("tap", h))}` : `${h.cls.split(".").pop()} · ${name(h)}`;
    tip.classList.toggle("rec", rc);
  }
  draw();
  if (hover && !down) {
    tip.style.display = "block";
    const r = cv.getBoundingClientRect(), lx = e.clientX - r.left, ly = e.clientY - r.top;
    tip.style.left = Math.min(lx + 14, r.width - tip.offsetWidth - 4) + "px";
    tip.style.top = (ly + 18 + tip.offsetHeight > r.height ? ly - tip.offsetHeight - 8 : ly + 18) + "px";
  } else tip.style.display = "none";
};
cv.onpointerleave = () => { hover = null; draw(); $("#xy").textContent = ""; tip.style.display = "none" };
// Pointer capture: a swipe released outside the screenshot still ends here (clamped to the screen edge).
let down = null, downT = 0, dragAt = null;
cv.onpointerdown = e => { if (e.button) return; down = clampXY(devXY(e)); downT = performance.now(); dragAt = null; cv.setPointerCapture(e.pointerId) };
cv.onpointercancel = () => { down = dragAt = null; draw() };
cv.onpointerup = e => {
  if (e.button || !down) return;  // press started elsewhere -> not a gesture
  const [x, y] = clampXY(devXY(e)), [x0, y0] = down, held = performance.now() - downT;
  down = dragAt = null;
  if (control) {
    if (Math.hypot(x-x0, y-y0) > 20) {
      devAct("/api/swipe",{serial:serial(),x1:x0,y1:y0,x2:x,y2:y}).then(() => record({op:"swipe", x1:x0, y1:y0, x2:x, y2:y})).catch(e=>toast(t("err")+": "+e.message));
    } else controlTap(x0, y0, held >= 500);  // held >= 0.5s = long-press
  } else { let n = hit(x,y); if (n && e.altKey) n = actionable(n); if (n) { (view === "play" && pgGrabOn) ? pgGrabEl(n) : select(n); } }
  draw();
};
cv.oncontextmenu = e => {
  const n = root && hit(...devXY(e)); if (!n) return;
  e.preventDefault(); select(n); elMenu(n, e.clientX, e.clientY);
};
// While recording, re-read the UI tree first so the step is bound to the element really under the cursor.
async function controlTap(x, y, long){
  if (recording) {
    toast(t("reading")); await dump(true);
    const n = hit(x, y);
    n ? record(makeStep(long ? "longpress" : "tap", n)) : toast(t("noElem"));
  }
  long ? longPress(x, y) : tap(x, y);
}
async function tap(x, y){
  try{ await devAct("/api/tap",{serial:serial(),x,y}); toast(`${t("tapped")} ${x}, ${y}`) }catch(e){ toast(t("err")+": "+e.message) }
}
async function longPress(x, y){
  try{ await devAct("/api/swipe",{serial:serial(),x1:x,y1:y,x2:x,y2:y,dur:700}); toast(`${t("longPressed")} ${x}, ${y}`) }catch(e){ toast(t("err")+": "+e.message) }
}
// One colour per mode (inspect amber, control sky, recording rose, XPath teal) shared by buttons, overlay, tabs, footer.
// Recording + Inspect mode = recording paused (canvas clicks select, they don't record) -> say so instead of showing rose.
function syncMode(){
  const m = recording && control ? "rec" : control ? "control" : "inspect";
  document.body.dataset.mode = m; document.body.classList.toggle("xp", qMode === "xpath");
  $("#fMode").innerHTML = esc(t(m === "rec" ? "mRec" : recording ? "recPaused" : m)) + (qMode === "xpath" ? ` <span class="xpc">· XPath</span>` : "");
}
let pal = {};
function readPal(){ const cs = getComputedStyle(document.documentElement); for (const k of ["m-insp","m-ctl","m-rec","m-xp","acc"]) pal[k] = cs.getPropertyValue("--"+k).trim() }
function setMode(m){
  control = m === "control";
  document.querySelectorAll("#modeSeg button").forEach(b => b.classList.toggle("on", b.dataset.mode === m));
  cv.classList.toggle("ctl", control); hover = null; syncMode(); draw(); kbdChip();
}
document.querySelectorAll("#modeSeg button").forEach(b => b.onclick = () => setMode(b.dataset.mode));
// steps are recorded only once the device accepted them (a failed text/key never lands in the recording)
document.querySelectorAll("[data-key]").forEach(b => b.onclick = () => {
  const code = +b.dataset.key;
  devAct("/api/key",{serial:serial(),code}).then(() => record({op:"key", key: KEYNAME[code]})).catch(e=>toast(t("err")+": "+e.message));
});
const isAscii = s => /^[\x00-\x7F]*$/.test(s);
const sendText = enter => {  // enter = Shift+Enter: type, then press the device Enter key
  const text = $("#txt").value; if (!text) return;
  if (!isAscii(text)) return toast(t("asciiOnly"));
  devAct("/api/text",{serial:serial(),text}).then(() => { record({op:"text", text}); $("#txt").value = "";
    if (enter) return devAct("/api/key",{serial:serial(),code:66}).then(() => record({op:"key", key:"enter"})) }).catch(e=>toast(t("err")+": "+e.message));
};

// ---------- Control mode: keyboard + wheel go to the device while the pointer (or focus) is on the screen ----------
const stage = $("#stage"); let stageHover = false;
stage.tabIndex = -1;  // clicking the screen focuses it, so typing keeps going to the device until you click elsewhere
const kbdHot = () => control && !!serial() && !$("#shotWrap").hidden && (stageHover || stage.contains(document.activeElement));
function kbdChip(){ $("#kbdChip").hidden = !kbdHot() }
stage.addEventListener("pointerenter", () => { stageHover = true; kbdChip() });
stage.addEventListener("pointerleave", () => { stageHover = false; kbdChip() });
stage.addEventListener("focusin", kbdChip); stage.addEventListener("focusout", () => setTimeout(kbdChip));
const PASSKEY = {Enter:66, Backspace:67, Tab:61, Escape:4, ArrowUp:19, ArrowDown:20, ArrowLeft:21, ArrowRight:22};
let kq = Promise.resolve(), kbuf = "", kbufT = 0;
// one ordered queue: typed text, keys and wheel swipes reach the device in the order they happened
const kQueue = (path, params, step) => { kq = kq.then(() => devAct(path, params)).then(() => record(step)).catch(e => toast(t("err")+": "+e.message)) };
function kFlush(){ clearTimeout(kbufT); if (!kbuf) return; const text = kbuf; kbuf = ""; kQueue("/api/text", {serial:serial(), text}, {op:"text", text}) }
function kbdPass(e){
  if (!kbdHot()) return false;
  if (e.key.length === 1) {  // printable -> batched into one `input text` (250ms)
    e.preventDefault();
    if (!isAscii(e.key)) { toast(t("asciiOnly")); return true }
    kbuf += e.key; clearTimeout(kbufT); kbufT = setTimeout(kFlush, 250); return true;
  }
  const code = PASSKEY[e.key]; if (!code) return false;
  e.preventDefault(); kFlush();
  kQueue("/api/key", {serial:serial(), code}, {op:"key", key: KEYNAME[code]});
  return true;
}
document.addEventListener("paste", e => {
  if (!kbdHot() || typing(e.target)) return;
  const s = e.clipboardData?.getData("text"); if (!s) return;
  e.preventDefault(); if (!isAscii(s)) return toast(t("asciiOnly"));
  kbuf += s; kFlush();
});
// Wheel = swipe at the pointer, 1/4 screen per notch (throttled). Wheel down shows content further down = finger moves up.
let wheelT = 0;
cv.addEventListener("wheel", e => {
  if (!control || !img.naturalWidth || !serial()) return;
  e.preventDefault();
  const now = performance.now(); if (now - wheelT < 350) return; wheelT = now;
  const v = Math.abs(e.deltaY) >= Math.abs(e.deltaX), s = Math.sign(v ? e.deltaY : e.deltaX); if (!s) return;
  const [x, y] = clampXY(devXY(e)), W = img.naturalWidth, H = img.naturalHeight, d = Math.round((v ? H : W) / 4);
  const fit = (p, max) => s > 0 ? Math.max(p, d) : Math.min(p, max - 1 - d);  // keep the whole stroke on screen
  const x1 = v ? x : fit(x, W), y1 = v ? fit(y, H) : y, x2 = v ? x1 : x1 - s * d, y2 = v ? y1 - s * d : y1;
  kQueue("/api/swipe", {serial:serial(), x1, y1, x2, y2, dur:250}, {op:"swipe", x1, y1, x2, y2});
}, {passive:false});

// ---------- element context menu (right-click on the screenshot or a tree row) ----------
function closeMenu(){ const m = document.querySelector(".ctxmenu"); if (!m) return; m.remove(); m._off?.(); m._back?.focus?.({preventScroll:true}) }
function elMenu(n, x, y){
  closeMenu();
  const a = n.attrs, b = n.bounds || [0,0,0,0], cx = (b[0]+b[2])>>1, cy = (b[1]+b[3])>>1, best = selectors(n)[0].xp;
  const cut = v => v.length > 34 ? v.slice(0, 34) + "…" : v, top = n.parent?.parent;
  const items = [
    ["copy", t("copyBest"), () => copy(best), cut(best)],
    ["copy", t("cmXPath"), () => copy(n.xpathAbs)],
    a["resource-id"] && ["copy", t("cmRid"), () => copy(a["resource-id"]), cut(short(a["resource-id"]))],
    a.text && ["copy", t("cmText"), () => copy(a.text), cut(a.text)],
    a["content-desc"] && ["copy", t("cmDesc"), () => copy(a["content-desc"]), cut(a["content-desc"])],
    ["copy", t("cmCenter"), () => copy(`${cx}, ${cy}`), `${cx}, ${cy}`],
    "-",
    !$("#treePane").hidden && ["search", t("cmTest"), () => testXPath(best)],
    ["tap", t("tapHere"), () => { recording && record(makeStep("tap", n)); tap(cx, cy) }],
    ["hold", t("cmLong"), () => { recording && record(makeStep("longpress", n)); longPress(cx, cy) }],
    "-",
    ["target", t("cmPgTap"), () => pgGrabEl(n, "tap")],
    ["clock", t("cmPgWait"), () => pgGrabEl(n, "wait")],
    ["branch", t("cmPgIf"), () => pgGrabEl(n, "iff")],
    top && "-",
    top && ["up", t("parent"), () => select(n.parent)],
  ].filter(Boolean);
  const m = document.createElement("div"); m.className = "ctxmenu"; m.setAttribute("role", "menu"); m.setAttribute("aria-label", name(n));
  m._back = document.activeElement;
  m.innerHTML = `<div class="cmh">${esc(name(n).slice(0, 40))}</div>` + items.map((it, i) => it === "-" ? `<hr>`
    : `<button role="menuitem" tabindex="-1" data-i="${i}">${ic(it[0])}<span>${esc(it[1])}</span>${it[3] ? `<small>${esc(it[3])}</small>` : ""}</button>`).join("");
  document.body.append(m);
  m.style.left = Math.max(8, Math.min(x, innerWidth - m.offsetWidth - 8)) + "px";
  m.style.top = Math.max(8, y + m.offsetHeight > innerHeight - 8 ? y - m.offsetHeight : y) + "px";
  const btns = [...m.querySelectorAll("button")];
  btns.forEach(bt => bt.onclick = () => { const f = items[+bt.dataset.i][2]; closeMenu(); f() });
  m.onkeydown = e => {
    const i = btns.indexOf(document.activeElement), go = j => btns[(j + btns.length) % btns.length].focus();
    if (e.key === "ArrowDown") go(i + 1); else if (e.key === "ArrowUp") go(i < 0 ? -1 : i - 1);
    else if (e.key === "Home") go(0); else if (e.key === "End") go(-1);
    else if (e.key === "Escape" || e.key === "Tab") closeMenu(); else return;
    e.preventDefault(); e.stopPropagation();
  };
  btns[0].focus({preventScroll:true});
  // outside press / resize / window blur closes it (position:fixed, so scrolling elsewhere doesn't misplace it)
  const off = e => { if (!m.contains(e.target)) closeMenu() };
  const evs = [[document, "pointerdown", true], [window, "resize"], [window, "blur"]];
  m._off = () => evs.forEach(([o, ev, c]) => o.removeEventListener(ev, off, !!c));
  setTimeout(() => m.isConnected && evs.forEach(([o, ev, c]) => o.addEventListener(ev, off, !!c)));
}

// ---------- recorder ----------
// A tap/wait step stores the element's attributes + a snapshot of the screen's nodes, so the user can pick
// which attributes form the selector ("parameter acuan") and see live how many elements it matches.
const KEYNAME = {4:"back", 3:"home", 187:"recent", 66:"enter", 67:"delete", 61:"tab", 19:"up", 20:"down", 21:"left", 22:"right"};
const KEYCODE = Object.fromEntries(Object.entries(KEYNAME).map(([c, k]) => [k, +c]));
// export: names uiautomator2 d.press() / MCP press_key() know; any other key is exported as its keycode
const U2KEYS = ["back","home","recent","enter","delete","up","down","left","right"], MCPKEYS = ["back","home","recent","enter","delete","tab"];
const isSelStep = s => s.op === "tap" || s.op === "wait" || s.op === "longpress";
const PARAMS = [["rid","resource-id"], ["desc","content-desc"], ["text","text"], ["cls","class"]];
let rec = (() => { try { return JSON.parse(store.get("rec") || "[]") } catch { return [] } })()
  .filter(s => !isSelStep(s) || s.attrs);  // drop steps from the old coordinate format
let recording = false, replaying = false, cur = -1, failAt = -1, fmt = store.get("fmt") || "py", view = "el", openStep = -1;
let replayMsg = null, fromHome = store.get("fromHome") === "1", clearArm = null;
const pq = s => JSON.stringify(s);  // JSON string literal is a valid Python string literal
const nodeAttrs = n => ({rid: n.attrs["resource-id"] || "", desc: n.attrs["content-desc"] || "", text: n.attrs.text || "", cls: n.cls});
const partial = (s, k) => s.contains && (k === "text" || k === "desc");
function refine(s){
  const m = s.snap.map((_, i) => i).filter(i => PARAMS.every(([k]) => !s.use[k] ||
    (partial(s, k) ? s.snap[i][k].includes(s.attrs[k]) : s.snap[i][k] === s.attrs[k])));
  s.count = m.length; s.instance = Math.max(0, m.indexOf(s.self));
  return s;
}
// Default params = smallest attribute combo unique on the recorded screen; else first attribute + its instance index.
function makeStep(op, n){
  const b = n.bounds || [0,0,0,0];
  const s = {op, label: name(n), attrs: nodeAttrs(n), use: {}, contains: false, timeout: 10, optional: false,
             x: (b[0]+b[2])>>1, y: (b[1]+b[3])>>1};
  // snapshot = only nodes sharing at least one attribute with this one (exact, or contains for text/desc): a node that
  // matches no single param can never match a combination, so counts stay exact while the saved recording stays small
  const like = m => PARAMS.some(([k]) => s.attrs[k] && (m[k] === s.attrs[k] || (k === "text" || k === "desc") && m[k].includes(s.attrs[k])));
  const all = flat.map(nodeAttrs), me = flat.indexOf(n);
  s.snap = all.filter((m, i) => i === me || like(m)); s.self = s.snap.indexOf(all[me]);
  for (const c of [["rid"],["desc"],["text"],["rid","text"],["rid","desc"],["cls","text"],["cls","desc"],["rid","cls"]])
    if (c.every(k => s.attrs[k])) { s.use = Object.fromEntries(c.map(k => [k, true])); if (refine(s).count === 1) return s }
  s.use = {[PARAMS.map(([k]) => k).find(k => s.attrs[k])]: true};
  return refine(s);
}
function stepXPath(s){
  const c = PARAMS.filter(([k]) => s.use[k]).map(([k, a]) => partial(s, k) ? `contains(@${a}, ${xq(s.attrs[k])})` : `@${a}=${xq(s.attrs[k])}`);
  const xp = `//*[${c.join(" and ")}]`;
  return s.count > 1 ? `(${xp})[${s.instance + 1}]` : xp;
}
function u2sel(s){
  const kw = [];
  if (s.use.rid) kw.push(`resourceId=${pq(s.attrs.rid)}`);
  if (s.use.text) kw.push(`${s.contains ? "textContains" : "text"}=${pq(s.attrs.text)}`);
  if (s.use.desc) kw.push(`${s.contains ? "descriptionContains" : "description"}=${pq(s.attrs.desc)}`);
  if (s.use.cls) kw.push(`className=${pq(s.attrs.cls)}`);
  if (s.count > 1) kw.push(`instance=${s.instance}`);
  return `d(${kw.join(", ")})`;
}
function mcpArgs(s, withIndex = true){
  const a = [];
  if (s.use.rid) a.push(`resource_id=${pq(s.attrs.rid)}`);
  if (s.use.text) a.push(`text=${pq(s.attrs.text)}`);
  if (s.use.desc) a.push(`desc=${pq(s.attrs.desc)}`);
  if (s.use.cls) a.push(`class_name=${pq(s.attrs.cls)}`);
  if (s.contains && (s.use.text || s.use.desc)) a.push("contains=True");
  if (withIndex && s.count > 1) a.push(`index=${s.instance}`);
  return a.join(", ");
}
const matchBadge = s => s.count === 1 ? `<span class="badge b-best">✓ ${t("unique")}</span>`
  : s.count === 0 ? `<span class="badge b-bad">0</span>` : `<span class="badge b-ok">${t("nth",{k:s.instance+1, n:s.count})}</span>`;
function record(step){ if (!recording) return; rec.push(step); openStep = rec.length - 1; saveRec() }
function saveRec(){ if (!store.set("rec", JSON.stringify(rec))) toast(t("quotaFull")); $("#recCnt").textContent = rec.length; if (view === "rec") renderRec() }

function exportCode(){
  const S = serial() || "127.0.0.1:16384";
  if (fmt === "py") {
    const line = s => {
      const sel = s.use && u2sel(s), T = s.timeout;
      if (s.op === "tap") return s.optional ? `if ${sel}.wait(timeout=${T}):\n    ${sel}.click()` : `${sel}.click(timeout=${T})`;
      if (s.op === "longpress") return s.optional ? `if ${sel}.wait(timeout=${T}):\n    ${sel}.long_click()` : `${sel}.long_click(timeout=${T})`;
      if (s.op === "wait") return s.optional ? `${sel}.wait(timeout=${T})` : `assert ${sel}.wait(timeout=${T}), ${pq("not found: " + s.label)}`;
      if (s.op === "swipe") return `d.swipe(${s.x1}, ${s.y1}, ${s.x2}, ${s.y2}, 0.3)\ntime.sleep(0.5)`;
      if (s.op === "key") return `d.press(${U2KEYS.includes(s.key) ? pq(s.key) : KEYCODE[s.key]})\ntime.sleep(0.5)`;
      return `d.send_keys(${pq(s.text)})`;
    };
    return `# Generated by Inceptor AI · ${new Date().toLocaleString()}\n# pip install uiautomator2\nimport time\nimport uiautomator2 as u2\n\nd = u2.connect(${pq(S)})\n\n`
      + rec.map((s, i) => `# ${i+1}. ${stepText(s).slice(0,2).join(" ")}${s.optional ? " (optional)" : ""}\n${line(s)}`).join("\n") + "\nprint(\"done\")\n";
  }
  if (fmt === "mcp") return rec.map((s, i) => `${i+1}. ` + (
      s.op === "tap" ? `tap(${mcpArgs(s)})` : s.op === "longpress" ? `tap(${mcpArgs(s)}, long_press_ms=700)` : s.op === "wait" ? `wait_for(${mcpArgs(s, false)}, timeout=${s.timeout})`
    : s.op === "swipe" ? `swipe(${s.x1}, ${s.y1}, ${s.x2}, ${s.y2})` : s.op === "key" ? `press_key(${pq(MCPKEYS.includes(s.key) ? s.key : String(KEYCODE[s.key]))})` : `input_text(${pq(s.text)})`)
    + (s.optional ? "   # optional" : "")).join("\n");
  const a = `adb -s ${S} shell`;
  return t("adbNote") + "\n" + rec.map(s => (
      s.op === "tap" ? `${a} input tap ${s.x} ${s.y}   # ${s.label}` : s.op === "longpress" ? `${a} input swipe ${s.x} ${s.y} ${s.x} ${s.y} 700   # ${s.label}` : s.op === "wait" ? `sleep 1   # ${s.label}`
    : s.op === "swipe" ? `${a} input swipe ${s.x1} ${s.y1} ${s.x2} ${s.y2} 300` : s.op === "key" ? `${a} input keyevent ${KEYCODE[s.key]}`
    : `${a} input text ${pq(s.text.replace(/ /g, "%s"))}`) + "\nsleep 0.5").join("\n");
}
function stepText(s){
  if (isSelStep(s)) return [t({tap:"opTap", wait:"opWait", longpress:"opLong"}[s.op]), s.label];
  if (s.op === "swipe") return [t("opSwipe"), `(${s.x1}, ${s.y1}) → (${s.x2}, ${s.y2})`];
  return s.op === "key" ? [t("opKey"), s.key] : [t("opText"), `“${s.text}”`];
}
function paramEditor(s, i){
  const rows = PARAMS.filter(([k]) => s.attrs[k]).map(([k, a]) =>
    `<label class="pr ${s.use[k] ? "on" : ""}"><input type="checkbox" data-p="${k}" data-i="${i}" ${s.use[k] ? "checked" : ""}>
       <span class="pk">${a}</span><span class="pv">${esc(k === "rid" ? short(s.attrs[k]) : s.attrs[k])}</span></label>`).join("");
  return `<div class="params"><div class="ph">${t("params")}</div>${rows}
    <div class="opts">
      ${s.attrs.text || s.attrs.desc ? `<label><input type="checkbox" data-o="contains" data-i="${i}" ${s.contains ? "checked" : ""}> ${t("contains")}</label>` : ""}
      <label>${t("timeout")} <input class="inp num" type="number" min="1" max="120" data-o="timeout" data-i="${i}" value="${s.timeout}"> s</label>
      <label><input type="checkbox" data-o="optional" data-i="${i}" ${s.optional ? "checked" : ""}> ${t("optional")}</label>
    </div></div>`;
}
function renderRec(){
  const box = $("#recView"), keepScroll = box.querySelector(".scroll")?.scrollTop;
  const steps = rec.length ? `<ol class="steps">` + rec.map((s, i) => {
      const [op, what] = stepText(s), sel = isSelStep(s);
      return `<li class="${i===cur?"cur":""} ${i===failAt?"fail":""} ${sel?"sel-step":""}"><span class="no">${i+1}</span><div class="bd">
        <div class="sum" ${sel ? `data-open="${i}"` : ""}><b>${esc(op)}</b> <span class="lbl">${esc(what)}</span>
          ${sel ? matchBadge(s) + (s.optional ? `<span class="badge b-good">${t("optShort")}</span>` : "") + `<span class="chev ${openStep===i?"up":""}">${ic("chev")}</span>` : ""}</div>
        ${sel ? `<code>${esc(u2sel(s))}</code>` : ""}
        ${sel && openStep === i ? paramEditor(s, i) : ""}</div>
        <div class="acts2"><button class="x run" data-from="${i}" title="${esc(t("runFrom"))}" ${replaying ? "disabled" : ""}>▶</button>
        <button class="x" data-del="${i}" title="${esc(t("delStep"))}" ${replaying ? "disabled" : ""}>✕</button></div></li>` }).join("") + `</ol>`
    : `<div class="empty">${ic("cursor")}<b>${t("recEmptyT")}</b>${t("recEmptyS")}</div>`;
  box.innerHTML = `<div class="head"><h2>${t("vRec")} <small>${t("steps",{n:rec.length})}</small></h2><span class="sp"></span>
      <button class="btn sm ${replaying?"":"pri"}" id="btnReplay" ${rec.length?"":"disabled"}>${replaying ? "■ "+t("stopReplay") : "▶ "+t("replay")}</button>
      <button class="btn sm" id="btnToPg" ${rec.length && !replaying ? "" : "disabled"}>${ic("flow")}${t("recToPg")}</button>
      <button class="btn sm ${clearArm ? "danger" : "ghost"}" id="btnClear" ${rec.length && !replaying ? "" : "disabled"}>${t(clearArm ? "clearSure" : "clear")}</button></div>
    ${rec.length ? `<div class="rbar"><label><input type="checkbox" id="fromHome" ${fromHome ? "checked" : ""} ${replaying ? "disabled" : ""}> ${t("fromHome")}</label></div>` : ""}
    ${replayMsg ? `<div class="banner ${replayMsg.type}"><div>${esc(replayMsg.text)}</div>
      ${replayMsg.type === "fail" ? `<div class="hint">${esc(t("nowAt",{a: activity || "?"}))} · ${esc(t("failHint"))}</div>
        <div class="bacts"><button class="btn sm" id="btnRetry">↻ ${t("retry")}</button><button class="btn sm" id="btnSkip">${t("skip")} →</button>
        <button class="btn sm ghost" id="btnDismiss">${t("dismiss")}</button></div>` : ""}</div>` : ""}
    <div class="scroll">${steps}</div>
    ${rec.length ? `<div class="export"><div class="bar"><b style="font-size:12px;color:var(--mut)">${t("exportLbl")}</b>
      <div class="seg sm" id="fmtSeg">${[["py","Python"],["mcp","MCP"],["adb","ADB"]].map(([k,l]) => `<button data-f="${k}" class="${fmt===k?"on":""}">${l}</button>`).join("")}</div>
      <span class="sp"></span><button class="btn sm" id="btnCopyCode">${ic("copy")}${t("copyS")}</button>
      <button class="btn sm" id="btnDl">${t("download")}</button></div><pre id="codeOut"></pre></div>` : ""}`;
  if (rec.length) $("#codeOut").textContent = exportCode();
  if (keepScroll) box.querySelector(".scroll").scrollTop = keepScroll;
  else if (recording) box.querySelector(".scroll").scrollTop = 1e6;  // follow new steps while recording
  box.querySelectorAll("[data-open]").forEach(e => e.onclick = () => { openStep = openStep === +e.dataset.open ? -1 : +e.dataset.open; renderRec() });
  box.querySelectorAll("[data-p]").forEach(e => e.onchange = () => {
    const s = rec[+e.dataset.i];
    s.use[e.dataset.p] = e.checked;
    if (!Object.values(s.use).some(Boolean)) { s.use[e.dataset.p] = true; toast(t("minParam")) }
    refine(s); saveRec();
  });
  box.querySelectorAll("[data-o]").forEach(e => e.onchange = () => {
    const s = rec[+e.dataset.i], o = e.dataset.o;
    s[o] = o === "timeout" ? Math.min(120, Math.max(1, +e.value || 10)) : e.checked;
    refine(s); saveRec();
  });
  box.querySelectorAll("[data-del]").forEach(b => b.onclick = () => { rec.splice(+b.dataset.del, 1); failAt = -1; openStep = -1; replayMsg = null; saveRec() });
  box.querySelectorAll("[data-from]").forEach(b => b.onclick = () => replay(+b.dataset.from));
  box.querySelectorAll("[data-f]").forEach(b => b.onclick = () => { fmt = b.dataset.f; store.set("fmt", fmt); renderRec() });
  $("#btnReplay").onclick = () => { if (replaying) { replaying = false; replayMsg = {type:"run", text:t("stopping")}; renderRec() } else replay(0) };
  // Two-click confirm (native confirm() is often blocked inside embedded browsers).
  $("#btnClear").onclick = e => {
    const btn = e.currentTarget, arm = on => { btn.classList.toggle("danger", on); btn.classList.toggle("ghost", !on); btn.textContent = t(on ? "clearSure" : "clear") };
    if (!clearArm) { arm(true); clearArm = setTimeout(() => { clearArm = null; arm(false) }, 4000); return }
    clearTimeout(clearArm); clearArm = null; rec = []; failAt = -1; openStep = -1; replayMsg = null; saveRec(); toast("✓ " + t("cleared"));
  };
  $("#btnToPg").onclick = recToPlayground;
  $("#fromHome") && ($("#fromHome").onchange = e => { fromHome = e.target.checked; store.set("fromHome", fromHome ? "1" : "0") });
  $("#btnRetry") && ($("#btnRetry").onclick = () => replay(failAt));
  $("#btnSkip") && ($("#btnSkip").onclick = () => failAt + 1 < rec.length ? replay(failAt + 1) : (replayMsg = null, failAt = -1, renderRec()));
  $("#btnDismiss") && ($("#btnDismiss").onclick = () => { replayMsg = null; failAt = -1; renderRec() });
  $("#btnCopyCode") && ($("#btnCopyCode").onclick = () => copy(exportCode()));
  $("#btnDl") && ($("#btnDl").onclick = () => {
    const ext = {py:"py", mcp:"txt", adb:"sh"}[fmt], a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([exportCode()], {type:"text/plain"})); a.download = `inceptor_flow.${ext}`; a.click(); URL.revokeObjectURL(a.href);
  });
}
// ---- Recorder -> Playground: each recorded step becomes the closest node; optional steps become "If exists" (never fail) ----
function recSel(s){  // keep a readable selector when the recording used a single unique attribute, else its exact XPath
  const ks = PARAMS.map(([k]) => k).filter(k => s.use[k]);
  if (ks.length === 1 && ks[0] !== "cls" && s.count === 1) return {by: ks[0], val: s.attrs[ks[0]], contains: !!s.contains && ks[0] !== "rid"};
  return {by: "xpath", val: stepXPath(s), contains: false};
}
function recToNodes(){
  return rec.map(s => {
    let n;
    if (isSelStep(s)) {
      const sl = recSel(s);
      if (s.op === "wait") { n = pgMake(s.optional ? "iff" : "wait"); n.timeout = s.timeout; }
      else { n = pgMake(s.op === "longpress" ? "longpress" : "tap"); if (s.op === "longpress") n.dur = 700; }
      Object.assign(n.sel, sl);
      if (s.optional && s.op !== "wait") { const w = pgMake("iff"); Object.assign(w.sel, sl); w.timeout = s.timeout; w.children.push(n); n = w; }
    }
    else if (s.op === "swipe") { n = pgMake("swipe"); Object.assign(n, {x1: s.x1, y1: s.y1, x2: s.x2, y2: s.y2, dur: 300}); }
    else if (s.op === "key") { n = pgMake("key"); n.code = String(KEYCODE[s.key] ?? s.key); }
    else { n = pgMake("text"); n.text = s.text || ""; }
    return n;
  });
}
async function recToPlayground(){
  if (!rec.length) return;
  if (pgRunning) return toast(t("pgBusy"));
  const r = await pgAsk({title: t("recToPg"), msg: t("recToPgQ", {n: rec.length}), ok: t("recToPgAppend", {name: pgCurE().name}), alt: t("recToPgNew")});
  if (!r) return;
  const nodes = recToNodes();
  setView("play");
  if (r.v === "alt") pgAddFlow(pgUniqName(t("recFlowName", {d: new Date().toLocaleDateString()})), nodes);
  else { pgSnap(); flow.push(...nodes); pgSave(); pgRenderFlow(); pgFit(); }
  toast(t("recToPgDone", {n: nodes.length}));
}
const sleep = ms => new Promise(r => setTimeout(r, ms));
// Replay never uses coordinates for tap/wait: the server re-dumps until the step's XPath matches, then taps its center.
async function replay(start = 0){
  if (!serial()) return toast(t("noDev"));
  if (replaying || !rec.length) return;
  const wasRec = recording; recording = false; replaying = true; failAt = -1; replayMsg = null; setView("rec");
  try {
    if (fromHome && start === 0) {
      replayMsg = {type:"run", text:t("goingHome")}; renderRec();
      await api("/api/key", {serial:serial(), code:3}); await sleep(1200);
    }
    for (cur = start; cur < rec.length && replaying; cur++) {
      const s = rec[cur], S = serial();
      replayMsg = {type:"run", text:t("running",{k:cur+1, n:rec.length, what:stepText(s).join(" ")})}; renderRec();
      if (isSelStep(s)) {
        try { await api("/api/act", {serial:S, xpath:stepXPath(s), op:s.op === "longpress" ? "longtap" : s.op, timeout:s.timeout, dur:700}) }
        catch (e) { if (!s.optional) throw e }
      }
      else if (s.op === "swipe") await api("/api/swipe", {serial:S, x1:s.x1, y1:s.y1, x2:s.x2, y2:s.y2});
      else if (s.op === "key") await api("/api/key", {serial:S, code:KEYCODE[s.key]});
      else if (s.op === "text") await api("/api/text", {serial:S, text:s.text});
      await sleep(600);
    }
    replayMsg = replaying ? {type:"ok", text:t("replayDone")} : {type:"run", text:t("stopped",{k:cur})};
    if (replaying) toast(t("replayDone"));
  } catch (e) {
    failAt = cur;
    const m = /not found after ([\d.]+)s/.exec(e.message);
    replayMsg = {type:"fail", text:t("replayFail",{n:cur+1, e: m ? t("notFound",{w:stepText(rec[cur]).join(" "), s:m[1]}) : e.message})};
  }
  finally { replaying = false; cur = -1; recording = wasRec; renderRec(); await dump(); renderRec() }
}
function setRecording(on){
  recording = on; hover = null;
  $("#btnRec").classList.toggle("on", on); $("#btnRec").setAttribute("aria-pressed", on); $("#recLbl").textContent = t(on ? "recStop" : "rec"); syncMode();
  if (on) { setMode("control"); if (!streaming) setLive(true); setView("rec"); toast("● " + t("recOn")) }
  sel && showProps(sel);
}
function setView(v){
  view = v; const play = v === "play";
  document.querySelectorAll(".toptabs .tab").forEach(b => b.classList.toggle("on", b.dataset.view === v));
  $("#props").hidden = v !== "el"; $("#recView").hidden = v !== "rec"; $("#appView").hidden = v !== "app"; $("#playView").hidden = !play; $("#logView").hidden = v !== "log";
  // Playground mode swaps the middle card: UI tree -> automation flow; right card -> function list
  $("#treePane").hidden = play; $("#flowPane").hidden = !play;
  $("#btnPlay").classList.toggle("on", play); $("#btnPlay").setAttribute("aria-pressed", play);
  if (v === "rec") renderRec();
  if (v === "log") logPoll(); else clearTimeout(logT);  // polls only while the tab is shown
  if (v === "app") { renderApp(); if (appMode === "current") loadApp(); else if (!appList) loadAppList() }
  if (play) { pgRenderFlow(); pgRenderPalette(); const b=$("#pgDataBtn"); if(b) b.querySelector(".cnt").textContent = pgData.rows.length || ""; }
}

// ---------- app & intent of the foreground screen ----------
let appInfo = null, appErr = "", appBusy = false;
let appMode = store.get("appMode") || "current", appList = null, appKind = store.get("appKind") || "user", appListErr = "", appListBusy = false, appQuery = "", appDetail = null, appDetailErr = "", appDetailBusy = false, appActFilter = "", appLog = "", uninstallArm = null;
let appActs = null, appActBusy = false, appActErr = "", _appActT = null;  // cross-app activity search (Shortcut-Maker style)
let _actSeq = 0, _actAC = null;  // only the newest search may write results / clear the spinner; older ones are aborted
let appDetailTok = 0;            // bumps on open/back/device switch: a late /api/app answer for a view we left is dropped
let appBackup = null;            // {pkg, path, files, split}: last APK backup, shown inline (with copy) instead of a fading toast
const noIcon = new Set(), appVc = {};  // packages whose icon 404'd (never re-request) + versionCode per package (cacheable icon URL)
// Intent activity flags (android.content.Intent FLAG_ACTIVITY_*); unknown low bits are shown as hex.
const FLAGS = [[0x40000000,"NO_HISTORY"],[0x20000000,"SINGLE_TOP"],[0x10000000,"NEW_TASK"],[0x08000000,"MULTIPLE_TASK"],
  [0x04000000,"CLEAR_TOP"],[0x02000000,"FORWARD_RESULT"],[0x01000000,"PREVIOUS_IS_TOP"],[0x00800000,"EXCLUDE_FROM_RECENTS"],
  [0x00400000,"BROUGHT_TO_FRONT"],[0x00200000,"RESET_TASK_IF_NEEDED"],[0x00100000,"LAUNCHED_FROM_HISTORY"],
  [0x00080000,"NEW_DOCUMENT"],[0x00040000,"NO_USER_ACTION"],[0x00020000,"REORDER_TO_FRONT"],[0x00010000,"NO_ANIMATION"],
  [0x00008000,"CLEAR_TASK"],[0x00004000,"TASK_ON_HOME"],[0x00002000,"RETAIN_IN_RECENTS"],[0x00001000,"LAUNCH_ADJACENT"]];
function flagNames(hex){
  let v = parseInt(hex, 16) >>> 0; const out = [];
  for (const [b, n] of FLAGS) if (v & b) { out.push(n); v = (v & ~b) >>> 0 }
  if (v) out.push("0x" + v.toString(16));
  return out;
}
// Same shape as Shortcut Maker's export; data/type only when present.
function intentJson(it){
  const o = {action: it.action, component: it.component, categories: it.categories, flags: it.flags};
  if (it.data) o.data = it.data; if (it.type) o.type = it.type;
  o.intent_uri = it.intent_uri;
  return JSON.stringify(o, null, 2);
}
function renderApp(){
  const box = $("#appView");
  box.innerHTML = `<div class="head"><h2>${t("appT")}</h2><span class="sp"></span>
    <div class="seg sm" id="appModeSeg"><button data-am="current"${appMode === "current" ? ' class="on"' : ""}>${t("amCur")}</button><button data-am="browse"${appMode === "browse" ? ' class="on"' : ""}>${t("amBrowse")}</button></div></div>
    <div class="scroll" id="appBody"></div>`;
  box.querySelectorAll("#appModeSeg button").forEach(b => b.onclick = () => {
    appMode = b.dataset.am; store.set("appMode", appMode); renderApp();
    if (appMode === "current" && !appInfo) loadApp();
    if (appMode === "browse" && !appList) loadAppList();
  });
  if (appMode === "current") renderCurrent();
  else if (appDetail || appDetailBusy) renderDetail();
  else renderList();
}

// ----- mode A: the foreground screen's intent -----
async function loadApp(){
  const dev = serial();
  if (!dev || appBusy) return;
  appBusy = true; if (view === "app" && appMode === "current") renderCurrent();
  try { const it = await api("/api/intent", {serial: dev}); if (dev === serial()) { appInfo = it; appErr = "" } }
  catch (e) { if (dev === serial()) { appInfo = null; appErr = e.message } }
  finally { appBusy = false; if (view === "app" && appMode === "current") renderCurrent(); }
}
function renderCurrent(){
  const it = appInfo, box = $("#appBody"); if (!box) return;
  const row = (k, v, extra = "") => `<dt>${k}</dt><dd data-copy="${esc(v || "")}">${esc(v || "—")}${extra}</dd>`;
  box.innerHTML = (appBusy && !it ? `<div class="empty"><i class="spin"></i>${t("appLoading")}</div>` : !it
    ? `<div class="empty">${ic("apps")}<b>${t(appErr ? "err" : "appEmptyT")}</b>${esc(appErr || (serial() ? "" : t("noDev")))}
         <div style="margin-top:10px"><button class="btn sm" id="appRetry">${t("appRefresh")}</button></div></div>`
    : `<div class="appBar"><button class="btn ghost sm icon${appBusy ? " busy" : ""}" id="appRef" title="${t("appRefresh")}">${ic(appBusy ? "loader" : "refresh")}</button></div>
      <div class="appHero">${heroIcon(it.app.packageName)}<div><div class="ttl">${esc(it.app.packageName)}</div>
        <div class="sub">${it.app.versionName ? "v" + esc(it.app.versionName) + " · build " + esc(String(it.app.versionCode)) : ""}</div></div></div>
      ${it.has_extras ? `<div class="appWarn">${t("appExtras")}</div>` : ""}
      <dl class="kv">
        ${row(t("appAct"), it.component ? it.component.className : it.activity)}
        ${row("Action", it.action)}${row("Category", it.categories.join(", "))}
        ${row("Flags", it.flags, it.flags ? `<span class="flagl">${flagNames(it.flags).map(f => `<span>${f}</span>`).join("")}</span>` : "")}
        ${it.data ? row("Data", it.data) : ""}${it.type ? row("Type", it.type) : ""}
        ${row(t("appLaunch"), it.app.launcherActivity)}
      </dl>
      <h4>Intent JSON</h4><pre class="ij">${esc(intentJson(it))}</pre>
      <div class="appActs">
        <button class="btn sm pri" data-cp="json">${ic("copy")}${t("copyJson")}</button>
        <button class="btn sm" data-cp="uri">${ic("copy")}Intent URI</button>
        <button class="btn sm" data-cp="am">${ic("copy")}am start</button>
        <button class="btn sm" data-cp="u2">${ic("copy")}uiautomator2</button>
      </div>`);
  $("#appRef") && ($("#appRef").onclick = loadApp);
  $("#appRetry") && ($("#appRetry").onclick = loadApp);
  box.querySelectorAll("dd[data-copy]").forEach(d => d.onclick = () => d.dataset.copy && copy(d.dataset.copy));
  box.querySelectorAll("[data-cp]").forEach(b => b.onclick = () => copy({json: intentJson(it), uri: it.intent_uri, am: it.am_start, u2: it.u2}[b.dataset.cp]));
}

// ----- mode B: browse every installed app and its activities -----
const AV = ["#4f46e5","#0d9488","#d97706","#db2777","#2563eb","#7c3aed","#dc2626","#059669"];
const initial = (label, pkg) => ((label || pkg || "?").replace(/^[^A-Za-z0-9]+/, "")[0] || "?").toUpperCase();
const tileBg = pkg => { let h = 0; for (const c of pkg || "") h = (h * 31 + c.charCodeAt(0)) >>> 0; return AV[h % AV.length]; };
// Apps whose icon can't be rasterized get a generic app-logo tile (not a letter), so the list stays uniform.
// Hero logo: try the real launcher icon, fall back to the template tile.
// &vc= lets the server skip its dumpsys and lets the browser cache the icon (known from the app list)
const iconUrl = pkg => `/api/appicon?serial=${encodeURIComponent(serial())}&pkg=${encodeURIComponent(pkg)}${appVc[pkg] ? "&vc=" + appVc[pkg] : ""}`;
const noteVc = apps => (apps || []).forEach(a => { if (a.versionCode) appVc[a.package] = a.versionCode });
const heroIcon = (pkg, label, known = true) => `<div class="appIc">` + (known && !noIcon.has(pkg)
  ? `<img src="${iconUrl(pkg)}" alt="" loading="lazy" data-pkg="${esc(pkg)}" onerror="iconFail(this,this.dataset.pkg,1)">`
  : `<span class="avtxt" style="background:${tileBg(pkg)}">${ic("applogo")}</span>`) + `</div>`;
// Template tile (global so <img onerror> can fall back to it). Colour is stable per package.
function av(pkg){ return `<span class="appAv" style="background:${tileBg(pkg)}">${ic("applogo")}</span>`; }
// <img onerror> fallback (global). pkg comes from data-pkg (never spliced into the handler: imported flows can carry any string). Keeps the img's size classes.
function iconFail(img, pkg, hero){
  noIcon.add(pkg);  // the browser doesn't cache failed loads: without this every re-render (each keystroke) re-requests it
  const cls = hero ? "avtxt" : (img.className.replace("imgav", "").trim() || "appAv");
  img.outerHTML = `<span class="${cls}" style="background:${tileBg(pkg)}">${ic("applogo")}</span>`;
}
// List row icon: real launcher icon, lazily (only visible rows pull it), falling back to the tile.
const listIcon = pkg => noIcon.has(pkg) ? av(pkg) : `<img class="appAv imgav" alt="" loading="lazy" src="${iconUrl(pkg)}" data-pkg="${esc(pkg)}" onerror="iconFail(this,this.dataset.pkg)">`;

async function loadAppList(){
  const dev = serial(); if (!dev) return;
  appListBusy = true; appListErr = ""; if (view === "app" && appMode === "browse" && !appDetail) renderList();
  let fallback = false;
  try {
    const r = await api("/api/apps", {serial: dev, kind: appKind}); if (dev !== serial()) return;
    appList = r.apps; noteVc(appList);
    fallback = !appList.length && appKind === "user" && !store.get("appKind");  // emulators often have no user apps
  }
  catch (e) { appListErr = e.message; appList = [] }
  finally { appListBusy = false; if (view === "app" && appMode === "browse" && !appDetail) renderList(); }
  if (fallback) { appKind = "all"; appList = null; loadAppList() }  // first visit, nothing picked yet: show everything, not an empty list
}
// Real app name (Settings, Play Store…) once fetched; shares pgLabels with the Playground picker. "" = not known (yet).
const appLbl = p => pgLabels[p] && pgLabels[p] !== p ? pgLabels[p] : "";
const appRowText = a => `<b>${esc(appLbl(a.package) || a.package)}</b><small>${appLbl(a.package) ? esc(a.package) + " · " : ""}vc ${a.versionCode}${a.system ? " · system" : ""}${a.enabled ? "" : " · " + t("disabled")}</small>`;
function relist(){  // re-render the list, keeping focus + caret in the search box
  const si = $("#appSearch"), f = si && document.activeElement === si, c = si?.selectionStart;
  renderList(); const n = $("#appSearch"); if (f && n) { n.focus(); n.setSelectionRange(c, c) }
}
function renderList(){
  const box = $("#appBody"); if (!box) return;
  const q = appQuery.trim().toLowerCase();
  const rows = (appList || []).filter(a => !q || a.package.toLowerCase().includes(q) || appLbl(a.package).toLowerCase().includes(q));
  const searching = appQuery.trim().length >= 2;
  box.innerHTML = `
    <div class="appTools">
      <div class="seg sm" id="appKindSeg">${["user","system","all"].map(k => `<button data-k="${k}"${k === appKind ? ' class="on"' : ""}>${t("ak_" + k)}</button>`).join("")}</div>
      <input class="inp sm" id="appSearch" placeholder="${t("appSearchPh2")}" value="${esc(appQuery)}">
    </div>
    <div id="appActBox"></div>
    ${searching ? `<div class="appHint pkgh">${t("appPkgMatch", {n: rows.length})}</div>` : ""}
    ${appListBusy ? `<div class="empty"><i class="spin"></i>${t("appListLoad")}</div>`
      : appListErr ? `<div class="empty">${ic("apps")}<b>${t("err")}</b>${esc(appListErr)}</div>`
      : !rows.length ? (searching ? "" : appList && appKind === "user"
          ? `<div class="empty">${ic("apps")}<b>${t("appNoUser")}</b><div style="margin-top:10px"><button class="btn sm" id="appShowAll">${t("appShowAll")}</button></div></div>`
          : `<div class="empty">${ic("apps")}<b>${t("appNone")}</b></div>`)
      : `${searching ? "" : `<div class="appHint">${t("appCount", {n: rows.length})}</div>`}<div class="appList">` + rows.map(a => `
        <button class="appItem" data-pkg="${esc(a.package)}">
          ${listIcon(a.package)}
          <span class="ai">${appRowText(a)}</span>
          ${a.launchable ? `<span class="star" title="launcher">${ic("target")}</span>` : ""}
        </button>`).join("") + `</div>`}`;
  const setKind = k => { appKind = k; store.set("appKind", appKind); appList = null; loadAppList() };  // activity search is kind-independent: no re-search
  box.querySelectorAll("#appKindSeg button").forEach(b => b.onclick = () => setKind(b.dataset.k));
  $("#appShowAll") && ($("#appShowAll").onclick = () => setKind("all"));
  const si = $("#appSearch");
  if (si) si.oninput = () => { appQuery = si.value; relist(); clearTimeout(_appActT); _appActT = setTimeout(loadActs, 350); };
  box.querySelectorAll(".appItem").forEach(b => b.onclick = () => openAppDetail(b.dataset.pkg));
  renderActs();
  if (appList?.length && !appListBusy) appListLabels();
}
// App names, fetched lazily in chunks of 12 (visible + launchable rows first) so a cold cache never blocks the list.
// Without a query the rows are patched in place; with one the list is re-filtered (a label may now match).
let lblBusy = false;
async function appListLabels(){
  if (lblBusy) return; lblBusy = true;
  const dev = serial(); let refilter = false;
  try {
    while (view === "app" && appMode === "browse" && !appDetail && !appDetailBusy && appList && dev === serial()) {
      const vis = new Set([...document.querySelectorAll("#appBody .appItem")].map(b => b.dataset.pkg));
      const need = appList.filter(a => !(a.package in pgLabels))
        .sort((a, b) => (vis.has(b.package) - vis.has(a.package)) || (b.launchable - a.launchable)).slice(0, 12).map(a => a.package);
      if (!need.length) break;
      if (!await pgFetchLabels(need)) break;  // success fills every key (miss -> pkg itself), so this loop always ends
      if (dev !== serial() || view !== "app" || appMode !== "browse" || appDetail || appDetailBusy || !appList) break;
      if (appQuery.trim()) { refilter = true; break }  // a label may match now: re-filter (renderList() starts the next round)
      const items = [...document.querySelectorAll("#appBody .appItem")];
      need.forEach(p => { const a = appList.find(x => x.package === p), b = items.find(x => x.dataset.pkg === p); if (a && b) b.querySelector(".ai").innerHTML = appRowText(a) });
    }
  } finally { lblBusy = false }
  if (refilter) relist();
}

async function loadActs(){
  const q = appQuery.trim(), my = ++_actSeq;
  _actAC?.abort(); _actAC = null;  // the previous keystroke's scan is stale
  if (q.length < 2) { appActs = null; appActErr = ""; appActBusy = false; return renderActs(); }
  const dev = serial(), ac = _actAC = new AbortController(); appActBusy = true; renderActs();
  try {
    const r = await api("/api/searchact", {serial: dev, q, kind: "all"}, ac.signal);  // activities always searched across all apps (Shortcut-Maker style), independent of the User/System/All package filter
    if (my === _actSeq && !r.superseded) { appActs = r.groups; appActErr = "" }
  }
  catch (e) { if (my === _actSeq && e.name !== "AbortError") { appActs = []; appActErr = e.message } }
  finally { if (my === _actSeq) { appActBusy = false; _actAC = null; renderActs() } }
}
function renderActs(){
  const box = $("#appActBox"); if (!box) return;
  if (appQuery.trim().length < 2) { box.innerHTML = ""; return; }
  if (appActErr) { box.innerHTML = `<div class="appHint">${esc(appActErr)}</div>`; return; }
  if (!appActs) { box.innerHTML = `<div class="actLoad"><i class="spin"></i>${t("appActSearching")}</div>`; return; }
  if (!appActs.length) { box.innerHTML = `<div class="appHint">${t("appActNone")}${appActBusy ? ' <i class="spin"></i>' : ""}</div>`; return; }
  const total = appActs.reduce((n, g) => n + g.activities.length, 0);
  box.innerHTML = `<div class="appHint">${t("appActCount", {n: total, a: appActs.length})}${appActBusy ? ' <i class="spin"></i>' : ""}</div>` +
    appActs.map(g => `<div class="actGroup">
      <div class="actGHd">${listIcon(g.package)}<span class="ai"><b>${esc(g.label)}</b><small>${esc(g.package)}</small></span>${g.launcher ? `<span class="star" title="launcher">${ic("target")}</span>` : ""}</div>
      ${g.activities.map(a => `<div class="actRow${a.exported ? "" : " ro"}">
        <span class="ai"><b>${esc(a.label || a.name.split(".").pop())}</b><small>${esc(a.name)}</small></span>
        <button class="btn sm icon" data-op="${esc(g.package)}|${esc(a.name)}" title="${t("appOpen")}">${ic("target")}</button>
        <button class="btn sm icon" data-scp="${esc(g.package)}|${esc(a.name)}" title="${t("scMake")}">${ic("link")}</button>
      </div>`).join("")}</div>`).join("");
  box.querySelectorAll("[data-op]").forEach(b => b.onclick = () => { const [p, a] = b.dataset.op.split("|"); openActivity(p, a) });
  box.querySelectorAll("[data-scp]").forEach(b => b.onclick = () => { const [p, a] = b.dataset.scp.split("|"); shortcut(p, a, a.split(".").pop()) });
}

async function openAppDetail(pkg){
  const tok = ++appDetailTok, dev = serial();
  appDetail = null; appDetailErr = ""; appDetailBusy = true; appActFilter = ""; appLog = ""; renderApp();
  try { const d = await api("/api/app", {serial: dev, pkg}); if (tok === appDetailTok) appDetail = d }
  catch (e) { if (tok === appDetailTok) appDetailErr = e.message }
  finally { if (tok === appDetailTok) { appDetailBusy = false; if (view === "app") renderApp() } }  // a stale answer (user left) changes nothing
}
function backToList(){ appDetailTok++; appDetailBusy = false; appDetail = null; appDetailErr = ""; appLog = ""; uninstallArm = null; renderApp() }

async function openActivity(pkg, act){
  try { await api("/api/start", {serial: serial(), pkg, activity: act}); toast(t("opened") + ": " + act.split(".").pop()); if (!streaming) setTimeout(() => dump(), 700) }
  catch (e) { toast(t("err") + ": " + e.message) }
}
// A deep link is a VIEW intent with data, aimed at the activity that declares it (else the server scopes it to the package)
async function openDeepLink(uri, act){
  const p = {serial: serial(), pkg: appDetail.package, action: "android.intent.action.VIEW", data: uri}; if (act) p.activity = act;
  try { await api("/api/start", p); toast(t("opened") + ": " + uri); if (!streaming) setTimeout(() => dump(), 700) }
  catch (e) { toast(t("err") + ": " + e.message) }
}
async function shortcut(pkg, act, name){
  try { const r = await api("/api/shortcut", {serial: serial(), pkg, activity: act, name}); toast(t("scOk") + ": " + r.path) }
  catch (e) { toast(t("err") + ": " + e.message) }
}
let uninstallAt = 0, _uat = 0;
async function manage(pkg, action, btn, ev){
  if (action === "uninstall") {
    if (uninstallArm !== pkg) {
      uninstallArm = pkg; uninstallAt = Date.now(); renderDetail(); clearTimeout(_uat);
      _uat = setTimeout(() => {  // disarm only if still armed for this app and still looking at it (never draws over another view)
        if (uninstallArm !== pkg) return; uninstallArm = null;
        if (view === "app" && appMode === "browse" && appDetail?.package === pkg) renderDetail();
      }, 4000);
      return;
    }
    // the 2nd click of a double-click (or any click right after arming) is not a deliberate confirmation
    if (ev?.detail > 1 || Date.now() - uninstallAt < 600) return;
    clearTimeout(_uat);
  }
  uninstallArm = null;
  const run = async () => {
    const r = await api("/api/manage", {serial: serial(), pkg, action});  // failures (system app, not installed…) throw -> toast, view stays
    if (action === "logcat") { appLog = r.log || t("appNoLog"); renderDetail() }
    else if (action === "backup") { appBackup = {pkg, path: r.path || "", files: Array.isArray(r.files) ? r.files.length : 1, split: !!r.split}; toast(r.msg || "ok"); renderDetail() }
    else { toast(r.msg || "ok"); if (action === "uninstall") { appList = null; backToList(); loadAppList() } else openAppDetail(pkg) }
  };
  if (btn) return withSpin(btn, run);  // busy state: no parallel pulls of a big APK
  try { await run() } catch (e) { toast(t("err") + ": " + e.message) }
}
function renderDetail(){
  const box = $("#appBody"); if (!box) return;
  if (appDetailBusy) { box.innerHTML = `<div class="appBar"><button class="btn ghost sm" id="appBack">${ic("back")}${t("appBack")}</button></div><div class="empty"><i class="spin"></i>${t("appParse")}</div>`; $("#appBack").onclick = backToList; return }
  const d = appDetail;
  if (!d) { box.innerHTML = `<div class="appBar"><button class="btn ghost sm" id="appBack">${ic("back")}${t("appBack")}</button></div><div class="empty">${ic("apps")}<b>${t("err")}</b>${esc(appDetailErr)}</div>`; $("#appBack").onclick = backToList; return }
  const q = appActFilter.toLowerCase();
  const acts = d.activities.filter(a => !q || a.name.toLowerCase().includes(q));
  const badge = a => (a.launcher ? `<span class="abdg lc">launcher</span>` : "") + (a.exported ? `<span class="abdg ex">exported</span>` : `<span class="abdg rt">root</span>`) + (a.enabled ? "" : `<span class="abdg df">disabled</span>`);
  const armed = uninstallArm === d.package, bk = appBackup?.pkg === d.package ? appBackup : null;
  box.innerHTML = `
    <div class="appBar"><button class="btn ghost sm" id="appBack">${ic("back")}${t("appBack")}</button></div>
    <div class="appHero">
      ${heroIcon(d.package, d.label, d.hasIcon)}
      <div><div class="ttl">${esc(d.label)}</div><div class="sub" data-copy="${esc(d.package)}" tabindex="0" role="button">${esc(d.package)} · v${esc(d.versionName || "?")}</div></div>
    </div>
    <div class="appStat"><span><b>${d.activityCount}</b> ${t("appStatAct")}</span><span><b>${d.exportedCount}</b> ${t("appStatExp")}</span><span><b>${d.permissions.length}</b> ${t("appStatPerm")}</span></div>
    <div class="appActs">
      <button class="btn sm pri" data-mg="open">${ic("target")}${t("appOpen")}</button>
      <button class="btn sm" data-mg="backup">${ic("download")}${t("appBackupBtn")}</button>
      <button class="btn sm" data-mg="logcat">Logcat</button>
      <button class="btn sm" data-mg="${d.enabled ? "disable" : "enable"}">${d.enabled ? t("appDisable") : t("appEnable")}</button>
      <button class="btn sm danger${armed ? " arm" : ""}" data-mg="uninstall">${ic("trash")}${armed ? esc(t("appUnSure", {name: d.label || d.package})) : t("appUninstall")}</button>
    </div>
    ${bk ? `<div class="appNote" role="status">${ic("check")}<div><b>${t("appBackupT", {n: bk.files})}</b>${bk.split ? `<small>${t("appSplit")}</small>` : ""}
      <code data-copy="${esc(bk.path)}" tabindex="0" role="button" title="${t("copyPath")}">${esc(bk.path)}</code></div>
      <button class="btn sm icon" id="bkCopy" title="${t("copyPath")}">${ic("copy")}</button></div>` : ""}
    ${appLog ? `<pre class="ij">${esc(appLog.slice(-4000))}</pre>` : ""}
    ${d.deepLinks.length ? `<h4>${t("appLinks")}</h4><div class="links">${d.deepLinks.map(l => `<button class="lnk" data-uri="${esc(l.uri)}" data-act="${esc(l.activity || "")}" title="${esc(l.activity)}">${ic("link")}<code>${esc(l.uri)}</code></button>`).join("")}</div>` : ""}
    <h4>${t("appActsH")} <small>${acts.length}/${d.activityCount}</small></h4>
    <input class="inp sm" id="actSearch" placeholder="${t("appActPh")}" value="${esc(appActFilter)}">
    <div class="actList">${acts.map(a => `
      <div class="actRow">
        <div class="an"><span>${esc(a.name.startsWith(d.package) ? a.name.slice(d.package.length).replace(/^\./, "") : a.name)}</span>${badge(a)}</div>
        <div class="ab">
          <button class="btn sm icon" data-open="${esc(a.name)}" title="${t("appOpen")}">${ic("target")}</button>
          <button class="btn sm icon" data-sc="${esc(a.name)}" title="${t("scMake")}">${ic("link")}</button>
          <button class="btn sm icon" data-cpn="${esc(d.package + "/" + a.name)}" title="${t("copyS")}">${ic("copy")}</button>
        </div>
      </div>`).join("")}</div>
    <details class="perms"><summary>${t("appPerms")} (${d.permissions.length})</summary><div class="perml">${d.permissions.map(x => `<code>${esc(x.split(".").pop())}</code>`).join("")}</div></details>`;
  $("#appBack").onclick = backToList;
  box.querySelectorAll("[data-copy]").forEach(e => e.onclick = () => copy(e.dataset.copy));
  $("#bkCopy") && ($("#bkCopy").onclick = () => copy(bk.path));
  box.querySelectorAll("[data-mg]").forEach(b => b.onclick = ev => b.dataset.mg === "open" ? openActivity(d.package, d.activities.find(x => x.launcher)?.name || d.activities[0].name) : manage(d.package, b.dataset.mg, b, ev));
  const as = $("#actSearch"); as.oninput = () => { appActFilter = as.value; const c = as.selectionStart; renderDetail(); const n = $("#actSearch"); n.focus(); n.setSelectionRange(c, c) };
  box.querySelectorAll("[data-open]").forEach(b => b.onclick = () => openActivity(d.package, b.dataset.open));
  box.querySelectorAll("[data-sc]").forEach(b => b.onclick = () => shortcut(d.package, b.dataset.sc, d.label + " · " + b.dataset.sc.split(".").pop()));
  box.querySelectorAll("[data-cpn]").forEach(b => b.onclick = () => copy(b.dataset.cpn));
  box.querySelectorAll(".lnk").forEach(b => b.onclick = () => openDeepLink(b.dataset.uri, b.dataset.act));
}
$("#btnRec").onclick = () => setRecording(!recording);
document.querySelectorAll(".toptabs .tab").forEach(b => b.onclick = () => setView(b.dataset.view));
$("#recCnt").textContent = rec.length;
$("#btnTxt").onclick = e => sendText(e.shiftKey);  // Shift+click also presses Enter, like Shift+Enter in the field
$("#txt").onkeydown = e => e.key === "Enter" && sendText(e.shiftKey);
document.querySelectorAll("#langSeg button").forEach(b => b.onclick = () => { lang = b.dataset.lang; store.set("lang", lang); applyLang() });
$("#btnTheme").onclick = () => { theme = theme === "dark" ? "light" : "dark"; store.set("theme", theme); applyTheme() };
$("#btnHelp").onclick = () => $("#dlgHelp").showModal();

// ---------- emulator manager ----------
let emuDelPending = null, emuDelAt = 0, emuDelT = 0;  // "brand/index" armed for delete; a 2nd click < 600ms after arming (double-click) is ignored
let emuState = [], emuSupported = [];  // last loaded brands list (for config caps lookup) + every brand label we know
const emuBoot = new Map();  // "brand/index" -> {name, adb, t0, until}: launched/restarted here, polled until it shows up in adb
const emuBrandIcon = {mumu:"phone", ld9:"phone", ld14:"phone", ld4:"phone", memu:"phone", nox:"phone", bs:"phone"};
// Last result/error stays visible in the dialog (the toast is gone after a few seconds)
function emuMsg(m, bad){ const e = $("#emuMsg"); e.hidden = !m; e.textContent = m ? t("emuLastMsg", {msg: m}) : ""; e.classList.toggle("bad", !!bad) }
function emuRender(brands){
  emuState = brands;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  const html = brands.map(b => {
    const canCreate = b.caps.includes("create");
    const rows = (b.instances || []).map(i => {
      const key = b.brand + "/" + i.index, boot = emuBoot.has(key), armed = emuDelPending === key;
      const d = `data-emu-brand="${b.brand}" data-emu-index="${esc(i.index)}" data-emu-name="${esc(i.name)}"`;
      const btn = (act, icn, cls="", lbl=true) => { const L = t("emu"+act[0].toUpperCase()+act.slice(1));
        return `<button class="btn sm ${cls}" data-emu-act="${act}" ${d} title="${L}"${boot && act !== "stop" ? " disabled" : ""}><svg class="ic" data-ic="${icn}"></svg>${lbl?L:""}</button>`; };
      const live = boot ? `<i class="spin"></i>${t("emuBooting")}` : i.running ? `<span class="emudot on"></span>${t("emuRunning")}` : `<span class="emudot"></span>${t("emuStopped")}`;
      let ctl;
      if (i.running || boot){
        ctl = btn("stop","stop") + btn("restart","refresh");
      } else {
        ctl = btn("launch","play","pri");
        if (b.settings.length) ctl += btn("config","sliders","icon",false);
        if (b.can_rename) ctl += btn("rename","pencil","icon",false);
        if (b.can_clone) ctl += btn("clone","copy","icon",false);
        // armed: the button itself says what will be destroyed (the toast can't be relied on)
        if (b.caps.includes("delete")) ctl += armed ? `<button class="btn sm danger arm" data-emu-act="delete" ${d}><svg class="ic" data-ic="trash"></svg>${esc(t("emuDelSure", {name: i.name}))}</button>`
          : btn("delete","trash","danger icon",false);
      }
      return `<div class="emurow"><div class="emumeta"><b>${esc(i.name)}</b><span class="emusub">${live} · ${esc(i.adb || "")}</span></div><div class="emuctl">${ctl}</div></div>`;
    }).join("") || (b.error ? "" : `<div class="emuempty">${t("emuNoInst")}</div>`);
    const verSel = (b.versions && b.versions.length)
      ? `<select class="inp sm" data-emu-cver="${b.brand}" title="${t("emuAndroidVer")}">` +
        b.versions.map(v => `<option value="${esc(v.value)}">${esc(v.label)}</option>`).join("") + `</select>`
      : "";
    const create = canCreate
      ? `<div class="emucreate"><input class="inp sm" data-emu-cname="${b.brand}" placeholder="${t("emuNamePh")}">${verSel}<button class="btn sm" data-emu-act="create" data-emu-brand="${b.brand}"><svg class="ic" data-ic="plus"></svg>${t("emuCreate")}</button></div>`
      : `<div class="emunocreate">${t("emuNoCreate")}</div>`;
    return `<div class="emucard"><div class="emuhd"><svg class="ic" data-ic="${emuBrandIcon[b.brand]||"phone"}"></svg><b>${esc(b.label)}</b></div>` +
      (b.error ? `<div class="emuerr" role="alert"><span>⚠ ${esc(b.error)}</span></div>` : "") + `${rows}${create}</div>`;
  }).join("");
  $("#emuBody").innerHTML = html || `<div class="emuempty"><b>${t("emuNoneFound")}</b>${emuSupported.length ? `<br>${esc(t("emuSupported", {list: emuSupported.join(", ")}))}` : ""}</div>`;
  paintIcons($("#emuBody"));
}
async function emuLoad(){
  $("#emuBody").innerHTML = `<div class="emuload"><i class="spin"></i></div>`;
  try { const r = await api("/api/emu/list"); emuSupported = r.supported || []; emuRender(r.brands); }
  catch(e){ $("#emuBody").innerHTML = `<div class="emuempty">${esc(e.message)}</div>`; }
}
// After Open/Restart: poll the brand CLI, then adb-scan once the instance runs, so it lands in the device picker by itself.
let emuWatchT = 0, emuWatchBusy = false;
function emuWatch(){
  if (emuWatchT) return;
  emuWatchT = setInterval(async () => {
    if (!emuBoot.size) { clearInterval(emuWatchT); emuWatchT = 0; if ($("#dlgEmu").open) emuRender(emuState); return }
    for (const [k, w] of emuBoot) if (Date.now() > w.until) emuBoot.delete(k);  // ponytail: give up after 90s even if list keeps failing; a manual Scan still works
    if (emuWatchBusy || document.hidden) return; emuWatchBusy = true;
    try {
      const r = await api("/api/emu/list"); let scan = false;
      for (const [key, w] of emuBoot) {
        const [brand, index] = key.split("/"), i = r.brands.find(b => b.brand === brand)?.instances?.find(x => String(x.index) === index);
        if (i?.running && Date.now() - w.t0 > 6000) scan = true;  // a restart may still read "running" before it went down
      }
      if (scan) {
        const s = await api("/api/scan"); fillDevices(s.devices); updatePorts(s);
        for (const [key, w] of emuBoot) {
          const d = s.devices.find(x => x.state === "device" && (x.serial === w.adb || x.aliases?.includes(w.adb)));
          if (!d && w.adb) continue;
          emuBoot.delete(key); toast(t("emuReady", {name: w.name}));
          if (d && !online()) { $("#dev").value = d.serial; $("#dev").onchange() }  // nothing selected yet -> take the new one
        }
      }
      if ($("#dlgEmu").open) emuRender(r.brands); else emuState = r.brands;
    } catch {}
    finally { emuWatchBusy = false }
  }, 3000);
}
$("#emuBody").onclick = async e => {
  const el = e.target.closest("[data-emu-act]"); if (!el || el.disabled) return;
  const {emuAct:act, emuBrand:brand, emuIndex:index, emuName:name} = el.dataset;
  if (act === "config"){ emuCfgOpen(brand, index, name); return; }
  let path = "/api/emu/action", params = {brand, act, index};
  const key = brand + "/" + index;
  if (act === "delete"){
    if (emuDelPending !== key){
      emuDelPending = key; emuDelAt = Date.now(); emuRender(emuState); toast(t("emuConfirmDel",{name}), 4000);
      clearTimeout(emuDelT); emuDelT = setTimeout(() => { if (emuDelPending === key) { emuDelPending = null; $("#dlgEmu").open && emuRender(emuState) } }, 4000);
      return;
    }
    if (e.detail > 1 || Date.now() - emuDelAt < 600) return;  // double-click is not a confirmation
    emuDelPending = null; clearTimeout(emuDelT);
  } else if (act === "create"){
    path = "/api/emu/create"; delete params.index;
    const inp = $(`[data-emu-cname="${brand}"]`); if (inp && inp.value.trim()) params.name = inp.value.trim();
    const vs = $(`[data-emu-cver="${brand}"]`); if (vs && vs.value) params.ver = vs.value;
  } else if (act === "rename"){
    const nn = prompt(t("emuRenamePrompt"), name); if (!nn || nn === name) return;
    path = "/api/emu/rename"; params = {brand, index, name: nn};
  } else if (act === "clone"){
    const nn = prompt(t("emuClonePrompt"), name + "-clone"); if (nn === null) return;
    path = "/api/emu/clone"; params = {brand, index}; if (nn.trim()) params.name = nn.trim();
  }
  const adb = emuState.find(b => b.brand === brand)?.instances?.find(i => String(i.index) === index)?.adb;
  el.disabled = true; el.classList.add("busy"); toast(t("emuBusy"));
  try {
    const r = await api(path, params);
    toast(t("emuDone",{msg: r.msg})); emuMsg(r.msg);
    if (act === "launch" || act === "restart") { emuBoot.set(key, {name, adb, t0: Date.now(), until: Date.now() + 90000}); emuWatch() }
    if (act === "stop") { emuBoot.delete(key); emuRender(emuState) }
    r.brands ? emuRender(r.brands) : emuLoad();
  } catch(err){ toast(t("err") + ": " + err.message); emuMsg(err.message, true); el.disabled = false; el.classList.remove("busy"); }
};
$("#emuRefresh").onclick = emuLoad;
$("#btnEmu").onclick = () => { $("#dlgEmu").showModal(); emuMsg(""); emuLoad(); };

// ---------- MCP setup (connect to an AI agent) ----------
const MCP_AGENTS = [
  {id:"claudecode", name:"Claude Code"}, {id:"claudedesktop", name:"Claude Desktop"},
  {id:"cursor", name:"Cursor"}, {id:"windsurf", name:"Windsurf"},
  {id:"vscode", name:"VS Code"}, {id:"codex", name:"Codex CLI"}, {id:"other", name:"Other / JSON"},
];
let mcpInfo = null, mcpSel = "claudecode";
function mcpConf(id){
  const P = mcpInfo.python, S = mcpInfo.script;
  const j = (key, vsc) => JSON.stringify({[key]:{"android-inceptor": vsc ? {type:"stdio",command:P,args:[S]} : {command:P,args:[S]}}}, null, 2);
  switch(id){
    case "claudecode":    return {kind:"cmd",  code:`claude mcp add -s user android-inceptor -- "${P}" "${S}"`, path:null};
    case "claudedesktop": return {kind:"json", code:j("mcpServers"),       path:mcpInfo.claudeDesktopConfig || "%APPDATA%\\Claude\\claude_desktop_config.json"};
    case "cursor":        return {kind:"json", code:j("mcpServers"),       path:"~\\.cursor\\mcp.json  " + t("mcpOrProject")};
    case "windsurf":      return {kind:"json", code:j("mcpServers"),       path:"~\\.codeium\\windsurf\\mcp_config.json"};
    case "vscode":        return {kind:"json", code:j("servers", true),    path:".vscode\\mcp.json  " + t("mcpInProject")};
    case "codex":         return {kind:"toml", code:`[mcp_servers.android-inceptor]\ncommand = ${JSON.stringify(P)}\nargs = [${JSON.stringify(S)}]`, path:"~\\.codex\\config.toml"};
    default:              return {kind:"json", code:j("mcpServers"),       path:null};
  }
}
function mcpAgentsBar(){
  $("#mcpAgents").innerHTML = MCP_AGENTS.map(a => `<button class="mcpa${a.id===mcpSel?" on":""}" data-a="${a.id}">${esc(a.name)}</button>`).join("");
  $("#mcpAgents").querySelectorAll("[data-a]").forEach(b => b.onclick = () => { mcpSel = b.dataset.a; mcpAgentsBar(); mcpRender(); });
}
function mcpRender(){
  const a = MCP_AGENTS.find(x => x.id === mcpSel), c = mcpConf(mcpSel);
  const step1 = {cmd:t("mcpStepCmd"), json:t("mcpStepJson"), toml:t("mcpStepToml")}[c.kind];
  const prompt = c.kind === "cmd" ? t("mcpAskCmd",{cmd:c.code})
                                  : t("mcpAskFile",{agent:a.name, path:(c.path||a.name), code:c.code});
  let h = `<div class="mcpstep"><span class="mcpn">1</span><div class="mcpsb"><b>${esc(step1)}</b>`;
  if (c.path) h += `<div class="mcppath" data-cp="${esc(c.path)}" tabindex="0" role="button"><code>${esc(c.path)}</code><span class="mut">${t("mcpClickCopy")}</span></div>`;
  h += `<pre class="mcpcode" data-cp="${esc(c.code)}" tabindex="0" role="button" title="${t("mcpClickCopy")}">${esc(c.code)}</pre></div></div>`;
  h += `<div class="mcpstep"><span class="mcpn">2</span><div class="mcpsb"><b>${t("mcpStep2")}</b><p class="mut">${t("mcpStep2d",{agent:esc(a.name)})}</p></div></div>`;
  h += `<div class="mcpactions"><button class="btn pri sm" id="mcpCopyMain"><svg class="ic" data-ic="copy"></svg>${c.kind==="cmd"?t("mcpCopyCmd"):t("mcpCopyConf")}</button>`;
  h += `<button class="btn sm" id="mcpAsk"><svg class="ic" data-ic="bot"></svg>${t("mcpAsk")}</button></div>`;
  h += `<p class="mcpnote mut">${t("mcpNote")}</p>`;
  $("#mcpBody").innerHTML = h; paintIcons($("#mcpBody"));
  $("#mcpBody").querySelectorAll("[data-cp]").forEach(e => e.onclick = () => copy(e.dataset.cp));
  $("#mcpCopyMain").onclick = () => copy(c.code);
  $("#mcpAsk").onclick = () => copy(prompt);
}
// Shared by the dialog and the landing card. A failure leaves mcpInfo null (the next open retries) instead of caching
// relative "python mcp_server.py" defaults that would produce a config pointing nowhere.
let mcpP = null;
function mcpLoad(){
  if (mcpInfo) return Promise.resolve(true);
  return mcpP ||= api("/api/mcpinfo").then(r => { mcpInfo = r; return true }).catch(e => { mcpP = null; throw e });
}
async function mcpOpen(){
  $("#dlgMcp").showModal();
  if (!mcpInfo){
    $("#mcpAgents").innerHTML = ""; $("#mcpBody").innerHTML = `<div class="emuload"><i class="spin"></i></div>`;
    try { await mcpLoad(); }
    catch(e){
      toast(t("mcpErr", {e: e.message}));
      $("#mcpBody").innerHTML = `<div class="emuempty">${esc(t("mcpErr", {e: e.message}))}<div style="margin-top:10px"><button class="btn sm" id="mcpRetry">${t("retry")}</button></div></div>`;
      $("#mcpRetry").onclick = mcpOpen; return;
    }
  }
  mcpAgentsBar(); mcpRender();
}
$("#btnMcp").onclick = mcpOpen;

// ---------- device settings template ----------
const EMU_FIELDS = ["cpu","memory","width","height","dpi","manufacturer","model","imei","androidid","mac","phonenumber"];
const NUM_F = ["cpu","memory","width","height","dpi"];  // numeric > 0 (the server answers a readable 400 otherwise)
const emuTpls = () => { try { return JSON.parse(store.get("emuTpls")) || {}; } catch { return {}; } };
const emuTplsSave = o => store.set("emuTpls", JSON.stringify(o));
let cfgTarget = null;  // {brand, index, caps:[]}
function emuCfgFillTpls(sel=""){
  const tpls = emuTpls(), names = Object.keys(tpls);
  $("#cfgTplSel").innerHTML = `<option value="">${t("emuTplNew")}</option>` +
    names.map(n => `<option${n===sel?" selected":""}>${n.replace(/</g,"&lt;")}</option>`).join("");
}
function emuCfgOpen(brand, index, name){
  const b = (emuState || []).find(x => x.brand === brand);
  cfgTarget = {brand, index, caps: b ? b.settings : []};
  $("#cfgTitle").textContent = t("emuCfgTitle",{name});
  $("#cfgCaps").textContent = cfgTarget.caps.length ? t("emuCfgCaps",{caps: cfgTarget.caps.join(", ")}) : t("emuCfgNone");
  $("#cfgGrid").innerHTML = EMU_FIELDS.map(f => {
    const on = cfgTarget.caps.includes(f);
    const ph = ["imei","androidid","mac"].includes(f) ? t("fAutoHint") : "";
    return `<label class="cfgf${on?"":" off"}"><span>${t("f"+f[0].toUpperCase()+f.slice(1))}</span>`+
      `<input class="inp sm" data-f="${f}"${NUM_F.includes(f) ? ' type="number" min="1" step="1" inputmode="numeric"' : ""} ${on?"":"disabled"} placeholder="${ph}"></label>`;
  }).join("");
  emuCfgFillTpls();
  $("#dlgEmuCfg").showModal();
}
$("#cfgTplSel").onchange = () => {
  const tpl = emuTpls()[$("#cfgTplSel").value] || {};
  $("#cfgGrid").querySelectorAll("input[data-f]").forEach(inp => inp.value = tpl[inp.dataset.f] ?? "");
};
function cfgValues(){
  const v = {};
  $("#cfgGrid").querySelectorAll("input[data-f]").forEach(inp => { if (inp.value.trim()) v[inp.dataset.f] = inp.value.trim(); });
  return v;
}
$("#cfgTplSave").onclick = () => {
  const cur = $("#cfgTplSel").value;
  const nm = (cur || prompt(t("emuTplNamePrompt"), ""))?.trim(); if (!nm) return;
  const tpls = emuTpls(); tpls[nm] = cfgValues(); emuTplsSave(tpls);
  emuCfgFillTpls(nm); toast(t("emuTplSaved",{name:nm}));
};
$("#cfgTplDel").onclick = () => {
  const cur = $("#cfgTplSel").value; if (!cur) return toast(t("emuPickTpl"));
  const tpls = emuTpls(); delete tpls[cur]; emuTplsSave(tpls);
  emuCfgFillTpls(); $("#cfgTplSel").onchange(); toast(t("emuTplDeleted"));
};
$("#cfgApply").onclick = async () => {
  if (!cfgTarget || !cfgTarget.caps.length) return;
  const params = {brand: cfgTarget.brand, index: cfgTarget.index, ...cfgValues()};
  const bad = [...$("#cfgGrid").querySelectorAll("input[type=number]")].find(i => !i.disabled && i.value && !i.checkValidity());
  if (bad) { bad.reportValidity(); return; }
  $("#cfgApply").disabled = true; $("#cfgApply").classList.add("busy");
  try {
    const r = await api("/api/emu/settings", params);
    r.brands && emuRender(r.brands); $("#dlgEmuCfg").close();
    // one toast: "ok (fields)" = applied (needs a restart); anything else is shown as the CLI said it
    toast(String(r.msg || "").startsWith("ok") ? `${t("emuCfgApplied")} · ${r.msg}` : t("emuDone", {msg: r.msg})); emuMsg(r.msg);
  } catch(err){ toast(t("err") + ": " + err.message); }
  $("#cfgApply").disabled = false; $("#cfgApply").classList.remove("busy");
};

// Text-entry targets + floating menus own their keys; checkboxes/radios don't (clicking "Live" must not kill shortcuts).
const typing = el => el.closest?.("input:not([type=checkbox]):not([type=radio]),textarea,select,[contenteditable],.ctxmenu,.pgaddmenu,.appddpanel");
document.addEventListener("keydown", e => {
  if (e.ctrlKey || e.metaKey || e.altKey || document.querySelector("dialog[open]") || typing(e.target)) return;
  if (kbdPass(e)) return;  // Control mode + pointer/focus on the screen: keys go to the device
  const k = e.key.toLowerCase(), inTree = !$("#treePane").hidden, rowFocus = $("#tree").contains(document.activeElement);
  if (k === "r") dump();
  else if (k === "m") setMode(control ? "inspect" : "control");
  else if (!inTree) return;  // the rest drive the UI tree, which the Playground hides
  else if (k === "/") { e.preventDefault(); $("#q").focus() }
  else if (k === "c" && sel) copy(selectors(sel)[0].xp);
  else if (k === "arrowdown" || k === "arrowup") {
    const rows = flat.filter(n => n.row && n.row.offsetParent);
    if (!rows.length) return;
    e.preventDefault();
    const i = rows.indexOf(sel), j = k === "arrowdown" ? Math.min(rows.length-1, i+1) : Math.max(0, i-1);
    rows[j] && select(rows[j]);
  }
  else if ((k === "arrowleft" || k === "arrowright") && rowFocus && sel?.el) {  // sel.el is null when the tree filter hides it  // tree keyboard: collapse/parent, expand/child
    e.preventDefault();
    const open = sel.children.length && !sel.el.classList.contains("closed");
    if (k === "arrowright") open ? sel.children.find(c => c.row) && select(sel.children.find(c => c.row)) : toggleNode(sel, true);
    else open ? toggleNode(sel, false) : sel.parent?.parent && select(sel.parent);
  }
  else if (k === "escape" && sel) { sel.row?.classList.remove("sel"); sel.row?.removeAttribute("aria-selected"); sel = null; emptyProps(); crumbs(); draw() }
});


// ================= Playground: n8n-style step flow =================
const PG = {  // node meta: icon, colour var, has element selector, has child flow
  tap:{i:"target",c:"--m-ctl",sel:1}, longpress:{i:"hold",c:"--m-ctl",sel:1}, doubletap:{i:"dbltap",c:"--m-ctl",sel:1},
  text:{i:"send",c:"--m-ctl"}, key:{i:"square",c:"--m-ctl"}, swipe:{i:"swipe",c:"--m-ctl"}, scroll:{i:"hand",c:"--m-ctl"},
  launch:{i:"apps",c:"--m-xp"}, screenshot:{i:"camera",c:"--m-ctl"},
  wait:{i:"clock",c:"--m-insp",sel:1}, gone:{i:"clock",c:"--m-insp",sel:1}, sleep:{i:"clock",c:"--m-insp"},
  iff:{i:"branch",c:"--m-rec",sel:1,kids:1}, repeat:{i:"loop",c:"--m-rec",kids:1}, comment:{i:"dots",c:"--faint"},
};
const PG_GROUPS = [["pgAct",["tap","longpress","doubletap","text","key","swipe","scroll","launch","screenshot"]], ["pgWait",["wait","gone","sleep"]], ["pgLogic",["iff","repeat","comment"]]];
const PG_KEYS = {"4":"back","3":"home","187":"recent","66":"enter","67":"delete","61":"tab","19":"up","20":"down","21":"left","22":"right"};
const uid = () => Math.random().toString(36).slice(2, 9);
let pgFmt = store.get("pgFmt") || "py", pgDir = store.get("pgDir") || "v", pgOpen = new Set(), pgRun = {}, pgRunning = false, pgStop = false, pgClearArm = 0, pgLiveT = null;
let pgAbort = null, pgRowNo = 0, pgRowCnt = 0, pgSelId = null;

function pgMake(type){
  const n = {id: uid(), type};
  if (PG[type].sel) n.sel = {by: "rid", val: "", contains: false, x: 0, y: 0};
  if (type === "wait" || type === "gone") n.timeout = 10;
  if (type === "longpress") n.dur = 600;
  if (type === "text" || type === "comment") n.text = "";
  if (type === "key") n.code = "4";
  if (type === "scroll") n.dir = "down";
  if (type === "swipe") { n.x1 = 540; n.y1 = 1200; n.x2 = 540; n.y2 = 400; n.dur = 300 }
  if (type === "launch") { n.pkg = ""; n.activity = "" }
  if (type === "sleep") n.ms = 1000;
  if (type === "repeat") n.count = 3;
  if (PG[type].kids) n.children = [];
  if (type === "iff") { n.else = []; n.timeout = 0; }  // If: optional "wait up to N s" before deciding (0 = look once)
  return n;
}
// Dataset column names must match the {{\w+}} placeholder: clean them once, the same way for rename, CSV and import.
const pgColName = (s, i) => String(s).trim().replace(/\W+/g, "_").replace(/^(\d)/, "_$1") || "var" + (i + 1);
function pgUniqCols(cols){ const seen = new Set(); return cols.map((c, i) => { let n = pgColName(c, i); const b = n; for (let k = 2; seen.has(n); k++) n = b + "_" + k; seen.add(n); return n; }); }
function pgNormData(d){
  if (!d || !Array.isArray(d.cols) || !Array.isArray(d.rows)) return {cols: [], rows: []};
  const cols = pgUniqCols(d.cols);
  return {cols, rows: d.rows.filter(Array.isArray).map(r => cols.map((_, i) => r[i] == null ? "" : String(r[i])))};
}
// Imported flows are untrusted: keep known node types only and coerce each field to the type pgMake gives it
// (numbers stay numbers, so nothing can break out of value="..." attributes; ids must be plain + unique).
function pgNorm(list, seen = new Set()){
  return (Array.isArray(list) ? list : []).filter(n => n && typeof n === "object" && Object.hasOwn(PG, n.type)).map(n => {
    const m = pgMake(n.type), cast = (def, v) => typeof def === "number" ? (Number.isFinite(+v) ? +v : def) : typeof def === "boolean" ? !!v : String(v ?? "");
    for (const k of Object.keys(m)) if (k !== "id" && k !== "type" && k in n) {
      if (k === "sel") { const x = n.sel && typeof n.sel === "object" ? n.sel : {}; for (const sk of Object.keys(m.sel)) if (sk in x) m.sel[sk] = cast(m.sel[sk], x[sk]); }
      else if (k === "children" || k === "else") m[k] = pgNorm(n[k], seen);
      else m[k] = cast(m[k], n[k]);
    }
    if (m.sel && !["rid", "text", "desc", "cls", "xpath", "xy"].includes(m.sel.by)) m.sel.by = "rid";
    if (Number.isFinite(n.x) && Number.isFinite(n.y)) { m.x = Math.round(n.x); m.y = Math.round(n.y); }
    if (n.off) m.off = true;
    if (typeof n.id === "string" && /^[\w-]{1,40}$/.test(n.id) && !seen.has(n.id)) m.id = n.id;
    seen.add(m.id);
    return m;
  });
}
const pgRawCount = l => (Array.isArray(l) ? l : []).reduce((k, n) => k + 1 + (n && typeof n === "object" ? pgRawCount(n.children) + pgRawCount(n.else) : 0), 0);

// ---- flow library: several named flows; `flow` / `pgData` always point at the current one ----
// ponytail: kept in localStorage (per browser + origin); Download/Import JSON is the portable backup.
let pgLib = (() => {
  try { const l = JSON.parse(store.get("pgLib")); if (l && Array.isArray(l.flows) && l.flows.length) return l; } catch {}
  // first start with the library: migrate the old single flow as "Flow 1" (old keys "flow"/"pgdata" are left as a backup)
  let f = [], d = null;
  try { f = JSON.parse(store.get("flow") || "[]") } catch {}
  try { d = JSON.parse(store.get("pgdata")) } catch {}
  return {cur: "f1", flows: [{id: "f1", name: t("pgFlowN", {n: 1}), flow: Array.isArray(f) ? f : [], data: pgNormData(d)}]};
})();
if (!pgLib.flows.some(f => f.id === pgLib.cur)) pgLib.cur = pgLib.flows[0].id;
const pgCurE = () => pgLib.flows.find(f => f.id === pgLib.cur);
let flow = pgCurE().flow, pgData = pgCurE().data;
const pgLibSave = () => { const e = pgCurE(); e.flow = flow; e.data = pgData; if (!store.set("pgLib", JSON.stringify(pgLib))) toast(t("quotaFull")); };
if (!store.get("pgLib")) store.set("pgLib", JSON.stringify(pgLib));  // persist the migration right away
const pgSaveData = () => { pgLibSave(); const b = $("#pgDataBtn"); if (b) b.querySelector(".cnt").textContent = pgData.rows.length || ""; pgCode(); };
const pgSave = () => { pgLibSave(); $("#pgCount").textContent = t("pgCount", {n: pgCountNodes(flow)}); pgLibLabel(); pgCode(); };
function pgCountNodes(list){ let k = 0; for (const n of list) { k++; if (n.children) k += pgCountNodes(n.children); if (n.else) k += pgCountNodes(n.else) } return k; }
function pgLibLabel(){ const b = $("#pgLibName"); if (b) b.textContent = pgCurE().name; }
function pgUniqName(base){ const names = new Set(pgLib.flows.map(f => f.name)); let n = base; for (let k = 2; names.has(n); k++) n = `${base} ${k}`; return n; }
function pgSwitch(id){
  pgLib.cur = id; const e = pgCurE(); flow = e.flow; pgData = e.data;
  pgHist = []; pgRedoS = []; pgSelId = null; pgOpen = new Set(); pgRun = {};  // history is per open flow
  pgSave(); pgSaveData(); pgRenderFlow(); pgFit(); pgUndoBtns();
}
function pgAddFlow(name, f = [], d = {cols: [], rows: []}){ pgLibSave(); const id = uid(); pgLib.flows.push({id, name, flow: f, data: d}); pgSwitch(id); }
function pgLibMenu(anchor){
  const m = document.createElement("div"); m.className = "pgaddmenu pgmenu";
  m.innerHTML = pgLib.flows.map(f => `<button class="pgmi${f.id === pgLib.cur ? " on" : ""}" data-fid="${esc(f.id)}"><span class="pgmck">${f.id === pgLib.cur ? ic("check") : ""}</span><span class="pgmn">${esc(f.name)}</span><small>${pgCountNodes(f.flow)}</small></button>`).join("")
    + `<hr><button class="pgmi" data-la="new">${ic("plus")}${t("pgNew")}</button><button class="pgmi" data-la="ren">${ic("pencil")}${t("pgRename")}</button>`
    + `<button class="pgmi" data-la="dup">${ic("copy")}${t("pgDup")}</button><button class="pgmi bad" data-la="del">${ic("trash")}${t("pgDelFlow")}</button>`;
  if (!pgPopup(m, anchor)) return;
  m.querySelectorAll("[data-fid]").forEach(b => b.onclick = () => { m.remove(); if (pgRunning) return toast(t("pgBusy")); if (b.dataset.fid !== pgLib.cur) { pgLibSave(); pgSwitch(b.dataset.fid); } });
  m.querySelectorAll("[data-la]").forEach(b => b.onclick = () => { m.remove(); pgLibAct(b.dataset.la); });
}
async function pgLibAct(a){
  if (pgRunning) return toast(t("pgBusy"));
  const e = pgCurE();
  if (a === "new") { const r = await pgAsk({title: t("pgNew"), input: pgUniqName(t("pgFlowN", {n: pgLib.flows.length + 1})), ok: t("pgOk")}); if (r) pgAddFlow(pgUniqName(r.text || t("pgFlowN", {n: pgLib.flows.length + 1}))); }
  else if (a === "ren") { const r = await pgAsk({title: t("pgRename"), input: e.name, ok: t("pgOk")}); if (r && r.text && r.text !== e.name) { e.name = pgUniqName(r.text); pgLibSave(); pgLibLabel(); } }
  else if (a === "dup") pgAddFlow(pgUniqName(t("pgCopyOf", {name: e.name})), flow.map(pgCloneNode), JSON.parse(JSON.stringify(pgData)));
  else if (a === "del") {
    const r = await pgAsk({title: t("pgDelFlow"), msg: t("pgDelFlowQ", {name: e.name, n: pgCountNodes(flow)}), ok: t("pgDelete"), danger: true}); if (!r) return;
    pgLib.flows = pgLib.flows.filter(f => f !== e);
    if (!pgLib.flows.length) pgLib.flows.push({id: uid(), name: t("pgFlowN", {n: 1}), flow: [], data: {cols: [], rows: []}});
    pgSwitch(pgLib.flows[0].id); toast(t("pgFlowDeleted"));
  }
}
// Small modal instead of confirm()/prompt() (often blocked in embedded browsers). Its buttons stay disabled for 500ms,
// so the 2nd click of a double-click on a menu item can never confirm a destructive action. -> {v: "ok"|"alt", text} or null
function pgAsk({title, msg = "", input = null, ok, alt = null, danger = false}){
  return new Promise(res => {
    const d = $("#pgAskDlg"); let done = false;
    d.innerHTML = `<h3>${esc(title)}</h3>${msg ? `<p class="mut askmsg">${esc(msg)}</p>` : ""}${input !== null ? `<input class="inp" id="pgAskIn" maxlength="80" value="${esc(input)}">` : ""}
      <div class="askacts"><button class="btn sm ghost" data-v="">${t("pgCancel")}</button>${alt ? `<button class="btn sm" data-v="alt" disabled>${esc(alt)}</button>` : ""}<button class="btn sm ${danger ? "danger" : "pri"}" data-v="ok" disabled>${esc(ok)}</button></div>`;
    const fin = v => { if (done) return; done = true; const text = (d.querySelector("#pgAskIn")?.value || "").trim(); if (d.open) d.close(); res(v ? {v, text} : null); };
    d.querySelectorAll("[data-v]").forEach(b => b.onclick = () => fin(b.dataset.v));
    d.onclose = () => fin("");  // Esc / form close = cancel
    d.showModal();
    const inp = d.querySelector("#pgAskIn");
    if (inp) { inp.focus(); inp.select(); inp.onkeydown = e => { if (e.key === "Enter" && !d.querySelector('[data-v="ok"]').disabled) fin("ok"); }; }
    setTimeout(() => d.querySelectorAll("[data-v]").forEach(b => b.disabled = false), 500);
  });
}
// Shared placement for the small floating menus (add-step, flow library, node options); closes on an outside click, Esc/Tab,
// resize or blur. Clicking the same anchor again toggles it closed: returns false then (callers bail out).
function pgPopup(m, anchor){
  const old = document.querySelector(".pgaddmenu");
  if (old) { old._close ? old._close() : old.remove(); if (old._anchor === anchor) return false; }
  m._anchor = anchor; m.setAttribute("role", "menu");
  document.body.append(m); paintIcons(m);
  const r = anchor.getBoundingClientRect();
  m.style.left = Math.max(8, Math.min(r.left, innerWidth - m.offsetWidth - 10)) + "px"; m.style.top = Math.max(8, Math.min(r.bottom + 4, innerHeight - m.offsetHeight - 10)) + "px";
  const ac = new AbortController(), btns = () => [...m.querySelectorAll("button:not([disabled])")];
  const close = refocus => { ac.abort(); if (!m.isConnected) return; m.remove(); refocus && anchor.isConnected && anchor.focus({preventScroll: true}); };
  m._close = close;
  setTimeout(() => { if (ac.signal.aborted) return;
    document.addEventListener("click", e => { if (!m.contains(e.target)) close(); }, {signal: ac.signal});
    addEventListener("resize", () => close(), {signal: ac.signal}); addEventListener("blur", () => close(), {signal: ac.signal}); }, 0);
  m.onkeydown = e => {
    if (e.key === "Escape" || e.key === "Tab") { e.preventDefault(); e.stopPropagation(); close(true); return; }
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault(); const b = btns(), i = b.indexOf(document.activeElement);
    b[(i + (e.key === "ArrowDown" ? 1 : b.length - 1)) % b.length]?.focus();
  };
  btns()[0]?.focus({preventScroll: true});
  return true;
}

// ---- undo / redo: whole-state snapshots of {flow, data}, taken BEFORE each mutation (in memory, per open flow, max 50) ----
let pgHist = [], pgRedoS = [];
const pgState = () => JSON.stringify({flow, data: pgData});
function pgSnap(pre){ pgHist.push(pre || pgState()); if (pgHist.length > 50) pgHist.shift(); pgRedoS = []; pgUndoBtns(); }
function pgUndoBtns(){ const u = $("#pgUndo"), r = $("#pgRedo"); if (u) u.disabled = !pgHist.length; if (r) r.disabled = !pgRedoS.length; }
function pgApplyState(st){
  const o = JSON.parse(st); flow = o.flow; pgData = o.data; pgRun = {};
  if (pgSelId && !pgFind(pgSelId)) pgSelId = null;
  pgSave(); pgSaveData(); pgRenderFlow(); if ($("#pgDataDlg").open) pgRenderData(); pgUndoBtns();
}
function pgUndo(){ if (pgRunning) return toast(t("pgBusy")); if (!pgHist.length) return toast(t("pgNoUndo")); pgRedoS.push(pgState()); pgApplyState(pgHist.pop()); toast(t("pgUndone")); }
function pgRedo(){ if (pgRunning) return toast(t("pgBusy")); if (!pgRedoS.length) return toast(t("pgNoRedo")); pgHist.push(pgState()); pgApplyState(pgRedoS.pop()); toast(t("pgRedone")); }
// node lookup / edit helpers (top-level and nested)
function pgFind(id, list = flow){
  for (let i = 0; i < list.length; i++) {
    const n = list[i]; if (n.id === id) return {n, list, i};
    for (const k of [n.children, n.else]) if (k) { const r = pgFind(id, k); if (r) return r; }
  }
  return null;
}
const pgCloneNode = n => { const c = JSON.parse(JSON.stringify(n)), re = x => { x.id = uid(); (x.children || []).forEach(re); (x.else || []).forEach(re); }; re(c); return c; };
function pgDelNode(id){ const f = pgFind(id); if (!f) return; pgSnap(); f.list.splice(f.i, 1); if (pgSelId === id) pgSelId = null; pgSave(); pgRenderFlow(); toast(t("pgDeleted")); }
function pgDupNode(id){
  const f = pgFind(id); if (!f) return; pgSnap();
  const c = pgCloneNode(f.n); if (f.list === flow) { c.x = (f.n.x || 0) + 30; c.y = (f.n.y || 0) + 30; }
  f.list.splice(f.i + 1, 0, c); pgSelId = c.id; pgSave(); pgRenderFlow();
}
function pgToggleOff(id){ const f = pgFind(id); if (!f) return; pgSnap(); if (f.n.off) delete f.n.off; else f.n.off = true; pgSave(); pgRenderFlow(); }

// selector -> XPath (for running via /api/act) ; mirrors the device's class-tagged tree
function selXPath(x){
  if (x.by === "xpath") return x.val;
  const q = v => xq(String(v)), a = {rid: "resource-id", text: "text", desc: "content-desc", cls: "class"}[x.by];  // XPath 1.0 has no \" escape: xq() switches quote style / concat()
  if (x.by === "rid") return x.val.includes(":id/") ? `//*[@resource-id=${q(x.val)}]`
    : `//*[@resource-id=${q(x.val)} or substring-after(@resource-id,":id/")=${q(x.val)}]`;
  if (x.contains && (x.by === "text" || x.by === "desc")) return `//*[contains(@${a},${q(x.val)})]`;
  return `//*[@${a}=${q(x.val)}]`;
}
const pgSel = x => x.by === "xy" ? `(${x.x}, ${x.y})` : (x.val || "…");

// ---------- run on device ----------
// Sleep that ends early on Stop (polls every 200ms), so a long Sleep step doesn't outlive the run.
const pgSleep = ms => new Promise(r => { const end = Date.now() + ms; (function tick(){ if (pgStop || Date.now() >= end) return r(); setTimeout(tick, Math.min(200, end - Date.now())); })(); });
// {{col}} placeholders are replaced per data row at run time (and per row in the Python export).
const subStr = (s, row) => (row && typeof s === "string") ? s.replace(/\{\{\s*(\w+)\s*\}\}/g, (m, k) => k in row ? row[k] : m) : s;
async function pgExec(n, row){
  const A = (p, q) => api(p, q, pgAbort?.signal);  // Stop aborts the in-flight request (the server may still finish that one step)
  const S = {serial: serial()}, sx = n.sel ? selXPath({...n.sel, val: subStr(n.sel.val, row)}) : null;
  if (n.type === "tap") return n.sel.by === "xy" ? A("/api/tap", {...S, x: n.sel.x, y: n.sel.y}) : A("/api/act", {...S, xpath: sx, op: "tap", timeout: 10});
  if (n.type === "longpress") return n.sel.by === "xy" ? A("/api/swipe", {...S, x1: n.sel.x, y1: n.sel.y, x2: n.sel.x, y2: n.sel.y, dur: n.dur}) : A("/api/act", {...S, xpath: sx, op: "longtap", dur: n.dur, timeout: 10});
  if (n.type === "doubletap") { if (n.sel.by === "xy") { await A("/api/tap", {...S, x: n.sel.x, y: n.sel.y}); return A("/api/tap", {...S, x: n.sel.x, y: n.sel.y}); } return A("/api/act", {...S, xpath: sx, op: "doubletap", timeout: 10}); }
  if (n.type === "text") return A("/api/text", {...S, text: subStr(n.text, row)});
  if (n.type === "key") return A("/api/key", {...S, code: n.code});
  if (n.type === "swipe") return A("/api/swipe", {...S, x1: n.x1, y1: n.y1, x2: n.x2, y2: n.y2, dur: n.dur});
  if (n.type === "scroll") return A("/api/scroll", {...S, dir: n.dir});
  if (n.type === "launch") return A("/api/start", {...S, pkg: subStr(n.pkg, row), activity: subStr(n.activity, row) || ""});
  if (n.type === "screenshot") return fetch("/api/screenshot?serial=" + encodeURIComponent(serial()), {signal: pgAbort?.signal});
  if (n.type === "wait") return A("/api/act", {...S, xpath: sx, op: "wait", timeout: n.timeout});
  if (n.type === "gone") return A("/api/act", {...S, xpath: sx, op: "gone", timeout: n.timeout});
  if (n.type === "sleep") return pgSleep(n.ms);
  if (n.type === "comment") return;
  if (n.type === "iff") {  // look once, or keep looking (every 0.5s) up to n.timeout seconds before taking Else
    const end = Date.now() + (+n.timeout || 0) * 1000; let r;
    for (;;) { r = await A("/api/act", {...S, xpath: sx, op: "check"}); if (r.matches > 0 || pgStop || Date.now() >= end) break; await pgSleep(500); }
    if (r.error) pgLogMsg("info", "⚠ " + pgLabel(n) + " — " + t("pgIfErr", {e: r.error}));
    if (pgStop) return;
    return pgRunList(r.matches > 0 ? n.children : n.else, row);
  }
  if (n.type === "repeat") { for (let i = 0; i < n.count && !pgStop; i++) await pgRunList(n.children, row); return; }
}
// Run-state marks are patched onto the existing node elements (data-nid): no full canvas rebuild per step,
// so fields being edited keep focus and long runs stay cheap. The finally{} of pgRunFlow does the one full render.
const pgStIcon = st => st === "run" ? `<i class="spin st"></i>` : st === "ok" ? `<svg class="st" viewBox="0 0 24 24" style="color:var(--ok)"><path d="M5 13l4 4 10-10" fill="none" stroke="currentColor" stroke-width="2.5"/></svg>` : st === "fail" ? `<svg class="st" viewBox="0 0 24 24" style="color:var(--bad)"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2.5"/></svg>` : "";
function pgMark(id, st){
  if (st) pgRun[id] = st; else delete pgRun[id];
  document.querySelectorAll(`#pgFlow [data-nid="${id}"]`).forEach(el => {
    el.classList.remove("run", "ok", "fail"); if (st) el.classList.add(st);
    const h = el.querySelector(":scope > .fnh"); if (!h) return;
    h.querySelector(":scope > .st")?.remove(); if (st) h.querySelector(".nsum").insertAdjacentHTML("afterend", pgStIcon(st));
  });
}
const pgLabel = n => t("n_" + n.type) + (pgSummary(n) ? " · " + pgSummary(n) : "");
async function pgRunList(list, row){
  for (const n of list) {
    if (pgStop) return;
    if (n.off) { if (n.type !== "comment") pgLogMsg("info", "⤼ " + pgLabel(n) + " — " + t("pgSkipped")); continue; }
    pgMark(n.id, "run");
    try {
      const r = await pgExec(n, row); pgMark(n.id, "ok");
      if (!["comment", "iff", "repeat"].includes(n.type)) pgLogAdd("ok", n, r && r.matches > 1 ? "⚠ " + t("pgMulti", {n: r.matches}) : "", row);
    }
    catch (e) {
      if (pgStop) { pgMark(n.id, null); return; }  // Stop aborted the request: not a failure
      pgMark(n.id, "fail"); if (!e.__logged) { pgLogAdd("fail", n, e.message || t("err"), row); e.__logged = true; } throw e;  // log the leaf failure once, then bubble unchanged (no double "Failed at…")
    }
  }
}
// ---------- run log (persists per run so failures stay visible & fixable) ----------
let pgLog = [];
function pgLogAdd(status, n, msg, row){  // xp = the selector actually sent (placeholders filled in for this data row)
  pgLog.push({time: new Date().toLocaleTimeString(), status,
    label: (pgRowCnt > 1 ? `#${pgRowNo} ` : "") + pgLabel(n),
    msg: msg || "", xp: status === "fail" && n.sel && n.sel.by !== "xy" ? selXPath({...n.sel, val: subStr(n.sel.val, row)}) : ""});
  pgRenderLog(status === "fail");
}
function pgLogMsg(status, text){ pgLog.push({time: new Date().toLocaleTimeString(), status, label: text, msg: "", xp: ""}); pgRenderLog(status === "fail"); }
function pgRenderLog(openOnFail){
  const body = $("#pgLogBody"); if (!body) return;
  const fails = pgLog.filter(l => l.status === "fail").length, cnt = $("#pgLogCnt");
  if (cnt) cnt.textContent = pgLog.length ? (fails ? `· ${fails} ⚠` : `· ${pgLog.length}`) : "";
  body.innerHTML = pgLog.length ? pgLog.map(l => {
    const mk = l.status === "fail" ? "✗" : l.status === "ok" ? "✓" : l.status === "done" ? "✓" : "·";
    return `<div class="pglrow ${esc(l.status)}"><span class="plt">${esc(l.time)}</span><span class="pli">${mk}</span><span class="pll">${esc(l.label)}${l.msg ? ` — ${esc(l.msg)}` : ""}${l.xp ? `<small>${esc(l.xp)}</small>` : ""}</span></div>`;
  }).join("") : `<div class="pgtip">${t("pgLogEmpty")}</div>`;
  if (openOnFail) { const w = $("#pgLogWrap"); if (w) w.open = true; }
}
// dataset rows as {col: value} objects; no data -> a single run with no variables
function pgRows(){
  if (pgData.cols.length && pgData.rows.length) return pgData.rows.map(r => Object.fromEntries(pgData.cols.map((c, i) => [c, r[i] ?? ""])));
  return [null];
}
// ---------- dataset editor (loop the flow over rows; {{col}} placeholders) ----------
function pgOpenData(){ pgRenderData(); $("#pgDataDlg").showModal(); }
function pgRenderData(){
  const box = $("#pgDataTable"), c = pgData.cols, R = pgData.rows;
  box.innerHTML = `<table class="dtbl"><thead><tr>${c.map((n, i) =>
      `<th><input class="inp sm" data-col="${i}" value="${esc(n)}" placeholder="var"><button class="x" data-delcol="${i}" title="${t("pgDelete")}">×</button></th>`).join("")}
      <th><button class="btn sm" id="dAddCol">+ ${t("pgCol")}</button></th></tr></thead>
    <tbody>${R.map((row, r) => `<tr>${c.map((_, i) =>
      `<td><input class="inp sm" data-cell="${r},${i}" value="${esc(row[i] ?? "")}"></td>`).join("")}<td><button class="x" data-delrow="${r}" title="${t("pgDelete")}">×</button></td></tr>`).join("")}</tbody></table>
    <div class="dft"><button class="btn sm" id="dAddRow">+ ${t("pgRow2")}</button>
      <span class="sp"></span><span class="mut" style="font-size:12px">${c.length ? t("pgVars") + ": " + c.filter(Boolean).map(x => "{{" + x + "}}").join(" ") : t("pgNoVars")}</span></div>
    <details class="dcsv"><summary>${t("pgCsv")}</summary><textarea class="inp" id="dCsv" rows="4" placeholder="name,pass&#10;budi,1234&#10;ani,5678"></textarea><button class="btn sm" id="dCsvImp">${t("pgCsvImp")}</button></details>`;
  $("#dAddCol").onclick = () => { pgSnap(); pgData.cols = pgUniqCols([...pgData.cols, "var" + (pgData.cols.length + 1)]); pgData.rows.forEach(r => r.push("")); pgSaveData(); pgRenderData(); };
  $("#dAddRow").onclick = () => { pgSnap(); pgData.rows.push(pgData.cols.map(() => "")); pgSaveData(); pgRenderData(); };
  box.querySelectorAll("[data-delcol]").forEach(b => b.onclick = () => { pgSnap(); const i = +b.dataset.delcol; pgData.cols.splice(i, 1); pgData.rows.forEach(r => r.splice(i, 1)); pgSaveData(); pgRenderData(); });
  box.querySelectorAll("[data-delrow]").forEach(b => b.onclick = () => { pgSnap(); pgData.rows.splice(+b.dataset.delrow, 1); pgSaveData(); pgRenderData(); });
  box.querySelectorAll("[data-col]").forEach(inp => inp.onchange = () => { pgSnap(); pgData.cols[+inp.dataset.col] = inp.value; pgData.cols = pgUniqCols(pgData.cols); pgSaveData(); pgRenderData(); });
  box.querySelectorAll("[data-cell]").forEach(inp => { inp.onblur = () => inp._snap = false; inp.oninput = () => {  // one undo step per cell edit, not per keystroke
    if (!inp._snap) { pgSnap(); inp._snap = true; }
    const [r, i] = inp.dataset.cell.split(",").map(Number); pgData.rows[r][i] = inp.value; pgSaveData(); }; });
  $("#dCsvImp").onclick = () => {
    const d = pgParseCsv($("#dCsv").value); if (!d) return;
    pgSnap(); pgData = d; pgSaveData(); pgRenderData(); toast(t("pgCsvDone", {c: d.cols.length, n: d.rows.length}));
  };
}
// Quote-aware CSV/TSV: the delimiter is whichever of tab ; , appears most in the header line (outside quotes) —
// Indonesian-locale Excel saves with ';', Sheets copies as TSV. "" = a literal quote; newlines inside quotes are kept.
function pgParseCsv(txt){
  txt = String(txt).replace(/^\uFEFF/, "");
  const cnt = {"\t": 0, ";": 0, ",": 0}; let q = false;
  for (const c of txt) { if (c === '"') q = !q; else if (!q && (c === "\n" || c === "\r")) break; else if (!q && c in cnt) cnt[c]++; }
  let D = ","; for (const d of ["\t", ";"]) if (cnt[d] > cnt[D]) D = d;
  const rows = []; let row = [], f = "", quoted = false, inQ = false;
  const push = () => { row.push(quoted ? f : f.trim()); f = ""; quoted = false; };
  for (let i = 0; i < txt.length; i++) {
    const c = txt[i];
    if (inQ) { if (c !== '"') f += c; else if (txt[i + 1] === '"') { f += '"'; i++; } else inQ = false; }
    else if (c === '"' && !f.trim()) { inQ = quoted = true; f = ""; }
    else if (c === D) push();
    else if (c === "\n" || c === "\r") { if (c === "\r" && txt[i + 1] === "\n") i++; push(); rows.push(row); row = []; }
    else f += c;
  }
  push(); rows.push(row);
  const keep = rows.filter(r => r.some(v => v !== ""));
  if (!keep.length) return null;
  const cols = pgUniqCols(keep[0]);
  return {cols, rows: keep.slice(1).map(r => cols.map((_, i) => r[i] ?? ""))};  // ragged rows padded / trimmed to the header
}
// list = what to run (whole flow, flow.slice(i) for "Run from here", [node] for "Run this step only"); oneRow = first data row only
async function pgRunFlow(list = flow, oneRow = false){
  if (pgRunning) return toast(t("pgBusy"));
  if (!serial()) return toast(t("noDev"));
  if (!list.length) return;
  pgRunning = true; pgStop = false; pgRun = {}; pgAbort = new AbortController(); $("#pgRun").hidden = true; $("#pgStop").hidden = false;
  const wasLive = streaming, all = pgRows(), rows = oneRow ? all.slice(0, 1) : all;
  pgRowCnt = rows.length; pgRowNo = 1; pgRenderFlow();
  pgLog = []; pgLogMsg("info", "▶ " + (list === flow ? t("pgLogStart") : oneRow ? t("pgRunOne") : t("pgRunFrom")) + (rows.length > 1 ? ` · ${rows.length}×` : ""));
  if (!wasLive) setLive(true);  // mirror the device live (left pane) while the flow runs
  try {
    for (let i = 0; i < rows.length && !pgStop; i++) {
      pgRowNo = i + 1;
      if (rows.length > 1) { document.querySelectorAll("#pgFlow [data-nid]").forEach(el => pgMark(el.dataset.nid, null)); pgRun = {}; pgLogMsg("info", t("pgRow", {i: i + 1, n: rows.length})); toast(t("pgRow", {i: i + 1, n: rows.length})); }
      await pgRunList(list, rows[i]);
    }
    if (!pgStop) { pgLogMsg("done", "✓ " + t("pgDone")); toast("✓ " + t("pgDone") + (rows.length > 1 ? ` (${rows.length}×)` : "")); }
    else pgLogMsg("info", "■ " + t("pgStopped"));
  }
  catch (e) {
    if (pgStop) pgLogMsg("info", "■ " + t("pgStopped"));
    else { const f = pgLog.find(l => l.status === "fail"); toast("✗ " + (f ? f.label : t("err"))); pgRenderLog(true); }  // detail is in the run log
  }
  finally { pgRunning = false; pgAbort = null; $("#pgRun").hidden = false; $("#pgStop").hidden = true; if (!wasLive) setLive(false); dump(); pgRenderFlow(); }
}

// ---------- export ----------
const pyEsc = s => String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t");
const pyq = v => '"' + pyEsc(v) + '"';
const pgHasData = () => pgData.cols.length > 0 && pgData.rows.length > 0;
// {{col}} of a real dataset column -> Python f-string "...{row['col']}..." (only when the `for row in DATA:` loop exists).
// Unknown {{x}} stays literal text, like the runner does (no NameError / KeyError in the script).
function pyStr(v){
  const s = String(v), known = k => pgHasData() && pgData.cols.includes(k);
  if (![...s.matchAll(/\{\{\s*(\w+)\s*\}\}/g)].some(m => known(m[1]))) return pyq(s);
  return 'f"' + pyEsc(s).replace(/([{}])/g, "$1$1").replace(/\{\{\{\{\s*(\w+)\s*\}\}\}\}/g, (m, k) => known(k) ? `{row['${k}']}` : m) + '"';
}
const pgOneLine = s => String(s || "").replace(/[\r\n]+/g, " ");
const pgOffLines = s => s.split("\n").map(l => l.replace(/^(\s*)/, "$1# [off] ")).join("\n");  // disabled step: kept in the export, commented out
function pgPy(list, ind){
  // a block needs at least one real statement: comments / disabled steps alone get a `pass`
  const body = (l, k) => l.map(n => n.off ? pgOffLines(pgPy1(n, k)) : pgPy1(n, k)).concat(l.some(n => !n.off && n.type !== "comment") ? [] : [" ".repeat(k) + "pass"]).join("\n");
  function pgPy1(n, k){
    const q = " ".repeat(k), xp = n.sel && selXPath(n.sel), kn = PG_KEYS[n.code];
    switch (n.type) {
      case "tap": return n.sel.by === "xy" ? `${q}d.click(${n.sel.x}, ${n.sel.y})` : `${q}d.xpath(${pyStr(xp)}).click()`;
      case "longpress": return n.sel.by === "xy" ? `${q}d.long_click(${n.sel.x}, ${n.sel.y}, ${n.dur / 1000})` : `${q}_e = d.xpath(${pyStr(xp)}).get(); d.long_click(*_e.center(), ${n.dur / 1000})`;
      case "doubletap": return n.sel.by === "xy" ? `${q}d.double_click(${n.sel.x}, ${n.sel.y})` : `${q}_e = d.xpath(${pyStr(xp)}).get(); d.double_click(*_e.center())`;
      case "text": return `${q}d.send_keys(${pyStr(n.text)})`;
      case "key": return `${q}d.press(${U2KEYS.includes(kn) ? pyq(kn) : (parseInt(n.code) || 0)})`;
      case "swipe": return `${q}d.swipe(${n.x1}, ${n.y1}, ${n.x2}, ${n.y2}, ${n.dur / 1000})`;
      // swipe_ext names the FINGER direction; the runner's dir is "show more that way" with a 1/3-screen swipe (server /api/scroll)
      case "scroll": return `${q}d.swipe_ext(${pyq({down: "up", up: "down", left: "right", right: "left"}[n.dir] || "up")}, scale=0.33)`;
      case "launch": return `${q}d.app_start(${pyStr(n.pkg)}${n.activity ? ", " + pyStr(n.activity) : ""})`;
      case "screenshot": return `${q}d.screenshot(f"shot_{int(time.time() * 1000)}.png")`;
      case "wait": return `${q}d.xpath(${pyStr(xp)}).wait(timeout=${n.timeout})`;
      case "gone": return `${q}d.xpath(${pyStr(xp)}).wait_gone(timeout=${n.timeout})`;
      case "sleep": return `${q}time.sleep(${n.ms / 1000})`;
      case "comment": return `${q}# ${pgOneLine(n.text)}`;
      case "iff": return `${q}if d.xpath(${pyStr(xp)})${n.timeout > 0 ? `.wait(timeout=${n.timeout})` : ".exists"}:\n` + body(n.children, k + 4) + (n.else.length ? `\n${q}else:\n` + body(n.else, k + 4) : "");
      case "repeat": return `${q}for _ in range(${n.count}):\n` + body(n.children, k + 4);
    }
  }
  return body(list, ind);
}
function pgMcp(list, ind){
  const line = (n, k) => {
    const q = " ".repeat(k), xp = n.sel && selXPath(n.sel), X = () => `xpath=${pyq(selXPath(n.sel))}`;
    switch (n.type) {
      case "tap": return n.sel.by === "xy" ? `${q}tap(x=${n.sel.x}, y=${n.sel.y})` : `${q}tap(${X()})`;
      case "longpress": return n.sel.by === "xy" ? `${q}tap(x=${n.sel.x}, y=${n.sel.y}, long_press_ms=${n.dur})` : `${q}tap(${X()}, long_press_ms=${n.dur})`;
      case "doubletap": return n.sel.by === "xy" ? `${q}tap(x=${n.sel.x}, y=${n.sel.y})\n${q}tap(x=${n.sel.x}, y=${n.sel.y})` : `${q}tap(${X()})\n${q}tap(${X()})`;
      case "text": return `${q}input_text(${pyq(n.text)})`;
      case "key": return `${q}press_key(${pyq(MCPKEYS.includes(PG_KEYS[n.code]) ? PG_KEYS[n.code] : String(n.code))})`;
      case "swipe": return `${q}swipe(${n.x1}, ${n.y1}, ${n.x2}, ${n.y2}, duration_ms=${n.dur})`;
      case "scroll": return `${q}scroll(${pyq(n.dir)})`;
      case "launch": return `${q}start_activity(${pyq(n.pkg)}${n.activity ? ", " + pyq(n.activity) : ""})`;
      case "screenshot": return `${q}screenshot()`;
      case "wait": return `${q}wait_for(${X()}, timeout=${n.timeout})`;
      case "gone": return `${q}wait_for(${X()}, gone=True, timeout=${n.timeout})`;
      case "sleep": return `${q}# wait ${n.ms / 1000}s`;
      case "comment": return `${q}# ${pgOneLine(n.text)}`;
      case "iff": return `${q}# IF ${selXPath(n.sel)} exists${n.timeout > 0 ? ` (wait up to ${n.timeout}s)` : ""}:\n` + pgMcp(n.children, k + 2) + (n.else.length ? `\n${q}# else:\n` + pgMcp(n.else, k + 2) : "");
      case "repeat": return `${q}# REPEAT ${n.count}x:\n` + pgMcp(n.children, k + 2);
    }
  };
  return list.map(n => n.off ? pgOffLines(line(n, ind)) : line(n, ind)).join("\n");
}
function pgExport(){
  if (pgFmt === "json") return pgJson();
  if (!flow.length) return "";
  const hasData = pgHasData();
  if (pgFmt === "mcp") return "# Inceptor AI Playground -> MCP (android-inceptor). Control flow shown as comments.\n"
    + (hasData ? "# Repeat the block below for each row:\n" + pgData.rows.map(r => "#   " + JSON.stringify(Object.fromEntries(pgData.cols.map((c, i) => [c, r[i] ?? ""])))).join("\n") + "\n" : "") + pgMcp(flow, 0);
  let head = `# Generated by Inceptor AI Playground\nimport time\nimport uiautomator2 as u2\n\nd = u2.connect(${pyq(serial() || "SERIAL")})\n\n`;
  if (hasData) {
    const data = pgData.rows.map(r => "    {" + pgData.cols.map((c, i) => `${pyq(c)}: ${pyq(r[i] ?? "")}`).join(", ") + "}").join(",\n");
    return head + `DATA = [\n${data}\n]\nfor row in DATA:\n` + pgPy(flow, 4);
  }
  return head + pgPy(flow, 0);
}
const pgJson = () => JSON.stringify({tool: "inceptor-ai-playground", v: 1, name: pgCurE().name, data: pgData, flow}, null, 2);
const pgCode = () => { const c = $("#pgCode"); if (c) c.textContent = pgExport() || t("pgEmpty"); };

// ---------- render ----------
function pgField(n){  // body editor per node
  const row = (lbl, inner) => `<div class="frow"><label>${lbl}</label><div>${inner}</div></div>`;
  let h = "";
  if (PG[n.type].sel) {
    const bys = [["rid", "resource-id"], ["text", "text"], ["desc", "content-desc"], ["cls", "class"], ["xpath", "XPath"]].concat(["tap", "longpress", "doubletap"].includes(n.type) ? [["xy", "X, Y"]] : []);
    h += row(t("pgBy"), `<div class="pgsel"><select data-k="sel.by">${bys.map(([v, l]) => `<option value="${v}"${n.sel.by === v ? " selected" : ""}>${l}</option>`).join("")}</select>` +
      (n.sel.by === "xy" ? `<span style="display:flex;gap:6px"><input class="inp num" type="number" data-k="sel.x" value="${n.sel.x}"><input class="inp num" type="number" data-k="sel.y" value="${n.sel.y}"></span>`
        : `<input class="inp" data-k="sel.val" value="${esc(n.sel.val)}" placeholder="${t("pgValPh")}">`) + `</div>`);
    if ((n.sel.by === "text" || n.sel.by === "desc")) h += row("", `<label style="font-size:12px;color:var(--mut)"><input type="checkbox" data-k="sel.contains"${n.sel.contains ? " checked" : ""}> ${t("pgContains")}</label>`);
    if (sel && n.sel.by !== "xy") h += row("", `<button class="btn sm" data-fill="${n.id}">${t("pgFromSel")}</button>`);
  }
  if (n.type === "wait" || n.type === "gone") h += row("timeout", `<input class="inp num" type="number" min="1" max="120" data-k="timeout" value="${n.timeout}"> ${t("pgSec")}`);
  if (n.type === "iff") h += row(t("pgWaitUpTo"), `<input class="inp num" type="number" min="0" max="120" data-k="timeout" value="${n.timeout || 0}"> ${t("pgSec")}`);
  if (n.type === "longpress") h += row(t("pgHold"), `<input class="inp num" type="number" min="100" step="100" data-k="dur" value="${n.dur}"> ms`);
  if (n.type === "swipe") { h += row("dari", `<span style="display:flex;gap:6px"><input class="inp num" type="number" data-k="x1" value="${n.x1}"><input class="inp num" type="number" data-k="y1" value="${n.y1}"></span>`); h += row("ke", `<span style="display:flex;gap:6px"><input class="inp num" type="number" data-k="x2" value="${n.x2}"><input class="inp num" type="number" data-k="y2" value="${n.y2}"></span>`); h += row(t("pgHold"), `<input class="inp num" type="number" min="50" step="50" data-k="dur" value="${n.dur}"> ms`); }
  if (n.type === "text" || n.type === "comment") h += row(t("pgText"), `<input class="inp" data-k="text" value="${esc(n.text)}">`);
  if (n.type === "key") h += row(t("pgKey"), `<select data-k="code">${Object.entries(PG_KEYS).map(([c, nm]) => `<option value="${c}"${n.code === c ? " selected" : ""}>${nm}</option>`).join("")}</select>`);
  if (n.type === "scroll") h += row(t("pgDir"), `<select data-k="dir">${["down", "up", "left", "right"].map(d => `<option${n.dir === d ? " selected" : ""}>${d}</option>`).join("")}</select>`);
  if (n.type === "launch") {
    h += row(t("pgPkg"), `<button class="appddbtn" data-pick="1">${n.pkg ? pgAppIcon(n.pkg) + `<span class="ddlbl">${esc(pgLabels[n.pkg] || n.pkg)}</span>` : `<span class="ddph">${t("pgPkgPh")}</span>`}<svg class="ic caret" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></button>`);
    h += row(t("pgActivity"), `<button class="appddbtn" data-actpick="1">${n.activity ? `<span class="ddlbl">${esc(n.activity.split(".").pop())}</span>` : `<span class="ddph">${t("pgActPick")}</span>`}<svg class="ic caret" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></button>`);
    if (!pgAppsLoaded) pgLoadApps(); if (n.pkg && !(n.pkg in pgLabels)) pgFetchLabels([n.pkg]).then(ok => ok && view === "play" && !pgRunning && pgRenderFlow());  // re-render only once the key is filled -> no refetch loop
  }
  if (n.type === "sleep") h += row(t("pgDelay"), `<input class="inp num" type="number" min="0" data-k="ms" value="${n.ms}"> ms`);
  if (n.type === "repeat") h += row(t("pgTimes"), `<input class="inp num" type="number" min="1" max="999" data-k="count" value="${n.count}">`);
  return h;
}
// ---- free canvas: nodes carry x,y; the plane pans & zooms; connectors auto-route in step order ----
let pgPan = (() => { try { return JSON.parse(store.get("pgPan")) || {x: 24, y: 24, z: 1} } catch { return {x: 24, y: 24, z: 1} } })();
const pgSavePan = () => store.set("pgPan", JSON.stringify(pgPan));
// Auto-arrange: stack top-level nodes in one tidy column (keeps measured heights so open bodies don't overlap). Undo restores the layout.
function pgArrange(){
  if (!flow.length) return;
  pgSnap();
  let y = 24; const x = 40, gap = 26;
  flow.forEach(n => { const el = document.getElementById("pgn_" + n.id); n.x = x; n.y = y; y += (el ? el.offsetHeight : 84) + gap; });
  pgSave(); pgRenderFlow(); pgFit(); toast(t("pgArranged"));
}
function ensurePositions(){
  let maxY = 24, lastX = 40;
  flow.forEach(n => { if (typeof n.x === "number") { maxY = Math.max(maxY, n.y); lastX = n.x; } });
  flow.forEach(n => { if (typeof n.x !== "number") { n.x = lastX; n.y = maxY + 150; maxY = n.y; } });
}
function pgNodeEl(n, parent, nested){
  const m = PG[n.type], open = pgOpen.has(n.id), st = pgRun[n.id];
  const d = document.createElement("div"); d.className = "fnode" + (st ? " " + st : "") + (n.off ? " off" : "") + (pgSelId === n.id ? " sel" : "") + (nested ? " nested" : " canvasnode");
  d.style.setProperty("--nc", `var(${m.c})`); d.dataset.nid = n.id;
  d.innerHTML = `<div class="fnh" tabindex="0" role="button" aria-expanded="${open}"><span class="nd">${ic(m.i)}</span><span class="nt">${t("n_" + n.type)}</span>${n.off ? `<span class="offb">${t("pgOffBadge")}</span>` : ""}
    <span class="nsum">${esc(pgSummary(n))}</span>${pgStIcon(st)}
    <span class="fnacts">${nested ? `<button class="x up" data-mv="-1" title="${t("moveUp")}">${ic("up")}</button><button class="x dn" data-mv="1" title="${t("moveDown")}">${ic("down")}</button>` : ""}<button class="x" data-more title="${t("pgMore")}">${ic("more")}</button><button class="x del" data-del title="${t("pgDelStep")}">${ic("trash")}</button></span></div>
    ${open ? `<div class="fnbody">${pgField(n)}</div>` : ""}`;
  // if / repeat: children stacked inside the card
  if (PG[n.type].kids && open) {
    const body = d.querySelector(".fnbody") || d.appendChild(Object.assign(document.createElement("div"), {className: "fnbody"}));
    const kidsWrap = document.createElement("div"); kidsWrap.className = "fkids";
    const addKids = (list, lbl) => {
      if (lbl) kidsWrap.append(Object.assign(document.createElement("div"), {className: "fbranch", textContent: lbl}));
      list.forEach(c => kidsWrap.append(pgNodeEl(c, list, true)));
      kidsWrap.append(pgAddBtn(list, list.length));
    };
    if (n.type === "iff") { addKids(n.children, t("pgThen")); addKids(n.else, t("pgElse")); } else addKids(n.children);
    body.append(kidsWrap);
  }
  d.querySelector(":scope > .fnh [data-del]").onclick = () => pgDelNode(n.id);  // :scope — never bind the nested children's controls to this node
  d.querySelector(":scope > .fnh [data-more]").onclick = e => pgNodeMenu(e.currentTarget, n, nested);
  d.querySelectorAll(":scope > .fnh [data-mv]").forEach(b => b.onclick = () => { const i = parent.indexOf(n), j = i + (+b.dataset.mv); if (j >= 0 && j < parent.length) { pgSnap(); parent.splice(i, 1); parent.splice(j, 0, n); pgSave(); pgRenderFlow(); } });
  const hd = d.querySelector(":scope > .fnh");
  // keyboard: Enter/Space opens/closes the step (focus comes back to the same header after the re-render)
  hd.onkeydown = e => { if (e.target === hd && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); pgToggleOpen(n.id, true); } };
  if (nested) hd.onclick = e => { if (e.target.closest(".fnacts")) return; pgToggleOpen(n.id); };
  else {
    d.style.left = n.x + "px"; d.style.top = n.y + "px"; hd.onpointerdown = e => pgNodeDrag(e, n, d);
    const pin = document.createElement("span"); pin.className = "port in"; pin.title = t("pgRewire"); d.append(pin);
    const pout = document.createElement("span"); pout.className = "port out"; pout.title = t("pgRewire"); d.append(pout);
    pout.onpointerdown = e => pgPortDrag(e, n, false);  // output -> target comes after
    pin.onpointerdown = e => pgPortDrag(e, n, true);    // input <- source comes before (2-way)
  }
  if (open) {
    d.querySelectorAll(":scope > .fnbody > .frow [data-k]").forEach(inp => inp.onblur = () => inp._snap = false);
    d.querySelectorAll(":scope > .fnbody > .frow [data-k]").forEach(inp => inp.oninput = inp.onchange = () => {
      if (!inp._snap) { pgSnap(); inp._snap = true; }  // one undo step per field edit, not per keystroke
      const path = inp.dataset.k, v = inp.type === "checkbox" ? inp.checked : inp.type === "number" ? +inp.value : inp.value;
      if (path.startsWith("sel.")) { n.sel[path.slice(4)] = v; if (path === "sel.by") pgRenderFlow(); } else n[path] = v;
      pgSave(); d.querySelector(".nsum").textContent = pgSummary(n); pgDrawEdges();
    });
    const fb = d.querySelector(":scope > .fnbody > .frow [data-fill]");
    if (fb) fb.onclick = () => { const b = bestSel(sel); if (b) { pgSnap(); Object.assign(n.sel, b); pgSave(); pgRenderFlow(); if (b.val === sel.xpathAbs) toast(t("pgFragile")); } };
    const pk = d.querySelector(":scope > .fnbody > .frow [data-pick]");
    if (pk) pk.onclick = () => appPicker(pk, pkg => { pgSnap(); n.pkg = pkg; pgSave(); pgRenderFlow(); }, true);
    const ak = d.querySelector(":scope > .fnbody > .frow [data-actpick]");
    if (ak) ak.onclick = () => activityPicker(ak, n);
  }
  return d;
}
function pgToggleOpen(id, refocus){
  pgSelId = id; pgOpen.has(id) ? pgOpen.delete(id) : pgOpen.add(id); pgRenderFlow();
  if (refocus) document.querySelector(`#pgFlow [data-nid="${id}"] > .fnh`)?.focus();
}
// ⋯ menu of a step: run it alone / run from it, disable, duplicate, delete
function pgNodeMenu(anchor, n, nested){
  const m = document.createElement("div"), busy = pgRunning ? " disabled" : ""; m.className = "pgaddmenu pgmenu";
  m.innerHTML = `<button class="pgmi" data-na="one"${busy}>${ic("play")}${t("pgRunOne")}</button>`
    + (nested ? "" : `<button class="pgmi" data-na="from"${busy}>${ic("skip")}${t("pgRunFrom")}</button>`)  // "from here" is ambiguous inside If/Repeat
    + `<hr><button class="pgmi" data-na="off">${ic("power")}${t(n.off ? "pgEnable" : "pgDisable")}</button>`
    + `<button class="pgmi" data-na="dup">${ic("copy")}${t("pgDupStep")}</button><button class="pgmi bad" data-na="del">${ic("trash")}${t("pgDelStep")}</button>`;
  if (!pgPopup(m, anchor)) return;
  m.querySelectorAll("[data-na]").forEach(b => b.onclick = () => {
    m.remove(); const a = b.dataset.na;
    if (a === "one") pgRunFlow([{...n, off: false}], true);  // explicit "run this step" also runs a disabled one
    else if (a === "from") pgRunFlow(flow.slice(Math.max(0, flow.indexOf(n))));
    else if (a === "off") pgToggleOff(n.id);
    else if (a === "dup") pgDupNode(n.id);
    else pgDelNode(n.id);
  });
}
// drag the output port onto another node to rewire the order (that node becomes the next step)
function pgConnect(srcId, dstId){
  if (srcId === dstId) return;
  const di = flow.findIndex(x => x.id === dstId); if (di < 0 || flow.findIndex(x => x.id === srcId) < 0) return;  // top-level only
  pgSnap();
  const [m] = flow.splice(di, 1);
  flow.splice(flow.findIndex(x => x.id === srcId) + 1, 0, m);
  pgSave(); pgRenderFlow();
}
function pgPortDrag(e, n, fromInput){
  e.stopPropagation(); e.preventDefault();
  const vp = $("#flowPane .scroll").getBoundingClientRect(), srcEl = document.getElementById("pgn_" + n.id);
  const sx = n.x + srcEl.offsetWidth / 2, sy = fromInput ? n.y : n.y + srcEl.offsetHeight;  // from top (input) or bottom (output)
  const toPlane = (cx, cy) => [(cx - vp.left - pgPan.x) / pgPan.z, (cy - vp.top - pgPan.y) / pgPan.z];
  const svg = $("#pgEdges"), tmp = document.createElementNS("http://www.w3.org/2000/svg", "path");
  tmp.setAttribute("class", "tmpedge"); tmp.setAttribute("fill", "none"); tmp.setAttribute("stroke", "var(--acc)"); tmp.setAttribute("stroke-width", "2.5"); tmp.setAttribute("stroke-dasharray", "5 4"); svg.append(tmp);
  let overEl = null;
  const mv = ev => {
    const [px, py] = toPlane(ev.clientX, ev.clientY), b = fromInput ? -40 : 40;
    tmp.setAttribute("d", `M${sx} ${sy} C ${sx} ${sy + b} ${px} ${py - b} ${px} ${py}`);
    const el = document.elementFromPoint(ev.clientX, ev.clientY)?.closest(".fnode.canvasnode");
    if (el !== overEl) { overEl?.classList.remove("droptarget"); overEl = el && el !== srcEl ? el : null; overEl?.classList.add("droptarget"); }
  };
  const up = ev => {
    removeEventListener("pointermove", mv); removeEventListener("pointerup", up); tmp.remove(); overEl?.classList.remove("droptarget");
    const el = document.elementFromPoint(ev.clientX, ev.clientY)?.closest(".fnode.canvasnode");
    if (el && el !== srcEl) { const m = el.id.replace("pgn_", ""); fromInput ? pgConnect(m, n.id) : pgConnect(n.id, m); } else pgDrawEdges();
  };
  addEventListener("pointermove", mv); addEventListener("pointerup", up);
}
// drag a connector's endpoint to re-route it to another node (handles sit at each line end)
function pgEdgeEndDrag(e, pin, rewire){
  e.stopPropagation(); e.preventDefault();
  const vp = $("#flowPane .scroll").getBoundingClientRect();
  const toPlane = (cx, cy) => [(cx - vp.left - pgPan.x) / pgPan.z, (cy - vp.top - pgPan.y) / pgPan.z];
  const svg = $("#pgEdges"), tmp = document.createElementNS("http://www.w3.org/2000/svg", "path");
  tmp.setAttribute("class", "tmpedge"); tmp.setAttribute("fill", "none"); tmp.setAttribute("stroke", "var(--acc)"); tmp.setAttribute("stroke-width", "2.5"); tmp.setAttribute("stroke-dasharray", "5 4"); svg.append(tmp);
  let overEl = null;
  const mv = ev => {
    const [px, py] = toPlane(ev.clientX, ev.clientY);
    tmp.setAttribute("d", `M${pin.x} ${pin.y} C ${pin.x} ${(pin.y + py) / 2} ${px} ${(pin.y + py) / 2} ${px} ${py}`);
    const el = document.elementFromPoint(ev.clientX, ev.clientY)?.closest(".fnode.canvasnode");
    if (el !== overEl) { overEl?.classList.remove("droptarget"); overEl = el; overEl?.classList.add("droptarget"); }
  };
  const up = ev => {
    removeEventListener("pointermove", mv); removeEventListener("pointerup", up); tmp.remove(); overEl?.classList.remove("droptarget");
    const el = document.elementFromPoint(ev.clientX, ev.clientY)?.closest(".fnode.canvasnode");
    if (el) rewire(el.id.replace("pgn_", "")); else pgDrawEdges();
  };
  addEventListener("pointermove", mv); addEventListener("pointerup", up);
}
// click a connector (big hit area) or its + to insert a step between the two nodes
function pgInsertAt(i, ev){
  const anchor = {getBoundingClientRect: () => ({left: ev.clientX, bottom: ev.clientY, right: ev.clientX, top: ev.clientY, width: 0, height: 0})};
  pgAddMenu(anchor, ty => {
    const node = pgMake(ty), a = flow[i], c = flow[i + 1];
    if (a && c) { node.x = Math.round((a.x + c.x) / 2); node.y = Math.round((a.y + c.y) / 2); }
    pgSnap(); flow.splice(i + 1, 0, node); pgOpen.add(node.id); pgSave(); pgRenderFlow();
  });
}
// drag a node around the canvas (header); a click without movement toggles its editor
function pgNodeDrag(e, n, el){
  if (e.target.closest(".fnacts")) return;
  e.preventDefault(); const sx = e.clientX, sy = e.clientY, ox = n.x, oy = n.y, pre = pgState(); let moved = false;
  const mv = ev => { const dx = (ev.clientX - sx) / pgPan.z, dy = (ev.clientY - sy) / pgPan.z; if (Math.abs(ev.clientX - sx) + Math.abs(ev.clientY - sy) > 4) moved = true; n.x = Math.round(ox + dx); n.y = Math.round(oy + dy); el.style.left = n.x + "px"; el.style.top = n.y + "px"; pgDrawEdges(); };
  const up = () => { removeEventListener("pointermove", mv); removeEventListener("pointerup", up); if (moved) { pgSnap(pre); pgSave(); } else pgToggleOpen(n.id); };
  addEventListener("pointermove", mv); addEventListener("pointerup", up);
}
function pgSummary(n){
  if (n.type === "tap") return pgSel(n.sel);
  if (n.type === "longpress") return pgSel(n.sel) + " · " + n.dur + "ms";
  if (n.type === "doubletap") return pgSel(n.sel);
  if (n.type === "swipe") return `(${n.x1},${n.y1}) → (${n.x2},${n.y2})`;
  if (n.type === "wait") return t("pgSumWait", {s: pgSel(n.sel), n: n.timeout});
  if (n.type === "gone") return t("pgSumGone", {s: pgSel(n.sel), n: n.timeout});
  if (n.type === "text") return '"' + (n.text || "") + '"';
  if (n.type === "key") return PG_KEYS[n.code] || n.code;
  if (n.type === "scroll") return n.dir;
  if (n.type === "launch") return n.pkg + (n.activity ? " / " + n.activity.split(".").pop() : "");
  if (n.type === "sleep") return n.ms + " ms";
  if (n.type === "repeat") return "× " + n.count;
  if (n.type === "iff") return pgSel(n.sel) + " ?" + (n.timeout > 0 ? ` ≤${n.timeout}s` : "");
  if (n.type === "comment") return n.text || "";
  if (n.type === "screenshot") return "";
  return "";
}
function pgAddBtn(list, idx){
  const w = document.createElement("div"); w.className = "addhere";
  w.innerHTML = `<button title="${t("pgAdd")}" aria-label="${t("pgAdd")}">${ic("expand") && "+"}</button>`;
  w.firstChild.onclick = e => pgAddMenu(e.currentTarget, ty => { pgSnap(); list.splice(idx, 0, pgMake(ty)); pgOpen.add(list[idx].id); pgSave(); pgRenderFlow(); });
  return w;
}
// one connector per step pair, each with a wide transparent hit area (click to insert) + a midpoint + button
function pgDrawEdges(){
  const svg = $("#pgEdges"), plane = $("#pgFlow"); if (!svg || !plane) return;
  plane.querySelectorAll(".edgeadd, .edgeend").forEach(e => e.remove());
  const box = n => { const el = document.getElementById("pgn_" + n.id); return el ? {x: n.x, y: n.y, w: el.offsetWidth, h: el.offsetHeight} : null; };
  const boxes = flow.map(box); let W = 0, H = 0;
  boxes.forEach(b => { if (b) { W = Math.max(W, b.x + b.w); H = Math.max(H, b.y + b.h); } });
  svg.setAttribute("width", W + 80); svg.setAttribute("height", H + 80);
  let inner = `<defs><marker id="pgArrow" markerWidth="8" markerHeight="8" refX="5" refY="4" orient="auto"><path d="M1 1L5 4L1 7" fill="none" stroke="var(--border-strong,#94a3b8)" stroke-width="1.4"/></marker></defs>`;
  const mids = [];
  for (let i = 0; i < boxes.length - 1; i++) {
    const a = boxes[i], c = boxes[i + 1]; if (!a || !c) continue;
    const x1 = a.x + a.w / 2, y1 = a.y + a.h, x2 = c.x + c.w / 2, y2 = c.y, k = Math.max(28, Math.abs(y2 - y1) / 2);
    const d = `M${x1} ${y1} C ${x1} ${y1 + k} ${x2} ${y2 - k} ${x2} ${y2}`;
    inner += `<path class="edgehit" data-i="${i}" d="${d}"/><path class="edgeline" d="${d}" marker-end="url(#pgArrow)"/>`;
    mids.push({i, x: (x1 + x2) / 2, y: (y1 + y2) / 2, x1, y1, x2, y2, a: flow[i], c: flow[i + 1]});
  }
  svg.innerHTML = inner;
  svg.querySelectorAll(".edgehit").forEach(pp => pp.onclick = e => pgInsertAt(+pp.dataset.i, e));
  const handle = (x, y, cls, pin, rewire) => { const h = document.createElement("div"); h.className = "edgeend " + cls; h.style.left = x + "px"; h.style.top = y + "px"; h.title = t("pgReroute"); h.onpointerdown = e => pgEdgeEndDrag(e, pin, rewire); plane.append(h); };
  mids.forEach(m => {
    const b = document.createElement("button"); b.className = "edgeadd"; b.textContent = "+"; b.title = t("pgInsert"); b.style.left = m.x + "px"; b.style.top = m.y + "px"; b.onclick = e => pgInsertAt(m.i, e); plane.append(b);
    // endpoint handles: drag the source end (pinned to target) or the target end (pinned to source) onto another node
    handle(m.x1, m.y1, "src", {x: m.x2, y: m.y2}, mId => pgConnect(mId, m.c.id));
    handle(m.x2, m.y2, "dst", {x: m.x1, y: m.y1}, mId => pgConnect(m.a.id, mId));
  });
}
function pgRenderFlow(){
  const plane = $("#pgFlow"); if (!plane) return;
  pgLibLabel(); pgUndoBtns();
  document.querySelectorAll("#pgFmt button").forEach(b => b.classList.toggle("on", b.dataset.f === pgFmt));
  if (!flow.length) { plane.classList.add("empty"); plane.style.transform = ""; plane.innerHTML = `<div class="pgempty">${ic("flow")}<div style="margin-top:8px"><b>${t("pgEmptyT")}</b></div>${t("pgEmptyS")}</div>`; paintIcons(plane); pgCode(); return; }
  plane.classList.remove("empty");
  ensurePositions();
  plane.innerHTML = `<svg class="pgedges" id="pgEdges"></svg>`;
  flow.forEach(n => { const el = pgNodeEl(n, flow, false); el.id = "pgn_" + n.id; plane.append(el); });
  plane.style.transform = `translate(${pgPan.x}px, ${pgPan.y}px) scale(${pgPan.z})`;
  paintIcons(plane); requestAnimationFrame(pgDrawEdges); pgCode();
}
function pgAddMenu(anchor, pick){
  const m = document.createElement("div"); m.className = "pgaddmenu";
  m.innerHTML = PG_GROUPS.map(([g, types]) => `<h5 style="margin:6px 8px 2px;font-size:10px;text-transform:uppercase;color:var(--mut)">${t(g)}</h5>` +
    types.map(ty => `<button class="palbtn" data-add="${ty}" style="--nc:var(${PG[ty].c})"><span class="nd">${ic(PG[ty].i)}</span>${t("n_" + ty)}</button>`).join("")).join("");
  if (!pgPopup(m, anchor)) return;
  m.querySelectorAll("[data-add]").forEach(b => b.onclick = () => { pick(b.dataset.add); m.remove(); });
}
// Right card = function list; clicking one appends it to the flow.
const PG_DESC = {tap:"n_tapD", longpress:"n_longpressD", doubletap:"n_doubletapD", text:"n_textD", key:"n_keyD",
  swipe:"n_swipeD", scroll:"n_scrollD", launch:"n_launchD", screenshot:"n_shotD",
  wait:"n_waitD", gone:"n_goneD", sleep:"n_sleepD", iff:"n_iffD", repeat:"n_repeatD", comment:"n_commentD"};
// Installed apps for the "Open app" picker (name + logo, pulled from the phone).
let pgAppList = [], pgAppsLoaded = false, pgLabels = {}, pgLblP = null;
async function pgLoadApps(){
  if (!serial()) return;
  pgAppsLoaded = true;
  try {
    const r = await api("/api/apps", {serial: serial(), kind: "all"}); noteVc(r.apps);
    pgAppList = r.apps.slice().sort((a, b) => (!a.launchable - !b.launchable) || a.package.localeCompare(b.package));
    pgLblP = pgFetchLabels(pgAppList.filter(a => a.launchable).map(a => a.package));  // names for the launchable ones up front
  } catch (e) { pgAppsLoaded = false; }
}
// Resolves true when every key got filled (a miss -> pkg itself, so it isn't refetched); false after a failed request,
// which leaves the keys unset and pauses lookups for 15s so a transient adb error isn't cached for the whole session.
let pgLblFailAt = 0;
async function pgFetchLabels(pkgs){
  pkgs = pkgs.filter(p => !(p in pgLabels)); if (!pkgs.length) return true;
  if (Date.now() - pgLblFailAt < 15000) return false;
  const real = pkgs.filter(p => /^[\w.]+$/.test(p));  // {{col}} / odd text: nothing to look up
  if (real.length) try { Object.assign(pgLabels, await api("/api/applabels", {serial: serial(), pkgs: real.join(",")})); } catch (e) { pgLblFailAt = Date.now(); return false; }
  for (const p of pkgs) if (!(p in pgLabels)) pgLabels[p] = p;
  return true;
}
const pgAppIcon = pkg => noIcon.has(pkg) ? `<span class="appAv ddicon" style="background:${tileBg(pkg)}">${ic("applogo")}</span>`
  : `<img class="appAv imgav ddicon" alt="" loading="lazy" src="${iconUrl(pkg)}" data-pkg="${esc(pkg)}" onerror="iconFail(this,this.dataset.pkg)">`;
// Custom app picker dropdown: searchable list of apps with logo + name + package.
// free = Enter takes the typed text as the package (any package, or a {{col}} placeholder for data-driven flows)
function appPicker(anchor, onPick, free){
  document.querySelector(".appddpanel")?.remove();
  const m = document.createElement("div"); m.className = "appddpanel";
  m.innerHTML = `<input class="inp sm" id="appddq" placeholder="${esc(free ? t("pgAppSearchFree", {v: "{{kolom}}"}) : t("pgAppSearch"))}" autocomplete="off"><div class="appddlist" id="appddlist"></div>`;
  document.body.append(m);
  const listEl = m.querySelector("#appddlist"); let q = "";
  function rows(){
    const items = pgAppList.filter(a => { const s = ((pgLabels[a.package] || "") + " " + a.package).toLowerCase(); return !q || s.includes(q); });
    listEl.innerHTML = items.length ? items.slice(0, 300).map(a =>
      `<button class="appddrow" data-p="${esc(a.package)}">${pgAppIcon(a.package)}<span class="ddi"><b>${esc(pgLabels[a.package] || a.package)}</b><small>${esc(a.package)}</small></span>${a.launchable ? '<span class="ddstar">★</span>' : ""}</button>`).join("")
      : `<div class="pgtip">${t(pgAppList.length ? "appNone" : "appListLoad")}</div>`;
    listEl.querySelectorAll("[data-p]").forEach(b => b.onclick = () => { onPick(b.dataset.p); m.remove(); });
    const need = items.slice(0, 40).map(a => a.package).filter(p => !(p in pgLabels));
    if (need.length) pgFetchLabels(need).then(ok => { if (ok && document.body.contains(m)) rows(); });
  }
  (pgAppList.length ? Promise.resolve() : pgLoadApps()).then(rows);
  m.querySelector("#appddq").oninput = e => { q = e.target.value.toLowerCase(); rows(); };
  if (free) m.querySelector("#appddq").onkeydown = e => { const v = e.target.value.trim(); if (e.key === "Enter" && v) { e.preventDefault(); onPick(v); m.remove(); } };
  const r = anchor.getBoundingClientRect(); m.style.left = Math.min(r.left, innerWidth - 320) + "px"; m.style.top = Math.min(r.bottom + 4, innerHeight - 360) + "px";
  m.querySelector("#appddq").focus();
  setTimeout(() => document.addEventListener("click", function h(e){ if (!m.contains(e.target) && !anchor.contains(e.target)) { m.remove(); document.removeEventListener("click", h); } }), 0);
}
// Activity picker for the "Open app" node: lists the chosen package's activities + cross-app search (Shortcut-Maker style).
function activityPicker(anchor, node){
  document.querySelector(".appddpanel")?.remove();
  const m = document.createElement("div"); m.className = "appddpanel";
  m.innerHTML = `<input class="inp sm" id="actddq" placeholder="${t("pgActSearch")}" autocomplete="off"><div class="appddlist" id="actddlist"></div>`;
  document.body.append(m);
  const listEl = m.querySelector("#actddlist"); let q = "", pkgActs = null, timer = null;
  const pick = (pkg, act) => { pgSnap(); if (pkg) node.pkg = pkg; node.activity = act; pgSave(); pgRenderFlow(); m.remove(); };
  const wire = () => {
    listEl.querySelectorAll("[data-a]").forEach(b => b.onclick = () => pick(b.dataset.p, b.dataset.a));
    const l = listEl.querySelector("[data-launch]"); if (l) l.onclick = () => pick(node.pkg, "");
  };
  function showPkg(){
    if (!node.pkg) return listEl.innerHTML = `<div class="pgtip">${t("pgPkgPh")}</div>`;
    if (!pkgActs) return listEl.innerHTML = `<div class="actLoad"><i class="spin"></i>${t("appActSearching")}</div>`;
    listEl.innerHTML = `<button class="appddrow" data-launch="1"><span class="ddi"><b>${t("pgActLauncher")}</b></span></button>` +
      pkgActs.map(a => `<button class="appddrow" data-p="${esc(node.pkg)}" data-a="${esc(a.name)}"><span class="ddi"><b>${esc(a.name.startsWith(node.pkg) ? a.name.slice(node.pkg.length).replace(/^\./, "") : a.name)}</b><small>${esc(a.name)}</small></span>${a.launcher ? '<span class="ddstar">★</span>' : ""}</button>`).join("");
    wire();
  }
  function showSearch(groups){
    if (!groups) return listEl.innerHTML = `<div class="actLoad"><i class="spin"></i>${t("appActSearching")}</div>`;
    if (!groups.length) return listEl.innerHTML = `<div class="pgtip">${t("appActNone")}</div>`;
    listEl.innerHTML = groups.map(g => `<div class="ddgrp">${pgAppIcon(g.package)}<span class="ddgt"><b>${esc(g.label)}</b><small>${esc(g.package)}</small></span></div>` +
      g.activities.map(a => `<button class="appddrow" data-p="${esc(g.package)}" data-a="${esc(a.name)}"><span class="ddi"><b>${esc(a.label || a.name.split(".").pop())}</b><small>${esc(a.name)}</small></span></button>`).join("")).join("");
    wire();
  }
  async function loadPkg(){
    showPkg(); if (!node.pkg) return;
    try { const d = await api("/api/appacts", {serial: serial(), pkg: node.pkg}); pkgActs = d.activities || []; } catch (e) { pkgActs = []; }  // appacts: manifest only, no full APK pull
    if (!q) showPkg();
  }
  async function search(){
    const dev = serial(), cur = q; showSearch(null);
    try { const r = await api("/api/searchact", {serial: dev, q: cur, kind: "all"}); if (q === cur) showSearch(r.groups); }
    catch (e) { if (q === cur) showSearch([]); }
  }
  m.querySelector("#actddq").oninput = e => { q = e.target.value.trim(); clearTimeout(timer); if (q.length < 2) return showPkg(); timer = setTimeout(search, 300); };
  loadPkg();
  const r = anchor.getBoundingClientRect(); m.style.left = Math.min(r.left, innerWidth - 320) + "px"; m.style.top = Math.min(r.bottom + 4, innerHeight - 380) + "px";
  m.querySelector("#actddq").focus();
  setTimeout(() => document.addEventListener("click", function h(e){ if (!m.contains(e.target) && !anchor.contains(e.target)) { m.remove(); document.removeEventListener("click", h); } }), 0);
}
function pgRenderPalette(){
  const box = $("#pgPalette"); if (!box) return;
  box.innerHTML = PG_GROUPS.map(([g, types]) => `<h5>${t(g)}</h5>` + types.map(ty =>
    `<button class="palbtn" data-add="${ty}" style="--nc:var(${PG[ty].c})"><span class="nd">${ic(PG[ty].i)}</span><span><b>${t("n_" + ty)}</b><small>${t(PG_DESC[ty])}</small></span></button>`).join("")).join("");
  paintIcons(box);
  box.querySelectorAll("[data-add]").forEach(b => b.onclick = () => {
    pgSnap(); const n = pgMake(b.dataset.add); flow.push(n); pgOpen.add(n.id); pgSave(); pgRenderFlow();
    $("#pgFlow").querySelector(".fnode:last-of-type")?.scrollIntoView({block: "nearest"});
  });
}
// Grab a step straight from the phone: click an element on screen -> add a node (type from the dropdown) with its selector.
let pgGrabOn = false;
function pgGrabEl(n, type = $("#pgGrabType").value){  // type given = from the element context menu
  const node = pgMake(type), b = bestSel(n);
  if (node.sel) Object.assign(node.sel, b);
  pgSnap(); flow.push(node); pgOpen.add(node.id); pgSave(); pgRenderFlow();
  sel = n; draw();
  toast(b.val === n.xpathAbs ? "＋ " + t("n_" + type) + " · " + t("pgFragile") : "＋ " + t("n_" + type) + ": " + b.val);
}

// turn the inspector's selected element into a Playground selector that matches ONLY it on this screen:
// 1) a readable resource-id / content-desc / text that is unique, 2) the inspector's best unique non-absolute XPath
// (id+text combo, parent-anchored path, or "(xp)[k]"), 3) last resort the absolute XPath (fragile; callers warn).
function bestSel(n){
  if (!n) return null;
  const a = n.attrs, uniq = (k, v) => flat.filter(m => m.attrs[k] === v).length === 1;
  for (const [by, k] of [["rid", "resource-id"], ["desc", "content-desc"], ["text", "text"]])
    if (a[k] && uniq(k, a[k])) return {by, val: a[k], contains: false};
  let c = null; try { c = selectors(n).find(x => x.count === 1 && !x.abs); } catch (e) {}
  return {by: "xpath", val: c ? c.xp : n.xpathAbs, contains: false};
}

// Playground lives in the right panel; the phone (left) and UI tree (middle) are the normal workspace.
$("#btnPlay").onclick = () => { if (!serial() && $("#main").hidden) return toast(t("noDev")); setView(view === "play" ? "el" : "play"); };
$("#pgGrabBtn").onclick = () => { pgGrabOn = !pgGrabOn; $("#pgGrabBtn").classList.toggle("on", pgGrabOn); if (pgGrabOn && control) setMode("inspect"); toast(pgGrabOn ? t("pgGrabOn") : t("pgGrabOff")); };
// ---- canvas pan & zoom ----
function pgApplyPan(){ const p = $("#pgFlow"); if (p) p.style.transform = `translate(${pgPan.x}px, ${pgPan.y}px) scale(${pgPan.z})`; pgSavePan(); }
function pgZoom(factor, cx, cy){
  const vp = $("#flowPane .scroll"); if (!vp) return; const r = vp.getBoundingClientRect();
  cx = (cx ?? r.width / 2); cy = (cy ?? r.height / 2);
  const z = Math.min(2, Math.max(0.3, pgPan.z * factor));
  pgPan.x = cx - (cx - pgPan.x) * (z / pgPan.z); pgPan.y = cy - (cy - pgPan.y) * (z / pgPan.z); pgPan.z = z; pgApplyPan();
}
function pgFit(){
  if (!flow.length) { pgPan = {x: 24, y: 24, z: 1}; return pgApplyPan(); }
  let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
  flow.forEach(n => { const el = document.getElementById("pgn_" + n.id); const w = el ? el.offsetWidth : 240, h = el ? el.offsetHeight : 80; x0 = Math.min(x0, n.x); y0 = Math.min(y0, n.y); x1 = Math.max(x1, n.x + w); y1 = Math.max(y1, n.y + h); });
  const vp = $("#flowPane .scroll").getBoundingClientRect(), pad = 30;
  const z = Math.min(1.2, Math.max(0.3, Math.min((vp.width - pad * 2) / (x1 - x0 || 1), (vp.height - pad * 2) / (y1 - y0 || 1))));
  pgPan = {z, x: pad - x0 * z, y: pad - y0 * z}; pgApplyPan();
}
(function pgCanvasInit(){
  const vp = $("#flowPane .scroll"); if (!vp) return;
  vp.addEventListener("pointerdown", e => {
    if (e.target.closest(".fnode") || e.target.closest(".addhere")) return;  // panning only on empty canvas
    if (pgSelId) { pgSelId = null; vp.querySelectorAll(".fnode.sel").forEach(x => x.classList.remove("sel")); }
    e.preventDefault(); const sx = e.clientX, sy = e.clientY, ox = pgPan.x, oy = pgPan.y; vp.classList.add("panning");
    const mv = ev => { pgPan.x = ox + (ev.clientX - sx); pgPan.y = oy + (ev.clientY - sy); pgApplyPan(); };
    const up = () => { removeEventListener("pointermove", mv); removeEventListener("pointerup", up); vp.classList.remove("panning"); };
    addEventListener("pointermove", mv); addEventListener("pointerup", up);
  });
  vp.addEventListener("wheel", e => { if (!flow.length) return; e.preventDefault(); const r = vp.getBoundingClientRect(); pgZoom(e.deltaY < 0 ? 1.12 : 0.89, e.clientX - r.left, e.clientY - r.top); }, {passive: false});
  document.querySelectorAll("#pgZoom button").forEach(b => b.onclick = () => b.dataset.z === "fit" ? pgFit() : pgZoom(b.dataset.z === "in" ? 1.2 : 0.83));
})();
$("#pgRun").onclick = () => pgRunFlow();
// ponytail: the client stops at once (abort + early sleep exit); a step already sent to the server may still finish there.
$("#pgStop").onclick = () => { pgStop = true; pgAbort?.abort(); toast(t("pgStopping")); };
document.querySelectorAll("#pgFmt button").forEach(b => b.onclick = () => { pgFmt = b.dataset.f; store.set("pgFmt", pgFmt); pgRenderFlow(); });
$("#pgCopy").onclick = () => copy(pgExport());
$("#pgDl").onclick = () => {  // download ALWAYS exports JSON (flow + data) — the only re-importable format, so saved/shared files round-trip. Copy/preview still follow the Py/MCP/JSON toggle.
  const a = document.createElement("a"), base = pgCurE().name.replace(/[\\/:*?"<>|]+/g, "").trim() || "inceptor-flow";
  a.href = URL.createObjectURL(new Blob([pgJson()], {type: "application/json"})); a.download = base + ".json"; a.click(); URL.revokeObjectURL(a.href);
  toast(t("pgDownloaded"));
};
$("#pgImport").onclick = () => $("#pgFile").click();
$("#pgFile").onchange = e => {
  const f = e.target.files[0]; if (!f) return;
  const r = new FileReader();
  r.onload = () => {
    const txt = String(r.result).replace(/^﻿/, "").trim();
    let j; try { j = JSON.parse(txt); } catch (x) { return toast(t("pgImportBad")); }  // Py/MCP exports are code, not re-importable — only the JSON format is
    const nf = Array.isArray(j) ? j : j && j.flow;
    if (!Array.isArray(nf)) return toast(t("pgImportBad"));
    const nodes = pgNorm(nf), lost = pgRawCount(nf) - pgCountNodes(nodes);
    if (nf.length && !nodes.length) return toast(t("pgImportBad"));
    if (pgRunning) return toast(t("pgBusy"));
    // never overwrites: every import becomes its own flow, named after the file (with its own data, or none)
    const name = pgUniqName(f.name.replace(/\.json$/i, "").trim() || t("pgFlowN", {n: pgLib.flows.length + 1}));
    pgAddFlow(name, nodes, pgNormData(Array.isArray(j) ? null : j.data));
    toast(t("pgImportedAs", {name}) + (lost > 0 ? " · " + t("pgImportDrop", {n: lost}) : ""));
  };
  r.readAsText(f); e.target.value = "";
};
$("#pgDataBtn").onclick = pgOpenData;
$("#pgArrange").onclick = pgArrange;
$("#pgUndo").onclick = pgUndo;
$("#pgRedo").onclick = pgRedo;
$("#pgLibBtn").onclick = e => pgLibMenu(e.currentTarget);
// Playground shortcuts (only while it's shown, never while typing in a field or a dialog is open)
document.addEventListener("keydown", e => {
  if (view !== "play" || document.querySelector("dialog[open]") || typing(e.target)) return;
  const k = e.key.toLowerCase(), mod = e.ctrlKey || e.metaKey;
  if (!mod && kbdHot()) return;  // Control mode + pointer on the screen: plain keys belong to the device
  if (mod && k === "z") { e.preventDefault(); e.shiftKey ? pgRedo() : pgUndo(); }
  else if (mod && k === "y") { e.preventDefault(); pgRedo(); }
  else if (mod && k === "d" && pgSelId) { e.preventDefault(); pgDupNode(pgSelId); }
  else if (!mod && (k === "delete" || k === "backspace") && pgSelId) { e.preventDefault(); pgDelNode(pgSelId); }
  else if (!mod && k === "escape" && pgSelId) { pgSelId = null; pgRenderFlow(); }
});
$("#pgLogClear").onclick = e => { e.preventDefault(); e.stopPropagation(); pgLog = []; pgRenderLog(); };

// ================= Save screenshot · screen recording · device info · logcat · command palette =================
const fmtBytes = b => b == null ? "—" : b >= 1073741824 ? (b / 1073741824).toFixed(1) + " GB" : (b / 1048576).toFixed(b < 10485760 ? 1 : 0) + " MB";
const stamp = (d = new Date()) => { const p = n => String(n).padStart(2, "0"); return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}-${p(d.getHours())}${p(d.getMinutes())}${p(d.getSeconds())}` };
const devName = () => (devices.find(x => x.serial === serial())?.model || serial() || "device").replace(/[^\w.-]+/g, "_");
// same-origin link download; an empty name lets the server's Content-Disposition filename win
function saveAs(href, name){ const a = document.createElement("a"); a.href = href; a.download = name || ""; document.body.append(a); a.click(); a.remove() }

// ---------- save screenshot (PNG, timestamped) ----------
function saveShot(){
  const dev = serial(); if (!dev) return toast(t("noDev"));
  withSpin($("#btnShotSave"), async () => {
    const r = await fetch("/api/screenshot?" + new URLSearchParams({serial: dev, _: Date.now()}));
    if (!r.ok) { let m = r.statusText; try { m = (await r.json()).error || m } catch {} throw new Error(m) }
    const name = `inceptor-${devName()}-${stamp()}.png`, u = URL.createObjectURL(await r.blob());
    saveAs(u, name); setTimeout(() => URL.revokeObjectURL(u), 5000); toast(t("shotSaved", {f: name}));
  });
}
$("#btnShotSave").onclick = saveShot;

// ---------- screen recording (device-side screenrecord, max 180s, downloaded as MP4) ----------
let srec = null, srecT = 0;  // srec = {serial, t0, n, stopping} while recording
const mmss = s => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
function srecUI(){
  const b = $("#btnSrec"), on = !!srec;
  b.classList.toggle("on", on); b.classList.toggle("icon", !on); b.setAttribute("aria-pressed", on);
  b.title = t(on ? "srecStopHint" : "srecHint"); b.setAttribute("aria-label", b.title);
  if (!on) $("#srecLbl").textContent = "";
}
function srecBegin(dev, elapsed){
  srec = {serial: dev, t0: Date.now() - (elapsed || 0) * 1000, n: 0}; srecUI(); srecTick();
  clearInterval(srecT); srecT = setInterval(srecTick, 1000);
}
function srecEnd(){ srec = null; clearInterval(srecT); srecUI() }
function srecTick(){
  const my = srec; if (!my) return;
  $("#srecLbl").textContent = mmss(Math.min(180, (Date.now() - my.t0) / 1000)) + " / 3:00";
  if (++my.n % 2) return;  // every 2s ask the server whether it hit the time limit (or died)
  api("/api/screenrec/status", {serial: my.serial}).then(s => {
    if (srec !== my || my.stopping || s.recording) return;
    srecEnd();
    if (s.ready) { saveAs("/api/screenrec/file?" + new URLSearchParams({serial: my.serial})); toast(t("srecLimit")) }
    else toast(t("err") + ": " + (s.error || t("srecLost")));
  }).catch(() => {});
}
function srecToggle(){
  const b = $("#btnSrec");
  if (srec) return withSpin(b, async () => {
    const my = srec; my.stopping = true; toast(t("srecSaving"));
    try { const r = await api("/api/screenrec/stop", {serial: my.serial}); saveAs("/api/screenrec/file?" + new URLSearchParams({serial: my.serial})); toast(t("srecDone") + ` (${fmtBytes(r.size)})`) }
    finally { srecEnd() }  // a failed stop still ends the recording on the server (it kills a stuck screenrecord)
  });
  const dev = serial(); if (!dev) return toast(t("noDev"));
  return withSpin(b, async () => { await api("/api/screenrec/start", {serial: dev, secs: 180}); srecBegin(dev, 0); toast("● " + t("srecOn")) });
}
// page reloaded while a recording runs -> pick its timer back up
function srecSync(){ const dev = serial(); dev && !srec && api("/api/screenrec/status", {serial: dev}).then(s => s.recording && !srec && srecBegin(dev, s.elapsed)).catch(() => {}) }
$("#btnSrec").onclick = srecToggle;

// ---------- device info card ----------
let infoData = null, infoErr = "";
function infoOpen(){ const d = $("#dlgInfo"); if (!d.open) d.showModal(); infoLoad() }
async function infoLoad(){
  const dev = serial(); infoErr = "";
  if (infoData?.serial !== dev) infoData = null;
  if (!dev) { infoErr = t("noDev"); return infoRender() }
  infoRender(true);
  await withSpin($("#infoRef"), async () => {
    try { const r = await api("/api/devinfo", {serial: dev}); if (dev === serial()) infoData = r }
    catch (e) { infoErr = e.message }
  });
  infoRender();
}
function infoRender(busy){
  const box = $("#infoBody"), d = infoData;
  if (!d) { box.innerHTML = busy ? `<div class="emuload"><i class="spin"></i></div>` : `<div class="emuempty">${esc(infoErr || "—")}</div>`; return }
  const b = d.battery || {}, v = x => x == null || x === "" ? null : String(x);
  const bk = b.status ? "bat_" + String(b.status).replace(/\W+/g, "_") : "", bst = bk && I18N[lang][bk] ? t(bk) : b.status;
  const up = d.uptime == null ? null : d.uptime >= 86400 ? t("upD", {d: Math.floor(d.uptime / 86400), h: Math.floor(d.uptime % 86400 / 3600)})
    : t("upH", {h: Math.floor(d.uptime / 3600), m: Math.floor(d.uptime % 3600 / 60)});
  const mem = m => m?.total ? t("infoFree", {f: fmtBytes(m.free), t: fmtBytes(m.total)}) : null;
  const used = m => m?.total ? Math.round(100 * (1 - m.free / m.total)) : null;
  // tile: label, value (also what gets copied), optional meter % (+ colour class)
  const tile = (k, val, pct, cls = "") => `<div class="itile" ${val ? `data-copy="${esc(val)}" tabindex="0" role="button" title="${esc(t("copyS"))}"` : ""}>
    <span>${esc(k)}</span><b>${esc(val || "—")}</b>${pct != null ? `<i class="meter ${cls}"><i style="width:${Math.max(0, Math.min(100, pct))}%"></i></i>` : ""}</div>`;
  const name = [d.brand, d.model].filter(Boolean).join(" ").replace(/^(\S+) \1\b/i, "$1");
  const lv = b.level;
  box.innerHTML = (infoErr ? `<div class="emumsg bad" role="alert">${esc(t("err") + ": " + infoErr)}</div>` : "") + `<div class="ihero" data-copy="${esc(name || d.serial)}" tabindex="0" role="button">${ic("phone")}<div><b>${esc(name || d.serial)}</b>
      <small>${esc([d.manufacturer && d.manufacturer !== d.brand ? d.manufacturer : "", d.serial].filter(Boolean).join(" · "))}</small></div></div>
    <div class="igrid">
      ${tile(t("infoAndroid"), d.android ? `Android ${d.android}${d.sdk ? ` · SDK ${d.sdk}` : ""}` : null)}
      ${tile(t("infoAbi"), v(d.abi))}
      ${tile(t("infoScreen"), d.resolution ? d.resolution + (d.density ? ` · ${d.density} dpi` : "") : null)}
      ${tile(t("infoBatt"), lv == null ? null : [lv + "%", bst, b.temp != null ? b.temp + "°C" : ""].filter(Boolean).join(" · "), lv, lv < 20 ? "bad" : lv < 50 ? "warn" : "ok")}
      ${tile(t("infoIp"), v(d.ip))}
      ${tile(t("infoUp"), up)}
      ${tile(t("infoStore"), mem(d.storage), used(d.storage), used(d.storage) > 90 ? "bad" : "")}
      ${tile(t("infoRam"), mem(d.ram), used(d.ram), used(d.ram) > 90 ? "bad" : "")}
    </div>`;
  paintIcons(box);
  box.querySelectorAll("[data-copy]").forEach(e => e.onclick = () => copy(e.dataset.copy));
}
$("#infoRef").onclick = infoLoad;
$("#dpInfo").onclick = () => { devPop(false); $("#devBtn").focus(); infoOpen() };  // dialog returns focus to the picker button, not the hidden popover

// ---------- logcat viewer (right-panel tab; polls every 1.5s only while shown, visible and not paused) ----------
const LOG_MAX = 2000;
let logT = 0, logBusy = false, logWait = false, logAgain = false, logPaused = false, logLast = "", logSig = "", logStick = true, logPkgSel = "", logNoRunPkg = "";
const logKey = r => `${r.time}|${r.pid}|${r.tid}|${r.tag}|${r.msg}`;
const logActive = () => view === "log" && !document.hidden && !logPaused && !!serial();
const fgPkg = () => (activity || "").split("/")[0] || appInfo?.component?.packageName || appInfo?.app?.packageName || "";
$("#logLv").value = store.get("logLv") || "V";
function logMeta(){
  const n = $("#logBody").childElementCount;
  $("#logCnt").textContent = t("logRows", {n}) + (logPaused ? " · " + t("logPaused") : "");
  const p = $("#logPkg"); p.hidden = !$("#logCur").checked || !logPkgSel; p.textContent = logPkgSel;
  const b = $("#logPause"); b.classList.toggle("on", logPaused); b.setAttribute("aria-pressed", logPaused);
  b.title = t(logPaused ? "logResume" : "logPause"); b.setAttribute("aria-label", b.title);
  b.querySelector("svg").dataset.ic = logPaused ? "play" : "pause"; paintIcons(b);
  const note = !serial() ? t("noDev") : n ? "" : $("#logCur").checked && !logPkgSel ? t("logNoPkg") : logNoRunPkg ? t("logNoRun", {p: logNoRunPkg}) : logWait ? "" : $("#logQ").value.trim() || $("#logLv").value !== "V" ? t("logNoMatch") : t("logEmpty");
  $("#logNote").hidden = !note; $("#logNote").textContent = note;
}
function logReset(){ $("#logBody").innerHTML = ""; logLast = ""; logNoRunPkg = ""; logStick = true; $("#logLatest").hidden = true; logWait = true; logMeta() }
function logKick(){ logSig = ""; if (logBusy) logAgain = true; else logPoll() }
async function logPoll(){
  clearTimeout(logT); logT = 0;
  if (!logActive()) return logMeta();
  if (logBusy) { logAgain = true; return }
  const dev = serial(), level = $("#logLv").value, grep = $("#logQ").value.trim(), pkg = $("#logCur").checked ? logPkgSel : "";
  const sig = [dev, level, grep, $("#logCur").checked, pkg].join("\n");
  if (sig !== logSig) { logSig = sig; logReset() }
  if ($("#logCur").checked && !pkg) { logWait = false; return logMeta() }  // waits for a package (checkbox / chip click picks one)
  logBusy = true;
  try {
    const r = await api("/api/logcat", {serial: dev, n: logLast ? 400 : 800, level, grep, pkg});
    if (sig === logSig) { logNoRunPkg = pkg && r.pid == null ? pkg : ""; logAppend(r.lines) }
  } catch (e) { $("#logNote").hidden = false; $("#logNote").textContent = t("err") + ": " + e.message }
  finally {
    logBusy = logWait = false;
    if (logActive()) logT = setTimeout(logPoll, logAgain ? 0 : 1500);
    logAgain = false;
  }
}
// Each poll returns the newest N lines: append only what comes after the last line already shown.
function logAppend(lines){
  const body = $("#logBody"), sc = $("#logScroll");
  let i = -1;
  if (logLast) for (let j = lines.length - 1; j >= 0; j--) if (logKey(lines[j]) === logLast) { i = j; break }
  const fresh = lines.slice(i + 1);
  if (fresh.length) {
    const f = document.createDocumentFragment();
    if (logLast && i < 0) { const g = document.createElement("div"); g.className = "lgap"; g.textContent = t("logGap"); f.append(g) }
    for (const r of fresh) {
      const d = document.createElement("div"); d._r = r; d.className = "lg l-" + (r.level || "x");
      if (r.pid) d.title = `pid ${r.pid} · tid ${r.tid}`;
      d.innerHTML = `<span class="lt">${esc((r.time || "").slice(6))}</span><b class="lv">${esc(r.level || "·")}</b><span class="ltag">${esc(r.tag || "")}</span><span class="lm">${esc(r.msg)}</span>`;
      f.append(d);
    }
    body.append(f); logLast = logKey(fresh[fresh.length - 1]);
    // ponytail: bounded DOM by dropping the oldest rows (a scrolled-up view may shift a little when that happens)
    for (let k = body.childElementCount - LOG_MAX; k > 0; k--) body.firstElementChild.remove();
    if (logStick) sc.scrollTop = sc.scrollHeight; else $("#logLatest").hidden = false;
  }
  logWait = false; logMeta();
}
$("#logScroll").addEventListener("scroll", () => {
  const sc = $("#logScroll"); logStick = sc.scrollHeight - sc.scrollTop - sc.clientHeight < 24;
  if (logStick) $("#logLatest").hidden = true;
});
$("#logLatest").onclick = () => { const sc = $("#logScroll"); sc.scrollTop = sc.scrollHeight; logStick = true; $("#logLatest").hidden = true };
let logQT = 0;
$("#logQ").oninput = () => { clearTimeout(logQT); logQT = setTimeout(logKick, 300) };
$("#logQ").onkeydown = e => { if (e.key === "Escape" && $("#logQ").value) { e.preventDefault(); $("#logQ").value = ""; logKick() } };
$("#logLv").onchange = () => { store.set("logLv", $("#logLv").value); logKick() };
$("#logPause").onclick = () => { logPaused = !logPaused; logPaused ? (clearTimeout(logT), logMeta()) : logPoll() };
// "This app only" pins the package on screen right now (following the foreground would lose the log on every app switch)
async function logPickPkg(){
  logPkgSel = fgPkg();
  if (!logPkgSel && serial()) { try { const it = await api("/api/intent", {serial: serial()}); logPkgSel = it.component?.packageName || it.app?.packageName || "" } catch {} }
  logKick();
}
$("#logCur").onchange = () => $("#logCur").checked ? logPickPkg() : logKick();
$("#logPkg").onclick = logPickPkg;
$("#logCopy").onclick = () => {
  const rows = [...$("#logBody").children].filter(d => d._r).map(({_r: r}) => r.time ? `${r.time} ${r.pid} ${r.tid} ${r.level} ${r.tag}: ${r.msg}` : r.msg);
  if (!rows.length) return toast(t("logEmpty"));
  navigator.clipboard.writeText(rows.join("\n")).then(() => toast("✓ " + t("logCopied", {n: rows.length})));
};
function logClear(){
  const dev = serial(); if (!dev) return toast(t("noDev"));
  return withSpin($("#logClear"), async () => { await api("/api/logcat/clear", {serial: dev}); logReset(); toast("✓ " + t("logCleared")) });
}
$("#logClear").onclick = logClear;
document.addEventListener("visibilitychange", () => { if (!document.hidden && view === "log") logPoll() });

// ---------- command palette (Ctrl/Cmd+K) ----------
const isMac = /Mac|iP(hone|ad|od)/.test(navigator.platform || navigator.userAgent);
const palKey = isMac ? "⌘K" : "Ctrl K";
$("#palKbd").textContent = palKey; $("#helpPalKbd").textContent = isMac ? "⌘K" : "Ctrl+K";
let palItems = [], palShown = [], palAct = 0;
const palRecent = () => { try { const r = JSON.parse(store.get("palRecent")); return Array.isArray(r) ? r : [] } catch { return [] } };
// every action in the app; `k` = i18n key whose ID + EN texts are also searchable, `kw` = extra search words
function palCmds(){
  const L = [], add = (id, label, run, o = {}) => L.push({id, label, run, ...o});
  const both = k => (I18N.id[k] || "") + " " + (I18N.en[k] || "");
  const view$ = v => () => setView(v);
  add("dump", t("dump"), () => $("#btnDump").click(), {ic: "camera", kbd: "R", g: "palGScreen", kw: both("dump") + " capture screenshot refresh"});
  add("live", t(streaming ? "cLiveOff" : "cLiveOn"), () => setLive(!streaming), {ic: streaming ? "stop" : "play", g: "palGScreen", kw: "live stream realtime"});
  add("inspect", t("cInspect"), () => setMode("inspect"), {ic: "target", kbd: control ? "M" : "", on: !control, g: "palGScreen", kw: both("cInspect")});
  add("control", t("cControl"), () => setMode("control"), {ic: "hand", kbd: control ? "" : "M", on: control, g: "palGScreen", kw: both("cControl")});
  add("shot", t("saveShot"), saveShot, {ic: "download", g: "palGScreen", kw: both("saveShot") + " png image"});
  add("srec", t(srec ? "cSrecOff" : "cSrecOn"), srecToggle, {ic: "video", g: "palGScreen", kw: both("srec") + " video mp4 screenrecord"});
  add("rec", t(recording ? "cRecOff" : "cRecOn"), () => setRecording(!recording), {ic: "recdot", g: "palGScreen", kw: both("cRecOn") + " recorder"});
  for (const [code, k, i] of [[4, "back", "back"], [3, "home", "home"], [187, "recent", "square"]])
    add("key" + code, t("cKey", {k: t(k)}), () => document.querySelector(`.textbar [data-key="${code}"]`).click(), {ic: i, g: "palGScreen", kw: both(k) + " key button"});
  add("tabEl", t("cTabEl"), view$("el"), {ic: "cursor", g: "palGView", kw: both("cTabEl") + " selector props"});
  add("tabRec", t("cTabRec"), view$("rec"), {ic: "k_list", g: "palGView", kw: both("cTabRec") + " steps export"});
  add("tabApp", t("cTabApp"), view$("app"), {ic: "apps", g: "palGView", kw: both("cTabApp") + " intent"});
  add("tabLog", t("cTabLog"), view$("log"), {ic: "table", g: "palGView", kw: both("cTabLog") + " log"});
  add("logClear", t("cLogClear"), logClear, {ic: "trash", g: "palGView", kw: both("cLogClear") + " logcat"});
  add("play", t("cPlay"), () => setView("play"), {ic: "flow", g: "palGView", kw: both("cPlay") + " flow automation n8n"});
  add("theme", t("theme"), () => $("#btnTheme").click(), {ic: theme === "dark" ? "sun" : "moon", g: "palGView", kw: both("theme") + " dark light"});
  add("lang", t("cLang"), () => $(`#langSeg [data-lang="${lang === "id" ? "en" : "id"}"]`).click(), {ic: "k_web", g: "palGView", kw: both("cLang") + " language bahasa"});
  add("help", t("help"), () => $("#dlgHelp").showModal(), {ic: "help", g: "palGView", kw: both("help") + " shortcuts keyboard"});
  add("info", t("infoT"), infoOpen, {ic: "info", g: "palGDev", kw: both("infoT") + " battery ip android abi ram storage"});
  add("scan", t("scan"), () => $("#btnScan").click(), {ic: "radar", g: "palGDev", kw: both("scan") + " emulator"});
  add("conn", t("cConn"), () => { $("#connPop").open = true; $("#addr").focus() }, {ic: "link", g: "palGDev", kw: both("cConn") + " adb connect wifi"});
  add("devs", t("refreshDevices"), () => $("#btnDevs").click(), {ic: "refresh", g: "palGDev", kw: both("refreshDevices")});
  add("emu", t("cEmu"), () => $("#btnEmu").click(), {ic: "grid", g: "palGDev", kw: both("cEmu") + " mumu ldplayer nox memu bluestacks"});
  add("mcp", t("cMcp"), mcpOpen, {ic: "bot", g: "palGDev", kw: both("cMcp") + " ai claude cursor agent"});
  for (const d of devices) if (d.state === "device" && d.serial !== serial())
    add("dev:" + d.serial, t("cSwitch", {d: (d.model || d.serial) + " · " + d.serial}), () => { $("#dev").value = d.serial; $("#dev").onchange() }, {ic: "phone", g: "palGDev", kw: both("cSwitch") + " " + d.serial});
  add("acts", t("cOpenAct"), () => palActs(""), {ic: "target", g: "palGApp", kw: both("cOpenAct") + " shortcut component"});
  for (const a of pgAppList) if (a.launchable) {
    const nm = appLbl(a.package) || a.package;
    add("app:" + a.package, t("cOpenApp", {a: nm}), () => launchApp(a.package), {ic: "apps", g: "palGApp", app: true, sub: nm !== a.package ? a.package : "", kw: a.package + " open launch buka"});
  }
  return L;
}
// subsequence match: contiguous runs, word starts and early hits score higher; -1 = no match
function fuzzy(q, s){
  s = s.toLowerCase();
  const i = s.indexOf(q);
  if (i >= 0) return 200 - Math.min(i, 60) + (i === 0 || /[\s.:/_\-“(]/.test(s[i - 1]) ? 60 : 0);
  let from = 0, prev = -2, sc = 0;
  for (const c of q) {
    const j = s.indexOf(c, from); if (j < 0) return -1;
    sc += j === prev + 1 ? 6 : (j === 0 || /[\s.:/_\-“(]/.test(s[j - 1])) ? 4 : 0;
    prev = j; from = j + 1;
  }
  return sc;
}
function palScore(it, words){
  let tot = 0;
  for (const w of words) { const a = fuzzy(w, it.label), b = fuzzy(w, it.kw || ""), s = Math.max(a, b * 0.7); if (s < 0) return -1; tot += s }
  return tot;
}
function palRender(){
  const raw = $("#palQ").value.trim(), q = raw.toLowerCase(), rec = palRecent(), box = $("#palList");
  const byId = new Map(palItems.map(x => [x.id, x]));
  let rows = [];
  if (!q) {  // recent first, then every command (apps only show up when searched: there can be hundreds)
    const r = rec.map(id => byId.get(id)).filter(Boolean);
    if (r.length) rows.push({hd: t("palRecent")}, ...r);
    rows.push({hd: t("palAll")}, ...palItems.filter(x => !x.app && !rec.includes(x.id)));
  } else {
    const words = q.split(/\s+/);
    rows = palItems.map(x => ({x, s: palScore(x, words)})).filter(o => o.s >= 0)
      .map(o => ({...o, s: o.s + (rec.includes(o.x.id) ? 40 - rec.indexOf(o.x.id) * 3 : 0) - (o.x.app ? 15 : 0)}))
      .sort((a, b) => b.s - a.s).slice(0, 60).map(o => o.x);
    if (raw.length >= 2) rows.push({id: "actsq", label: t("cOpenActQ", {q: raw}), run: () => palActs(raw), ic: "search", g: "palGApp"});
  }
  palShown = rows.filter(r => !r.hd);
  palAct = Math.max(0, Math.min(palAct, palShown.length - 1));
  let n = -1;
  box.innerHTML = !palShown.length ? `<div class="palempty">${esc(t("palNone", {q: raw}))}</div>` : rows.map(r => r.hd ? `<div class="palhd">${esc(r.hd)}</div>`
    : (n++, `<div class="palit${n === palAct ? " act" : ""}${r.on ? " cur" : ""}" role="option" id="pal_${n}" data-i="${n}" aria-selected="${n === palAct}">
      ${ic(r.ic || "dots")}<span class="pl"><b>${esc(r.label)}</b>${r.sub ? `<small>${esc(r.sub)}</small>` : ""}</span>
      <span class="pg">${esc(t(r.g))}</span>${r.kbd ? `<kbd>${esc(r.kbd)}</kbd>` : ""}</div>`)).join("");
  $("#palQ").setAttribute("aria-activedescendant", palShown.length ? "pal_" + palAct : "");
  const apps = pgAppList.filter(a => a.launchable).length;
  $("#palMeta").textContent = serial() ? (!pgAppList.length && pgAppsLoaded ? t("palAppsLoad") : apps ? t("palAppsN", {n: apps}) : "") : "";
  box.querySelector(".palit.act")?.scrollIntoView({block: "nearest"});
}
function palMove(i){
  if (!palShown.length) return;
  palAct = (i + palShown.length) % palShown.length;
  $("#palList").querySelectorAll(".palit").forEach(e => { const on = +e.dataset.i === palAct; e.classList.toggle("act", on); e.setAttribute("aria-selected", on) });
  $("#palQ").setAttribute("aria-activedescendant", "pal_" + palAct);
  $("#palList .palit.act")?.scrollIntoView({block: "nearest"});
}
function palRun(i){
  const it = palShown[i]; if (!it) return;
  if (it.id !== "actsq") store.set("palRecent", JSON.stringify([it.id, ...palRecent().filter(x => x !== it.id)].slice(0, 8)));
  $("#dlgPal").close();
  setTimeout(it.run);  // after the click finished bubbling (the document click handler would close a popover we just opened)
}
function palRefresh(){ if (!$("#dlgPal").open) return; palItems = palCmds(); palRender() }
function palOpen(){
  const d = $("#dlgPal");
  d.setAttribute("aria-label", t("palHint"));
  palItems = palCmds(); palAct = 0; $("#palQ").value = ""; palRender();
  d.showModal(); $("#palQ").focus();
  if (serial() && !pgAppsLoaded) pgLoadApps().then(() => { palRefresh(); return pgLblP }).then(palRefresh);
}
$("#btnPal").onclick = palOpen;
$("#palQ").oninput = () => { palAct = 0; palRender() };
$("#palQ").onkeydown = e => {
  if (e.key === "ArrowDown" || e.key === "ArrowUp") { e.preventDefault(); palMove(palAct + (e.key === "ArrowDown" ? 1 : -1)) }
  else if (e.key === "PageDown" || e.key === "PageUp") { e.preventDefault(); palMove(Math.max(0, Math.min(palShown.length - 1, palAct + (e.key === "PageDown" ? 8 : -8)))) }
  else if (e.key === "Enter") { e.preventDefault(); palRun(palAct) }
  else if (e.key === "Tab") e.preventDefault();
};
$("#palList").onclick = e => { const r = e.target.closest(".palit"); r && palRun(+r.dataset.i) };
$("#palList").onmousemove = e => { const r = e.target.closest(".palit"); if (r && +r.dataset.i !== palAct) palMove(+r.dataset.i) };
$("#dlgPal").onclick = e => { if (e.target === $("#dlgPal")) $("#dlgPal").close() };  // backdrop click
// Ctrl/Cmd+K works everywhere (also while typing in a field); it toggles the palette but never stacks on another dialog
document.addEventListener("keydown", e => {
  if (!(e.ctrlKey || e.metaKey) || e.altKey || e.shiftKey || e.key.toLowerCase() !== "k") return;
  e.preventDefault(); e.stopPropagation();
  const d = $("#dlgPal");
  if (d.open) d.close(); else if (!document.querySelector("dialog[open]")) palOpen();
}, true);
async function launchApp(pkg){
  const dev = serial(); if (!dev) return toast(t("noDev"));
  try { await api("/api/start", {serial: dev, pkg}); toast(t("opened") + ": " + (appLbl(pkg) || pkg)); if (!streaming) setTimeout(() => dump(), 700) }
  catch (e) { toast(t("err") + ": " + e.message) }
}
// "Open activity…" hands off to the Apps tab's cross-app activity search (Browse mode, query prefilled)
function palActs(q){
  if (appMode !== "browse") { appMode = "browse"; store.set("appMode", appMode) }
  if (appDetail || appDetailBusy) { appDetailTok++; appDetailBusy = false; appDetail = null; appDetailErr = ""; appLog = ""; uninstallArm = null }
  if (q) appQuery = q;
  setView("app");
  if (appQuery.trim().length >= 2) loadActs();
  const si = $("#appSearch"); if (si) { si.focus(); si.setSelectionRange(si.value.length, si.value.length) }
}

// ---------- self-update (compare local git HEAD with GitHub, one-click pull) ----------
async function checkUpdate(){
  try {
    const r = await api("/api/update/check");
    if (!r.available || store.get("updDismiss") === r.latest) return;  // nothing new, or this version was dismissed
    const bar = $("#updBar"); if (!bar) return;
    const title = r.behind ? t("updN", {n: r.behind}) : t("updAvail");
    bar.innerHTML = `<span class="updmsg">${ic("spark")}<b>${title}</b><code>${esc(r.current)} → ${esc(r.latest)}</code></span>
      <a class="btn ghost sm" href="${esc(r.url)}" target="_blank" rel="noopener">${t("updView")}</a>
      <button class="btn pri sm" id="updNow">${ic("download")}${t("updBtn")}</button>
      <button class="x" id="updX" title="${esc(t("updDismiss"))}">×</button>`;
    paintIcons(bar); bar.hidden = false;
    $("#updX").onclick = () => { store.set("updDismiss", r.latest); bar.hidden = true; };
    $("#updNow").onclick = async () => {
      if (r.dirty && !confirm(t("updDirty"))) return;
      const b = $("#updNow"); b.disabled = true; b.textContent = t("updPulling");
      // result stays in the banner (git's message is multi-line; a fading toast would cut it off)
      const fail = m => { b.disabled = false; b.textContent = t("updBtn"); $("#updErr")?.remove();
        b.insertAdjacentHTML("afterend", `<code class="upderr" id="updErr" role="alert" title="${esc(m)}">${esc(t("updFail") + ": " + m.split(/\r?\n/).filter(Boolean).slice(0, 3).join(" · "))}</code>`) };
      try {
        const res = await api("/api/update/pull");
        if (res.ok !== false) { bar.innerHTML = `<span class="updmsg">${ic("check")}<b>${t("updDone", {v: res.current})}</b></span><button class="btn pri sm" id="updReload">${ic("refresh")}${t("updReload")}</button>`; paintIcons(bar); $("#updReload").onclick = () => location.reload(); }
        else fail(res.error || "");
      } catch (e) { fail(e.message); }
    };
  } catch (e) {}
}
$("#pgClear").onclick = () => {
  if (!flow.length) return;
  if (!pgClearArm) { pgClearArm = 1; $("#pgClear").classList.add("danger"); toast(t("pgClearSure")); setTimeout(() => { pgClearArm = 0; $("#pgClear").classList.remove("danger"); }, 4000); return; }
  pgSnap(); flow = []; pgSelId = null; pgClearArm = 0; $("#pgClear").classList.remove("danger"); pgSave(); pgRenderFlow(); toast(t("pgCleared"));
};
let page = "work";
paintIcons(); applyTheme(); applyLang(); pgRenderLog(); checkUpdate(); loadDevices().then(() => { serial() && devices.length === 1 && dump(); srecSync() });
// Landing AI card: the real install command for THIS checkout (python + script paths), not a hard-coded path
mcpLoad().then(ok => ok && ($("#ldMcpCmd").textContent = mcpConf("claudecode").code)).catch(() => {});
// Keyboard for the non-button copy targets (role=button + tabindex): Enter / Space = click
document.addEventListener("keydown", e => {
  if ((e.key === "Enter" || e.key === " ") && e.target.matches?.('[role=button][tabindex]:is([data-copy],[data-cp])')) { e.preventDefault(); e.target.click() }
});
