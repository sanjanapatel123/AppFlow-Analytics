"use client";

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { notificationService } from "@/services/notification.service";
import { useNotificationStore } from "@/store/notificationStore";

export function useNotifications() {
  const setNotifications = useNotificationStore(
    (state) => state.setNotifications,
  );

  const query = useQuery({
    queryKey: ["notifications"],

    queryFn: () => notificationService.getNotifications(),

    refetchInterval: 30000,

    staleTime: 15000,
  });

  useEffect(() => {
    if (query.data) {
      setNotifications(query.data);
    }
  }, [query.data, setNotifications]);

  return query;
}
