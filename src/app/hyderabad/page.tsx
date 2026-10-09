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
  Smartphone,
  Globe,
  Database,
  Building2,
  MapPin,
  HelpCircle,
  Users,
  Bot,
  TrendingUp,
} from "lucide-react";
import { siteConfig } from "@/content/site";
import { teamContent } from "@/content/team";
import { ContactForm } from "@/components/ui/ContactForm";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import {
  generateLocalizedServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "AI Automation & Software Development Company in Hyderabad | Ethisyn",
  description:
    "Ethisyn is Hyderabad's independent AI automation and software development studio. We engineer sub-second web platforms, autonomous AI agent swarms, mobile apps, and custom business systems in HITEC City & Madhapur.",
  keywords: [
    "AI automation company in Hyderabad",
    "software development company in hyderabad",
    "AI agent development Hyderabad",
    "custom software development hyderabad",
    "web development company in hyderabad",
    "nextjs development company hyderabad",
    "saas development company hyderabad",
    "mobile app development hyderabad",
    "HITEC City software engineering",
    "Ethisyn Hyderabad",
  ],
  alternates: {
    canonical: "/hyderabad",
  },
  openGraph: {
    title: "AI Automation & Software Development Company in Hyderabad | Ethisyn",
    description:
      "Sub-second web engineering, autonomous AI agents, and custom software systems built by 11 founding domain leads in Hyderabad. Zero junior outsourcing.",
    url: `${siteConfig.url}/hyderabad`,
    type: "website",
    images: [
      {
        url: "/brand/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Ethisyn - AI Automation & Software Development Studio in Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation & Software Development Company in Hyderabad | Ethisyn",
    description:
      "Hyderabad's premier software engineering & AI studio. Sub-500ms Next.js web applications, autonomous AI agents, and production SaaS platforms.",
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
    question: "Where is Ethisyn based in Hyderabad, and how do we engage?",
    answer:
      "Ethisyn operates as an independent product engineering and AI systems studio rooted in Hyderabad, Telangana, in the HITEC City / Madhapur technology corridor. We collaborate with Hyderabad-based startups, enterprise leaders, and global clients. You can start directly with a discovery meeting via WhatsApp (+91 80961 31202) or submit a project scope through our contact form.",
  },
  {
    question: "What makes Ethisyn different from traditional IT agencies in Hyderabad?",
    answer:
      "Unlike conventional outsourcing IT firms in Hyderabad that pass your project through account managers and junior subcontracted developers, Ethisyn operates with 11 in-house senior domain leads. Your software is architected and built directly by our CTO (Mahesh Ch), Web Engineering Lead (Sandhya Chirumamilla), and AI Systems Lead (Vaibhav Pawar). We guarantee sub-second performance, transparent milestone pricing, and 100% full IP ownership.",
  },
  {
    question: "Do you build both custom software and autonomous AI automation pipelines?",
    answer:
      "Yes. Our core studio competencies unite full-stack software development (Next.js 15, React 19, Flutter, PostgreSQL) with autonomous AI systems (LangGraph multi-agent swarms, sub-800ms conversational voice bots, and document intelligence workflows). We build the complete platform from frontend UI to AI reasoning backends.",
  },
  {
    question: "Can we sign a Non-Disclosure Agreement (NDA) before sharing our project specs?",
    answer:
      "Absolutely. We execute bilateral Non-Disclosure Agreements prior to every technical discovery session. All architecture specs, trade secrets, data models, and business logic remain strictly confidential.",
  },
  {
    question: "What is your typical turnaround timeline for software and AI sprints?",
    answer:
      "We work in rapid 2-week technical sprints with weekly staging releases. Complete SaaS MVPs and custom web applications are typically shipped in 4 to 6 weeks. Production AI agent deployments are completed within 2 to 4 weeks.",
  },
];

export default function HyderabadPage() {
  const localSchema = generateLocalizedServiceSchema({
    pagePath: "/hyderabad",
    serviceName: "AI Automation & Software Development Studio in Hyderabad",
    serviceType: "Software Engineering, Web Apps & Autonomous AI Agents",
    serviceCategory: "Software Development & AI Automation",
    description:
      "Ethisyn is an independent AI automation and software development studio in Hyderabad engineering sub-second web platforms, autonomous AI agents, and custom enterprise software.",
  });

  const faqSchema = generateFAQSchema(hyderabadFaqs);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Hyderabad Studio", href: "/hyderabad" },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Header */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 px-5 sm:px-8 md:px-12 border-b border-white/[0.08] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-emerald-500/20 via-white/10 to-transparent blur-[120px] rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <Breadcrumbs items={breadcrumbs} className="mb-8" />

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            HYDERABAD, INDIA // FOUNDING STUDIO
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-light tracking-tight text-white max-w-5xl leading-[1.08] mb-8">
            AI Automation &{" "}
            <span className="italic font-serif text-white/90">Software Development</span> in Hyderabad.
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl leading-relaxed font-sans mb-10">
            Founded in Hyderabad in 2022. We engineer sub-second web applications, autonomous AI agents, and custom software systems for ambitious businesses. Built directly by 11 in-house senior domain architects with zero outsourced middle-management.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button href="#contact" variant="primary" size="lg">
              Start Project Scoping
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              href="https://wa.me/918096131202?text=Hi%20Ethisyn,%20I'm%20reaching%20out%20from%20Hyderabad%20to%20discuss%20a%20project."
              variant="secondary"
              size="lg"
              isExternal
            >
              Chat on WhatsApp (+91 80961 31202)
            </Button>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-12 border-t border-white/[0.08]">
            <div>
              <div className="text-2xl sm:text-3xl font-mono text-white">11</div>
              <div className="text-xs text-zinc-400 font-sans mt-1">Founding Domain Leads</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-mono text-white">&lt; 500ms</div>
              <div className="text-xs text-zinc-400 font-sans mt-1">Global TTFB Benchmark</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-mono text-white">0</div>
              <div className="text-xs text-zinc-400 font-sans mt-1">Outsourced Subcontractors</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-mono text-white">4 Hours</div>
              <div className="text-xs text-zinc-400 font-sans mt-1">Guaranteed Response SLA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Presence & Tech Corridor */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                Local Presence // Tech Ecosystem
              </div>
              <h2 className="text-3xl sm:text-5xl font-sans font-light text-white leading-tight">
                Rooted in Hyderabad&apos;s High-Tech Corridor.
              </h2>
              <p className="text-base text-zinc-400 leading-relaxed font-sans">
                Operating from Hyderabad, Telangana, Ethisyn serves high-growth ventures across HITEC City, Madhapur, Gachibowli, Financial District, Jubilee Hills, and Banjara Hills, alongside international clients across the US, UK, and UAE.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl border border-white/[0.08] bg-zinc-950">
                  <div className="text-sm font-sans text-white font-medium mb-1">Direct In-Person / Hybrid Sync</div>
                  <div className="text-xs text-zinc-400 leading-relaxed">
                    Collaborate directly with our domain architects in Hyderabad for architecture workshops and roadmap jams.
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-white/[0.08] bg-zinc-950">
                  <div className="text-sm font-sans text-white font-medium mb-1">Verified Studio Details</div>
                  <div className="text-xs text-zinc-400 leading-relaxed">
                    Direct phone & WhatsApp support at +91 80961 31202 with verified Google Business Profile standing.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 rounded-2xl border border-white/[0.1] bg-gradient-to-b from-zinc-950 to-black space-y-5">
              <div className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-mono text-zinc-300">STUDIO HEADQUARTERS</span>
              </div>
              <div className="space-y-1 text-sm text-zinc-300">
                <div className="font-semibold text-white">Ethisyn Digital Products Studio</div>
                <div className="text-zinc-400">HITEC City / Madhapur Corridor</div>
                <div className="text-zinc-400">Hyderabad, Telangana 500081, India</div>
                <div className="text-emerald-400 font-mono text-xs pt-1">Coordinates: 17.4483° N, 78.3915° E</div>
              </div>
              <div className="border-t border-white/[0.08] pt-4 flex flex-col gap-2 text-xs text-zinc-400">
                <div>Direct Line: <a href="tel:+918096131202" className="text-white hover:underline">+91 80961 31202</a></div>
                <div>General Inquiries: <a href="mailto:hello@ethisyn.in" className="text-white hover:underline">hello@ethisyn.in</a></div>
                <div>Google Business Profile: <a href={siteConfig.social.googleBusinessProfile} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">View Verified Profile ↗</a></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Studio Disciplines */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 border-b border-white/[0.08] bg-zinc-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
              Capabilities // Comprehensive Execution
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-light tracking-tight text-white">
              Dual Studio Competencies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-zinc-950 border border-white/[0.08] space-y-4">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-sans text-white">1. Custom Software & Web Engineering</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Next.js 15 web applications, production SaaS platforms, native iOS/Android mobile apps, and high-concurrency microservices. Zero bloated templates, 100% full code ownership.
              </p>
              <div className="space-y-2 border-t border-white/[0.06] pt-4 text-xs text-zinc-300">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-white" /> Next.js 15 App Router & React 19</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-white" /> React Native & Flutter Mobile Apps</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-white" /> Multi-Tenant SaaS & Subscription Billing</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-white" /> PostgreSQL, Redis, and Edge Cloud APIs</div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-zinc-950 border border-white/[0.08] space-y-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Bot className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-sans text-white">2. AI Agents & Business Automation</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Autonomous LangGraph multi-agent systems, sub-800ms real-time conversational voice agents, automated document & invoice extraction, and zero-leakage enterprise CRM integrations.
              </p>
              <div className="space-y-2 border-t border-white/[0.06] pt-4 text-xs text-zinc-300">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> LangGraph & Python Stateful Cyclic Graphs</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 24/7 AI Voice Bots (LiveKit / Deepgram)</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Self-Hosted n8n & Document Parsing</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 100% Private Cloud Zero-Training Guarantees</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Comparison Matrix */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 border-b border-white/[0.08]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14 text-center">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
              Studio Model // The Difference
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-light text-white">
              Why Hyderabad Companies Choose Ethisyn
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/[0.12] text-xs font-mono uppercase tracking-wider text-zinc-400">
                  <th className="py-4 px-4">Standard</th>
                  <th className="py-4 px-4 text-emerald-400">Ethisyn Studio</th>
                  <th className="py-4 px-4 text-zinc-500">Traditional IT Agencies</th>
                  <th className="py-4 px-4 text-zinc-500">Freelancers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-zinc-300">
                <tr>
                  <td className="py-4 px-4 font-medium text-white">Team Composition</td>
                  <td className="py-4 px-4 text-emerald-400 font-semibold">11 In-House Senior Leads</td>
                  <td className="py-4 px-4 text-zinc-400">Junior offshore handoffs</td>
                  <td className="py-4 px-4 text-zinc-400">Single point of failure</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-white">Page Speed Standard</td>
                  <td className="py-4 px-4 text-emerald-400 font-semibold">Sub-500ms global TTFB</td>
                  <td className="py-4 px-4 text-zinc-400">3-6s bloated WordPress</td>
                  <td className="py-4 px-4 text-zinc-400">Unpredictable</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-white">Communication SLA</td>
                  <td className="py-4 px-4 text-emerald-400 font-semibold">&lt; 4 Hours Guaranteed</td>
                  <td className="py-4 px-4 text-zinc-400">Slow account managers</td>
                  <td className="py-4 px-4 text-zinc-400">Ghosting risk</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-white">Code & IP Rights</td>
                  <td className="py-4 px-4 text-emerald-400 font-semibold">100% Unconditional Ownership</td>
                  <td className="py-4 px-4 text-zinc-400">Proprietary lock-in</td>
                  <td className="py-4 px-4 text-zinc-400">Often messy or lost</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 border-b border-white/[0.08]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-14 text-center">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
              FAQ // Hyderabad Inquiries
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-light text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {hyderabadFaqs.map((faq) => (
              <div
                key={faq.question}
                className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-white/[0.08]"
              >
                <h3 className="text-lg font-sans text-white mb-3 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-sans pl-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Funnel */}
      <section id="contact" className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              Hyderabad Studio Consultation
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-light text-white leading-tight">
              Let&apos;s build your software or AI system in Hyderabad.
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed font-sans">
              Connect directly with our leadership team (Mahesh Ch CTO, Ganesh Ch CBO). We provide an architectural plan and sprint budget within 4 business hours.
            </p>
            <div className="p-5 rounded-xl border border-white/[0.08] bg-zinc-950/60 space-y-3">
              <div className="text-xs font-mono text-zinc-400">STUDIO GUARANTEES</div>
              <div className="text-xs text-zinc-300 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Guaranteed &lt; 4 business hours response time
              </div>
              <div className="text-xs text-zinc-300 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                100% full IP and Git repository ownership
              </div>
              <div className="text-xs text-zinc-300 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Direct WhatsApp channel with founding architects
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm initialService="BUILD: Web & Software Engineering" />
          </div>
        </div>
      </section>
    </div>
  );
}
