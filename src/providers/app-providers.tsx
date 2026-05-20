"use client";

import type { ReactNode } from "react";
import { MuiThemeProvider } from "./mui-theme-provider";

export function AppProviders({ children }: { children: ReactNode }) {
  return <MuiThemeProvider>{children}</MuiThemeProvider>;
}
