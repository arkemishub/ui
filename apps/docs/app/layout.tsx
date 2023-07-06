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
          <div className="docs__content px-8 md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-10">
            <Sidebar />
            <div className="grow py-8">{children}</div>
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
