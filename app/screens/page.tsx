import DashboardLayout from "@/components/layout/DashboardLayout";
import ScreenFlowsTable from "@/components/dashboard/ScreenFlowsTable";
import PageHeader from "@/components/common/PageHeader";

export default function ScreensPage() {
  return (
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
  );
}
