import React from 'react';
import { 
  Calendar, 
  Download, 
  Filter, 
  Search, 
  Users, 
  CheckCircle2, 
  XCircle, 
  AlertCircle,
  ChevronRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Badge } from '../../../components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';

export const AbsensiAdmin: React.FC = () => {
  const recapData = [
    { class: "1A", total: 28, hadir: 26, izin: 1, sakit: 1, alfa: 0, percentage: "92%" },
    { class: "2A", total: 30, hadir: 28, izin: 2, sakit: 0, alfa: 0, percentage: "93%" },
    { class: "3A", total: 32, hadir: 30, izin: 1, sakit: 1, alfa: 0, percentage: "94%" },
    { class: "4A", total: 30, hadir: 27, izin: 2, sakit: 1, alfa: 0, percentage: "90%" },
    { class: "5A", total: 32, hadir: 31, izin: 1, sakit: 0, alfa: 0, percentage: "97%" },
    { class: "6A", total: 30, hadir: 29, izin: 0, sakit: 1, alfa: 0, percentage: "96%" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-heading font-black text-text-primary">Rekap Absensi</h1>
          <p className="text-text-muted font-ui">Monitoring kehadiran seluruh siswa SD Negeri Mekarsari.</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="rounded-xl font-bold">
            <Download className="w-4 h-4 mr-2" />
            Laporan Bulanan
          </Button>
          <Button className="rounded-xl font-bold shadow-lg shadow-primary/20">
            <Calendar className="w-4 h-4 mr-2" />
            Pilih Tanggal
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Rata-rata Kehadiran", value: "94.2%", icon: <CheckCircle2 className="text-green-500" />, color: "bg-green-50" },
          { label: "Siswa Izin", value: "12", icon: <AlertCircle className="text-orange-500" />, color: "bg-orange-50" },
          { label: "Siswa Sakit", value: "8", icon: <AlertCircle className="text-red-500" />, color: "bg-red-50" },
          { label: "Tanpa Keterangan", value: "2", icon: <XCircle className="text-text-muted" />, color: "bg-surface" },
        ].map((stat, idx) => (
          <Card key={idx} className="border-none shadow-sm rounded-3xl overflow-hidden">
            <CardContent className="p-6 flex items-center space-x-4">
              <div className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center`}>
                {stat.icon}
              </div>
              <div>
                <div className="text-2xl font-heading font-black text-text-primary">{stat.value}</div>
                <div className="text-[10px] text-text-muted font-ui uppercase tracking-wider font-bold">{stat.label}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-none shadow-sm rounded-[32px]">
        <CardHeader className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted w-4 h-4" />
              <Input placeholder="Cari kelas..." className="pl-10 h-10 rounded-xl border-surface bg-surface/50" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-40 rounded-xl border-surface bg-surface/50">
                <SelectValue placeholder="Tingkat" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Tingkat</SelectItem>
                <SelectItem value="1">Kelas 1</SelectItem>
                <SelectItem value="2">Kelas 2</SelectItem>
                <SelectItem value="3">Kelas 3</SelectItem>
                <SelectItem value="4">Kelas 4</SelectItem>
                <SelectItem value="5">Kelas 5</SelectItem>
                <SelectItem value="6">Kelas 6</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button variant="ghost" className="text-primary font-bold text-sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter Lanjutan
          </Button>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm font-ui">
              <thead className="text-text-muted uppercase tracking-wider text-[10px] font-bold border-b border-surface">
                <tr>
                  <th className="px-4 py-4">Kelas</th>
                  <th className="px-4 py-4">Total Siswa</th>
                  <th className="px-4 py-4">Hadir</th>
                  <th className="px-4 py-4">Izin/Sakit</th>
                  <th className="px-4 py-4">Alfa</th>
                  <th className="px-4 py-4">Persentase</th>
                  <th className="px-4 py-4">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface">
                {recapData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-surface/30 transition-colors">
                    <td className="px-4 py-4 font-bold text-text-primary">Kelas {row.class}</td>
                    <td className="px-4 py-4 text-text-muted">{row.total}</td>
                    <td className="px-4 py-4">
                      <Badge className="bg-green-100 text-green-600 border-none">{row.hadir}</Badge>
                    </td>
                    <td className="px-4 py-4">
                      <Badge className="bg-orange-100 text-orange-600 border-none">{row.izin + row.sakit}</Badge>
                    </td>
                    <td className="px-4 py-4">
                      <Badge className="bg-surface-dark text-text-muted border-none">{row.alfa}</Badge>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-16 h-1.5 bg-surface rounded-full overflow-hidden">
                          <div className="h-full bg-primary" style={{ width: row.percentage }}></div>
                        </div>
                        <span className="font-bold text-text-primary">{row.percentage}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <Button variant="ghost" size="sm" className="text-primary font-bold text-xs group">
                        Detail
                        <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
