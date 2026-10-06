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

// Subtle, pleasant sound effect when opening the assistant
function playOpenSound() {
  try {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    if (ctx.state === "suspended") {
      ctx.resume();
    }
    const now = ctx.currentTime;

    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();

    osc1.type = "sine";
    osc2.type = "sine";

    osc1.frequency.setValueAtTime(587.33, now); // D5
    osc1.frequency.exponentialRampToValueAtTime(880, now + 0.08); // A5

    osc2.frequency.setValueAtTime(880, now + 0.03);
    osc2.frequency.exponentialRampToValueAtTime(1174.66, now + 0.14); // D6

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.04, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.2);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(ctx.destination);

    osc1.start(now);
    osc2.start(now + 0.03);
    osc1.stop(now + 0.2);
    osc2.stop(now + 0.2);
  } catch {
    // Graceful fallback for non-audio or restricted environments
  }
}

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

  // Direct, intelligent Q&A knowledge engine with robust word boundary matching
  const generateBotResponse = (query: string): { text: string; actionLink?: { label: string; href: string } } => {
    const q = query.toLowerCase().trim();

    // Word boundary helper to prevent accidental substring collisions (e.g. "whatsapp" matching "ats")
    const hasWord = (...words: string[]) => {
      return words.some((w) => {
        const escaped = w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        return new RegExp(`(?:^|[^a-zA-Z0-9])${escaped}(?:$|[^a-zA-Z0-9])`, "i").test(q);
      });
    };

    const hasPhrase = (...phrases: string[]) => {
      return phrases.some((p) => q.includes(p.toLowerCase()));
    };

    // 1. Direct Contact, WhatsApp, Phone, Call, Email, Meeting (Highest Priority)
    if (
      hasWord("whatsapp", "wa", "call", "phone", "contact", "email", "mail", "number", "reach", "consultation") ||
      hasPhrase(
        "connect on whatsapp",
        "chat on whatsapp",
        "on whatsapp",
        "phone number",
        "talk to",
        "schedule a call",
        "book a call",
        "chat with someone",
        "talk to someone",
        "how can i contact",
        "how to contact"
      )
    ) {
      return {
        text: "You can connect directly with our founding team on WhatsApp at +91 80961 31202 or via email at hello@ethisyn.in. We guarantee a direct technical response within 4 business hours.",
        actionLink: { label: "Chat on WhatsApp (+91 80961 31202)", href: `https://wa.me/${siteConfig.whatsappNumber}` },
      };
    }

    // 2. Casual Greetings & Salutations (hi, hello, hey, he, sup, yo, etc.)
    if (
      q === "hi" ||
      q === "hello" ||
      q === "hey" ||
      q === "he" ||
      q === "yo" ||
      q === "sup" ||
      q === "hola" ||
      q === "namaste" ||
      q.startsWith("hi ") ||
      q.startsWith("hello ") ||
      q.startsWith("hey ") ||
      hasPhrase("good morning", "good afternoon", "good evening")
    ) {
      return {
        text: "Hello! I am Syn, your Ethisyn studio assistant. I can answer questions about our services across BUILD, AUTOMATE, GROW, and CREATE, our Reverse Recruiting service, tech architecture, pricing, or direct WhatsApp inquiries. What can I help you with?",
        actionLink: { label: "Chat on WhatsApp (+91 80961 31202)", href: `https://wa.me/${siteConfig.whatsappNumber}` },
      };
    }

    // 3. Friendly check-in & small talk ("how are you", "what's up")
    if (
      hasPhrase(
        "how are you",
        "how are u",
        "how r u",
        "how do you do",
        "how's it going",
        "hows it going",
        "whats up",
        "what's up"
      )
    ) {
      return {
        text: "I am operating at full speed. Ready to assist with software engineering, AI automation, growth marketing, or career search. What would you like to know?",
        actionLink: { label: "Explore Our Services", href: "/#services" },
      };
    }

    // 4. Identity ("who are you", "what is your name", "what can you do")
    if (
      hasPhrase("who are you", "what is your name", "what's your name", "your name", "who made you") ||
      q === "syn"
    ) {
      return {
        text: "I am Syn, Ethisyn's studio mascot and assistant. I help visitors navigate our engineering, AI automation, growth marketing, and reverse recruiting services.",
        actionLink: { label: "Meet the Team in Hyderabad", href: "/team" },
      };
    }

    // 5. "What can you do" / Help / Menu
    if (
      hasPhrase("what can you do", "what do you do") ||
      hasWord("help", "menu", "options")
    ) {
      return {
        text: "I can assist you with:\n- Our 4 Pillars: BUILD, AUTOMATE, GROW, CREATE\n- Reverse Recruiting: dedicated job application service\n- Architecture: tech-agnostic engineering\n- Timelines & Pricing: 2-week sprints, milestone pricing\n- Hyderabad Studio & Team\n- Direct WhatsApp: +91 80961 31202",
        actionLink: { label: "Chat on WhatsApp (+91 80961 31202)", href: `https://wa.me/${siteConfig.whatsappNumber}` },
      };
    }

    // 6. Reverse Recruiting / Job Application Service
    if (
      hasPhrase(
        "reverse recruit",
        "reverse recruiting",
        "job application service",
        "job search",
        "ats black hole",
        "apply for jobs for me",
        "apply to jobs for me",
        "apply on my behalf"
      ) ||
      hasWord("ats", "workday", "resume", "cv", "interview", "interviews")
    ) {
      return {
        text: "Tired of ATS black holes? In our Reverse Recruiting Service, we assign you a dedicated talent associate who tailors your resume keywords, curates verified roles, and submits 150+ to 300+ applications monthly on your behalf. You focus 100% on interview prep.",
        actionLink: { label: "Fast-Track Job Search Onboarding", href: "/job-application-service" },
      };
    }

    // 7. Careers & Hiring AT Ethisyn (Open roles)
    if (
      hasPhrase("careers at ethisyn", "jobs at ethisyn", "work at ethisyn", "join ethisyn", "open positions", "open roles", "hire me") ||
      hasWord("hiring", "internship", "internships") ||
      (hasWord("career", "careers") && !hasWord("service")) ||
      (hasWord("job", "jobs") && hasWord("ethisyn", "team", "engineer", "designer", "opening", "openings"))
    ) {
      return {
        text: "We are always looking for high-craft builders! Open roles include Senior Full-Stack Engineer, AI & Automation Systems Architect, Growth & Performance Specialist, and Creative Director. Apply directly at careers@ethisyn.in.",
        actionLink: { label: "View Open Positions at Ethisyn", href: "/careers" },
      };
    }

    // 8. Pricing, Cost & Retainers
    if (
      hasWord("price", "prices", "pricing", "cost", "costs", "fee", "fees", "rate", "rates", "budget", "quote", "charge", "retainer", "retainers") ||
      hasPhrase("how much", "how expensive")
    ) {
      return {
        text: "We provide transparent, milestone-based pricing for custom builds and flexible monthly retainers for ongoing engineering and automations. Every project begins with a clear scope breakdown and fixed milestones with zero hidden fees.",
        actionLink: { label: "Request a Project Scope & Quote", href: "/#contact" },
      };
    }

    // 9. Timelines, Sprints & Delivery Process
    if (
      hasWord("timeline", "timelines", "turnaround", "sprint", "sprints", "process", "delivery", "sla", "methodology") ||
      hasPhrase("how long", "how fast", "turnaround time")
    ) {
      return {
        text: "We follow a proven 5-phase delivery model: 1) Understand, 2) Plan, 3) Build, 4) Launch, 5) Improve. We ship in rapid 2-week technical sprints with weekly live staging previews. Typical websites and MVPs launch in 2 to 6 weeks, with guaranteed 4-hour SLA client communication.",
        actionLink: { label: "View Our 5-Phase Process", href: "/#process" },
      };
    }

    // 10. Tech Stack & Architecture (Tech-Agnostic)
    if (
      hasWord("stack", "tech", "technology", "technologies", "architecture", "framework", "frameworks", "react", "vue", "nextjs", "node", "nodejs", "python", "fastapi", "golang", "go", "flutter", "cloud", "aws", "gcp", "azure", "database") ||
      hasPhrase("tech stack", "what stack", "next js", "next.js")
    ) {
      return {
        text: "We are architecture-first and tech-agnostic: we do not force a single framework. We engineer on React, Vue, Next.js, Node.js, Python (FastAPI), Go, Flutter, and React Native, and deploy on AWS, GCP, Azure, and Cloudflare based strictly on your project requirements.",
        actionLink: { label: "Explore Our Architecture", href: "/#services" },
      };
    }

    // 11. AUTOMATE Pillar — AI Agents, Voice Bots, Workflows
    if (
      hasWord("automate", "automation", "automations", "agent", "agents", "bot", "bots", "chatbot", "chatbots", "voice", "n8n", "zapier") ||
      hasPhrase("ai agent", "ai workflow", "crm automation", "voice agent", "ai agents")
    ) {
      return {
        text: "Under our AUTOMATE pillar, we build autonomous AI agents, 24/7 AI voice and chat assistants, and automated CRM pipelines that eliminate 15+ hours of manual operations every week. From lead triage to invoice parsing, we automate repetitive tasks.",
        actionLink: { label: "Explore AI & Automation", href: "/#services" },
      };
    }

    // 12. GROW Pillar — Digital Marketing, Local SEO, Ads
    if (
      hasWord("grow", "growth", "marketing", "seo", "ads", "meta", "traffic") ||
      hasPhrase("local seo", "google ads", "meta ads", "google business", "lead gen")
    ) {
      return {
        text: "Under our GROW pillar, we engineer full-funnel acquisition: Local SEO and Google Business Profile dominance so nearby clients call you first, high-intent Google Search Ads, precision Meta campaigns with server-side CAPI tracking, and sub-second landing pages.",
        actionLink: { label: "Explore Digital Growth", href: "/#services" },
      };
    }

    // 13. CREATE Pillar — Video, Reels, Motion Graphics
    if (
      hasWord("create", "video", "videos", "reel", "reels", "shorts", "motion", "cinematic", "videography", "editing") ||
      hasPhrase("video production", "motion graphics", "video edit")
    ) {
      return {
        text: "Under our CREATE pillar, we produce high-retention video: technical product walkthroughs with motion design, cinematic brand promotional films, short-form Reels & Shorts, and performance ad creatives built to capture attention and elevate pricing power.",
        actionLink: { label: "Explore Creative Production", href: "/#services" },
      };
    }

    // 14. BUILD Pillar — Custom Software, Web, Mobile, SaaS
    if (
      hasWord("build", "website", "websites", "software", "webapp", "saas", "portal", "portals", "mvp", "backend", "frontend", "mobile", "app", "apps") ||
      hasPhrase("custom software", "web app", "mobile app")
    ) {
      return {
        text: "Under our BUILD pillar, we engineer custom business web platforms, native and cross-platform mobile apps (Flutter, React Native), scalable SaaS MVPs, and internal admin portals. We engineer sub-second speeds with pristine code you own 100%. Zero clunky templates.",
        actionLink: { label: "Explore BUILD Capabilities", href: "/#services" },
      };
    }

    // 15. Specific Leadership Roles (CTO, CBO, CMO)
    if (
      hasWord("cto") ||
      hasWord("mahesh") ||
      hasPhrase("who is your cto", "who is the cto", "chief technology officer")
    ) {
      return {
        text: "That would be Mahesh Ch, our Chief Technology & Operations Officer (CTO). He commands our systems architecture and cloud infrastructure resilience, ensuring our code runs sub-second while others are still restarting their servers.",
        actionLink: { label: "Meet Mahesh Ch on Team Page", href: "/team" },
      };
    }

    if (
      hasWord("cbo") ||
      hasWord("ganesh") ||
      hasPhrase("who is your cbo", "chief business officer")
    ) {
      return {
        text: "That's Ganesh Ch, our Chief Business Officer (CBO). He orchestrates commercial strategy, solution economics, and global partnerships across enterprise markets.",
        actionLink: { label: "Meet Ganesh Ch on Team Page", href: "/team" },
      };
    }

    if (
      hasWord("cmo") ||
      hasPhrase("who is your cmo", "chief marketing officer")
    ) {
      return {
        text: "That's Patan Rabiya, our Chief Marketing & Growth Officer (CMO). She leads growth architecture and oversees our high-touch Reverse Recruiting service so candidates skip the ATS black hole.",
        actionLink: { label: "Meet Patan Rabiya on Team Page", href: "/team" },
      };
    }

    // 16. Team & Hyderabad Location
    if (
      hasWord("team", "founder", "founders", "patan", "rabiya", "hyderabad", "location", "office", "address") ||
      hasPhrase("who runs", "where are you", "who founded")
    ) {
      return {
        text: "Ethisyn was established in Hyderabad in 2022. We are an assembly of 11 in-house founding partners—featuring Mahesh Ch (CTO), Ganesh Ch (CBO), and Patan Rabiya (CMO)—with zero outsourced middlemen and 100% craft.",
        actionLink: { label: "Meet the Full 11-Partner Team", href: "/team" },
      };
    }

    // 16. Studio Overview ("What is Ethisyn", "About Ethisyn")
    if (
      hasPhrase("what is ethisyn", "about ethisyn", "about us", "company overview") ||
      (hasWord("ethisyn") && hasWord("about", "who", "what"))
    ) {
      return {
        text: "Ethisyn is an independent product engineering and digital systems studio established in 2022 in Hyderabad. We build custom software (BUILD), automate operations with AI (AUTOMATE), scale brands with performance marketing (GROW), and produce high-retention video (CREATE). Zero bureaucracy, senior craftsmanship.",
        actionLink: { label: "Explore Studio Services", href: "/#services" },
      };
    }

    // 17. Blog & Case Studies
    if (
      hasWord("blog", "article", "articles", "insights", "guide") ||
      hasPhrase("case study", "case studies")
    ) {
      return {
        text: "We publish in-depth engineering breakdowns, AI agent architecture playbooks, local growth marketing guides, and video conversion teardowns on our studio blog.",
        actionLink: { label: "Read Studio Blog & Articles", href: "/blog" },
      };
    }

    // 18. Privacy, Security & NDA
    if (
      hasWord("privacy", "security", "nda", "confidential", "confidentiality", "ip") ||
      hasPhrase("intellectual property")
    ) {
      return {
        text: "We enforce strict confidentiality: mutual NDAs from Day 1, enterprise-grade cloud security, and 100% intellectual property transfer to you upon milestone delivery.",
        actionLink: { label: "Read Our Privacy Policy", href: "/privacy" },
      };
    }

    // 19. Gratitude & Compliments
    if (
      hasWord("thank", "thanks", "thx", "appreciate", "cool", "awesome", "great", "nice", "perfect")
    ) {
      return {
        text: "You are welcome! Let me know if you need anything else, or feel free to message our founding team on WhatsApp anytime.",
        actionLink: { label: "Message on WhatsApp", href: `https://wa.me/${siteConfig.whatsappNumber}` },
      };
    }

    // 20. Goodbyes
    if (
      q === "bye" ||
      q === "goodbye" ||
      q === "cya" ||
      hasPhrase("see you", "have a good day")
    ) {
      return {
        text: "Have a great day! Whenever you are ready to build, automate, or scale, we are right here to help.",
        actionLink: { label: "Visit Ethisyn Homepage", href: "/" },
      };
    }

    // Default intelligent fallback
    return {
      text: "I am Syn, your Ethisyn studio assistant. I can help you with our 4 pillars (BUILD, AUTOMATE, GROW, CREATE), Reverse Recruiting service, pricing models, timelines, or connecting you directly with our founding team on WhatsApp.",
      actionLink: { label: "Chat on WhatsApp (+91 80961 31202)", href: `https://wa.me/${siteConfig.whatsappNumber}` },
    };
  };

  const handleSendMessage = async (textToSend?: string) => {
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

    // 1. Try querying real Groq AI via Cloudflare Pages Function (/api/chat)
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: messages.slice(-4).map((m) => ({
            role: m.sender === "user" ? "user" : "assistant",
            content: m.text,
          })),
        }),
      });

      if (res.ok) {
        const data = (await res.json()) as { reply?: string; actionLink?: { label: string; href: string } };
        if (data.reply) {
          const botMessage: Message = {
            id: `bot-${Date.now()}`,
            sender: "bot",
            text: data.reply,
            actionLink: data.actionLink,
            timestamp: "Just now",
          };
          setMessages((prev) => [...prev, botMessage]);
          setIsTyping(false);
          return;
        }
      }
    } catch {
      // Network failure, offline, or local static dev without edge runtime
    }

    // 2. Seamless local knowledge engine fallback
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
    }, 300);
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
            onClick={() => {
              playOpenSound();
              setIsOpen(true);
            }}
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
                  <p className="whitespace-pre-line">{msg.text}</p>

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
            {/* Quick Prompt Suggestion Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-1 scrollbar-none text-[10px]">
              {[
                { label: "Say Hi", query: "Hello!" },
                { label: "WhatsApp", query: "Can I connect on WhatsApp?" },
                { label: "Reverse Recruiting", query: "How does the Reverse Recruiting service work?" },
                { label: "AI & Automation", query: "What AI and automations do you build?" },
                { label: "Tech Stack", query: "What is your tech stack and architecture?" },
                { label: "Timelines & Pricing", query: "What are your project timelines and pricing?" },
              ].map((chip) => (
                <button
                  key={chip.label}
                  type="button"
                  onClick={() => handleSendMessage(chip.query)}
                  className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white/[0.05] hover:bg-white/[0.12] border border-brand-border text-brand-offwhite text-[10px] font-medium transition-all active:scale-95 cursor-pointer shrink-0"
                >
                  {chip.label}
                </button>
              ))}
            </div>

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
