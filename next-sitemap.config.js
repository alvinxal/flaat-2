/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://flaat.studio",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  autoLastmod: false,
  exclude: [
    "/dashboard/*",
    "/server-sitemap.xml",
    "/manifest.webmanifest",
    "/robots.txt",
    "/sitemap.xml",
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard/"],
      },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL || "https://flaat.studio"}/server-sitemap.xml`,
    ],
  },
  additionalPaths: async () => [{ loc: "/projects/" }],
};
