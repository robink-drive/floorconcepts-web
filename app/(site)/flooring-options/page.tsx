import type { Metadata } from "next";
import Link from "next/link";
import { SiteContainer } from "@/components/layout/site-container";
import { flooringTypes } from "@/lib/flooring";
import { flooringHref, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Flooring Options | ${site.name}`,
};

export default function FlooringOptionsPage() {
  return (
    <section className="py-20 sm:py-28">
      <SiteContainer>
        <p className="section-eyebrow">Explore</p>
        <h1 className="section-title mt-3">Flooring Options</h1>
        <p className="mt-5 max-w-2xl text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base">
          Browse by flooring type. Each page outlines available styles. Visit our
          showroom for samples and expert recommendations.
        </p>
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {flooringTypes.map((type) => (
            <li key={type.slug}>
              <Link
                href={flooringHref(type.slug)}
                className="group flex h-full flex-col border border-brand/10 bg-brand-surface p-6 transition-colors hover:border-brand/30"
              >
                <h2 className="font-serif text-xl text-brand group-hover:text-brand/80">
                  {type.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {type.description}
                </p>
                <span className="mt-5 text-[0.75rem] font-medium uppercase tracking-[0.2em] text-brand">
                  View styles →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </SiteContainer>
    </section>
  );
}
