import StatsCard from "./StatsCard";
import { statsData } from "@/data/dashboard";

export default function StatsGrid() {
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
        {statsData.map((item) => (
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
