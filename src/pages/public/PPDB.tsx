import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  CheckCircle2, 
  Upload, 
  FileText, 
  User, 
  Users, 
  Search, 
  ChevronRight, 
  ChevronLeft,
  HelpCircle,
  AlertCircle
} from 'lucide-react';
import { PageHeader } from '../../components/shared/PageHeader';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Badge } from '../../components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/ui/accordion';
import { RadioGroup, RadioGroupItem } from '../../components/ui/radio-group';
import { toast } from 'sonner';

const formSchema = z.object({
  namaLengkap: z.string().min(3, "Nama lengkap minimal 3 karakter"),
  namaPanggilan: z.string().min(2, "Nama panggilan minimal 2 karakter"),
  jenisKelamin: z.enum(["L", "P"]),
  tempatLahir: z.string().min(3, "Tempat lahir wajib diisi"),
  tanggalLahir: z.string().min(1, "Tanggal lahir wajib diisi"),
  agama: z.string().min(1, "Agama wajib diisi"),
  nik: z.string().length(16, "NIK harus 16 digit"),
  namaAyah: z.string().min(3, "Nama ayah wajib diisi"),
  namaIbu: z.string().min(3, "Nama ibu wajib diisi"),
  pekerjaanAyah: z.string().min(1, "Pekerjaan ayah wajib diisi"),
  noHp: z.string().min(10, "Nomor HP minimal 10 digit"),
  alamat: z.string().min(10, "Alamat lengkap minimal 10 karakter"),
});

type FormData = z.infer<typeof formSchema>;

