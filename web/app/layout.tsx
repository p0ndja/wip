import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
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
          {children}
        </body>
      </html>
    </>
  );
}
