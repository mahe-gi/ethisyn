"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock, Calendar, Sparkles } from "lucide-react";
import { BlogPost, BlogCategory } from "@/content/blog";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { cn } from "@/lib/utils";

interface BlogIndexViewProps {
  posts: BlogPost[];
  featuredPost?: BlogPost;
}

const FILTER_CATEGORIES: Array<"All" | BlogCategory> = [
  "All",
  "AI & Agents",
  "Web Engineering",
  "GEO & Search",
  "Studio Culture",
];

export function BlogIndexView({ posts, featuredPost }: BlogIndexViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<"All" | BlogCategory>("All");

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "All") {
      return posts;
    }
    return posts.filter((p) => p.category === selectedCategory);
  }, [posts, selectedCategory]);

  // Featured post logic: show if "All" or if it matches the current category
  const activeFeatured =
    featuredPost &&
    (selectedCategory === "All" || featuredPost.category === selectedCategory)
      ? featuredPost
      : null;

  // Grid posts: if featured post is shown in the featured slot, omit it from the grid below
  const gridPosts = useMemo(() => {
    if (activeFeatured) {
      return filteredPosts.filter((p) => p.slug !== activeFeatured.slug);
    }
    return filteredPosts;
  }, [filteredPosts, activeFeatured]);

  return (
    <div className="space-y-12 md:space-y-16">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2.5 pb-4 border-b border-white/[0.06]">
        <span className="text-xs uppercase tracking-widest font-medium text-zinc-500 mr-2 hidden sm:inline-block">
          Filter:
        </span>
        {FILTER_CATEGORIES.map((cat) => {
          const count =
            cat === "All"
              ? posts.length
              : posts.filter((p) => p.category === cat).length;
          const isActive = selectedCategory === cat;

          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "group relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs transition-all duration-200 select-none",
                isActive
                  ? "bg-white text-black font-semibold shadow-md shadow-white/10"
                  : "bg-white/[0.03] text-[#A1A1AA] hover:text-white hover:bg-white/[0.08] border border-white/[0.06] hover:border-white/[0.14]"
              )}
            >
              <span>{cat}</span>
              <span
                className={cn(
                  "text-[10px] px-1.5 py-0.2 rounded-full",
                  isActive
                    ? "bg-black/15 text-black font-bold"
                    : "bg-white/[0.08] text-[#71717A] group-hover:text-white"
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Featured Article Showcase (if available in this filter) */}
      {activeFeatured && (
        <section aria-label="Featured Essay" className="relative group">
          <Link
            href={`/blog/${activeFeatured.slug}`}
            className="block focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4 rounded-3xl"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.1] bg-gradient-to-b from-[#141414] via-[#0c0c0c] to-[#080808] p-6 sm:p-10 md:p-12 transition-all duration-300 hover:border-white/[0.24] hover:shadow-2xl hover:shadow-white/[0.02]">
              {/* Subtle Ambient Glow */}
              <div
                className="absolute -top-32 -right-32 w-80 h-80 bg-white/[0.03] rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative z-10 flex flex-col justify-between space-y-8">
                {/* Meta Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs uppercase tracking-widest font-medium bg-white/10 text-white border border-white/20">
                      <Sparkles className="w-3 h-3 text-amber-300" aria-hidden="true" />
                      FEATURED ESSAY
                    </span>
                    <Badge variant="neutral" size="sm">
                      {activeFeatured.category}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-[#71717A]">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                      {activeFeatured.formattedDate}
                    </span>
                    <span className="text-white/20">•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                      {activeFeatured.readingTime}
                    </span>
                  </div>
                </div>

                {/* Title & Excerpt */}
                <div className="space-y-4 max-w-4xl">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-[1.12] group-hover:text-white/90 transition-colors">
                    {activeFeatured.title}
                  </h2>
                  <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-3xl">
                    {activeFeatured.excerpt}
                  </p>
                </div>

                {/* Author & Read Prompt */}
                <div className="pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 relative bg-white/[0.05] ring-2 ring-white/[0.06] flex-shrink-0">
                      <Image
                        src={activeFeatured.author.avatar}
                        alt={activeFeatured.author.name}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-white block">
                        {activeFeatured.author.name}
                      </span>
                      <span className="text-xs text-[#71717A] block">
                        {activeFeatured.author.role}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-white group-hover:text-white transition-colors">
                    <span>Read full dispatch</span>
                    <ArrowUpRight
                      className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Grid of Articles */}
      <section aria-label="Journal Dispatches">
        {filteredPosts.length === 0 ? (
          <EmptyState
            title="No essays found"
            description={`No dispatches available under "${selectedCategory}". Check back soon or select "All".`}
            actionLabel="View all essays"
            onAction={() => setSelectedCategory("All")}
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {gridPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4 rounded-2xl"
              >
                <Card
                  variant="interactive"
                  className="h-full justify-between group-hover:border-white/20 group-hover:bg-[#0c0c0c] transition-all duration-300"
                >
                  <CardContent className="p-0 space-y-5">
                    {/* Card Top: Category Badge & Reading Time */}
                    <div className="flex items-center justify-between border-b border-white/[0.05] pb-4">
                      <Badge variant="neutral" size="sm">
                        {post.category}
                      </Badge>
                      <div className="flex items-center gap-1.5 text-xs text-[#71717A]">
                        <Clock className="w-3 h-3" aria-hidden="true" />
                        <span>{post.readingTime}</span>
                      </div>
                    </div>

                    {/* Title & Excerpt */}
                    <div className="space-y-2.5">
                      <h3 className="text-xl font-medium text-white group-hover:text-white/90 transition-colors leading-snug tracking-tight">
                        {post.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Tag Pills */}
                    <div className="pt-1 flex flex-wrap gap-1.5">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-xs font-medium bg-white/[0.02] border border-white/[0.05] text-[#71717A]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>

                  {/* Card Footer: Author Portrait & Arrow Interaction */}
                  <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 bg-white/[0.05] relative flex-shrink-0">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <span className="text-xs font-medium text-white block">
                          {post.author.name}
                        </span>
                        <span className="text-xs text-[#71717A] block">
                          {post.formattedDate}
                        </span>
                      </div>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#A1A1AA] group-hover:text-white group-hover:bg-white/[0.08] group-hover:border-white/20 transition-all duration-200">
                      <ArrowUpRight
                        className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
