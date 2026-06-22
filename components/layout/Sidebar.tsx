"use client";

import Link from "next/link";

import { HiX } from "react-icons/hi";

import { useLayoutStore } from "@/store/layoutStore";

const menu = ["Dashboard", "Analytics", "Flow", "Settings"];

export default function Sidebar() {
  const { isOpen, close } = useLayoutStore();

  return (
    <>
      <div
        onClick={close}
        className={`
fixed
inset-0
bg-black/50
z-30

${isOpen ? "block" : "hidden"}

lg:hidden
`}
      />

      <aside
        className={`
fixed
left-0
top-0

w-64
h-screen

bg-black
text-white

p-6

transform
transition

z-40

${isOpen ? "translate-x-0" : "-translate-x-full"}

lg:translate-x-0
`}
      >
        <div
          className="
flex
items-center
justify-between
mb-8
"
        >
          <h1 className="text-2xl">AppFlow</h1>

          <button
            onClick={close}
            className="
lg:hidden
text-3xl
"
          >
            <HiX />
          </button>
        </div>

        <nav
          className="
space-y-3
"
        >
          {menu.map((item) => (
            <Link
              key={item}
              href="#"
              onClick={close}
              className="
block
p-3
rounded

hover:bg-zinc-800
"
            >
              {item}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
