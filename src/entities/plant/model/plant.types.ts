import type { ImageAsset } from "@/shared/types/common";

export const PLANT_TYPES = ["tree", "shrub", "herb", "climber", "fern", "aquatic"] as const;

export type PlantType = (typeof PLANT_TYPES)[number];

export type PlantCategory = {
  id: string;
  name: string;
  description?: string;
};

export type PlantLocation = {
  zone: string;
  label: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
};

export type PlantMorphology = {
  overview: string;
  leaf: string;
  flower: string;
  fruit: string;
};

export type PlantUsage = {
  ecologicalImportance: string;
  educationalUse: string;
  medicinalOrCulturalUse?: string;
};

export type Plant = {
  id: string;
  slug: string;
  localName: string;
  commonName: string;
  scientificName: string;
  family: string;
  genus: string;
  type: PlantType;
  categories: PlantCategory[];
  morphology: PlantMorphology;
  habitat: string;
  usage: PlantUsage;
  location: PlantLocation;
  images: ImageAsset[];
  qrCodeUrl?: string;
  seoDescription?: string;
};
