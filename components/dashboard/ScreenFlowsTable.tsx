"use client";

import { useMemo, useState } from "react";
import DataTableCard from "./DataTableCard";
import { screenFlowsData } from "@/data/table";

function getStatusStyles(status: string) {
  switch (status) {
    case "Active":
      return "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400";
    case "Warning":
      return "bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400";
    case "Error":
      return "bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400";
    case "Draft":
      return "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300";
    default:
      return "bg-zinc-100 text-zinc-600";
  }
}

export default function ScreenFlowsTable() {
  const [search, setSearch] = useState("");

  const filteredRows = useMemo(() => {
    return screenFlowsData.filter((item) =>
      item.screen.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <DataTableCard
      title="Recent Screen Flows"
      subtitle="Track screen performance, status, and visitor activity"
    >
      <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <input
          type="text"
          placeholder="Search screen..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
          w-full
          rounded-xl
          border
          border-zinc-300
          bg-white
          px-4
          py-2.5
          text-sm
          outline-none
          focus:border-black
          dark:border-zinc-700
          dark:bg-zinc-950
          dark:focus:border-white
          md:max-w-sm
          "
        />

        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          {filteredRows.length} results
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-y-3">
          <thead>
            <tr className="text-left text-sm text-zinc-500 dark:text-zinc-400">
              <th className="pb-2 font-medium">Screen</th>
              <th className="pb-2 font-medium">Category</th>
              <th className="pb-2 font-medium">Visitors</th>
              <th className="pb-2 font-medium">Status</th>
              <th className="pb-2 font-medium">Last Updated</th>
            </tr>
          </thead>

          <tbody>
            {filteredRows.map((row) => (
              <tr
                key={row.id}
                className="
                rounded-xl
                bg-zinc-50
                text-sm
                dark:bg-zinc-950
                "
              >
                <td className="rounded-l-xl px-4 py-4 font-medium">
                  {row.screen}
                </td>

                <td className="px-4 py-4 text-zinc-600 dark:text-zinc-300">
                  {row.category}
                </td>

                <td className="px-4 py-4">{row.visitors.toLocaleString()}</td>

                <td className="px-4 py-4">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${getStatusStyles(
                      row.status,
                    )}`}
                  >
                    {row.status}
                  </span>
                </td>

                <td className="rounded-r-xl px-4 py-4 text-zinc-500 dark:text-zinc-400">
                  {row.updatedAt}
                </td>
              </tr>
            ))}

            {filteredRows.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="py-8 text-center text-sm text-zinc-500 dark:text-zinc-400"
                >
                  No matching screens found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </DataTableCard>
  );
}
