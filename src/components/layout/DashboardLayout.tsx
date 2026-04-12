import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { Bell, Search, ChevronDown, User, Settings, LogOut } from 'lucide-react';
import { Sidebar } from './Sidebar';
import { useAuth } from '../../context/AuthContext';
import { useNotif } from '../../context/NotifContext';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '../ui/dropdown-menu';
import { Badge } from '../ui/badge';

export const DashboardLayout: React.FC = () => {
  const { user, isLoading, logout } = useAuth();
  const { unreadCount, notifications, markAsRead } = useNotif();
  const location = useLocation();

  if (isLoading) return <div className="h-screen flex items-center justify-center">Loading...</div>;
  if (!user) return <Navigate to="/login" state={{ from: location }} replace />;

  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/dashboard') return 'Dashboard Overview';
    if (path.includes('absensi')) return 'Manajemen Absensi';
    if (path.includes('rapor')) return 'Data Rapor Digital';
    if (path.includes('berita')) return 'Kelola Berita';
    if (path.includes('settings')) return 'Pengaturan Akun';
    return 'Dashboard';
  };

  return (
    <div className="flex h-screen bg-surface overflow-hidden">
      <Sidebar />
      
      <div className="flex-grow flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="h-20 bg-white border-b border-surface flex items-center justify-between px-8 shrink-0">
          <div>
            <h1 className="text-xl font-heading font-bold text-text-primary">{getPageTitle()}</h1>
            <div className="flex items-center text-xs text-text-muted font-ui mt-1">
              <span>Portal {user.role.charAt(0).toUpperCase() + user.role.slice(1)}</span>
              <span className="mx-2">•</span>
              <span>{new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            {/* Search */}
            <div className="hidden md:flex items-center bg-surface rounded-full px-4 py-2 w-64 border border-transparent focus-within:border-primary/30 transition-all">
              <Search className="w-4 h-4 text-text-muted mr-2" />
              <input 
                type="text" 
                placeholder="Cari data..." 
                className="bg-transparent border-none outline-none text-sm font-ui w-full"
              />
            </div>

            {/* Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative bg-surface rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                  <Bell className="w-5 h-5" />
                  {unreadCount > 0 && (
                    <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-danger text-white border-2 border-white text-[10px]">
                      {unreadCount}
                    </Badge>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80 p-0 rounded-2xl overflow-hidden shadow-2xl border-surface">
                <DropdownMenuLabel className="p-4 bg-primary text-white flex justify-between items-center">
                  <span className="font-heading font-bold">Notifikasi</span>
                  <Badge variant="secondary" className="bg-white/20 text-white border-none">{unreadCount} Baru</Badge>
                </DropdownMenuLabel>
                <div className="max-height-[400px] overflow-y-auto">
                  {notifications.length > 0 ? (
                    notifications.map((n) => (
                      <DropdownMenuItem 
                        key={n.id} 
                        className={`p-4 flex flex-col items-start border-b border-surface cursor-pointer hover:bg-surface transition-colors ${!n.dibaca && 'bg-primary/5'}`}
                        onClick={() => markAsRead(n.id)}
                      >
                        <div className="flex items-center justify-between w-full mb-1">
                          <Badge variant="outline" className="text-[10px] uppercase tracking-wider font-bold border-primary/30 text-primary">
                            {n.tipe}
                          </Badge>
                          <span className="text-[10px] text-text-muted">{n.waktu}</span>
                        </div>
                        <p className={`text-sm font-ui ${!n.dibaca ? 'font-bold text-text-primary' : 'text-text-muted'}`}>
                          {n.teks}
                        </p>
                      </DropdownMenuItem>
                    ))
                  ) : (
                    <div className="p-8 text-center text-text-muted italic text-sm">
                      Tidak ada notifikasi
                    </div>
                  )}
                </div>
                <DropdownMenuItem className="p-3 text-center justify-center font-ui font-bold text-primary text-xs hover:bg-surface">
                  Lihat Semua Notifikasi
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User Profile */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="p-1 pl-3 h-auto rounded-full bg-surface hover:bg-primary/10 transition-colors group">
                  <div className="flex items-center">
                    <div className="flex flex-col items-end mr-3 hidden sm:flex">
                      <span className="text-xs font-bold text-text-primary leading-none group-hover:text-primary transition-colors">{user.nama}</span>
                      <span className="text-[10px] text-text-muted uppercase tracking-widest mt-1">{user.role}</span>
                    </div>
                    <Avatar className="w-8 h-8 border-2 border-white shadow-sm">
                      <AvatarFallback className="bg-primary text-white text-xs font-bold">
                        {user.nama.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <ChevronDown className="w-4 h-4 ml-2 text-text-muted group-hover:text-primary transition-colors" />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 rounded-2xl p-2 shadow-2xl border-surface">
                <DropdownMenuLabel className="font-heading font-bold px-3 py-2">Akun Saya</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-surface" />
                <DropdownMenuItem className="rounded-xl px-3 py-2 cursor-pointer hover:bg-surface">
                  <User className="w-4 h-4 mr-2" />
                  Profil Lengkap
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-xl px-3 py-2 cursor-pointer hover:bg-surface">
                  <Settings className="w-4 h-4 mr-2" />
                  Pengaturan
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-surface" />
                <DropdownMenuItem 
                  className="rounded-xl px-3 py-2 cursor-pointer text-danger hover:bg-danger-light hover:text-danger"
                  onClick={logout}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Keluar
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
