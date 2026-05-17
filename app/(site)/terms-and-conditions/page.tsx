import type { Metadata } from "next";
import Link from "next/link";
import { SiteContainer } from "@/components/layout/site-container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Terms and Conditions | ${site.name}`,
};

export default function TermsAndConditionsPage() {
  return (
    <article className="bg-background py-28 sm:py-32">
      <SiteContainer className="max-w-3xl">
        <p className="section-eyebrow">Legal</p>
        <h1 className="section-title mt-3">Terms and Conditions</h1>
        <div className="mt-8 space-y-5 text-[0.9375rem] leading-relaxed text-muted-foreground">
          <p>
            This page is a placeholder for {site.name} terms and conditions.
            Replace this content with your finalized legal copy before launch.
          </p>
          <p>
            By using this website, you agree to review and accept the terms that
            will govern use of our services, quotes, product information, and
            communications.
          </p>
        </div>
        <Link
          href="/"
          className="mt-10 inline-block text-[0.8125rem] font-medium uppercase tracking-[0.2em] text-brand hover:text-brand/80"
        >
          ← Back to home
        </Link>
      </SiteContainer>
    </article>
  );
}
