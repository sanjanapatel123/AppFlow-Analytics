import DashboardLayout from "@/components/layout/DashboardLayout";
import StatsGrid from "@/components/dashboard/StatsGrid";

export default function Home() {
  return (
    <DashboardLayout>
      <section>
        <div className="flex flex-col gap-2">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            Dashboard
          </p>

          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Product Overview
          </h1>

          <p className="max-w-2xl text-sm text-zinc-500 dark:text-zinc-400 md:text-base">
            High-level overview of your app performance, user activity, and
            screen analytics.
          </p>
        </div>

        <StatsGrid />
      </section>
    </DashboardLayout>
  );
}
