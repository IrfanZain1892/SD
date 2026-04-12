import { Berita, Siswa, AuthUser, Rapor, Notification } from '../types';

export const beritaData: Berita[] = [
  {
    id: 1,
    kategori: "PPDB",
    judul: "Penerimaan Peserta Didik Baru 2025/2026 Resmi Dibuka",
    tanggal: "10 Juni 2025",
    excerpt: "SD Negeri Mekarsari membuka pendaftaran siswa baru untuk tahun ajaran 2025/2026. Segera daftarkan putra-putri Anda melalui portal online kami.",
    warnaBadge: "orange",
    content: "SD Negeri Mekarsari dengan bangga mengumumkan pembukaan Penerimaan Peserta Didik Baru (PPDB) untuk tahun ajaran 2025/2026. Kami mengundang orang tua dan wali murid untuk mendaftarkan putra-putri mereka di sekolah kami yang berakreditasi B dan memiliki fasilitas lengkap serta tenaga pengajar yang berdedikasi.\n\nProses pendaftaran dilakukan sepenuhnya secara online melalui website resmi kami. Persyaratan utama meliputi akta kelahiran, kartu keluarga, dan pas foto terbaru. Kami berkomitmen untuk memberikan pendidikan berkualitas yang membentuk karakter dan potensi setiap anak.\n\nJangan lewatkan kesempatan untuk menjadi bagian dari keluarga besar SD Negeri Mekarsari. Untuk informasi lebih lanjut mengenai alur pendaftaran dan persyaratan dokumen, silakan kunjungi halaman PPDB di website kami atau hubungi sekretariat pendaftaran kami."
  },
  {
    id: 2,
    kategori: "Prestasi",
    judul: "Siswa Kelas 5 Raih Juara 2 Olimpiade Matematika Tingkat Kecamatan",
    tanggal: "3 Juni 2025",
    excerpt: "Atas nama sekolah, kami mengucapkan selamat kepada ananda Rizky Pratama atas prestasinya meraih juara 2 Olimpiade Matematika.",
    warnaBadge: "yellow"
  },
  {
    id: 3,
    kategori: "Pengumuman",
    judul: "Jadwal Ujian Akhir Semester Genap Tahun Ajaran 2024/2025",
    tanggal: "28 Mei 2025",
    excerpt: "Berikut adalah jadwal lengkap ujian akhir semester genap yang akan dilaksanakan mulai tanggal 15 Juni 2025.",
    warnaBadge: "blue"
  },
  {
    id: 4,
    kategori: "Berita",
    judul: "Peringatan Hari Pendidikan Nasional yang Meriah di SDN Mekarsari",
    tanggal: "2 Mei 2025",
    excerpt: "Seluruh siswa dan guru berpartisipasi dalam upacara dan berbagai lomba edukatif dalam rangka memperingati Hardiknas.",
    warnaBadge: "green"
  },
  {
    id: 5,
    kategori: "Prestasi",
    judul: "Tim Pramuka SDN Mekarsari Raih Terbaik di Jambore Kabupaten",
    tanggal: "20 April 2025",
    excerpt: "Kegiatan Jambore Kabupaten Kuningan berlangsung meriah dan tim kami berhasil membawa pulang predikat regu terbaik.",
    warnaBadge: "yellow"
  },
  {
    id: 6,
    kategori: "Pengumuman",
    judul: "Libur Idul Adha dan Jadwal Masuk Sekolah Kembali",
    tanggal: "5 Juni 2025",
    excerpt: "Sehubungan dengan Hari Raya Idul Adha 1446 H, sekolah akan diliburkan sementara dan masuk kembali pada tanggal yang ditentukan.",
    warnaBadge: "blue"
  }
];

