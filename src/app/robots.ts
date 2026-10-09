import { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        // AI Search & Citation Bots: Explicitly permitted to crawl and surface
        // Ethisyn in real-time search results (ChatGPT Search, Perplexity, Copilot)
        userAgent: [
          "OAI-SearchBot",
          "ChatGPT-User",
          "PerplexityBot",
          "Claude-SearchBot",
          "Claude-User",
          "Bingbot",
          "Applebot",
        ],
        allow: ["/", "/llms.txt", "/llms-full.txt"],
        disallow: ["/api/"],
      },
      {
        // Foundation Model Training Scrapers: Disallowed to prevent scraping for generic model training
        // while preserving search engine discovery above (per OpenAI & Google documentation)
        userAgent: [
          "GPTBot",
          "ClaudeBot",
          "anthropic-ai",
          "Google-Extended",
          "Applebot-Extended",
        ],
        disallow: ["/"],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
