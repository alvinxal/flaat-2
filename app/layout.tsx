import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Bricolage_Grotesque, Inter, Space_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const siteUrl = new URL("https://flaat.studio");
const siteName = "Flaat Studio";
const defaultTitle = "Flaat Studio | Web Development, AI, dan Digital Marketing";
const defaultDescription =
  "Flaat Studio adalah digital partner yang menggabungkan web development, AI, dan digital marketing untuk mendorong pertumbuhan bisnis.";
const ogImage = "/assets/images/og-image.webp";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl.toString(),
  logo: new URL(ogImage, siteUrl).toString(),
  email: "hi@flaat.studio",
  sameAs: [
    "https://www.instagram.com/flaatstudio/",
    "https://www.linkedin.com/in/flaat-studio-84ab3b39a/",
    "https://wa.me/6289518301707",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Yogyakarta",
    addressCountry: "ID",
  },
  knowsAbout: [
    "jasa pembuatan website",
    "jasa AI automation",
    "agency digital marketing",
    "digital agency yogyakarta",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl.toString(),
  inLanguage: "id-ID",
  description: defaultDescription,
};

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

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    "jasa pembuatan website",
    "jasa AI automation",
    "agency digital marketing",
    "digital agency yogyakarta",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl.toString(),
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `${siteName} social preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="id">
<body className={`${bricolage.variable} ${inter.variable} ${spaceMono.variable} ${clashDisplay.variable}`} style={{ fontSize: '1.125rem' }}>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, websiteJsonLd]),
          }}
        />
        {children}
      </body>
      <GoogleAnalytics gaId='G-GQJSHQGWRM' />
    </html>
  );
}
