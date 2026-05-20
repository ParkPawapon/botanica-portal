import type { Metadata } from "next";
import { seoConfig } from "@/config/seo.config";
import { siteConfig } from "@/config/site.config";
import type { PageMetadataInput } from "@/shared/types/seo";

export function createMetadata(input: PageMetadataInput = {}): Metadata {
  const title = input.title ?? seoConfig.defaultTitle;
  const description = input.description ?? seoConfig.description;
  const path = input.path ?? "/";
  const url = new URL(path, siteConfig.url).toString();
  const image = input.image ?? siteConfig.ogImage;

  return {
    title: input.title
      ? {
          absolute: title,
          template: seoConfig.titleTemplate,
        }
      : {
          default: seoConfig.defaultTitle,
          template: seoConfig.titleTemplate,
        },
    description,
    keywords: input.keywords ?? seoConfig.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...seoConfig.openGraph,
      title,
      description,
      url,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} preview`,
        },
      ],
    },
    twitter: {
      ...seoConfig.twitter,
      title,
      description,
      images: [image],
    },
    robots: input.noIndex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
  };
}
