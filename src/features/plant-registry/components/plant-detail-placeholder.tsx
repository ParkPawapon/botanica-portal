import { AppCard } from "@/shared/ui/card";
import { AppContainer } from "@/shared/ui/container";

type PlantDetailPlaceholderProps = {
  slug: string;
};

export function PlantDetailPlaceholder({ slug }: PlantDetailPlaceholderProps) {
  return (
    <section className="section-spacing">
      <AppContainer className="max-w-4xl">
        <AppCard className="p-6 md:p-10">
          <p className="text-sm font-bold uppercase text-[var(--color-primary-dark)]">
            Future plant detail record
          </p>
          <h1 className="mt-4 text-4xl font-bold text-[var(--color-text-primary)] md:text-5xl">
            {slug}
          </h1>
          <p className="mt-5 max-w-2xl leading-8 text-[var(--color-primary-dark)]">
            This dynamic route is ready for complete plant data, morphology, ecological importance,
            educational use, garden location, image gallery, QR learning support, SEO metadata, and
            structured data.
          </p>
        </AppCard>
      </AppContainer>
    </section>
  );
}
