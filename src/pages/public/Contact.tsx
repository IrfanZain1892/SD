import React from 'react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageSquare,
  ExternalLink
} from 'lucide-react';
import { PageHeader } from '../../components/shared/PageHeader';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { toast } from 'sonner';

const contactSchema = z.object({
  nama: z.string().min(3, "Nama minimal 3 karakter"),
  email: z.string().email("Format email tidak valid"),
  noHp: z.string().min(10, "Nomor HP minimal 10 digit"),
  topik: z.string().min(1, "Pilih topik pesan"),
  pesan: z.string().min(10, "Pesan minimal 10 karakter"),
  captcha: z.string().min(1, "Jawaban harus diisi"),
});

type ContactData = z.infer<typeof contactSchema>;

export const Contact: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors }, setError } = useForm<ContactData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = (data: ContactData) => {
    if (data.captcha !== "7") {
      setError("captcha", { message: "Jawaban salah" });
      return;
    }
    console.log(data);
    toast.success("Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.");
    reset();
  };

  const contactInfo = [
    { 
      icon: <MapPin />, 
      title: "Alamat Kami", 
      desc: "Jl. Raya Desa Mekarsari, Maleber, Kuningan, Jawa Barat",
      action: "Lihat di Maps",
      color: "bg-blue-500"
    },
    { 
      icon: <Phone />, 
      title: "Telepon / WA", 
      desc: "(+62) 822-1116-6929",
      action: "Hubungi Sekarang",
      color: "bg-green-500"
    },
    { 
      icon: <Mail />, 
      title: "Email Resmi", 
      desc: "sdnmekarsari@gmail.com",
      action: "Kirim Email",
      color: "bg-red-500"
    }
  ];

  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Hubungi Kami" 
        subtitle="Kami siap membantu Anda. Silakan hubungi kami melalui saluran komunikasi yang tersedia."
        background="bg-primary-dark"
      />

      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {contactInfo.map((item, idx) => (
              <Card key={idx} className="border-none shadow-lg rounded-[32px] overflow-hidden group hover:shadow-2xl transition-all">
                <CardContent className="p-10 flex flex-col items-center text-center">
                  <div className={`w-16 h-16 ${item.color}/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform`}>
                    {React.cloneElement(item.icon as React.ReactElement, { className: `w-8 h-8 ${item.color.replace('bg-', 'text-')}` })}
                  </div>
                  <h4 className="font-heading font-bold text-xl text-text-primary mb-3">{item.title}</h4>
                  <p className="text-text-muted font-ui text-sm mb-6 leading-relaxed">{item.desc}</p>
                  <Button variant="ghost" className="text-primary font-ui font-bold hover:bg-primary/5">
                    {item.action}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-surface p-10 rounded-[40px] shadow-xl border border-white"
            >
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white mr-4">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-text-primary">Kirim Pesan</h3>
                  <p className="text-xs text-text-muted font-ui">Panitia kami akan merespon dalam 1x24 jam.</p>
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nama">Nama Lengkap</Label>
                    <Input id="nama" {...register('nama')} className="rounded-xl bg-surface border-none shadow-sm" />
                    {errors.nama && <p className="text-xs text-danger font-ui">{errors.nama.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" {...register('email')} className="rounded-xl bg-surface border-none shadow-sm" />
                    {errors.email && <p className="text-xs text-danger font-ui">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="noHp">Nomor HP</Label>
                    <Input id="noHp" {...register('noHp')} className="rounded-xl bg-surface border-none shadow-sm" />
                    {errors.noHp && <p className="text-xs text-danger font-ui">{errors.noHp.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="topik">Topik Pesan</Label>
                    <select 
                      id="topik" 
                      {...register('topik')} 
                      className="w-full rounded-xl bg-surface border-none shadow-sm h-10 px-3 text-sm font-ui focus:ring-2 focus:ring-primary outline-none"
                    >
                      <option value="">Pilih Topik</option>
                      <option value="PPDB">Pertanyaan PPDB</option>
                      <option value="Akademik">Informasi Akademik</option>
                      <option value="Saran">Saran & Kritik</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                    {errors.topik && <p className="text-xs text-danger font-ui">{errors.topik.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pesan">Pesan Anda</Label>
                  <Textarea id="pesan" {...register('pesan')} rows={5} className="rounded-xl bg-surface border-none shadow-sm" />
                  {errors.pesan && <p className="text-xs text-danger font-ui">{errors.pesan.message}</p>}
                </div>

                <div className="p-6 bg-surface rounded-2xl shadow-sm border border-primary/10">
                  <Label htmlFor="captcha" className="block mb-3">Keamanan: Berapa hasil dari 3 + 4?</Label>
                  <Input id="captcha" {...register('captcha')} placeholder="Jawab dengan angka" className="rounded-xl border-surface" />
                  {errors.captcha && <p className="text-xs text-danger font-ui mt-2">{errors.captcha.message}</p>}
                </div>

                <Button type="submit" className="w-full rounded-2xl py-8 font-heading font-bold text-lg shadow-lg shadow-primary/20">
                  <Send className="w-5 h-5 mr-3" />
                  Kirim Pesan Sekarang
                </Button>
              </form>
            </motion.div>

            {/* Additional Info */}
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-heading font-bold text-text-primary mb-6">Jam Operasional</h3>
                <div className="space-y-4">
                  {[
                    { day: "Senin – Kamis", time: "07.00 – 14.00 WIB" },
                    { day: "Jumat", time: "07.00 – 11.30 WIB" },
                    { day: "Sabtu – Minggu", time: "Libur (Hanya Online)" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-surface rounded-2xl border border-white">
                      <span className="font-ui font-bold text-text-primary">{item.day}</span>
                      <div className="flex items-center text-primary font-ui font-medium">
                        <Clock className="w-4 h-4 mr-2" />
                        {item.time}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold text-text-primary mb-6">Kontak Per Divisi</h3>
                <div className="overflow-hidden rounded-3xl border border-surface shadow-sm">
                  <table className="w-full text-left text-sm font-ui">
                    <thead className="bg-surface text-text-muted uppercase tracking-wider text-[10px] font-bold">
                      <tr>
                        <th className="px-6 py-4">Divisi</th>
                        <th className="px-6 py-4">Nama Kontak</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-surface">
                      {[
                        { div: "Kepala Sekolah", name: "Drs. Mulyadi" },
                        { div: "Tata Usaha", name: "Ibu Yanti" },
                        { div: "Kurikulum", name: "Ibu Sari Dewi" },
                        { div: "Kesiswaan", name: "Bapak Hendra" }
                      ].map((row, idx) => (
                        <tr key={idx} className="hover:bg-surface/50 transition-colors">
                          <td className="px-6 py-4 font-bold text-text-primary">{row.div}</td>
                          <td className="px-6 py-4 text-text-muted">{row.name}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="p-8 bg-primary rounded-[40px] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-surface/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
                <h3 className="text-xl font-heading font-bold mb-2">Butuh Bantuan Cepat?</h3>
                <p className="text-sm text-white/70 font-ui mb-6">Hubungi WhatsApp Tata Usaha kami untuk respon yang lebih cepat.</p>
                <Button className="bg-surface text-primary hover:bg-white/90 rounded-xl px-8 font-bold">
                  WhatsApp Kami
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-green-500/10 flex flex-col items-center justify-center text-center p-8">
          <div className="w-16 h-16 bg-surface rounded-3xl shadow-2xl flex items-center justify-center text-primary mb-6 animate-bounce">
            <MapPin className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-text-primary mb-2">Lokasi SD Negeri Mekarsari</h3>
          <p className="text-text-muted font-ui mb-8">Jl. Raya Desa Mekarsari, Maleber, Kuningan, Jawa Barat</p>
          <Button size="lg" className="rounded-2xl px-10 py-6 font-bold shadow-xl">
            Petunjuk Arah Google Maps
          </Button>
        </div>
      </section>
    </div>
  );
};


