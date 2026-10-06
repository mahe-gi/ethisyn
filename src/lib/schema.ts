import { siteConfig } from "@/content/site";
import { teamContent } from "@/content/team";
import { proprietaryProducts } from "@/content/products";
import type { BlogPost } from "@/content/blog";
import { careersData } from "@/content/careers";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: "Ethisyn Digital Products & AI Systems Studio",
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      "@id": `${siteConfig.url}/#logo`,
      url: `${siteConfig.url}/brand/ethisyn-monogram-original.png`,
      contentUrl: `${siteConfig.url}/brand/ethisyn-monogram-original.png`,
      width: 512,
      height: 512,
      caption: "Ethisyn Monogram",
    },
    image: `${siteConfig.url}/brand/opengraph-image.png`,
    foundingDate: `${siteConfig.founded}`,
    slogan: siteConfig.tagline,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.state,
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 11,
      unitText: "Founding Domain Leads",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support & inquiries",
        email: siteConfig.emails.general,
        telephone: siteConfig.contactPhone,
        availableLanguage: ["English", "Telugu", "Hindi"],
        areaServed: "Worldwide",
      },
      {
        "@type": "ContactPoint",
        contactType: "recruitment & talent careers",
        email: siteConfig.emails.careers,
        availableLanguage: ["English", "Telugu", "Hindi"],
        areaServed: "Worldwide",
      },
      {
        "@type": "ContactPoint",
        contactType: "legal & compliance",
        email: siteConfig.emails.legal,
        availableLanguage: ["English", "Telugu", "Hindi"],
        areaServed: "Worldwide",
      },
    ],
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.googleBusinessProfile,
      ...(siteConfig.social.wellfound ? [siteConfig.social.wellfound] : []),
      ...(siteConfig.social.goodfirms ? [siteConfig.social.goodfirms] : []),
      ...(siteConfig.social.github ? [siteConfig.social.github] : []),
    ],
    employee: teamContent.members.map((member) => ({
      "@type": "Person",
      "@id": `${siteConfig.url}/team#${member.id}`,
      name: member.name,
      jobTitle: member.role,
      worksFor: {
        "@id": `${siteConfig.url}/#organization`,
      },
      image: member.image ? `${siteConfig.url}${member.image}` : undefined,
      description: member.bio,
      knowsAbout: member.skills,
      sameAs: member.social.linkedin || siteConfig.social.linkedin,
    })),
    knowsAbout: [
      "BUILD: Web & Software Engineering (Next.js, React Native, Cloud)",
      "AUTOMATE: Autonomous Multi-Agent AI Pipelines & Voice Agents",
      "GROW: Digital Growth, Technical SEO & Generative Engine Optimization (GEO)",
      "CREATE: UI/UX Design Systems, Figma Tokens & Brand Identity",
      "Web Engineering & High-Speed Next.js",
      "Autonomous Multi-Agent AI Pipelines",
      "Mobile Applications (iOS & Android)",
      "Technical SEO & Generative Engine Optimization (GEO)",
      "Enterprise AI Voice & Chatbots",
      "Distributed Cloud Systems & Microservices",
      "High-Throughput Data Engineering",
      "UI/UX Systems & Product Design",
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "en-US",
  };
}

