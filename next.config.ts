import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  trailingSlash: true,
  async redirects() {
    return ["solo", "semarang", "purwokerto", "magelang", "salatiga", "temanggung"].map((city) => ({
      source: `/jasa-website-${city}`,
      destination: "/",
      permanent: true,
    }));
  },
};

export default nextConfig;
