"use client";

import type { ReactNode } from "react";
import { CarouselArrow } from "@/components/ui/carousel-arrow";
import { useHorizontalScroll } from "@/lib/use-horizontal-scroll";
import { cn } from "@/lib/utils";

const trackBaseClass =
  "flex min-w-0 flex-1 snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden";

type HorizontalScrollCarouselProps = {
  ariaLabel: string;
  slideSelector: string;
  gap: number;
  fallbackRatio?: number;
  prevLabel: string;
  nextLabel: string;
  children: ReactNode;
  className?: string;
  trackClassName?: string;
  arrowClassName?: string;
};

export function HorizontalScrollCarousel({
  ariaLabel,
  slideSelector,
  gap,
  fallbackRatio,
  prevLabel,
  nextLabel,
  children,
  className,
  trackClassName,
  arrowClassName,
}: HorizontalScrollCarouselProps) {
  const { trackRef, canPrev, canNext, scroll } = useHorizontalScroll({
    slideSelector,
    gap,
    fallbackRatio,
  });

  return (
    <div
      className={cn("flex items-center gap-4 sm:gap-6", className)}
      aria-label={ariaLabel}
    >
      <CarouselArrow
        direction="prev"
        label={prevLabel}
        disabled={!canPrev}
        onClick={() => scroll("prev")}
        className={arrowClassName}
      />

      <div ref={trackRef} className={cn(trackBaseClass, trackClassName)}>
        {children}
      </div>

      <CarouselArrow
        direction="next"
        label={nextLabel}
        disabled={!canNext}
        onClick={() => scroll("next")}
        className={arrowClassName}
      />
    </div>
  );
}
