import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Code2,
  Cpu,
  Layers,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Zap,
  Clock,
  Server,
  Smartphone,
  Globe,
  Database,
  Building2,
  MapPin,
  HelpCircle,
  TrendingUp,
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
  title: "Software Development Company in Hyderabad | Custom Web & Mobile Studio",
  description:
    "Ethisyn is Hyderabad's premier software development company. We build sub-second web apps, SaaS platforms, native mobile apps, and custom enterprise software for ambitious businesses in HITEC City, Gachibowli, and worldwide.",
  keywords: [
    "software development company in hyderabad",
    "software development company",
    "custom software development hyderabad",
    "web development company in hyderabad",
    "web development company",
    "nextjs development company hyderabad",
    "saas development company hyderabad",
    "mobile app development company hyderabad",
    "enterprise software development hyderabad",
    "hitec city software agency",
    "ethisyn software",
  ],
  alternates: {
    canonical: "/software-development-company-hyderabad",
  },
  openGraph: {
    title: "Software Development Company in Hyderabad | ETHISYN",
    description:
      "Sub-second web engineering, production SaaS platforms, and enterprise software built by senior domain leads in Hyderabad. Zero junior outsourcing.",
    url: `${siteConfig.url}/software-development-company-hyderabad`,
    type: "website",
    images: [
      {
        url: "/brand/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Ethisyn - Software Development Company in Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Company in Hyderabad | ETHISYN",
    description:
      "Hyderabad's elite software engineering studio. Sub-500ms Next.js web applications, mobile apps, and scalable cloud architectures.",
    images: ["/brand/opengraph-image.png"],
  },
  other: {
    "geo.region": "IN-TG",
    "geo.placename": "Hyderabad",
    "geo.position": "17.4483;78.3915",
    ICBM: "17.4483, 78.3915",
  },
};

const hyderabadFaqs = [
  {
    question: "Why should we hire Ethisyn over legacy IT outsourcing companies in Hyderabad?",
    answer:
      "Traditional IT outsourcing companies in Hyderabad operate on junior-heavy billing models with high overhead, multi-layered account management, and sluggish turnaround times. At Ethisyn, 100% of your codebase is architected and shipped by senior domain leads. You work directly with founding engineers who deploy sub-second, production-grade software using Next.js 15, TypeScript, Python, and cloud-native architectures—with zero junior outsourcing and daily transparent progress.",
  },
  {
    question: "Where are you located in Hyderabad? Can we meet in person?",
    answer:
      "Ethisyn is anchored in the Hyderabad technology corridor (encompassing HITEC City, Madhapur, Gachibowli, and the Financial District). We offer on-site technical discovery sessions, sprint kickoff whiteboards, and stakeholder alignment meetings across Hyderabad, while maintaining streamlined async engineering communication throughout active development cycles.",
  },
  {
    question: "What types of software do you build?",
    answer:
      "We build custom digital products from the ground up: sub-second web applications, multi-tenant SaaS platforms, cross-platform iOS and Android mobile apps (React Native), high-volume customer portals, autonomous AI agent pipelines, custom CRM backends, and distributed microservices architectures.",
  },
  {
    question: "What is your typical software development timeline?",
    answer:
      "A focused MVP or high-velocity web platform typically ships in 2 to 4 weeks. Full-scale production platforms, multi-tenant SaaS systems, or complex mobile applications take 6 to 10 weeks depending on custom integrations, regulatory requirements, and technical scope.",
  },
  {
    question: "Who owns the intellectual property (IP) and source code?",
    answer:
      "You own 100% of the intellectual property, source code, repositories, design assets, and deployment keys upon milestone completion. We provide clean, fully documented repositories with zero proprietary vendor lock-in or recurring code licensing fees.",
  },
  {
    question: "What does custom software development cost in Hyderabad?",
    answer:
      "Our software engineering engagements range from transparent fixed-scope sprints to dedicated engineering pods. Rapid MVP sprints start at ₹1,50,000 to ₹3,50,000, production-grade web and mobile platforms range between ₹4,00,000 and ₹9,50,000, and enterprise dedicated pods are scoped according to team velocity and scale.",
  },
  {
    question: "How do you guarantee software performance and speed?",
    answer:
      "Every web application we deliver is engineered to achieve 90+ Google PageSpeed Insights scores, sub-500ms time-to-first-byte (TTFB), and zero Cumulative Layout Shift (CLS). We leverage Next.js App Router, edge caching, server-rendered components, and lightweight database indices to ensure sub-second global response times.",
  },
  {
    question: "Do you offer post-launch maintenance, SLAs, and support?",
    answer:
      "Yes. Every software deployment includes 30 days of complimentary hypercare and bug warranties. Following launch, we offer dedicated monthly SLA maintenance packages covering infrastructure monitoring, security updates, feature expansions, and 4-hour critical incident response times.",
  },
];

const capabilities = [
  {
    title: "Next.js 15 & High-Speed Web Applications",
    description:
      "Sub-second web platforms engineered with Next.js App Router, React Server Components, TypeScript, and edge runtime optimization. Zero bloat, instantaneous transitions, and sub-500ms global response times.",
    icon: Globe,
    tags: ["Next.js 15", "TypeScript", "React 19", "Tailwind CSS", "Edge Functions"],
  },
  {
    title: "Multi-Tenant SaaS & Cloud Architectures",
    description:
      "Scalable multi-tenant SaaS systems featuring automated tenant isolation, role-based access control (RBAC), Stripe/Razorpay billing, and auto-scaling cloud microservices on AWS and GCP.",
    icon: Server,
    tags: ["PostgreSQL", "Prisma/Drizzle", "Redis", "Docker", "AWS ECS", "Supabase"],
  },
  {
    title: "Cross-Platform Mobile Apps (iOS & Android)",
    description:
      "Native-feel mobile apps built with React Native and Expo. Seamless offline-first data caching, push notifications, biometrics, hardware integration, and Apple App Store / Google Play compliance.",
    icon: Smartphone,
    tags: ["React Native", "Expo", "iOS Swift", "Android Kotlin", "Offline Sync"],
  },
  {
    title: "Custom CRM & Internal Business Portals",
    description:
      "Bespoke operations portals, admin dashboards, and custom CRM systems tailored to eliminate internal operational bottlenecks, replace clunky spreadsheets, and automate employee workflows.",
    icon: Database,
    tags: ["Custom ERP/CRM", "Role Permissions", "Audit Logging", "Real-Time WebSockets"],
  },
  {
    title: "Autonomous AI Agents & Pipeline Automation",
    description:
      "Context-aware AI workflows, automated lead processing agents, and real-time voice intelligence (sub-800ms conversational latency) integrated directly into your software database.",
    icon: Cpu,
    tags: ["LangGraph", "Python FastAPI", "OpenAI / Claude API", "Vector Embeddings"],
  },
  {
    title: "API Engineering & Microservices Integration",
    description:
      "Robust RESTful and GraphQL APIs built with high-throughput backend runtimes. Flawless third-party integrations with payment gateways, ERPs, banking switches, and legacy enterprise software.",
    icon: Zap,
    tags: ["Node.js", "Python", "GraphQL", "Webhook Systems", "Idempotency"],
  },
];

const comparisonPoints = [
  {
    feature: "Engineers on Your Project",
    ethisyn: "100% Senior Domain Leads (CTO & Founding Architects)",
    traditional: "Senior pitch team replaced by fresh junior hires",
    freelancers: "Unvetted individual with unpredictable availability",
  },
  {
    feature: "Performance & PageSpeed",
    ethisyn: "Guaranteed 90+ Core Web Vitals & Sub-500ms TTFB",
    traditional: "Bloated boilerplate, slow WordPress or legacy PHP",
    freelancers: "Rarely tested for scale or mobile network limits",
  },
  {
    feature: "IP & Source Code Handover",
    ethisyn: "100% Client Ownership, Clean GitHub repos from Day 1",
    traditional: "Proprietary lock-in or hostage licensing fees",
    freelancers: "Inconsistent documentation and missing secrets",
  },
  {
    feature: "Delivery Velocity",
    ethisyn: "2-4 Weeks for MVPs, 6-10 Weeks for SaaS platforms",
    traditional: "3 to 6 months of scope creep and billing bloat",
    freelancers: "Unreliable timelines, ghosting risks",
  },
  {
    feature: "Local Hyderabad Presence",
    ethisyn: "Deep roots in HITEC City / Gachibowli corridor",
    traditional: "Impersonal call centers or remote offshore accounts",
    freelancers: "No legal business identity or physical accountability",
  },
];

const pricingTiers = [
  {
    name: "Rapid MVP Sprint",
    price: "₹1,50,000",
    priceRange: "₹1,50,000 - ₹3,50,000",
    timeline: "2 - 4 Weeks",
    description:
      "Ideal for ambitious startups and businesses seeking to validate a new product idea with a production-grade web or mobile MVP.",
    features: [
      "Sub-second Next.js 15 or React Native foundation",
      "Authentication & secure user role management",
      "Payment gateway integration (Razorpay / Stripe)",
      "Database architecture (PostgreSQL / Supabase)",
      "Core business workflow & user onboarding",
      "Full source code handover & deployment",
      "14 days post-launch hypercare",
    ],
    highlight: false,
  },
  {
    name: "Production SaaS Platform",
    price: "₹4,00,000",
    priceRange: "₹4,00,000 - ₹9,50,000",
    timeline: "6 - 10 Weeks",
    description:
      "Complete multi-tenant SaaS application or custom business software platform engineered for commercial scale.",
    features: [
      "Everything in Rapid MVP Sprint",
      "Multi-tenant data isolation & team permissions",
      "Advanced administrative dashboard & analytics",
      "Automated email & WhatsApp notification triggers",
      "Autonomous AI or background job processing",
      "Sub-500ms global CDN edge caching",
      "Enterprise security audit & zero-vulnerability scan",
      "30 days post-launch hypercare & warranty",
    ],
    highlight: true,
  },
  {
    name: "Enterprise Dedicated Pod",
    price: "Custom",
    priceRange: "Milestone-based Retainer",
    timeline: "Ongoing Sprint Cycles",
    description:
      "Full-stack senior engineering team dedicated to scaling your company's core platform, architecture, and features.",
    features: [
      "Dedicated Full-Stack & Systems Architects",
      "Direct Slack/Discord access to founding engineers",
      "Daily automated CI/CD builds & staging environments",
      "Continuous performance & security optimization",
      "Custom microservices & legacy migrations",
      "4-hour critical incident response SLA",
      "Weekly strategic product roadmap reviews",
    ],
    highlight: false,
  },
];

const hyderabadLocalities = [
  "HITEC City",
  "Gachibowli",
  "Madhapur",
  "Financial District",
  "Kondapur",
  "Jubilee Hills",
  "Banjara Hills",
  "Kukatpally",
  "Begumpet",
  "Secunderabad",
];

export default function SoftwareDevelopmentHyderabadPage() {
  const serviceSchema = generateLocalizedServiceSchema({
    pagePath: "/software-development-company-hyderabad",
    serviceName: "Custom Software Development Company in Hyderabad",
    serviceType: "Software Engineering, Web Development & Mobile App Studio",
    serviceCategory: "BUILD",
    description:
      "Ethisyn is Hyderabad's premier software development company, building sub-second web applications, SaaS platforms, native mobile apps, and custom enterprise software for ambitious businesses.",
    offers: [
      {
        name: "Rapid MVP Sprint",
        description: "2-4 week production web or mobile MVP build",
        price: "150000",
      },
      {
        name: "Production SaaS Platform",
        description: "6-10 week scalable multi-tenant SaaS platform",
        price: "400000",
      },
      {
        name: "Enterprise Dedicated Engineering Pod",
        description: "Continuous dedicated senior engineering team",
      },
    ],
  });

  const faqSchema = generateFAQSchema(hyderabadFaqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    {
      name: "Software Development Company in Hyderabad",
      url: `${siteConfig.url}/software-development-company-hyderabad`,
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
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-blue-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

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
              Hyderabad Tech Corridor
            </span>
            <span className="text-white/20">•</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-emerald-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              HITEC City • Gachibowli • Madhapur
            </span>
          </div>

          {/* Main Title & Value Proposition */}
          <div className="space-y-6 max-w-5xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.06]">
              Software Development Company in Hyderabad
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#D4D4D8] leading-relaxed font-light max-w-4xl">
              We engineer sub-second web platforms, scalable SaaS architectures,
              and native mobile applications for ambitious companies. Direct
              collaboration with senior domain leads—with zero junior outsourcing
              and 100% clean IP ownership.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#project-scoping"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-black font-semibold text-xs sm:text-sm uppercase tracking-widest hover:bg-zinc-200 transition-colors shadow-2xl"
            >
              <span>Schedule Architecture Call</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/[0.04] border border-white/[0.12] text-white hover:border-white/30 text-xs sm:text-sm uppercase tracking-widest transition-colors"
            >
              <span>View Verified Work</span>
              <ArrowUpRight className="w-4 h-4 text-[#A1A1AA]" />
            </Link>
          </div>

          {/* Trust Stat Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-white/[0.08]">
            <div className="p-5 sm:p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] space-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white tracking-tight">
                Sub-500ms
              </div>
              <p className="text-xs sm:text-sm text-[#A1A1AA]">
                Global Edge Latency & Core Web Vitals
              </p>
            </div>
            <div className="p-5 sm:p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] space-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white tracking-tight">
                100%
              </div>
              <p className="text-xs sm:text-sm text-[#A1A1AA]">
                In-House Senior Engineers (Zero Outsourcing)
              </p>
            </div>
            <div className="p-5 sm:p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] space-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white tracking-tight">
                2-4 Wks
              </div>
              <p className="text-xs sm:text-sm text-[#A1A1AA]">
                Rapid MVP Deployment Velocity
              </p>
            </div>
            <div className="p-5 sm:p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] space-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white tracking-tight">
                100% IP
              </div>
              <p className="text-xs sm:text-sm text-[#A1A1AA]">
                Full Ownership & Clean Repositories
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Software Capabilities Grid */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 border-b border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto space-y-16">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
              ENGINEERING ARSENAL
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight">
              Software Engineered for Performance, Scale, and Reliability
            </h2>
            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
              We do not build fragile prototypes or heavy bloated templates. Every
              application is constructed with modern type-safe stacks and
              sub-second execution speeds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="p-7 sm:p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-white group-hover:scale-105 group-hover:border-emerald-400/40 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-medium text-white tracking-tight">
                      {cap.title}
                    </h3>
                    <p className="text-sm text-[#A1A1AA] leading-relaxed font-light">
                      {cap.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-6 mt-6 border-t border-white/[0.06]">
                    {cap.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-1 rounded bg-white/[0.04] text-[#D4D4D8] border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. The Ethisyn Difference: Comparison Matrix */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 border-b border-white/[0.08] bg-[#050505]">
        <div className="max-w-[1400px] mx-auto space-y-14">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
              TRANSPARENCY & QUALITY
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight">
              Why High-Growth Companies Choose Ethisyn
            </h2>
            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
              Compare our senior-architect studio model against legacy IT body
              shops and disjointed freelancers.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/[0.08] bg-black">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-white/[0.08] bg-white/[0.02]">
                  <th className="py-5 px-6 text-xs uppercase tracking-wider text-[#71717A] font-medium w-1/4">
                    Evaluation Factor
                  </th>
                  <th className="py-5 px-6 text-xs uppercase tracking-wider text-emerald-400 font-semibold w-1/3 bg-emerald-500/[0.04]">
                    ETHISYN Studio
                  </th>
                  <th className="py-5 px-6 text-xs uppercase tracking-wider text-[#A1A1AA] font-medium w-1/4">
                    Legacy IT Agencies
                  </th>
                  <th className="py-5 px-6 text-xs uppercase tracking-wider text-[#71717A] font-medium w-1/4">
                    Freelance Developers
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-sm">
                {comparisonPoints.map((row) => (
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
                    <td className="py-5 px-6 text-[#71717A]">{row.freelancers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Local Hyderabad Tech Corridor Presence */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 border-b border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-white">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Anchored in Hyderabad, Telangana</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight">
                Direct Collaboration in the Heart of Hyderabad&apos;s Tech Capital
              </h2>
              <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed font-light">
                Whether your team is headquartered in Cyber Towers, Mindspace,
                Gachibowli Financial District, or scaling remotely, we provide
                in-person technical discovery sessions, architecture whiteboard
                reviews, and clear milestone syncs.
              </p>
              <div className="space-y-3 pt-2 text-sm text-[#D4D4D8]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>On-site sprint kickoffs in HITEC City, Madhapur & Gachibowli</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Direct phone, WhatsApp & email access to domain architects</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Strict NDA protections & enterprise confidentiality</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] space-y-6">
              <div className="text-xs uppercase tracking-widest text-[#71717A] font-semibold">
                ACTIVE HYDERABAD LOCALITIES
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
                <p>Office Consultations: By Appointment in Hyderabad</p>
                <p>Direct Inquiries: hello@ethisyn.in • +91 80961 31202</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Transparent Pricing & Engagement Models */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 border-b border-white/[0.08] bg-[#050505]">
        <div className="max-w-[1400px] mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
              TRANSPARENT INVESTMENT
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight">
              Predictable Engineering Engagement Models
            </h2>
            <p className="text-base sm:text-lg text-[#A1A1AA]">
              Zero hidden hourly fees or open-ended consulting retainers. Fixed
              milestone-based pricing with explicit deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
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
                    <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Delivery: {tier.timeline}</span>
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
                    href="#project-scoping"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
                      tier.highlight
                        ? "bg-white text-black hover:bg-emerald-400"
                        : "bg-white/[0.06] text-white hover:bg-white/[0.12] border border-white/10"
                    }`}
                  >
                    <span>Scope {tier.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Hyderabad FAQ Accordion */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 border-b border-white/[0.08]">
        <div className="max-w-[1200px] mx-auto space-y-14">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
              HYDERABAD SOFTWARE FAQS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-[#A1A1AA]">
              Key details on working with Ethisyn, our engineering standards,
              IP rights, and local collaboration.
            </p>
          </div>

          <div className="space-y-4">
            {hyderabadFaqs.map((faq, index) => (
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

      {/* 7. Lead Scoping & Architecture Call Funnel */}
      <section
        id="project-scoping"
        className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 relative overflow-hidden"
      >
        <div className="max-w-[1200px] mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 text-xs text-emerald-400 uppercase tracking-widest font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              Direct Engineering Scoping
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight">
              Let&apos;s Build Your Software in Hyderabad
            </h2>
            <p className="text-base sm:text-lg text-[#A1A1AA]">
              Share your project vision, requirements, or technical challenges.
              A founding engineer will review your inquiry and respond with an
              architectural breakdown within 4 business hours.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white/[0.02] border border-white/[0.08] p-6 sm:p-10 rounded-3xl">
            <ContactForm
              initialService="BUILD: Web & Software Engineering"
              submitLabel="Request Architecture Scoping"
              messageLabel="Tell us about the software you want to build"
              messagePlaceholder="Describe your web app, SaaS platform, mobile application, or technical specifications..."
              showWhatsAppButton={true}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
