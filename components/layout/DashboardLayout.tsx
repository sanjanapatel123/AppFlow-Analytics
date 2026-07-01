import Sidebar from "./Sidebar";
import Header from "./header/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Sidebar />

      <div
        className="
lg:ml-64
"
      >
        <Header />

        <div
          className="
p-8
"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
