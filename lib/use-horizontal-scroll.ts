"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type UseHorizontalScrollOptions = {
  slideSelector: string;
  gap: number;
  /** Fraction of viewport width when slide size cannot be measured */
  fallbackRatio?: number;
};

export function useHorizontalScroll({
  slideSelector,
  gap,
  fallbackRatio = 0.75,
}: UseHorizontalScrollOptions) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateButtons = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 2);
    setCanNext(el.scrollLeft < maxScroll - 2);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateButtons();
    el.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);
    return () => {
      el.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, [updateButtons]);

  const scroll = useCallback(
    (direction: "prev" | "next") => {
      const el = trackRef.current;
      if (!el) return;
      const slide = el.querySelector<HTMLElement>(slideSelector);
      const amount = slide
        ? slide.offsetWidth + gap
        : el.clientWidth * fallbackRatio;
      el.scrollBy({
        left: direction === "next" ? amount : -amount,
        behavior: "smooth",
      });
    },
    [slideSelector, gap, fallbackRatio]
  );

  return { trackRef, canPrev, canNext, scroll };
}
