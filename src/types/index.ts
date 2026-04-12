export type UserRole = 'admin' | 'guru' | 'ortu';

export interface AuthUser {
  id: string;
  nama: string;
  email: string;
  role: UserRole;
  kelas?: string;
  namaAnak?: string;
}

export interface Berita {
  id: number;
  kategori: 'Berita' | 'Pengumuman' | 'Prestasi' | 'PPDB';
  judul: string;
  tanggal: string;
  excerpt: string;
  content?: string;
  warnaBadge: string;
  image?: string;
}

export interface Siswa {
  id: string;
  nama: string;
  nisn: string;
  jenisKelamin: 'L' | 'P';
}

export interface AbsensiRecord {
  siswaId: string;
  tanggal: string;
  status: 'H' | 'S' | 'I' | 'A';
  keterangan?: string;
}

export interface NilaiMapel {
  mapel: string;
  kkm: number;
  nilai: number;
  predikat: string;
  keterangan: string;
}

export interface Rapor {
  id: string;
  siswaId: string;
  kelas: string;
  semester: 'Ganjil' | 'Genap';
  tahunAjaran: string;
  nilai: NilaiMapel[];
  rataRata: number;
  catatanWali: string;
  kehadiran: {
    H: number;
    S: number;
    I: number;
    A: number;
  };
  tanggalUpload: string;
  fileUrl?: string;
  fileType?: 'PDF' | 'XLSX';
  fileSize?: string;
}

export interface Notification {
  id: number;
  tipe: 'pengumuman' | 'absensi' | 'rapor' | 'ppdb' | 'sistem';
  teks: string;
  waktu: string;
  dibaca: boolean;
}

export interface PPDBRegistration {
  id: string;
  namaSiswa: string;
  tanggalDaftar: string;
  status: 'Menunggu Verifikasi' | 'Dokumen Kurang' | 'Diterima' | 'Tidak Diterima';
  dataSiswa: any;
  dataOrangTua: any;
}
