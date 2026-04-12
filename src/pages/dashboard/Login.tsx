import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { LogIn, Eye, EyeOff, ShieldCheck, User, Users, Loader2, ChevronLeft } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../../components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Checkbox } from '../../components/ui/checkbox';
import { toast } from 'sonner';
import { UserRole } from '../../types';

const loginSchema = z.object({
  email: z.string().email("Format email tidak valid"),
  password: z.string().min(6, "Password minimal 6 karakter"),
});

type LoginData = z.infer<typeof loginSchema>;

export const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<UserRole>('admin');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/dashboard';

  const { register, handleSubmit, formState: { errors }, setValue } = useForm<LoginData>({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = async (data: LoginData) => {
    setIsSubmitting(true);
    try {
      await login(data.email, role);
      toast.success("Login Berhasil! Selamat datang di portal.");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error("Login Gagal. Silakan periksa kembali email dan password Anda.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const setDemoAccount = (role: UserRole) => {
    setRole(role);
    if (role === 'admin') {
      setValue('email', 'admin@sdnmekarsari.sch.id');
      setValue('password', 'Admin123!');
    } else if (role === 'guru') {
      setValue('email', 'guru@sdnmekarsari.sch.id');
      setValue('password', 'Guru123!');
    } else {
      setValue('email', 'ortu@sdnmekarsari.sch.id');
      setValue('password', 'Ortu123!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface p-4 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 -z-10" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-primary/20">
            <span className="text-white font-heading font-bold text-2xl">M</span>
          </div>
          <h1 className="text-2xl font-heading font-bold text-text-primary">SD Negeri Mekarsari</h1>
          <p className="text-sm text-text-muted font-ui">Portal Sistem Informasi Terpadu</p>
        </div>

        <Card className="border-none shadow-2xl rounded-[40px] overflow-hidden">
          <CardHeader className="bg-white pb-0">
            <Tabs defaultValue="admin" className="w-full" onValueChange={(v) => setDemoAccount(v as UserRole)}>
              <TabsList className="grid grid-cols-3 bg-surface p-1 rounded-2xl h-12">
                <TabsTrigger value="admin" className="rounded-xl font-ui font-bold text-xs">
                  <ShieldCheck className="w-3 h-3 mr-1" />
                  Admin
                </TabsTrigger>
                <TabsTrigger value="guru" className="rounded-xl font-ui font-bold text-xs">
                  <User className="w-3 h-3 mr-1" />
                  Guru
                </TabsTrigger>
                <TabsTrigger value="ortu" className="rounded-xl font-ui font-bold text-xs">
                  <Users className="w-3 h-3 mr-1" />
                  Ortu
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          
          <CardContent className="p-8 pt-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Alamat Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  {...register('email')} 
                  placeholder="nama@sdnmekarsari.sch.id"
                  className="rounded-xl py-6 border-surface focus-visible:ring-primary"
                />
                {errors.email && <p className="text-xs text-danger font-ui">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <button type="button" className="text-xs text-primary font-ui font-bold hover:underline">Lupa Password?</button>
                </div>
                <div className="relative">
                  <Input 
                    id="password" 
                    type={showPassword ? "text" : "password"} 
                    {...register('password')} 
                    className="rounded-xl py-6 border-surface focus-visible:ring-primary pr-12"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-primary transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && <p className="text-xs text-danger font-ui">{errors.password.message}</p>}
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="remember" className="rounded-md border-surface" />
                <Label htmlFor="remember" className="text-xs text-text-muted font-ui cursor-pointer">Ingat saya di perangkat ini</Label>
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full rounded-2xl py-8 font-heading font-bold text-lg shadow-lg shadow-primary/20">
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Memproses...
                  </>
                ) : (
                  <>
                    <LogIn className="w-5 h-5 mr-2" />
                    Masuk ke Portal
                  </>
                )}
              </Button>
            </form>
          </CardContent>
          
          <CardFooter className="bg-surface p-6 flex justify-center">
            <p className="text-xs text-text-muted font-ui">
              Belum punya akun? <Link to="/kontak" className="text-primary font-bold hover:underline">Hubungi Tata Usaha</Link>
            </p>
          </CardFooter>
        </Card>

        <div className="mt-8 text-center">
          <Link to="/" className="text-sm text-text-muted font-ui hover:text-primary transition-colors flex items-center justify-center">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
};
