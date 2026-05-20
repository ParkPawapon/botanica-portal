import { AppContainer } from "@/shared/ui/container";
import { PlantCardSkeleton } from "@/shared/ui/skeleton";

export default function PlantsLoading() {
  return (
    <AppContainer className="section-spacing" aria-hidden="true">
      <div className="grid gap-5 md:grid-cols-3">
        <PlantCardSkeleton />
        <PlantCardSkeleton />
        <PlantCardSkeleton />
      </div>
    </AppContainer>
  );
}