export const siswaKelas5A: Siswa[] = [
  { id: "s001", nama: "Ahmad Fauzi", nisn: "0123456789", jenisKelamin: "L" },
  { id: "s002", nama: "Siti Nuraini", nisn: "0123456790", jenisKelamin: "P" },
  { id: "s003", nama: "Dede Supriatna", nisn: "0123456791", jenisKelamin: "L" },
  { id: "s004", nama: "Rani Wijaya", nisn: "0123456792", jenisKelamin: "P" },
  { id: "s005", nama: "Asep Sunandar", nisn: "0123456793", jenisKelamin: "L" },
  { id: "s006", nama: "Neng Lilis", nisn: "0123456794", jenisKelamin: "P" },
  { id: "s007", nama: "Ujang Mulyana", nisn: "0123456795", jenisKelamin: "L" },
  { id: "s008", nama: "Teti Rohaeti", nisn: "0123456796", jenisKelamin: "P" },
  { id: "s009", nama: "Hendra Kurniawan", nisn: "0123456797", jenisKelamin: "L" },
  { id: "s010", nama: "Yanti Nurhasanah", nisn: "0123456798", jenisKelamin: "P" },
  { id: "s011", nama: "Iwan Setiawan", nisn: "0123456799", jenisKelamin: "L" },
  { id: "s012", nama: "Nisa Fitriani", nisn: "0123456800", jenisKelamin: "P" },
  { id: "s013", nama: "Budi Santoso", nisn: "0123456801", jenisKelamin: "L" },
  { id: "s014", nama: "Ani Maryani", nisn: "0123456802", jenisKelamin: "P" },
  { id: "s015", nama: "Cecep Gorbachev", nisn: "0123456803", jenisKelamin: "L" },
  { id: "s016", nama: "Dewi Sartika", nisn: "0123456804", jenisKelamin: "P" },
  { id: "s017", nama: "Eka Ramdani", nisn: "0123456805", jenisKelamin: "L" },
  { id: "s018", nama: "Fitri Handayani", nisn: "0123456806", jenisKelamin: "P" },
  { id: "s019", nama: "Ginanjar Saputra", nisn: "0123456807", jenisKelamin: "L" },
  { id: "s020", nama: "Hani Heryani", nisn: "0123456808", jenisKelamin: "P" },
  { id: "s021", nama: "Indra Lesmana", nisn: "0123456809", jenisKelamin: "L" },
  { id: "s022", nama: "Julia Perez", nisn: "0123456810", jenisKelamin: "P" },
  { id: "s023", nama: "Kiki Amalia", nisn: "0123456811", jenisKelamin: "P" },
  { id: "s024", nama: "Lutfi Agizal", nisn: "0123456812", jenisKelamin: "L" },
  { id: "s025", nama: "Maman Abdurrahman", nisn: "0123456813", jenisKelamin: "L" },
  { id: "s026", nama: "Nana Mardiana", nisn: "0123456814", jenisKelamin: "P" },
  { id: "s027", nama: "Oman Suherman", nisn: "0123456815", jenisKelamin: "L" },
  { id: "s028", nama: "Pipit Pitriasari", nisn: "0123456816", jenisKelamin: "P" },
  { id: "s029", nama: "Qori Sandioriva", nisn: "0123456817", jenisKelamin: "P" },
  { id: "s030", nama: "Rizky Billar", nisn: "0123456818", jenisKelamin: "L" }
];

export const guruData = [
  { id: "g001", nama: "Ibu Hj. Sari Dewi, S.Pd", mapel: "Wali Kelas 5A / IPA", email: "guru@sdnmekarsari.sch.id" },
  { id: "g002", nama: "Bapak Drs. Mulyadi", mapel: "Kepala Sekolah", email: "admin@sdnmekarsari.sch.id" },
  { id: "g003", nama: "Ibu Yuni Kartika, S.Pd", mapel: "Wali Kelas 6A / Matematika", email: "yuni@sdnmekarsari.sch.id" }
];

