import type { PlantType } from "@/entities/plant";

export type PlantSortKey = "localName" | "commonName" | "scientificName" | "family";

export type PlantSearchFilters = {
  query: string;
  family?: string;
  plantType?: PlantType;
  locationZone?: string;
  sortBy: PlantSortKey;
};
