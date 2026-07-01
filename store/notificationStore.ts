"use client";

import { create } from "zustand";
import { Notification } from "@/types/notification";

type NotificationState = {
  notifications: Notification[];

  unreadCount: number;

  setNotifications: (notifications: Notification[]) => void;

  addNotification: (notification: Notification) => void;

  removeNotification: (id: string) => void;

  markAsRead: (id: string) => void;

  markAllRead: () => void;

  clearAll: () => void;
};

export const useNotificationStore = create<NotificationState>((set) => ({
  notifications: [],

  unreadCount: 0,

  setNotifications: (notifications) =>
    set({
      notifications,
      unreadCount: notifications.filter((n) => !n.read).length,
    }),

  addNotification: (notification) =>
    set((state) => {
      const notifications = [notification, ...state.notifications];

      return {
        notifications,
        unreadCount: notifications.filter((n) => !n.read).length,
      };
    }),

  removeNotification: (id: string) =>
    set((state) => {
      const notifications = state.notifications.filter((n) => n.id !== id);

      return {
        notifications,
        unreadCount: notifications.filter((n) => !n.read).length,
      };
    }),

  markAsRead: (id) =>
    set((state) => {
      const notifications = state.notifications.map((notification) =>
        notification.id === id
          ? {
              ...notification,
              read: true,
            }
          : notification,
      );

      return {
        notifications,
        unreadCount: notifications.filter((n) => !n.read).length,
      };
    }),

  markAllRead: () =>
    set((state) => {
      const notifications = state.notifications.map((notification) => ({
        ...notification,
        read: true,
      }));

      return {
        notifications,
        unreadCount: 0,
      };
    }),

  clearAll: () =>
    set({
      notifications: [],
      unreadCount: 0,
    }),
}));
