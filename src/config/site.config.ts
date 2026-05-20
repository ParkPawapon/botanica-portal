import { envConfig } from "./env.config";

export const siteConfig = {
  name: envConfig.siteName,
  description:
    "A modern botanical garden learning platform for students, teachers, visitors, and institutional conservation work.",
  url: envConfig.siteUrl,
  organizationName: envConfig.organizationName,
  contactEmail: envConfig.contactEmail,
  locale: "en_US",
  ogImage: `${envConfig.siteUrl}/images/placeholders/botanical-og.png`,
  links: {
    home: envConfig.siteUrl,
  },
} as const;
