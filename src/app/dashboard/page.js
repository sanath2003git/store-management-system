import DashboardCard from "@/components/DashboardCard";

export default function Dashboard() {

  return (

    <div className="p-8">

      <h1 className="text-3xl font-bold mb-8">

        Dashboard

      </h1>

      <div className="grid grid-cols-3 gap-6">

        <DashboardCard

          title="Products"

          value="0"

        />

        <DashboardCard

          title="Customers"

          value="0"

        />

        <DashboardCard

          title="Sales"

          value="0"

        />

      </div>

    </div>

  );

}