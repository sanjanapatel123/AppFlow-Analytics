type Props = {
  title: string;
  subtitle: string;
};

export default function AuthHeader({ title, subtitle }: Props) {
  return (
    <div className="mb-8 text-center">
      <h1 className="text-3xl font-bold">{title}</h1>

      <p className="mt-2 text-zinc-500 dark:text-zinc-400">{subtitle}</p>
    </div>
  );
}
