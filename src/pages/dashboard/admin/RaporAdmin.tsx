import React from 'react';
import { 
  FileText, 
  Search, 
  Download, 
  Filter, 
  Plus, 
  ChevronRight,
  CheckCircle2,
  Clock,
  AlertCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Badge } from '../../../components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
import { Avatar, AvatarFallback } from '../../../components/ui/avatar';

export const RaporAdmin: React.FC = () => {
  const raporStatus = [
    { id: 1, name: "Rizky Ramadhan", class: "5A", status: "Selesai", date: "10 Apr 2025", score: 88 },
    { id: 2, name: "Siti Aisyah", class: "5A", status: "Proses", date: "-", score: 0 },
    { id: 3, name: "Budi Santoso", class: "5A", status: "Selesai", date: "09 Apr 2025", score: 82 },
    { id: 4, name: "Dewi Lestari", class: "5A", status: "Belum", date: "-", score: 0 },
    { id: 5, name: "Ahmad Fauzi", class: "5A", status: "Selesai", date: "08 Apr 2025", score: 91 },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-heading font-black text-text-primary">Manajemen Rapor</h1>
          <p className="text-text-muted font-ui">Kelola dan verifikasi nilai rapor digital siswa.</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="rounded-xl font-bold">
            <Download className="w-4 h-4 mr-2" />
            Template Nilai
          </Button>
          <Button className="rounded-xl font-bold shadow-lg shadow-primary/20">
            <Plus className="w-4 h-4 mr-2" />
            Buat Periode Rapor
          </Button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card className="border-none shadow-sm rounded-3xl bg-green-50">
          <CardContent className="p-6 flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-500 text-white rounded-2xl flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-heading font-black text-green-700">245</div>
              <div className="text-[10px] text-green-600 font-ui uppercase tracking-wider font-bold">Rapor Selesai</div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-3xl bg-orange-50">
          <CardContent className="p-6 flex items-center space-x-4">
            <div className="w-12 h-12 bg-orange-500 text-white rounded-2xl flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-heading font-black text-orange-700">82</div>
              <div className="text-[10px] text-orange-600 font-ui uppercase tracking-wider font-bold">Dalam Proses</div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-3xl bg-red-50">
          <CardContent className="p-6 flex items-center space-x-4">
            <div className="w-12 h-12 bg-red-500 text-white rounded-2xl flex items-center justify-center">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-heading font-black text-red-700">15</div>
              <div className="text-[10px] text-red-600 font-ui uppercase tracking-wider font-bold">Belum Diinput</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-none shadow-sm rounded-[32px]">
        <CardHeader className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted w-4 h-4" />
              <Input placeholder="Cari siswa..." className="pl-10 h-10 rounded-xl border-surface bg-surface/50" />
            </div>
            <Select defaultValue="5A">
              <SelectTrigger className="w-full md:w-40 rounded-xl border-surface bg-surface/50">
                <SelectValue placeholder="Kelas" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5A">Kelas 5A</SelectItem>
                <SelectItem value="5B">Kelas 5B</SelectItem>
                <SelectItem value="6A">Kelas 6A</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="text-primary font-bold">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="rounded-xl border-surface">
              Semester Genap 2024/2025
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm font-ui">
              <thead className="text-text-muted uppercase tracking-wider text-[10px] font-bold border-b border-surface">
                <tr>
                  <th className="px-4 py-4">Siswa</th>
                  <th className="px-4 py-4">Status Rapor</th>
                  <th className="px-4 py-4">Terakhir Update</th>
                  <th className="px-4 py-4">Rata-rata</th>
                  <th className="px-4 py-4">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface">
                {raporStatus.map((row) => (
                  <tr key={row.id} className="hover:bg-surface/30 transition-colors">
                    <td className="px-4 py-4">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="bg-primary/10 text-primary text-[10px] font-bold">
                            {row.name.substring(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-bold text-text-primary">{row.name}</div>
                          <div className="text-[10px] text-text-muted">Kelas {row.class}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <Badge className={`border-none text-[10px] ${
                        row.status === 'Selesai' ? 'bg-green-100 text-green-600' : 
                        row.status === 'Proses' ? 'bg-orange-100 text-orange-600' : 'bg-red-100 text-red-600'
                      }`}>
                        {row.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-4 text-text-muted">{row.date}</td>
                    <td className="px-4 py-4">
                      {row.score > 0 ? (
                        <span className="font-heading font-black text-primary">{row.score}</span>
                      ) : (
                        <span className="text-text-muted">-</span>
                      )}
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm" className="text-primary font-bold text-xs">
                          {row.status === 'Selesai' ? 'Lihat' : 'Input'}
                        </Button>
                        {row.status === 'Selesai' && (
                          <Button variant="ghost" size="icon" className="w-8 h-8 text-text-muted hover:text-primary">
                            <Download className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
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
