import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/content/blogs";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/content/site";
import { Clock, ArrowUpRight, User2, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Perspectives & Engineering Research — Ethisyn",
  description:
    "Technical essays, systems architecture analyses, and studio perspectives on multi-agent AI graphs, real-time voice, and high-velocity product engineering from the Ethisyn team in Hyderabad.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Perspectives & Engineering Research — Ethisyn",
    description:
      "Technical essays, systems architecture analyses, and studio perspectives from the Ethisyn team in Hyderabad.",
    url: `${siteConfig.url}/blog`,
  },
};

export default function BlogIndexPage() {
  return (
    <div className="pt-28 md:pt-36 pb-32 px-5 sm:px-8 md:px-12 bg-black min-h-screen">
      <div className="max-w-[1520px] mx-auto space-y-16 md:space-y-24">
        {/* Breadcrumb + Header Hero */}
        <div className="space-y-6 max-w-4xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Perspectives & Research" },
            ]}
          />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono tracking-widest text-[#A1A1AA] uppercase">
            <BookOpen className="w-3.5 h-3.5 text-white" />
            Studio Research // Engineering Notes
          </div>

          <h1 className="font-sans font-medium text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05]">
            Perspectives on software craft,{" "}
            <span className="font-serif italic font-normal text-white">
              agentic graphs
            </span>
            , and velocity.
          </h1>

          <p className="font-sans text-[#A1A1AA] text-lg sm:text-xl font-light leading-relaxed max-w-2xl">
            In-depth technical dispatches, research notes, and studio essays authored directly by our founding systems architects and engineers in Hyderabad.
          </p>
        </div>

        {/* Featured Article + Archive Grid */}
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative flex flex-col justify-between rounded-3xl bg-[#080808] hover:bg-[#0e0e0e] border border-white/[0.06] hover:border-white/[0.16] p-8 sm:p-10 transition-all duration-300 ease-out hover:-translate-y-1 shadow-2xl"
              >
                <div className="space-y-6">
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[10px] text-white uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-[#71717A] flex items-center gap-1.5 text-[11px]">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-sans text-xl sm:text-2xl font-medium text-white tracking-tight leading-snug group-hover:text-white transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="font-sans text-xs sm:text-sm text-[#A1A1AA] font-light leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-white/[0.02] border border-white/[0.05] font-mono text-[10px] text-[#71717A]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Author Metadata Footer */}
                <div className="pt-6 mt-8 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white text-xs">
                      <User2 className="w-3.5 h-3.5 text-[#A1A1AA]" />
                    </div>
                    <div>
                      <span className="font-sans text-xs font-medium text-white block">
                        {post.author.name}
                      </span>
                      <span className="font-mono text-[10px] text-[#71717A] block">
                        {post.publishDate}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1 text-xs font-mono text-[#D4D4D8] group-hover:text-white">
                    <span>Read</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
