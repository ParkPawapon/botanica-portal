import type { TypographyVariantsOptions } from "@mui/material/styles";
import { themeTokens } from "./theme-tokens";

export const typography: TypographyVariantsOptions = {
  fontFamily: themeTokens.typography.fontFamily,
  h1: {
    fontSize: "clamp(2.75rem, 6vw, 5rem)",
    fontWeight: 760,
    letterSpacing: 0,
    lineHeight: 1.04,
  },
  h2: {
    fontSize: "clamp(2rem, 4vw, 3.5rem)",
    fontWeight: 740,
    letterSpacing: 0,
    lineHeight: 1.1,
  },
  h3: {
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: 1.16,
  },
  h4: {
    fontSize: "1.5rem",
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: 1.25,
  },
  h5: {
    fontSize: "1.25rem",
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: 1.3,
  },
  h6: {
    fontSize: "1rem",
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: 1.35,
  },
  body1: {
    fontSize: "1rem",
    lineHeight: 1.75,
  },
  body2: {
    fontSize: "0.9375rem",
    lineHeight: 1.65,
  },
  button: {
    fontWeight: 700,
    letterSpacing: 0,
    textTransform: "none",
  },
};
