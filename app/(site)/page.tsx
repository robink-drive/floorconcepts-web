import type { Metadata } from "next";
import { HeroSection } from "@/components/home/hero-section";
import { WelcomeSection } from "@/components/home/welcome-section";
// import { InstagramSection } from "@/components/home/instagram-section";
import { PartnersSection } from "@/components/home/partners-section";
import { QuoteSection } from "@/components/home/quote-section";
import { ReviewsSection } from "@/components/home/reviews-section";
import { ValuesSection } from "@/components/home/values-section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} | Quality Flooring`,
  description:
    "Floor Concepts offers premium flooring products and installation for residential and commercial spaces.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <PartnersSection />
      <ValuesSection />
      <ReviewsSection />
      <QuoteSection />
      {/* <InstagramSection /> */}
    </>
  );
}
