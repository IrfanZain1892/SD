import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  GraduationCap, 
  Users, 
  Trophy, 
  Calendar,
  CheckCircle2,
  Star,
  Phone
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { StatCounter } from '../../components/shared/StatCounter';
import { NewsCard } from '../../components/shared/NewsCard';
import { PhotoCard } from '../../components/shared/PhotoCard';
import { beritaData, testimoniData, ekskulData } from '../../data/dummy';
import { Badge } from '../../components/ui/badge';

const slides = [
  {
    id: 1,
    title: "Membentuk Generasi Cerdas dan Berkarakter",
    subtitle: "SD Negeri Mekarsari — Akreditasi B, Maleber, Kuningan",
    cta: "Daftar Siswa Baru",
    link: "/ppdb",
    color: "from-primary via-primary-dark to-secondary"
  },
  {
    id: 2,
    title: "Fasilitas Belajar yang Mendukung Potensi Anak",
    subtitle: "Lingkungan belajar yang aman, nyaman, dan inspiratif untuk masa depan.",
    cta: "Lihat Fasilitas",
    link: "/profil#fasilitas",
    color: "from-blue-600 via-blue-800 to-teal-600"
  },
  {
    id: 3,
    title: "Prestasi Lokal, Semangat Nasional",
    subtitle: "Wadah bagi siswa untuk mengeksplorasi bakat dan meraih mimpi.",
    cta: "Lihat Prestasi",
    link: "/profil#prestasi",
    color: "from-green-600 via-green-800 to-blue-600"
  }
];

