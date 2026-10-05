export interface JobServiceFeature {
  title: string;
  description: string;
  highlight: string;
}

export interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
  details: string[];
}

export interface ComparisonPoint {
  feature: string;
  autoBots: string;
  ethisynHuman: string;
}

export interface PlanTier {
  id: string;
  name: string;
  applicationsCount: string;
  tagline: string;
  features: string[];
  recommended?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const jobServiceContent = {
  badge: "TALENT ACCELERATION // REVERSE RECRUITING",
  hero: {
    kicker: "REVERSE RECRUITING & JOB APPLICATION SERVICE",
    title: "We manually apply to jobs for you with genuine human care.",
    subtitle:
      "Skip the soul-crushing 40 hours of repetitive form filling. We allocate an experienced specialist in your place to hand-apply with custom cover letters, 100% portal coverage, and daily team chat updates.",
    ctaPrimary: "Get Assigned an Associate",
    ctaSecondary: "Talk in Team Chat",
    stats: [
      { value: "100%", label: "Human Filled", descriptor: "Zero auto-apply bot bans" },
      { value: "< 24h", label: "Turnaround", descriptor: "Daily active application rhythm" },
      { value: "Daily", label: "Team Chat", descriptor: "Direct Slack or WhatsApp access" },
      { value: "100%", label: "Portal Coverage", descriptor: "Workday, Greenhouse, Lever, Taleo" },
    ],
  },
  leadership: {
    leadName: "Patan Rabiya",
    leadRole: "Chief Marketing & Growth Officer • Lead, Reverse Recruiting Operations",
    leadImage: "/team/patan-rabiya.png",
    leadBio:
      "Directs ETHISYN's Job Application & Reverse Recruiting operations in detail. Personally structures search targeting, trains dedicated application associates, and enforces rigorous quality standards so every application sent in your name is polished, tailored, and verified.",
    quote:
      "Job searching isn't a volume spam game. When you spray automated bot applications, you trigger ATS filters and get rejected before a human recruiter even sees your name. We allocate real, experienced human associates who carefully navigate company portals, craft custom cover letters, and stay in direct daily contact with you.",
  },
  corePillars: [
    {
      title: "Allocated Experienced Member in Your Place",
      description:
        "You aren't handed off to a nameless script. We assign a dedicated, vetted associate who has personally handled hundreds of technical and corporate job applications to apply directly on your behalf.",
      highlight: "Dedicated human associate assigned to you",
    },
    {
      title: "Meticulous Manual Application Filling",
      description:
        "Every single form, multi-step portal, Workday questionnaire, custom screening prompt, and captcha is filled out by hand with exact precision and strategic answers.",
      highlight: "100% portal coverage with zero bot flags",
    },
    {
      title: "Tailored Custom Cover Letters",
      description:
        "No generic copy-paste templates. We craft a role-specific, keyword-aligned cover letter for every single job application, connecting your specific accomplishments to the employer's needs.",
      highlight: "Customized for every specific job opening",
    },
    {
      title: "Daily Team Chat Collaboration",
      description:
        "You talk to your dedicated associate and team every single day in private Team Chat (WhatsApp or Slack). Ask questions, request target changes, and receive real-time updates.",
      highlight: "Direct daily communication & fast feedback loop",
    },
    {
      title: "Verified Screenshot Proof for Every Submission",
      description:
        "Never wonder where your resume went. You receive a live, transparent spreadsheet tracker with confirmation links and screenshots for every application submitted in your name.",
      highlight: "Complete transparency and undeniable proof",
    },
    {
      title: "Strategy Calibration Every 14 Days",
      description:
        "Led by Patan Rabiya, we review your application response rates, callback metrics, and recruiter traction every two weeks to fine-tune keywords and target industries.",
      highlight: "Continuous strategic refinement led by leadership",
    },
  ],
  comparison: [
    {
      feature: "Application Coverage",
      autoBots: "Skips Workday, Taleo, custom career sites, and multi-step forms (misses ~70% of jobs)",
      ethisynHuman: "100% coverage on any ATS, corporate portal, login wall, or custom enterprise site",
    },
    {
      feature: "Application Quality",
      autoBots: "Generic answers to screening questions, triggering automated candidate rejection flags",
      ethisynHuman: "Hand-crafted responses tailored to your actual experience and specific company requirements",
    },
    {
      feature: "Cover Letters",
      autoBots: "Robotic AI templates that sound generic and often hallucinate irrelevant details",
      ethisynHuman: "Hand-crafted, customized cover letters highlighting your relevant projects and metrics",
    },
    {
      feature: "Communication",
      autoBots: "Automated email notifications with zero human support when forms fail",
      ethisynHuman: "Direct daily communication in a private team chat with your allocated associate",
    },
    {
      feature: "Proof of Submission",
      autoBots: "Black-box logs without confirmation screenshots or verified receipt IDs",
      ethisynHuman: "Timestamped confirmation screenshots and submission links for every single job",
    },
    {
      feature: "Leadership Oversight",
      autoBots: "Unmonitored bot scripts running unsupervised",
      ethisynHuman: "Active operational oversight directed in detail by Patan Rabiya",
    },
  ],
  howItWorks: [
    {
      step: "01",
      title: "Strategy Intake & Profile Alignment",
      description:
        "Share your resume, ideal job titles, location preferences (remote, hybrid, on-site), compensation targets, and any blacklist companies you want excluded.",
      details: [
        "In-depth career background review",
        "Target job titles and seniority level definition",
        "Salary floor and geographical constraints established",
        "Company exclusion / blacklist list configured",
      ],
    },
    {
      step: "02",
      title: "Allocation of Your Dedicated Associate",
      description:
        "Patan Rabiya allocates an experienced, vetted team member in your place who understands your domain and has handled hundreds of successful job applications.",
      details: [
        "Dedicated point-of-contact assigned exclusively to you",
        "Private Team Chat channel created (WhatsApp or Slack)",
        "Application guidelines and screening questionnaire answers aligned",
        "Resume calibrated for Applicant Tracking Systems (ATS)",
      ],
    },
    {
      step: "03",
      title: "Daily Manual Submissions & Custom Cover Letters",
      description:
        "Your associate actively scouts matching positions and hand-fills each application with tailored answers and a custom cover letter written for that specific opening.",
      details: [
        "Daily quota of verified, high-quality applications submitted",
        "Custom cover letter crafted per application",
        "Complex portals (Workday, Greenhouse, Lever, etc.) navigated manually",
        "Diversity, visa/sponsorship, and custom screening prompts handled correctly",
      ],
    },
    {
      step: "04",
      title: "Daily Team Chat Updates & Interview Handoff",
      description:
        "Get daily submission summaries with screenshot proof. When recruiters reach out for interviews, we alert you immediately so you can focus 100% on interview prep.",
      details: [
        "Daily proof screenshots logged in shared live tracker",
        "Daily check-in and conversation in Team Chat",
        "Bi-weekly strategy reviews led by Patan Rabiya",
        "You focus on networking, skill building, and acing the interviews",
      ],
    },
  ],
  tiers: [
    {
      id: "sprint",
      name: "Focused Sprint",
      applicationsCount: "100 Applications",
      tagline: "Ideal for highly specialized or senior roles targeting a specific tier of companies.",
      features: [
        "Dedicated experienced associate allocated in your place",
        "100 carefully hand-filled job applications",
        "Custom tailored cover letters for every application",
        "100% coverage across Workday, Greenhouse, Lever, & custom portals",
        "Daily Team Chat communication (WhatsApp / Slack)",
        "Verified screenshot proof & live tracking sheet",
        "Direct operational oversight by Patan Rabiya",
      ],
    },
    {
      id: "accelerator",
      name: "Growth Accelerator",
      applicationsCount: "250 Applications",
      tagline: "Our most popular program for active job seekers looking to land interviews within 30-45 days.",
      recommended: true,
      features: [
        "Dedicated experienced associate allocated in your place",
        "250 carefully hand-filled job applications",
        "Custom tailored cover letters for every application",
        "ATS resume keyword calibration across target roles",
        "100% coverage across all corporate portals and login walls",
        "Daily Team Chat communication (WhatsApp / Slack)",
        "Verified screenshot proof & live tracking sheet",
        "Bi-weekly strategy review call led by Patan Rabiya",
        "Priority application turnaround within 12-24 hours",
      ],
    },
    {
      id: "executive",
      name: "Comprehensive Career Search",
      applicationsCount: "500 Applications",
      tagline: "Maximum velocity search for high-volume market penetration or competitive career transitions.",
      features: [
        "Dedicated senior associate allocated in your place",
        "500 carefully hand-filled job applications",
        "Custom tailored cover letters for every application",
        "Full ATS resume optimization & version branching",
        "100% coverage across all complex enterprise portals",
        "Daily Team Chat communication (WhatsApp / Slack)",
        "Daily live tracking dashboard with timestamped screenshots",
        "Bi-weekly strategic calibration with Patan Rabiya",
        "Recruiter email follow-up templates & interview prep briefing",
      ],
    },
  ],
  faqs: [
    {
      question: "Why should I hire a human associate instead of using an AI auto-apply tool?",
      answer:
        "AI auto-apply bots rely on automated browser extensions that get blocked by CAPTCHAs, fail on multi-step forms, and are completely unable to navigate enterprise portals like Workday, Taleo, or SAP SuccessFactors. Furthermore, companies increasingly use anti-bot heuristics that automatically discard bot-submitted resumes. By allocating a dedicated, experienced human associate, every application is submitted legitimately by hand, answering custom screening questions with thoughtfulness and attaching a tailored cover letter.",
    },
    {
      question: "Who is the person applying in my place?",
      answer:
        "We allocate an experienced, trained member of our in-house team in Hyderabad who has personally managed and submitted hundreds of job applications. They are trained on recruitment workflows, ATS keyword dynamics, and company portal navigation. They work exclusively under the direct supervision of Patan Rabiya.",
    },
    {
      question: "How does the daily Team Chat work?",
      answer:
        "Upon onboarding, we create a private dedicated Team Chat channel on WhatsApp or Slack with you, your allocated associate, and our operations lead. You can ask questions, provide updated preferences, request priority applications, and review daily progress every single day.",
    },
    {
      question: "How do you write custom cover letters for each job?",
      answer:
        "For each position your associate targets, they review the job description, extract key requirements and technical qualifications, and draft a tailored cover letter highlighting how your specific achievements directly match the role. No generic fill-in-the-blank templates are used.",
    },
    {
      question: "How do I know the applications were actually submitted?",
      answer:
        "We operate with complete transparency. For every single application submitted, your associate captures a timestamped screenshot of the final submission confirmation screen and logs the company name, role title, application URL, and date in your shared live tracker.",
    },
    {
      question: "What happens when an employer contacts me for an interview?",
      answer:
        "All applications use your direct contact email and phone number, so employer emails and interview invitations go directly to your inbox. You also notify your associate in the Team Chat so we can update your tracker, avoid duplicate applications, and provide relevant interview preparation notes.",
    },
    {
      question: "Can I specify companies I do NOT want you to apply to?",
      answer:
        "Yes, absolutely. During onboarding, you provide a blacklist of companies (including your current employer or specific firms you want to avoid), and we strictly enforce this filter.",
    },
  ],
};
