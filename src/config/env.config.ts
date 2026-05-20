import { z } from "zod";

const publicEnvSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().optional(),
  NEXT_PUBLIC_SITE_NAME: z.string().optional(),
  NEXT_PUBLIC_ORGANIZATION_NAME: z.string().optional(),
  NEXT_PUBLIC_CONTACT_EMAIL: z.string().email().optional().or(z.literal("")),
});

const parsedEnv = publicEnvSchema.safeParse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME,
  NEXT_PUBLIC_ORGANIZATION_NAME: process.env.NEXT_PUBLIC_ORGANIZATION_NAME,
  NEXT_PUBLIC_CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
});

const publicEnv = parsedEnv.success ? parsedEnv.data : {};

function withFallback(value: string | undefined, fallback: string) {
  return value?.trim() ? value : fallback;
}

export const envConfig = {
  siteUrl: withFallback(publicEnv.NEXT_PUBLIC_SITE_URL, "http://localhost:3000"),
  siteName: withFallback(publicEnv.NEXT_PUBLIC_SITE_NAME, "Botanica Portal"),
  organizationName: withFallback(
    publicEnv.NEXT_PUBLIC_ORGANIZATION_NAME,
    "Educational Institution",
  ),
  contactEmail: withFallback(publicEnv.NEXT_PUBLIC_CONTACT_EMAIL, "contact@example.com"),
} as const;
