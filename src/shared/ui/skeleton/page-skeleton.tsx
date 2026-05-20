import { AppContainer } from "@/shared/ui/container";

export function PageSkeleton() {
  return (
    <AppContainer className="section-spacing" aria-hidden="true">
      <div className="botanical-card p-6 md:p-10">
        <div className="skeleton-shimmer h-6 w-36 rounded-round" />
        <div className="mt-6 skeleton-shimmer h-12 w-full max-w-2xl rounded-md" />
        <div className="mt-4 skeleton-shimmer h-5 w-full max-w-xl rounded-md" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="skeleton-shimmer h-28 rounded-lg" />
          <div className="skeleton-shimmer h-28 rounded-lg" />
          <div className="skeleton-shimmer h-28 rounded-lg" />
        </div>
      </div>
    </AppContainer>
  );
}
