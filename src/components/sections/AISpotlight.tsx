"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { 
  Bot, 
  PhoneCall, 
  Database, 
  Terminal, 
  CheckCircle2, 
  ArrowUpRight, 
  Cpu, 
  Activity, 
  ShieldCheck, 
  Layers,
  Sparkles,
  GitBranch
} from "lucide-react";
import { cn } from "@/lib/utils";

type SystemMode = "agents" | "voice" | "rag";

interface SystemSpec {
  id: SystemMode;
  code: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  metrics: {
    label: string;
    value: string;
    subtext: string;
  }[];
  capabilities: string[];
  telemetryLogs: {
    timestamp: string;
    level: "INFO" | "EXEC" | "GATE" | "SUCCESS";
    event: string;
    detail: string;
  }[];
  codeSnippet: string;
  comparison: {
    traditional: string;
    ethisyn: string;
  };
}

const systems: SystemSpec[] = [
  {
    id: "agents",
    code: "SYS-01 // AGENTIC GRAPH",
    title: "Autonomous Multi-Agent Graphs",
    tagline: "Stateful agent swarms orchestrated via directed acyclic graphs.",
    description:
      "Unlike brittle single-prompt chatbots, we engineer deterministic multi-agent state machines. Specialized subagents run in parallel, evaluate intermediate steps, verify data against strict schemas, and invoke tools with human-in-the-loop oversight.",
    icon: GitBranch,
    metrics: [
      { label: "Deterministic SLA", value: "99.98%", subtext: "Zero schema deviation" },
      { label: "Execution Latency", value: "310ms", subtext: "P95 state transition" },
      { label: "Tool Accuracy", value: "100%", subtext: "Strict typed JSON validation" },
      { label: "Human Gates", value: "Enabled", subtext: "Approval checkpoints" },
    ],
    capabilities: [
      "Directed acyclic state graph orchestration (LangGraph / Temporal style)",
      "Autonomous tool dispatch with typed JSON schema validation",
      "Cryptographic execution replay & step-level audit trails",
      "Self-healing retry loops with automatic context-window pruning",
    ],
    telemetryLogs: [
      { timestamp: "12:04:18.102", level: "INFO", event: "ORCHESTRATOR_INIT", detail: "Graph compiled: 6 nodes, 8 conditional edges" },
      { timestamp: "12:04:18.140", level: "EXEC", event: "NODE:router_agent", detail: "Intent classified: ENTERPRISE_PROCUREMENT (conf: 0.994)" },
      { timestamp: "12:04:18.212", level: "EXEC", event: "NODE:crm_sync_agent", detail: "Tool call: fetch_account_profile(org_id='acct_842x')" },
      { timestamp: "12:04:18.289", level: "GATE", event: "VALIDATION_GATE", detail: "Schema verification passed [Zod: ContractReviewSchema]" },
      { timestamp: "12:04:18.310", level: "SUCCESS", event: "STATE_CHECKPOINT", detail: "Commit snapshot: tx_8fa09e2 — State transition resolved" },
    ],
    codeSnippet: `// Deterministic Agent State Machine Definition
const ProcurementGraph = new StateGraph<AgentState>({
  channels: {
    messages: { value: (x, y) => x.concat(y), default: () => [] },
    accountContext: { value: (x, y) => ({ ...x, ...y }) },
    approvalGate: { value: (x, y) => y ?? x, default: () => false },
  }
})
.addNode("triage", async (state) => await classifyIntent(state))
.addNode("complianceCheck", async (state) => await verifySOC2Policy(state))
.addConditionalEdges("triage", evaluatePolicyGate, {
  approved: "complianceCheck",
  reviewRequired: "humanSupervisorApproval"
});`,
    comparison: {
      traditional: "Single fragile prompt that hallucinates, forgets context, and fails on edge cases without recovery.",
      ethisyn: "Stateful graph nodes with isolated memory, deterministic schema gates, and cryptographic state checkpointing.",
    },
  },
  {
    id: "voice",
    code: "SYS-02 // NEURAL VOICE",
    title: "Real-Time Conversational Voice AI",
    tagline: "Sub-300ms duplex voice systems with natural barge-in latency.",
    description:
      "Enterprise telephony engineered for natural human cadence. Utilizing ultra-low latency WebRTC audio streams, sub-100ms neural speech-to-text, and conversational interruptions, our voice agents answer inbound calls, qualify leads, and synchronize calendar bookings.",
    icon: PhoneCall,
    metrics: [
      { label: "Voice Latency", value: "284ms", subtext: "Full roundtrip turnaround" },
      { label: "Barge-in Speed", value: "< 40ms", subtext: "Instant interruption halt" },
      { label: "Telephony Protocol", value: "SIP/WebRTC", subtext: "Direct PBX & Twilio trunk" },
      { label: "Calendar Sync", value: "Realtime", subtext: "Cal.com & Google Calendar" },
    ],
    capabilities: [
      "Sub-300ms bidirectional speech-to-speech audio streaming",
      "Instant interruption & barge-in detection with zero audio stutter",
      "Native SIP trunking for incoming call centers & high-volume dispatch",
      "Automated real-time calendar reservations and CRM record enrichment",
    ],
    telemetryLogs: [
      { timestamp: "14:22:01.012", level: "INFO", event: "WEBRTC_HANDSHAKE", detail: "Audio codec: Opus 48kHz duplex / Jitter buffer: 0.8ms" },
      { timestamp: "14:22:01.120", level: "EXEC", event: "NEURAL_VAD", detail: "Human utterance detected: 'Can you schedule for Thursday 3pm?'" },
      { timestamp: "14:22:01.215", level: "EXEC", event: "STREAM_LLM", detail: "First token generated in 95ms / Calendar tool executed" },
      { timestamp: "14:22:01.284", level: "SUCCESS", event: "NEURAL_TTS", detail: "Audio frame synthesized and transmitted (Total turnaround: 284ms)" },
      { timestamp: "14:22:01.402", level: "SUCCESS", event: "CALENDAR_SYNC", detail: "Confirmed booking ID: bk_9921_eth / Sent SMS confirmation" },
    ],
    codeSnippet: `// WebRTC Duplex Voice Pipeline with Real-Time Interruption Gate
const voicePipeline = new DuplexVoiceStream({
  codec: "opus",
  sampleRate: 48000,
  vad: { sensitivity: 0.92, bargeInHaltMs: 38 },
  stt: new NeuralWhisperStream({ model: "fast-conformer-v2" }),
  orchestrator: new StreamOrchestrator({
    systemPrompt: "You are Ethisyn's executive technical intake coordinator...",
    tools: [reserveMeetingSlot, queryAvailableEngineers],
    maxLatencyBudgetMs: 250
  })
});`,
    comparison: {
      traditional: "Clunky 2-second delay IVR bots that talk over callers and fail to recognize natural interruptions.",
      ethisyn: "Human-grade 280ms duplex audio streaming with instantaneous barge-in handling and native CRM synchronization.",
    },
  },
  {
    id: "rag",
    code: "SYS-03 // ENTERPRISE RAG",
    title: "Deterministic Enterprise RAG",
    tagline: "Cryptographically cited knowledge engines with zero hallucinations.",
    description:
      "Enterprise knowledge extraction that guarantees source truth. We combine dense vector embeddings with sparse BM25 keyword matching and cross-encoder reranking, backed by cryptographic chunk hashes and strict attribution guardrails.",
    icon: Database,
    metrics: [
      { label: "Attribution Score", value: "99.98%", subtext: "Verified chunk provenance" },
      { label: "Vector Search", value: "18ms", subtext: "Hybrid HNSW index retrieval" },
      { label: "Hallucination Rate", value: "0.00%", subtext: "Guardrail verified" },
      { label: "Document Formats", value: "50+ Types", subtext: "PDFs, Notion, SQL, CAD" },
    ],
    capabilities: [
      "Hybrid dense-vector (HNSW) + sparse BM25 reciprocal rank fusion (RRF)",
      "Strict citation lineage with cryptographic document chunk fingerprints",
      "Dynamic chunk reranking with domain-tuned cross-encoders",
      "Multi-tenant RBAC permissions mapped directly to enterprise source access",
    ],
    telemetryLogs: [
      { timestamp: "16:08:44.201", level: "INFO", event: "QUERY_RECEIVED", detail: "Vector embedding computed (dimension: 1536 / 12ms)" },
      { timestamp: "16:08:44.225", level: "EXEC", event: "HYBRID_SEARCH", detail: "Retrieved top-40 candidate chunks via Dense + BM25 RRF" },
      { timestamp: "16:08:44.262", level: "EXEC", event: "CROSS_ENCODER", detail: "Reranked top-4 chunks: score 0.984 [doc_ref: SLA_Contract_2026.pdf#p14]" },
      { timestamp: "16:08:44.298", level: "GATE", event: "FACT_CHECK_GUARD", detail: "Response groundness audit passed (hallucination probability: 0.0001)" },
      { timestamp: "16:08:44.312", level: "SUCCESS", event: "PAYLOAD_DISPATCH", detail: "Streamed answer with 3 cryptographically signed citations" },
    ],
    codeSnippet: `// Hybrid RAG Pipeline with Reciprocal Rank Fusion & Guardrails
const ragEngine = new EnterpriseRAGPipeline({
  retrieval: {
    vectorIndex: pgVectorClient.table("knowledge_embeddings"),
    sparseIndex: bm25Client.index("enterprise_docs"),
    fusionMethod: "reciprocal_rank_fusion",
    rrfK: 60,
  },
  reranker: new BGEReranker({ topK: 4 }),
  guardrails: [
    new CitationIntegrityGuard({ requireExactChunkHash: true }),
    new ZeroHallucinationEnforcer({ threshold: 0.98 })
  ]
});`,
    comparison: {
      traditional: "Naïve vector similarity that returns irrelevant chunks, makes up citations, and leaks cross-department data.",
      ethisyn: "Hybrid dense/sparse RRF retrieval with cryptographic chunk lineage, zero hallucination gates, and enterprise RBAC.",
    },
  },
];

