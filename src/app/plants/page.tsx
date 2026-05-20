import { PlantRegistryPlaceholder } from "@/features/plant-registry";
import { ROUTES } from "@/shared/constants/routes";
import { createMetadata } from "@/shared/lib/metadata";

export const metadata = createMetadata({
  title: "Plant Registry",
  description: "Placeholder route for the future searchable plant registry and botanical records.",
  path: ROUTES.plants,
  keywords: ["plant registry", "school botanical garden", "scientific names", "plant records"],
});

export default function PlantsPage() {
  return <PlantRegistryPlaceholder />;
}
