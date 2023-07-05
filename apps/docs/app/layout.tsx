import Sidebar from "@/components/Sidebar";
import "./styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
          <div className="docs__content flex gap-12">
            <Sidebar />
            <div className="grow p-4">{children}</div>
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
