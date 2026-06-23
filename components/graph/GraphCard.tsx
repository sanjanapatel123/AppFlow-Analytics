export default function GraphCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="
      mt-8
      rounded-2xl
      border
      border-zinc-200
      bg-white
      shadow-sm
      dark:border-zinc-800
      dark:bg-zinc-900
      "
    >
      <div className="border-b border-zinc-200 p-5 dark:border-zinc-800">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{subtitle}</p>
      </div>

      <div className="p-5">{children}</div>
    </div>
  );
}
