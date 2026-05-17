import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "light" | "dark";
};

export function Logo({ className, variant = "dark" }: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex flex-col items-center text-center leading-none transition-opacity hover:opacity-90",
        className
      )}
    >
      <span
        className={cn(
          "font-serif text-[1.75rem] font-semibold tracking-tight sm:text-[1.9rem]",
          isLight ? "text-white" : "text-brand"
        )}
      >
        flooring
      </span>
      <span
        className={cn(
          "mt-1 text-[0.6rem] font-medium uppercase tracking-[0.44em] sm:text-[0.625rem]",
          isLight ? "text-white/75" : "text-brand-muted"
        )}
      >
        Concepts
      </span>
    </Link>
  );
}
