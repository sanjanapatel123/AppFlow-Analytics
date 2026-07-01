import { Notification } from "@/types/notification";

export const notifications: Notification[] = [
  {
    id: "1",
    title: "Analytics Completed",
    message: "Weekly analytics report is ready.",
    type: "success",
    createdAt: "2 min ago",
    read: false,
  },
  {
    id: "2",
    title: "Payment Successful",
    message: "Payment received from John.",
    type: "info",
    createdAt: "10 min ago",
    read: false,
  },
  {
    id: "3",
    title: "Session Expired",
    message: "Please login again.",
    type: "warning",
    createdAt: "30 min ago",
    read: true,
  },
];
