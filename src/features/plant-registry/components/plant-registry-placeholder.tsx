import { AppCard } from "@/shared/ui/card";
import { AppContainer } from "@/shared/ui/container";
import { SectionHeading } from "@/shared/ui/section";

const futureCapabilities = ["Search", "Filter", "Sort", "Plant detail links"];

export function PlantRegistryPlaceholder() {
  return (
    <section className="section-spacing">
      <AppContainer>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            title="Plant Registry"
            description="This route is reserved for a searchable plant collection with local names, scientific names, morphology, garden locations, images, QR support, SEO metadata, and structured data."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {futureCapabilities.map((capability) => (
              <AppCard key={capability} className="p-5">
                <p className="text-lg font-bold text-[var(--color-text-primary)]">{capability}</p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-primary-dark)]">
                  Placeholder boundary for the future registry interface.
                </p>
              </AppCard>
            ))}
          </div>
        </div>
      </AppContainer>
    </section>
  );
}
