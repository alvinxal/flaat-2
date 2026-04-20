import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, Space_Mono } from "next/font/google";
import ConditionalSidebar from "@/components/layout/ConditionalSidebar";
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

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Flaat Studio",
  description:
    "Digital partner yang memadukan teknologi AI dan strategi pemasaran untuk mengakselerasi pertumbuhan bisnis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`${bricolage.variable} ${inter.variable} ${spaceMono.variable}`} style={{ fontSize: '1.125rem' }}>
        <ConditionalSidebar />
        {children}
      </body>
    </html>
  );
}
