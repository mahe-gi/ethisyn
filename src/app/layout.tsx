import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Instrument_Serif, IBM_Plex_Mono } from "next/font/google";
import "@/styles/globals.css";
import { siteConfig } from "@/content/site";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/schema";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { CustomCursor } from "@/components/ui/CustomCursor";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "optional",
  preload: true,
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "optional",
  preload: true,
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "optional",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Ethisyn — Building Technology with Purpose",
    template: "%s | Ethisyn",
  },
  description: siteConfig.description,
  keywords: [
    "Product Technology Company",
    "Technology Company in Hyderabad",
    "Artificial Intelligence Products",
    "Software Product Development",
    "Cloud and Automation",
    "Purposeful Digital Products",
    "Emerging Technology",
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
    title: "Ethisyn — Building Technology with Purpose",
    description: siteConfig.description,
    images: [
      {
        url: "/brand/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Ethisyn — Building technology with purpose.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethisyn — Building Technology with Purpose",
    description: siteConfig.description,
    images: ["/brand/opengraph-image.png"],
  },
  icons: {
    icon: [
      { url: "/brand/ethisyn-monogram-white.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/brand/ethisyn-monogram-white.png", sizes: "180x180", type: "image/png" },
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
};

export const viewport: Viewport = {
  themeColor: "#050505",
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

  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${instrumentSerif.variable} ${ibmPlexMono.variable}`}
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
      </head>
      <body className="font-sans bg-brand-black text-brand-offwhite antialiased selection:bg-brand-offwhite selection:text-brand-black min-h-screen flex flex-col">
        {/* Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-white focus:text-brand-black font-mono text-xs font-semibold focus:outline-2"
        >
          Skip to main content
        </a>

        {/* Global Isolated Client Progressive Enhancements */}
        <CustomCursor />
        <NoiseOverlay />

        {/* Site Header */}
        <Header />

        {/* Main Landmarks */}
        <main id="main-content" className="flex-1">
          {children}
        </main>

        {/* Site Footer */}
        <Footer />
      </body>
    </html>
  );
}
