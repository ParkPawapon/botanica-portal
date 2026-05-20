import type { Metadata } from "next";

export type PageMetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
};

export type RouteMetadataFactory = (input?: PageMetadataInput) => Metadata;
