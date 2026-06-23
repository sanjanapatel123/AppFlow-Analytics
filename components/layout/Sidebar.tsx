"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiX } from "react-icons/hi";
import {
  HiOutlineHome,
  HiOutlineChartBar,
  HiOutlineShare,
  HiOutlineDeviceTablet,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

import { useLayoutStore } from "@/store/layoutStore";

const menu = [
  {
    label: "Dashboard",
    href: "/",
    icon: HiOutlineHome,
  },
  {
    label: "Analytics",
    href: "/analytics",
    icon: HiOutlineChartBar,
  },
  {
    label: "Flow",
    href: "/flow",
    icon: HiOutlineShare,
  },
  {
    label: "Screens",
    href: "/screens",
    icon: HiOutlineDeviceTablet,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: HiOutlineCog6Tooth,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { isOpen, close } = useLayoutStore();

  return (
    <>
      <div
        onClick={close}
        className={`
        fixed inset-0 z-30 bg-black/50
        ${isOpen ? "block" : "hidden"}
        lg:hidden
        `}
      />

      <aside
        className={`
        fixed left-0 top-0 z-40 h-screen w-64
        bg-black text-white
        p-6
        transform transition duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
        `}
      >
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">AppFlow</h1>
            <p className="text-xs text-zinc-400">Analytics Suite</p>
          </div>

          <button onClick={close} className="text-3xl lg:hidden">
            <HiX />
          </button>
        </div>

        <nav className="space-y-2">
          {menu.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={close}
                className={`
                flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition
                ${
                  isActive
                    ? "bg-white text-black"
                    : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
                }
                `}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
