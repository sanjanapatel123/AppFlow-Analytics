"use client";

import { useQuery } from "@tanstack/react-query";
import { getDashboardStats } from "../services/dashboard.services";

export function useDashboard() {
  return useQuery({
    queryKey: ["dashboard"],
    queryFn: getDashboardStats,
  });
}
