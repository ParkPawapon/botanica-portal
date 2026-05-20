import Link from "next/link";
import { navigationConfig } from "@/config/navigation.config";

export function MainNav() {
  return (
    <nav aria-label="Main navigation">
      <ul className="flex flex-wrap items-center gap-2 text-sm font-semibold text-[var(--color-primary-dark)]">
        {navigationConfig.mainNav.map((item) => (
          <li key={item.href}>
            <Link
              className="focus-ring rounded-round px-3 py-2 transition hover:bg-[rgba(43,168,162,0.10)]"
              href={item.href}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
