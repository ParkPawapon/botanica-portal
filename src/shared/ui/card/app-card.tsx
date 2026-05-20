import type { HTMLAttributes } from "react";
import { cn } from "@/shared/lib/cn";

export function AppCard({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("botanical-card", className)} {...props} />;
}
