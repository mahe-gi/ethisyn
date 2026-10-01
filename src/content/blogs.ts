export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  featured?: boolean;
  content: string[];
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "deterministic-multi-agent-graphs-in-production",
    title: "Architecting Deterministic Multi-Agent Graphs for Enterprise Production",
    excerpt:
      "Why brittle single-prompt chatbots fail in enterprise environments, and how stateful directed acyclic graphs provide resilient, verifiable execution loops.",
    category: "Systems Architecture",
    publishDate: "October 2026",
    readTime: "6 min read",
    author: {
      name: "Mahesh Ch.",
      role: "Founding Systems Architect",
    },
    featured: true,
    tags: ["Multi-Agent Graphs", "LangGraph", "Deterministic AI", "Enterprise"],
    content: [
      "In early 2024, the enterprise software ecosystem was inundated with naive LLM wrappers. The typical architecture consisted of a single monolithic prompt, an unstructured context window, and hope. By late 2025, the failure mode of this approach became unmistakable: non-deterministic execution, untraceable errors, and unpredictable hallucination rates that rendered automation unviable for compliance-critical workflows.",
      "At Ethisyn, we discard single-prompt patterns in favor of deterministic multi-agent state machines modeled as directed acyclic graphs (DAGs). Each subagent in the graph is assigned an isolated responsibility with strictly typed JSON input and output schemas.",
      "By separating routing, computation, validation, and execution into isolated nodes with human-in-the-loop fallback gates, we guarantee that no unverified state transition ever reaches production database layers.",
      "The result is predictable, sub-second execution latency, cryptographic replay trails, and a 0.00% verified schema deviation rate across mission-critical enterprise deployments.",
    ],
  },
  {
    slug: "sub-300ms-conversational-voice-ai-stack",
    title: "The Sub-300ms Conversational Voice Stack: Bridging WebRTC and Neural Audio",
    excerpt:
      "A technical breakdown of bidirectional speech-to-speech pipelines, neural voice activity detection (VAD), and natural conversational interruption handling.",
    category: "AI Research",
    publishDate: "September 2026",
    readTime: "8 min read",
    author: {
      name: "Samihan Chousalkar",
      role: "Founding AI & Systems Engineer",
    },
    featured: false,
    tags: ["Voice AI", "WebRTC", "Neural Audio", "Telephony"],
    content: [
      "Human conversational cadence operates with an average response gap between 200 and 350 milliseconds. Traditional interactive voice response (IVR) systems and early AI phone bots suffered from 1.5 to 3.0 second latency delays, leading to jarring pauses and accidental interruptions that shattered the illusion of presence.",
      "To break through the sub-300ms latency barrier, we restructured the entire audio pipeline: replacing standard HTTP request-response cycles with low-latency WebRTC streams, paired with edge-deployed Opus codecs running at 48kHz.",
      "We pair fast neural Voice Activity Detection (VAD) running in under 38 milliseconds with continuous streaming token generation. When a human speaker begins to speak, the playback stream is halted instantaneously without acoustic clipping.",
      "Our voice agents now comfortably answer customer inquiries, clarify ambiguous requests, and synchronize enterprise calendar slots in real-time without callers ever experiencing robotic latency.",
    ],
  },
  {
    slug: "why-agency-bureaucracy-is-dead",
    title: "Why the 100-Person Agency is Obsolete in the Post-AI Software Era",
    excerpt:
      "How high-density studios of founding engineers and systems architects outperform legacy 100-person agencies on craft, speed, and commercial outcomes.",
    category: "Studio Thesis",
    publishDate: "August 2026",
    readTime: "4 min read",
    author: {
      name: "Deepak Kumar Patra",
      role: "Founding Product Engineer",
    },
    featured: false,
    tags: ["Craft", "Studio Model", "High Velocity", "Engineering"],
    content: [
      "For decades, the standard agency business model was built on billable hours, headcount inflation, and layers of account management. A founder requesting a website or custom software platform was introduced to a senior partner, only to have their vision filtered through three layers of account reps and delivered by junior subcontractors.",
      "In the post-AI software landscape, this bureaucratic overhead is not merely wasteful—it is fatal to speed and quality. Tooling, compiler optimizations, and automated agent workflows have multiplied the leverage of elite engineers by an order of magnitude.",
      "A compact, high-density team of founding domain experts working in unison can design, prototype, engineer, and deploy high-performance software in four weeks that legacy agencies spend six months debating.",
      "By eliminating account reps, status slide decks, and telephone games, we preserve pure craft and deliver undeniable commercial value.",
    ],
  },
];
