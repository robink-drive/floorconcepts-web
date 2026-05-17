"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader, SITE_HEADER_OFFSET } from "@/components/layout/site-header";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <SiteHeader />
      <main className={cn(!isHome && SITE_HEADER_OFFSET)}>{children}</main>
      <SiteFooter />
    </>
  );
}
