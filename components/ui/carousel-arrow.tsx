import { cn } from "@/lib/utils";

type CarouselArrowProps = {
  direction: "prev" | "next";
  label: string;
  disabled: boolean;
  onClick: () => void;
  className?: string;
};

export function CarouselArrow({
  direction,
  label,
  disabled,
  onClick,
  className,
}: CarouselArrowProps) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "flex size-10 shrink-0 items-center justify-center rounded-full border border-brand/25 text-brand transition-colors",
        "hover:border-brand/45 hover:bg-white/80",
        "disabled:pointer-events-none disabled:opacity-25",
        className
      )}
    >
      <Chevron direction={direction} />
    </button>
  );
}

function Chevron({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      aria-hidden
      className={direction === "next" ? "translate-x-px" : "-translate-x-px"}
    >
      <path
        d={direction === "next" ? "M1 1l6 6-6 6" : "M7 1L1 7l6 6"}
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
