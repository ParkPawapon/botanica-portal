import { siteConfig } from "@/config/site.config";

export function SiteFooter() {
  return (
    <footer className="border-t border-[rgba(43,168,162,0.16)] bg-[var(--color-surface-base)]">
      <div className="mx-auto flex w-full max-w-[var(--container-max)] flex-col gap-2 px-[var(--container-padding)] py-8 text-sm text-[var(--color-primary-dark)] md:flex-row md:items-center md:justify-between">
        <p>{siteConfig.organizationName}</p>
        <p>{siteConfig.contactEmail}</p>
      </div>
    </footer>
  );
}
