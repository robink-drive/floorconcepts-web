import type { Metadata } from "next";
import { SiteContainer } from "@/components/layout/site-container";
import { partners, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Our Suppliers | ${site.name}`,
};

export default function OurSuppliersPage() {
  return (
    <section className="py-20 sm:py-28">
      <SiteContainer className="max-w-2xl">
        <p className="section-eyebrow">Resources</p>
        <h1 className="section-title mt-3">Our Suppliers</h1>
        <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base">
          We partner with trusted manufacturers to bring you quality flooring
          products. Visit our showroom to explore samples from brands including:
        </p>
        <ul className="mt-8 flex flex-wrap gap-3">
          {partners.map((name) => (
            <li
              key={name}
              className="border border-brand/10 bg-brand-surface px-4 py-2 text-[0.8125rem] font-medium uppercase tracking-[0.12em] text-brand/80"
            >
              {name}
            </li>
          ))}
        </ul>
      </SiteContainer>
    </section>
  );
}
