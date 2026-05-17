import { SiteContainer } from "@/components/layout/site-container";
import { TestimonialsSlider } from "@/components/home/testimonials-slider";
import { SectionHeading } from "@/components/ui/section-heading";

export function ReviewsSection() {
  return (
    <section className="bg-brand-surface py-16 sm:py-24" id="reviews">
      <SiteContainer>
        <SectionHeading
          eyebrow="Testimonials"
          title="Satisfied Clients"
          align="left"
          className="[&_.section-eyebrow]:text-[oklch(0.62_0.09_78)]"
        />
        <TestimonialsSlider />
      </SiteContainer>
    </section>
  );
}
