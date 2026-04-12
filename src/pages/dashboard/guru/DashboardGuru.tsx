import React from 'react';
import { 
  Users, 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  Calendar,
  ChevronRight,
  Plus
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';
import { Avatar, AvatarFallback } from '../../../components/ui/avatar';
import { Progress } from '../../../components/ui/progress';

export const DashboardGuru: React.FC = () => {
  const schedule = [
    { time: "07.00 - 08.30", subject: "Matematika", class: "5A", status: "Selesai" },
    { time: "08.30 - 10.00", subject: "Bahasa Indonesia", class: "5A", status: "Sedang Berlangsung" },
    { time: "10.30 - 12.00", subject: "IPA", class: "5B", status: "Mendatang" },
  ];

  const tasks = [
    { title: "Input Nilai UTS Matematika", deadline: "Besok", progress: 80 },
    { title: "Lengkapi Jurnal Mengajar", deadline: "Hari ini", progress: 40 },
    { title: "Verifikasi Absensi Kelas 5A", deadline: "Selesai", progress: 100 },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-primary p-8 rounded-[40px] text-white relative overflow-hidden shadow-xl shadow-primary/20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="relative z-10">
          <h1 className="text-3xl font-heading font-black mb-2">Selamat Pagi, Ibu Sari Dewi!</h1>
          <p className="text-white/70 font-ui mb-6">Hari ini Anda memiliki 3 jadwal mengajar. Tetap semangat!</p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-white text-primary hover:bg-white/90 rounded-xl px-6 font-bold">
              <Plus className="w-4 h-4 mr-2" />
              Input Absensi
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-xl px-6 font-bold">
              Lihat Jadwal
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Today's Schedule */}
        <Card className="lg:col-span-2 border-none shadow-sm rounded-[32px]">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-xl font-heading font-bold">Jadwal Mengajar Hari Ini</CardTitle>
              <CardDescription>Senin, 12 April 2025</CardDescription>
            </div>
            <Badge className="bg-primary/10 text-primary border-none">3 Sesi</Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            {schedule.map((item, idx) => (
              <div key={idx} className="flex items-center p-6 bg-surface rounded-3xl border border-transparent hover:border-primary/20 transition-all group">
                <div className="w-16 h-16 bg-white rounded-2xl flex flex-col items-center justify-center shadow-sm mr-6">
                  <Clock className="w-5 h-5 text-primary mb-1" />
                  <span className="text-[10px] font-ui font-bold text-text-muted">WAKTU</span>
                </div>
                <div className="flex-grow">
                  <h4 className="font-heading font-bold text-text-primary text-lg">{item.subject}</h4>
                  <div className="flex items-center text-sm text-text-muted font-ui mt-1">
                    <span className="font-bold text-primary mr-3">Kelas {item.class}</span>
                    <span>{item.time}</span>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className={`border-none ${
                    item.status === 'Selesai' ? 'bg-green-100 text-green-600' : 
                    item.status === 'Sedang Berlangsung' ? 'bg-blue-100 text-blue-600' : 'bg-surface-dark text-text-muted'
                  }`}>
                    {item.status}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="space-y-6">
          <Card className="border-none shadow-sm rounded-[32px] bg-secondary text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-4xl font-heading font-black mb-1">32</div>
              <div className="text-sm font-ui opacity-80 uppercase tracking-widest font-bold">Siswa Perwalian</div>
              <Button variant="ghost" className="w-full mt-6 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold">
                Lihat Daftar Siswa
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm rounded-[32px]">
            <CardHeader>
              <CardTitle className="text-lg font-heading font-bold">Tugas & Deadline</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {tasks.map((task, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h5 className="text-sm font-heading font-bold text-text-primary">{task.title}</h5>
                    <span className="text-[10px] font-ui text-text-muted">{task.deadline}</span>
                  </div>
                  <Progress value={task.progress} className="h-2 bg-surface" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Activity / Announcements */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-none shadow-sm rounded-[32px]">
          <CardHeader>
            <CardTitle className="text-xl font-heading font-bold">Pengumuman Internal</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { title: "Rapat Persiapan UTS", date: "15 April 2025", desc: "Diharapkan semua guru membawa draf soal." },
              { title: "Pembaruan Sistem Rapor", date: "18 April 2025", desc: "Pelatihan penggunaan sistem rapor digital baru." },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-surface rounded-3xl">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-heading font-bold text-text-primary">{item.title}</h4>
                  <Badge variant="outline" className="border-primary/20 text-primary text-[10px]">{item.date}</Badge>
                </div>
                <p className="text-xs text-text-muted font-ui">{item.desc}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm rounded-[32px]">
          <CardHeader>
            <CardTitle className="text-xl font-heading font-bold">Siswa Berprestasi (Bulan Ini)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: "Rizky Ramadhan", class: "5A", achievement: "Juara 1 Lomba Matematika", points: "+50" },
              { name: "Siti Aisyah", class: "5A", achievement: "Kehadiran 100%", points: "+20" },
              { name: "Budi Santoso", class: "5A", achievement: "Peningkatan Nilai IPA", points: "+15" },
            ].map((student, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 hover:bg-surface rounded-2xl transition-colors">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-secondary/10 text-secondary font-bold text-xs">
                      {student.name.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-sm font-heading font-bold text-text-primary">{student.name}</h4>
                    <p className="text-[10px] text-text-muted font-ui">{student.achievement}</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-600 border-none font-bold">{student.points}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
