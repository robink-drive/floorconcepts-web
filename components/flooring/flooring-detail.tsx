import Link from "next/link";
import { DetailHeroBanner } from "@/components/layout/detail-hero-banner";
import { SiteContainer } from "@/components/layout/site-container";
import { QuoteCtaButton } from "@/components/ui/quote-cta-button";
import type { FlooringType } from "@/lib/flooring";
import { flooringTypes } from "@/lib/flooring";
import { relatedNavLinkClass } from "@/lib/link-styles";
import { flooringHref } from "@/lib/site";

type FlooringDetailProps = {
  flooring: FlooringType;
};

export function FlooringDetail({ flooring }: FlooringDetailProps) {
  return (
    <>
      <DetailHeroBanner
        eyebrow="Flooring Options"
        title={flooring.title}
        description={flooring.intro}
        image={flooring.image}
        imageAlt={flooring.imageAlt}
      />

      <section className="py-16 sm:py-24">
        <SiteContainer>
          <h2 className="section-eyebrow">Styles</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Explore style families—we&apos;ll help you narrow selections in the
            showroom. No product catalogue on this page.
          </p>
          <ul className="mt-10 divide-y divide-brand/10 border-y border-brand/10">
            {flooring.styles.map((style, index) => (
              <li
                key={style.name}
                className="grid gap-3 py-8 sm:grid-cols-[minmax(9rem,12rem)_1fr] sm:gap-10"
              >
                <p className="text-[0.8125rem] font-medium uppercase tracking-[0.18em] text-brand">
                  <span className="text-brand-muted">{String(index + 1).padStart(2, "0")}</span>
                  <span className="ml-3">{style.name}</span>
                </p>
                <p className="text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base">
                  {style.description}
                </p>
              </li>
            ))}
          </ul>
        </SiteContainer>
      </section>

      <section className="border-t border-brand/10 bg-brand-surface py-14">
        <SiteContainer className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="section-eyebrow">More options</p>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              Compare other flooring types or speak with our team about samples.
            </p>
          </div>
          <QuoteCtaButton />
        </SiteContainer>
      </section>

      <section className="border-t border-brand/10 py-12">
        <SiteContainer>
          <p className="section-eyebrow mb-6">All flooring types</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {flooringTypes.map((type) => (
              <li key={type.slug}>
                <Link
                  href={flooringHref(type.slug)}
                  className={relatedNavLinkClass(type.slug === flooring.slug)}
                >
                  {type.title}
                </Link>
              </li>
            ))}
          </ul>
        </SiteContainer>
      </section>
    </>
  );
}
