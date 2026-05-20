import type { Metadata } from "next";
import { PlantDetailPlaceholder } from "@/features/plant-registry";
import { ROUTES } from "@/shared/constants/routes";
import { createMetadata } from "@/shared/lib/metadata";

type PlantDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: PlantDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  return createMetadata({
    title: `Plant Detail: ${slug}`,
    description:
      "Placeholder metadata for a future plant detail record with structured botanical data.",
    path: ROUTES.plantDetail(slug),
    keywords: ["plant detail", "plant morphology", "botanical education", slug],
  });
}

export default async function PlantDetailPage({ params }: PlantDetailPageProps) {
  const { slug } = await params;

  return <PlantDetailPlaceholder slug={slug} />;
}
