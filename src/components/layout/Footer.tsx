import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { Button } from '../ui/button';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-text-primary text-white pt-16 pb-8 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Identity */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3">
                <span className="text-primary font-heading font-bold text-xl">M</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg leading-none">SD Negeri</span>
                <span className="font-heading font-bold text-lg leading-none text-white/80">Mekarsari</span>
              </div>
            </Link>
            <p className="text-white/70 text-sm font-ui leading-relaxed italic">
              "Cerdas, Berkarakter, Berprestasi"
            </p>
            <div className="inline-block bg-white/10 px-3 py-1 rounded-full border border-white/20">
              <span className="text-xs font-ui font-semibold">Akreditasi B (Baik)</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-heading font-bold text-xl mb-6">Navigasi</h4>
            <ul className="space-y-4 font-ui text-sm text-white/70">
              <li><Link to="/" className="hover:text-white transition-colors">Beranda</Link></li>
              <li><Link to="/profil" className="hover:text-white transition-colors">Profil Sekolah</Link></li>
              <li><Link to="/berita" className="hover:text-white transition-colors">Berita & Pengumuman</Link></li>
              <li><Link to="/galeri" className="hover:text-white transition-colors">Galeri Kegiatan</Link></li>
              <li><Link to="/ppdb" className="hover:text-white transition-colors">Info PPDB</Link></li>
              <li><Link to="/kontak" className="hover:text-white transition-colors">Hubungi Kami</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-heading font-bold text-xl mb-6">Info Kontak</h4>
            <ul className="space-y-4 font-ui text-sm text-white/70">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-accent shrink-0" />
                <span>Jl. Raya Desa Mekarsari, Maleber, Kuningan, Jawa Barat</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-accent shrink-0" />
                <span>(+62) 822-1116-6929</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-accent shrink-0" />
                <span>sdnmekarsari@gmail.com</span>
              </li>
              <li className="pt-2">
                <span className="block font-semibold text-white mb-1">Jam Layanan:</span>
                <span>Senin – Jumat, 07.00 – 14.00 WIB</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Map Placeholder */}
          <div>
            <h4 className="font-heading font-bold text-xl mb-6">Lokasi Kami</h4>
            <div className="rounded-xl overflow-hidden h-40 bg-white/5 border border-white/10 flex flex-col items-center justify-center p-4 text-center group">
              <MapPin className="w-8 h-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-xs text-white/50 mb-3">Peta Lokasi SD Negeri Mekarsari</p>
              <Button size="sm" variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 text-xs">
                Buka di Google Maps
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-white/50 text-xs font-ui">
          <p>© 2025 SD Negeri Mekarsari — NPSN 20212700. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-dark transition-all z-40 transform hover:-translate-y-1"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};
