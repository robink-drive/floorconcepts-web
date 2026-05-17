import type { Metadata } from "next";
import { SiteContainer } from "@/components/layout/site-container";
import { QuoteCtaButton } from "@/components/ui/quote-cta-button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact | ${site.name}`,
};

export default function ContactPage() {
  return (
    <section className="py-20 sm:py-28" id="quote">
      <SiteContainer className="max-w-2xl">
        <p className="section-eyebrow">Contact</p>
        <h1 className="section-title mt-3">Get in touch</h1>
        <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base">
          Visit our showroom, call, or email—we&apos;re happy to help with
          samples, estimates, and project planning.
        </p>
        <ul className="mt-8 space-y-3 text-[0.9375rem] text-foreground/85">
          <li>
            <a href={site.phoneHref} className="hover:text-brand">
              {site.phone}
            </a>
          </li>
          <li>
            <a href={`mailto:${site.email}`} className="hover:text-brand">
              {site.email}
            </a>
          </li>
          <li>
            <a
              href={site.locationHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand"
            >
              {site.location}
            </a>
          </li>
        </ul>
        <div className="mt-10">
          <QuoteCtaButton />
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Quote request form coming soon—button links here for lead capture
          integration.
        </p>
      </SiteContainer>
    </section>
  );
}
