import Link from "next/link";
import { SiteContainer } from "@/components/layout/site-container";

export function WelcomeSection() {
  return (
    <section className="border-b border-border bg-brand-surface py-16 sm:py-24">
      <SiteContainer className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="section-eyebrow">Welcome</p>
          <h2 className="section-title mt-3">Flooring Concepts</h2>
          <p className="mt-3 text-lg font-light text-foreground/75">
            Your destination for quality flooring
          </p>
        </div>
        <div className="space-y-5 text-[0.9375rem] leading-[1.75] text-muted-foreground sm:text-base">
          <p>
            At Flooring Concepts, quality means more than providing the best
            products. We go the extra mile to deliver a memorable customer
            experience, from your first visit through installation and beyond.
          </p>
          <p>
            Our team values your space, ideas, and budget as though they are our
            own. We are committed to staying within your guidelines and
            maintaining an efficient worksite so you receive an end result you
            are proud to show off.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-[0.8125rem] font-medium uppercase tracking-[0.2em] text-brand transition-colors hover:text-brand/80"
          >
            Read more
            <span aria-hidden>→</span>
          </Link>
        </div>
      </SiteContainer>
    </section>
  );
}
