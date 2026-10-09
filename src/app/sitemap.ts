import { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { getAllPosts } from "@/content/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  // Deterministic, verified content modification timestamps
  const SERVICE_RELEASE_DATE = new Date("2026-10-09T00:00:00Z");
  const STUDIO_DOC_DATE = new Date("2026-10-07T00:00:00Z");
  const LEGAL_POLICY_DATE = new Date("2026-01-01T00:00:00Z");

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteConfig.url}`,
      lastModified: SERVICE_RELEASE_DATE,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteConfig.url}/ai-agent-development`,
      lastModified: SERVICE_RELEASE_DATE,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/ai-workflow-automation`,
      lastModified: SERVICE_RELEASE_DATE,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/custom-software-development`,
      lastModified: SERVICE_RELEASE_DATE,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/saas-development`,
      lastModified: SERVICE_RELEASE_DATE,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/web-app-development`,
      lastModified: SERVICE_RELEASE_DATE,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/hyderabad`,
      lastModified: SERVICE_RELEASE_DATE,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/case-studies`,
      lastModified: SERVICE_RELEASE_DATE,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/job-application-service`,
      lastModified: STUDIO_DOC_DATE,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: new Date(`${posts[0]?.publishDate || "2026-03-24"}T00:00:00Z`),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/team`,
      lastModified: STUDIO_DOC_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/careers`,
      lastModified: STUDIO_DOC_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/privacy`,
      lastModified: LEGAL_POLICY_DATE,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(`${post.publishDate}T00:00:00Z`),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...postRoutes];
}
