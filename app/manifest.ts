import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Flaat Studio",
    short_name: "Flaat Studio",
    description:
      "Flaat Studio adalah digital partner yang menggabungkan web development, AI, dan digital marketing untuk mendorong pertumbuhan bisnis.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2f4157",
    icons: [
      {
        src: "/assets/images/og-image.webp",
        sizes: "1200x630",
        type: "image/webp",
        purpose: "any",
      },
    ],
  };
}
