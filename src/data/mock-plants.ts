import type { Plant } from "@/entities/plant";

export const mockPlants: Plant[] = [
  {
    id: "plant-001",
    slug: "golden-shower-tree",
    localName: "Golden Shower Tree",
    commonName: "Golden Shower Tree",
    scientificName: "Cassia fistula",
    family: "Fabaceae",
    genus: "Cassia",
    type: "tree",
    categories: [
      {
        id: "ornamental",
        name: "Ornamental",
      },
    ],
    morphology: {
      overview: "Placeholder morphology summary for future botanical records.",
      leaf: "Leaf details will be expanded during plant registry implementation.",
      flower: "Flower details will be expanded during plant registry implementation.",
      fruit: "Fruit details will be expanded during plant registry implementation.",
    },
    habitat: "School garden demonstration zone.",
    usage: {
      ecologicalImportance: "Supports biodiversity education and pollinator observation.",
      educationalUse: "Used for field observation and plant morphology lessons.",
    },
    location: {
      zone: "learning-courtyard",
      label: "Learning Courtyard",
    },
    images: [
      {
        src: "/images/plants/placeholder-plant.png",
        alt: "Placeholder plant image",
      },
    ],
    qrCodeUrl: "/plants/golden-shower-tree",
    seoDescription: "Placeholder plant record for the future botanical registry.",
  },
];
