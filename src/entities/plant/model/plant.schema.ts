import { z } from "zod";
import { PLANT_TYPES } from "./plant.types";

export const plantCategorySchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  description: z.string().optional(),
});

export const plantLocationSchema = z.object({
  zone: z.string().min(1),
  label: z.string().min(1),
  coordinates: z
    .object({
      latitude: z.number(),
      longitude: z.number(),
    })
    .optional(),
});

export const plantMorphologySchema = z.object({
  overview: z.string().min(1),
  leaf: z.string().min(1),
  flower: z.string().min(1),
  fruit: z.string().min(1),
});

export const plantSchema = z.object({
  id: z.string().min(1),
  slug: z.string().min(1),
  localName: z.string().min(1),
  commonName: z.string().min(1),
  scientificName: z.string().min(1),
  family: z.string().min(1),
  genus: z.string().min(1),
  type: z.enum(PLANT_TYPES),
  categories: z.array(plantCategorySchema),
  morphology: plantMorphologySchema,
  habitat: z.string().min(1),
  usage: z.object({
    ecologicalImportance: z.string().min(1),
    educationalUse: z.string().min(1),
    medicinalOrCulturalUse: z.string().optional(),
  }),
  location: plantLocationSchema,
  images: z.array(
    z.object({
      src: z.string().min(1),
      alt: z.string().min(1),
      width: z.number().optional(),
      height: z.number().optional(),
    }),
  ),
  qrCodeUrl: z.string().optional(),
  seoDescription: z.string().optional(),
});

export const plantCollectionSchema = z.array(plantSchema);
