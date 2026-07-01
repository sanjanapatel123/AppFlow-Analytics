import "./globals.css";
import AppProvider from "@/components/layout/AppProvider";
import QueryProvider from "@/providers/QueryProvider";
import ToastProvider from "@/components/feedback/ToastProvider";

export const metadata = {
  title: "AppFlow Analytics",
  description: "Analytics dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-zinc-950 dark:text-white transition-colors">
        <AppProvider>
          <QueryProvider>
            {children}
            <ToastProvider />
          </QueryProvider>
        </AppProvider>
      </body>
    </html>
  );
}
