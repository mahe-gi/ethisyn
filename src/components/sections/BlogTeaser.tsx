import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import { getAllPosts } from "@/content/blog";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";

export function BlogTeaser() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <section
      className="py-24 md:py-36 px-5 sm:px-8 md:px-12 bg-black border-t border-white/[0.06]"
      aria-labelledby="blog-teaser-heading"
    >
      <div className="max-w-[1520px] mx-auto space-y-12 md:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-medium text-zinc-400 block">
              LATEST INSIGHTS
            </span>
            <h2
              id="blog-teaser-heading"
              className="font-medium text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.08]"
            >
              Engineering essays & systems dispatches.
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl font-normal text-[#A1A1AA] leading-relaxed">
              Real architectural blueprints, production lessons, and systems thinking from our founding engineers in Hyderabad.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Button href="/blog" variant="secondary" size="md" showArrow>
              View all essays
            </Button>
          </div>
        </div>

        {/* 3-Column Article Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {latestPosts.map((post) => (
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
                  {/* Top Bar: Category & Reading Time */}
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
                    <p className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Tag Pills */}
                  <div className="pt-1 flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] bg-white/[0.02] border border-white/[0.05] text-[#71717A]"
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
                      <span className="text-[10px] text-[#71717A] flex items-center gap-1">
                        <Calendar className="w-2.5 h-2.5" aria-hidden="true" />
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
      </div>
    </section>
  );
}
