import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthUser, UserRole } from '../types';

interface AuthContextType {
  user: AuthUser | null;
  login: (email: string, role: UserRole) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('auth_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, role: UserRole) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    let mockUser: AuthUser;

    if (role === 'admin') {
      mockUser = { id: 'admin-1', nama: 'Admin Sekolah', email, role: 'admin' };
    } else if (role === 'guru') {
      mockUser = { id: 'guru-1', nama: 'Ibu Hj. Sari Dewi, S.Pd', email, role: 'guru', kelas: '5A' };
    } else {
      mockUser = { id: 'ortu-1', nama: 'Bapak Deden Sopandi', email, role: 'ortu', kelas: '5A', namaAnak: 'Ahmad Fauzi' };
    }

    setUser(mockUser);
    localStorage.setItem('auth_user', JSON.stringify(mockUser));
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('auth_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
