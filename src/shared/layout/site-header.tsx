import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import { ROUTES } from "@/shared/constants/routes";
import { Leaf } from "@/shared/icons";
import { MainNav } from "./main-nav";

export function SiteHeader() {
  return (
    <header className="border-b border-[rgba(43,168,162,0.16)] bg-[rgba(239,248,247,0.86)] backdrop-blur">
      <div className="mx-auto flex min-h-20 w-full max-w-[var(--container-max)] items-center justify-between gap-6 px-[var(--container-padding)]">
        <Link
          className="focus-ring inline-flex items-center gap-3 rounded-round"
          href={ROUTES.home}
        >
          <span className="inline-flex size-10 items-center justify-center rounded-round bg-[var(--color-primary-teal)] text-[var(--color-text-inverse)] shadow-botanical-glow">
            <Leaf aria-hidden="true" size={20} strokeWidth={2.4} />
          </span>
          <span className="text-base font-bold text-[var(--color-text-primary)]">
            {siteConfig.name}
          </span>
        </Link>
        <MainNav />
      </div>
    </header>
  );
}
