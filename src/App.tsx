/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import { AuthProvider, useAuth } from './context/AuthContext';
import { NotifProvider } from './context/NotifContext';
import { PublicLayout } from './components/layout/PublicLayout';
import { DashboardLayout } from './components/layout/DashboardLayout';

// Public Pages
import { Home } from './pages/public/Home';
import { Profile } from './pages/public/Profile';
import { News } from './pages/public/News';
import { NewsDetail } from './pages/public/NewsDetail';
import { Gallery } from './pages/public/Gallery';
import { PPDB } from './pages/public/PPDB';
import { Contact } from './pages/public/Contact';

// Dashboard Pages
import { Login } from './pages/dashboard/Login';
import { DashboardAdmin } from './pages/dashboard/admin/DashboardAdmin';
import { AbsensiAdmin } from './pages/dashboard/admin/AbsensiAdmin';
import { RaporAdmin } from './pages/dashboard/admin/RaporAdmin';
import { DashboardGuru } from './pages/dashboard/guru/DashboardGuru';
import { AbsensiGuru } from './pages/dashboard/guru/AbsensiGuru';
import { DashboardOrtu } from './pages/dashboard/ortu/DashboardOrtu';
import { RaporOrtu } from './pages/dashboard/ortu/RaporOrtu';

// Helper component to render different content based on role
const RoleBasedElement: React.FC<{ 
  admin: React.ReactNode; 
  guru: React.ReactNode; 
  ortu: React.ReactNode 
}> = ({ admin, guru, ortu }) => {
  const { user } = useAuth();
  
  if (!user) return null;
  
  switch (user.role) {
    case 'admin': return <>{admin}</>;
    case 'guru': return <>{guru}</>;
    case 'ortu': return <>{ortu}</>;
    default: return <Navigate to="/" replace />;
  }
};

export default function App() {
  return (
    <AuthProvider>
      <NotifProvider>
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route element={<PublicLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/profil" element={<Profile />} />
              <Route path="/berita" element={<News />} />
              <Route path="/berita/:id" element={<NewsDetail />} />
              <Route path="/galeri" element={<Gallery />} />
              <Route path="/ppdb" element={<PPDB />} />
              <Route path="/kontak" element={<Contact />} />
            </Route>

            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />

            {/* Dashboard Routes (Protected) */}
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Navigate to="home" replace />} />
              
              {/* Common/Role-specific Home */}
              <Route path="home" element={
                <RoleBasedElement 
                  admin={<DashboardAdmin />} 
                  guru={<DashboardGuru />} 
                  ortu={<DashboardOrtu />} 
                />
              } />

              {/* Admin Specific */}
              <Route path="admin/absensi" element={<AbsensiAdmin />} />
              <Route path="admin/rapor" element={<RaporAdmin />} />
              <Route path="admin/berita" element={<div className="p-8">Manajemen Berita (Coming Soon)</div>} />
              <Route path="admin/pengaturan" element={<div className="p-8">Pengaturan Sistem (Coming Soon)</div>} />

              {/* Guru Specific */}
              <Route path="guru/absensi" element={<AbsensiGuru />} />
              <Route path="guru/rekap" element={<div className="p-8">Rekap Nilai (Coming Soon)</div>} />

              {/* Ortu Specific */}
              <Route path="ortu/rapor" element={<RaporOrtu />} />
              <Route path="ortu/absensi" element={<div className="p-8">Detail Absensi Anak (Coming Soon)</div>} />
            </Route>

            {/* 404 Redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Toaster position="top-right" richColors closeButton />
        </BrowserRouter>
      </NotifProvider>
    </AuthProvider>
  );
}
