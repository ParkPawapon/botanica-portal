"use client";

import { AppButton } from "@/shared/ui/button";

export default function ErrorBoundary({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="section-spacing">
      <div className="mx-auto max-w-xl px-[var(--container-padding)] text-center">
        <div className="botanical-card p-8">
          <h1 className="text-3xl font-bold text-[var(--color-coral-dark)]">
            Something went wrong
          </h1>
          <p className="mt-4 leading-7 text-[var(--color-primary-dark)]">
            The garden experience could not be loaded. Try again to reload this route.
          </p>
          <AppButton className="mt-6" onClick={() => reset()}>
            Try again
          </AppButton>
        </div>
      </div>
    </section>
  );
}
