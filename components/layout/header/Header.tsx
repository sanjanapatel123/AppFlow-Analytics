"use client";

import { HiMenu, HiMoon, HiSun } from "react-icons/hi";

import { useLayoutStore } from "@/store/layoutStore";
import { useThemeStore } from "@/store/themeStore";

import UserMenu from "./UserMenu";

import WorkspaceSwitcher from "./WorkspaceSwitcher";

import NotificationBell from "@/components/notification/NotificationBell";

export default function Header() {
  const toggleSidebar = useLayoutStore((state) => state.toggle);

  const { theme, toggleTheme } = useThemeStore();

  return (
    <header
      className="
      h-16
      border-b
      flex
      items-center
      justify-between
      px-6
      dark:border-zinc-800
      "
    >
      {/* Left */}

      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="
          lg:hidden
          text-3xl
          "
        >
          <HiMenu />
        </button>

        <h2 className="font-semibold">Dashboard</h2>
      </div>

      {/* Right */}

      <div className="flex items-center gap-3">
        <WorkspaceSwitcher />

        <button
          onClick={toggleTheme}
          className="
  rounded-lg
  border
  p-2
  transition
  hover:bg-zinc-100
  dark:border-zinc-700
  dark:hover:bg-zinc-800
  "
        >
          {theme === "light" ? <HiMoon size={20} /> : <HiSun size={20} />}
        </button>

        <NotificationBell />

        <button
          className="
  rounded-lg
  bg-black
  px-4
  py-2
  text-white

  dark:bg-white
  dark:text-black
  "
        >
          Upload
        </button>
        <UserMenu />
      </div>
    </header>
  );
}
