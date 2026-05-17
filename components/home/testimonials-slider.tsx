"use client";

import Image from "next/image";
import { useState } from "react";
import { HorizontalScrollCarousel } from "@/components/ui/horizontal-scroll-carousel";
import { cn } from "@/lib/utils";
import { testimonials, type Testimonial } from "@/lib/site";

const TRUNCATE_AT = 200;

export function TestimonialsSlider() {
  return (
    <HorizontalScrollCarousel
      ariaLabel="Client testimonials"
      slideSelector="[data-testimonial-slide]"
      gap={24}
      fallbackRatio={0.85}
      prevLabel="Previous testimonials"
      nextLabel="Next testimonials"
      className="mt-12 items-stretch sm:mt-14"
      trackClassName="gap-6 py-1"
      arrowClassName="self-center"
    >
      {testimonials.map((item) => (
        <div
          key={item.name}
          data-testimonial-slide
          className="w-full shrink-0 snap-start sm:w-[calc(50%-0.75rem)]"
        >
          <TestimonialCard testimonial={item} />
        </div>
      ))}
    </HorizontalScrollCarousel>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = testimonial.text.length > TRUNCATE_AT;
  const displayText =
    expanded || !isLong
      ? testimonial.text
      : `${testimonial.text.slice(0, TRUNCATE_AT).trimEnd()}…`;

  const initial = testimonial.name.charAt(0).toUpperCase();

  return (
    <article className="flex h-full flex-col rounded-lg border border-brand/20 bg-white p-5 sm:p-6">
      <header className="flex items-start gap-3">
        {testimonial.avatar ? (
          <Image
            src={testimonial.avatar}
            alt=""
            width={48}
            height={48}
            className="size-12 shrink-0 rounded-full object-cover"
          />
        ) : (
          <span
            className={cn(
              "flex size-12 shrink-0 items-center justify-center rounded-full text-lg font-medium text-white",
              testimonial.avatarColor ?? "bg-[oklch(0.62_0.14_45)]"
            )}
            aria-hidden
          >
            {initial}
          </span>
        )}
        <div className="min-w-0 flex-1 pt-0.5">
          <p className="text-[0.9375rem] font-medium text-[oklch(0.45_0.08_250)]">
            {testimonial.name}
          </p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {testimonial.relativeDate}
          </p>
        </div>
      </header>

      <div
        className="mt-4 flex gap-0.5 text-[oklch(0.68_0.16_55)]"
        aria-label={`${testimonial.rating} out of 5 stars`}
      >
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} />
        ))}
      </div>

      <p className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-brand/85">
        {displayText}
        {isLong && !expanded ? (
          <>
            {" "}
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="font-medium text-brand underline underline-offset-2 hover:text-brand/80"
            >
              read more
            </button>
          </>
        ) : null}
      </p>
    </article>
  );
}

function Star() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.35 5.06 16.7l.94-5.5-4-3.9 5.53-.8L10 1.5z" />
    </svg>
  );
}
