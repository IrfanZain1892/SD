import React, { useState } from 'react';
import { 
  Search, 
  Save, 
  Calendar as CalendarIcon, 
  CheckCircle2, 
  XCircle, 
  Clock,
  Filter,
  Download
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Badge } from '../../../components/ui/badge';
import { Avatar, AvatarFallback } from '../../../components/ui/avatar';
import { RadioGroup, RadioGroupItem } from '../../../components/ui/radio-group';
import { Label } from '../../../components/ui/label';
import { toast } from 'sonner';
import { siswaKelas5A } from '../../../data/dummy';

export const AbsensiGuru: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [attendance, setAttendance] = useState<Record<string, string>>(
    siswaKelas5A.reduce((acc, s) => ({ ...acc, [s.id]: 'Hadir' }), {})
  );

  const filteredSiswa = siswaKelas5A.filter(s => 
    s.nama.toLowerCase().includes(searchQuery.toLowerCase()) || 
    s.nisn.includes(searchQuery)
  );

  const handleStatusChange = (id: string, status: string) => {
    setAttendance(prev => ({ ...prev, [id]: status }));
  };

  const handleSave = () => {
    toast.success("Absensi berhasil disimpan!");
    console.log("Saving attendance:", attendance);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-heading font-black text-text-primary">Input Absensi</h1>
          <p className="text-text-muted font-ui">Kelas 5A • Senin, 12 April 2025</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="rounded-xl font-bold">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button onClick={handleSave} className="rounded-xl font-bold shadow-lg shadow-primary/20">
            <Save className="w-4 h-4 mr-2" />
            Simpan Absensi
          </Button>
        </div>
      </div>

      <Card className="border-none shadow-sm rounded-[32px]">
        <CardHeader className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted w-5 h-5" />
            <Input 
              placeholder="Cari nama atau NISN..." 
              className="pl-12 py-6 rounded-2xl border-surface bg-surface/50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Badge className="bg-green-100 text-green-600 border-none">Hadir: {Object.values(attendance).filter(v => v === 'Hadir').length}</Badge>
              <Badge className="bg-orange-100 text-orange-600 border-none">Izin: {Object.values(attendance).filter(v => v === 'Izin').length}</Badge>
              <Badge className="bg-red-100 text-red-600 border-none">Sakit: {Object.values(attendance).filter(v => v === 'Sakit').length}</Badge>
              <Badge className="bg-surface-dark text-text-muted border-none">Alfa: {Object.values(attendance).filter(v => v === 'Alfa').length}</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm font-ui">
              <thead className="text-text-muted uppercase tracking-wider text-[10px] font-bold border-b border-surface">
                <tr>
                  <th className="px-4 py-4">Siswa</th>
                  <th className="px-4 py-4 text-center">Status Kehadiran</th>
                  <th className="px-4 py-4">Keterangan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface">
                {filteredSiswa.map((siswa) => (
                  <tr key={siswa.id} className="hover:bg-surface/30 transition-colors">
                    <td className="px-4 py-4">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-primary/10 text-primary font-bold text-xs">
                            {siswa.nama.substring(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-bold text-text-primary">{siswa.nama}</div>
                          <div className="text-[10px] text-text-muted">NISN: {siswa.nisn}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <RadioGroup 
                        defaultValue="Hadir" 
                        value={attendance[siswa.id]} 
                        onValueChange={(val) => handleStatusChange(siswa.id, val)}
                        className="flex justify-center space-x-4"
                      >
                        <div className="flex flex-col items-center space-y-1">
                          <RadioGroupItem value="Hadir" id={`h-${siswa.id}`} className="text-green-600 border-green-200" />
                          <Label htmlFor={`h-${siswa.id}`} className="text-[10px] font-bold text-green-600">H</Label>
                        </div>
                        <div className="flex flex-col items-center space-y-1">
                          <RadioGroupItem value="Izin" id={`i-${siswa.id}`} className="text-orange-600 border-orange-200" />
                          <Label htmlFor={`i-${siswa.id}`} className="text-[10px] font-bold text-orange-600">I</Label>
                        </div>
                        <div className="flex flex-col items-center space-y-1">
                          <RadioGroupItem value="Sakit" id={`s-${siswa.id}`} className="text-red-600 border-red-200" />
                          <Label htmlFor={`s-${siswa.id}`} className="text-[10px] font-bold text-red-600">S</Label>
                        </div>
                        <div className="flex flex-col items-center space-y-1">
                          <RadioGroupItem value="Alfa" id={`a-${siswa.id}`} className="text-text-muted border-surface-dark" />
                          <Label htmlFor={`a-${siswa.id}`} className="text-[10px] font-bold text-text-muted">A</Label>
                        </div>
                      </RadioGroup>
                    </td>
                    <td className="px-4 py-4">
                      <Input 
                        placeholder="Catatan..." 
                        className="h-8 rounded-lg text-xs border-surface bg-transparent focus-visible:ring-primary" 
                      />
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
