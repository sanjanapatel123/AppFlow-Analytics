"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import UserAvatar from "./UserAvatar";

export default function UserMenu() {
  const router = useRouter();

  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  if (!user) return null;

  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen(!open)}>
        <UserAvatar name={user.name} />
      </button>

      {open && (
        <div
          className="
          absolute
          right-0
          mt-2
          w-60
          rounded-xl
          border
          bg-white
          shadow-lg
          dark:border-zinc-700
          dark:bg-zinc-900
          "
        >
          <div className="border-b p-4 dark:border-zinc-700">
            <p className="font-medium">{user.name}</p>

            <p className="text-sm text-zinc-500">{user.email}</p>
          </div>

          <button
            onClick={() => {
              logout();
              router.replace("/login");
            }}
            className="
            w-full
            px-4
            py-3
            text-left
            hover:bg-zinc-100
            dark:hover:bg-zinc-800
            "
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
