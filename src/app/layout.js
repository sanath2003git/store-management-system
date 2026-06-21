import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>

  <Navbar />

  <div className="flex">

    <Sidebar />

    <main className="flex-1">

      {children}

    </main>

  </div>

</body>
    </html>
  );
}