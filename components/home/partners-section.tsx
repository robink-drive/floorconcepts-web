import { SiteContainer } from "@/components/layout/site-container";
import { PartnersSlider } from "@/components/home/partners-slider";
import { SectionHeading } from "@/components/ui/section-heading";

export function PartnersSection() {
  return (
    <section className="border-b border-border bg-brand-surface py-16 sm:py-24">
      <SiteContainer>
        <SectionHeading eyebrow="Brands" title="Our Trusted Partners" />
        <PartnersSlider />
      </SiteContainer>
    </section>
  );
}
