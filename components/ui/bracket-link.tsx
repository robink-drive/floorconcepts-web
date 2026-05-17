import Link from "next/link";
import { cn } from "@/lib/utils";

type BracketLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function BracketLink({ href, children, className }: BracketLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-block px-5 py-3 text-xs font-medium uppercase tracking-[0.28em] text-white transition-colors hover:text-white/85 sm:text-sm",
        className
      )}
    >
      <span
        className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l border-t border-white/90 transition-colors group-hover:border-white"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b border-r border-white/90 transition-colors group-hover:border-white"
        aria-hidden
      />
      {children}
    </Link>
  );
}
