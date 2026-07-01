import { notifications } from "@/data/notifications";
import { Notification } from "@/types/notification";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

class NotificationService {
  async getNotifications(): Promise<Notification[]> {
    await delay(800);

    return notifications;
  }

  async markAsRead(id: string): Promise<void> {
    await delay(500);

    console.log("Mark as read:", id);
  }

  async markAllRead(): Promise<void> {
    await delay(500);

    console.log("Mark all as read");
  }

  async deleteNotification(id: string): Promise<void> {
    await delay(500);

    console.log("Delete:", id);
  }

  async clearAll(): Promise<void> {
    await delay(500);

    console.log("Clear all");
  }
}

export const notificationService = new NotificationService();
