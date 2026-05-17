import { cn } from "@/lib/utils";

/** Related-items nav on detail pages (services, flooring). */
export function relatedNavLinkClass(active: boolean) {
  return cn(
    "text-[0.8125rem] uppercase tracking-[0.16em]",
    active
      ? "font-medium text-brand"
      : "text-foreground/60 hover:text-brand"
  );
}
