import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/shared/lib/cn";

type AppButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type AppButtonSize = "sm" | "md" | "lg";

type BaseAppButtonProps = {
  variant?: AppButtonVariant;
  size?: AppButtonSize;
};

type NativeButtonProps = BaseAppButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type AnchorButtonProps = BaseAppButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type AppButtonProps = NativeButtonProps | AnchorButtonProps;

const variantClassName: Record<AppButtonVariant, string> = {
  primary:
    "bg-[var(--color-primary-teal)] text-[var(--color-text-inverse)] shadow-botanical-glow hover:bg-[var(--color-primary-dark)]",
  secondary:
    "bg-[var(--color-accent-gold)] text-[var(--color-text-primary)] shadow-gold-glow hover:bg-[var(--color-accent-dark)]",
  outline:
    "border border-[rgba(43,168,162,0.34)] bg-[var(--color-surface-card)] text-[var(--color-primary-dark)] hover:bg-[var(--color-primary-bg)]",
  ghost: "bg-transparent text-[var(--color-primary-dark)] hover:bg-[rgba(43,168,162,0.10)]",
};

const sizeClassName: Record<AppButtonSize, string> = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-base",
};

export function AppButton(props: AppButtonProps) {
  const { className, variant = "primary", size = "md", href, ...rest } = props;
  const resolvedClassName = cn(
    "focus-ring inline-flex items-center justify-center rounded-round font-bold transition duration-200 ease-out motion-safe:hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60",
    variantClassName[variant],
    sizeClassName[size],
    className,
  );

  if (href) {
    return (
      <Link
        className={resolvedClassName}
        href={href}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      />
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button className={resolvedClassName} type={buttonProps.type ?? "button"} {...buttonProps} />
  );
}
