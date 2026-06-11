export default function Home() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-6">
        Store Management System
      </h1>

      <h2 className="text-2xl font-semibold mb-2">
        Modules
      </h2>

      <ul className="list-disc ml-6">
        <li>Products</li>
        <li>Customers</li>
        <li>Sales</li>
        <li>Inventory</li>
      </ul>
    </div>
  );
}