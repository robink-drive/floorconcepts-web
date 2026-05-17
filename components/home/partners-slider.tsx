"use client";

import Image from "next/image";
import { HorizontalScrollCarousel } from "@/components/ui/horizontal-scroll-carousel";
import { partnerLogos } from "@/lib/site";

export function PartnersSlider() {
  return (
    <HorizontalScrollCarousel
      ariaLabel="Partner logos"
      slideSelector="[data-partner-slide]"
      gap={32}
      fallbackRatio={0.75}
      prevLabel="Previous partners"
      nextLabel="Next partners"
      className="mt-14 gap-4 sm:gap-6 lg:gap-10"
      trackClassName="gap-8 py-2"
    >
      {partnerLogos.map((partner) => (
        <div
          key={partner.name}
          data-partner-slide
          className="flex w-[calc(50%-1rem)] shrink-0 snap-start items-center justify-center sm:w-[calc(33.333%-1.35rem)] lg:w-[calc(25%-1.5rem)]"
        >
          <Image
            src={partner.logo}
            alt={partner.alt}
            width={280}
            height={80}
            className="h-11 w-auto max-w-full object-contain object-center sm:h-14 lg:h-16"
          />
        </div>
      ))}
    </HorizontalScrollCarousel>
  );
}
