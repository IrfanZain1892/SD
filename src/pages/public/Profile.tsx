import React from 'react';
import { motion } from 'motion/react';
import { 
  History, 
  Target, 
  Eye, 
  Users, 
  BookOpen, 
  Monitor, 
  Dribbble, 
  HeartPulse, 
  Home, 
  Utensils, 
  Gamepad2,
  Trophy,
  CheckCircle2
} from 'lucide-react';
import { PageHeader } from '../../components/shared/PageHeader';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Avatar, AvatarFallback } from '../../components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';

export const Profile: React.FC = () => {
  const milestones = [
    { year: "1997", title: "Pendirian Sekolah", desc: "SD Negeri Mekarsari resmi didirikan untuk melayani kebutuhan pendidikan dasar di Desa Mekarsari." },
    { year: "2005", title: "Renovasi Gedung Utama", desc: "Pembangunan 6 ruang kelas baru dan perpustakaan untuk mendukung kenyamanan belajar." },
    { year: "2012", title: "Akreditasi B Pertama", desc: "Meraih predikat Akreditasi B dari BAN-S/M sebagai bukti kualitas layanan pendidikan." },
    { year: "2018", title: "Juara Umum Lomba Seni", desc: "Menjadi juara umum tingkat kabupaten dalam ajang Festival dan Lomba Seni Siswa Nasional." },
    { year: "2021", title: "Implementasi Kurikulum Merdeka", desc: "Menjadi salah satu sekolah penggerak yang menerapkan Kurikulum Merdeka di Kabupaten Kuningan." },
    { year: "2024", title: "Digitalisasi Sekolah", desc: "Peluncuran sistem absensi digital dan rapor online untuk transparansi pendidikan." }
  ];

  const visi = "Mewujudkan peserta didik yang cerdas, berkarakter, mandiri, dan berdaya saing";
  const misi = [
    "Menyelenggarakan pendidikan yang berkualitas dan inovatif.",
    "Menanamkan nilai-nilai karakter dan budi pekerti luhur.",
    "Mengembangkan potensi minat dan bakat siswa secara optimal.",
    "Menciptakan lingkungan sekolah yang aman, nyaman, dan religius.",
    "Membangun kerjasama yang harmonis dengan orang tua dan masyarakat."
  ];

  const fasilitas = [
    { icon: <Home />, name: "Ruang Kelas", desc: "12 ruang kelas yang bersih dan dilengkapi media pembelajaran modern." },
    { icon: <BookOpen />, name: "Perpustakaan", desc: "Koleksi buku lengkap untuk meningkatkan minat baca siswa." },
    { icon: <Monitor />, name: "Lab Komputer", desc: "Fasilitas komputer untuk pengenalan teknologi sejak dini." },
    { icon: <Dribbble />, name: "Lapangan Olahraga", desc: "Area luas untuk berbagai kegiatan olahraga dan upacara." },
    { icon: <HeartPulse />, name: "UKS", desc: "Layanan kesehatan pertama bagi siswa yang membutuhkan." },
    { icon: <Home />, name: "Mushola", desc: "Sarana ibadah yang nyaman untuk kegiatan keagamaan." },
    { icon: <Utensils />, name: "Kantin Sehat", desc: "Menyediakan makanan bergizi dan higienis bagi siswa." },
    { icon: <Gamepad2 />, name: "Area Bermain", desc: "Taman bermain yang aman untuk sosialisasi siswa." }
  ];

  const struktur = [
    { role: "Kepala Sekolah", name: "Bapak Drs. Mulyadi", color: "bg-primary" },
    { role: "Wakil Kepala Sekolah", name: "Ibu Hj. Siti Aminah, S.Pd", color: "bg-primary-dark" },
    { role: "Koordinator Kurikulum", name: "Ibu Sari Dewi, S.Pd", color: "bg-secondary" },
    { role: "Koordinator Kesiswaan", name: "Bapak Hendra, S.Pd", color: "bg-secondary" },
    { role: "Bendahara / TU", name: "Ibu Yanti, S.E", color: "bg-accent" }
  ];

  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Profil Sekolah" 
        subtitle="Mengenal lebih dekat SD Negeri Mekarsari, sejarah, visi misi, dan fasilitas kami."
        background="gradient-hero bg-primary"
      />

      {/* Sejarah Section */}
      <section className="py-24 bg-[#F0F4FF]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-16">
            <Badge className="bg-primary/10 text-primary border-none mb-3 px-4 py-1 rounded-full font-ui font-bold uppercase tracking-widest text-[10px]">
              Sejarah
            </Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-text-primary flex items-center">
              <History className="w-8 h-8 mr-3 text-primary" />
              Perjalanan Kami
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-[#F0F4FF] hidden md:block" />
            
            <div className="space-y-12">
              {milestones.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 w-full md:w-auto mb-4 md:mb-0">
                    <Card className={`border-none shadow-lg rounded-3xl overflow-hidden ${idx % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                      <CardContent className="p-6">
                        <span className="text-primary font-heading font-black text-2xl mb-2 block">{item.year}</span>
                        <h4 className="font-heading font-bold text-text-primary text-lg mb-2">{item.title}</h4>
                        <p className="text-text-muted font-ui text-sm leading-relaxed">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary border-4 border-white shadow-md z-10 hidden md:flex items-center justify-center text-white font-bold text-xs">
                    {idx + 1}
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visi Misi Section */}
      <section className="py-24 bg-[#F0F4FF]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#F0F4FF] p-10 rounded-[40px] shadow-xl"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                <Eye className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-heading font-extrabold text-text-primary mb-6">Visi Kami</h2>
              <p className="text-2xl font-heading font-bold text-primary italic leading-tight">
                "{visi}"
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary p-10 rounded-[40px] shadow-xl text-white"
            >
              <div className="w-16 h-16 bg-[#F0F4FF]/20 rounded-2xl flex items-center justify-center text-white mb-8">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-heading font-extrabold mb-6">Misi Kami</h2>
              <ul className="space-y-4">
                {misi.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-[#F0F4FF]/20 flex items-center justify-center shrink-0 mr-3 mt-1">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="font-ui font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Struktur Organisasi */}
      <section className="py-24 bg-[#F0F4FF]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-secondary/10 text-secondary border-none mb-3 px-4 py-1 rounded-full font-ui font-bold uppercase tracking-widest text-[10px]">
              Organisasi
            </Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-text-primary">Struktur Organisasi</h2>
          </div>

          <div className="flex flex-col items-center">
            {/* Kepala Sekolah */}
            <div className="mb-12">
              <div className="bg-primary p-6 rounded-3xl text-white text-center shadow-xl w-64 transform hover:scale-105 transition-transform">
                <Avatar className="w-20 h-20 mx-auto mb-4 border-4 border-white/20">
                  <AvatarFallback className="bg-[#F0F4FF] text-primary font-bold text-xl">MS</AvatarFallback>
                </Avatar>
                <h4 className="font-heading font-bold text-lg leading-tight">{struktur[0].name}</h4>
                <p className="text-xs font-ui opacity-80 uppercase tracking-widest mt-1">{struktur[0].role}</p>
              </div>
            </div>

            {/* Connecting Line */}
            <div className="w-1 h-12 bg-[#F0F4FF] mb-12" />

            {/* Other Staff */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
              {struktur.slice(1).map((staff, idx) => (
                <div key={idx} className="bg-[#F0F4FF] border border-surface p-6 rounded-3xl text-center shadow-md hover:shadow-xl transition-all group">
                  <Avatar className="w-16 h-16 mx-auto mb-4 border-2 border-surface group-hover:border-primary transition-colors">
                    <AvatarFallback className={`${staff.color} text-white font-bold`}>
                      {staff.name.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <h4 className="font-heading font-bold text-text-primary leading-tight">{staff.name}</h4>
                  <p className="text-[10px] font-ui text-text-muted uppercase tracking-widest mt-1">{staff.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fasilitas Section */}
      <section id="fasilitas" className="py-24 bg-[#F0F4FF]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-accent/10 text-accent border-none mb-3 px-4 py-1 rounded-full font-ui font-bold uppercase tracking-widest text-[10px]">
              Fasilitas
            </Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-text-primary">Fasilitas Sekolah</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fasilitas.map((item, idx) => (
              <Card key={idx} className="border-none shadow-md rounded-3xl hover:shadow-xl transition-all group">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-[#F0F4FF] rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-7 h-7" })}
                  </div>
                  <h4 className="font-heading font-bold text-text-primary mb-2">{item.name}</h4>
                  <p className="text-xs text-text-muted font-ui leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prestasi Section */}
      <section id="prestasi" className="py-24 bg-[#F0F4FF]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-none mb-3 px-4 py-1 rounded-full font-ui font-bold uppercase tracking-widest text-[10px]">
              Prestasi
            </Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-text-primary">Prestasi Membanggakan</h2>
          </div>

          <Tabs defaultValue="semua" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-[#F0F4FF] p-1 rounded-2xl">
                <TabsTrigger value="semua" className="rounded-xl px-6 font-ui font-bold">Semua</TabsTrigger>
                <TabsTrigger value="akademik" className="rounded-xl px-6 font-ui font-bold">Akademik</TabsTrigger>
                <TabsTrigger value="non-akademik" className="rounded-xl px-6 font-ui font-bold">Non-Akademik</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="semua">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[...Array(8)].map((_, idx) => (
                  <Card key={idx} className="border-surface rounded-3xl overflow-hidden hover:shadow-lg transition-all">
                    <div className="h-32 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                      <Trophy className="w-12 h-12 text-primary/30" />
                    </div>
                    <CardContent className="p-6">
                      <Badge className="mb-2 bg-accent/10 text-accent border-none text-[10px]">Juara {idx % 3 + 1}</Badge>
                      <h4 className="font-heading font-bold text-text-primary text-sm mb-1">Lomba Matematika Tingkat Kecamatan</h4>
                      <p className="text-[10px] text-text-muted font-ui">Tahun 202{4 - (idx % 3)}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            {/* Other tabs content would follow same pattern */}
          </Tabs>
        </div>
      </section>
    </div>
  );
};





