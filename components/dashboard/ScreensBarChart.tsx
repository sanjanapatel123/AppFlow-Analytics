"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import ChartCard from "./ChartCard";
import { topScreensData } from "@/data/charts";

export default function ScreensBarChart() {
  return (
    <ChartCard
      title="Top Screens by Visits"
      subtitle="Most visited screens in the product flow"
    >
      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={topScreensData}>
            <CartesianGrid
              strokeDasharray="3 3"
              className="stroke-zinc-200 dark:stroke-zinc-800"
            />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Bar dataKey="value" radius={[8, 8, 0, 0]} fill="#111827" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  );
}
