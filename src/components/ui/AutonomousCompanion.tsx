"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, Send, ArrowUpRight, RotateCcw } from "lucide-react";
import { TrackingMascot } from "./TrackingMascot";
import { siteConfig } from "@/content/site";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  actionLink?: {
    label: string;
    href: string;
  };
  timestamp: string;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "welcome-1",
    sender: "bot",
    text: "Hi! How can I help you today? Ask me anything about our services, pricing, timelines, tech stack, or team in Hyderabad.",
    timestamp: "Just now",
  },
];

export function AutonomousCompanion() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Auto-scroll chat to latest message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 150);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handle ESC key to close and restore focus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Direct, helpful Q&A knowledge engine
  const generateBotResponse = (query: string): { text: string; actionLink?: { label: string; href: string } } => {
    const q = query.toLowerCase().trim();

    // 1. Pricing models & cost
    if (
      q.includes("price") ||
      q.includes("pricing") ||
      q.includes("cost") ||
      q.includes("rate") ||
      q.includes("fee") ||
      q.includes("how much") ||
      q.includes("budget") ||
      q.includes("quote") ||
      q.includes("charge") ||
      q.includes("retainer")
    ) {
      return {
        text: "We provide transparent, milestone-based pricing for custom builds and flexible monthly retainers for ongoing engineering and automations. Every project begins with a clear scope breakdown and fixed milestones with zero hidden fees.",
        actionLink: { label: "Request a Project Scope & Quote", href: "/#contact" },
      };
    }

    // 2. Timelines, speed & SLAs
    if (
      q.includes("timeline") ||
      q.includes("turnaround") ||
      q.includes("how long") ||
      q.includes("sprint") ||
      q.includes("speed") ||
      q.includes("fast") ||
      q.includes("sla") ||
      q.includes("load time")
    ) {
      return {
        text: "Speed is our core engineering metric: all our sites and apps load in < 1 second. We ship in rapid 2-week technical sprints with weekly testable builds. Typical websites and MVPs launch in 2 to 6 weeks, and client consultations receive replies within 4 business hours.",
        actionLink: { label: "View Our Sprint Process", href: "/#process" },
      };
    }

    // 3. Tech stack & architecture (Tech-agnostic)
    if (
      q.includes("tech stack") ||
      q.includes("stack") ||
      q.includes("technolog") ||
      q.includes("framework") ||
      q.includes("react") ||
      q.includes("next.js") ||
      q.includes("nextjs") ||
      q.includes("python") ||
      q.includes("typescript") ||
      q.includes("database") ||
      q.includes("cloud") ||
      q.includes("aws") ||
      q.includes("go") ||
      q.includes("node") ||
      q.includes("mobile") ||
      q.includes("flutter")
    ) {
      return {
        text: "We are architecture-first and tech-agnostic: we don't force a single tool. We engineer on React, Vue, Next.js, Node.js, Python (FastAPI), Go, Flutter, React Native, and deploy on AWS, GCP, Azure, and Cloudflare. We pick the exact architecture your business needs.",
        actionLink: { label: "Explore Our Architecture", href: "/#services" },
      };
    }

    // 4. Founding engineers & Hyderabad team
    if (
      q.includes("team") ||
      q.includes("founder") ||
      q.includes("who are you") ||
      q.includes("who runs") ||
      q.includes("hyderabad") ||
      q.includes("engineers") ||
      q.includes("builders") ||
      q.includes("location") ||
      q.includes("where are you")
    ) {
      return {
        text: "Ethisyn was established in Hyderabad, India in 2022. We are an independent studio of 11 in-house founding engineers, designers, and growth partners. You collaborate directly with our builders with 100% in-house execution and zero outsourced middlemen.",
        actionLink: { label: "Meet the Founding Team", href: "/team" },
      };
    }

    // 5. Scheduling a call & contact / WhatsApp
    if (
      q.includes("call") ||
      q.includes("contact") ||
      q.includes("schedule") ||
      q.includes("meeting") ||
      q.includes("book") ||
      q.includes("talk") ||
      q.includes("consult") ||
      q.includes("email") ||
      q.includes("hire") ||
      q.includes("start a project") ||
      q.includes("phone") ||
      q.includes("number")
    ) {
      return {
        text: "You can reach us directly on WhatsApp at +91 80961 31202 or email hello@ethisyn.in. Our founding team responds within 4 business hours with direct technical advice.",
        actionLink: { label: "Chat on WhatsApp (+91 80961 31202)", href: `https://wa.me/${siteConfig.whatsappNumber}` },
      };
    }

    // 6. Reverse Recruiting / Job Application Service
    if (
      q.includes("job") ||
      q.includes("career") ||
      q.includes("resume") ||
      q.includes("reverse recruit") ||
      q.includes("apply") ||
      q.includes("application") ||
      q.includes("interview")
    ) {
      return {
        text: "Our Job Application & Reverse Recruiting Service assigns you a dedicated talent associate who tailors your resume keywords, identifies verified roles, and submits 150+ to 300+ applications monthly so you can focus 100% on interview prep.",
        actionLink: { label: "Explore Reverse Recruiting", href: "/job-application-service" },
      };
    }

    // 7. AI Voice agents & automation (AUTOMATE pillar)
    if (
      q.includes("voice") ||
      q.includes("agent") ||
      q.includes("whatsapp") ||
      q.includes("automat") ||
      q.includes("bot") ||
      (q.includes("ai") && !q.includes("detail"))
    ) {
      return {
        text: "Under our AUTOMATE pillar, we engineer autonomous AI agents, 24/7 inbound voice triage, CRM synchronizations, and intelligent data extraction that eliminate 15+ hours of manual operations every week.",
        actionLink: { label: "Explore AI & Automation", href: "/#services" },
      };
    }

    // 8. Digital marketing & growth (GROW pillar)
    if (
      q.includes("marketing") ||
      q.includes("seo") ||
      q.includes("ad") ||
      q.includes("meta") ||
      q.includes("google ad") ||
      q.includes("growth")
    ) {
      return {
        text: "Under our GROW pillar, we engineer full-funnel acquisition: Local SEO and Google Business dominance, high-intent Google Search Ads, precision Meta campaigns with server-side CAPI tracking, and sub-second landing pages.",
        actionLink: { label: "Explore Growth Marketing", href: "/#services" },
      };
    }

    // 9. Video & Creative content (CREATE pillar)
    if (
      q.includes("video") ||
      q.includes("create") ||
      q.includes("reel") ||
      q.includes("content") ||
      q.includes("motion")
    ) {
      return {
        text: "Under our CREATE pillar, we produce high-retention video: technical product walkthroughs, short-form Reels and Shorts, cinematic brand promotional films, and performance ad creatives.",
        actionLink: { label: "Explore Creative Production", href: "/#services" },
      };
    }

    // 10. Core services overview (The 4 Pillars)
    if (
      q.includes("service") ||
      q.includes("what do you do") ||
      q.includes("capabilities") ||
      q.includes("build")
    ) {
      return {
        text: "Ethisyn operates across 4 core pillars: 1) BUILD (Web, Mobile & SaaS), 2) AUTOMATE (AI Agents & Operations), 3) GROW (Local SEO & Performance Marketing), and 4) CREATE (Video & Content), plus our dedicated Reverse Recruiting Service.",
        actionLink: { label: "Explore All Pillars", href: "/#services" },
      };
    }

    // Default helpful fallback
    return {
      text: "I'm Syn, your Ethisyn studio assistant! I can help you with our 4 pillars (BUILD, AUTOMATE, GROW, CREATE), Reverse Recruiting service, pricing models, timelines, or connecting you directly with our founding team on WhatsApp.",
      actionLink: { label: "Chat on WhatsApp (+91 80961 31202)", href: `https://wa.me/${siteConfig.whatsappNumber}` },
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputValue.trim();
    if (!text) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text,
      timestamp: "Just now",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const response = generateBotResponse(text);
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: response.text,
        actionLink: response.actionLink,
        timestamp: "Just now",
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 450);
  };

  return (
    <>
      {/* Floating Mascot Trigger */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center select-none">
          {/* Status Pill */}
          <div className="mb-1.5 px-2.5 py-0.5 rounded-full bg-brand-black/95 border border-brand-border shadow-xl backdrop-blur-md flex items-center gap-1.5 pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-white animate-pulse" />
            <span className="text-[9px] uppercase tracking-wider text-brand-offwhite font-medium">
              Ask Syn
            </span>
          </div>

          <button
            ref={triggerRef}
            type="button"
            onClick={() => setIsOpen(true)}
            className="relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-white/50 rounded-full transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Open Ethisyn studio assistant"
          >
            <TrackingMascot
              size={116}
              showShadow={true}
              showGlow={true}
              interactive={true}
            />
          </button>
        </div>
      )}

      {/* Assistant Dialog Window */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Ethisyn Studio Assistant"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[380px] sm:w-[420px] max-w-[calc(100vw-32px)] h-[560px] max-h-[calc(100vh-80px)] flex flex-col rounded-3xl border border-brand-border bg-brand-black/95 backdrop-blur-2xl shadow-2xl overflow-hidden select-none animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-brand-border bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center relative flex-shrink-0">
                <TrackingMascot
                  size={42}
                  showShadow={false}
                  showGlow={false}
                  interactive={true}
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-brand-white">
                    Ethisyn Assistant
                  </h3>
                  <span className="inline-flex items-center gap-1 text-[9px] uppercase px-1.5 py-0.5 rounded-full bg-white/[0.06] text-brand-offwhite border border-brand-border font-medium">
                    <span className="w-1 h-1 rounded-full bg-brand-white" />
                    Online
                  </span>
                </div>
                <p className="text-[10px] text-brand-faint uppercase tracking-wider">
                  Direct Technical Guidance
                </p>
              </div>
            </div>

            {/* Header Controls */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setMessages(INITIAL_MESSAGES)}
                title="Reset conversation"
                className="p-1.5 text-brand-faint hover:text-brand-white rounded-lg hover:bg-white/[0.06] transition-colors"
                aria-label="Reset conversation"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  triggerRef.current?.focus();
                }}
                title="Close chat (Esc)"
                className="p-1.5 text-brand-faint hover:text-brand-white rounded-lg hover:bg-white/[0.06] transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Conversation History */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs scrollbar-thin scrollbar-thumb-white/10">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-brand-white text-brand-black font-medium rounded-tr-sm shadow-sm"
                      : "bg-white/[0.04] border border-brand-border text-brand-offwhite rounded-tl-sm shadow-sm"
                  }`}
                >
                  <p>{msg.text}</p>

                  {/* Attached Action Link */}
                  {msg.actionLink && (
                    <div className="mt-2.5 pt-2 border-t border-brand-border/40">
                      <a
                        href={msg.actionLink.href}
                        onClick={() => setIsOpen(false)}
                        className="inline-flex items-center gap-1.5 text-[11px] text-brand-white hover:text-brand-offwhite underline-offset-4 hover:underline font-medium transition-colors"
                      >
                        <span>{msg.actionLink.label}</span>
                        <ArrowUpRight className="w-3 h-3 text-brand-muted" />
                      </a>
                    </div>
                  )}
                </div>

                <span className="text-[9px] text-brand-faint mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-white/[0.04] border border-brand-border w-16">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-white/80 animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-1.5 h-1.5 rounded-full bg-brand-white/80 animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-1.5 h-1.5 rounded-full bg-brand-white/80 animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Bottom Chat Input Bar */}
          <div className="p-3 border-t border-brand-border bg-white/[0.02]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about services, pricing, timelines, stack..."
                className="flex-1 bg-white/[0.04] border border-brand-border hover:border-brand-border-strong focus:border-brand-white/60 focus:ring-1 focus:ring-brand-white/20 rounded-xl px-3.5 py-2.5 text-xs text-brand-white placeholder:text-brand-faint focus:outline-none transition-all"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="p-2.5 rounded-xl bg-brand-white text-brand-black hover:bg-brand-offwhite disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 transition-all"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            <div className="mt-2 flex items-center justify-between text-[9px] text-brand-faint px-1">
              <span>Direct partner consultation</span>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="hover:text-brand-white transition-colors"
              >
                {siteConfig.contactEmail}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
