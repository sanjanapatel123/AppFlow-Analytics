"use client";

import { useEffect } from "react";

import ThemeProvider from "../layout/ThemeProvider";

import { useAuthStore } from "@/store/authStore";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    useAuthStore.getState().restoreSession();
  }, []);

  return <ThemeProvider>{children}</ThemeProvider>;
}
