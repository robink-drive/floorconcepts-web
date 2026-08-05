import type { Metadata } from "next";
import Link from "next/link";
import { SiteContainer } from "@/components/layout/site-container";
import { services } from "@/lib/services";
import { serviceHref, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Services | ${site.name}`,
};

export default function ServicesPage() {
  return (
    <section className="py-20 sm:py-28">
      <SiteContainer>
        <p className="section-eyebrow">Services</p>
        <h1 className="section-title mt-3">Our Services</h1>
        <p className="mt-5 max-w-2xl text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base">
          From residential upgrades to commercial installs and insurance
          restoration, Floor Concepts supports your project end to end.
        </p>
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                href={serviceHref(service.slug)}
                className="group flex h-full flex-col border border-brand/10 bg-brand-surface p-6 transition-colors hover:border-brand/30"
              >
                <h2 className="font-serif text-xl text-brand group-hover:text-brand/80">
                  {service.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <span className="mt-5 text-[0.75rem] font-medium uppercase tracking-[0.2em] text-brand">
                  Learn more →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </SiteContainer>
    </section>
  );
}
