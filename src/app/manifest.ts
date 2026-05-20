import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";
import { themeTokens } from "@/theme/theme-tokens";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Botanica",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: themeTokens.colors.surface.base,
    theme_color: themeTokens.colors.primary.teal,
    icons: [
      {
        src: "/icons/botanica-mark.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