export const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].color}`}
          >
            <div className="absolute inset-0 bg-black/30" />
            
            {/* Decorative SVG Illustration Placeholder */}
            <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-20 hidden lg:block">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <circle cx="200" cy="200" r="150" fill="white" />
                <rect x="100" y="100" width="200" height="200" rx="20" fill="white" opacity="0.5" />
              </svg>
            </div>

            <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="max-w-3xl"
              >
                <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-lg md:text-xl text-white/90 font-ui font-medium mb-10 max-w-2xl">
                  {slides[currentSlide].subtitle}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-ui font-bold px-8 py-7 rounded-2xl text-lg shadow-xl transform hover:scale-105 transition-all">
                    <Link to={slides[currentSlide].link}>{slides[currentSlide].cta}</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-surface/10 border-white/40 text-white hover:bg-white/20 font-ui font-bold px-8 py-7 rounded-2xl text-lg backdrop-blur-sm">
                    <Link to="/profil">Tentang Kami</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === idx ? 'bg-white w-8' : 'bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Nav Buttons */}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-surface/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-surface/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all">
          <ChevronRight className="w-6 h-6" />
        </button>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <StatCounter icon={<GraduationCap />} end={312} label="Siswa Aktif" />
            <StatCounter icon={<Users />} end={18} label="Guru & Staff" />
            <StatCounter icon={<Trophy />} end={47} label="Penghargaan" />
            <StatCounter icon={<Calendar />} end={28} label="Tahun Berdiri" />
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="mb-6 md:mb-0">
              <Badge className="bg-primary/10 text-primary border-none mb-3 px-4 py-1 rounded-full font-ui font-bold uppercase tracking-widest text-[10px]">
                Update Terbaru
              </Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-text-primary">
                📰 Berita & Pengumuman Terbaru
              </h2>
            </div>
            <Button asChild variant="ghost" className="text-primary font-ui font-bold hover:bg-primary/5 group">
              <Link to="/berita" className="flex items-center">
                Lihat Semua Berita
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beritaData.slice(0, 3).map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-surface overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-secondary/10 text-secondary border-none mb-4 px-4 py-1 rounded-full font-ui font-bold uppercase tracking-widest text-[10px]">
                Keunggulan Kami
              </Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-text-primary mb-6 leading-tight">
                Mengapa Memilih SD Negeri Mekarsari?
              </h2>
              <p className="text-text-muted font-ui text-lg mb-10 leading-relaxed">
                Kami berkomitmen memberikan pendidikan terbaik dengan pendekatan yang humanis dan inovatif, memastikan setiap anak tumbuh menjadi pribadi yang cerdas dan berakhlak mulia.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {[
                  "Kurikulum Merdeka Belajar",
                  "Guru Berpengalaman & Berdedikasi",
                  "Lingkungan Belajar Aman & Nyaman",
                  "Kegiatan Ekstrakurikuler Beragam"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="font-ui font-semibold text-text-primary">{item}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="rounded-2xl px-8 py-6 font-ui font-bold shadow-lg shadow-primary/20">
                <Link to="/profil">Pelajari Lebih Lanjut</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-primary/5 rounded-[40px] rotate-3 -z-10"></div>
              <div className="bg-surface rounded-[40px] p-8 aspect-square flex items-center justify-center">
                {/* SVG Illustration Placeholder */}
                <svg viewBox="0 0 400 400" className="w-full h-full text-primary/20">
                  <circle cx="200" cy="200" r="150" fill="currentColor" />
                  <path d="M150 150 L250 150 L250 250 L150 250 Z" fill="currentColor" opacity="0.5" />
                  <circle cx="150" cy="150" r="30" fill="currentColor" />
                  <circle cx="250" cy="150" r="30" fill="currentColor" />
                </svg>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-surface p-6 rounded-3xl shadow-2xl flex items-center space-x-4 border border-surface">
                <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-white">
                  <Star className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <div className="text-sm font-ui font-bold text-text-primary">Akreditasi B</div>
                  <div className="text-xs text-text-muted">Kualitas Terjamin</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge className="bg-primary/10 text-primary border-none mb-3 px-4 py-1 rounded-full font-ui font-bold uppercase tracking-widest text-[10px]">
              Galeri
            </Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-text-primary mb-4">
              📸 Momen Kegiatan Kami
            </h2>
            <p className="text-text-muted font-ui">
              Intip berbagai keseruan dan aktivitas belajar mengajar di SD Negeri Mekarsari.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
            <PhotoCard label="Upacara Bendera" color="bg-blue-500/20" />
            <PhotoCard label="Kegiatan Pramuka" color="bg-green-500/20" />
            <PhotoCard label="Pentas Seni" color="bg-purple-500/20" />
            <PhotoCard label="Karya Wisata" color="bg-orange-500/20" />
            <PhotoCard label="Olahraga" color="bg-red-500/20" />
            <PhotoCard label="Belajar di Kelas" color="bg-teal-500/20" />
          </div>

          <div className="text-center">
            <Button asChild variant="outline" className="rounded-2xl px-8 py-6 font-ui font-bold border-primary text-primary hover:bg-primary hover:text-white transition-all">
              <Link to="/galeri">Lihat Galeri Lengkap</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Extracurricular Section */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge className="bg-accent/10 text-accent border-none mb-3 px-4 py-1 rounded-full font-ui font-bold uppercase tracking-widest text-[10px]">
              Ekstrakurikuler
            </Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-text-primary mb-4">
              🌟 Kegiatan Ekstrakurikuler
            </h2>
            <p className="text-text-muted font-ui">
              Wadah pengembangan minat dan bakat siswa di luar jam pelajaran formal.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {ekskulData.map((ekskul, idx) => (
              <div key={idx} className="p-6 bg-surface rounded-3xl border border-transparent hover:border-primary/20 hover:bg-surface hover:shadow-xl transition-all duration-300 group text-center">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">{ekskul.ikon}</div>
                <h3 className="font-heading font-bold text-text-primary mb-1">{ekskul.nama}</h3>
                <p className="text-xs text-text-muted font-ui">{ekskul.jadwal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-primary overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge className="bg-surface/10 text-white border-none mb-3 px-4 py-1 rounded-full font-ui font-bold uppercase tracking-widest text-[10px]">
              Testimoni
            </Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-4">
              Apa Kata Orang Tua Siswa?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimoniData.map((item, idx) => (
              <div key={idx} className="bg-surface p-8 rounded-[32px] shadow-2xl relative">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <Star className="w-6 h-6 fill-current" />
                </div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-heading font-bold mr-4">
                    {item.nama.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-text-primary leading-none mb-1">{item.nama}</h4>
                    <p className="text-xs text-text-muted font-ui">{item.anak}</p>
                  </div>
                </div>
                <p className="text-text-muted font-ui italic leading-relaxed">
                  "{item.kutipan}"
                </p>
                <div className="flex mt-6 space-x-1">
                  {[...Array(item.bintang)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA PPDB Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-6">
              🎒 Daftarkan Putra-Putri Anda Sekarang!
            </h2>
            <p className="text-xl text-white/90 font-ui font-medium mb-12 max-w-2xl mx-auto">
              Penerimaan Peserta Didik Baru (PPDB) Tahun Ajaran 2025/2026 telah dibuka. Mari bergabung bersama kami!
            </p>
            
            {/* Countdown Placeholder */}
            <div className="flex justify-center space-x-4 md:space-x-8 mb-12">
              {[
                { label: 'Hari', value: '78' },
                { label: 'Jam', value: '12' },
                { label: 'Menit', value: '45' },
                { label: 'Detik', value: '30' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-surface/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white text-2xl md:text-4xl font-heading font-bold border border-white/20 mb-2">
                    {item.value}
                  </div>
                  <span className="text-xs md:text-sm font-ui font-bold text-white/70 uppercase tracking-widest">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-ui font-bold px-10 py-8 rounded-2xl text-xl shadow-2xl transform hover:scale-105 transition-all">
                <Link to="/ppdb">Daftar Online Sekarang</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-surface/10 font-ui font-bold px-10 py-8 rounded-2xl text-xl backdrop-blur-sm">
                <Link to="/kontak" className="flex items-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Hubungi Kami
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};


