type StatsCardProps = {
  title: string;
  value: string;
  change: string;
  positive: boolean;
  description: string;
};

export default function StatsCard({
  title,
  value,
  change,
  positive,
  description,
}: StatsCardProps) {
  return (
    <div
      className="
      rounded-2xl
      border
      border-zinc-200
      bg-white
      p-5
      shadow-sm
      transition
      hover:shadow-md
      dark:border-zinc-800
      dark:bg-zinc-900
      "
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">{title}</p>

          <h3 className="mt-3 text-3xl font-bold tracking-tight">{value}</h3>
        </div>

        <span
          className={`
          rounded-full
          px-3
          py-1
          text-sm
          font-medium
          ${
            positive
              ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"
              : "bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400"
          }
          `}
        >
          {change}
        </span>
      </div>

      <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
        {description}
      </p>
    </div>
  );
}
