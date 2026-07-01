"use client";

import { useEffect, useRef } from "react";

import EmptyNotification from "./EmptyNotification";
import NotificationItem from "./NotificationItem";

import { useNotificationStore } from "@/store/notificationStore";

type Props = {
  onClose: () => void;
};

export default function NotificationDropdown({ onClose }: Props) {
  const notifications = useNotificationStore((state) => state.notifications);

  const markAsRead = useNotificationStore((state) => state.markAsRead);

  const markAllRead = useNotificationStore((state) => state.markAllRead);

  const removeNotification = useNotificationStore(
    (state) => state.removeNotification,
  );

  const clearAll = useNotificationStore((state) => state.clearAll);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);

      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <div
      ref={ref}
      className="
      absolute
      right-0
      top-12
      z-50
      w-96
      overflow-hidden
      rounded-xl
      border
      bg-white
      shadow-xl
      dark:border-zinc-700
      dark:bg-zinc-900
      "
    >
      <div
        className="
        flex
        items-center
        justify-between
        border-b
        p-4
        dark:border-zinc-800
        "
      >
        <h3 className="font-semibold">Notifications</h3>

        {notifications.length > 0 && (
          <button
            onClick={markAllRead}
            className="
            text-sm
            text-blue-600
            hover:underline
            "
          >
            Mark all read
          </button>
        )}
      </div>

      {notifications.length === 0 ? (
        <EmptyNotification />
      ) : (
        <>
          <div className="max-h-96 overflow-y-auto">
            {notifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
                onRead={markAsRead}
                onDelete={removeNotification}
              />
            ))}
          </div>

          <div className="border-t p-3 dark:border-zinc-800">
            <button
              onClick={clearAll}
              className="
              w-full
              rounded-lg
              border
              py-2
              text-sm
              transition
              hover:bg-zinc-100
              dark:border-zinc-700
              dark:hover:bg-zinc-800
              "
            >
              Clear All
            </button>
          </div>
        </>
      )}
    </div>
  );
}
