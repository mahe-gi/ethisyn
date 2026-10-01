import { siteConfig } from "@/content/site";
import { teamContent } from "@/content/team";
import { proprietaryProducts } from "@/content/products";
import type { BlogPost } from "@/content/blog";

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
        contactType: "client inquiries",
        email: siteConfig.contactEmail,
        availableLanguage: ["English", "Telugu", "Hindi"],
        areaServed: "Worldwide",
      },
    ],
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.googleBusinessProfile,
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
    telephone: siteConfig.contactEmail,
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

