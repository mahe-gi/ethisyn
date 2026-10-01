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
        background: "#000000",
        foreground: "#FFFFFF",
        brand: {
          black: "#000000",
          surface: "#080808",
          elevated: "#121212",
          offwhite: "#F4F4F5",
          white: "#FFFFFF",
          muted: "#A1A1AA",
          faint: "#71717A",
          border: "rgba(255, 255, 255, 0.08)",
          "border-subtle": "rgba(255, 255, 255, 0.04)",
          "border-strong": "rgba(255, 255, 255, 0.16)",
          "inverted-bg": "#FFFFFF",
          "inverted-fg": "#000000",
          "inverted-border": "rgba(0, 0, 0, 0.08)",
        },
      },
      fontFamily: {
        sans: ["var(--font-instrument-sans)", "Instrument Sans", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        serif: ["var(--font-instrument-sans)", "Instrument Sans", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["var(--font-instrument-sans)", "Instrument Sans", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
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
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "slide-up": "slide-up 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "pulse-subtle": "pulse-subtle 2.5s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
