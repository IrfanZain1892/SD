import React, { createContext, useContext, useState } from 'react';
import { Notification } from '../types';
import { notifData } from '../data/dummy';

interface NotifContextType {
  notifications: Notification[];
  unreadCount: number;
  markAsRead: (id: number) => void;
  markAllAsRead: () => void;
}

const NotifContext = createContext<NotifContextType | undefined>(undefined);

export const NotifProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>(notifData);

  const unreadCount = notifications.filter(n => !n.dibaca).length;

  const markAsRead = (id: number) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, dibaca: true } : n));
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, dibaca: true })));
  };

  return (
    <NotifContext.Provider value={{ notifications, unreadCount, markAsRead, markAllAsRead }}>
      {children}
    </NotifContext.Provider>
  );
};

export const useNotif = () => {
  const context = useContext(NotifContext);
  if (context === undefined) {
    throw new Error('useNotif must be used within a NotifProvider');
  }
  return context;
};
