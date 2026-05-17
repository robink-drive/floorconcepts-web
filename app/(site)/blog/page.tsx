import type { Metadata } from "next";
import { SiteContainer } from "@/components/layout/site-container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Blog | ${site.name}`,
};

export default function BlogPage() {
  return (
    <section className="py-20 sm:py-28">
      <SiteContainer className="max-w-2xl">
        <p className="section-eyebrow">Blog</p>
        <h1 className="section-title mt-3">Flooring insights &amp; inspiration</h1>
        <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base">
          Articles and project highlights are coming soon. Check back for tips on
          materials, maintenance, and design trends.
        </p>
      </SiteContainer>
    </section>
  );
}
