
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Heebo, Inter } from "next/font/google";

const heebo = Heebo({ subsets: ["latin"], weight: ["400", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Assignment-3 from Figma Design",
  description: "NextJs project, details are in page/layout/navbar/footer.tsx",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={heebo.className} >
        <div className="w-full md:-w-[1462px] h-auto bg-[#043873] border-blue-400 border-4 mx-auto">
          <Navbar font={inter.className} />
          {children}
          <Footer />
          <h4 className="text-gray-500 text-center text-sm lg:text-base mt-0 md:mt-0">
            Author: Azmat Ali
          </h4>
        </div>
      </body>
    </html>
  );
}
