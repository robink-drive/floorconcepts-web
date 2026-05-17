import type { Metadata } from "next";
import { SiteContainer } from "@/components/layout/site-container";
import { QuoteCtaButton } from "@/components/ui/quote-cta-button";
import { site, valuesColumns } from "@/lib/site";

export const metadata: Metadata = {
  title: `About | ${site.name}`,
};

export default function AboutPage() {
  return (
    <section className="py-20 sm:py-28">
      <SiteContainer>
        <p className="section-eyebrow">About</p>
        <h1 className="section-title mt-3">About Flooring Concepts</h1>
        <p className="mt-5 max-w-2xl text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base">
          We guide you from inspiration to installation with transparent
          communication, respect for your budget, and craftsmanship you can see
          in every detail.
        </p>
        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
          {valuesColumns.map((column) => (
            <div key={column.title}>
              <h2 className="font-serif text-xl text-brand">{column.title}</h2>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base">
                {column.body}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-14">
          <QuoteCtaButton />
        </div>
      </SiteContainer>
    </section>
  );
}
