import DashboardLayout from "@/components/layout/DashboardLayout";
import ScreenFlowsTable from "@/components/dashboard/ScreenFlowsTable";
import PageHeader from "@/components/common/PageHeader";
import ProtectedRoute from "../components/auth/ProtectedRoute";

export default function ScreensPage() {
  return (
    <ProtectedRoute>
    <DashboardLayout>
      <section>
        <PageHeader
          label="Screens"
          title="Screen Performance Table"
          description="Search and inspect screen performance, visitor activity, and current status."
        />

        <ScreenFlowsTable />
      </section>
    </DashboardLayout>
    </ProtectedRoute>
  );
}
