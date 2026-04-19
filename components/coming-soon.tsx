import Image from "next/image";

type ComingSoonProps = {
  title?: string;
  subtitle?: string;
};

export function ComingSoon({
  title = "Coming soon!",
  subtitle = "",
}: ComingSoonProps) {
  return (
    <section
      className="relative isolate flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-[#0b1220] px-6 py-16 text-center"
      aria-label={title}
    >
      <Image
        src="/coming-soon-bg.jpeg"
        alt=""
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        quality={72}
        decoding="async"
        className="z-0 object-cover"
      />
      <div
        className="pointer-events-none absolute inset-0 z-1 bg-linear-to-t from-black/55 via-black/40 to-black/40"
        aria-hidden
      />
      <p className="absolute inset-x-0 top-[min(6vh,7rem)] z-2 text-sm font-medium uppercase tracking-[0.35em] text-white/90 drop-shadow-[0_2px_14px_rgba(0,0,0,0.4)] sm:text-base">
        {subtitle}
      </p>
      <div className="relative z-2 flex max-w-4xl flex-col items-center rounded-2xl bg-black/50 px-8 py-6 ring-1 ring-black/30 backdrop-blur-sm sm:px-10 sm:py-8">
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.95),0_2px_24px_rgba(0,0,0,0.75)] sm:text-5xl md:text-9xl">
          {title}
        </h1>
      </div>
      <div className=" max-sm:hidden absolute right-3 bottom-8 z-2 bg-black/40 px-8 py-8 ring-1 ring-black/30 backdrop-blur-sm rounded-2xl">
      </div>
    </section>
  );
}
