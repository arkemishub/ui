import Sidebar from "@/components/Sidebar";
import "./styles/globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-background-contrast">
        <main>
          <Navbar />
          <div className="flex gap-12">
            <Sidebar />
            <div className="grow p-4">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
