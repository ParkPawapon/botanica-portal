import { LearningHubPlaceholder } from "@/features/learning-hub";
import { ROUTES } from "@/shared/constants/routes";
import { createMetadata } from "@/shared/lib/metadata";

export const metadata = createMetadata({
  title: "Botanical Learning & Exploration Hub",
  description:
    "Placeholder route for future interactive garden maps, missions, field learning, and biodiversity activities.",
  path: ROUTES.learningHub,
  keywords: [
    "botanical learning",
    "interactive garden map",
    "learning missions",
    "biodiversity quiz",
  ],
});

export default function LearningHubPage() {
  return <LearningHubPlaceholder />;
}
