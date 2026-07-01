"use client";

import { Notification } from "@/types/notification";
import { HiOutlineTrash } from "react-icons/hi";

type Props = {
  notification: Notification;
  onRead: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function NotificationItem({
  notification,
  onRead,
  onDelete,
}: Props) {
  return (
    <div
      onClick={() => onRead(notification.id)}
      className="
      flex
      items-start
      justify-between
      gap-3
      border-b
      p-4
      transition
      hover:bg-zinc-100
      dark:border-zinc-800
      dark:hover:bg-zinc-800
      cursor-pointer
      "
    >
      <div className="flex flex-1 gap-3">
        <div
          className={`
          mt-2
          h-2
          w-2
          rounded-full
          ${notification.read ? "bg-transparent" : "bg-blue-500"}
          `}
        />

        <div className="flex-1">
          <p className="font-medium">{notification.title}</p>

          <p className="mt-1 text-sm text-zinc-500">{notification.message}</p>

          <p className="mt-2 text-xs text-zinc-400">{notification.createdAt}</p>
        </div>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(notification.id);
        }}
        className="
        rounded-md
        p-2
        text-zinc-500
        transition
        hover:bg-red-100
        hover:text-red-600
        dark:hover:bg-red-900/30
        "
      >
        <HiOutlineTrash size={18} />
      </button>
    </div>
  );
}
