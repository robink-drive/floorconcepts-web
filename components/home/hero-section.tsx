import Image from "next/image";
import { BracketLink } from "@/components/ui/bracket-link";
import { SiteContainer } from "@/components/layout/site-container";
import { site } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[min(88dvh,52rem)] items-center overflow-hidden">
      <Image
        src="/coming-soon-bg.jpeg"
        alt="Modern interior with premium hardwood flooring"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-linear-to-r from-black/65 via-black/40 to-black/25"
        aria-hidden
      />
      <SiteContainer className="relative z-10 py-20">
        <div className="max-w-2xl">
          <h1 className="hero-title">{site.tagline}</h1>
          <p className="hero-subtitle mt-4">with Floor Concepts</p>
          <div className="mt-12">
            <BracketLink href="/flooring-options">
              Explore flooring options
            </BracketLink>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
