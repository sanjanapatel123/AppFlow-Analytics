"use client";

import StatsCard from "./StatsCard";
import StatsSkeleton from "./StatsSkeleton";

import ErrorState from "@/components/common/ErrorState";
import EmptyState from "@/components/common/EmptyState";

import { useDashboard } from "@/hooks/useDashboard";

export default function StatsGrid() {
  const { data, isLoading, isError } = useDashboard();

  if (isLoading) {
    return (
      <section className="mt-8">
        <div
          className="
          grid
          grid-cols-1
          gap-5
          sm:grid-cols-2
          xl:grid-cols-4
          "
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <StatsSkeleton key={index} />
          ))}
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="mt-8">
        <ErrorState />
      </section>
    );
  }

  if (!data || data.length === 0) {
    return (
      <section className="mt-8">
        <EmptyState />
      </section>
    );
  }

  return (
    <section className="mt-8">
      <div
        className="
        grid
        grid-cols-1
        gap-5
        sm:grid-cols-2
        xl:grid-cols-4
        "
      >
        {data.map((item) => (
          <StatsCard
            key={item.title}
            title={item.title}
            value={item.value}
            change={item.change}
            positive={item.positive}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
