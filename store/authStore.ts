"use client";

import { create } from "zustand";
import { User } from "@/types/auth";

type AuthState = {
  user: User | null;
  token: string | null;
  initialized: boolean;
  isAuthenticated: boolean;

  login: (user: User, token: string, remember: boolean) => void;
  logout: () => void;
  restoreSession: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  initialized: false,
  isAuthenticated: false,

  login: (user, token, remember) => {
    set({
      user,
      token,
      isAuthenticated: true,
    });

    if (remember) {
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("user", JSON.stringify(user));
    }
  },

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");

    set({
      user: null,
      token: null,
      isAuthenticated: false,
    });
  },

  restoreSession: () => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");

    const user = localStorage.getItem("user") || sessionStorage.getItem("user");

    if (token && user) {
      set({
        token,
        user: JSON.parse(user),
        isAuthenticated: true,
        initialized: true,
      });
      return;
    }
    set({
      initialized: true,
    });
  },
}));
