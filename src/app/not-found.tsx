import { ROUTES } from "@/shared/constants/routes";
import { AppButton } from "@/shared/ui/button";

export default function NotFound() {
  return (
    <section className="section-spacing">
      <div className="mx-auto max-w-xl px-[var(--container-padding)] text-center">
        <div className="botanical-card p-8">
          <p className="text-sm font-bold uppercase text-[var(--color-coral)]">404</p>
          <h1 className="mt-3 text-3xl font-bold text-[var(--color-text-primary)]">
            Page not found
          </h1>
          <p className="mt-4 leading-7 text-[var(--color-primary-dark)]">
            This route is not part of the botanical garden foundation.
          </p>
          <AppButton className="mt-6" href={ROUTES.home}>
            Return home
          </AppButton>
        </div>
      </div>
    </section>
  );
}
