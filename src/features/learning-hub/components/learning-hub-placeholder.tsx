import { AppCard } from "@/shared/ui/card";
import { AppContainer } from "@/shared/ui/container";
import { SectionHeading } from "@/shared/ui/section";

const plannedExperiences = [
  "Interactive garden map",
  "Plant discovery trail",
  "Biodiversity quiz",
  "Field study worksheets",
];

export function LearningHubPlaceholder() {
  return (
    <section className="section-spacing botanical-gradient">
      <AppContainer>
        <AppCard className="p-6 md:p-10">
          <SectionHeading
            title="Botanical Learning & Exploration Hub"
            description="This route is prepared for an interactive learning experience where students, teachers, visitors, and administrators can explore garden knowledge through missions, maps, QR activities, and seasonal highlights."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {plannedExperiences.map((experience) => (
              <div
                key={experience}
                className="rounded-lg bg-[var(--color-surface-card)] p-4 text-sm font-semibold text-[var(--color-primary-dark)] shadow-botanical-card"
              >
                {experience}
              </div>
            ))}
          </div>
        </AppCard>
      </AppContainer>
    </section>
  );
}
