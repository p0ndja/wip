import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import SideNav from "@/components/ui/SideNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Samo",
  description: "MDKKU",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="th">
        <body
          className={inter.className}
          style={{ backgroundColor: "#f0eff3" }}
        >
          <div className="flex">
            <SideNav />
            <div className="ml-0 xl:ml-64 w-full">{children}</div>
          </div>
        </body>
      </html>
    </>
  );
}
