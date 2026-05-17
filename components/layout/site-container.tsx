import { cn } from "@/lib/utils";

type SiteContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "nav" | "article";
};

/** Ashley-style horizontal rhythm: ~5.5% side padding, capped content width. */
export function SiteContainer({
  children,
  className,
  as: Component = "div",
}: SiteContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-[90rem] px-[clamp(1.25rem,5.5vw,5.5rem)]",
        className
      )}
    >
      {children}
    </Component>
  );
}
