import Sidebar from "@/components/Sidebar";

export default function Dashboard() {
  return (
    <div>
      <Sidebar />

      <div>
        <h1>Dashboard</h1>

        <p>Welcome to Store Management System</p>

        <h2>Total Products :</h2>
        <p>0</p>
        <h2>Total Customers :</h2>
        <p>0</p>
        <h2>Total Sales :</h2>
        <p>0</p>
      </div>
    </div>
  );
}