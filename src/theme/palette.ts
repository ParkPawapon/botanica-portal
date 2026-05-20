import type { PaletteOptions } from "@mui/material/styles";
import { themeTokens } from "./theme-tokens";

export const palette: PaletteOptions = {
  mode: "light",
  primary: {
    main: themeTokens.colors.primary.teal,
    light: themeTokens.colors.primary.light,
    dark: themeTokens.colors.primary.dark,
    contrastText: themeTokens.colors.text.inverse,
  },
  secondary: {
    main: themeTokens.colors.accent.gold,
    light: themeTokens.colors.accent.light,
    dark: themeTokens.colors.accent.dark,
    contrastText: themeTokens.colors.text.primary,
  },
  error: {
    main: themeTokens.colors.state.error,
  },
  warning: {
    main: themeTokens.colors.coral.base,
    light: themeTokens.colors.coral.light,
    dark: themeTokens.colors.coral.dark,
  },
  info: {
    main: themeTokens.colors.state.info,
  },
  success: {
    main: themeTokens.colors.state.success,
  },
  background: {
    default: themeTokens.colors.surface.base,
    paper: themeTokens.colors.surface.card,
  },
  text: {
    primary: themeTokens.colors.text.primary,
    secondary: themeTokens.colors.text.secondary,
  },
  divider: "rgba(30, 140, 134, 0.18)",
};
