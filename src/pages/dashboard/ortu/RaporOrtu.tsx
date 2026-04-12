import React from 'react';
import { 
  FileText, 
  Download, 
  Printer, 
  TrendingUp, 
  Award, 
  Info,
  ChevronRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';
import { Progress } from '../../../components/ui/progress';
import { raporData } from '../../../data/dummy';

export const RaporOrtu: React.FC = () => {
  const rapor = raporData[0]; // Rizky's data

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-heading font-black text-text-primary">Rapor Digital</h1>
          <p className="text-text-muted font-ui">Tahun Ajaran 2024/2025 • Semester Genap</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="rounded-xl font-bold">
            <Printer className="w-4 h-4 mr-2" />
            Cetak
          </Button>
          <Button className="rounded-xl font-bold shadow-lg shadow-primary/20">
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>
      </div>

      {/* Summary Header */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-none shadow-sm rounded-3xl bg-primary text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
          <CardContent className="p-8">
            <div className="text-sm font-ui opacity-80 uppercase tracking-widest font-bold mb-2">Rata-rata Nilai</div>
            <div className="text-5xl font-heading font-black">{rapor.rataRata}</div>
            <div className="mt-4 flex items-center text-xs font-ui bg-white/20 w-fit px-3 py-1 rounded-full">
              <TrendingUp className="w-3 h-3 mr-1" />
              Naik 2.5 poin dari semester lalu
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm rounded-3xl bg-secondary text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
          <CardContent className="p-8">
            <div className="text-sm font-ui opacity-80 uppercase tracking-widest font-bold mb-2">Peringkat Kelas</div>
            <div className="text-5xl font-heading font-black">3 <span className="text-2xl opacity-60">/ 32</span></div>
            <div className="mt-4 flex items-center text-xs font-ui bg-white/20 w-fit px-3 py-1 rounded-full">
              <Award className="w-3 h-3 mr-1" />
              Top 10% di Kelas 5A
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm rounded-3xl bg-white border border-surface">
          <CardContent className="p-8">
            <div className="text-sm font-ui text-text-muted uppercase tracking-widest font-bold mb-4">Ketidakhadiran</div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-ui">Sakit</span>
                <Badge className="bg-red-100 text-red-600 border-none">1 Hari</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-ui">Izin</span>
                <Badge className="bg-orange-100 text-orange-600 border-none">0 Hari</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-ui">Tanpa Keterangan</span>
                <Badge className="bg-surface-dark text-text-muted border-none">0 Hari</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Grades Table */}
      <Card className="border-none shadow-sm rounded-[32px]">
        <CardHeader>
          <CardTitle className="text-xl font-heading font-bold">Detail Nilai Mata Pelajaran</CardTitle>
          <CardDescription>Nilai pengetahuan dan keterampilan semester ini.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm font-ui">
              <thead className="text-text-muted uppercase tracking-wider text-[10px] font-bold border-b border-surface">
                <tr>
                  <th className="px-4 py-4">Mata Pelajaran</th>
                  <th className="px-4 py-4">KKM</th>
                  <th className="px-4 py-4">Nilai</th>
                  <th className="px-4 py-4">Predikat</th>
                  <th className="px-4 py-4">Deskripsi Kemajuan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface">
                {rapor.nilai.map((item, idx) => (
                  <tr key={idx} className="hover:bg-surface/30 transition-colors">
                    <td className="px-4 py-4 font-bold text-text-primary">{item.mapel}</td>
                    <td className="px-4 py-4 text-text-muted">75</td>
                    <td className="px-4 py-4">
                      <div className="flex items-center space-x-3">
                        <span className={`font-heading font-black text-lg ${item.nilai >= 75 ? 'text-primary' : 'text-danger'}`}>
                          {item.nilai}
                        </span>
                        <Progress value={item.nilai} className="w-12 h-1.5 bg-surface" />
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <Badge className={`border-none ${
                        item.predikat === 'A' ? 'bg-green-100 text-green-600' : 
                        item.predikat === 'B' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'
                      }`}>
                        {item.predikat}
                      </Badge>
                    </td>
                    <td className="px-4 py-4 text-xs text-text-muted leading-relaxed max-w-xs">
                      {item.keterangan}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Teacher's Feedback */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-none shadow-sm rounded-[32px]">
          <CardHeader>
            <CardTitle className="text-xl font-heading font-bold">Catatan Wali Kelas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-6 bg-surface rounded-3xl border border-primary/10 italic text-text-muted font-ui leading-relaxed">
              {rapor.catatanWali}
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm rounded-[32px]">
          <CardHeader>
            <CardTitle className="text-xl font-heading font-bold">Ekstrakurikuler</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-surface rounded-2xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-heading font-bold text-text-primary">Pramuka</h4>
                  <p className="text-[10px] text-text-muted font-ui">Wajib</p>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-600 border-none">Sangat Baik</Badge>
            </div>
            <div className="flex items-center justify-between p-4 bg-surface rounded-2xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-heading font-bold text-text-primary">Seni Tari</h4>
                  <p className="text-[10px] text-text-muted font-ui">Pilihan</p>
                </div>
              </div>
              <Badge className="bg-blue-100 text-blue-600 border-none">Baik</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
