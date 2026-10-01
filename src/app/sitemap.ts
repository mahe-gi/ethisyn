import { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/team", "/privacy"];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : route === "/team" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/team" ? 0.9 : 0.7,
  }));
}
