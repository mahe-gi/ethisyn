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

    // 3. Tech stack & architecture
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
      q.includes("aws")
    ) {
      return {
        text: "Our production stack includes Next.js, React, TypeScript, Tailwind CSS, and React Native for mobile. On the backend, we run Python (FastAPI), Node.js, PostgreSQL, Supabase, and AWS/Vercel. For AI, we use LangGraph, OpenAI, Claude, and custom voice agent pipelines.",
        actionLink: { label: "Explore Technical Stack", href: "/#services" },
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

    // 5. Scheduling a call & contact
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
      q.includes("start a project")
    ) {
      return {
        text: "You can submit your project requirements via our scope form or email us at hello@ethisyn.in. A founding engineer will review your brief and schedule a direct technical consultation within 4 business hours.",
        actionLink: { label: "Schedule Technical Consultation", href: "/#contact" },
      };
    }

    // 6. AI Voice agents & automation
    if (
      q.includes("voice") ||
      q.includes("agent") ||
      q.includes("whatsapp") ||
      q.includes("automat") ||
      q.includes("bot") ||
      (q.includes("ai") && !q.includes("detail"))
    ) {
      return {
        text: "We engineer autonomous AI voice agents that speak naturally to answer customer calls and book appointments, custom WhatsApp workflows, and multi-agent systems that automate repetitive business operations 24/7.",
        actionLink: { label: "View AI & Automations", href: "/#services" },
      };
    }

    // 7. Proprietary products / R&D
    if (
      q.includes("product") ||
      q.includes("r&d") ||
      q.includes("career") ||
      q.includes("synapse") ||
      q.includes("pulse") ||
      q.includes("internal tool")
    ) {
      return {
        text: "We are developing 3 proprietary products in active R&D: 1) Student & Job Career Suite (AI voice mock interviews & ATS resume optimizer), 2) Synapse Operations Hub (GST invoicing & lead hub), and 3) PulseEngine (Local Google Maps SEO copilot).",
        actionLink: { label: "Explore Products in R&D", href: "/#products" },
      };
    }

    // 8. Why Ethisyn vs agencies
    if (
      q.includes("why") ||
      q.includes("agency") ||
      q.includes("differen") ||
      q.includes("outsource") ||
      q.includes("middlemen")
    ) {
      return {
        text: "Unlike traditional agencies that pass you through sales middlemen and outsource to mystery freelancers, Ethisyn gives you direct access to 11 founding engineers in Hyderabad. We deliver sub-second performance, clean code you own 100%, and rapid 2-week sprints.",
        actionLink: { label: "Read Our Manifesto", href: "/#manifesto" },
      };
    }

    // 9. Core services overview (catch-all for services)
    if (
      q.includes("service") ||
      q.includes("what do you do") ||
      q.includes("capabilities") ||
      q.includes("build") ||
      q.includes("website") ||
      q.includes("app") ||
      q.includes("seo") ||
      q.includes("design")
    ) {
      return {
        text: "Ethisyn offers 6 core capabilities: high-speed web platforms (Next.js), iOS & Android apps (React Native), 24/7 AI voice agents & WhatsApp automations, digital growth & local SEO, Figma UI/UX design systems, and cloud infrastructure with 24/7 maintenance.",
        actionLink: { label: "Explore All Services", href: "/#services" },
      };
    }

    // Default helpful fallback
    return {
      text: "I'm here to answer any questions about Ethisyn. I can help with our engineering services, pricing models, project timelines, tech stack, or connecting you directly with our founding engineers in Hyderabad.",
      actionLink: { label: "Start a Consultation", href: "/#contact" },
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
