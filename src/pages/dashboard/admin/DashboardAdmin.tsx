import React from 'react';
import { 
  Users, 
  GraduationCap, 
  FileText, 
  TrendingUp, 
  Calendar, 
  ArrowUpRight, 
  ArrowDownRight,
  Bell,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Button } from '../../../components/ui/button';
import { Avatar, AvatarFallback } from '../../../components/ui/avatar';

const attendanceData = [
  { name: 'Sen', hadir: 95, izin: 3, sakit: 2 },
  { name: 'Sel', hadir: 92, izin: 5, sakit: 3 },
  { name: 'Rab', hadir: 98, izin: 1, sakit: 1 },
  { name: 'Kam', hadir: 94, izin: 4, sakit: 2 },
  { name: 'Jum', hadir: 90, izin: 6, sakit: 4 },
];

const registrationData = [
  { name: 'Minggu 1', count: 12 },
  { name: 'Minggu 2', count: 25 },
  { name: 'Minggu 3', count: 18 },
  { name: 'Minggu 4', count: 32 },
];

export const DashboardAdmin: React.FC = () => {
  const stats = [
    { label: "Total Siswa", value: "342", icon: <Users />, trend: "+12", trendUp: true, color: "bg-blue-500" },
    { label: "Total Guru", value: "24", icon: <GraduationCap />, trend: "0", trendUp: true, color: "bg-green-500" },
    { label: "Pendaftar PPDB", value: "38", icon: <FileText />, trend: "+8", trendUp: true, color: "bg-orange-500" },
    { label: "Rata-rata Nilai", value: "84.5", icon: <TrendingUp />, trend: "-1.2", trendUp: false, color: "bg-purple-500" },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <Card key={idx} className="border-none shadow-sm rounded-3xl overflow-hidden group hover:shadow-md transition-all">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 ${stat.color}/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform`}>
                  {React.cloneElement(stat.icon as React.ReactElement, { className: `w-6 h-6 ${stat.color.replace('bg-', 'text-')}` })}
                </div>
                <Badge className={`border-none ${stat.trendUp ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                  {stat.trendUp ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                  {stat.trend}
                </Badge>
              </div>
              <div className="text-3xl font-heading font-black text-text-primary mb-1">{stat.value}</div>
              <div className="text-xs text-text-muted font-ui uppercase tracking-wider font-bold">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Attendance Chart */}
        <Card className="lg:col-span-2 border-none shadow-sm rounded-[32px]">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-xl font-heading font-bold">Statistik Kehadiran Siswa</CardTitle>
              <CardDescription>Persentase kehadiran dalam satu minggu terakhir.</CardDescription>
            </div>
            <Button variant="outline" size="sm" className="rounded-xl font-ui font-bold">
              <Calendar className="w-4 h-4 mr-2" />
              Minggu Ini
            </Button>
          </CardHeader>
          <CardContent className="h-[350px] pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  cursor={{ fill: '#f8fafc' }}
                />
                <Bar dataKey="hadir" fill="var(--primary)" radius={[4, 4, 0, 0]} barSize={40} />
                <Bar dataKey="izin" fill="var(--secondary)" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recent Notifications */}
        <Card className="border-none shadow-sm rounded-[32px]">
          <CardHeader>
            <CardTitle className="text-xl font-heading font-bold">Aktivitas Terbaru</CardTitle>
            <CardDescription>Log aktivitas sistem hari ini.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {[
              { icon: <CheckCircle2 className="text-green-500" />, title: "Absensi Kelas 5A Selesai", time: "10 Menit lalu", desc: "Guru: Ibu Sari Dewi" },
              { icon: <FileText className="text-blue-500" />, title: "Pendaftar PPDB Baru", time: "45 Menit lalu", desc: "Nama: Rizky Ramadhan" },
              { icon: <Clock className="text-orange-500" />, title: "Rapat Guru Dijadwalkan", time: "2 Jam lalu", desc: "Pukul 14.00 di Ruang Guru" },
              { icon: <Bell className="text-purple-500" />, title: "Pengumuman Diterbitkan", time: "5 Jam lalu", desc: "Topik: Libur Idul Fitri" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-surface rounded-xl flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="text-sm font-heading font-bold text-text-primary">{item.title}</h4>
                    <span className="text-[10px] text-text-muted font-ui">{item.time}</span>
                  </div>
                  <p className="text-xs text-text-muted font-ui">{item.desc}</p>
                </div>
              </div>
            ))}
            <Button variant="ghost" className="w-full rounded-xl text-primary font-ui font-bold text-xs">
              Lihat Semua Aktivitas
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* PPDB Registration Trend */}
        <Card className="border-none shadow-sm rounded-[32px]">
          <CardHeader>
            <CardTitle className="text-xl font-heading font-bold">Tren PPDB</CardTitle>
            <CardDescription>Jumlah pendaftar per minggu.</CardDescription>
          </CardHeader>
          <CardContent className="h-[250px] pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={registrationData}>
                <defs>
                  <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} />
                <Tooltip />
                <Area type="monotone" dataKey="count" stroke="var(--primary)" fillOpacity={1} fill="url(#colorCount)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Top Teachers */}
        <Card className="lg:col-span-2 border-none shadow-sm rounded-[32px]">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-xl font-heading font-bold">Daftar Guru Aktif</CardTitle>
              <CardDescription>Monitoring kehadiran dan aktivitas guru.</CardDescription>
            </div>
            <Button variant="outline" size="sm" className="rounded-xl font-ui font-bold">Kelola Guru</Button>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm font-ui">
                <thead className="text-text-muted uppercase tracking-wider text-[10px] font-bold border-b border-surface">
                  <tr>
                    <th className="px-4 py-4">Guru</th>
                    <th className="px-4 py-4">Mata Pelajaran</th>
                    <th className="px-4 py-4">Status</th>
                    <th className="px-4 py-4">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface">
                  {[
                    { name: "Drs. Mulyadi", subject: "Kepala Sekolah", status: "Hadir", color: "bg-green-500" },
                    { name: "Sari Dewi, S.Pd", subject: "Matematika", status: "Hadir", color: "bg-green-500" },
                    { name: "Hendra, S.Pd", subject: "PJOK", status: "Izin", color: "bg-orange-500" },
                    { name: "Yanti, S.E", subject: "Tata Usaha", status: "Hadir", color: "bg-green-500" },
                  ].map((teacher, idx) => (
                    <tr key={idx} className="hover:bg-surface/50 transition-colors">
                      <td className="px-4 py-4">
                        <div className="flex items-center space-x-3">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback className="bg-primary/10 text-primary text-xs font-bold">
                              {teacher.name.substring(0, 2).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <span className="font-bold text-text-primary">{teacher.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-text-muted">{teacher.subject}</td>
                      <td className="px-4 py-4">
                        <Badge className={`${teacher.color} text-white border-none text-[10px]`}>{teacher.status}</Badge>
                      </td>
                      <td className="px-4 py-4">
                        <Button variant="ghost" size="sm" className="text-primary font-bold text-xs">Detail</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
