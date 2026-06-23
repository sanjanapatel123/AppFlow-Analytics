import DashboardLayout from "@/components/layout/DashboardLayout";
import ChartsSection from "@/components/dashboard/ChartsSection";
import PageHeader from "@/components/common/PageHeader";

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <section>
        <PageHeader
          label="Analytics"
          title="User & Screen Analytics"
          description="Explore user trends, screen performance, and traffic insights across your product."
        />

        <ChartsSection />
      </section>
    </DashboardLayout>
  );
}
