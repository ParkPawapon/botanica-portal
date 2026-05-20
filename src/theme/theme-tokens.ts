export const themeTokens = {
  colors: {
    primary: {
      teal: "#2BA8A2",
      light: "#3CC4BD",
      dark: "#1E8C86",
      background: "#E8F6F5",
    },
    surface: {
      base: "#EFF8F7",
      card: "#FFFFFF",
    },
    accent: {
      gold: "#FFD23F",
      light: "#FFE47A",
      dark: "#E6B800",
    },
    coral: {
      base: "#EF6C4A",
      light: "#FF8A6A",
      dark: "#D45233",
    },
    state: {
      success: "#27AE60",
      info: "#5DADE2",
      error: "#E74C3C",
    },
    text: {
      primary: "#145F5B",
      secondary: "#1E8C86",
      inverse: "#FFFFFF",
    },
    cream: "#FFF8E7",
  },
  radius: {
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    round: "999px",
  },
  shadows: {
    card: "0 18px 45px rgba(30, 140, 134, 0.10)",
    elevated: "0 24px 70px rgba(30, 140, 134, 0.14)",
    tealGlow: "0 0 0 1px rgba(43, 168, 162, 0.14), 0 18px 50px rgba(43, 168, 162, 0.20)",
    goldGlow: "0 0 0 1px rgba(255, 210, 63, 0.20), 0 16px 44px rgba(255, 210, 63, 0.22)",
    focus: "0 0 0 4px rgba(43, 168, 162, 0.24)",
  },
  typography: {
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
} as const;
