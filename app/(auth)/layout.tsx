export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className="
      min-h-screen
      bg-zinc-100
      dark:bg-black

      flex
      items-center
      justify-center

      p-6
      "
    >
      {children}
    </main>
  );
}
