import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ethisyn",
    short_name: "Ethisyn",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#050505",
    icons: [
      {
        src: "/brand/ethisyn-monogram-white.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/brand/ethisyn-monogram-white.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
