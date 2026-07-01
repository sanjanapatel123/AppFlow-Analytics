import DashboardLayout from "@/components/layout/DashboardLayout";
import AppFlowGraph from "@/components/graph/AppFlowGraph";
import PageHeader from "@/components/common/PageHeader";
import ProtectedRoute from "../components/auth/ProtectedRoute";

export default function FlowPage() {
  return (
    <ProtectedRoute>
    <DashboardLayout>
      <section>
        <PageHeader
          label="Flow"
          title="App Screen Flow"
          description="Visualize how users move between key screens in your application."
        />

        <AppFlowGraph />
      </section>
    </DashboardLayout>
    </ProtectedRoute>
  );
}
