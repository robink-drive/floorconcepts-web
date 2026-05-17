import Link from "next/link";
import { cn } from "@/lib/utils";
import type { mainNav } from "@/lib/site";

export type MainNavItem = (typeof mainNav)[number];

const navTextClass =
  "text-[0.8125rem] font-normal uppercase tracking-[0.2em] transition-colors sm:text-sm";

export function SiteNavLink({
  href,
  children,
  isLight = false,
}: {
  href: string;
  children: React.ReactNode;
  isLight?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        navTextClass,
        "whitespace-nowrap",
        isLight ? "text-white/95 hover:text-white" : "text-brand hover:text-brand/75"
      )}
    >
      {children}
    </Link>
  );
}

export function SiteNavDropdown({
  item,
  isLight = false,
}: {
  item: MainNavItem;
  isLight?: boolean;
}) {
  if (!("children" in item) || !item.children) return null;

  return (
    <div className="group relative">
      <Link
        href={item.href}
        className={cn(
          navTextClass,
          "inline-flex items-center gap-1.5 whitespace-nowrap",
          isLight ? "text-white/95 hover:text-white" : "text-brand hover:text-brand/75"
        )}
      >
        {item.label}
        <NavChevron />
      </Link>
      <div className="pointer-events-none absolute left-0 top-full z-50 min-w-[17.5rem] pt-2 opacity-0 transition-opacity duration-200 group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:opacity-100">
        <ul className="dropdown-panel">
          {item.children.map((child) => (
            <li key={child.href}>
              <Link href={child.href} className="dropdown-item">
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function NavChevron() {
  return (
    <svg width="9" height="9" viewBox="0 0 12 12" fill="none" aria-hidden className="shrink-0">
      <path
        d="M3 4.5L6 7.5L9 4.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