export const PPDB: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [regNumber, setRegNumber] = useState('');
  const [searchReg, setSearchReg] = useState('');
  const [searchStatus, setSearchStatus] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, trigger, getValues } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jenisKelamin: "L"
    }
  });

  const nextStep = async () => {
    let fields: (keyof FormData)[] = [];
    if (step === 1) {
      fields = ['namaLengkap', 'namaPanggilan', 'jenisKelamin', 'tempatLahir', 'tanggalLahir', 'agama', 'nik'];
    } else if (step === 2) {
      fields = ['namaAyah', 'namaIbu', 'pekerjaanAyah', 'noHp', 'alamat'];
    }

    const isValid = await trigger(fields);
    if (isValid) setStep(prev => prev + 1);
  };

  const prevStep = () => setStep(prev => prev - 1);

  const onSubmit = (data: FormData) => {
    console.log(data);
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setRegNumber(`PPDB-2025-${randomNum}`);
    setIsSubmitted(true);
    toast.success("Pendaftaran Berhasil Terkirim!");
  };

  const handleCheckStatus = () => {
    if (searchReg === 'PPDB-2025-0001') {
      setSearchStatus('Diterima');
    } else if (searchReg.startsWith('PPDB-2025-')) {
      setSearchStatus('Menunggu Verifikasi');
    } else {
      setSearchStatus('Data Tidak Ditemukan');
    }
  };

  const faqs = [
    { q: "Berapa usia minimal masuk SD?", a: "Usia minimal adalah 6 tahun pada tanggal 1 Juli 2025. Prioritas diberikan kepada calon siswa yang berusia 7 tahun atau lebih." },
    { q: "Apakah ada tes masuk?", a: "Tidak ada tes akademik (baca, tulis, hitung) untuk masuk SD sesuai aturan pemerintah. Seleksi didasarkan pada usia dan jarak tempat tinggal." },
    { q: "Apakah bisa daftar offline?", a: "Kami sangat menyarankan pendaftaran online. Namun jika ada kendala, silakan datang ke sekolah pada jam kerja untuk dibantu panitia." },
    { q: "Bagaimana jika dokumen tidak lengkap?", a: "Pendaftaran tetap bisa dilakukan, namun verifikasi administrasi hanya akan diproses setelah dokumen lengkap diunggah." },
    { q: "Kapan pengumuman hasil seleksi?", a: "Pengumuman hasil seleksi akan diumumkan pada tanggal 27 Juni 2025 melalui website ini." }
  ];

  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Penerimaan Siswa Baru" 
        subtitle="Mulai perjalanan pendidikan putra-putri Anda bersama SD Negeri Mekarsari."
        background="gradient-hero"
      />

      {/* Hero Stats */}
      <section className="py-12 bg-[#F0F4FF] border-b border-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F0F4FF] p-6 rounded-3xl flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-heading font-bold text-text-primary">60</div>
                <div className="text-xs text-text-muted font-ui uppercase tracking-wider">Kuota Tersedia</div>
              </div>
            </div>
            <div className="bg-[#F0F4FF] p-6 rounded-3xl flex items-center space-x-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-heading font-bold text-text-primary">38</div>
                <div className="text-xs text-text-muted font-ui uppercase tracking-wider">Terdaftar</div>
              </div>
            </div>
            <div className="bg-[#F0F4FF] p-6 rounded-3xl flex items-center space-x-4">
              <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-heading font-bold text-text-primary">22</div>
                <div className="text-xs text-text-muted font-ui uppercase tracking-wider">Sisa Kuota</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alur Pendaftaran */}
      <section className="py-24 bg-[#F0F4FF]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-extrabold text-text-primary mb-4">Alur Pendaftaran</h2>
            <p className="text-text-muted font-ui max-w-2xl mx-auto">Ikuti langkah-langkah mudah berikut untuk mendaftarkan putra-putri Anda.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary/10 hidden md:block -z-10" />
            {[
              { step: 1, title: "Isi Formulir", desc: "1–20 Juni 2025" },
              { step: 2, title: "Upload Dokumen", desc: "1–20 Juni 2025" },
              { step: 3, title: "Verifikasi", desc: "21–25 Juni 2025" },
              { step: 4, title: "Pengumuman", desc: "27 Juni 2025" },
              { step: 5, title: "Daftar Ulang", desc: "30 Juni–5 Juli 2025" }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#F0F4FF] p-6 rounded-3xl text-center shadow-sm border border-transparent hover:border-primary/20 transition-all">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-heading font-bold">
                  {item.step}
                </div>
                <h4 className="font-heading font-bold text-text-primary text-sm mb-1">{item.title}</h4>
                <p className="text-[10px] text-text-muted font-ui">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content: Form or Success */}
      <section className="py-24 bg-[#F0F4FF]">
        <div className="container mx-auto px-4 max-w-4xl">
          {!isSubmitted ? (
            <div className="space-y-12">
              <div className="flex justify-between items-center mb-12 relative">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#F0F4FF] -z-10" />
                {[1, 2, 3, 4].map((s) => (
                  <div 
                    key={s} 
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold transition-all ${
                      step >= s ? 'bg-primary text-white shadow-lg scale-110' : 'bg-white text-text-muted border-2 border-surface'
                    }`}
                  >
                    {s}
                  </div>
                ))}
              </div>

              <Card className="border-none shadow-2xl rounded-[40px] overflow-hidden">
                <CardHeader className="bg-primary p-8 text-white">
                  <CardTitle className="text-2xl font-heading font-bold">
                    {step === 1 && "Data Calon Siswa"}
                    {step === 2 && "Data Orang Tua / Wali"}
                    {step === 3 && "Upload Dokumen"}
                    {step === 4 && "Review & Submit"}
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    {step === 1 && "Silakan lengkapi data diri calon peserta didik baru."}
                    {step === 2 && "Informasi kontak orang tua sangat penting untuk koordinasi."}
                    {step === 3 && "Unggah berkas persyaratan dalam format JPG, PNG, atau PDF."}
                    {step === 4 && "Pastikan semua data yang Anda isi sudah benar."}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-10">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {step === 1 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="namaLengkap">Nama Lengkap</Label>
                          <Input id="namaLengkap" {...register('namaLengkap')} placeholder="Sesuai Akta Kelahiran" className="rounded-xl" />
                          {errors.namaLengkap && <p className="text-xs text-danger font-ui">{errors.namaLengkap.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="namaPanggilan">Nama Panggilan</Label>
                          <Input id="namaPanggilan" {...register('namaPanggilan')} placeholder="Contoh: Rizky" className="rounded-xl" />
                          {errors.namaPanggilan && <p className="text-xs text-danger font-ui">{errors.namaPanggilan.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label>Jenis Kelamin</Label>
                          <RadioGroup defaultValue="L" className="flex space-x-4 pt-2">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="L" id="L" {...register('jenisKelamin')} />
                              <Label htmlFor="L">Laki-laki</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="P" id="P" {...register('jenisKelamin')} />
                              <Label htmlFor="P">Perempuan</Label>
                            </div>
                          </RadioGroup>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="nik">NIK (16 Digit)</Label>
                          <Input id="nik" {...register('nik')} placeholder="3208xxxxxxxxxxxx" className="rounded-xl" />
                          {errors.nik && <p className="text-xs text-danger font-ui">{errors.nik.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="tempatLahir">Tempat Lahir</Label>
                          <Input id="tempatLahir" {...register('tempatLahir')} placeholder="Contoh: Kuningan" className="rounded-xl" />
                          {errors.tempatLahir && <p className="text-xs text-danger font-ui">{errors.tempatLahir.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="tanggalLahir">Tanggal Lahir</Label>
                          <Input id="tanggalLahir" type="date" {...register('tanggalLahir')} className="rounded-xl" />
                          {errors.tanggalLahir && <p className="text-xs text-danger font-ui">{errors.tanggalLahir.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="agama">Agama</Label>
                          <Input id="agama" {...register('agama')} placeholder="Contoh: Islam" className="rounded-xl" />
                          {errors.agama && <p className="text-xs text-danger font-ui">{errors.agama.message}</p>}
                        </div>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="namaAyah">Nama Ayah</Label>
                          <Input id="namaAyah" {...register('namaAyah')} className="rounded-xl" />
                          {errors.namaAyah && <p className="text-xs text-danger font-ui">{errors.namaAyah.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="namaIbu">Nama Ibu</Label>
                          <Input id="namaIbu" {...register('namaIbu')} className="rounded-xl" />
                          {errors.namaIbu && <p className="text-xs text-danger font-ui">{errors.namaIbu.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="pekerjaanAyah">Pekerjaan Ayah</Label>
                          <Input id="pekerjaanAyah" {...register('pekerjaanAyah')} className="rounded-xl" />
                          {errors.pekerjaanAyah && <p className="text-xs text-danger font-ui">{errors.pekerjaanAyah.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="noHp">Nomor HP Aktif (WhatsApp)</Label>
                          <Input id="noHp" {...register('noHp')} placeholder="08xxxxxxxxxx" className="rounded-xl" />
                          {errors.noHp && <p className="text-xs text-danger font-ui">{errors.noHp.message}</p>}
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="alamat">Alamat Lengkap</Label>
                          <Input id="alamat" {...register('alamat')} placeholder="Jl. Desa Mekarsari No..." className="rounded-xl" />
                          {errors.alamat && <p className="text-xs text-danger font-ui">{errors.alamat.message}</p>}
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div className="space-y-6">
                        {[
                          "Akta Kelahiran",
                          "Kartu Keluarga",
                          "Pas Foto 3x4 (Merah)",
                          "Ijazah TK / Surat Keterangan"
                        ].map((doc, idx) => (
                          <div key={idx} className="p-6 border-2 border-dashed border-surface rounded-3xl flex flex-col items-center justify-center hover:border-primary/30 transition-colors group cursor-pointer">
                            <Upload className="w-8 h-8 text-text-muted mb-2 group-hover:text-primary transition-colors" />
                            <p className="font-heading font-bold text-text-primary text-sm">{doc}</p>
                            <p className="text-[10px] text-text-muted font-ui mt-1">Klik atau drag file ke sini (Maks 2MB)</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {step === 4 && (
                      <div className="space-y-8">
                        <div className="bg-[#F0F4FF] p-6 rounded-3xl">
                          <h4 className="font-heading font-bold text-primary mb-4 flex items-center">
                            <User className="w-4 h-4 mr-2" />
                            Data Calon Siswa
                          </h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div><span className="text-text-muted">Nama:</span> <p className="font-bold">{getValues('namaLengkap')}</p></div>
                            <div><span className="text-text-muted">NIK:</span> <p className="font-bold">{getValues('nik')}</p></div>
                            <div><span className="text-text-muted">TTL:</span> <p className="font-bold">{getValues('tempatLahir')}, {getValues('tanggalLahir')}</p></div>
                          </div>
                        </div>
                        <div className="bg-[#F0F4FF] p-6 rounded-3xl">
                          <h4 className="font-heading font-bold text-primary mb-4 flex items-center">
                            <Users className="w-4 h-4 mr-2" />
                            Data Orang Tua
                          </h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div><span className="text-text-muted">Ayah:</span> <p className="font-bold">{getValues('namaAyah')}</p></div>
                            <div><span className="text-text-muted">Ibu:</span> <p className="font-bold">{getValues('namaIbu')}</p></div>
                            <div><span className="text-text-muted">HP:</span> <p className="font-bold">{getValues('noHp')}</p></div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 p-4 bg-accent/10 rounded-2xl border border-accent/20">
                          <AlertCircle className="w-5 h-5 text-accent shrink-0" />
                          <p className="text-xs font-ui text-accent font-medium">
                            Dengan menekan tombol submit, saya menyatakan bahwa data yang diisi adalah benar dan dapat dipertanggungjawabkan.
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="flex justify-between pt-8">
                      {step > 1 && (
                        <Button type="button" variant="outline" onClick={prevStep} className="rounded-xl px-8 py-6">
                          <ChevronLeft className="w-4 h-4 mr-2" />
                          Sebelumnya
                        </Button>
                      )}
                      <div className="ml-auto">
                        {step < 4 ? (
                          <Button type="button" onClick={nextStep} className="rounded-xl px-8 py-6">
                            Selanjutnya
                            <ChevronRight className="w-4 h-4 ml-2" />
                          </Button>
                        ) : (
                          <Button type="submit" className="bg-accent hover:bg-accent/90 rounded-xl px-12 py-6 font-bold">
                            Kirim Pendaftaran
                          </Button>
                        )}
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          ) : (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-12"
            >
              <div className="w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-12 h-12 text-secondary" />
              </div>
              <h2 className="text-3xl font-heading font-extrabold text-text-primary mb-4">Pendaftaran Berhasil!</h2>
              <p className="text-text-muted font-ui mb-8 max-w-md mx-auto">
                Terima kasih telah mendaftar. Silakan simpan nomor registrasi Anda untuk pengecekan status secara berkala.
              </p>
              <div className="bg-[#F0F4FF] p-8 rounded-[32px] border-2 border-dashed border-primary/20 mb-10 inline-block">
                <span className="text-xs text-text-muted font-ui uppercase tracking-widest block mb-2">Nomor Registrasi Anda</span>
                <span className="text-4xl font-heading font-black text-primary tracking-tighter">{regNumber}</span>
              </div>
              <div className="flex justify-center space-x-4">
                <Button onClick={() => setIsSubmitted(false)} variant="outline" className="rounded-xl px-8 py-6">Daftar Lagi</Button>
                <Button asChild className="rounded-xl px-8 py-6">
                  <a href={`#status`} onClick={() => setSearchReg(regNumber)}>Cek Status</a>
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Cek Status Section */}
      <section id="status" className="py-24 bg-[#F0F4FF]">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="border-none shadow-xl rounded-[40px] overflow-hidden">
            <CardHeader className="p-8 text-center">
              <CardTitle className="text-2xl font-heading font-bold">Cek Status Pendaftaran</CardTitle>
              <CardDescription>Masukkan nomor registrasi untuk melihat perkembangan pendaftaran Anda.</CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <div className="flex space-x-3 mb-8">
                <div className="relative flex-grow">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted w-5 h-5" />
                  <Input 
                    placeholder="PPDB-2025-XXXX" 
                    className="pl-12 py-6 rounded-2xl border-surface"
                    value={searchReg}
                    onChange={(e) => setSearchReg(e.target.value)}
                  />
                </div>
                <Button onClick={handleCheckStatus} className="rounded-2xl px-8 py-6">Cek</Button>
              </div>

              {searchStatus && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-8 rounded-3xl text-center flex flex-col items-center ${
                    searchStatus === 'Diterima' ? 'bg-secondary/10 text-secondary' : 
                    searchStatus === 'Data Tidak Ditemukan' ? 'bg-danger/10 text-danger' : 'bg-accent/10 text-accent'
                  }`}
                >
                  {searchStatus === 'Diterima' ? <CheckCircle2 className="w-12 h-12 mb-4" /> : <AlertCircle className="w-12 h-12 mb-4" />}
                  <h4 className="font-heading font-bold text-xl mb-1">{searchStatus}</h4>
                  <p className="text-sm font-ui opacity-80">
                    {searchStatus === 'Diterima' && "Selamat! Anda dinyatakan diterima di SD Negeri Mekarsari."}
                    {searchStatus === 'Menunggu Verifikasi' && "Berkas Anda sedang dalam proses peninjauan oleh panitia."}
                    {searchStatus === 'Data Tidak Ditemukan' && "Nomor registrasi tidak terdaftar. Silakan periksa kembali."}
                  </p>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#F0F4FF]">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
              <HelpCircle className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-heading font-extrabold text-text-primary mb-4">Pertanyaan Umum (FAQ)</h2>
            <p className="text-text-muted font-ui">Temukan jawaban atas pertanyaan yang sering diajukan seputar PPDB.</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border border-surface rounded-2xl px-6 overflow-hidden">
                <AccordionTrigger className="font-heading font-bold text-text-primary hover:no-underline py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-ui text-text-muted leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};



