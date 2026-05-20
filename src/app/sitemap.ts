import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";
import { ROUTES } from "@/shared/constants/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [ROUTES.home, ROUTES.plants, ROUTES.learningHub];
  const now = new Date();

  return routes.map((route) => ({
    url: new URL(route, siteConfig.url).toString(),
    lastModified: now,
    changeFrequency: route === ROUTES.plants ? "daily" : "weekly",
    priority: route === ROUTES.home ? 1 : 0.8,
  }));
}
