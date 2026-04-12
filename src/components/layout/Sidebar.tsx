import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  CheckSquare, 
  FileBarChart, 
  Newspaper, 
  Settings, 
  LogOut,
  User,
  MapPin,
  FileText
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback } from '../ui/avatar';

export const Sidebar: React.FC = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const adminMenu = [
    { name: 'Dashboard', path: '/dashboard/home', icon: LayoutDashboard },
    { name: 'Rekap Absensi', path: '/dashboard/admin/absensi', icon: CheckSquare },
    { name: 'Data Rapor', path: '/dashboard/admin/rapor', icon: FileBarChart },
    { name: 'Kelola Berita', path: '/dashboard/admin/berita', icon: Newspaper },
    { name: 'Pengaturan', path: '/dashboard/admin/pengaturan', icon: Settings },
  ];

  const guruMenu = [
    { name: 'Dashboard', path: '/dashboard/home', icon: LayoutDashboard },
    { name: 'Input Absensi', path: '/dashboard/guru/absensi', icon: CheckSquare },
    { name: 'Rekap Kehadiran', path: '/dashboard/guru/rekap', icon: FileBarChart },
  ];

  const ortuMenu = [
    { name: 'Dashboard', path: '/dashboard/home', icon: LayoutDashboard },
    { name: 'Absensi Anak', path: '/dashboard/ortu/absensi', icon: MapPin },
    { name: 'Rapor Anak', path: '/dashboard/ortu/rapor', icon: FileText },
  ];

  const menuItems = user?.role === 'admin' ? adminMenu : user?.role === 'guru' ? guruMenu : ortuMenu;

  return (
    <aside className="w-64 bg-white border-r border-surface h-screen sticky top-0 flex flex-col">
      <div className="p-6 border-b border-surface">
        <Link to="/" className="flex items-center">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center mr-3">
            <span className="text-white font-heading font-bold text-sm">M</span>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-sm leading-none text-primary">SD Negeri</span>
            <span className="font-heading font-bold text-sm leading-none text-primary-dark">Mekarsari</span>
          </div>
        </Link>
      </div>

      <nav className="flex-grow p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center px-4 py-3 rounded-xl font-ui font-medium text-sm transition-all ${
              isActive(item.path)
                ? 'bg-primary text-white shadow-md'
                : 'text-text-muted hover:bg-surface hover:text-primary'
            }`}
          >
            <item.icon className={`w-5 h-5 mr-3 ${isActive(item.path) ? 'text-white' : 'text-text-muted'}`} />
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-surface">
        <div className="flex items-center p-3 bg-surface rounded-2xl mb-4">
          <Avatar className="w-10 h-10 mr-3 border-2 border-white shadow-sm">
            <AvatarFallback className="bg-primary text-white font-bold">
              {user?.nama.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col overflow-hidden">
            <span className="font-ui font-bold text-xs text-text-primary truncate">{user?.nama}</span>
            <span className="font-ui text-[10px] text-text-muted uppercase tracking-wider">{user?.role}</span>
          </div>
        </div>
        <Button 
          variant="ghost" 
          className="w-full justify-start text-danger hover:text-danger hover:bg-danger-light rounded-xl"
          onClick={logout}
        >
          <LogOut className="w-5 h-5 mr-3" />
          Keluar
        </Button>
      </div>
    </aside>
  );
};
