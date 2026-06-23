type PageHeaderProps = {
  label: string;
  title: string;
  description: string;
};

export default function PageHeader({
  label,
  title,
  description,
}: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
        {label}
      </p>

      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h1>

      <p className="max-w-2xl text-sm text-zinc-500 dark:text-zinc-400 md:text-base">
        {description}
      </p>
    </div>
  );
}
