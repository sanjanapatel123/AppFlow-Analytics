"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import ChartCard from "./ChartCard";
import { usersTrendData } from "@/data/charts";

export default function UsersLineChart() {
  return (
    <ChartCard
      title="Weekly Active Users"
      subtitle="User activity trend across the last 7 days"
    >
      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={usersTrendData}>
            <CartesianGrid
              strokeDasharray="3 3"
              className="stroke-zinc-200 dark:stroke-zinc-800"
            />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="users"
              stroke="#111827"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  );
}
