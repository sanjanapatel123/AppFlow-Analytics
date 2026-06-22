"use client";

import { HiMenu } from "react-icons/hi";
import { useLayoutStore } from "@/store/layoutStore";

export default function Header() {
  const toggle = useLayoutStore((state) => state.toggle);

  return (
    <header
      className="
h-16
border-b
flex
items-center
justify-between
px-6
"
    >
      <button
        onClick={toggle}
        className="
lg:hidden
text-3xl
"
      >
        <HiMenu />
      </button>

      <h2 className="font-semibold">Dashboard</h2>

      <button
        className="
bg-black
text-white
px-4
py-2
rounded
"
      >
        Upload
      </button>
    </header>
  );
}
