import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/ui/BottomNav";
import Image from "next/image";

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
          <div className="container pt-5">
            <Image
              className="relative dark:invert"
              src="/samohub.svg"
              alt="SamoHub Logo"
              width={100}
              height={32}
              priority
            />
          </div>
          {children}
          <div style={{ paddingBottom: 100 }}></div>
          <BottomNav />
        </body>
      </html>
    </>
  );
}
