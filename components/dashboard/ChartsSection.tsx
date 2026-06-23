import UsersLineChart from "./UsersLineChart";
import ScreensBarChart from "./ScreensBarChart";

export default function ChartsSection() {
  return (
    <section className="mt-8">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <UsersLineChart />
        <ScreensBarChart />
      </div>
    </section>
  );
}
