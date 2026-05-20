import { ROUTES } from "@/shared/constants/routes";
import { AppButton } from "@/shared/ui/button";
import { AppCard } from "@/shared/ui/card";
import { AppContainer } from "@/shared/ui/container";
import { SectionHeading } from "@/shared/ui/section";

const plannedSections = ["Origin story", "Garden vision", "Featured plant collections"];

export function LandingPlaceholder() {
  return (
    <section className="section-spacing botanical-gradient">
      <AppContainer>
        <AppCard className="grid gap-8 p-6 md:grid-cols-[1.2fr_0.8fr] md:p-10">
          <div>
            <SectionHeading
              title="Educational Botanical Garden"
              description="This landing route is prepared for a future story-rich homepage about the garden as a living learning space for nature, conservation, biodiversity, and institutional pride."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <AppButton href={ROUTES.plants}>Plant registry</AppButton>
              <AppButton href={ROUTES.learningHub} variant="outline">
                Learning hub
              </AppButton>
            </div>
          </div>
          <div className="rounded-xl bg-[var(--color-cream)] p-5 shadow-botanical-card">
            <p className="text-sm font-bold uppercase text-[var(--color-primary-dark)]">
              Future homepage foundation
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--color-primary-dark)]">
              {plannedSections.map((section) => (
                <li key={section} className="rounded-md bg-[var(--color-surface-card)] px-4 py-3">
                  {section}
                </li>
              ))}
            </ul>
          </div>
        </AppCard>
      </AppContainer>
    </section>
  );
}
