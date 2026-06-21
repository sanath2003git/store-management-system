import Link from "next/link";

export default function Sidebar() {

  return (

    <div className="w-60 bg-gray-100 h-screen p-5 text-black">

      <h2 className="text-xl font-bold mb-6">

        Store

      </h2>

      <ul className="space-y-4">

        <li>

          <Link
            href="/dashboard"
            className="block text-gray-700 hover:text-blue-600"
          >

            Dashboard

          </Link>

        </li>

        <li>

          <Link
            href="/products"
            className="block text-gray-700 hover:text-blue-600"
          >

            Products

          </Link>

        </li>

        <li>

          <Link
            href="/customers"
            className="block text-gray-700 hover:text-blue-600"
          >

            Customers

          </Link>

        </li>

        <li>

          <Link
            href="/sales"
            className="block text-gray-700 hover:text-blue-600"
          >

            Sales

          </Link>

        </li>

      </ul>

    </div>

  );

}