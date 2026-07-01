"use client";

import { useState } from "react";
import { HiBell } from "react-icons/hi";

import NotificationBadge from "./NotificationBadge";
import NotificationDropdown from "./NotificationDropdown";

import { useNotificationStore } from "@/store/notificationStore";

export default function NotificationBell() {
  const unreadCount = useNotificationStore((state) => state.unreadCount);

  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="
        relative
        rounded-lg
        border
        p-2
        transition
        hover:bg-zinc-100
        dark:border-zinc-700
        dark:hover:bg-zinc-800
        "
      >
        <HiBell size={22} />

        <NotificationBadge count={unreadCount} />
      </button>

      {open && <NotificationDropdown onClose={() => setOpen(false)} />}
    </div>
  );
}
