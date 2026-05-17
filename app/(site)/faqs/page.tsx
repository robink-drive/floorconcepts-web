import type { Metadata } from "next";
import { SiteContainer } from "@/components/layout/site-container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `FAQs | ${site.name}`,
};

export default function FaqsPage() {
  return (
    <section className="py-20 sm:py-28">
      <SiteContainer className="max-w-2xl">
        <p className="section-eyebrow">FAQs</p>
        <h1 className="section-title mt-3">Frequently asked questions</h1>
        <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base">
          Common questions about products, installation, warranties, and
          showroom visits will be added here. Contact us if you need help in the
          meantime.
        </p>
      </SiteContainer>
    </section>
  );
}
