import type { HTMLAttributes } from "react";
import { cn } from "@/shared/lib/cn";

type AppContainerProps = HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "section";
};

export function AppContainer({ as: Component = "div", className, ...props }: AppContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-[var(--container-max)] px-[var(--container-padding)]",
        className,
      )}
      {...props}
    />
  );
}
