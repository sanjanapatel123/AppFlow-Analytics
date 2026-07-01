"use client";

import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

import { useWorkspaceStore } from "@/store/workspaceStore";

export default function WorkspaceSwitcher() {
  const { currentWorkspace, workspaces, switchWorkspace } = useWorkspaceStore();

  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="
        flex
        items-center
        gap-2
        rounded-xl
        border
        px-4
        py-2
        dark:border-zinc-700
        "
      >
        <span>{currentWorkspace.name}</span>

        <HiChevronDown />
      </button>

      {open && (
        <div
          className="
          absolute
          right-0
          mt-2
          w-56
          rounded-xl
          border
          bg-white
          shadow-lg
          dark:border-zinc-700
          dark:bg-zinc-900
          "
        >
          {workspaces.map((workspace) => (
            <button
              key={workspace.id}
              onClick={() => {
                switchWorkspace(workspace.id);
                setOpen(false);
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
              {workspace.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
