import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp,
  Search,
  Sparkles,
  Target,
  BarChart3,
  Bot,
  Video,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Building2,
  MapPin,
  Clock,
  Layers,
  Zap,
  Globe,
  Award,
  Users,
} from "lucide-react";
import { siteConfig } from "@/content/site";
import { ContactForm } from "@/components/ui/ContactForm";
import {
  generateLocalizedServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Digital Marketing Company in Hyderabad | SEO, GEO & Performance Growth",
  description:
    "Ethisyn is Hyderabad's premier digital marketing & generative growth company. We drive high-intent customer acquisition through technical SEO, Generative Engine Optimization (GEO), high-ROI paid ads, and cinematic video content for businesses in HITEC City, Madhapur, Jubilee Hills, and worldwide.",
  keywords: [
    "digital marketing company in hyderabad",
    "digital marketing agency in hyderabad",
    "digital marketing company",
    "seo company in hyderabad",
    "seo agency hyderabad",
    "ai automation company in hyderabad",
    "ai automation agency",
    "generative engine optimization hyderabad",
    "geo agency hyderabad",
    "performance marketing agency hyderabad",
    "google ads agency hyderabad",
    "ethisyn digital marketing",
  ],
  alternates: {
    canonical: "/digital-marketing-company-hyderabad",
  },
  openGraph: {
    title: "Digital Marketing Company in Hyderabad | ETHISYN",
    description:
      "Revenue-driven digital growth, Generative Engine Optimization (GEO for LLMs), technical SEO dominance, and high-ROI acquisition engineered in Hyderabad.",
    url: `${siteConfig.url}/digital-marketing-company-hyderabad`,
    type: "website",
    images: [
      {
        url: "/brand/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Ethisyn - Digital Marketing Company in Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Company in Hyderabad | ETHISYN",
    description:
      "Hyderabad's leading digital marketing & generative search agency. Rank on Google Search, Google Maps Local Pack, and AI Answer Engines (ChatGPT & Perplexity).",
    images: ["/brand/opengraph-image.png"],
  },
  other: {
    "geo.region": "IN-TG",
    "geo.placename": "Hyderabad",
    "geo.position": "17.4483;78.3915",
    ICBM: "17.4483, 78.3915",
  },
};

const hyderabadMarketingFaqs = [
  {
    question: "What makes Ethisyn different from other digital marketing agencies in Hyderabad?",
    answer:
      "Most digital marketing agencies in Hyderabad sell vanity metrics: cheap bot social media impressions, generic automated posts, and low-quality keyword rankings that never result in paying customers. Ethisyn is a product engineering and digital growth studio. We focus strictly on qualified commercial pipeline, high-intent Google Search dominance, Google Maps Local 3-Pack rankings, and cutting-edge Generative Engine Optimization (GEO) across ChatGPT, Perplexity, and Gemini. Every campaign is backed by sub-second landing pages and full-funnel conversion tracking.",
  },
  {
    question: "What is Generative Engine Optimization (GEO) and why does my business need it?",
    answer:
      "Generative Engine Optimization (GEO) is the next evolution of search marketing. Millions of premium decision-makers now discover products and service providers through AI answer engines like ChatGPT Search, Perplexity AI, Claude, and Google AI Overviews rather than clicking traditional blue links. We optimize your brand entity, schema graphs, technical corpus citations, and third-party authority signals so that AI models cite, recommend, and link directly to your business when prospective clients ask questions.",
  },
  {
    question: "How long does it take to rank on page 1 of Google in Hyderabad?",
    answer:
      "For targeted commercial keywords and local map pack queries in Hyderabad (such as tech corridors like HITEC City, Gachibowli, or Madhapur), clients typically experience visible movement within 30 to 45 days. Substantial page 1 dominance for competitive commercial queries typically solidifies within 90 to 120 days. For immediate client acquisition while organic rankings mature, we deploy laser-targeted Google Search Ads with positive ROI from week one.",
  },
  {
    question: "How do you rank businesses in the Google Maps Local 3-Pack?",
    answer:
      "Local Map Pack dominance requires four synchronized levers: pristine Google Business Profile (GBP) category architecture, high-frequency local review generation with contextual keyword mentions, exact Name-Address-Phone (NAP) consistency across verified business directories, and localized geo-tagged entity signals embedded directly into your website's schema markup.",
  },
  {
    question: "What advertising channels do you manage?",
    answer:
      "We manage high-intent Google Search Ads (targeting active buyers searching for your exact solutions), Google Performance Max, Meta Ads (Instagram and Facebook with custom cinematic creative), LinkedIn B2B Paid Acquisition for enterprise tech firms, and YouTube discovery funnels. We rigorously monitor Cost Per Acquisition (CPA) and Return on Ad Spend (ROAS).",
  },
  {
    question: "Do you create video and creative content in-house?",
    answer:
      "Yes. Our CREATE pillar handles end-to-end cinematic video production, videography, motion design, social media reels, promotional videos, and brand identity assets. We do not use cookie-cutter stock templates; every creative asset is crafted in-house to convert attention into pipeline.",
  },
  {
    question: "What are your digital marketing pricing packages in Hyderabad?",
    answer:
      "Our retainers are transparent and milestone-based. Local SEO & Google Map Pack Domination packages range from ₹40,000 to ₹75,000 per month. Full-funnel performance marketing and paid ads management range from ₹80,000 to ₹1,60,000 per month. Omnichannel enterprise growth with custom video production and GEO engineering is custom-scoped.",
  },
  {
    question: "How do you report results and ROI?",
    answer:
      "We provide bi-weekly live dashboards tracking real business metrics: qualified pipeline, cost per acquisition (CPA), conversion rates, organic impressions, and verified revenue attribution. You receive transparent weekly async reports directly from our growth leads, with zero jargon or inflated vanity numbers.",
  },
];

const growthPillars = [
  {
    title: "Generative Engine Optimization (GEO)",
    description:
      "Position your brand as the cited authority across ChatGPT Search, Perplexity, Claude, and Google Gemini. We engineer entity knowledge graphs, structured schemas, and authoritative citations that AI answer engines trust.",
    icon: Bot,
    badge: "AI Search Era",
    deliverables: ["ChatGPT & Perplexity Entity Indexing", "Knowledge Graph Syndication", "llms.txt Architecture", "Brand Citation Building"],
  },
  {
    title: "Technical SEO & Google Local 3-Pack Domination",
    description:
      "Monopolize the top spots on Google Search and Google Maps for high-intent Hyderabad commercial queries. We eliminate Core Web Vitals crawl friction and build localized citation authority.",
    icon: Search,
    badge: "Organic Search",
    deliverables: ["Google Business Profile #1 Ranking", "Sub-500ms Core Web Vitals", "Local Hyderabad Citations", "Commercial Keyword Content Clusters"],
  },
  {
    title: "High-ROI Paid Acquisition (Google & Meta Ads)",
    description:
      "Laser-targeted paid ad campaigns engineered to capture ready-to-buy prospects. We build custom negative keyword lists, high-converting ad copy, and algorithmic bid strategies with strict CPA caps.",
    icon: Target,
    badge: "Immediate Pipeline",
    deliverables: ["Google Search Ads (High-Intent)", "Meta Dynamic Retargeting", "LinkedIn B2B Account Targeting", "Full-Funnel Conversion Tracking"],
  },
  {
    title: "Cinematic Video Production & High-Retention Creative",
    description:
      "Broadcast-grade short-form video reels, client testimonials, and product demo videos designed to stop the scroll, elevate brand prestige, and dramatically improve paid ad conversion rates.",
    icon: Video,
    badge: "Content Craft",
    deliverables: ["High-Retention Social Reels", "Brand Promotional Films", "Founder Video Storytelling", "High-Converting Ad Creatives"],
  },
  {
    title: "Sub-Second Conversion Funnels & Landing Pages",
    description:
      "Never lose ad traffic to slow pages again. We build lightning-fast Next.js landing pages engineered for conversion, heatmapped, and A/B tested to maximize your visitor-to-lead ratio.",
    icon: Zap,
    badge: "Conversion Rate",
    deliverables: ["Next.js 15 Static Landing Pages", "Form Optimization & Tracking", "WhatsApp & Call Instant Routing", "A/B Multivariate Split Testing"],
  },
  {
    title: "Autonomous AI Inbound & Lead Qualification",
    description:
      "Instant response systems that engage inbound leads within 30 seconds via automated WhatsApp workflows and AI voice agents, qualifying prospects before they shop with competitors.",
    icon: Sparkles,
    badge: "Pipeline Automation",
    deliverables: ["Instant Inbound Lead Triage", "WhatsApp CRM Sync", "Lead Scoring & Routing", "Zero Lead Leakage Safeguards"],
  },
];

const marketingComparison = [
  {
    feature: "Primary North Star Metric",
    ethisyn: "Qualified Leads, Closed Revenue & Verified ROAS",
    traditional: "Vanity impressions, social likes & empty follower counts",
    cheapAgencies: "Arbitrary keyword rankings on non-commercial terms",
  },
  {
    feature: "Generative Search & AI Readiness",
    ethisyn: "Full GEO engineering for ChatGPT, Perplexity & Gemini",
    traditional: "Zero awareness of AI engine retrieval dynamics",
    cheapAgencies: "Outdated black-hat link spam risking Google penalties",
  },
  {
    feature: "Landing Page Speed & Quality",
    ethisyn: "Sub-second Next.js pages with 90+ Core Web Vitals",
    traditional: "Slow, heavy WordPress templates (3-6s load times)",
    cheapAgencies: "Generic unoptimized pages with 80%+ bounce rates",
  },
  {
    feature: "Creative & Content Standards",
    ethisyn: "In-house cinematic videography & high-retention motion",
    traditional: "Stock Canva templates reused across 20 other clients",
    cheapAgencies: "Copied low-effort AI text with zero brand distinction",
  },
  {
    feature: "Reporting & Transparency",
    ethisyn: "Bi-weekly live attribution dashboards & direct lead contact",
    traditional: "Vague monthly PDF reports filled with non-revenue metrics",
    cheapAgencies: "No transparent ad account access or spend clarity",
  },
];

const marketingTiers = [
  {
    name: "Local Domination & Organic SEO",
    price: "₹45,000",
    priceRange: "₹40,000 - ₹75,000 / mo",
    description:
      "Engineered for businesses seeking to dominate Google Search and Google Maps Local 3-Pack for high-intent Hyderabad searches.",
    features: [
      "Complete Google Business Profile (GBP) 3-Pack optimization",
      "Hyderabad local citation syndication (NAP consistency)",
      "Technical SEO audit & Core Web Vitals optimization",
      "Commercial keyword research & landing page optimization",
      "Review velocity engine & reputation management",
      "Monthly local organic ranking & competitor movement report",
      "Bi-weekly performance syncs with dedicated growth lead",
    ],
    highlight: false,
  },
  {
    name: "Full-Funnel Performance Marketing",
    price: "₹85,000",
    priceRange: "₹80,000 - ₹1,60,000 / mo",
    description:
      "Our flagship revenue engine combining high-intent Google Search Ads, Meta performance creative, and conversion-engineered landing pages.",
    features: [
      "Everything in Local Domination package",
      "Google Search Ads campaign design & negative keyword sculpting",
      "Meta Ads (Instagram & Facebook) performance management",
      "Custom Next.js high-converting landing page included",
      "Conversion tracking & server-side API (CAPI) setup",
      "High-converting ad copy & monthly creative asset refresh",
      "WhatsApp & phone instant lead routing setup",
      "Weekly live attribution & CPA dashboard reviews",
    ],
    highlight: true,
  },
  {
    name: "Omnichannel Growth & Generative Search",
    price: "Custom",
    priceRange: "Custom Growth Retainer",
    description:
      "Full-service market dominance combining Generative Engine Optimization (GEO), in-house cinematic video production, and multi-platform scaling.",
    features: [
      "Complete Generative Engine Optimization (ChatGPT, Perplexity, Gemini)",
      "Professional cinematic video shoot & monthly social reel package",
      "B2B LinkedIn account-based advertising campaigns",
      "Autonomous AI inbound lead qualification workflow",
      "Multi-location local SEO scaling across Telangana & India",
      "Dedicated senior growth director & creative pod",
      "Real-time Slack / WhatsApp channel with growth team",
    ],
    highlight: false,
  },
];

const hyderabadLocalities = [
  "HITEC City",
  "Gachibowli",
  "Madhapur",
  "Jubilee Hills",
  "Banjara Hills",
  "Financial District",
  "Kondapur",
  "Begumpet",
  "Kukatpally",
  "Secunderabad",
];

export default function DigitalMarketingHyderabadPage() {
  const serviceSchema = generateLocalizedServiceSchema({
    pagePath: "/digital-marketing-company-hyderabad",
    serviceName: "Digital Marketing & Generative Growth Company in Hyderabad",
    serviceType: "Digital Marketing, SEO, Generative Engine Optimization & Performance Advertising",
    serviceCategory: "GROW",
    description:
      "Ethisyn is Hyderabad's premier digital marketing company, providing technical SEO, Generative Engine Optimization (GEO for ChatGPT and Perplexity), high-ROI paid ads, and cinematic video production.",
    offers: [
      {
        name: "Local Domination & Organic SEO",
        description: "Google Business Profile 3-Pack and technical SEO dominance in Hyderabad",
        price: "45000",
      },
      {
        name: "Full-Funnel Performance Marketing",
        description: "Google Ads, Meta Ads and conversion landing page management",
        price: "85000",
      },
      {
        name: "Omnichannel Growth & Generative Search",
        description: "Comprehensive GEO, video production, and omnichannel growth retainer",
      },
    ],
  });

  const faqSchema = generateFAQSchema(hyderabadMarketingFaqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    {
      name: "Digital Marketing Company in Hyderabad",
      url: `${siteConfig.url}/digital-marketing-company-hyderabad`,
    },
  ]);

  return (
    <div className="relative min-h-screen bg-black text-[#EDEDED] selection:bg-white selection:text-black">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 1. Hero Section */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 px-5 sm:px-8 md:px-12 border-b border-white/[0.08] overflow-hidden">
        {/* Ambient Gradient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-emerald-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto space-y-10 sm:space-y-12 relative z-10">
          {/* Breadcrumb / Location Kicker */}
          <div className="flex flex-wrap items-center gap-2.5 text-xs">
            <Link
              href="/"
              className="text-[#71717A] hover:text-white transition-colors"
            >
              ETHISYN
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-[#A1A1AA] uppercase tracking-wider font-medium">
              Digital Growth Studio
            </span>
            <span className="text-white/20">•</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-emerald-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              SEO • GEO • Performance Ads • Video
            </span>
          </div>

          {/* Main Title & Proposition */}
          <div className="space-y-6 max-w-5xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.06]">
              Digital Marketing Company in Hyderabad
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#D4D4D8] leading-relaxed font-light max-w-4xl">
              We engineer revenue-generating growth for ambitious businesses.
              Dominate Google Search, Google Maps Local 3-Pack, and AI Answer
              Engines (ChatGPT &amp; Perplexity) with technical precision, high-ROI
              paid campaigns, and cinematic video.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#growth-audit"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-black font-semibold text-xs sm:text-sm uppercase tracking-widest hover:bg-emerald-400 transition-colors shadow-2xl"
            >
              <span>Request Growth &amp; SEO Audit</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/[0.04] border border-white/[0.12] text-white hover:border-white/30 text-xs sm:text-sm uppercase tracking-widest transition-colors"
            >
              <span>Explore Verified Case Studies</span>
              <ArrowUpRight className="w-4 h-4 text-[#A1A1AA]" />
            </Link>
          </div>

          {/* Trust Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-white/[0.08]">
            <div className="p-5 sm:p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] space-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white tracking-tight">
                300%+
              </div>
              <p className="text-xs sm:text-sm text-[#A1A1AA]">
                Inbound Commercial Pipeline Lift
              </p>
            </div>
            <div className="p-5 sm:p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] space-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white tracking-tight">
                4.2x
              </div>
              <p className="text-xs sm:text-sm text-[#A1A1AA]">
                Average Return on Ad Spend (ROAS)
              </p>
            </div>
            <div className="p-5 sm:p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] space-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white tracking-tight">
                #1 - #3
              </div>
              <p className="text-xs sm:text-sm text-[#A1A1AA]">
                Google Maps &amp; Local Pack Rankings
              </p>
            </div>
            <div className="p-5 sm:p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] space-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white tracking-tight">
                GEO-Ready
              </div>
              <p className="text-xs sm:text-sm text-[#A1A1AA]">
                ChatGPT, Perplexity &amp; Gemini Authority
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Growth Pillars Grid */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 border-b border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto space-y-16">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
              FULL-SPECTRUM GROWTH ENGINE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight">
              Modern Digital Marketing Built for Direct Revenue
            </h2>
            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
              We integrate algorithmic search optimization, Generative Engine
              Optimization, high-converting paid acquisition, and cinematic video
              into a single unified growth machine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {growthPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-7 sm:p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-white group-hover:scale-105 group-hover:border-emerald-400/40 transition-all">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-emerald-500/[0.08] text-emerald-400 border border-emerald-500/20">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-medium text-white tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[#A1A1AA] leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/[0.06] space-y-2">
                    <div className="text-[11px] uppercase tracking-wider text-[#71717A] font-medium">
                      Core Deliverables:
                    </div>
                    {pillar.deliverables.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-xs text-[#D4D4D8]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Agency Comparison Matrix */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 border-b border-white/[0.08] bg-[#050505]">
        <div className="max-w-[1400px] mx-auto space-y-14">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
              THE HONEST COMPARISON
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight">
              Ethisyn Growth Studio vs Traditional Agencies
            </h2>
            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
              Why leading Hyderabad enterprises fire their legacy marketing
              agencies and partner with Ethisyn.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/[0.08] bg-black">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-white/[0.08] bg-white/[0.02]">
                  <th className="py-5 px-6 text-xs uppercase tracking-wider text-[#71717A] font-medium w-1/4">
                    Growth Standard
                  </th>
                  <th className="py-5 px-6 text-xs uppercase tracking-wider text-emerald-400 font-semibold w-1/3 bg-emerald-500/[0.04]">
                    ETHISYN Studio
                  </th>
                  <th className="py-5 px-6 text-xs uppercase tracking-wider text-[#A1A1AA] font-medium w-1/4">
                    Traditional Agencies
                  </th>
                  <th className="py-5 px-6 text-xs uppercase tracking-wider text-[#71717A] font-medium w-1/4">
                    Low-Cost SEO Farms
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-sm">
                {marketingComparison.map((row) => (
                  <tr key={row.feature} className="hover:bg-white/[0.01]">
                    <td className="py-5 px-6 font-medium text-white">
                      {row.feature}
                    </td>
                    <td className="py-5 px-6 font-medium text-emerald-300 bg-emerald-500/[0.02]">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{row.ethisyn}</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 text-[#A1A1AA]">{row.traditional}</td>
                    <td className="py-5 px-6 text-[#71717A]">{row.cheapAgencies}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Hyderabad Local Market Dominance */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 border-b border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-white">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Targeted Hyderabad Commercial Ecosystem</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight">
                Hyper-Targeting Hyderabad&apos;s Wealthiest Commercial Hubs
              </h2>
              <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed font-light">
                Hyderabad is India&apos;s fastest-growing enterprise hub. We deploy
                localized geo-fenced campaigns, localized landing pages, and
                Google Maps citations targeting active commercial buyers in HITEC
                City, the Financial District, Madhapur, Jubilee Hills, and Banjara
                Hills.
              </p>
              <div className="space-y-3 pt-2 text-sm text-[#D4D4D8]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Rank #1 on Google Maps for local commercial search queries</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Geo-targeted Google Search &amp; Meta ad delivery</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Entity citations in top Hyderabad &amp; Telangana directories</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] space-y-6">
              <div className="text-xs uppercase tracking-widest text-[#71717A] font-semibold">
                ACTIVE HYDERABAD COMMERCIAL ZONES
              </div>
              <div className="flex flex-wrap gap-2">
                {hyderabadLocalities.map((loc) => (
                  <span
                    key={loc}
                    className="px-3.5 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-white flex items-center gap-1.5"
                  >
                    <Building2 className="w-3 h-3 text-[#A1A1AA]" />
                    {loc}
                  </span>
                ))}
              </div>
              <div className="pt-4 border-t border-white/[0.06] text-xs text-[#71717A] space-y-1">
                <p>Growth Director Consultation: By Appointment in Hyderabad</p>
                <p>Direct Inquiries: hello@ethisyn.in • +91 80961 31202</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Transparent Pricing Tiers */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 border-b border-white/[0.08] bg-[#050505]">
        <div className="max-w-[1400px] mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
              TRANSPARENT GROWTH RETAINERS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight">
              Milestone-Driven Growth Investments
            </h2>
            <p className="text-base sm:text-lg text-[#A1A1AA]">
              No ambiguous hourly billing or multi-year lock-in traps. Flexible
              monthly growth retainers tied directly to measurable acquisition
              deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`p-8 rounded-2xl border flex flex-col justify-between transition-all duration-200 ${
                  tier.highlight
                    ? "border-emerald-400/50 bg-white/[0.03] shadow-2xl relative"
                    : "border-white/[0.08] bg-white/[0.02]"
                }`}
              >
                {tier.highlight && (
                  <span className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-emerald-400 text-black text-[10px] font-bold uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium text-white tracking-tight">
                      {tier.name}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-semibold text-white">
                        {tier.price}
                      </span>
                      <span className="text-xs text-[#71717A]">
                        {tier.priceRange !== tier.price ? `(${tier.priceRange})` : ""}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-[#A1A1AA] font-light leading-relaxed">
                    {tier.description}
                  </p>

                  <div className="pt-6 border-t border-white/[0.06] space-y-3">
                    <div className="text-xs uppercase tracking-wider text-[#71717A] font-medium">
                      What&apos;s Included:
                    </div>
                    {tier.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D4D4D8]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-white/[0.06]">
                  <a
                    href="#growth-audit"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
                      tier.highlight
                        ? "bg-white text-black hover:bg-emerald-400"
                        : "bg-white/[0.06] text-white hover:bg-white/[0.12] border border-white/10"
                    }`}
                  >
                    <span>Start with {tier.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Hyderabad Marketing FAQ Section */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 border-b border-white/[0.08]">
        <div className="max-w-[1200px] mx-auto space-y-14">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
              GROWTH &amp; SEO FAQS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-[#A1A1AA]">
              Everything you need to know about our digital marketing, local SEO,
              and Generative Engine Optimization services in Hyderabad.
            </p>
          </div>

          <div className="space-y-4">
            {hyderabadMarketingFaqs.map((faq, index) => (
              <div
                key={faq.question}
                className="p-6 sm:p-7 rounded-2xl border border-white/[0.08] bg-white/[0.02] space-y-3"
              >
                <h3 className="text-lg sm:text-xl font-medium text-white tracking-tight flex items-start gap-3">
                  <span className="text-xs text-emerald-400 border border-emerald-400/30 rounded px-1.5 py-0.5 mt-1 font-mono">
                    0{index + 1}
                  </span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed font-light pl-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Lead Scoping & Growth Audit Funnel */}
      <section
        id="growth-audit"
        className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 relative overflow-hidden"
      >
        <div className="max-w-[1200px] mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 text-xs text-emerald-400 uppercase tracking-widest font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              Comprehensive Growth Diagnostic
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight">
              Claim Your Free Hyderabad Search &amp; Growth Audit
            </h2>
            <p className="text-base sm:text-lg text-[#A1A1AA]">
              Submit your website and current growth hurdles. Our Chief
              Marketing Officer and growth engineers will analyze your local
              rankings, Core Web Vitals, and generative search footprint within 4
              business hours.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white/[0.02] border border-white/[0.08] p-6 sm:p-10 rounded-3xl">
            <ContactForm
              initialService="GROW: Digital Growth & SEO"
              submitLabel="Request Free Growth Audit"
              messageLabel="What are your primary customer acquisition goals?"
              messagePlaceholder="Tell us about your website, target customer profile, current ad spend, or search ranking goals..."
              showWhatsAppButton={true}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
