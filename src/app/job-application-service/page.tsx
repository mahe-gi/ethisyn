import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  XCircle,
  MessageSquare,
  FileText,
  UserCheck,
  ShieldCheck,
  Clock,
  Briefcase,
  Sparkles,
  ChevronRight,
  HelpCircle,
  Layers,
} from "lucide-react";
import { jobServiceContent } from "@/content/job-service";
import { siteConfig } from "@/content/site";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Job Application Service | We Apply For You With Custom Cover Letters | ETHISYN",
  description:
    "We manually apply to jobs on your behalf with custom resumes and tailored cover letters in under 24 hours. Talk to your dedicated associate every day in team chat. Directed by Patan Rabiya.",
  alternates: {
    canonical: "/job-application-service",
  },
  openGraph: {
    title: "Job Application Service | We Apply For You | ETHISYN",
    description:
      "We manually apply to jobs on your behalf with custom resumes and tailored cover letters in under 24 hours. Talk to your dedicated associate every day in team chat.",
    url: "https://ethisyn.in/job-application-service",
    type: "website",
  },
};

export default function JobApplicationServicePage() {
  const { hero, leadership, corePillars, comparison, howItWorks, tiers, faqs } =
    jobServiceContent;

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* 1. Hero Section */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 px-5 sm:px-8 md:px-12 border-b border-white/[0.08] overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-emerald-500/[0.04] rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto space-y-10 sm:space-y-12 relative z-10">
          {/* Badge Kicker */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-medium text-emerald-400">
              {hero.kicker}
            </span>
            <span className="text-white/20">•</span>
            <span className="text-xs uppercase tracking-wider text-[#A1A1AA]">
              100% MANUAL HUMAN CARE // ZERO BOTS
            </span>
          </div>

          {/* Main Title & Subtitle */}
          <div className="space-y-6 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.05]">
              {hero.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#D4D4D8] leading-relaxed font-light">
              {hero.subtitle}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#onboarding-form"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-black font-semibold text-xs sm:text-sm uppercase tracking-widest hover:bg-emerald-400 transition-colors shadow-2xl"
            >
              <span>{hero.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/[0.04] border border-white/[0.12] text-white hover:border-white/30 text-xs sm:text-sm uppercase tracking-widest transition-colors"
            >
              <span>Explore The Process</span>
              <ArrowUpRight className="w-4 h-4 text-[#A1A1AA]" />
            </a>
          </div>

          {/* Core Stat Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-white/[0.08]">
            {hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="p-5 sm:p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] space-y-1"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-emerald-400 font-medium">
                  {stat.label}
                </div>
                <div className="text-xs text-[#71717A]">{stat.descriptor}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Executive Leadership Spotlight: Patan Rabiya */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 border-b border-white/[0.08] bg-[#070707]">
        <div className="max-w-[1400px] mx-auto">
          <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#121212] via-[#0c0c0c] to-[#070707] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Leader Portrait */}
              <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left space-y-5">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 shrink-0 rounded-full overflow-hidden border border-white/20 bg-neutral-900 shadow-2xl">
                  <Image
                    src={leadership.leadImage}
                    alt={leadership.leadName}
                    fill
                    sizes="176px"
                    className="object-cover object-center rounded-full"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-medium text-white tracking-tight">
                    {leadership.leadName}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-emerald-400 font-medium">
                    {leadership.leadRole}
                  </p>
                  <p className="text-xs text-[#71717A] pt-1">
                    Directing Search Operations & Associate Training in Detail
                  </p>
                </div>
              </div>

              {/* Leadership Philosophy */}
              <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#71717A] font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Executive Quality Charter</span>
                </div>
                <blockquote className="text-xl sm:text-2xl md:text-3xl text-white font-normal leading-snug tracking-tight">
                  &ldquo;{leadership.quote}&rdquo;
                </blockquote>
                <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed font-light">
                  {leadership.leadBio}
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-white">
                    Direct Associate Supervision
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-white">
                    Custom Cover Letter Quality Checks
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-white">
                    Bi-Weekly Strategy Calibration
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 6 Core Service Pillars */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 border-b border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto space-y-14">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-medium text-emerald-400 block">
              WHAT WE PROVIDE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight">
              An experienced associate in your place. Real daily conversations.
            </h2>
            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed font-light">
              We handle the entire operational grind of your job hunt with transparency, care, and continuous daily communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {corePillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="p-8 rounded-3xl border border-white/[0.08] bg-[#090909] hover:border-white/20 transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-emerald-400">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-white/50 px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08]">
                      {pillar.highlight}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium text-white tracking-tight leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Auto-Apply Bots Fail vs. Why Human Care Wins */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 border-b border-white/[0.08] bg-[#060606]">
        <div className="max-w-[1400px] mx-auto space-y-12">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-medium text-emerald-400 block">
              WHY HUMANS BEAT BOTS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight">
              Why we never auto-apply with bots (and why you shouldn&apos;t either).
            </h2>
            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed font-light">
              Automated extensions and spam scripts destroy candidate credibility. Here is how allocating a real, experienced human associate changes everything.
            </p>
          </div>

          <div className="border border-white/[0.1] rounded-3xl overflow-hidden bg-[#0a0a0a]">
            <div className="grid grid-cols-12 bg-white/[0.03] border-b border-white/[0.08] p-5 sm:p-6 text-xs uppercase tracking-wider font-medium text-[#71717A]">
              <div className="col-span-12 sm:col-span-3">Aspect</div>
              <div className="col-span-12 sm:col-span-4 mt-2 sm:mt-0 text-red-400/80">
                Automated AI Bots & Extensions
              </div>
              <div className="col-span-12 sm:col-span-5 mt-2 sm:mt-0 text-emerald-400">
                ETHISYN Dedicated Human Associate
              </div>
            </div>

            <div className="divide-y divide-white/[0.06]">
              {comparison.map((c) => (
                <div
                  key={c.feature}
                  className="grid grid-cols-12 p-5 sm:p-6 text-sm gap-4 items-start hover:bg-white/[0.01] transition-colors"
                >
                  <div className="col-span-12 sm:col-span-3 font-medium text-white">
                    {c.feature}
                  </div>
                  <div className="col-span-12 sm:col-span-4 text-xs sm:text-[13px] text-[#A1A1AA] flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>{c.autoBots}</span>
                  </div>
                  <div className="col-span-12 sm:col-span-5 text-xs sm:text-[13px] text-[#EDEDED] flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="font-light">{c.ethisynHuman}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. How It Works: 4-Stage Process */}
      <section
        id="how-it-works"
        className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 border-b border-white/[0.08]"
      >
        <div className="max-w-[1400px] mx-auto space-y-14">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-medium text-emerald-400 block">
              THE WORKFLOW
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight">
              How we take over your applications in 4 simple steps.
            </h2>
            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed font-light">
              From initial strategy intake to daily submission proof, here is exactly how your job search is managed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step) => (
              <div
                key={step.step}
                className="p-7 rounded-3xl border border-white/[0.08] bg-[#080808] flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <span className="text-xs font-semibold text-emerald-400 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 inline-block">
                    STEP {step.step}
                  </span>
                  <h3 className="text-xl font-medium text-white tracking-tight leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] space-y-2">
                  {step.details.map((detail) => (
                    <div
                      key={detail}
                      className="flex items-center gap-2 text-[11px] text-[#EDEDED]"
                    >
                      <span className="w-1 h-1 rounded-full bg-emerald-400 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Program Tiers & Applications Packages */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 border-b border-white/[0.08] bg-[#070707]">
        <div className="max-w-[1400px] mx-auto space-y-14">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-medium text-emerald-400 block">
              ENGAGEMENT TIERS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight">
              Select your application velocity.
            </h2>
            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed font-light">
              Every tier includes your dedicated experienced associate, custom cover letters, daily Team Chat, and screenshot proof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={`p-8 sm:p-10 rounded-3xl border flex flex-col justify-between space-y-8 transition-all ${
                  tier.recommended
                    ? "bg-gradient-to-b from-[#141414] via-[#0d0d0d] to-[#070707] border-white/40 shadow-2xl shadow-emerald-950/20"
                    : "bg-[#090909] border-white/[0.08] hover:border-white/20"
                }`}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest font-medium text-emerald-400">
                      {tier.name}
                    </span>
                    {tier.recommended && (
                      <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-emerald-400 text-black">
                        RECOMMENDED
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <div className="text-3xl sm:text-4xl font-medium text-white tracking-tight">
                      {tier.applicationsCount}
                    </div>
                    <p className="text-xs sm:text-sm text-[#A1A1AA] font-light">
                      {tier.tagline}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.08] space-y-3">
                    <span className="text-[11px] uppercase tracking-wider text-[#71717A] block font-medium">
                      WHAT IS INCLUDED:
                    </span>
                    {tier.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-2.5 text-xs text-[#E4E4E7]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#onboarding-form"
                  className={`w-full py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-all ${
                    tier.recommended
                      ? "bg-white text-black hover:bg-emerald-400 shadow-xl"
                      : "bg-white/[0.05] border border-white/[0.1] text-white hover:bg-white hover:text-black"
                  }`}
                >
                  <span>Select {tier.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Need-to-Know FAQ Section */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 border-b border-white/[0.08]">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest font-medium text-emerald-400 block">
              QUESTIONS & ANSWERS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight">
              Frequently asked questions.
            </h2>
          </div>

          <div className="divide-y divide-white/[0.08] border-t border-b border-white/[0.08]">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="py-7 group cursor-pointer transition-colors"
              >
                <summary className="text-lg sm:text-xl font-medium text-white list-none flex items-center justify-between gap-4">
                  <span>{faq.question}</span>
                  <span className="text-[#71717A] group-open:rotate-45 transition-transform text-2xl font-light">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm sm:text-base text-[#A1A1AA] leading-relaxed font-light max-w-3xl">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Onboarding Intake Form Section */}
      <section
        id="onboarding-form"
        className="py-24 sm:py-32 px-5 sm:px-8 md:px-12 relative overflow-hidden"
      >
        <div className="max-w-[1200px] mx-auto space-y-10 sm:space-y-12">
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-medium text-emerald-400 block">
              FAST-TRACK ONBOARDING
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight">
              Ready to stop filling job applications? Let us take over.
            </h2>
            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed font-light max-w-2xl mx-auto">
              Tell us your target roles and preferences. We will review your profile and match you with your dedicated associate within 4 business hours.
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hi! I'm interested in the Job Application & Reverse Recruiting Service. Can we discuss assigning a dedicated associate for my search?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500/50 text-xs sm:text-sm uppercase tracking-widest font-semibold transition-all group shadow-lg"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Instant WhatsApp Consultation ({siteConfig.contactPhone})</span>
              </a>
            </div>
          </div>

          <div className="max-w-2xl mx-auto p-8 sm:p-12 rounded-3xl border border-white/15 bg-gradient-to-b from-[#111111] via-[#090909] to-black shadow-2xl">
            <div className="pb-6 mb-6 border-b border-white/[0.08] text-center sm:text-left">
              <h3 className="text-lg font-medium text-white">
                Or Submit Your Details Below
              </h3>
              <p className="text-xs text-[#A1A1AA] mt-1">
                Tell us your target roles or link your resume. We will respond within 4 business hours.
              </p>
            </div>
            <ContactForm
              initialService="Job Application & Reverse Recruiting Service"
              submitLabel="Submit Application Details"
              messageLabel="Target roles, industries, or resume link"
              messagePlaceholder="e.g. Senior Full-Stack / Frontend roles in Hyderabad or Remote. Resume link: https://..."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
