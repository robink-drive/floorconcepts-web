"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { mainNav, site } from "@/lib/site";
import { Logo } from "@/components/layout/logo";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { SiteContainer } from "@/components/layout/site-container";
import { SiteNavDropdown, SiteNavLink } from "@/components/layout/site-nav";

/** Matches Ashley Fine Floors header bar (~100px). */
export const SITE_HEADER_HEIGHT = "h-[100px]";
export const SITE_HEADER_OFFSET = "pt-[100px]";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isSolid = scrolled || !isHome;
  const isLight = isHome && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow] duration-300",
          isSolid
            ? "bg-brand-surface/95 shadow-[0_2px_16px_rgba(26,58,58,0.06)] backdrop-blur-md"
            : "bg-linear-to-b from-black/55 via-black/30 to-transparent"
        )}
      >
        <SiteContainer
          as="div"
          className={cn(
            // Mobile: logo left + menu right; lg+: centered logo between nav and actions
            "flex items-center justify-between gap-4 lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-6",
            SITE_HEADER_HEIGHT
          )}
        >
          <nav
            className="hidden min-w-0 items-center gap-5 lg:flex xl:gap-8"
            aria-label="Primary"
          >
            {mainNav.map((item) =>
              "children" in item && item.children ? (
                <SiteNavDropdown key={item.label} item={item} isLight={isLight} />
              ) : (
                <SiteNavLink key={item.label} href={item.href} isLight={isLight}>
                  {item.label}
                </SiteNavLink>
              )
            )}
          </nav>

          <div className="relative z-10 shrink-0 lg:justify-self-center">
            <Logo variant={isLight ? "light" : "dark"} />
          </div>

          <div className="flex min-w-0 items-center justify-end gap-4 sm:gap-5 xl:gap-8">
            <a
              href={site.phoneHref}
              className={cn(
                "hidden whitespace-nowrap text-sm tracking-wide transition-colors sm:inline",
                isLight
                  ? "text-white/95 hover:text-white"
                  : "text-brand hover:text-brand/75"
              )}
            >
              {site.phone}
            </a>
            <a
              href={site.locationHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "hidden whitespace-nowrap text-sm tracking-wide transition-colors xl:inline",
                isLight
                  ? "text-white/90 hover:text-white"
                  : "text-brand/80 hover:text-brand"
              )}
            >
              {site.location}
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className={cn(
                "flex shrink-0 flex-col items-end justify-center gap-[7px] p-2 transition-colors",
                isLight ? "text-white hover:text-white/85" : "text-brand hover:text-brand/75"
              )}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span className="block h-px w-7 bg-current" />
              <span className="block h-px w-5 bg-current" />
            </button>
          </div>
        </SiteContainer>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

