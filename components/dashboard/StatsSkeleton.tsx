export default function StatsSkeleton() {
  return (
    <div
      className="
      animate-pulse
      rounded-2xl
      border
      border-zinc-200
      bg-white
      p-5
      dark:border-zinc-800
      dark:bg-zinc-900
      "
    >
      <div className="h-4 w-28 rounded bg-zinc-200 dark:bg-zinc-700" />

      <div className="mt-6 h-8 w-32 rounded bg-zinc-200 dark:bg-zinc-700" />

      <div className="mt-6 h-4 w-full rounded bg-zinc-200 dark:bg-zinc-700" />
    </div>
  );
}