export const raporData: Record<string, Rapor> = {
  "s001": {
    id: "r001",
    siswaId: "s001",
    kelas: "5A",
    semester: "Genap",
    tahunAjaran: "2024/2025",
    nilai: [
      { mapel: "Bahasa Indonesia", kkm: 70, nilai: 82, predikat: "B", keterangan: "Sangat baik dalam memahami teks narasi." },
      { mapel: "Matematika", kkm: 70, nilai: 78, predikat: "B", keterangan: "Baik dalam operasi hitung bilangan bulat." },
      { mapel: "IPA", kkm: 70, nilai: 85, predikat: "A", keterangan: "Sangat baik dalam memahami siklus hidup makhluk hidup." },
      { mapel: "IPS", kkm: 70, nilai: 80, predikat: "B", keterangan: "Baik dalam memahami sejarah perjuangan bangsa." },
      { mapel: "PAI", kkm: 75, nilai: 88, predikat: "A", keterangan: "Sangat baik dalam hafalan surat-surat pendek." },
      { mapel: "PJOK", kkm: 70, nilai: 90, predikat: "A", keterangan: "Sangat baik dalam praktik senam lantai." },
      { mapel: "SBdP", kkm: 70, nilai: 83, predikat: "B", keterangan: "Baik dalam membuat karya seni dekoratif." },
    ],
    rataRata: 83.7,
    catatanWali: "Ahmad menunjukkan perkembangan yang sangat baik dalam mata pelajaran IPA dan Olahraga. Pertahankan semangat belajarmu!",
    kehadiran: { H: 105, S: 2, I: 1, A: 0 },
    tanggalUpload: "20 Juni 2025",
    fileType: "PDF",
    fileSize: "2.4 MB"
  }
};

export const notifData: Notification[] = [
  { id: 1, tipe: "pengumuman", teks: "Jadwal UAS telah diupload", waktu: "2 jam lalu", dibaca: false },
  { id: 2, tipe: "absensi", teks: "Absensi kelas 5A hari ini belum diisi", waktu: "5 jam lalu", dibaca: false },
  { id: 3, tipe: "rapor", teks: "Rapor Semester Genap kelas 6 sudah tersedia", waktu: "1 hari lalu", dibaca: true },
  { id: 4, tipe: "ppdb", teks: "3 pendaftar baru menunggu verifikasi", waktu: "2 hari lalu", dibaca: true }
];

export const testimoniData = [
  { nama: "Ibu Siti Rahayu", anak: "Orang tua Rizky — Kelas 4A", kutipan: "Guru-gurunya sabar dan perhatian. Anak saya jadi lebih semangat belajar sejak masuk SD Negeri Mekarsari.", bintang: 5 },
  { nama: "Bapak Deden Sopandi", anak: "Orang tua Nisa — Kelas 3B", kutipan: "Alhamdulillah, komunikasi antara guru dan orang tua sangat baik. Perkembangan anak kami selalu dipantau.", bintang: 5 },
  { nama: "Ibu Yanti Nurhasanah", anak: "Orang tua Farhan — Kelas 6A", kutipan: "Sekolah yang lingkungannya nyaman dan aman. Anak saya betah belajar di sini dari kelas 1 sampai sekarang.", bintang: 5 },
];

export const ekskulData = [
  { ikon: "🏕️", nama: "Pramuka", jadwal: "Jumat, 14.00" },
  { ikon: "💃", nama: "Seni Tari", jadwal: "Sabtu, 08.00" },
  { ikon: "⚽", nama: "Futsal", jadwal: "Sabtu, 10.00" },
  { ikon: "🎨", nama: "Seni Lukis", jadwal: "Sabtu, 08.00" },
  { ikon: "🎵", nama: "Paduan Suara", jadwal: "Kamis, 14.00" },
  { ikon: "📖", nama: "Literasi", jadwal: "Rabu, 14.00" },
  { ikon: "🏓", nama: "Tenis Meja", jadwal: "Jumat, 14.00" },
  { ikon: "🇬🇧", nama: "English Club", jadwal: "Selasa, 14.00" },
];
