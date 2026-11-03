import type { ReactNode } from "react";
import { Bricolage_Grotesque, Inter, Space_Mono } from "next/font/google";
import localFont from "next/font/local";

import "../../app/globals.css";

const clashDisplay = localFont({
  src: "../../public/assets/fonts/ClashDisplay-Variable.woff2",
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

export default function RootHtml({
  lang,
  children,
}: {
  lang: string;
  children: ReactNode;
}) {
  return (
    <html lang={lang}>
      <body
        className={`${bricolage.variable} ${inter.variable} ${spaceMono.variable} ${clashDisplay.variable}`}
        style={{ fontSize: "1.125rem" }}
      >
        {children}
      </body>
    </html>
  );
}
