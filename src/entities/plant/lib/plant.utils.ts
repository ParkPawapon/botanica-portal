import type { Plant } from "../model/plant.types";

export function getPlantDisplayName(plant: Pick<Plant, "commonName" | "localName">) {
  return plant.localName || plant.commonName;
}

export function getPlantScientificLabel(plant: Pick<Plant, "scientificName" | "family">) {
  return `${plant.scientificName} | ${plant.family}`;
}

export function isPlantInZone(plant: Pick<Plant, "location">, zone: string) {
  return plant.location.zone.toLowerCase() === zone.toLowerCase();
}
