import DashboardLayout from "@/components/layout/DashboardLayout";
import PageHeader from "@/components/common/PageHeader";
import ProtectedRoute from "../components/auth/ProtectedRoute";

export default function SettingsPage() {
  return (
    <ProtectedRoute>
    <DashboardLayout>
      <section>
        <PageHeader
          label="Settings"
          title="Workspace Settings"
          description="Manage project settings, theme preferences, and workspace options."
        />

        <div className="mt-8 rounded-2xl border border-dashed border-zinc-300 p-10 text-center text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
          Settings page coming soon.
        </div>
      </section>
    </DashboardLayout>
    </ProtectedRoute>
  );
}
