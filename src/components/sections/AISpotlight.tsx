import React from "react";
import { SectionLabel } from "../ui/SectionLabel";
import { Button } from "../ui/Button";

export function AISpotlight() {
  return (
    <section
      id="ai"
      className="py-24 md:py-36 px-5 sm:px-8 md:px-12 border-b border-brand-border bg-brand-black"
      aria-labelledby="ai-heading"
    >
      <div className="max-w-[1520px] mx-auto">
        <SectionLabel index="03" title="AI & Automation" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <h2
              id="ai-heading"
              className="font-sans font-medium text-brand-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05]"
            >
              Put your everyday tasks on{" "}
              <span className="font-serif italic font-normal text-brand-offwhite">
                autopilot.
              </span>
            </h2>

            <p className="font-sans text-brand-muted text-base sm:text-lg md:text-xl font-light leading-relaxed">
              Imagine an employee who never sleeps, never forgets to follow up with a lead, and answers phone calls within 2 seconds. That is what our AI agents and automations do for your business.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-brand-white rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-sans text-base font-medium text-brand-white">AI Voice Agents That Sound Human</h4>
                  <p className="font-sans text-sm text-brand-muted font-light leading-relaxed">
                    Answers incoming calls, answers pricing and service questions, and schedules appointments right on your Google Calendar.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-brand-white rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-sans text-base font-medium text-brand-white">WhatsApp & Website Chatbots</h4>
                  <p className="font-sans text-sm text-brand-muted font-light leading-relaxed">
                    Trained on your private documents and catalogs so they reply accurately without making things up.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-brand-white rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-sans text-base font-medium text-brand-white">End-to-End Workflow Automations</h4>
                  <p className="font-sans text-sm text-brand-muted font-light leading-relaxed">
                    Connects your forms, WhatsApp, CRM, and email. When a new customer books, an invoice is generated and your team is notified on Slack instantly.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button href="/#contact" variant="primary" size="md" showArrow>
                Automate your business
              </Button>
            </div>
          </div>

          {/* Right Column: Live Simulated Agent Terminal (6 cols) */}
          <div className="lg:col-span-6">
            <div className="p-6 md:p-8 border border-brand-border bg-white/[0.02] font-mono text-xs space-y-4">
              {/* Terminal header */}
              <div className="flex items-center justify-between border-b border-brand-border/40 pb-3 text-brand-faint text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-white/80 animate-pulse-subtle" />
                  <span>AUTONOMOUS AGENT MONITOR</span>
                </div>
                <span>STATUS: 24/7 ACTIVE</span>
              </div>

              {/* Event Stream */}
              <div className="space-y-3 font-mono text-xs pt-2">
                <div className="p-3 bg-white/[0.02] border border-brand-border/30 space-y-1">
                  <div className="flex justify-between text-brand-faint text-[10px]">
                    <span>11:42:08 AM • INBOUND CALL</span>
                    <span className="text-brand-white">COMPLETED</span>
                  </div>
                  <p className="text-brand-offwhite">
                    Agent-Voice responded to client: Answered pricing questions for web application development.
                  </p>
                </div>

                <div className="p-3 bg-white/[0.02] border border-brand-border/30 space-y-1">
                  <div className="flex justify-between text-brand-faint text-[10px]">
                    <span>11:42:15 AM • CALENDAR SYNC</span>
                    <span className="text-brand-white">CONFIRMED</span>
                  </div>
                  <p className="text-brand-offwhite">
                    Discovery call scheduled: Thursday at 3:00 PM IST.
                  </p>
                </div>

                <div className="p-3 bg-white/[0.02] border border-brand-border/30 space-y-1">
                  <div className="flex justify-between text-brand-faint text-[10px]">
                    <span>11:42:19 AM • CRM & WHATSAPP</span>
                    <span className="text-brand-white">DISPATCHED</span>
                  </div>
                  <p className="text-brand-offwhite">
                    New lead added to CRM. WhatsApp confirmation and calendar invite sent to client phone.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex justify-between items-center text-[10px] text-brand-faint border-t border-brand-border/40">
                <span>TOTAL MANUAL TIME SAVED: ~35 HRS/WEEK</span>
                <span>ZERO MISSED CALLS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
