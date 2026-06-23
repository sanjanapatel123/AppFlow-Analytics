export default function ChartCard({
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
      rounded-2xl
      border
      border-zinc-200
      bg-white
      p-5
      shadow-sm
      dark:border-zinc-800
      dark:bg-zinc-900
      "
    >
      <div className="mb-5">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{subtitle}</p>
      </div>

      {children}
    </div>
  );
}
