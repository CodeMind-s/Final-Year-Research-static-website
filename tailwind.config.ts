import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          light: "var(--color-primary-light)",
        },
        accent: "var(--color-accent)",
        canvas: "var(--color-bg)",
        surface: "var(--color-surface)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.08)",
        "glass-lg": "0 24px 64px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.08)",
        teal: "0 0 40px rgba(20,184,166,0.15)",
        "teal-lg": "0 0 80px rgba(20,184,166,0.2)",
      },
      animation: {
        "gradient-shift": "gradientShift 8s ease infinite",
        breathe: "breathe 4s ease-in-out infinite",
        "crystal-pulse": "crystalPulse 3s ease-in-out infinite",
        "marquee-fast": "marquee 15s linear infinite",
        "marquee-normal": "marquee 30s linear infinite",
      },
      keyframes: {
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.6" },
          "50%": { transform: "scale(1.04)", opacity: "1" },
        },
        crystalPulse: {
          "0%, 100%": { opacity: "0.04" },
          "50%": { opacity: "0.1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-expo": "cubic-bezier(0.76, 0, 0.24, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
