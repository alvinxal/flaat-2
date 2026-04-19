import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import Sidebar from "@/components/layout/Sidebar";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-bricolage",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Flaat Studio",
  description:
    "Modio is a modern studio template for branding, packaging, web design, and digital campaigns.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} ${inter.variable}`} style={{ fontSize: '1.125rem' }}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