export function generateProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#service`,
    name: "Ethisyn Product Engineering & AI Studio",
    slogan: siteConfig.tagline,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/brand/opengraph-image.png`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "India",
    },
    geo: {
      "@type": "GeoCoordinates",
      addressCountry: "India",
    },
    telephone: siteConfig.contactPhone,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Core Pillars: BUILD • AUTOMATE • GROW • CREATE",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "BUILD: Web & Software Engineering",
          description:
            "Sub-second web platforms, enterprise customer portals, iOS/Android mobile apps, and transactional software architectures.",
        },
        {
          "@type": "OfferCatalog",
          name: "AUTOMATE: AI & Automation Systems",
          description:
            "Autonomous multi-agent workflows, conversational voice intelligence (sub-800ms latency), and enterprise AI copilots.",
        },
        {
          "@type": "OfferCatalog",
          name: "GROW: Digital Growth & SEO",
          description:
            "Generative Engine Optimization (GEO for LLMs), technical SEO dominance, Google Business Profile ranking, and high-intent acquisition.",
        },
        {
          "@type": "OfferCatalog",
          name: "CREATE: Creative & Content",
          description:
            "Video production, videography, video editing, social media content, brand promotions, and marketing creatives.",
        },
      ],
    },
  };
}

export function generateCoreServicesSchema() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${siteConfig.url}/#service-build`,
      name: "BUILD: Web & Software Engineering",
      serviceType: "Software Engineering & Web Development",
      category: "BUILD",
      description:
        "High-velocity web applications, multi-tenant SaaS platforms, sub-second Next.js engineering, and native iOS/Android mobile experiences.",
      provider: {
        "@id": `${siteConfig.url}/#organization`,
      },
      areaServed: {
        "@type": "Place",
        name: "Worldwide",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${siteConfig.url}/#service-automate`,
      name: "AUTOMATE: AI & Automation Systems",
      serviceType: "Artificial Intelligence & Workflow Automation",
      category: "AUTOMATE",
      description:
        "Autonomous multi-agent workflows, conversational voice intelligence (sub-800ms latency), context-aware copilots, and operational pipelines.",
      provider: {
        "@id": `${siteConfig.url}/#organization`,
      },
      areaServed: {
        "@type": "Place",
        name: "Worldwide",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${siteConfig.url}/#service-grow`,
      name: "GROW: Digital Growth & SEO",
      serviceType: "Digital Growth & Generative Search Optimization",
      category: "GROW",
      description:
        "Generative Engine Optimization (GEO) across ChatGPT, Perplexity, and Claude; technical SEO; local map packs; and revenue-focused acquisition funnels.",
      provider: {
        "@id": `${siteConfig.url}/#organization`,
      },
      areaServed: {
        "@type": "Place",
        name: "Worldwide",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${siteConfig.url}/#service-create`,
      name: "CREATE: Creative Design & UI/UX",
      serviceType: "Product Design & Brand Engineering",
      category: "CREATE",
      description:
        "Tactile product interfaces, scalable Figma design tokens, interactive prototypes, cinematic motion design, and brand identity systems.",
      provider: {
        "@id": `${siteConfig.url}/#organization`,
      },
      areaServed: {
        "@type": "Place",
        name: "Worldwide",
      },
    },
  ];
}

export function generateJobPostingSchemas() {
  return careersData.roles.map((role) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "@id": `${siteConfig.url}/careers#${role.id}`,
    title: role.title,
    description: `${role.shortSummary} ${role.overview}`,
    datePosted: "2025-01-01T00:00:00Z",
    validThrough: "2026-12-31T23:59:59Z",
    employmentType: "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: siteConfig.name,
      sameAs: siteConfig.url,
      logo: `${siteConfig.url}/brand/ethisyn-monogram-original.png`,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        addressCountry: "IN",
      },
    },
    applicantLocationRequirements: {
      "@type": "Country",
      name: "India",
    },
    jobLocationType: "TELECOMMUTE",
    directApply: true,
  }));
}

export function generateCareersPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}/careers#webpage`,
    name: "Careers | Ethisyn | BUILD • AUTOMATE • GROW • CREATE",
    headline: "Join Our Founding Engineering, AI & Design Studio in Hyderabad",
    description:
      "Explore engineering, AI automation, digital growth, and design careers at Ethisyn. We build high-performance software and autonomous AI systems.",
    url: `${siteConfig.url}/careers`,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    about: {
      "@id": `${siteConfig.url}/#organization`,
    },
    mainEntity: {
      "@type": "ItemList",
      name: "Career Opportunities Across Core Pillars",
      description: "Open roles across BUILD, AUTOMATE, GROW, and CREATE.",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "BUILD: Web & Software Engineering (Next.js, React Native, Full-Stack)",
          url: `${siteConfig.url}/careers#build`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "AUTOMATE: AI Systems & Voice Intelligence (LangGraph, Python)",
          url: `${siteConfig.url}/careers#automate`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "GROW: Digital Growth & GEO Engineering (Technical SEO, Analytics)",
          url: `${siteConfig.url}/careers#grow`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "CREATE: Product UI/UX & Brand Design (Figma, Motion)",
          url: `${siteConfig.url}/careers#create`,
        },
      ],
    },
  };
}

