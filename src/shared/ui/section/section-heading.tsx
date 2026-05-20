import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

type SectionHeadingProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  description?: ReactNode;
};

export function SectionHeading({ title, description, className, ...props }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)} {...props}>
      <h1 className="text-balance text-4xl font-bold leading-tight text-[var(--color-text-primary)] md:text-5xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 text-base leading-8 text-[var(--color-text-secondary)] md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
