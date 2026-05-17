import { SiteContainer } from "@/components/layout/site-container";
import { QuoteCtaButton } from "@/components/ui/quote-cta-button";

export function QuoteSection() {
  return (
    <section className="bg-brand py-16 sm:py-20">
      <SiteContainer className="flex flex-col items-center text-center">
        <p className="section-eyebrow text-white/70">Get started</p>
        <h2 className="mt-3 max-w-xl font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-tight text-white">
          Ready to bring your flooring vision to life?
        </h2>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base">
          Request a quote and our team will follow up with guidance tailored to
          your space, timeline, and budget.
        </p>
        <div className="mt-10">
          <QuoteCtaButton variant="inverse" />
        </div>
      </SiteContainer>
    </section>
  );
}
