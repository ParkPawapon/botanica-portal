export function PlantCardSkeleton() {
  return (
    <article className="botanical-card p-5" aria-hidden="true">
      <div className="skeleton-shimmer aspect-[4/3] rounded-md" />
      <div className="mt-5 skeleton-shimmer h-5 w-3/4 rounded-round" />
      <div className="mt-3 skeleton-shimmer h-4 w-1/2 rounded-round" />
      <div className="mt-6 skeleton-shimmer h-10 w-full rounded-round" />
    </article>
  );
}
