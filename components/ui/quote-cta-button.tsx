"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

type QuoteCtaButtonProps = {
  className?: string;
  fullWidth?: boolean;
  variant?: "default" | "inverse";
};

export function QuoteCtaButton({
  className,
  fullWidth,
  variant = "default",
}: QuoteCtaButtonProps) {
  const isInverse = variant === "inverse";

  return (
    <Link
      href={site.quoteHref}
      className={cn(
        "quote-cta group relative inline-flex items-center justify-center overflow-hidden border px-8 py-3.5 text-center text-[0.8125rem] font-medium uppercase tracking-[0.22em] transition-colors",
        isInverse
          ? "border-white text-white hover:text-brand"
          : "border-brand text-brand hover:text-brand-surface",
        fullWidth && "w-full",
        className
      )}
    >
      <span
        className={cn(
          "absolute inset-0 -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0",
          isInverse ? "bg-white" : "bg-brand"
        )}
        aria-hidden
      />
      <span className="relative z-10">Request A Quote</span>
    </Link>
  );
}
