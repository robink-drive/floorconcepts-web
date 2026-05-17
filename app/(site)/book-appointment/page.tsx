import type { Metadata } from "next";
import { SiteContainer } from "@/components/layout/site-container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Book Appointment | ${site.name}`,
};

export default function BookAppointmentPage() {
  return (
    <section className="py-20 sm:py-28">
      <SiteContainer className="max-w-2xl">
        <p className="section-eyebrow">Book</p>
        <h1 className="section-title mt-3">Book an appointment</h1>
        <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base">
          Schedule a showroom visit or in-home consultation. Online booking is
          coming soon—in the meantime, call or email our team.
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
        </ul>
      </SiteContainer>
    </section>
  );
}
