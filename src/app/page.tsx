import { LandingPlaceholder } from "@/features/landing";
import { ROUTES } from "@/shared/constants/routes";
import { createMetadata } from "@/shared/lib/metadata";

export const metadata = createMetadata({
  title: "Educational Botanical Garden",
  description:
    "A living learning space foundation for botanical stories, conservation education, and institutional plant knowledge.",
  path: ROUTES.home,
});

export default function Home() {
  return <LandingPlaceholder />;
}
