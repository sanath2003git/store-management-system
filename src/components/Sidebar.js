import Link from "next/link";

export default function Sidebar() {
  return (
    <div>
      <h2>Store</h2>

      <ul>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link href="/products">Products</Link>
        </li>

        <li>
          <Link href="/customers">Customers</Link>
        </li>

        <li>
          <Link href="/sales">Sales</Link>
        </li>
      </ul>
    </div>
  );
}