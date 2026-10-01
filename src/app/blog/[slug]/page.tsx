import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, getRelatedPosts, BlogPost, BlogContentSection } from "@/content/blog";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CodeBlock } from "@/components/blog/CodeBlock";
import { siteConfig } from "@/content/site";
import { generateBlogPostingSchema } from "@/lib/schema";
import { ArrowLeft, Clock, Calendar, ArrowUpRight, Quote, Sparkles, CheckCircle2 } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Ethisyn",
    };
  }

  return {
    title: `${post.title} | Ethisyn Perspectives`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author.name],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, 2);
  const postingSchema = generateBlogPostingSchema(post);

  return (
    <div className="pt-28 md:pt-36 pb-32 px-5 sm:px-8 md:px-12 bg-black min-h-screen">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postingSchema) }}
      />

      <div className="max-w-[960px] mx-auto space-y-16">
        {/* Navigation Breadcrumb */}
        <div className="space-y-6">
          <Breadcrumbs
            items={[
              { label: "Perspectives", href: "/blog" },
              { label: post.category },
            ]}
          />

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-[#A1A1AA] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Perspectives</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="space-y-8 pb-10 border-b border-white/[0.08]">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-white uppercase tracking-widest font-medium">
              {post.category}
            </span>
            <span className="text-[#71717A] flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5" />
              {post.readingTime}
            </span>
            <span className="text-[#71717A] flex items-center gap-1.5 font-medium">
              <Calendar className="w-3.5 h-3.5" />
              Published {post.formattedDate}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.08]">
            {post.title}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-normal text-[#A1A1AA] leading-relaxed">
            {post.subtitle || post.excerpt}
          </p>

          {/* Author Byline Card */}
          <div className="flex items-center gap-4 pt-4 border-t border-white/[0.05]">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/[0.12] bg-[#141414] shrink-0">
              {post.author.avatar ? (
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  sizes="48px"
                  className="object-cover object-center"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-sm font-medium text-white bg-white/[0.05]">
                  {post.author.name.slice(0, 2)}
                </div>
              )}
            </div>
            <div>
              <div className="text-sm font-medium text-white">
                {post.author.name}
              </div>
              <div className="text-xs text-[#71717A]">
                {post.author.role} • Ethisyn Systems Studio
              </div>
            </div>
          </div>
        </header>

        {/* Structured Article Sections */}
        <article className="space-y-8 text-base sm:text-lg text-[#D4D4D8] leading-relaxed">
          {post.sections.map((section, idx) => {
            switch (section.type) {
              case "paragraph":
                return (
                  <p key={idx} className="leading-relaxed">
                    {section.text}
                  </p>
                );

              case "heading2":
                return (
                  <h2
                    key={idx}
                    className="text-2xl sm:text-3xl font-medium text-white tracking-tight pt-8 pb-2 border-b border-white/[0.06]"
                  >
                    {section.title}
                  </h2>
                );

              case "heading3":
                return (
                  <h3
                    key={idx}
                    className="text-xl sm:text-2xl font-medium text-white tracking-tight pt-6"
                  >
                    {section.title}
                  </h3>
                );

              case "code":
                return (
                  <CodeBlock
                    key={idx}
                    language={section.language || "typescript"}
                    code={section.code || ""}
                  />
                );

              case "callout":
                return (
                  <aside
                    key={idx}
                    className="my-8 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border-l-2 border-white/60 border-y border-r border-white/[0.06] space-y-3"
                  >
                    <div className="flex items-start gap-3">
                      <Quote className="w-5 h-5 text-white/60 shrink-0 mt-0.5" />
                      <div className="space-y-2">
                        <p className="italic text-lg sm:text-xl text-white leading-relaxed">
                          &ldquo;{section.quote || section.text}&rdquo;
                        </p>
                        {section.authorNote && (
                          <p className="text-xs text-[#71717A]">
                            By {section.authorNote}
                          </p>
                        )}
                      </div>
                    </div>
                  </aside>
                );

              case "list":
                return (
                  <ul key={idx} className="space-y-2.5 my-6 pl-2">
                    {section.items?.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3 text-sm sm:text-base">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                        <span className="text-[#A1A1AA]">{item}</span>
                      </li>
                    ))}
                  </ul>
                );

              case "metrics":
                return (
                  <div
                    key={idx}
                    className="my-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
                  >
                    {section.metrics?.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-5 rounded-2xl bg-[#0a0a0a] border border-white/[0.08] space-y-1.5"
                      >
                        <div className="text-xs uppercase tracking-widest font-medium text-zinc-400">
                          {metric.label}
                        </div>
                        <div className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
                          {metric.value}
                        </div>
                        <div className="text-xs text-[#A1A1AA]">
                          {metric.detail}
                        </div>
                      </div>
                    ))}
                  </div>
                );

              default:
                return null;
            }
          })}
        </article>

        {/* Tags */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-wrap items-center gap-2">
          <span className="text-xs uppercase tracking-widest font-medium text-zinc-500 mr-2">
            Topics:
          </span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-xs font-medium text-[#A1A1AA]"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Callout / Studio CTA Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#090909] border border-white/[0.1] space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest font-medium text-emerald-400 block">
              WORK DIRECTLY WITH FOUNDING BUILDERS
            </span>
            <h3 className="text-2xl font-medium text-white tracking-tight">
              Ready to deploy deterministic AI or high-speed software?
            </h3>
            <p className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed max-w-xl">
              We engineer custom multi-agent graphs, sub-second web platforms, and automated workflow pipelines. No junior account reps.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button href="/#contact" variant="primary" size="md" showArrow>
              Start a project with us
            </Button>
            <Button href="/#ai" variant="outline" size="md">
              Explore AI Systems
            </Button>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="space-y-8 pt-8 border-t border-white/[0.08]">
            <h3 className="text-xl font-medium text-white tracking-tight">
              More perspectives from the studio
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="p-6 rounded-2xl bg-[#080808] hover:bg-[#0e0e0e] border border-white/[0.06] hover:border-white/[0.14] transition-all space-y-3 group"
                >
                  <div className="flex items-center justify-between text-xs text-[#71717A]">
                    <span>{related.category}</span>
                    <span>{related.readingTime}</span>
                  </div>
                  <h4 className="text-base font-medium text-white group-hover:text-white transition-colors leading-snug">
                    {related.title}
                  </h4>
                  <div className="inline-flex items-center gap-1 text-xs uppercase tracking-widest font-medium text-[#D4D4D8] group-hover:text-white pt-2">
                    <span>Read article</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
