import { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { getAllPosts } from "@/content/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  // Static core routes: Omit fake new Date() and ignored priority/changefreq tags
  // in compliance with Google Search Central sitemap guidelines.
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteConfig.url}` },
    { url: `${siteConfig.url}/ai-agent-development` },
    { url: `${siteConfig.url}/ai-workflow-automation` },
    { url: `${siteConfig.url}/custom-software-development` },
    { url: `${siteConfig.url}/saas-development` },
    { url: `${siteConfig.url}/web-app-development` },
    { url: `${siteConfig.url}/hyderabad` },
    { url: `${siteConfig.url}/case-studies` },
    { url: `${siteConfig.url}/blog` },
    { url: `${siteConfig.url}/team` },
    { url: `${siteConfig.url}/careers` },
    { url: `${siteConfig.url}/job-application-service` },
    { url: `${siteConfig.url}/privacy` },
  ];

  // Editorial posts: Include genuine, verified publication timestamps
  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.publishDate),
  }));

  return [...staticRoutes, ...postRoutes];
}
