import { describe, it, expect } from "vitest";
import {
  blogPosts,
  blogCategories,
  getAllPosts,
  getPostBySlug,
  getFeaturedPost,
  getRelatedPosts,
} from "@/content/blog";
import { generateBlogIndexSchema, generateBlogPostingSchema } from "@/lib/schema";

describe("Blog Content Integrity", () => {
  it("contains authoritative essays across all pillars", () => {
    expect(blogPosts).toHaveLength(6);
  });

  it("contains the required article slugs and titles", () => {
    const p1 = getPostBySlug("engineering-autonomous-ai-agents");
    expect(p1).toBeDefined();
    expect(p1?.title).toBe(
      "Engineering Autonomous AI Agents with LangGraph, Python & Next.js 15"
    );
    expect(p1?.tags).toEqual(["AI", "Architecture", "LangGraph", "Python", "Edge"]);
    expect(p1?.category).toBe("AI & Agents");

    const p2 = getPostBySlug("guide-to-generative-engine-optimization");
    expect(p2).toBeDefined();
    expect(p2?.title).toBe(
      "The 2026 Guide to Generative Engine Optimization (GEO): Getting Cited by AI Engines"
    );
    expect(p2?.tags).toEqual(["GEO", "SEO", "Search", "Perplexity", "ChatGPT"]);
    expect(p2?.category).toBe("GEO & Search");

    const p3 = getPostBySlug("architecting-sub-second-web-platforms");
    expect(p3).toBeDefined();
    expect(p3?.title).toBe(
      "Architecting Sub-Second Digital Platforms with Edge Caching & Next.js 15"
    );
    expect(p3?.tags).toEqual(["Web Engineering", "Performance", "Next.js", "Cloud"]);
    expect(p3?.category).toBe("Web Engineering");

    const p4 = getPostBySlug("why-we-dont-outsource");
    expect(p4).toBeDefined();
    expect(p4?.title).toBe(
      "Why Enterprise Software Fails: The True Cost of Agency Outsourcing"
    );
    expect(p4?.tags).toEqual(["Philosophy", "Culture", "Hyderabad", "Engineering"]);
    expect(p4?.category).toBe("Studio Culture");

    const p5 = getPostBySlug("modern-business-growth-playbook");
    expect(p5).toBeDefined();
    expect(p5?.title).toBe(
      "The Modern Business Growth Playbook: Combining Local SEO, Meta Ads, and Data-Driven Retention"
    );
    expect(p5?.tags).toEqual(["Growth", "Local SEO", "Meta CAPI", "Retention", "Paid Acquisition"]);
    expect(p5?.category).toBe("GEO & Search");

    const p6 = getPostBySlug("why-video-high-retention-content-drives-conversion");
    expect(p6).toBeDefined();
    expect(p6?.title).toBe(
      "Why Video & High-Retention Content Drive 3x Conversion for Digital Brands in 2026"
    );
    expect(p6?.tags).toEqual(["Creative", "Video Production", "Conversion Rate", "UI/UX", "Brand Authority"]);
    expect(p6?.category).toBe("Studio Culture");
  });

  it("ensures every article has all required fields with complete integrity", () => {
    blogPosts.forEach((post) => {
      expect(post.slug).toBeTruthy();
      expect(post.title).toBeTruthy();
      expect(post.subtitle).toBeTruthy();
      expect(post.excerpt).toBeTruthy();
      expect(post.readingTime).toMatch(/^\d+\s+min\s+read$/);
      expect(Date.parse(post.publishDate)).not.toBeNaN();
      expect(post.formattedDate).toBeTruthy();
      expect(post.tags.length).toBeGreaterThanOrEqual(4);

      // Author validation
      expect(post.author.name).toBeTruthy();
      expect(post.author.role).toBeTruthy();
      expect(post.author.avatar).toMatch(/^\/team\/[a-z0-9-]+\.png$/);

      // Content sections
      expect(post.sections.length).toBeGreaterThanOrEqual(5);

      const hasHeadings = post.sections.some(
        (s) => s.type === "heading2" || s.type === "heading3"
      );
      expect(hasHeadings).toBe(true);

      const hasParagraphs = post.sections.some((s) => s.type === "paragraph");
      expect(hasParagraphs).toBe(true);
    });
  });

  it("verifies categories and filter pills", () => {
    expect(blogCategories).toEqual([
      "AI & Agents",
      "Web Engineering",
      "GEO & Search",
      "Studio Culture",
    ]);

    blogPosts.forEach((post) => {
      expect(blogCategories).toContain(post.category);
    });
  });

  it("provides reliable helper query functions", () => {
    const all = getAllPosts();
    expect(all.length).toBeGreaterThanOrEqual(4);

    // Verify sorted descending by date
    for (let i = 0; i < all.length - 1; i++) {
      const current = new Date(all[i].publishDate).getTime();
      const next = new Date(all[i + 1].publishDate).getTime();
      expect(current).toBeGreaterThanOrEqual(next);
    }

    const featured = getFeaturedPost();
    expect(featured).toBeDefined();
    expect(featured.slug).toBe("engineering-autonomous-ai-agents");

    const related = getRelatedPosts("engineering-autonomous-ai-agents", 2);
    expect(related).toHaveLength(2);
    expect(related.some((r) => r.slug === "engineering-autonomous-ai-agents")).toBe(false);

    const nonExistent = getPostBySlug("non-existent-slug");
    expect(nonExistent).toBeUndefined();
  });

  it("generates zero-hallucination Schema.org JSON-LD structured data", () => {
    const posts = getAllPosts();
    const indexSchema = generateBlogIndexSchema(posts);
    expect(indexSchema["@context"]).toBe("https://schema.org");
    expect(indexSchema["@type"]).toBe("Blog");
    expect(indexSchema.blogPost.length).toBeGreaterThanOrEqual(4);

    const post = posts[0];
    const postSchema = generateBlogPostingSchema(post);
    expect(postSchema["@context"]).toBe("https://schema.org");
    expect(postSchema["@type"]).toBe("BlogPosting");
    expect(postSchema.headline).toBe(post.title);
    expect(postSchema.datePublished).toBe(post.publishDate);
    expect(postSchema.author.name).toBe(post.author.name);
    expect(postSchema.author.image).toContain(post.author.avatar);
    expect(postSchema.publisher.name).toBe("Ethisyn");
  });
});
