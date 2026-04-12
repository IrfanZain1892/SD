import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { Berita } from '../../types';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';

interface NewsCardProps {
  news: Berita;
}

export const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  const getBadgeColor = (warna: string) => {
    switch (warna) {
      case 'orange': return 'bg-orange-500 hover:bg-orange-600';
      case 'yellow': return 'bg-yellow-500 hover:bg-yellow-600';
      case 'blue': return 'bg-blue-500 hover:bg-blue-600';
      case 'green': return 'bg-green-500 hover:bg-green-600';
      default: return 'bg-primary hover:bg-primary-dark';
    }
  };

  return (
    <Card className="overflow-hidden h-full flex flex-col group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 relative">
        {/* Placeholder for image */}
        <div className="absolute inset-0 flex items-center justify-center text-primary/20 font-heading font-bold text-2xl uppercase tracking-widest">
          {news.kategori}
        </div>
        <Badge className={`absolute top-4 left-4 ${getBadgeColor(news.warnaBadge)} border-none text-white`}>
          {news.kategori}
        </Badge>
      </div>
      <CardHeader className="p-5 pb-2">
        <div className="flex items-center text-xs text-text-muted mb-2">
          <Calendar className="w-3 h-3 mr-1" />
          {news.tanggal}
        </div>
        <h3 className="text-lg font-heading font-bold text-text-primary line-clamp-2 leading-tight group-hover:text-primary transition-colors">
          {news.judul}
        </h3>
      </CardHeader>
      <CardContent className="p-5 pt-0 flex-grow">
        <p className="text-sm text-text-muted line-clamp-3">
          {news.excerpt}
        </p>
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <Link 
          to={`/berita/${news.id}`} 
          className="text-primary text-sm font-ui font-semibold flex items-center group/link"
        >
          Baca Selengkapnya
          <ArrowRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </CardFooter>
    </Card>
  );
};
