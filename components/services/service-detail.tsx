import Link from "next/link";
import { DetailHeroBanner } from "@/components/layout/detail-hero-banner";
import { SiteContainer } from "@/components/layout/site-container";
import { QuoteCtaButton } from "@/components/ui/quote-cta-button";
import type { Service } from "@/lib/services";
import { services } from "@/lib/services";
import { relatedNavLinkClass } from "@/lib/link-styles";
import { serviceHref } from "@/lib/site";

type ServiceDetailProps = {
  service: Service;
};

export function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <>
      <DetailHeroBanner
        eyebrow="Services"
        title={service.title}
        description={service.intro}
        image={service.image}
        imageAlt={service.imageAlt}
      />

      <section className="py-16 sm:py-24">
        <SiteContainer>
          <h2 className="section-eyebrow">What we offer</h2>
          <ul className="mt-10 divide-y divide-brand/10 border-y border-brand/10">
            {service.highlights.map((highlight, index) => (
              <li
                key={highlight}
                className="grid gap-3 py-8 sm:grid-cols-[minmax(3rem,4rem)_1fr] sm:gap-10"
              >
                <p className="text-[0.8125rem] font-medium uppercase tracking-[0.18em] text-brand-muted">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base">
                  {highlight}
                </p>
              </li>
            ))}
          </ul>
        </SiteContainer>
      </section>

      <section className="border-t border-brand/10 bg-brand-surface py-14">
        <SiteContainer className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="section-eyebrow">Ready to start?</p>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              Book an appointment or contact our team to discuss your project.
            </p>
          </div>
          <QuoteCtaButton />
        </SiteContainer>
      </section>

      <section className="border-t border-brand/10 py-12">
        <SiteContainer>
          <p className="section-eyebrow mb-6">All services</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {services.map((item) => (
              <li key={item.slug}>
                <Link
                  href={serviceHref(item.slug)}
                  className={relatedNavLinkClass(item.slug === service.slug)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </SiteContainer>
      </section>
    </>
  );
}