export function AISpotlight() {
  const [activeTab, setActiveTab] = useState<SystemMode>("agents");
  const [activeConsoleView, setActiveConsoleView] = useState<"telemetry" | "code">("telemetry");

  const currentSystem = systems.find((s) => s.id === activeTab) || systems[0];
  const Icon = currentSystem.icon;

  return (
    <section
      id="ai"
      className="py-28 md:py-40 px-5 sm:px-8 md:px-12 bg-black relative overflow-hidden"
      aria-labelledby="ai-heading"
    >
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.015] blur-[160px] rounded-full" 
      />

      <div className="max-w-[1520px] mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-white/[0.08]">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono tracking-widest text-[#A1A1AA] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              AI & Cognitive Infrastructure // Production Telemetry
            </div>

            <h2
              id="ai-heading"
              className="font-sans font-medium text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.06]"
            >
              Deterministic intelligence,{" "}
              <span className="font-serif italic font-normal text-white">
                not unpredictable chatbots.
              </span>
            </h2>

            <p className="font-sans text-[#A1A1AA] text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              We architect mission-critical AI systems engineered for enterprise SLAs: autonomous agent graphs, sub-300ms conversational voice pipelines, and zero-hallucination knowledge retrieval.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="success" size="md" dot>
              LIVE TELEMETRY STREAM
            </Badge>
            <Button href="/#contact" variant="primary" size="sm" showArrow>
              Deploy an AI System
            </Button>
          </div>
        </div>

        {/* System Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-1.5 rounded-2xl bg-[#090909] border border-white/[0.08]">
          {systems.map((system, index) => {
            const SystemIcon = system.icon;
            const isActive = system.id === activeTab;

            return (
              <button
                key={system.id}
                type="button"
                onClick={() => setActiveTab(system.id)}
                className={cn(
                  "relative flex items-center gap-4 p-4 sm:p-5 rounded-xl text-left transition-all duration-300 group",
                  isActive
                    ? "bg-white/[0.08] border border-white/[0.16] shadow-xl text-white"
                    : "bg-transparent border border-transparent text-[#71717A] hover:text-[#D4D4D8] hover:bg-white/[0.03]"
                )}
              >
                <div
                  className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center transition-colors flex-shrink-0",
                    isActive
                      ? "bg-white text-black"
                      : "bg-white/[0.04] text-[#A1A1AA] group-hover:text-white group-hover:bg-white/[0.08]"
                  )}
                >
                  <SystemIcon className="w-5 h-5" />
                </div>

                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#71717A]">
                      0{index + 1}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    )}
                  </div>
                  <h3 className="font-sans text-sm sm:text-base font-medium truncate text-white">
                    {system.title}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Showcase Panel: Interactive Telemetry & Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Deep Narrative & Enterprise Architecture (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-emerald-400 block">
                {currentSystem.code}
              </span>

              <h3 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-medium text-white tracking-tight leading-snug">
                {currentSystem.title}
              </h3>

              <p className="font-sans text-base text-[#D4D4D8] font-normal leading-relaxed">
                {currentSystem.tagline}
              </p>

              <p className="font-sans text-sm sm:text-base text-[#A1A1AA] font-light leading-relaxed">
                {currentSystem.description}
              </p>
            </div>

            {/* 4 Performance Telemetry Stat Metrics */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {currentSystem.metrics.map((m) => (
                <div
                  key={m.label}
                  className="p-4 rounded-xl bg-[#080808] border border-white/[0.06] space-y-1"
                >
                  <div className="font-sans text-xl sm:text-2xl font-medium text-white tracking-tight">
                    {m.value}
                  </div>
                  <div className="font-mono text-[11px] text-[#A1A1AA] uppercase tracking-wider">
                    {m.label}
                  </div>
                  <div className="font-sans text-[11px] text-[#71717A]">
                    {m.subtext}
                  </div>
                </div>
              ))}
            </div>

            {/* System Capabilities Checklist */}
            <div className="space-y-3 pt-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#71717A] block">
                ENGINEERING SPECIFICATIONS
              </span>
              <ul className="space-y-2.5">
                {currentSystem.capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-3 text-xs sm:text-sm text-[#D4D4D8]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="font-light leading-relaxed">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action CTA Link */}
            <div className="pt-2">
              <Button href="/#contact" variant="primary" size="md" showArrow>
                Request Technical Specification
              </Button>
            </div>
          </div>

          {/* Right Column: High-Tech Monospace Telemetry & Code Console (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl bg-[#060606] border border-white/[0.1] shadow-2xl overflow-hidden">
              {/* Terminal Window Header Bar */}
              <div className="px-5 py-3.5 bg-[#0C0C0C] border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="font-mono text-xs text-[#71717A] hidden sm:inline-block">
                    ethisyn-telemetry://cluster-prod-hyd-01/{currentSystem.id}
                  </span>
                </div>

                {/* View Switcher: Live Telemetry vs Monospace Schema Code */}
                <div className="flex items-center gap-1.5 bg-black/60 p-1 rounded-lg border border-white/[0.06]">
                  <button
                    type="button"
                    onClick={() => setActiveConsoleView("telemetry")}
                    className={cn(
                      "px-2.5 py-1 rounded text-[11px] font-mono transition-colors",
                      activeConsoleView === "telemetry"
                        ? "bg-white/[0.12] text-white font-medium"
                        : "text-[#71717A] hover:text-white"
                    )}
                  >
                    Telemetry Log
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveConsoleView("code")}
                    className={cn(
                      "px-2.5 py-1 rounded text-[11px] font-mono transition-colors",
                      activeConsoleView === "code"
                        ? "bg-white/[0.12] text-white font-medium"
                        : "text-[#71717A] hover:text-white"
                    )}
                  >
                    Architecture Spec
                  </button>
                </div>
              </div>

              {/* Console Body */}
              <div className="p-5 sm:p-6 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto min-h-[340px] bg-[#050505]">
                {activeConsoleView === "telemetry" ? (
                  <div className="space-y-3 font-mono">
                    <div className="text-[#71717A] pb-2 border-b border-white/[0.06] flex items-center justify-between text-[11px]">
                      <span>STATUS: STREAMING SOCKET CONNECTED</span>
                      <span className="text-emerald-400">P99: 280ms // 0% ERRORS</span>
                    </div>

                    {currentSystem.telemetryLogs.map((log, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 sm:gap-3 group">
                        <span className="text-[#52525B] select-none flex-shrink-0 text-[11px]">
                          {log.timestamp}
                        </span>
                        <span
                          className={cn(
                            "px-1.5 py-0.5 rounded text-[10px] tracking-wider font-semibold select-none flex-shrink-0",
                            log.level === "INFO" && "bg-sky-500/10 text-sky-400 border border-sky-500/20",
                            log.level === "EXEC" && "bg-amber-500/10 text-amber-300 border border-amber-500/20",
                            log.level === "GATE" && "bg-purple-500/10 text-purple-300 border border-purple-500/20",
                            log.level === "SUCCESS" && "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          )}
                        >
                          {log.level}
                        </span>
                        <div className="space-x-1.5 min-w-0">
                          <span className="text-[#F4F4F5] font-medium">{log.event}:</span>
                          <span className="text-[#A1A1AA]">{log.detail}</span>
                        </div>
                      </div>
                    ))}

                    <div className="pt-4 flex items-center gap-2 text-emerald-400 animate-pulse text-[11px]">
                      <span>●</span>
                      <span>Listening for incoming enterprise telemetry signals...</span>
                    </div>
                  </div>
                ) : (
                  <pre className="text-[#E4E4E7] font-mono text-xs overflow-x-auto leading-relaxed">
                    <code>{currentSystem.codeSnippet}</code>
                  </pre>
                )}
              </div>

              {/* Console Footer: Architectural Comparison */}
              <div className="p-5 bg-[#0A0A0A] border-t border-white/[0.08] space-y-3">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#71717A] block">
                  ARCHITECTURE COMPARISON // WHY THIS MATTERS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                  <div className="p-3 rounded-lg bg-rose-950/10 border border-rose-500/20 space-y-1">
                    <span className="font-mono text-[10px] uppercase text-rose-400 font-medium block">
                      Legacy Chatbot Wrappers
                    </span>
                    <p className="text-[#A1A1AA] font-light leading-snug">
                      {currentSystem.comparison.traditional}
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-950/10 border border-emerald-500/20 space-y-1">
                    <span className="font-mono text-[10px] uppercase text-emerald-400 font-medium block">
                      Ethisyn Deterministic Engine
                    </span>
                    <p className="text-[#E4E4E7] font-light leading-snug">
                      {currentSystem.comparison.ethisyn}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
