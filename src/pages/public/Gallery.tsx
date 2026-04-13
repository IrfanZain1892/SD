import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { PageHeader } from '../../components/shared/PageHeader';
import { Badge } from '../../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Button } from '../../components/ui/button';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('Semua');

  const albums = [
    'Semua', 'Upacara', 'Pramuka', 'Olahraga', 'Seni', 'Karya Wisata', 'Pembelajaran'
  ];

  const photos = [
    { id: 1, label: "Upacara Bendera Senin", category: "Upacara", color: "bg-blue-500" },
    { id: 2, label: "Latihan Baris Berbaris", category: "Pramuka", color: "bg-green-500" },
    { id: 3, label: "Pertandingan Futsal Antar Kelas", category: "Olahraga", color: "bg-red-500" },
    { id: 4, label: "Pentas Tari Tradisional", category: "Seni", color: "bg-purple-500" },
    { id: 5, label: "Kunjungan ke Museum", category: "Karya Wisata", color: "bg-orange-500" },
    { id: 6, label: "Praktikum IPA di Kebun", category: "Pembelajaran", color: "bg-teal-500" },
    { id: 7, label: "Pelantikan Penggalang", category: "Pramuka", color: "bg-green-600" },
    { id: 8, label: "Lomba Mewarnai", category: "Seni", color: "bg-pink-500" },
    { id: 9, label: "Senam Pagi Bersama", category: "Olahraga", color: "bg-yellow-500" },
    { id: 10, label: "Belajar Kelompok", category: "Pembelajaran", color: "bg-cyan-500" },
    { id: 11, label: "Hari Kartini", category: "Upacara", color: "bg-indigo-500" },
    { id: 12, label: "Kemah Bakti", category: "Pramuka", color: "bg-emerald-500" },
  ];

  const filteredPhotos = photos.filter(p => activeTab === 'Semua' || p.category === activeTab);

  const openLightbox = (id: number) => setSelectedImage(id);
  const closeLightbox = () => setSelectedImage(null);

  const nextImage = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredPhotos.findIndex(p => p.id === selectedImage);
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setSelectedImage(filteredPhotos[nextIndex].id);
  };

  const prevImage = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredPhotos.findIndex(p => p.id === selectedImage);
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setSelectedImage(filteredPhotos[prevIndex].id);
  };

  const currentPhoto = photos.find(p => p.id === selectedImage);

  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Galeri Kegiatan" 
        subtitle="Kumpulan dokumentasi momen-momen berharga dan aktivitas seru di SD Negeri Mekarsari."
        background="bg-secondary"
      />

      <section className="py-16 bg-surface min-h-screen">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="Semua" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-12">
              <TabsList className="bg-surface p-1 rounded-2xl flex flex-wrap h-auto justify-center">
                {albums.map(album => (
                  <TabsTrigger 
                    key={album} 
                    value={album} 
                    className="rounded-xl px-6 py-2 font-ui font-bold data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    {album}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredPhotos.map((photo) => (
                  <motion.div
                    key={photo.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className={`relative aspect-square rounded-[32px] overflow-hidden cursor-pointer group ${photo.color}/20`}
                    onClick={() => openLightbox(photo.id)}
                  >
                    <div className="absolute inset-0 flex items-center justify-center text-white/20">
                      <Maximize2 className="w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <Badge className="mb-2 bg-white/20 text-white border-none text-[10px]">{photo.category}</Badge>
                      <h4 className="text-white font-heading font-bold text-sm leading-tight">{photo.label}</h4>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </Tabs>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
          >
            <button 
              onClick={closeLightbox}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
            >
              <X className="w-10 h-10" />
            </button>

            <button 
              onClick={prevImage}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[110]"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>

            <button 
              onClick={nextImage}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[110]"
            >
              <ChevronRight className="w-12 h-12" />
            </button>

            <div className="relative w-full max-w-5xl aspect-video flex flex-col items-center justify-center">
              <motion.div 
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`w-full h-full rounded-[40px] flex items-center justify-center ${currentPhoto?.color} shadow-2xl`}
              >
                <div className="text-white/20 font-heading font-black text-6xl uppercase tracking-widest text-center px-8">
                  {currentPhoto?.label}
                </div>
              </motion.div>
              
              <div className="mt-8 text-center">
                <Badge className="mb-2 bg-primary text-white border-none px-4 py-1">{currentPhoto?.category}</Badge>
                <h3 className="text-2xl font-heading font-bold text-white">{currentPhoto?.label}</h3>
                <p className="text-white/50 font-ui text-sm mt-2">Dokumentasi Kegiatan SD Negeri Mekarsari</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

