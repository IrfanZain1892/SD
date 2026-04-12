import React from 'react';
import { 
  User, 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  Calendar,
  ChevronRight,
  TrendingUp,
  AlertCircle,
  FileText
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';
import { Avatar, AvatarFallback } from '../../../components/ui/avatar';
import { Progress } from '../../../components/ui/progress';

export const DashboardOrtu: React.FC = () => {
  const attendance = [
    { date: "12 Apr", status: "Hadir", time: "06.55" },
    { date: "11 Apr", status: "Hadir", time: "06.48" },
    { date: "10 Apr", status: "Hadir", time: "06.52" },
    { date: "09 Apr", status: "Sakit", time: "-" },
    { date: "08 Apr", status: "Hadir", time: "06.58" },
  ];

  const grades = [
    { subject: "Matematika", score: 85, average: 78 },
    { subject: "B. Indonesia", score: 92, average: 82 },
    { subject: "IPA", score: 78, average: 75 },
    { subject: "IPS", score: 88, average: 80 },
  ];

  return (
    <div className="space-y-8">
      {/* Child Profile Summary */}
      <div className="bg-gradient-to-r from-secondary to-secondary-dark p-8 rounded-[40px] text-white relative overflow-hidden shadow-xl shadow-secondary/20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 relative z-10">
          <Avatar className="w-24 h-24 border-4 border-white/20 shadow-2xl">
            <AvatarFallback className="bg-white text-secondary font-black text-3xl">RR</AvatarFallback>
          </Avatar>
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-heading font-black mb-1">Rizky Ramadhan</h1>
            <p className="text-white/70 font-ui mb-4">Kelas 5A • NISN: 0012345678</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <Badge className="bg-white/20 text-white border-none px-4 py-1">Peringkat 3 di Kelas</Badge>
              <Badge className="bg-white/20 text-white border-none px-4 py-1">Kehadiran 95%</Badge>
            </div>
          </div>
          <div className="md:ml-auto flex flex-col space-y-3 w-full md:w-auto">
            <Button className="bg-white text-secondary hover:bg-white/90 rounded-xl font-bold">
              <FileText className="w-4 h-4 mr-2" />
              Lihat Rapor
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-xl font-bold">
              Hubungi Wali Kelas
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Attendance */}
        <Card className="lg:col-span-2 border-none shadow-sm rounded-[32px]">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-xl font-heading font-bold">Kehadiran Terakhir</CardTitle>
              <CardDescription>Catatan kehadiran Rizky minggu ini.</CardDescription>
            </div>
            <Button variant="ghost" className="text-primary font-ui font-bold text-xs">Lihat Semua</Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
              {attendance.map((item, idx) => (
                <div key={idx} className={`p-4 rounded-3xl text-center border-2 ${
                  item.status === 'Hadir' ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'
                }`}>
                  <div className="text-[10px] font-ui font-bold text-text-muted uppercase tracking-widest mb-2">{item.date}</div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 ${
                    item.status === 'Hadir' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                  }`}>
                    {item.status === 'Hadir' ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                  </div>
                  <div className={`text-xs font-heading font-bold ${
                    item.status === 'Hadir' ? 'text-green-600' : 'text-red-600'
                  }`}>{item.status}</div>
                  <div className="text-[10px] text-text-muted font-ui mt-1">{item.time}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Academic Progress */}
        <Card className="border-none shadow-sm rounded-[32px]">
          <CardHeader>
            <CardTitle className="text-xl font-heading font-bold">Performa Akademik</CardTitle>
            <CardDescription>Nilai tugas harian terbaru.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {grades.map((grade, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between items-center">
                  <h5 className="text-sm font-heading font-bold text-text-primary">{grade.subject}</h5>
                  <span className="text-sm font-heading font-black text-primary">{grade.score}</span>
                </div>
                <Progress value={grade.score} className="h-2 bg-surface" />
                <div className="flex justify-between text-[10px] font-ui text-text-muted">
                  <span>Rata-rata Kelas: {grade.average}</span>
                  <span className="text-green-600 font-bold">+{grade.score - grade.average} di atas rata-rata</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upcoming Events */}
        <Card className="border-none shadow-sm rounded-[32px]">
          <CardHeader>
            <CardTitle className="text-xl font-heading font-bold">Agenda Sekolah</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { title: "Pembagian Rapor Bayangan", date: "20 April 2025", type: "Akademik" },
              { title: "Study Tour ke Museum Geologi", date: "25 April 2025", type: "Kegiatan" },
              { title: "Libur Hari Raya Idul Fitri", date: "28 Apr - 5 Mei", type: "Libur" },
            ].map((event, idx) => (
              <div key={idx} className="flex items-center p-4 bg-surface rounded-2xl hover:bg-surface-dark transition-colors group cursor-pointer">
                <div className="w-12 h-12 bg-white rounded-xl flex flex-col items-center justify-center shadow-sm mr-4">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-grow">
                  <h4 className="text-sm font-heading font-bold text-text-primary group-hover:text-primary transition-colors">{event.title}</h4>
                  <p className="text-xs text-text-muted font-ui">{event.date}</p>
                </div>
                <Badge variant="outline" className="text-[10px] border-surface bg-white">{event.type}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Teacher's Note */}
        <Card className="border-none shadow-sm rounded-[32px] bg-primary/5 border border-primary/10">
          <CardHeader>
            <CardTitle className="text-xl font-heading font-bold text-primary flex items-center">
              <TrendingUp className="w-6 h-6 mr-2" />
              Catatan Wali Kelas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-white p-6 rounded-3xl shadow-sm italic text-text-muted font-ui leading-relaxed relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-serif text-2xl">"</div>
              Rizky menunjukkan perkembangan yang sangat baik di mata pelajaran Matematika. Namun, perlu sedikit lebih fokus pada kerapihan tulisan di mata pelajaran Bahasa Indonesia. Pertahankan prestasinya!
            </div>
            <div className="mt-6 flex items-center space-x-3">
              <Avatar className="w-10 h-10">
                <AvatarFallback className="bg-primary text-white font-bold text-xs">SD</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="text-sm font-heading font-bold text-text-primary">Ibu Sari Dewi, S.Pd</h4>
                <p className="text-[10px] text-text-muted font-ui">Wali Kelas 5A</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
