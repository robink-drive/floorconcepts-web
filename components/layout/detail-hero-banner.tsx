import Image from "next/image";
import { SiteContainer } from "@/components/layout/site-container";

type DetailHeroBannerProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export function DetailHeroBanner({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: DetailHeroBannerProps) {
  return (
    <section className="relative isolate flex min-h-[calc(100dvh-100px)] items-center overflow-hidden border-b border-brand/10">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-linear-to-r from-brand-surface from-35% via-brand-surface/75 via-55% to-brand-surface/15"
        aria-hidden
      />
      <SiteContainer className="relative z-10">
        <div className="max-w-xl">
          <p className="section-eyebrow">{eyebrow}</p>
          <h1 className="section-title mt-3">{title}</h1>
          <p className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base">
            {description}
          </p>
        </div>
      </SiteContainer>
    </section>
  );
}
