import { createTheme } from "@mui/material/styles";
import { palette } from "./palette";
import { radius } from "./radius";
import { muiShadows } from "./shadows";
import { themeTokens } from "./theme-tokens";
import { typography } from "./typography";

export const muiTheme = createTheme({
  cssVariables: true,
  palette,
  typography,
  shadows: muiShadows,
  shape: {
    borderRadius: Number.parseInt(radius.md, 10),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: themeTokens.colors.surface.base,
          color: themeTokens.colors.text.primary,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: radius.round,
          boxShadow: "none",
          minHeight: 44,
          transition: "background-color 180ms ease, border-color 180ms ease, transform 180ms ease",
          "&:focus-visible": {
            boxShadow: themeTokens.shadows.focus,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: radius.lg,
          boxShadow: themeTokens.shadows.card,
        },
      },
    },
  },
});
