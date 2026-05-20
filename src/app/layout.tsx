import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { AppProviders } from "@/providers/app-providers";
import { SiteShell } from "@/shared/layout/site-shell";
import { createMetadata } from "@/shared/lib/metadata";
import { themeTokens } from "@/theme/theme-tokens";
import "./globals.css";

export const metadata: Metadata = createMetadata();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: themeTokens.colors.surface.base,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AppProviders>
          <SiteShell>{children}</SiteShell>
        </AppProviders>
      </body>
    </html>
  );
}
