import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#F5F4EF",
        brand: {
          black: "#050505",
          offwhite: "#F5F4EF",
          white: "#FFFFFF",
          muted: "rgba(245, 244, 239, 0.78)",
          faint: "rgba(245, 244, 239, 0.68)",
          border: "rgba(245, 244, 239, 0.18)",
          "border-strong": "rgba(245, 244, 239, 0.35)",
          "inverted-bg": "#F5F4EF",
          "inverted-fg": "#050505",
          "inverted-border": "rgba(5, 5, 5, 0.18)",
        },
      },
      fontFamily: {
        sans: ["var(--font-instrument-sans)", "Instrument Sans", "sans-serif"],
        serif: ["var(--font-instrument-serif)", "Instrument Serif", "Georgia", "serif"],
        mono: ["var(--font-ibm-plex-mono)", "IBM Plex Mono", "monospace"],
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.23, 1, 0.32, 1)",
        spatial: "cubic-bezier(0.77, 0, 0.175, 1)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "slide-up": "slide-up 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "pulse-subtle": "pulse-subtle 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
