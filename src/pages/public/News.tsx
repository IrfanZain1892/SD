import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { PageHeader } from '../../components/shared/PageHeader';
import { NewsCard } from '../../components/shared/NewsCard';
import { beritaData } from '../../data/dummy';
import { Input } from '../../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Button } from '../../components/ui/button';

export const News: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('Semua');

  const filteredNews = beritaData.filter(news => {
    const matchesSearch = news.judul.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === 'Semua' || news.kategori === activeTab;
    return matchesSearch && matchesTab;
  });

  const categories = ['Semua', 'Berita', 'Pengumuman', 'Prestasi', 'PPDB'];

  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Berita & Pengumuman" 
        subtitle="Informasi terbaru seputar kegiatan, prestasi, dan pengumuman resmi SD Negeri Mekarsari."
        background="bg-primary-dark"
      />

      <section className="py-16 bg-surface min-h-screen">
        <div className="container mx-auto px-4">
          {/* Filters & Search */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
            <Tabs defaultValue="Semua" className="w-full lg:w-auto" onValueChange={setActiveTab}>
              <TabsList className="bg-surface p-1 rounded-2xl shadow-sm w-full lg:w-auto flex flex-wrap h-auto">
                {categories.map(cat => (
                  <TabsTrigger 
                    key={cat} 
                    value={cat} 
                    className="rounded-xl px-6 py-2 font-ui font-bold data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    {cat}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted w-5 h-5" />
              <Input 
                placeholder="Cari berita..." 
                className="pl-12 py-6 rounded-2xl border-none shadow-sm focus-visible:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* News Grid */}
          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredNews.map((news) => (
                <NewsCard key={news.id} news={news} />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-primary/20" />
              </div>
              <h3 className="text-xl font-heading font-bold text-text-primary mb-2">Berita tidak ditemukan</h3>
              <p className="text-text-muted font-ui">Coba gunakan kata kunci lain atau pilih kategori yang berbeda.</p>
            </div>
          )}

          {/* Pagination Simulation */}
          {filteredNews.length > 0 && (
            <div className="flex justify-center space-x-2">
              <Button variant="outline" className="rounded-xl w-10 h-10 p-0 border-surface bg-surface">1</Button>
              <Button variant="ghost" className="rounded-xl w-10 h-10 p-0 text-text-muted">2</Button>
              <Button variant="ghost" className="rounded-xl w-10 h-10 p-0 text-text-muted">3</Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

