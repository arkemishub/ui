import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileNavbar from "@/components/MobileNavbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arke UI",
  description: "Arke UI component library based on Tailwind CSS",
};

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
          <MobileNavbar />
          <div className="docs__content px-4 md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-10 md:px-8">
            <Sidebar />
            <div className="py-8">{children}</div>
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
