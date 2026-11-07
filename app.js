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
  loader:'<circle cx="12" cy="12" r="8.5" opacity=".25"/><path d="M20.5 12A8.5 8.5 0 0 0 12 3.5"/>'
};
const ic = n => `<svg class="ic" viewBox="0 0 24 24">${ICONS[n]}</svg>`;
const paintIcons = (root=document) => root.querySelectorAll("svg[data-ic]").forEach(s => { s.setAttribute("viewBox","0 0 24 24"); s.innerHTML = ICONS[s.dataset.ic] });

const I18N = {
  id: {
    deviceHint:"Perangkat aktif", refreshDevices:"Muat ulang daftar perangkat", scan:"Cari Emulator", scanHint:"Cari otomatis emulator yang menyala di PC ini (MuMu, LDPlayer, Nox, MEmu, BlueStacks)",
    connect:"Sambungkan", connectHint:"Masukkan alamat ADB perangkat/emulator. Contoh MuMu: 127.0.0.1:16384 · HP via Wi-Fi: 192.168.1.20:5555", connectBtn:"Hubungkan",
    theme:"Ganti tema terang/gelap", help:"Bantuan & pintasan", screen:"Layar", inspect:"Inspeksi", control:"Kontrol",
    inspectHint:"Klik layar untuk memilih elemen (M)", controlHint:"Klik = tap, seret = swipe langsung ke perangkat (M)",
    dump:"Ambil Layar", dumpHint:"Ambil screenshot + struktur UI terbaru (R)", back:"Kembali", home:"Beranda", recent:"Aplikasi terbaru",
    typeText:"Ketik teks, Enter = kirim ke perangkat", send:"Kirim teks", live:"Live", liveHint:"Layar realtime (stream ~5 fps), struktur UI ikut diperbarui",
    welcome:"Mulai inspeksi UI Android", welcomeSub:"Lihat struktur layar aplikasi & dapatkan selector siap pakai dalam 3 langkah.",
    booting:"Memeriksa perangkat…", capturing:"Mengambil layar & struktur UI…", treeLoading:"Memuat struktur UI…",
    playground:"Playground", pgHint:"Susun alur otomasi langkah demi langkah (seperti n8n)", pgZoomHint:"Perbesar / perkecil / paskan", pgRewire:"Tarik ke node lain untuk menyambung (atas/bawah)", pgInsert:"Sisipkan langkah di sini", pgReroute:"Tarik ujung garis ke node lain", pgRefresh:"Ambil ulang layar", pgNoDev:"Pilih perangkat untuk melihat layarnya di sini", pgTitle:"Alur Otomasi",
    emuMgr:"Emulator", emuHint:"Kelola emulator: buka, tutup, restart, buat, hapus", emuDesc:"Semua emulator yang terpasang di PC ini. Kontrol lewat CLI resmi tiap merek.", emuRefresh:"Segarkan", emuLaunch:"Buka", emuStop:"Tutup", emuRestart:"Restart", emuDelete:"Hapus", emuCreate:"Buat instance", emuRunning:"jalan", emuStopped:"mati", emuNoInst:"Belum ada instance", emuNoCreate:"Buat/hapus instance lewat Multi-Instance Manager (nggak ada CLI-nya)", emuConfirmDel:"Hapus instance \"{name}\"? Nggak bisa dibalikin. Klik Hapus sekali lagi.", emuNamePh:"Nama (opsional)", emuBusy:"Memproses…", emuDone:"Beres: {msg}",
    emuConfig:"Setting device", emuRename:"Ubah nama", emuClone:"Duplikat", emuTpl:"Template", emuTplSave:"Simpan", emuTplNew:"— template baru —", emuTplNone:"Belum ada template", emuApply:"Terapkan ke device ini", emuCfgTitle:"Setting · {name}", emuCfgCaps:"Didukung: {caps}", emuCfgNone:"Merek ini tidak bisa diatur via CLI", emuTplNamePrompt:"Nama template:", emuRenamePrompt:"Nama baru:", emuClonePrompt:"Nama instance baru (opsional):", emuCfgApplied:"Setting diterapkan — restart instance biar efektif", emuTplSaved:"Template \"{name}\" disimpan", emuTplDeleted:"Template dihapus", emuPickTpl:"Pilih dulu template yang mau dihapus", emuAndroidVer:"Versi Android",
    fCpu:"CPU (core)", fMemory:"RAM (MB)", fWidth:"Lebar", fHeight:"Tinggi", fDpi:"DPI", fManufacturer:"Manufacturer", fModel:"Model", fImei:"IMEI", fAndroidid:"Android ID", fMac:"MAC", fPhonenumber:"No. HP", fAutoHint:"isi \"auto\" buat acak",
    pgRun:"Jalankan", pgStop:"Hentikan", pgStopping:"Menghentikan…", pgDone:"Alur selesai", pgFailAt:"Gagal di {t}",
    pgCopy:"Salin", pgImport:"Impor", pgImported:"Alur diimpor", pgPreview:"Pratinjau kode", pgEmpty:"(alur kosong)",
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
    n_tapD:"Ketuk elemen", n_longpressD:"Tekan lama elemen", n_doubletapD:"Ketuk dua kali", n_textD:"Ketik teks ke field", n_keyD:"Tekan tombol sistem", n_swipeD:"Geser dari titik ke titik", n_scrollD:"Geser layar", n_launchD:"Jalankan aplikasi", n_shotD:"Ambil screenshot", pgHold:"Durasi", pgPkgPh:"Pilih aplikasi…", pgAppSearch:"Cari aplikasi…",
    n_waitD:"Tunggu elemen muncul", n_goneD:"Tunggu elemen hilang", n_sleepD:"Jeda beberapa milidetik", n_iffD:"Percabangan: jika ada → lalu/kalau tidak", n_repeatD:"Ulangi langkah N kali", n_commentD:"Catatan (tidak dijalankan)",
    vApp:"Aplikasi", appT:"Aplikasi & Intent", amCur:"Layar ini", amBrowse:"Semua aplikasi",
    ak_user:"Pengguna", ak_system:"Sistem", ak_all:"Semua", appSearchPh:"Cari package…", appListLoad:"Memuat daftar aplikasi…",
    appCount:"{n} aplikasi", appNone:"Tidak ada aplikasi", disabled:"nonaktif", appParse:"Membaca APK (activity, izin)…",
    appBack:"Daftar", appOpen:"Buka", appDisable:"Nonaktifkan", appEnable:"Aktifkan", appUninstall:"Hapus", sure:"Yakin?",
    appLinks:"Deep link", appActsH:"Activity", appActPh:"Cari activity…", appPerms:"Izin", scMake:"Buat shortcut",
    scOk:"Shortcut dibuat", opened:"Dibuka", appNoLog:"(log kosong)", appRefresh:"Baca ulang", appEmptyT:"Membaca aplikasi…", appLoading:"Mengambil intent layar yang sedang terbuka…",
    appAct:"Activity", appLaunch:"Activity launcher", copyJson:"Salin JSON",
    appExtras:"Intent ini membawa extras yang tidak bisa dibaca dari dumpsys — am start/URI di bawah dibuat tanpa extras.",
    mRec:"Merekam", pmT:"Port emulator", pmSum:"{o} terbuka dari {n}", pmOk:"tersambung", pmOpen:"terbuka", pmShut:"tertutup",
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
    searchX:"//*[@text='…']  ·  Enter = hasil berikutnya", vEl:"Elemen", vRec:"Rekaman", steps:"{n} langkah", replay:"Putar ulang", stopReplay:"Hentikan",
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
    kR:"Ambil layar", kM:"Ganti mode Inspeksi / Kontrol", kSlash:"Fokus ke pencarian", kArrows:"Pindah ke elemen sebelum/berikutnya di struktur", kC:"Salin selector terbaik", kEsc:"Batalkan pilihan",
    helpSel:"Tips: pilih selector berlabel “Terbaik” atau “Bagus”. Selector “Rapuh” (XPath absolut) mudah rusak saat tampilan aplikasi berubah. Lebar panel bisa digeser dari garis di antaranya."
  },
  en: {
    deviceHint:"Active device", refreshDevices:"Reload device list", scan:"Find Emulators", scanHint:"Auto-detect running emulators on this PC (MuMu, LDPlayer, Nox, MEmu, BlueStacks)",
    connect:"Connect", connectHint:"Enter the device/emulator ADB address. MuMu: 127.0.0.1:16384 · phone over Wi-Fi: 192.168.1.20:5555", connectBtn:"Connect",
    theme:"Toggle light/dark theme", help:"Help & shortcuts", screen:"Screen", inspect:"Inspect", control:"Control",
    inspectHint:"Click the screen to select an element (M)", controlHint:"Click = tap, drag = swipe on the device (M)",
    dump:"Capture", dumpHint:"Grab a fresh screenshot + UI tree (R)", back:"Back", home:"Home", recent:"Recent apps",
    typeText:"Type text, Enter = send to device", send:"Send text", live:"Live", liveHint:"Realtime screen (~5 fps stream), UI tree keeps refreshing",
    welcome:"Start inspecting Android UI", welcomeSub:"See an app's screen structure & get ready-to-use selectors in 3 steps.",
    booting:"Checking devices…", capturing:"Grabbing screen & UI tree…", treeLoading:"Loading UI tree…",
    playground:"Playground", pgHint:"Build an automation flow step by step (n8n-style)", pgZoomHint:"Zoom out / fit / in", pgRewire:"Drag onto another node to connect (top/bottom)", pgInsert:"Insert a step here", pgReroute:"Drag the line end to another node", pgRefresh:"Recapture screen", pgNoDev:"Pick a device to mirror its screen here", pgTitle:"Automation Flow",
    emuMgr:"Emulators", emuHint:"Manage emulators: open, close, restart, create, delete", emuDesc:"Every emulator installed on this PC. Controlled through each brand's official CLI.", emuRefresh:"Refresh", emuLaunch:"Open", emuStop:"Close", emuRestart:"Restart", emuDelete:"Delete", emuCreate:"Create instance", emuRunning:"running", emuStopped:"stopped", emuNoInst:"No instances yet", emuNoCreate:"Create/delete instances via the Multi-Instance Manager (no CLI)", emuConfirmDel:"Delete instance \"{name}\"? This can't be undone. Click Delete again.", emuNamePh:"Name (optional)", emuBusy:"Working…", emuDone:"Done: {msg}",
    emuConfig:"Device settings", emuRename:"Rename", emuClone:"Clone", emuTpl:"Template", emuTplSave:"Save", emuTplNew:"— new template —", emuTplNone:"No templates yet", emuApply:"Apply to this device", emuCfgTitle:"Settings · {name}", emuCfgCaps:"Supported: {caps}", emuCfgNone:"This brand can't be configured via CLI", emuTplNamePrompt:"Template name:", emuRenamePrompt:"New name:", emuClonePrompt:"New instance name (optional):", emuCfgApplied:"Settings applied — restart the instance to take effect", emuTplSaved:"Template \"{name}\" saved", emuTplDeleted:"Template deleted", emuPickTpl:"Pick a template to delete first", emuAndroidVer:"Android version",
    fCpu:"CPU (cores)", fMemory:"RAM (MB)", fWidth:"Width", fHeight:"Height", fDpi:"DPI", fManufacturer:"Manufacturer", fModel:"Model", fImei:"IMEI", fAndroidid:"Android ID", fMac:"MAC", fPhonenumber:"Phone no.", fAutoHint:'use "auto" to randomize',
    pgRun:"Run", pgStop:"Stop", pgStopping:"Stopping…", pgDone:"Flow finished", pgFailAt:"Failed at {t}",
    pgCopy:"Copy", pgImport:"Import", pgImported:"Flow imported", pgPreview:"Code preview", pgEmpty:"(empty flow)",
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
    n_tapD:"Tap an element", n_longpressD:"Press and hold an element", n_doubletapD:"Tap twice quickly", n_textD:"Type text into a field", n_keyD:"Press a system key", n_swipeD:"Swipe from point to point", n_scrollD:"Scroll the screen", n_launchD:"Launch an app", n_shotD:"Take a screenshot", pgHold:"Duration", pgPkgPh:"Pick an app…", pgAppSearch:"Search apps…",
    n_waitD:"Wait for an element to appear", n_goneD:"Wait until an element is gone", n_sleepD:"Pause for milliseconds", n_iffD:"Branch: if exists → then/else", n_repeatD:"Repeat steps N times", n_commentD:"Note (not executed)",
    vApp:"App", appT:"App & Intent", amCur:"This screen", amBrowse:"All apps",
    ak_user:"User", ak_system:"System", ak_all:"All", appSearchPh:"Search package…", appListLoad:"Loading app list…",
    appCount:"{n} apps", appNone:"No apps", disabled:"disabled", appParse:"Reading APK (activities, permissions)…",
    appBack:"Apps", appOpen:"Open", appDisable:"Disable", appEnable:"Enable", appUninstall:"Uninstall", sure:"Sure?",
    appLinks:"Deep links", appActsH:"Activities", appActPh:"Search activity…", appPerms:"Permissions", scMake:"Make shortcut",
    scOk:"Shortcut created", opened:"Opened", appNoLog:"(empty log)", appRefresh:"Read again", appEmptyT:"Reading app…", appLoading:"Fetching the intent of the current screen…",
    appAct:"Activity", appLaunch:"Launcher activity", copyJson:"Copy JSON",
    appExtras:"This intent carries extras that dumpsys can't show — the am start/URI below are built without them.",
    mRec:"Recording", pmT:"Emulator ports", pmSum:"{o} of {n} open", pmOk:"connected", pmOpen:"open", pmShut:"closed",
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
    searchX:"//*[@text='…']  ·  Enter = next match", vEl:"Element", vRec:"Recording", steps:"{n} steps", replay:"Replay", stopReplay:"Stop",
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
    kR:"Capture", kM:"Toggle Inspect / Control mode", kSlash:"Focus search", kArrows:"Previous / next element in the tree", kC:"Copy best selector", kEsc:"Clear selection",
    helpSel:"Tip: prefer selectors labelled “Best” or “Good”. “Fragile” ones (absolute XPath) break easily when the app layout changes. Drag the lines between panels to resize them."
  }
};
const store = { get:k=>{try{return localStorage.getItem(k)}catch{return null}}, set:(k,v)=>{try{localStorage.setItem(k,v)}catch{}} };
let lang = store.get("lang") || (navigator.language.startsWith("id") ? "id" : "en");
let theme = store.get("theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
let tab = store.get("tab") || "sel";
const t = (k, v={}) => (I18N[lang][k] ?? k).replace(/\{(\w+)\}/g, (_, x) => v[x]);
const $ = s => document.querySelector(s);
let flat = [], root = null, sel = null, hover = null, control = false, scale = 1, devices = [], activity = "", capturedAt = null;
let qMode = "text", xdoc = null, xmap = null, xmatch = new Set(), xlist = [], xi = -1;

function applyLang(){
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(e => e.textContent = t(e.dataset.i18n));
  document.querySelectorAll("[data-i18n-html]").forEach(e => e.innerHTML = t(e.dataset.i18nHtml));  // static strings from I18N only
  renderHow(); $("#lsSrvSt").textContent = t("l2ok",{h:location.host}); adbState(adbErr); waitState(adbErr);
  document.querySelectorAll("[data-i18n-title]").forEach(e => e.title = t(e.dataset.i18nTitle));
  document.querySelectorAll("[data-i18n-ph]").forEach(e => e.placeholder = t(e.dataset.i18nPh));
  document.querySelectorAll("#langSeg button").forEach(b => b.classList.toggle("on", b.dataset.lang === lang));
  fillDevices(devices); sel ? showProps(sel) : emptyProps();
  if (!root) syncStage();
  else if (qMode === "xpath") evalX(); else $("#count").textContent = `${flat.length} ${t("nodes")}`;
  $("#q").placeholder = t(qMode === "xpath" ? "searchX" : "search");
  $("#recLbl").textContent = t(recording ? "recStop" : "rec");
  if (view === "rec") renderRec();
  if (view === "app") renderApp();
  if (view === "play") { pgRenderFlow(); pgRenderPalette(); }
  syncMode();
  footer();
}
function applyTheme(){
  document.documentElement.dataset.theme = theme; readPal();
  $("#btnTheme svg").dataset.ic = theme === "dark" ? "sun" : "moon"; paintIcons($("#btnTheme")); draw();
}
function footer(){
  const d = devices.find(x => x.serial === serial());
  $("#fDev").textContent = d ? `${d.model || d.serial} · ${d.serial}` : t("noDev");
  $("#fAct").textContent = activity;
  $("#fTime").textContent = capturedAt ? t("captured",{t:capturedAt.toLocaleTimeString()}) : "";
}
function toast(m){const e=$("#toast");e.textContent=m;e.classList.add("show");clearTimeout(e._t);e._t=setTimeout(()=>e.classList.remove("show"),1600)}
function copy(s){navigator.clipboard.writeText(s).then(()=>toast("✓ "+t("copied")+": "+(s.length>70?s.slice(0,70)+"…":s)))}
async function api(path, params={}){
  const r = await fetch(path+"?"+new URLSearchParams(params));
  const j = await r.json(); if(!r.ok) throw new Error(j.error); return j;
}
const serial = () => $("#dev").value;

// ---------- resizable columns ----------
for (const k of ["c1","c3"]) { const v = store.get(k); if (v) document.documentElement.style.setProperty("--"+k, v) }
document.querySelectorAll(".gut").forEach(g => g.onpointerdown = e => {
  const col = g.dataset.col, startX = e.clientX, startW = g.dataset.col === "1" ? g.previousElementSibling.offsetWidth : g.nextElementSibling.offsetWidth;
  g.classList.add("drag"); g.setPointerCapture(e.pointerId);
  g.onpointermove = m => {
    const w = Math.max(280, Math.min(innerWidth * .5, startW + (col === "1" ? 1 : -1) * (m.clientX - startX)));
    document.documentElement.style.setProperty("--c"+col, w+"px");
  };
  g.onpointerup = () => { g.classList.remove("drag"); g.onpointermove = null; store.set("c"+col, getComputedStyle(document.documentElement).getPropertyValue("--c"+col)); };
});
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
  $("#devLbl").textContent = cd ? (cd.model || cd.serial) : t("noDev");
  $("#devKind").hidden = !k; if (k) { $("#devKind").textContent = k.n; $("#devKind").className = "ek e-" + k.k }
  if (!$("#devPop").hidden) renderCards();
  $("#lsDev").className = devs.length ? "fail" : "cur";
  const byState = {};  // one row per state: an emulator shows up offline on several ports while booting
  devs.filter(x => x.state !== "device").forEach(x => (byState[x.state] ||= []).push(x.serial));
  $("#ldDevs").innerHTML = Object.entries(byState).map(([st, ss]) =>
    `<div class="ldDev">${ic("phone")}<code>${ss.join(", ").replace(/[<&]/g, "")}</code><b>${st.replace(/[<&]/g, "")}</b><span>${t("dh_" + st) === "dh_" + st ? t("dh_other") : t("dh_" + st)}</span></div>`).join("");
  footer();
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
document.querySelectorAll("#landing pre").forEach(p => { p.title = "Klik untuk salin / click to copy"; p.onclick = () => copy(p.textContent) });
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
    const k = brandOf(d), on = d.state === "device", cur = d.serial === serial();
    return `<button class="dcard e-${k.k}${cur ? " cur" : ""}" data-s="${esc(d.serial)}" ${on ? "" : "disabled"}>
      <span class="th">${on ? `<img src="/api/thumb?serial=${encodeURIComponent(d.serial)}&w=120&t=${thumbT}" alt="">` : ic("phone")}</span>
      <span class="di"><b>${esc(d.model || d.serial)}</b><code>${esc(d.serial)}</code>
        <span class="dm"><span class="ek e-${k.k}">${k.n}</span><span class="ds${on ? " on" : ""}">${on ? "online" : esc(d.state)}</span></span>
        ${d.aliases?.length ? `<small title="${esc(d.aliases.join(", "))}">alias: ${esc(d.aliases.join(", "))}</small>` : ""}</span>
      ${cur ? `<span class="cur-tag">✓ ${esc(t("devCur"))}</span>` : ""}</button>`;
  }).join("");
}
$("#devBtn").onclick = () => {
  const p = $("#devPop"); p.hidden = !p.hidden;
  if (!p.hidden) { thumbT = Date.now(); renderCards(); api("/api/devices").then(d => sameDevs(d) || fillDevices(d)).catch(() => {}) }
};
document.addEventListener("click", e => { if (!e.target.closest("#devBox")) $("#devPop").hidden = true });
document.addEventListener("keydown", e => { if (e.key === "Escape") $("#devPop").hidden = true });
$("#dcards").onclick = e => { const c = e.target.closest(".dcard:not(:disabled)"); if (!c) return; $("#devPop").hidden = true; if (c.dataset.s !== serial()) { $("#dev").value = c.dataset.s; $("#dev").onchange() } };
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
  root = null; flat = []; sel = null; hover = null; xdoc = null; activity = ""; capturedAt = null; appInfo = null; appErr = "";
  appList = null; appDetail = null; appLog = "";
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
let dumpTreeOnly = false;
function dump(treeOnly){
  const to = treeOnly ?? streaming;
  // joining a tree-only (Live) dump would skip the screenshot -> wait for it, then do a full one
  if (dumpP && dumpFor === serial()) return dumpTreeOnly && !to ? dumpP.then(() => dump(false)) : dumpP;
  dumpFor = serial(); dumpTreeOnly = to;
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
    root = h.root; flat = [];
    index(root, null, "");
    buildXml(); if (qMode === "xpath") evalX();
    activity = h.activity || ""; capturedAt = new Date(); footer();
    $("#count").textContent = `${flat.length} ${t("nodes")}`;
    const prev = sel && sel.xpathAbs; sel = null; hover = null;
    syncStage(); renderTree();
    if (view === "app" && appMode === "current") loadApp();
    const keep = prev && flat.find(n => n.xpathAbs === prev);
    if (keep) select(keep); else { emptyProps(); crumbs() }
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
    img.src = "/api/stream?" + new URLSearchParams({serial:serial(), _:Date.now()});
    syncStage();
    dump(true); liveTimer = setInterval(() => !dumpP && !replaying && dump(true), 3000);
  } else { img.removeAttribute("src"); dump(false) }
}
$("#live").onchange = e => setLive(e.target.checked);
$("#shot").addEventListener("load", e => { const i = e.target; i.naturalWidth && Math.abs(i.clientWidth / i.naturalWidth - scale) > 1e-3 && sizeCanvas() });

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
function renderTree(){
  const box = $("#tree"); box.innerHTML = "";
  const q = $("#q").value.trim().toLowerCase();
  const match = qMode === "xpath" ? (n => !q || xmatch.has(n))
    : (n => !q || [n.cls, n.attrs.text, n.attrs["resource-id"], n.attrs["content-desc"]].some(v => v && v.toLowerCase().includes(q)));
  const keep = n => (n.keep = n.children.map(keep).some(Boolean) || match(n));
  root.children.forEach(keep);
  flat.forEach(n => { n.row = null; n.el = null });
  const build = (n, d = 0) => {
    if (q && !n.keep) return null;
    const w = document.createElement("div"); n.el = w;
    const r = document.createElement("div"); r.className = "row" + (q && match(n) ? " hit" : "");
    r.innerHTML = `<span class="tg">${n.children.length ? ic("chev") : ""}</span>` + kd(n) + label(n);
    r.onclick = e => e.target.closest(".tg") ? w.classList.toggle("closed") : select(n, true);
    r.onmouseenter = () => { hover = n; draw() }; r.onmouseleave = () => { hover = null; draw() };
    n.row = r; w.append(r);
    if (n.children.length) {
      const k = document.createElement("div"); k.className = "kids d" + (d % 6);  // guide line colour cycles per depth
      n.children.forEach(c => { const x = build(c, d + 1); x && k.append(x) });
      w.append(k);
    }
    return w;
  };
  root.children.forEach(c => { const x = build(c); x && box.append(x) });
  if (sel?.row) sel.row.classList.add("sel");
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
  xmatch = new Set(); xlist = []; xi = -1; inp.classList.remove("bad"); inp.title = "";
  if (expr && xdoc) {
    try {
      const r = xdoc.evaluate(expr, xdoc, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
      for (let i = 0; i < r.snapshotLength; i++) { const n = xmap.get(r.snapshotItem(i)); n && xlist.push(n) }
      xmatch = new Set(xlist);
    } catch (e) { inp.classList.add("bad"); inp.title = t("xpErr") + ": " + e.message }
  }
  $("#count").textContent = expr ? (inp.classList.contains("bad") ? t("xpErr") : t("matches",{n:xlist.length})) : root ? `${flat.length} ${t("nodes")}` : "";
}
function setQMode(m){
  qMode = m;
  document.querySelectorAll("#qMode button").forEach(b => b.classList.toggle("on", b.dataset.q === m));
  $("#q").placeholder = t(m === "xpath" ? "searchX" : "search");
  $("#q").classList.remove("bad");
  if (m === "xpath") evalX(); else { xmatch = new Set(); xlist = []; root && ($("#count").textContent = `${flat.length} ${t("nodes")}`) }
  syncMode();
  root && renderTree(); draw();
}
function testXPath(xp){ setQMode("xpath"); $("#q").value = xp; evalX(); renderTree(); draw(); $("#q").focus() }
document.querySelectorAll("#qMode button").forEach(b => b.onclick = () => setQMode(b.dataset.q));
$("#q").oninput = () => { if (!root) return; if (qMode === "xpath") evalX(); renderTree(); draw() };
$("#q").onkeydown = e => { if (e.key === "Enter" && qMode === "xpath" && xlist.length) { xi = (xi + 1) % xlist.length; select(xlist[xi]) } };
const setAll = open => document.querySelectorAll("#tree div:has(> .kids)").forEach(w => w.classList.toggle("closed", !open));
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
  if (sel?.row) sel.row.classList.remove("sel");
  document.querySelectorAll(".kids.onpath").forEach(k => k.classList.remove("onpath"));
  sel = n; $("#st3").classList.add("done");
  if (n.row) {
    n.row.classList.add("sel");
    for (let p = n.parent; p; p = p.parent) { p.el?.classList.remove("closed"); p.el?.querySelector(":scope > .kids")?.classList.add("onpath") }
    if (!fromTree) n.row.scrollIntoView({block:"center"});
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
  const add = (xp, test, grade) => { const count = flat.filter(test).length; out.push({xp, count, grade: count === 1 ? grade : "ok"}) };
  const eq = (k, v) => m => m.attrs[k] === v;
  if (a["resource-id"]) add(`//*[@resource-id=${xq(a["resource-id"])}]`, eq("resource-id", a["resource-id"]), "best");
  if (a["content-desc"]) add(`//*[@content-desc=${xq(a["content-desc"])}]`, eq("content-desc", a["content-desc"]), "good");
  if (a.text) add(`//*[@text=${xq(a.text)}]`, eq("text", a.text), "good");
  if (a["resource-id"] && a.text) add(`//${n.cls}[@resource-id=${xq(a["resource-id"])} and @text=${xq(a.text)}]`,
    m => m.cls===n.cls && m.attrs["resource-id"]===a["resource-id"] && m.attrs.text===a.text, "good");
  if (!a["resource-id"] && !a.text && !a["content-desc"]) {
    let rel = [];
    for (let c = n, p = n.parent; p && p.parent; c = p, p = p.parent) {
      const same = p.children.filter(x => x.cls === c.cls);
      rel.unshift(c.cls + (same.length > 1 ? `[${same.indexOf(c)+1}]` : ""));
      if (p.attrs["resource-id"]) { add(`//*[@resource-id=${xq(p.attrs["resource-id"])}]/${rel.join("/")}`, eq("resource-id", p.attrs["resource-id"]), "ok"); break }
    }
  }
  out.push({xp: n.xpathAbs, count: 1, grade: "fragile", abs: true});
  const rank = {best:0, good:1, ok:2, fragile:3};
  return out.sort((x, y) => rank[x.grade] - rank[y.grade]);
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
  $("#props").innerHTML =
    `<div class="hero"><div class="ttl">${esc(name(n))}</div><div class="sub">${esc(n.cls)}</div>
       <div class="acts"><button class="btn pri sm" id="btnCopyBest">${ic("copy")}${t("copyBest")}</button>
       <button class="btn sm" id="btnTapSel">${ic("tap")}${t("tapHere")}</button>
       ${n.parent?.parent ? `<button class="btn sm" id="btnParent">${ic("up")}${t("parent")}</button>` : ""}
       ${recording ? `<button class="btn sm" id="btnWait">⏱ ${t("waitHere")}</button>` : ""}</div></div>
     <div class="tabs">${["sel","props","code"].map(k => `<button class="tab ${tab===k?"on":""}" data-tab="${k}">${t({sel:"tSel",props:"tProps",code:"tCode"}[k])}</button>`).join("")}</div>
     <div class="scroll"><div class="pane">${panes[tab]}</div></div>`;
  $("#props").querySelectorAll("[data-c]").forEach(e => e.onclick = () => copy(e.dataset.c));
  $("#props").querySelectorAll("[data-test]").forEach(e => e.onclick = ev => { ev.stopPropagation(); testXPath(e.dataset.test) });
  $("#props").querySelectorAll("[data-tab]").forEach(e => e.onclick = () => { tab = e.dataset.tab; store.set("tab", tab); showProps(n) });
  $("#btnCopyBest").onclick = () => copy(sels[0].xp);
  $("#btnTapSel").onclick = () => { recording && record(makeStep("tap", n)); tap((b[0]+b[2])>>1, (b[1]+b[3])>>1) };
  $("#btnWait") && ($("#btnWait").onclick = () => { record(makeStep("wait", n)); toast("⏱ " + name(n)) });
  $("#btnParent") && ($("#btnParent").onclick = () => select(n.parent));
}

// ---------- screenshot overlay ----------
const img = $("#shot"), cv = $("#ov"), ctx = cv.getContext("2d"), tip = $("#tip");
function sizeCanvas(){ cv.width = img.clientWidth; cv.height = img.clientHeight; scale = img.clientWidth / img.naturalWidth; draw() }
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
}
const devXY = e => { const r = cv.getBoundingClientRect(); return [Math.round((e.clientX-r.left)/scale), Math.round((e.clientY-r.top)/scale)] };
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
cv.onmousemove = e => {
  const [x,y] = devXY(e); $("#xy").textContent = `x ${x}  y ${y}`;
  const h = hit(x,y);
  if (h !== hover) {  // tooltip text only recomputed when the hovered element changes
    hover = h;
    tip.textContent = !h ? "" : recording ? `● ${t("willRec")}: ${u2sel(makeStep("tap", h))}` : `${h.cls.split(".").pop()} · ${name(h)}`;
    tip.classList.toggle("rec", recording);
  }
  draw();
  if (hover) {
    tip.style.display = "block";
    const r = cv.getBoundingClientRect(), lx = e.clientX - r.left, ly = e.clientY - r.top;
    tip.style.left = Math.min(lx + 14, r.width - tip.offsetWidth - 4) + "px";
    tip.style.top = (ly + 18 + tip.offsetHeight > r.height ? ly - tip.offsetHeight - 8 : ly + 18) + "px";
  } else tip.style.display = "none";
};
cv.onmouseleave = () => { hover = null; draw(); $("#xy").textContent = ""; tip.style.display = "none" };
let down = null;
cv.onmousedown = e => { down = devXY(e) };
cv.onmouseup = e => {
  const [x,y] = devXY(e);
  if (control) {
    const [x0,y0] = down || [x,y];
    if (Math.hypot(x-x0, y-y0) > 20) {
      record({op:"swipe", x1:x0, y1:y0, x2:x, y2:y});
      api("/api/swipe",{serial:serial(),x1:x0,y1:y0,x2:x,y2:y}).then(()=>setTimeout(dump,600)).catch(e=>toast(e.message));
    } else controlTap(x, y);
  } else { const n = hit(x,y); if (n) { (view === "play" && pgGrabOn) ? pgGrabEl(n) : select(n); } }
  down = null;
};
// While recording, re-read the UI tree first so the step is bound to the element really under the cursor.
async function controlTap(x, y){
  if (recording) {
    toast(t("reading")); await dump(true);
    const n = hit(x, y);
    n ? record(makeStep("tap", n)) : toast(t("noElem"));
  }
  tap(x, y);
}
async function tap(x, y){
  try{ await api("/api/tap",{serial:serial(),x,y}); toast(`${t("tapped")} ${x}, ${y}`); setTimeout(dump, 600) }catch(e){ toast(t("err")+": "+e.message) }
}
// One colour per mode (inspect amber, control sky, recording rose, XPath teal) shared by buttons, overlay, tabs, footer.
function syncMode(){
  const m = recording ? "rec" : control ? "control" : "inspect";
  document.body.dataset.mode = m; document.body.classList.toggle("xp", qMode === "xpath");
  $("#fMode").innerHTML = esc(t(m === "rec" ? "mRec" : m)) + (qMode === "xpath" ? ` <span class="xpc">· XPath</span>` : "");
}
let pal = {};
function readPal(){ const cs = getComputedStyle(document.documentElement); for (const k of ["m-insp","m-ctl","m-rec","m-xp","acc"]) pal[k] = cs.getPropertyValue("--"+k).trim() }
function setMode(m){
  control = m === "control";
  document.querySelectorAll("#modeSeg button").forEach(b => b.classList.toggle("on", b.dataset.mode === m));
  cv.classList.toggle("ctl", control); hover = null; syncMode(); draw();
}
document.querySelectorAll("#modeSeg button").forEach(b => b.onclick = () => setMode(b.dataset.mode));
document.querySelectorAll("[data-key]").forEach(b => b.onclick = () => {
  record({op:"key", key: KEYNAME[b.dataset.key]});
  api("/api/key",{serial:serial(),code:b.dataset.key}).then(()=>setTimeout(dump,600)).catch(e=>toast(e.message));
});
const sendText = () => {
  const text = $("#txt").value; if (!text) return;
  record({op:"text", text});
  api("/api/text",{serial:serial(),text}).then(()=>{ $("#txt").value=""; setTimeout(dump,600) }).catch(e=>toast(e.message));
};

