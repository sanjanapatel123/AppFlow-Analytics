import "./globals.css";
import ThemeProvider from "@/components/layout/ThemeProvider";

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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
