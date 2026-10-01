export interface TeamMember {
  id: string;
  name: string;
  role: string;
  badge?: string;
  discipline: string;
  bio: string;
  image?: string;
  skills: string[];
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

export interface TeamPageContent {
  title: string;
  subtitle: string;
  manifesto: string;
  rules: Array<{ title: string; explanation: string }>;
  members: TeamMember[];
}

export const teamContent: TeamPageContent = {
  title: "The builders behind every system.",
  subtitle:
    "An independent assembly of founding engineers, designers, and systems architects headquartered in Hyderabad. We build clean, high-performance software directly with our clients — zero intermediaries, zero outsourced guesswork.",
  manifesto:
    "We do not believe in account managers acting as human routers, nor do we outsource your vision to anonymous subcontractors. Every line of code, design token, and system architecture is crafted directly by our founding partners right here in Hyderabad.",
  rules: [
    {
      title: "Direct Builder Ownership",
      explanation:
        "No account managers, brokers, or intermediaries. You collaborate directly with the founding engineers and designers executing your vision.",
    },
    {
      title: "Sub-Second Performance Standard",
      explanation:
        "Every interface and distributed system is benchmarked for extreme responsiveness, minimal memory footprints, and zero bloat before shipping.",
    },
    {
      title: "Operational Dogfooding",
      explanation:
        "We run our own studio operations on the exact architectures, automations, and growth systems we engineer for our clients.",
    },
    {
      title: "Uncompromising Engineering Candor",
      explanation:
        "We protect your capital. If a lean architecture achieves your objective, we will never recommend costly, unnecessary infrastructure.",
    },
  ],
  members: [
    {
      id: "mahesh-ch",
      name: "Mahesh Ch",
      role: "Chief Technology & Operations Officer (CTO)",
      discipline: "Systems Architecture & Operations",
      bio: "Directs foundational systems architecture, cloud infrastructure resilience, and end-to-end engineering execution at Ethisyn. With deep operational command, he eliminates technical overhead and ensures mission-critical platforms ship with zero tolerance for latency or downtime.",
      image: "/team/mahesh-ch.png",
      skills: [
        "Distributed Systems",
        "Cloud Infrastructure",
        "Systems Architecture",
        "Operational Command",
        "Reliability Engineering",
        "Technical Governance",
      ],
      social: {
        linkedin: "https://www.linkedin.com/company/ethisyn",
        github: "https://github.com/ethisyn",
      },
    },
    {
      id: "ganesh-ch",
      name: "Ganesh Ch",
      role: "Chief Business Officer (CBO)",
      discipline: "Commercial Architecture & Strategy",
      bio: "Orchestrates commercial growth, strategic capital efficiency, and institutional partnerships across global markets. Bridges complex engineering roadmaps with high-leverage commercial outcomes, ensuring every system built drives quantifiable revenue and sustainable enterprise valuation.",
      image: "/team/ganesh-ch.png",
      skills: [
        "Enterprise Strategy",
        "Commercial Architecture",
        "Revenue Operations",
        "Strategic Alliances",
        "Solution Economics",
        "Global Expansion",
      ],
      social: {
        linkedin: "https://www.linkedin.com/company/ethisyn",
      },
    },
    {
      id: "patan-rabiya",
      name: "Patan Rabiya",
      role: "Chief Marketing & Growth Officer (CMO)",
      discipline: "Product Growth & Generative Discovery",
      bio: "Combines high-level software engineering pedigree with algorithmic brand architecture and acquisition systems. Architects automated product-led growth engines, generative engine optimization (GEO), and multi-channel acquisition funnels that turn cold software launches into category leaders.",
      image: "/team/patan-rabiya.png",
      skills: [
        "Algorithmic Growth",
        "Generative Engine Optimization",
        "Technical SEO",
        "Product-Led Funnels",
        "Brand Architecture",
        "Acquisition Science",
      ],
      social: {
        linkedin: "https://www.linkedin.com/company/ethisyn",
      },
    },
    {
      id: "kavya-sharma",
      name: "Kavya Sharma",
      role: "Head of Corporate Alliances & Partnerships",
      discipline: "Institutional Partnerships & Alliances",
      bio: "Champions institutional accounts, enterprise syndicates, and high-impact corporate joint ventures. Connects multinational enterprises and high-growth scaleups directly with Ethisyn's core engineering studio, establishing enduring cross-industry partnerships.",
      image: "/team/kavya-sharma.png",
      skills: [
        "Institutional Alliances",
        "Enterprise Deals",
        "Strategic Syndication",
        "Corporate Development",
        "Key Account Governance",
        "Cross-Border Expansion",
      ],
      social: {
        linkedin: "https://www.linkedin.com/company/ethisyn",
      },
    },
    {
      id: "neeraja-k",
      name: "Neeraja K",
      role: "Head of Design & UI/UX",
      discipline: "Product Design & Design Systems",
      bio: "Directs visual language, interaction choreography, and enterprise design systems across all Ethisyn digital products. Translates dense business logic and multi-step workflows into effortless, tactile interfaces engineered to rival the world's most refined consumer software.",
      image: "/team/neeraja-k.png",
      skills: [
        "Design Systems",
        "Interaction Choreography",
        "User Journey Modeling",
        "Figma Architecture",
        "Design Engineering",
        "Visual Hierarchy",
      ],
      social: {
        linkedin: "https://www.linkedin.com/company/ethisyn",
      },
    },
    {
      id: "sandhya-chirumamilla",
      name: "Sandhya Chirumamilla",
      role: "Head of Software & Web Engineering",
      discipline: "Web Platforms & Frontend Architecture",
      bio: "Directs frontend engineering, high-performance Next.js architectures, and sub-second web platforms. Specializes in micro-frontend architectures, core web vitals optimization, and pixel-precise, fault-tolerant user experiences built on strict TypeScript standards.",
      image: "/team/sandhya-chirumamilla.png",
      skills: [
        "Next.js & React",
        "TypeScript Architecture",
        "Sub-Second Performance",
        "State Management",
        "Micro-Frontends",
        "Web Vitals Optimization",
      ],
      social: {
        linkedin: "https://www.linkedin.com/company/ethisyn",
        github: "https://github.com/ethisyn",
      },
    },
    {
      id: "mohammad-sohail",
      name: "Mohammad Sohail",
      role: "Head of Mobile Engineering",
      discipline: "Native & Mobile Systems",
      bio: "Directs native iOS, Android, and cross-platform mobile architecture. Specializes in offline-first data synchronization, hardware-accelerated fluid gesture engines, and 60fps micro-interactions tailored for high-frequency mobile workforces and consumer flagships.",
      image: "/team/mohammad-sohail.png",
      skills: [
        "React Native",
        "Flutter & Native iOS/Android",
        "Offline-First Sync",
        "Gesture Performance",
        "Mobile Architecture",
        "Hardware Integration",
      ],
      social: {
        linkedin: "https://www.linkedin.com/company/ethisyn",
        github: "https://github.com/ethisyn",
      },
    },
    {
      id: "vaibhav-pawar",
      name: "Vaibhav Pawar",
      role: "Head of AI & Automation Systems",
      discipline: "Autonomous Agents & Applied ML",
      bio: "Architects autonomous agent swarms, deterministic LLM orchestrations, and real-time voice intelligence pipelines. Deploys custom fine-tuned models and production RAG vectors designed to automate high-stakes enterprise processes without hallucinations.",
      image: "/team/vaibhav-pawar.png",
      skills: [
        "Autonomous Multi-Agent Swarms",
        "LangGraph & Vector Pipelines",
        "Voice Intelligence",
        "Deterministic LLM Systems",
        "Fine-Tuning",
        "Python & FastAPI",
      ],
      social: {
        linkedin: "https://www.linkedin.com/company/ethisyn",
        github: "https://github.com/ethisyn",
      },
    },
    {
      id: "prashanth-d",
      name: "Prashanth D",
      role: "Head of Data Engineering & Analytics",
      discipline: "Data Architecture & Real-Time Analytics",
      bio: "Architects high-throughput ETL backbones, low-latency streaming infrastructure, and enterprise data lakes. Builds resilient data foundations handling millions of events per second with transactional consistency and real-time analytical intelligence.",
      image: "/team/prashanth-d.png",
      skills: [
        "Real-Time Streaming",
        "ClickHouse & PostgreSQL",
        "ETL Pipelines",
        "Data Warehousing",
        "Event-Driven Systems",
        "Predictive Analytics",
      ],
      social: {
        linkedin: "https://www.linkedin.com/company/ethisyn",
        github: "https://github.com/ethisyn",
      },
    },
    {
      id: "samihan-chousalkar",
      name: "Samihan Chousalkar",
      role: "Head of Backend & Distributed Systems",
      discipline: "Distributed Infrastructure & Cloud",
      bio: "Leads distributed backend microservices, event-driven message architectures, and high-concurrency cloud systems. Specializes in fault-tolerant service meshes and database optimization built to process millions of transactions under severe production loads.",
      image: "/team/samihan-chousalkar.png",
      skills: [
        "Distributed Microservices",
        "Java & Spring Boot",
        "High-Concurrency Cloud",
        "Event Meshes (Kafka)",
        "PostgreSQL Internals",
        "Resilient Architecture",
      ],
      social: {
        linkedin: "https://www.linkedin.com/company/ethisyn",
        github: "https://github.com/ethisyn",
      },
    },
    {
      id: "deepak-kumar-patra",
      name: "Deepak Kumar Patra",
      role: "Head of Product Engineering & Full-Stack Systems",
      discipline: "Full-Stack & Product Engineering",
      bio: "Drives end-to-end product delivery, full-stack systems integration, and developer velocity across Ethisyn's portfolio. Harmonizes reactive user interfaces with resilient distributed APIs to deliver enterprise software that is rapid, clean, and durable.",
      image: "/team/deepak-kumar-patra.png",
      skills: [
        "Full-Stack Architecture",
        "Node.js & TypeScript",
        "API Engineering",
        "System Integration",
        "Product Velocity",
        "Scalable Foundations",
      ],
      social: {
        linkedin: "https://www.linkedin.com/company/ethisyn",
        github: "https://github.com/ethisyn",
      },
    },
  ],
};
