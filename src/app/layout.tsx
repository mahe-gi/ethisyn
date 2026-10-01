import type { Metadata, Viewport } from "next";
import { Instrument_Sans } from "next/font/google";
import "@/styles/globals.css";
import { siteConfig } from "@/content/site";
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateProfessionalServiceSchema,
  generateSoftwareSchemas,
  generateCoreServicesSchema,
} from "@/lib/schema";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Ethisyn | Build. Automate. Grow. Create.",
    template: "%s | Ethisyn",
  },
  description: siteConfig.tagline,
  keywords: [
    "BUILD AUTOMATE GROW CREATE",
    "Build Automate Grow Create",
    "Web Engineering Studio Hyderabad",
    "Autonomous AI Agents India",
    "AI Voice Agents Hyderabad",
    "Full-Stack Next.js Product Engineering",
    "Mobile App Development iOS Android",
    "Generative Engine Optimization GEO",
    "Enterprise Automation Hyderabad",
    "Custom Software Studio",
    "Ethisyn",
  ],
  authors: [{ name: "Ethisyn", url: siteConfig.url }],
  creator: "Ethisyn",
  publisher: "Ethisyn",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Ethisyn | Build. Automate. Grow. Create.",
    description: siteConfig.tagline,
    images: [
      {
        url: "/brand/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Ethisyn: Build. Automate. Grow. Create. | Technology, AI and digital growth for ambitious businesses.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethisyn | Build. Automate. Grow. Create.",
    description: siteConfig.tagline,
    images: ["/brand/opengraph-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/brand/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/brand/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "IN-TG",
    "geo.placename": "Hyderabad",
    "ai-agent-manifest": "/llms.txt",
    "ai-agent-full-manifest": "/llms-full.txt",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = generateOrganizationSchema();
  const webSiteSchema = generateWebSiteSchema();
  const profServiceSchema = generateProfessionalServiceSchema();
  const softwareSchemas = generateSoftwareSchemas();
  const coreServicesSchema = generateCoreServicesSchema();

  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} font-sans`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profServiceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(coreServicesSchema) }}
        />
        {softwareSchemas.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchemas) }}
          />
        )}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/brand/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/brand/apple-touch-icon.png" />
        <link rel="author" href="/llms.txt" />
        <link rel="help" href="/llms-full.txt" />
      </head>
      <body className="font-sans bg-black text-[#EDEDED] antialiased selection:bg-white selection:text-black min-h-screen flex flex-col">
        {/* Lenis Smooth Scroll Engine */}
        <SmoothScroll />

        {/* Accessible Skip to Main Content */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-white focus:text-brand-black text-xs font-semibold focus:outline-2"
        >
          Skip to main content
        </a>

        {/* Persistent Site Header */}
        <Header />

        {/* Main Semantic Landmark */}
        <main id="main-content" className="flex-1">
          {children}
        </main>

        {/* Persistent Site Footer */}
        <Footer />
      </body>
    </html>
  );
}