export function generateSoftwareSchemas() {
  return proprietaryProducts.map((p) => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: p.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Cloud, iOS, Android",
    description: p.description,
    author: {
      "@id": `${siteConfig.url}/#organization`,
    },
  }));
}

export function generateWebPageSchema({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function generateBlogIndexSchema(posts: BlogPost[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${siteConfig.url}/blog#blog`,
    name: "Ethisyn Journal & Insights",
    description:
      "Engineering essays, systems architecture & AI dispatches from Ethisyn founding builders in Hyderabad.",
    url: `${siteConfig.url}/blog`,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/brand/ethisyn-monogram-original.png`,
      },
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      "@id": `${siteConfig.url}/blog/${post.slug}#article`,
      headline: post.title,
      description: post.excerpt,
      datePublished: post.publishDate,
      dateModified: post.publishDate,
      url: `${siteConfig.url}/blog/${post.slug}`,
      author: {
        "@type": "Person",
        name: post.author.name,
        jobTitle: post.author.role,
        image: `${siteConfig.url}${post.author.avatar}`,
      },
      keywords: post.tags.join(", "),
      articleSection: post.category,
    })),
  };
}

export function generateBlogPostingSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${siteConfig.url}/blog/${post.slug}#article`,
    headline: post.title,
    alternativeHeadline: post.subtitle,
    description: post.excerpt,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    url: `${siteConfig.url}/blog/${post.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
      image: `${siteConfig.url}${post.author.avatar}`,
      worksFor: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      sameAs: post.author.social?.linkedin || siteConfig.social.linkedin,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/brand/ethisyn-monogram-original.png`,
      },
    },
    keywords: post.tags.join(", "),
    articleSection: post.category,
    inLanguage: "en-US",
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export interface LocalizedServiceParams {
  pagePath: string;
  serviceName: string;
  serviceType: string;
  description: string;
  serviceCategory: string;
  offers?: Array<{ name: string; description: string; price?: string }>;
}

export function generateLocalizedServiceSchema({
  pagePath,
  serviceName,
  serviceType,
  description,
  serviceCategory,
  offers = [],
}: LocalizedServiceParams) {
  const pageUrl = `${siteConfig.url}${pagePath}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        legalName: "Ethisyn Digital Products & AI Systems Studio",
        url: siteConfig.url,
        logo: `${siteConfig.url}/brand/ethisyn-monogram-original.png`,
        image: `${siteConfig.url}/brand/opengraph-image.png`,
        telephone: siteConfig.contactPhone,
        email: siteConfig.emails.general,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
          postalCode: "500081",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 17.4483,
          longitude: 78.3915,
        },
        areaServed: [
          { "@type": "AdministrativeArea", name: "HITEC City" },
          { "@type": "AdministrativeArea", name: "Gachibowli" },
          { "@type": "AdministrativeArea", name: "Madhapur" },
          { "@type": "AdministrativeArea", name: "Financial District" },
          { "@type": "AdministrativeArea", name: "Kondapur" },
          { "@type": "AdministrativeArea", name: "Jubilee Hills" },
          { "@type": "City", name: "Hyderabad" },
          { "@type": "State", name: "Telangana" },
          { "@type": "Country", name: "India" },
          { "@type": "Place", name: "Worldwide" },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "09:00",
            closes: "20:00",
          },
        ],
        sameAs: [
          siteConfig.social.linkedin,
          siteConfig.social.googleBusinessProfile,
          ...(siteConfig.social.wellfound ? [siteConfig.social.wellfound] : []),
          ...(siteConfig.social.goodfirms ? [siteConfig.social.goodfirms] : []),
          ...(siteConfig.social.github ? [siteConfig.social.github] : []),
        ],
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: serviceName,
        serviceType,
        category: serviceCategory,
        description,
        provider: {
          "@id": `${siteConfig.url}/#organization`,
        },
        areaServed: {
          "@type": "City",
          name: "Hyderabad",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${serviceName} Packages & Engagement Models`,
          itemListElement: offers.map((offer) => ({
            "@type": "Offer",
            name: offer.name,
            description: offer.description,
            priceSpecification: offer.price
              ? {
                  "@type": "PriceSpecification",
                  priceCurrency: "INR",
                  price: offer.price,
                }
              : undefined,
          })),
        },
      },
    ],
  };
}

