import type { Metadata } from "next";
import { siteConfig } from "./site.config";

export const seoConfig = {
  defaultTitle: siteConfig.name,
  titleTemplate: `%s | ${siteConfig.name}`,
  description: siteConfig.description,
  keywords: [
    "botanical garden",
    "educational institution",
    "plant registry",
    "biodiversity",
    "conservation education",
    "school garden",
    "living learning space",
  ],
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} botanical garden learning platform`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: siteConfig.organizationName,
  },
} satisfies Pick<Metadata, "description" | "keywords" | "openGraph" | "twitter"> & {
  defaultTitle: string;
  titleTemplate: string;
};
