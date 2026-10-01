import type { Metadata } from "next";
import { getAllPosts, getFeaturedPost } from "@/content/blog";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/content/site";
import { generateBlogIndexSchema } from "@/lib/schema";
import { BlogIndexView } from "@/components/sections/BlogIndexView";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Perspectives & Engineering Research | Ethisyn",
  description:
    "Technical essays, systems architecture analyses, and studio perspectives on multi-agent AI graphs, real-time voice, and high-velocity product engineering from the Ethisyn team in Hyderabad.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Perspectives & Engineering Research | Ethisyn",
    description:
      "Technical essays, systems architecture analyses, and studio perspectives from the Ethisyn team in Hyderabad.",
    url: `${siteConfig.url}/blog`,
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const featuredPost = getFeaturedPost();
  const blogSchema = generateBlogIndexSchema(posts);

  return (
    <div className="pt-28 md:pt-36 pb-32 px-5 sm:px-8 md:px-12 bg-black min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <div className="max-w-[1520px] mx-auto space-y-16 md:space-y-24">
        {/* Breadcrumb + Header Hero */}
        <div className="space-y-6 max-w-4xl">
          <Breadcrumbs
            items={[
              { label: "Perspectives & Research" },
            ]}
          />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs uppercase tracking-widest font-medium text-zinc-400">
            <BookOpen className="w-3.5 h-3.5 text-white" />
            Studio Research // Engineering Notes
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.08]">
            Perspectives on software craft, agentic graphs, and velocity.
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-normal text-[#A1A1AA] leading-relaxed max-w-2xl">
            In-depth technical dispatches, research notes, and studio essays authored directly by our founding systems architects and engineers in Hyderabad.
          </p>
        </div>

        {/* Interactive Filterable Showcase with Featured Article & Grid */}
        <BlogIndexView posts={posts} featuredPost={featuredPost} />
      </div>
    </div>
  );
}
