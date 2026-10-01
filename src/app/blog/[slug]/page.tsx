import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, BlogPost } from "@/content/blogs";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";
import { ArrowLeft, Clock, User2, ArrowUpRight, CheckCircle2 } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found — Ethisyn",
    };
  }

  return {
    title: `${post.title} — Ethisyn Perspectives`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="pt-28 md:pt-36 pb-32 px-5 sm:px-8 md:px-12 bg-black min-h-screen">
      <div className="max-w-[960px] mx-auto space-y-16">
        {/* Navigation Breadcrumb */}
        <div className="space-y-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Perspectives", href: "/blog" },
              { label: post.category },
            ]}
          />

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#A1A1AA] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Perspectives</span>
          </Link>
        </div>

        {/* Article Header */}
        <div className="space-y-8 pb-10 border-b border-white/[0.08]">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-white uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-[#71717A] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
            <span className="text-[#71717A]">
              • Published {post.publishDate}
            </span>
          </div>

          <h1 className="font-sans font-medium text-white text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08]">
            {post.title}
          </h1>

          <p className="font-sans text-lg sm:text-xl text-[#A1A1AA] font-light leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author Byline Card */}
          <div className="flex items-center gap-4 pt-4">
            <div className="w-11 h-11 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-white">
              <User2 className="w-5 h-5 text-[#D4D4D8]" />
            </div>
            <div>
              <div className="font-sans text-sm font-medium text-white">
                {post.author.name}
              </div>
              <div className="font-mono text-xs text-[#71717A]">
                {post.author.role} • Ethisyn Systems Studio
              </div>
            </div>
          </div>
        </div>

        {/* Article Body Content */}
        <article className="prose prose-invert max-w-none space-y-8 font-sans text-base sm:text-lg text-[#D4D4D8] font-light leading-relaxed">
          {post.content.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </article>

        {/* Tags */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs text-[#71717A] uppercase mr-2">
            Topics:
          </span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] font-mono text-xs text-[#A1A1AA]"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Callout / Studio CTA Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#090909] border border-white/[0.1] space-y-6">
          <div className="space-y-2">
            <span className="font-mono text-[11px] uppercase tracking-widest text-emerald-400 block">
              WORK DIRECTLY WITH FOUNDING BUILDERS
            </span>
            <h3 className="font-sans text-2xl font-medium text-white tracking-tight">
              Ready to deploy deterministic AI or high-speed software?
            </h3>
            <p className="font-sans text-sm text-[#A1A1AA] font-light leading-relaxed max-w-xl">
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
            <h3 className="font-sans text-xl font-medium text-white tracking-tight">
              More perspectives from the studio
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="p-6 rounded-2xl bg-[#080808] hover:bg-[#0e0e0e] border border-white/[0.06] hover:border-white/[0.14] transition-all space-y-3 group"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#71717A]">
                    <span>{related.category}</span>
                    <span>{related.readTime}</span>
                  </div>
                  <h4 className="font-sans text-base font-medium text-white group-hover:text-white transition-colors leading-snug">
                    {related.title}
                  </h4>
                  <div className="inline-flex items-center gap-1 text-xs font-mono text-[#D4D4D8] group-hover:text-white pt-2">
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
