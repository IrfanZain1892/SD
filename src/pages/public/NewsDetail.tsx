import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, Share2, ChevronLeft, ArrowRight } from 'lucide-react';
import { beritaData } from '../../data/dummy';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';

export const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const news = beritaData.find(n => n.id === Number(id));

  if (!news) {
    return (
      <div className="h-screen flex flex-col items-center justify-center p-4 text-center">
        <h2 className="text-2xl font-heading font-bold text-text-primary mb-4">Berita Tidak Ditemukan</h2>
        <Button asChild className="rounded-xl">
          <Link to="/berita">Kembali ke Berita</Link>
        </Button>
      </div>
    );
  }

  const relatedNews = beritaData.filter(n => n.id !== news.id).slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Image / Header */}
      <div className="h-[400px] md:h-[500px] w-full bg-gradient-to-br from-primary via-primary-dark to-secondary relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="mb-6 bg-[#F0F4FF]/20 text-white border-none px-6 py-2 rounded-full backdrop-blur-md font-ui font-bold uppercase tracking-widest text-xs">
            {news.kategori}
          </Badge>
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-white max-w-4xl mx-auto leading-tight drop-shadow-lg">
            {news.judul}
          </h1>
        </div>
      </div>

      <section className="py-16 bg-[#F0F4FF]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-8">
              {/* Breadcrumb & Meta */}
              <div className="flex flex-wrap items-center text-sm font-ui text-text-muted mb-10 gap-4">
                <Link to="/" className="hover:text-primary transition-colors">Beranda</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <Link to="/berita" className="hover:text-primary transition-colors">Berita</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <span className="text-text-primary font-bold truncate max-w-[200px]">{news.judul}</span>
              </div>

              <div className="flex flex-wrap items-center gap-6 mb-12 py-6 border-y border-surface">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2 text-primary" />
                  <span className="text-sm font-ui font-bold text-text-primary">Admin Sekolah</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-primary" />
                  <span className="text-sm font-ui">{news.tanggal}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-primary" />
                  <span className="text-sm font-ui">5 Menit Baca</span>
                </div>
                <div className="ml-auto flex items-center space-x-2">
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Article Body */}
              <div className="prose prose-lg max-w-none font-ui text-text-muted leading-relaxed space-y-6">
                <p className="text-xl font-medium text-text-primary leading-relaxed italic border-l-4 border-primary pl-6 py-2 bg-[#F0F4FF] rounded-r-2xl">
                  {news.excerpt}
                </p>
                
                {news.content ? (
                  <div className="whitespace-pre-line">
                    {news.content}
                  </div>
                ) : (
                  <>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.
                    </p>
                    <div className="my-12 p-8 bg-[#F0F4FF] rounded-[40px] border border-primary/10 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
                      <h4 className="font-heading font-bold text-text-primary text-xl mb-4">Poin Utama Pembelajaran</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0" />
                          <span>Peningkatan kualitas pendidikan melalui kolaborasi guru dan orang tua.</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0" />
                          <span>Pemanfaatan teknologi digital dalam proses belajar mengajar.</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0" />
                          <span>Fokus pada pembentukan karakter dan budi pekerti luhur.</span>
                        </li>
                      </ul>
                    </div>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </>
                )}
              </div>

              {/* Tags & Share */}
              <div className="mt-16 pt-8 border-t border-surface flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="rounded-lg px-4 py-1 border-surface text-text-muted hover:bg-[#F0F4FF] transition-colors cursor-pointer">#Pendidikan</Badge>
                  <Badge variant="outline" className="rounded-lg px-4 py-1 border-surface text-text-muted hover:bg-[#F0F4FF] transition-colors cursor-pointer">#SekolahDasar</Badge>
                  <Badge variant="outline" className="rounded-lg px-4 py-1 border-surface text-text-muted hover:bg-[#F0F4FF] transition-colors cursor-pointer">#Mekarsari</Badge>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-ui font-bold text-text-muted">Bagikan:</span>
                  <Button size="sm" className="bg-[#25D366] hover:bg-[#25D366]/90 rounded-xl">WhatsApp</Button>
                  <Button size="sm" variant="outline" className="rounded-xl border-surface">Salin Link</Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-12">
              {/* Related News */}
              <div>
                <h3 className="text-xl font-heading font-bold text-text-primary mb-6 flex items-center">
                  <ArrowRight className="w-5 h-5 mr-2 text-primary" />
                  Berita Terkait
                </h3>
                <div className="space-y-6">
                  {relatedNews.map((item) => (
                    <Link key={item.id} to={`/berita/${item.id}`} className="group block">
                      <Card className="border-none shadow-sm hover:shadow-md transition-all overflow-hidden rounded-2xl">
                        <CardContent className="p-4 flex space-x-4">
                          <div className="w-20 h-20 bg-[#F0F4FF] rounded-xl flex-shrink-0 flex items-center justify-center text-primary/20 font-bold text-xs uppercase tracking-tighter text-center p-2">
                            {item.kategori}
                          </div>
                          <div className="flex flex-col justify-center">
                            <span className="text-[10px] font-ui font-bold text-primary uppercase tracking-widest mb-1">{item.kategori}</span>
                            <h4 className="text-sm font-heading font-bold text-text-primary line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                              {item.judul}
                            </h4>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter / CTA */}
              <div className="bg-primary p-8 rounded-[40px] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F0F4FF]/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
                <h3 className="text-xl font-heading font-bold mb-4">Dapatkan Update Terbaru</h3>
                <p className="text-sm text-white/70 font-ui mb-6">Jangan lewatkan informasi penting seputar SD Negeri Mekarsari.</p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Email Anda" 
                    className="w-full bg-[#F0F4FF]/10 border border-white/20 rounded-xl px-4 py-3 text-sm outline-none focus:bg-[#F0F4FF]/20 transition-all"
                  />
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white font-bold rounded-xl py-6">
                    Berlangganan
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};



