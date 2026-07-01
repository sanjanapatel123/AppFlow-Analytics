export type NotificationType = "success" | "error" | "warning" | "info";

export interface Notification {
  id: string;

  title: string;

  message: string;

  type: NotificationType;

  createdAt: string;

  read: boolean;
}
