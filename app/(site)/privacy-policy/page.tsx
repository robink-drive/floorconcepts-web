import type { Metadata } from "next";
import Link from "next/link";
import { SiteContainer } from "@/components/layout/site-container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${site.name}`,
};

export default function PrivacyPolicyPage() {
  return (
    <article className="bg-background py-28 sm:py-32">
      <SiteContainer className="max-w-3xl">
        <p className="section-eyebrow">Legal</p>
        <h1 className="section-title mt-3">Privacy Policy</h1>
        <div className="mt-8 space-y-5 text-[0.9375rem] leading-relaxed text-muted-foreground">
          <p>
            This page is a placeholder for {site.name} privacy policy. Replace
            this content with your finalized legal copy before launch.
          </p>
          <p>
            We respect your privacy and will describe how personal information
            is collected, used, and protected when you contact us, request a
            quote, or browse our site.
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
