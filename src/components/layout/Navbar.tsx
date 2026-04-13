import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogIn, ChevronRight, Bell } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { useAuth } from '../../context/AuthContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Profil', path: '/profil' },
    { name: 'Berita', path: '/berita' },
    { name: 'Galeri', path: '/galeri' },
    { name: 'PPDB', path: '/ppdb' },
    { name: 'Kontak', path: '/kontak' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-accent py-2 px-4 text-center">
        <Link to="/ppdb" className="text-white text-xs md:text-sm font-ui font-semibold flex items-center justify-center hover:underline">
          <span className="mr-2">📢</span>
          PPDB 2025/2026 Dibuka — Klik untuk info selengkapnya
          <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      </div>

      <nav className={`transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-primary py-5'}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform">
              <span className="text-white font-heading font-bold text-xl">M</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-heading font-bold text-lg leading-none ${isScrolled ? 'text-primary' : 'text-white'}`}>SD Negeri</span>
              <span className={`font-heading font-bold text-lg leading-none ${isScrolled ? 'text-primary-dark' : 'text-white/90'}`}>Mekarsari</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-ui font-medium text-sm transition-all relative py-1 ${
                  isActive(link.path) 
                    ? (isScrolled ? 'text-primary' : 'text-white') 
                    : (isScrolled ? 'text-text-muted hover:text-primary' : 'text-white/80 hover:text-white')
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full ${isScrolled ? 'bg-primary' : 'bg-white'}`} />
                )}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center space-x-4">
            {user ? (
              <Button asChild variant={isScrolled ? 'default' : 'secondary'} className="rounded-full px-6">
                <Link to="/dashboard">
                  Dashboard
                </Link>
              </Button>
            ) : (
              <Button asChild variant={isScrolled ? 'outline' : 'secondary'} className={`rounded-full px-6 ${!isScrolled && 'bg-white/20 border-white/40 text-white hover:bg-white/30'}`}>
                <Link to="/login" className="flex items-center">
                  <LogIn className="w-4 h-4 mr-2" />
                  Masuk
                </Link>
              </Button>
            )}
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center space-x-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={isScrolled ? 'text-primary' : 'text-white'}>
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full py-6">
                  <div className="flex items-center mb-10">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-heading font-bold text-xl">M</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-heading font-bold text-lg leading-none text-primary">SD Negeri</span>
                      <span className="font-heading font-bold text-lg leading-none text-primary-dark">Mekarsari</span>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4 mb-auto">
                    {navLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className={`font-ui font-semibold text-lg py-2 border-b border-surface ${
                          isActive(link.path) ? 'text-primary' : 'text-text-muted'
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-6">
                    {user ? (
                      <Button asChild className="w-full rounded-xl py-6 text-lg">
                        <Link to="/dashboard">Dashboard</Link>
                      </Button>
                    ) : (
                      <Button asChild className="w-full rounded-xl py-6 text-lg">
                        <Link to="/login" className="flex items-center justify-center">
                          <LogIn className="w-5 h-5 mr-2" />
                          Masuk ke Portal
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};

