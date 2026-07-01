"use client";

import { HiBell } from "react-icons/hi";

export default function EmptyNotification() {
  return (
    <div
      className="
      flex
      flex-col
      items-center
      justify-center
      gap-3
      p-10
      "
    >
      <HiBell size={42} className="text-zinc-400" />

      <p className="font-medium">No Notifications</p>

      <p className="text-sm text-zinc-500">You're all caught up.</p>
    </div>
  );
}
