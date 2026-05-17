import { SiteContainer } from "@/components/layout/site-container";
import { valuesColumns } from "@/lib/site";

export function ValuesSection() {
  return (
    <section className="border-y border-border bg-background py-16 sm:py-24">
      <SiteContainer className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
        {valuesColumns.map((column) => (
          <div key={column.title}>
            <h2 className="section-title">{column.title}</h2>
            <p className="mt-5 text-[0.9375rem] leading-[1.75] text-muted-foreground sm:text-base">
              {column.body}
            </p>
          </div>
        ))}
      </SiteContainer>
    </section>
  );
}
