import { Bricolage_Grotesque, Inter, Space_Mono } from "next/font/google";
import localFont from "next/font/local";

import NotFoundBody from "@/components/layout/NotFoundBody";
import "./globals.css";

const clashDisplay = localFont({
  src: "../public/assets/fonts/ClashDisplay-Variable.woff2",
  variable: "--font-display",
  display: "swap",
});

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

export const metadata = {
  title: "404 | Flaat Studio",
  description: "The page you're looking for doesn't exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang='id'>
      <body
        className={`${bricolage.variable} ${inter.variable} ${spaceMono.variable} ${clashDisplay.variable}`}
        style={{ fontSize: "1.125rem" }}
      >
        <NotFoundBody locale='id' />
      </body>
    </html>
  );
}
