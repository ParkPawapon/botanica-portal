import type { Config } from "tailwindcss";
import { themeTokens } from "./src/theme/theme-tokens";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        botanical: {
          teal: themeTokens.colors.primary.teal,
          light: themeTokens.colors.primary.light,
          dark: themeTokens.colors.primary.dark,
          bg: themeTokens.colors.primary.background,
          ink: themeTokens.colors.text.primary,
        },
        surface: {
          base: themeTokens.colors.surface.base,
          card: themeTokens.colors.surface.card,
        },
        accent: {
          gold: themeTokens.colors.accent.gold,
          light: themeTokens.colors.accent.light,
          dark: themeTokens.colors.accent.dark,
        },
        coral: {
          base: themeTokens.colors.coral.base,
          light: themeTokens.colors.coral.light,
          dark: themeTokens.colors.coral.dark,
        },
        status: {
          success: themeTokens.colors.state.success,
          error: themeTokens.colors.state.error,
          info: themeTokens.colors.state.info,
        },
        cream: themeTokens.colors.cream,
      },
      borderRadius: {
        sm: themeTokens.radius.sm,
        md: themeTokens.radius.md,
        lg: themeTokens.radius.lg,
        xl: themeTokens.radius.xl,
        round: themeTokens.radius.round,
      },
      boxShadow: {
        "botanical-card": themeTokens.shadows.card,
        "botanical-glow": themeTokens.shadows.tealGlow,
        "gold-glow": themeTokens.shadows.goldGlow,
      },
      spacing: {
        "section-sm": "3rem",
        section: "5rem",
        "section-lg": "7rem",
      },
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "botanical-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-in": "fade-in 240ms ease-out",
        "slide-up": "slide-up 320ms ease-out",
        "botanical-float": "botanical-float 4s ease-in-out infinite",
        shimmer: "shimmer 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