// ---------- recorder ----------
// A tap/wait step stores the element's attributes + a snapshot of the screen's nodes, so the user can pick
// which attributes form the selector ("parameter acuan") and see live how many elements it matches.
const KEYNAME = {4:"back", 3:"home", 187:"recent", 66:"enter"}, KEYCODE = {back:4, home:3, recent:187, enter:66};
const PARAMS = [["rid","resource-id"], ["desc","content-desc"], ["text","text"], ["cls","class"]];
let rec = (() => { try { return JSON.parse(store.get("rec") || "[]") } catch { return [] } })()
  .filter(s => !(s.op === "tap" || s.op === "wait") || s.attrs);  // drop steps from the old coordinate format
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
             snap: flat.map(nodeAttrs), self: flat.indexOf(n), x: (b[0]+b[2])>>1, y: (b[1]+b[3])>>1};
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
function saveRec(){ store.set("rec", JSON.stringify(rec)); $("#recCnt").textContent = rec.length; if (view === "rec") renderRec() }

function exportCode(){
  const S = serial() || "127.0.0.1:16384";
  if (fmt === "py") {
    const line = s => {
      const sel = s.use && u2sel(s), T = s.timeout;
      if (s.op === "tap") return s.optional ? `if ${sel}.wait(timeout=${T}):\n    ${sel}.click()` : `${sel}.click(timeout=${T})`;
      if (s.op === "wait") return s.optional ? `${sel}.wait(timeout=${T})` : `assert ${sel}.wait(timeout=${T}), ${pq("not found: " + s.label)}`;
      if (s.op === "swipe") return `d.swipe(${s.x1}, ${s.y1}, ${s.x2}, ${s.y2}, 0.3)\ntime.sleep(0.5)`;
      if (s.op === "key") return `d.press(${pq(s.key)})\ntime.sleep(0.5)`;
      return `d.send_keys(${pq(s.text)})`;
    };
    return `# Generated by Inceptor AI · ${new Date().toLocaleString()}\n# pip install uiautomator2\nimport time\nimport uiautomator2 as u2\n\nd = u2.connect(${pq(S)})\n\n`
      + rec.map((s, i) => `# ${i+1}. ${stepText(s).slice(0,2).join(" ")}${s.optional ? " (optional)" : ""}\n${line(s)}`).join("\n") + "\nprint(\"done\")\n";
  }
  if (fmt === "mcp") return rec.map((s, i) => `${i+1}. ` + (
      s.op === "tap" ? `tap(${mcpArgs(s)})` : s.op === "wait" ? `wait_for(${mcpArgs(s, false)}, timeout=${s.timeout})`
    : s.op === "swipe" ? `swipe(${s.x1}, ${s.y1}, ${s.x2}, ${s.y2})` : s.op === "key" ? `press_key(${pq(s.key)})` : `input_text(${pq(s.text)})`)
    + (s.optional ? "   # optional" : "")).join("\n");
  const a = `adb -s ${S} shell`;
  return t("adbNote") + "\n" + rec.map(s => (
      s.op === "tap" ? `${a} input tap ${s.x} ${s.y}   # ${s.label}` : s.op === "wait" ? `sleep 1   # ${s.label}`
    : s.op === "swipe" ? `${a} input swipe ${s.x1} ${s.y1} ${s.x2} ${s.y2} 300` : s.op === "key" ? `${a} input keyevent ${KEYCODE[s.key]}`
    : `${a} input text ${pq(s.text.replace(/ /g, "%s"))}`) + "\nsleep 0.5").join("\n");
}
function stepText(s){
  if (s.op === "tap" || s.op === "wait") return [t(s.op === "tap" ? "opTap" : "opWait"), s.label];
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
      const [op, what] = stepText(s), sel = s.op === "tap" || s.op === "wait";
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
      if (s.op === "tap" || s.op === "wait") {
        try { await api("/api/act", {serial:S, xpath:stepXPath(s), op:s.op, timeout:s.timeout}) }
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
  $("#btnRec").classList.toggle("on", on); $("#recLbl").textContent = t(on ? "recStop" : "rec"); syncMode();
  if (on) { setMode("control"); if (!streaming) setLive(true); setView("rec"); toast("● " + t("recOn")) }
  sel && showProps(sel);
}
function setView(v){
  view = v; const play = v === "play";
  document.querySelectorAll(".toptabs .tab").forEach(b => b.classList.toggle("on", b.dataset.view === v));
  $("#props").hidden = v !== "el"; $("#recView").hidden = v !== "rec"; $("#appView").hidden = v !== "app"; $("#playView").hidden = !play;
  // Playground mode swaps the middle card: UI tree -> automation flow; right card -> function list
  $("#treePane").hidden = play; $("#flowPane").hidden = !play;
  $("#btnPlay").classList.toggle("on", play);
  if (v === "rec") renderRec();
  if (v === "app") { renderApp(); if (appMode === "current") loadApp(); else if (!appList) loadAppList() }
  if (play) { pgRenderFlow(); pgRenderPalette(); const b=$("#pgDataBtn"); if(b) b.querySelector(".cnt").textContent = pgData.rows.length || ""; }
}

// ---------- app & intent of the foreground screen ----------
let appInfo = null, appErr = "", appBusy = false;
let appMode = store.get("appMode") || "current", appList = null, appKind = store.get("appKind") || "user", appListErr = "", appListBusy = false, appQuery = "", appDetail = null, appDetailErr = "", appDetailBusy = false, appActFilter = "", appLog = "", uninstallArm = null;
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
const heroIcon = (pkg, label, known = true) => `<div class="appIc">` + (known
  ? `<img src="/api/appicon?serial=${encodeURIComponent(serial())}&pkg=${encodeURIComponent(pkg)}" alt="" loading="lazy" onerror="iconFail(this,'${pkg}',1)">`
  : `<span class="avtxt" style="background:${tileBg(pkg)}">${ic("applogo")}</span>`) + `</div>`;
// Template tile (global so <img onerror> can fall back to it). Colour is stable per package.
function av(pkg){ return `<span class="appAv" style="background:${tileBg(pkg)}">${ic("applogo")}</span>`; }
// <img onerror> fallback (global; package names are [A-Za-z0-9_.], safe to single-quote in the attribute). Keeps the img's size classes.
function iconFail(img, pkg, hero){
  const cls = hero ? "avtxt" : (img.className.replace("imgav", "").trim() || "appAv");
  img.outerHTML = `<span class="${cls}" style="background:${tileBg(pkg)}">${ic("applogo")}</span>`;
}
// List row icon: real launcher icon, lazily (only visible rows pull it), falling back to the tile.
const listIcon = pkg => `<img class="appAv imgav" alt="" loading="lazy" src="/api/appicon?serial=${encodeURIComponent(serial())}&pkg=${encodeURIComponent(pkg)}" onerror="iconFail(this,'${pkg}')">`;

async function loadAppList(){
  const dev = serial(); if (!dev) return;
  appListBusy = true; appListErr = ""; if (view === "app" && appMode === "browse" && !appDetail) renderList();
  try { const r = await api("/api/apps", {serial: dev, kind: appKind}); appList = r.apps }
  catch (e) { appListErr = e.message; appList = [] }
  finally { appListBusy = false; if (view === "app" && appMode === "browse" && !appDetail) renderList(); }
}
function renderList(){
  const box = $("#appBody"); if (!box) return;
  const q = appQuery.toLowerCase();
  const rows = (appList || []).filter(a => !q || a.package.toLowerCase().includes(q));
  box.innerHTML = `
    <div class="appTools">
      <div class="seg sm" id="appKindSeg">${["user","system","all"].map(k => `<button data-k="${k}"${k === appKind ? ' class="on"' : ""}>${t("ak_" + k)}</button>`).join("")}</div>
      <input class="inp sm" id="appSearch" placeholder="${t("appSearchPh")}" value="${esc(appQuery)}">
    </div>
    ${appListBusy ? `<div class="empty"><i class="spin"></i>${t("appListLoad")}</div>`
      : appListErr ? `<div class="empty">${ic("apps")}<b>${t("err")}</b>${esc(appListErr)}</div>`
      : !rows.length ? `<div class="empty">${ic("apps")}<b>${t("appNone")}</b></div>`
      : `<div class="appHint">${t("appCount", {n: rows.length})}</div><div class="appList">` + rows.map(a => `
        <button class="appItem" data-pkg="${esc(a.package)}">
          ${listIcon(a.package)}
          <span class="ai"><b>${esc(a.package)}</b><small>vc ${a.versionCode}${a.system ? " · system" : ""}${a.enabled ? "" : " · " + t("disabled")}</small></span>
          ${a.launchable ? `<span class="star" title="launcher">${ic("target")}</span>` : ""}
        </button>`).join("") + `</div>`}`;
  box.querySelectorAll("#appKindSeg button").forEach(b => b.onclick = () => { appKind = b.dataset.k; store.set("appKind", appKind); appList = null; loadAppList() });
  const si = $("#appSearch");
  if (si) si.oninput = () => { appQuery = si.value; const c = si.selectionStart; renderList(); const n = $("#appSearch"); n.focus(); n.setSelectionRange(c, c) };
  box.querySelectorAll(".appItem").forEach(b => b.onclick = () => openAppDetail(b.dataset.pkg));
}

async function openAppDetail(pkg){
  appDetail = null; appDetailErr = ""; appDetailBusy = true; appActFilter = ""; appLog = ""; renderApp();
  const dev = serial();
  try { const d = await api("/api/app", {serial: dev, pkg}); if (serial() === dev) appDetail = d }
  catch (e) { if (serial() === dev) appDetailErr = e.message }
  finally { appDetailBusy = false; if (view === "app") renderApp(); }
}
function backToList(){ appDetail = null; appDetailErr = ""; appLog = ""; renderApp() }

async function openActivity(pkg, act){
  try { await api("/api/start", {serial: serial(), pkg, activity: act}); toast(t("opened") + ": " + act.split(".").pop()); if (!streaming) setTimeout(() => dump(), 700) }
  catch (e) { toast(t("err") + ": " + e.message) }
}
async function openDeepLink(uri){
  try { await api("/api/start", {serial: serial(), pkg: appDetail.package, data: uri}); toast(t("opened") + ": " + uri); if (!streaming) setTimeout(() => dump(), 700) }
  catch (e) { toast(t("err") + ": " + e.message) }
}
async function shortcut(pkg, act, name){
  try { const r = await api("/api/shortcut", {serial: serial(), pkg, activity: act, name}); toast(t("scOk") + ": " + r.path) }
  catch (e) { toast(t("err") + ": " + e.message) }
}
async function manage(pkg, action, btn){
  if (action === "uninstall" && uninstallArm !== pkg) { uninstallArm = pkg; renderDetail(); clearTimeout(window._uat); window._uat = setTimeout(() => { uninstallArm = null; renderDetail() }, 4000); return }
  uninstallArm = null;
  try {
    const r = await api("/api/manage", {serial: serial(), pkg, action});
    if (action === "logcat") { appLog = r.log || t("appNoLog"); renderDetail() }
    else { toast(r.msg || "ok"); if (action === "uninstall") { appList = null; backToList(); loadAppList() } else openAppDetail(pkg) }
  } catch (e) { toast(t("err") + ": " + e.message) }
}
function renderDetail(){
  const box = $("#appBody"); if (!box) return;
  if (appDetailBusy) { box.innerHTML = `<div class="appBar"><button class="btn ghost sm" id="appBack">${ic("back")}${t("appBack")}</button></div><div class="empty"><i class="spin"></i>${t("appParse")}</div>`; $("#appBack").onclick = backToList; return }
  const d = appDetail;
  if (!d) { box.innerHTML = `<div class="appBar"><button class="btn ghost sm" id="appBack">${ic("back")}${t("appBack")}</button></div><div class="empty">${ic("apps")}<b>${t("err")}</b>${esc(appDetailErr)}</div>`; $("#appBack").onclick = backToList; return }
  const q = appActFilter.toLowerCase();
  const acts = d.activities.filter(a => !q || a.name.toLowerCase().includes(q));
  const badge = a => (a.launcher ? `<span class="abdg lc">launcher</span>` : "") + (a.exported ? `<span class="abdg ex">exported</span>` : `<span class="abdg rt">root</span>`) + (a.enabled ? "" : `<span class="abdg df">disabled</span>`);
  box.innerHTML = `
    <div class="appBar"><button class="btn ghost sm" id="appBack">${ic("back")}${t("appBack")}</button></div>
    <div class="appHero">
      ${heroIcon(d.package, d.label, d.hasIcon)}
      <div><div class="ttl">${esc(d.label)}</div><div class="sub" data-copy="${esc(d.package)}">${esc(d.package)} · v${esc(d.versionName || "?")}</div></div>
    </div>
    <div class="appStat"><span><b>${d.activityCount}</b> activity</span><span><b>${d.exportedCount}</b> exported</span><span><b>${d.permissions.length}</b> izin</span></div>
    <div class="appActs">
      <button class="btn sm pri" data-mg="open">${ic("target")}${t("appOpen")}</button>
      <button class="btn sm" data-mg="backup">${ic("download")}APK</button>
      <button class="btn sm" data-mg="logcat">Logcat</button>
      <button class="btn sm" data-mg="${d.enabled ? "disable" : "enable"}">${d.enabled ? t("appDisable") : t("appEnable")}</button>
      <button class="btn sm danger${uninstallArm === d.package ? " arm" : ""}" data-mg="uninstall">${ic("trash")}${uninstallArm === d.package ? t("sure") : t("appUninstall")}</button>
    </div>
    ${appLog ? `<pre class="ij">${esc(appLog.slice(-4000))}</pre>` : ""}
    ${d.deepLinks.length ? `<h4>${t("appLinks")}</h4><div class="links">${d.deepLinks.map(l => `<button class="lnk" data-uri="${esc(l.uri)}" title="${esc(l.activity)}">${ic("link")}<code>${esc(l.uri)}</code></button>`).join("")}</div>` : ""}
    <h4>${t("appActsH")} <small>${acts.length}/${d.activityCount}</small></h4>
    <input class="inp sm" id="actSearch" placeholder="${t("appActPh")}" value="${esc(appActFilter)}">
    <div class="actList">${acts.map(a => `
      <div class="actRow">
        <div class="an"><span>${esc(a.name.startsWith(d.package) ? a.name.slice(d.package.length).replace(/^\./, "") : a.name)}</span>${badge(a)}</div>
        <div class="ab">
          <button class="btn sm icon" data-open="${esc(a.name)}" title="${t("appOpen")}">${ic("target")}</button>
          <button class="btn sm icon" data-sc="${esc(a.name)}" title="${t("scMake")}">${ic("link")}</button>
          <button class="btn sm icon" data-cpn="${esc(d.package + "/" + a.name)}" title="${t("copy")}">${ic("copy")}</button>
        </div>
      </div>`).join("")}</div>
    <details class="perms"><summary>${t("appPerms")} (${d.permissions.length})</summary><div class="perml">${d.permissions.map(x => `<code>${esc(x.split(".").pop())}</code>`).join("")}</div></details>`;
  $("#appBack").onclick = backToList;
  box.querySelector(".sub[data-copy]").onclick = e => copy(e.currentTarget.dataset.copy);
  box.querySelectorAll("[data-mg]").forEach(b => b.onclick = () => b.dataset.mg === "open" ? openActivity(d.package, d.activities.find(x => x.launcher)?.name || d.activities[0].name) : manage(d.package, b.dataset.mg, b));
  const as = $("#actSearch"); as.oninput = () => { appActFilter = as.value; const c = as.selectionStart; renderDetail(); const n = $("#actSearch"); n.focus(); n.setSelectionRange(c, c) };
  box.querySelectorAll("[data-open]").forEach(b => b.onclick = () => openActivity(d.package, b.dataset.open));
  box.querySelectorAll("[data-sc]").forEach(b => b.onclick = () => shortcut(d.package, b.dataset.sc, d.label + " · " + b.dataset.sc.split(".").pop()));
  box.querySelectorAll("[data-cpn]").forEach(b => b.onclick = () => copy(b.dataset.cpn));
  box.querySelectorAll(".lnk").forEach(b => b.onclick = () => openDeepLink(b.dataset.uri));
}
$("#btnRec").onclick = () => setRecording(!recording);
document.querySelectorAll(".toptabs .tab").forEach(b => b.onclick = () => setView(b.dataset.view));
$("#recCnt").textContent = rec.length;
$("#btnTxt").onclick = sendText;
$("#txt").onkeydown = e => e.key === "Enter" && sendText();
document.querySelectorAll("#langSeg button").forEach(b => b.onclick = () => { lang = b.dataset.lang; store.set("lang", lang); applyLang() });
$("#btnTheme").onclick = () => { theme = theme === "dark" ? "light" : "dark"; store.set("theme", theme); applyTheme() };
$("#btnHelp").onclick = () => $("#dlgHelp").showModal();

// ---------- emulator manager ----------
let emuDelPending = null;  // "brand/index" awaiting a 2nd Delete click
let emuState = [];         // last loaded brands list (for config caps lookup)
const emuBrandIcon = {mumu:"phone", ld9:"phone", ld14:"phone", ld4:"phone", memu:"phone", nox:"phone", bs:"phone"};
function emuRender(brands){
  emuDelPending = null; emuState = brands;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  const html = brands.map(b => {
    const canCreate = b.caps.includes("create");
    const rows = (b.instances || []).map(i => {
      const idAttr = esc(i.index);
      const d = `data-emu-brand="${b.brand}" data-emu-index="${idAttr}" data-emu-name="${esc(i.name)}"`;
      const btn = (act, ic, cls="", lbl=true) => { const L = t("emu"+act[0].toUpperCase()+act.slice(1));
        return `<button class="btn sm ${cls}" data-emu-act="${act}" ${d} title="${L}"><svg class="ic" data-ic="${ic}"></svg>${lbl?L:""}</button>`; };
      const live = i.running ? `<span class="emudot on"></span>${t("emuRunning")}` : `<span class="emudot"></span>${t("emuStopped")}`;
      let ctl;
      if (i.running){
        ctl = btn("stop","stop") + btn("restart","refresh");
      } else {
        ctl = btn("launch","play","pri");
        if (b.settings.length) ctl += btn("config","sliders","icon",false);
        if (b.can_rename) ctl += btn("rename","pencil","icon",false);
        if (b.can_clone) ctl += btn("clone","copy","icon",false);
        if (b.caps.includes("delete")) ctl += btn("delete","trash","danger icon",false);
      }
      return `<div class="emurow"><div class="emumeta"><b>${esc(i.name)}</b><span class="emusub">${live} · ${esc(i.adb || "")}</span></div><div class="emuctl">${ctl}</div></div>`;
    }).join("") || `<div class="emuempty">${t("emuNoInst")}</div>`;
    const verSel = (b.versions && b.versions.length)
      ? `<select class="inp sm" data-emu-cver="${b.brand}" title="${t("emuAndroidVer")}">` +
        b.versions.map(v => `<option value="${esc(v.value)}">${esc(v.label)}</option>`).join("") + `</select>`
      : "";
    const create = canCreate
      ? `<div class="emucreate"><input class="inp sm" data-emu-cname="${b.brand}" placeholder="${t("emuNamePh")}">${verSel}<button class="btn sm" data-emu-act="create" data-emu-brand="${b.brand}"><svg class="ic" data-ic="plus"></svg>${t("emuCreate")}</button></div>`
      : `<div class="emunocreate">${t("emuNoCreate")}</div>`;
    return `<div class="emucard"><div class="emuhd"><svg class="ic" data-ic="${emuBrandIcon[b.brand]||"phone"}"></svg><b>${esc(b.label)}</b></div>${rows}${create}</div>`;
  }).join("");
  $("#emuBody").innerHTML = html || `<div class="emuempty">${t("emuNoInst")}</div>`;
  paintIcons($("#emuBody"));
}
async function emuLoad(){
  $("#emuBody").innerHTML = `<div class="emuload"><i class="spin"></i></div>`;
  try { emuRender((await api("/api/emu/list")).brands); }
  catch(e){ $("#emuBody").innerHTML = `<div class="emuempty">${e.message}</div>`; }
}
$("#emuBody").onclick = async e => {
  const el = e.target.closest("[data-emu-act]"); if (!el) return;
  const {emuAct:act, emuBrand:brand, emuIndex:index, emuName:name} = el.dataset;
  if (act === "config"){ emuCfgOpen(brand, index, name); return; }
  let path = "/api/emu/action", params = {brand, act, index};
  if (act === "delete"){
    const key = brand + "/" + index;
    if (emuDelPending !== key){ emuDelPending = key; toast(t("emuConfirmDel",{name})); el.classList.add("arm"); return; }
    emuDelPending = null;
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
  el.disabled = true; toast(t("emuBusy"));
  try {
    const r = await api(path, params);
    toast(t("emuDone",{msg: r.msg}));
    emuRender(r.brands);
  } catch(err){ toast(err.message); el.disabled = false; }
};
$("#emuRefresh").onclick = emuLoad;
$("#btnEmu").onclick = () => { $("#dlgEmu").showModal(); emuLoad(); };

// ---------- device settings template ----------
const EMU_FIELDS = ["cpu","memory","width","height","dpi","manufacturer","model","imei","androidid","mac","phonenumber"];
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
      `<input class="inp sm" data-f="${f}" ${on?"":"disabled"} placeholder="${ph}"></label>`;
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
  $("#cfgApply").disabled = true; toast(t("emuBusy"));
  try {
    const r = await api("/api/emu/settings", params);
    toast(t("emuDone",{msg: r.msg})); emuRender(r.brands); $("#dlgEmuCfg").close();
    toast(t("emuCfgApplied"));
  } catch(err){ toast(err.message); }
  $("#cfgApply").disabled = false;
};

document.addEventListener("keydown", e => {
  if (/INPUT|SELECT|TEXTAREA/.test(e.target.tagName) || e.ctrlKey || e.metaKey || e.altKey) return;
  const k = e.key.toLowerCase();
  if (k === "r") dump();
  else if (k === "m") setMode(control ? "inspect" : "control");
  else if (k === "/") { e.preventDefault(); $("#q").focus() }
  else if (k === "c" && sel) copy(selectors(sel)[0].xp);
  else if ((k === "arrowdown" || k === "arrowup") && flat.length) {
    e.preventDefault();
    const rows = flat.filter(n => n.row && n.row.offsetParent);
    const i = rows.indexOf(sel), j = k === "arrowdown" ? Math.min(rows.length-1, i+1) : Math.max(0, i-1);
    rows[j] && select(rows[j]);
  }
  else if (k === "escape" && sel) { sel.row?.classList.remove("sel"); sel = null; emptyProps(); crumbs(); draw() }
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
const PG_KEYS = {"4":"back","3":"home","187":"recent","66":"enter","67":"delete"};
const uid = () => Math.random().toString(36).slice(2, 9);
let flow = (() => { try { return JSON.parse(store.get("flow") || "[]") } catch { return [] } })();
let pgFmt = store.get("pgFmt") || "py", pgDir = store.get("pgDir") || "v", pgOpen = new Set(), pgRun = {}, pgRunning = false, pgStop = false, pgClearArm = 0, pgLiveT = null;

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
  if (type === "iff") n.else = [];
  return n;
}
let pgData = (() => { try { return JSON.parse(store.get("pgdata")) || {cols: [], rows: []} } catch { return {cols: [], rows: []} } })();
const pgSaveData = () => { store.set("pgdata", JSON.stringify(pgData)); const b = $("#pgDataBtn"); if (b) b.querySelector(".cnt").textContent = pgData.rows.length || ""; pgCode(); };
const pgSave = () => { store.set("flow", JSON.stringify(flow)); $("#pgCount").textContent = t("pgCount", {n: pgCountNodes(flow)}); pgCode(); };
function pgCountNodes(list){ let k = 0; for (const n of list) { k++; if (n.children) k += pgCountNodes(n.children); if (n.else) k += pgCountNodes(n.else) } return k; }

// selector -> XPath (for running via /api/act) ; mirrors the device's class-tagged tree
function selXPath(x){
  if (x.by === "xpath") return x.val;
  const q = v => '"' + String(v).replace(/"/g, '\\"') + '"', a = {rid: "resource-id", text: "text", desc: "content-desc", cls: "class"}[x.by];
  if (x.by === "rid") return x.val.includes(":id/") ? `//*[@resource-id=${q(x.val)}]`
    : `//*[@resource-id=${q(x.val)} or substring-after(@resource-id,":id/")=${q(x.val)}]`;
  if (x.contains && (x.by === "text" || x.by === "desc")) return `//*[contains(@${a},${q(x.val)})]`;
  return `//*[@${a}=${q(x.val)}]`;
}
const pgSel = x => x.by === "xy" ? `(${x.x}, ${x.y})` : (x.val || "…");

// ---------- run on device ----------
const pgSleep = ms => new Promise(r => setTimeout(r, ms));
// {{col}} placeholders are replaced per data row at run time (and per row in the Python export).
const subStr = (s, row) => (row && typeof s === "string") ? s.replace(/\{\{\s*(\w+)\s*\}\}/g, (m, k) => k in row ? row[k] : m) : s;
async function pgExec(n, row){
  const S = {serial: serial()}, sx = n.sel ? selXPath({...n.sel, val: subStr(n.sel.val, row)}) : null;
  if (n.type === "tap") return n.sel.by === "xy" ? api("/api/tap", {...S, x: n.sel.x, y: n.sel.y}) : api("/api/act", {...S, xpath: sx, op: "tap", timeout: 10});
  if (n.type === "longpress") return n.sel.by === "xy" ? api("/api/swipe", {...S, x1: n.sel.x, y1: n.sel.y, x2: n.sel.x, y2: n.sel.y, dur: n.dur}) : api("/api/act", {...S, xpath: sx, op: "longtap", dur: n.dur, timeout: 10});
  if (n.type === "doubletap") { if (n.sel.by === "xy") { await api("/api/tap", {...S, x: n.sel.x, y: n.sel.y}); return api("/api/tap", {...S, x: n.sel.x, y: n.sel.y}); } return api("/api/act", {...S, xpath: sx, op: "doubletap", timeout: 10}); }
  if (n.type === "text") return api("/api/text", {...S, text: subStr(n.text, row)});
  if (n.type === "key") return api("/api/key", {...S, code: n.code});
  if (n.type === "swipe") return api("/api/swipe", {...S, x1: n.x1, y1: n.y1, x2: n.x2, y2: n.y2, dur: n.dur});
  if (n.type === "scroll") return api("/api/scroll", {...S, dir: n.dir});
  if (n.type === "launch") return api("/api/start", {...S, pkg: subStr(n.pkg, row), activity: subStr(n.activity, row) || ""});
  if (n.type === "screenshot") return fetch("/api/screenshot?serial=" + encodeURIComponent(serial()));
  if (n.type === "wait") return api("/api/act", {...S, xpath: sx, op: "wait", timeout: n.timeout});
  if (n.type === "gone") return api("/api/act", {...S, xpath: sx, op: "gone", timeout: n.timeout});
  if (n.type === "sleep") return pgSleep(n.ms);
  if (n.type === "comment") return;
  if (n.type === "iff") { const r = await api("/api/act", {...S, xpath: sx, op: "check"}); return pgRunList(r.matches > 0 ? n.children : n.else, row); }
  if (n.type === "repeat") { for (let i = 0; i < n.count && !pgStop; i++) await pgRunList(n.children, row); return; }
}
async function pgRunList(list, row){
  for (const n of list) {
    if (pgStop) return;
    pgRun[n.id] = "run"; pgRenderFlow();
    try { await pgExec(n, row); pgRun[n.id] = "ok"; }
    catch (e) { pgRun[n.id] = "fail"; pgRenderFlow(); throw new Error(t("pgFailAt", {t: t("n_" + n.type)}) + ": " + e.message); }
    pgRenderFlow();
  }
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
      `<th><input class="inp sm" data-col="${i}" value="${esc(n)}" placeholder="var"><button class="x" data-delcol="${i}" title="${t("del")}">×</button></th>`).join("")}
      <th><button class="btn sm" id="dAddCol">+ ${t("pgCol")}</button></th></tr></thead>
    <tbody>${R.map((row, r) => `<tr>${c.map((_, i) =>
      `<td><input class="inp sm" data-cell="${r},${i}" value="${esc(row[i] ?? "")}"></td>`).join("")}<td><button class="x" data-delrow="${r}" title="${t("del")}">×</button></td></tr>`).join("")}</tbody></table>
    <div class="dft"><button class="btn sm" id="dAddRow">+ ${t("pgRow2")}</button>
      <span class="sp"></span><span class="mut" style="font-size:12px">${c.length ? t("pgVars") + ": " + c.filter(Boolean).map(x => "{{" + x + "}}").join(" ") : t("pgNoVars")}</span></div>
    <details class="dcsv"><summary>${t("pgCsv")}</summary><textarea class="inp" id="dCsv" rows="4" placeholder="name,pass&#10;budi,1234&#10;ani,5678"></textarea><button class="btn sm" id="dCsvImp">${t("pgCsvImp")}</button></details>`;
  $("#dAddCol").onclick = () => { pgData.cols.push("var" + (pgData.cols.length + 1)); pgData.rows.forEach(r => r.push("")); pgSaveData(); pgRenderData(); };
  $("#dAddRow").onclick = () => { pgData.rows.push(pgData.cols.map(() => "")); pgSaveData(); pgRenderData(); };
  box.querySelectorAll("[data-delcol]").forEach(b => b.onclick = () => { const i = +b.dataset.delcol; pgData.cols.splice(i, 1); pgData.rows.forEach(r => r.splice(i, 1)); pgSaveData(); pgRenderData(); });
  box.querySelectorAll("[data-delrow]").forEach(b => b.onclick = () => { pgData.rows.splice(+b.dataset.delrow, 1); pgSaveData(); pgRenderData(); });
  box.querySelectorAll("[data-col]").forEach(inp => inp.onchange = () => { pgData.cols[+inp.dataset.col] = inp.value.trim(); pgSaveData(); pgRenderData(); });
  box.querySelectorAll("[data-cell]").forEach(inp => inp.oninput = () => { const [r, i] = inp.dataset.cell.split(",").map(Number); pgData.rows[r][i] = inp.value; pgSaveData(); });
  $("#dCsvImp").onclick = () => {
    const lines = $("#dCsv").value.trim().split(/\r?\n/).filter(Boolean); if (!lines.length) return;
    pgData.cols = lines[0].split(",").map(s => s.trim());
    pgData.rows = lines.slice(1).map(l => l.split(",").map(s => s.trim()));
    pgSaveData(); pgRenderData();
  };
}
async function pgRunFlow(){
  if (pgRunning) return;
  if (!serial()) return toast(t("noDev"));
  if (!flow.length) return;
  pgRunning = true; pgStop = false; pgRun = {}; $("#pgRun").hidden = true; $("#pgStop").hidden = false;
  const wasLive = streaming, rows = pgRows();
  if (!wasLive) setLive(true);  // mirror the device live (left pane) while the flow runs
  try {
    for (let i = 0; i < rows.length && !pgStop; i++) {
      if (rows.length > 1) { pgRun = {}; pgRenderFlow(); toast(t("pgRow", {i: i + 1, n: rows.length})); }
      await pgRunList(flow, rows[i]);
    }
    if (!pgStop) toast("✓ " + t("pgDone") + (rows.length > 1 ? ` (${rows.length}×)` : ""));
  }
  catch (e) { toast(t("err") + ": " + e.message); }
  finally { pgRunning = false; $("#pgRun").hidden = false; $("#pgStop").hidden = true; if (!wasLive) setLive(false); dump(); pgRenderFlow(); }
}

// ---------- export ----------
const pyq = v => '"' + String(v).replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"';
// when a dataset exists and the string has {{col}}, emit a Python f-string: "...{{x}}..." -> f"...{row['x']}..."
function pyStr(v){
  const s = String(v);
  if (pgData.cols.length && /\{\{\s*\w+\s*\}\}/.test(s))
    return 'f"' + s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/([{}])/g, "$1$1").replace(/\{\{\{\{\s*(\w+)\s*\}\}\}\}/g, "{row['$1']}") + '"';
  return pyq(s);
}
function pgPy(list, ind){
  const sp = " ".repeat(ind);
  const body = (l, k) => l.length ? l.map(n => pgPy1(n, k)).join("\n") : " ".repeat(k) + "pass";
  function pgPy1(n, k){
    const q = " ".repeat(k), xp = n.sel && selXPath(n.sel);
    switch (n.type) {
      case "tap": return n.sel.by === "xy" ? `${q}d.click(${n.sel.x}, ${n.sel.y})` : `${q}d.xpath(${pyStr(xp)}).click()`;
      case "longpress": return n.sel.by === "xy" ? `${q}d.long_click(${n.sel.x}, ${n.sel.y}, ${n.dur / 1000})` : `${q}d.xpath(${pyStr(xp)}).long_click()`;
      case "doubletap": return n.sel.by === "xy" ? `${q}d.double_click(${n.sel.x}, ${n.sel.y})` : `${q}_e = d.xpath(${pyStr(xp)}).get(); d.double_click(*_e.center())`;
      case "text": return `${q}d.send_keys(${pyStr(n.text)})`;
      case "key": return `${q}d.press(${pyq(PG_KEYS[n.code] || n.code)})`;
      case "swipe": return `${q}d.swipe(${n.x1}, ${n.y1}, ${n.x2}, ${n.y2}, ${n.dur / 1000})`;
      case "scroll": return `${q}d.swipe_ext(${pyq(n.dir)})`;
      case "launch": return `${q}d.app_start(${pyStr(n.pkg)}${n.activity ? ", " + pyStr(n.activity) : ""})`;
      case "screenshot": return `${q}d.screenshot("shot.png")`;
      case "wait": return `${q}d.xpath(${pyStr(xp)}).wait(timeout=${n.timeout})`;
      case "gone": return `${q}d.xpath(${pyStr(xp)}).wait_gone(timeout=${n.timeout})`;
      case "sleep": return `${q}time.sleep(${n.ms / 1000})`;
      case "comment": return `${q}# ${n.text || ""}`;
      case "iff": return `${q}if d.xpath(${pyStr(xp)}).exists:\n` + body(n.children, k + 4) + (n.else.length ? `\n${q}else:\n` + body(n.else, k + 4) : "");
      case "repeat": return `${q}for _ in range(${n.count}):\n` + body(n.children, k + 4);
    }
  }
  return body(list, ind);
}
function pgMcp(list, ind){
  const line = (n, k) => {
    const q = " ".repeat(k), xp = n.sel && selXPath(n.sel), X = () => `xpath="${selXPath(n.sel)}"`;
    switch (n.type) {
      case "tap": return n.sel.by === "xy" ? `${q}tap(x=${n.sel.x}, y=${n.sel.y})` : `${q}tap(${X()})`;
      case "longpress": return n.sel.by === "xy" ? `${q}tap(x=${n.sel.x}, y=${n.sel.y}, long_press_ms=${n.dur})` : `${q}tap(${X()}, long_press_ms=${n.dur})`;
      case "doubletap": return n.sel.by === "xy" ? `${q}tap(x=${n.sel.x}, y=${n.sel.y})\n${q}tap(x=${n.sel.x}, y=${n.sel.y})` : `${q}tap(${X()})\n${q}tap(${X()})`;
      case "text": return `${q}input_text(${pyq(n.text)})`;
      case "key": return `${q}press_key(${pyq(PG_KEYS[n.code] || n.code)})`;
      case "swipe": return `${q}swipe(${n.x1}, ${n.y1}, ${n.x2}, ${n.y2}, duration_ms=${n.dur})`;
      case "scroll": return `${q}scroll(${pyq(n.dir)})`;
      case "launch": return `${q}start_activity(${pyq(n.pkg)}${n.activity ? ", " + pyq(n.activity) : ""})`;
      case "screenshot": return `${q}screenshot()`;
      case "wait": return `${q}wait_for(${X()}, timeout=${n.timeout})`;
      case "gone": return `${q}wait_for(${X()}, gone=True, timeout=${n.timeout})`;
      case "sleep": return `${q}# wait ${n.ms / 1000}s`;
      case "comment": return `${q}# ${n.text || ""}`;
      case "iff": return `${q}# IF ${selXPath(n.sel)} exists:\n` + pgMcp(n.children, k + 2) + (n.else.length ? `\n${q}# else:\n` + pgMcp(n.else, k + 2) : "");
      case "repeat": return `${q}# REPEAT ${n.count}x:\n` + pgMcp(n.children, k + 2);
    }
  };
  return list.map(n => line(n, ind)).join("\n");
}
function pgExport(){
  if (pgFmt === "json") return JSON.stringify({tool: "inceptor-ai-playground", v: 1, data: pgData, flow}, null, 2);
  if (!flow.length) return "";
  const hasData = pgData.cols.length && pgData.rows.length;
  if (pgFmt === "mcp") return "# Inceptor AI Playground -> MCP (android-inceptor). Control flow shown as comments.\n"
    + (hasData ? "# Repeat the block below for each row:\n" + pgData.rows.map(r => "#   " + JSON.stringify(Object.fromEntries(pgData.cols.map((c, i) => [c, r[i] ?? ""])))).join("\n") + "\n" : "") + pgMcp(flow, 0);
  let head = `# Generated by Inceptor AI Playground\nimport time\nimport uiautomator2 as u2\n\nd = u2.connect(${pyq(serial() || "SERIAL")})\n\n`;
  if (hasData) {
    const data = pgData.rows.map(r => "    {" + pgData.cols.map((c, i) => `${pyq(c)}: ${pyq(r[i] ?? "")}`).join(", ") + "}").join(",\n");
    return head + `DATA = [\n${data}\n]\nfor row in DATA:\n` + pgPy(flow, 4);
  }
  return head + pgPy(flow, 0);
}
const pgCode = () => { $("#pgCode").textContent = pgExport() || t("pgEmpty"); };

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
  if (n.type === "longpress") h += row(t("pgHold"), `<input class="inp num" type="number" min="100" step="100" data-k="dur" value="${n.dur}"> ms`);
  if (n.type === "swipe") { h += row("dari", `<span style="display:flex;gap:6px"><input class="inp num" type="number" data-k="x1" value="${n.x1}"><input class="inp num" type="number" data-k="y1" value="${n.y1}"></span>`); h += row("ke", `<span style="display:flex;gap:6px"><input class="inp num" type="number" data-k="x2" value="${n.x2}"><input class="inp num" type="number" data-k="y2" value="${n.y2}"></span>`); h += row(t("pgHold"), `<input class="inp num" type="number" min="50" step="50" data-k="dur" value="${n.dur}"> ms`); }
  if (n.type === "text" || n.type === "comment") h += row(t("pgText"), `<input class="inp" data-k="text" value="${esc(n.text)}">`);
  if (n.type === "key") h += row(t("pgKey"), `<select data-k="code">${Object.entries(PG_KEYS).map(([c, nm]) => `<option value="${c}"${n.code === c ? " selected" : ""}>${nm}</option>`).join("")}</select>`);
  if (n.type === "scroll") h += row(t("pgDir"), `<select data-k="dir">${["down", "up", "left", "right"].map(d => `<option${n.dir === d ? " selected" : ""}>${d}</option>`).join("")}</select>`);
  if (n.type === "launch") {
    h += row(t("pgPkg"), `<button class="appddbtn" data-pick="1">${n.pkg ? pgAppIcon(n.pkg) + `<span class="ddlbl">${esc(pgLabels[n.pkg] || n.pkg)}</span>` : `<span class="ddph">${t("pgPkgPh")}</span>`}<svg class="ic caret" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></button>`);
    h += row(t("pgActivity"), `<input class="inp" data-k="activity" value="${esc(n.activity)}" placeholder="(launcher)">`);
    if (!pgAppsLoaded) pgLoadApps(); if (n.pkg && !(n.pkg in pgLabels)) pgFetchLabels([n.pkg]).then(() => view === "play" && pgRenderFlow());
  }
  if (n.type === "sleep") h += row(t("pgDelay"), `<input class="inp num" type="number" min="0" data-k="ms" value="${n.ms}"> ms`);
  if (n.type === "repeat") h += row(t("pgTimes"), `<input class="inp num" type="number" min="1" max="999" data-k="count" value="${n.count}">`);
  return h;
}
// ---- free canvas: nodes carry x,y; the plane pans & zooms; connectors auto-route in step order ----
let pgPan = (() => { try { return JSON.parse(store.get("pgPan")) || {x: 24, y: 24, z: 1} } catch { return {x: 24, y: 24, z: 1} } })();
const pgSavePan = () => store.set("pgPan", JSON.stringify(pgPan));
function ensurePositions(){
  let maxY = 24, lastX = 40;
  flow.forEach(n => { if (typeof n.x === "number") { maxY = Math.max(maxY, n.y); lastX = n.x; } });
  flow.forEach(n => { if (typeof n.x !== "number") { n.x = lastX; n.y = maxY + 150; maxY = n.y; } });
}
function pgNodeEl(n, parent, nested){
  const m = PG[n.type], open = pgOpen.has(n.id), st = pgRun[n.id];
  const d = document.createElement("div"); d.className = "fnode" + (st ? " " + st : "") + (nested ? " nested" : " canvasnode"); d.style.setProperty("--nc", `var(${m.c})`);
  const stIcon = st === "run" ? `<i class="spin st"></i>` : st === "ok" ? `<svg class="st" viewBox="0 0 24 24" style="color:var(--ok)"><path d="M5 13l4 4 10-10" fill="none" stroke="currentColor" stroke-width="2.5"/></svg>` : st === "fail" ? `<svg class="st" viewBox="0 0 24 24" style="color:var(--bad)"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2.5"/></svg>` : "";
  d.innerHTML = `<div class="fnh"><span class="nd">${ic(m.i)}</span><span class="nt">${t("n_" + n.type)}</span>
    <span class="nsum">${esc(pgSummary(n))}</span>${stIcon}
    <span class="fnacts">${nested ? `<button class="x up" data-mv="-1" title="↑">${ic("up")}</button><button class="x dn" data-mv="1" title="↓">${ic("down")}</button>` : ""}<button class="x del" data-del title="${t("del")}">${ic("trash")}</button></span></div>
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
  d.querySelector("[data-del]").onclick = () => { const i = parent.indexOf(n); parent.splice(i, 1); pgSave(); pgRenderFlow(); };
  d.querySelectorAll("[data-mv]").forEach(b => b.onclick = () => { const i = parent.indexOf(n), j = i + (+b.dataset.mv); if (j >= 0 && j < parent.length) { parent.splice(i, 1); parent.splice(j, 0, n); pgSave(); pgRenderFlow(); } });
  const hd = d.querySelector(".fnh");
  if (nested) hd.onclick = e => { if (e.target.closest(".fnacts")) return; pgOpen.has(n.id) ? pgOpen.delete(n.id) : pgOpen.add(n.id); pgRenderFlow(); };
  else {
    d.style.left = n.x + "px"; d.style.top = n.y + "px"; hd.onpointerdown = e => pgNodeDrag(e, n, d);
    const pin = document.createElement("span"); pin.className = "port in"; pin.title = t("pgRewire"); d.append(pin);
    const pout = document.createElement("span"); pout.className = "port out"; pout.title = t("pgRewire"); d.append(pout);
    pout.onpointerdown = e => pgPortDrag(e, n, false);  // output -> target comes after
    pin.onpointerdown = e => pgPortDrag(e, n, true);    // input <- source comes before (2-way)
  }
  if (open) {
    d.querySelectorAll("[data-k]").forEach(inp => inp.oninput = inp.onchange = () => {
      const path = inp.dataset.k, v = inp.type === "checkbox" ? inp.checked : inp.type === "number" ? +inp.value : inp.value;
      if (path.startsWith("sel.")) { n.sel[path.slice(4)] = v; if (path === "sel.by") pgRenderFlow(); } else n[path] = v;
      pgSave(); d.querySelector(".nsum").textContent = pgSummary(n); pgDrawEdges();
    });
    const fb = d.querySelector("[data-fill]");
    if (fb) fb.onclick = () => { const b = bestSel(sel); if (b) { Object.assign(n.sel, b); pgSave(); pgRenderFlow(); } };
    const pk = d.querySelector("[data-pick]");
    if (pk) pk.onclick = () => appPicker(pk, pkg => { n.pkg = pkg; pgSave(); pgRenderFlow(); });
  }
  return d;
}
// drag the output port onto another node to rewire the order (that node becomes the next step)
function pgConnect(srcId, dstId){
  if (srcId === dstId) return;
  const di = flow.findIndex(x => x.id === dstId); if (di < 0 || flow.findIndex(x => x.id === srcId) < 0) return;  // top-level only
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
    flow.splice(i + 1, 0, node); pgOpen.add(node.id); pgSave(); pgRenderFlow();
  });
}
// drag a node around the canvas (header); a click without movement toggles its editor
function pgNodeDrag(e, n, el){
  if (e.target.closest(".fnacts")) return;
  e.preventDefault(); const sx = e.clientX, sy = e.clientY, ox = n.x, oy = n.y; let moved = false;
  const mv = ev => { const dx = (ev.clientX - sx) / pgPan.z, dy = (ev.clientY - sy) / pgPan.z; if (Math.abs(ev.clientX - sx) + Math.abs(ev.clientY - sy) > 4) moved = true; n.x = Math.round(ox + dx); n.y = Math.round(oy + dy); el.style.left = n.x + "px"; el.style.top = n.y + "px"; pgDrawEdges(); };
  const up = () => { removeEventListener("pointermove", mv); removeEventListener("pointerup", up); if (moved) pgSave(); else { pgOpen.has(n.id) ? pgOpen.delete(n.id) : pgOpen.add(n.id); pgRenderFlow(); } };
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
  if (n.type === "iff") return pgSel(n.sel) + " ?";
  if (n.type === "comment") return n.text || "";
  if (n.type === "screenshot") return "";
  return "";
}
function pgAddBtn(list, idx){
  const w = document.createElement("div"); w.className = "addhere";
  w.innerHTML = `<button title="${t("pgAdd")}">${ic("expand") && "+"}</button>`;
  w.firstChild.onclick = e => pgAddMenu(e.currentTarget, ty => { list.splice(idx, 0, pgMake(ty)); pgOpen.add(list[idx].id); pgSave(); pgRenderFlow(); });
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
  document.querySelector(".pgaddmenu")?.remove();
  const m = document.createElement("div"); m.className = "pgaddmenu";
  m.innerHTML = PG_GROUPS.map(([g, types]) => `<h5 style="margin:6px 8px 2px;font-size:10px;text-transform:uppercase;color:var(--mut)">${t(g)}</h5>` +
    types.map(ty => `<button class="palbtn" data-add="${ty}" style="--nc:var(${PG[ty].c})"><span class="nd">${ic(PG[ty].i)}</span>${t("n_" + ty)}</button>`).join("")).join("");
  document.body.append(m); paintIcons(m);
  const r = anchor.getBoundingClientRect(); m.style.left = Math.min(r.left, innerWidth - m.offsetWidth - 10) + "px"; m.style.top = Math.min(r.bottom + 4, innerHeight - m.offsetHeight - 10) + "px";
  m.querySelectorAll("[data-add]").forEach(b => b.onclick = () => { pick(b.dataset.add); m.remove(); });
  setTimeout(() => document.addEventListener("click", function h(e){ if (!m.contains(e.target)) { m.remove(); document.removeEventListener("click", h); } }), 0);
}
// Right card = function list; clicking one appends it to the flow.
const PG_DESC = {tap:"n_tapD", longpress:"n_longpressD", doubletap:"n_doubletapD", text:"n_textD", key:"n_keyD",
  swipe:"n_swipeD", scroll:"n_scrollD", launch:"n_launchD", screenshot:"n_shotD",
  wait:"n_waitD", gone:"n_goneD", sleep:"n_sleepD", iff:"n_iffD", repeat:"n_repeatD", comment:"n_commentD"};
// Installed apps for the "Open app" picker (name + logo, pulled from the phone).
let pgAppList = [], pgAppsLoaded = false, pgLabels = {};
async function pgLoadApps(){
  if (!serial()) return;
  pgAppsLoaded = true;
  try {
    const r = await api("/api/apps", {serial: serial(), kind: "all"});
    pgAppList = r.apps.slice().sort((a, b) => (!a.launchable - !b.launchable) || a.package.localeCompare(b.package));
    pgFetchLabels(pgAppList.filter(a => a.launchable).map(a => a.package));  // names for the launchable ones up front
  } catch (e) { pgAppsLoaded = false; }
}
async function pgFetchLabels(pkgs){
  pkgs = pkgs.filter(p => !(p in pgLabels)); if (!pkgs.length) return;
  try { Object.assign(pgLabels, await api("/api/applabels", {serial: serial(), pkgs: pkgs.join(",")})); } catch (e) {}
}
const pgAppIcon = pkg => `<img class="appAv imgav ddicon" alt="" loading="lazy" src="/api/appicon?serial=${encodeURIComponent(serial())}&pkg=${encodeURIComponent(pkg)}" onerror="iconFail(this,'${pkg}')">`;
// Custom app picker dropdown: searchable list of apps with logo + name + package.
function appPicker(anchor, onPick){
  document.querySelector(".appddpanel")?.remove();
  const m = document.createElement("div"); m.className = "appddpanel";
  m.innerHTML = `<input class="inp sm" id="appddq" placeholder="${t("pgAppSearch")}" autocomplete="off"><div class="appddlist" id="appddlist"></div>`;
  document.body.append(m);
  const listEl = m.querySelector("#appddlist"); let q = "";
  function rows(){
    const items = pgAppList.filter(a => { const s = ((pgLabels[a.package] || "") + " " + a.package).toLowerCase(); return !q || s.includes(q); });
    listEl.innerHTML = items.length ? items.slice(0, 300).map(a =>
      `<button class="appddrow" data-p="${esc(a.package)}">${pgAppIcon(a.package)}<span class="ddi"><b>${esc(pgLabels[a.package] || a.package)}</b><small>${esc(a.package)}</small></span>${a.launchable ? '<span class="ddstar">★</span>' : ""}</button>`).join("")
      : `<div class="pgtip">${t(pgAppList.length ? "appNone" : "appListLoad")}</div>`;
    listEl.querySelectorAll("[data-p]").forEach(b => b.onclick = () => { onPick(b.dataset.p); m.remove(); });
    const need = items.slice(0, 40).map(a => a.package).filter(p => !(p in pgLabels));
    if (need.length) pgFetchLabels(need).then(() => { if (document.body.contains(m)) rows(); });
  }
  (pgAppList.length ? Promise.resolve() : pgLoadApps()).then(rows);
  m.querySelector("#appddq").oninput = e => { q = e.target.value.toLowerCase(); rows(); };
  const r = anchor.getBoundingClientRect(); m.style.left = Math.min(r.left, innerWidth - 320) + "px"; m.style.top = Math.min(r.bottom + 4, innerHeight - 360) + "px";
  m.querySelector("#appddq").focus();
  setTimeout(() => document.addEventListener("click", function h(e){ if (!m.contains(e.target) && !anchor.contains(e.target)) { m.remove(); document.removeEventListener("click", h); } }), 0);
}
function pgRenderPalette(){
  const box = $("#pgPalette"); if (!box) return;
  box.innerHTML = PG_GROUPS.map(([g, types]) => `<h5>${t(g)}</h5>` + types.map(ty =>
    `<button class="palbtn" data-add="${ty}" style="--nc:var(${PG[ty].c})"><span class="nd">${ic(PG[ty].i)}</span><span><b>${t("n_" + ty)}</b><small>${t(PG_DESC[ty])}</small></span></button>`).join("")).join("");
  paintIcons(box);
  box.querySelectorAll("[data-add]").forEach(b => b.onclick = () => {
    const n = pgMake(b.dataset.add); flow.push(n); pgOpen.add(n.id); pgSave(); pgRenderFlow();
    $("#pgFlow").querySelector(".fnode:last-of-type")?.scrollIntoView({block: "nearest"});
  });
}
// Grab a step straight from the phone: click an element on screen -> add a node (type from the dropdown) with its selector.
let pgGrabOn = false;
function pgGrabEl(n){
  const type = $("#pgGrabType").value, node = pgMake(type);
  if (node.sel) Object.assign(node.sel, bestSel(n));
  flow.push(node); pgOpen.add(node.id); pgSave(); pgRenderFlow();
  sel = n; draw();
  toast("＋ " + t("n_" + type) + ": " + (bestSel(n).val || n.cls));
}

// turn the inspector's selected element into a Playground selector
function bestSel(n){
  if (!n) return null;
  const a = n.attrs;
  if (a["resource-id"]) return {by: "rid", val: a["resource-id"], contains: false};
  if (a["content-desc"]) return {by: "desc", val: a["content-desc"], contains: false};
  if (a.text) return {by: "text", val: a.text, contains: false};
  return {by: "cls", val: n.cls, contains: false};
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
    e.preventDefault(); const sx = e.clientX, sy = e.clientY, ox = pgPan.x, oy = pgPan.y; vp.classList.add("panning");
    const mv = ev => { pgPan.x = ox + (ev.clientX - sx); pgPan.y = oy + (ev.clientY - sy); pgApplyPan(); };
    const up = () => { removeEventListener("pointermove", mv); removeEventListener("pointerup", up); vp.classList.remove("panning"); };
    addEventListener("pointermove", mv); addEventListener("pointerup", up);
  });
  vp.addEventListener("wheel", e => { if (!flow.length) return; e.preventDefault(); const r = vp.getBoundingClientRect(); pgZoom(e.deltaY < 0 ? 1.12 : 0.89, e.clientX - r.left, e.clientY - r.top); }, {passive: false});
  document.querySelectorAll("#pgZoom button").forEach(b => b.onclick = () => b.dataset.z === "fit" ? pgFit() : pgZoom(b.dataset.z === "in" ? 1.2 : 0.83));
})();
$("#pgRun").onclick = pgRunFlow;
$("#pgStop").onclick = () => { pgStop = true; toast(t("pgStopping")); };
document.querySelectorAll("#pgFmt button").forEach(b => b.onclick = () => { pgFmt = b.dataset.f; store.set("pgFmt", pgFmt); pgRenderFlow(); });
$("#pgCopy").onclick = () => copy(pgExport());
$("#pgDl").onclick = () => { const blob = new Blob([pgExport()], {type: "text/plain"}), a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "flow." + (pgFmt === "mcp" ? "txt" : pgFmt === "json" ? "json" : "py"); a.click(); URL.revokeObjectURL(a.href); };
$("#pgImport").onclick = () => $("#pgFile").click();
$("#pgFile").onchange = e => { const f = e.target.files[0]; if (!f) return; const r = new FileReader(); r.onload = () => { try { const j = JSON.parse(r.result); flow = Array.isArray(j) ? j : j.flow || []; if (j.data && j.data.cols) { pgData = j.data; pgSaveData(); } pgSave(); pgRenderFlow(); toast(t("pgImported")); } catch (x) { toast(t("err") + ": " + x.message); } }; r.readAsText(f); e.target.value = ""; };
$("#pgDataBtn").onclick = pgOpenData;
$("#pgClear").onclick = () => { if (!pgClearArm) { pgClearArm = 1; $("#pgClear").classList.add("danger"); toast(t("confirmClear")); setTimeout(() => { pgClearArm = 0; $("#pgClear").classList.remove("danger"); }, 4000); return; } flow = []; pgClearArm = 0; $("#pgClear").classList.remove("danger"); pgSave(); pgRenderFlow(); };
let page = "work";
paintIcons(); applyTheme(); applyLang(); loadDevices().then(() => serial() && devices.length === 1 && dump());
