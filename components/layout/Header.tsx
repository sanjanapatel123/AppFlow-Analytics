"use client";

import { HiMenu, HiMoon, HiSun } from "react-icons/hi";
import { useLayoutStore } from "@/store/layoutStore";
import { useThemeStore } from "@/store/themeStore";

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

      <div className="flex items-center gap-3">
        <button
          onClick={toggleTheme}
          className="
          p-2
          rounded
          border
          dark:border-zinc-700
          "
        >
          {theme === "light" ? <HiMoon size={20} /> : <HiSun size={20} />}
        </button>

        <button
          className="
          bg-black
          text-white
          px-4
          py-2
          rounded
          dark:bg-white
          dark:text-black
          "
        >
          Upload
        </button>
      </div>
    </header>
  );
}
