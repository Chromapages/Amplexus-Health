import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        ink: {
          DEFAULT: "#12293D",
          navy: "#12293D",
        },
        teal: {
          DEFAULT: "#ABD6E0",
          hummingbird: "#ABD6E0",
        },
        shell: {
          DEFAULT: "#F6F3EE",
          soft: "#F6F3EE",
        },
        night: {
          DEFAULT: "#08141F",
          deep: "#08141F",
        },
        // Neutrals
        slate: {
          900: "#0F172A",
          600: "#475569",
          300: "#CBD5E1",
          200: "#E5E7EB",
        },
        // Feedback colors
        success: {
          DEFAULT: "#2E7D32",
        },
        error: {
          DEFAULT: "#C62828",
        },
        warning: {
          DEFAULT: "#F6A623",
        },
      },
      fontFamily: {
        serif: ["var(--font-dm-serif)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      spacing: {
        // Base 4px scale: 4, 8, 12, 16, 24, 32, 40, 48, 64
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        DEFAULT: "12px",
        lg: "16px",
      },
    },
  },
  plugins: [],
};

export default config;
