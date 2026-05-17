import Link from "next/link";
import { SiteContainer } from "@/components/layout/site-container";
import { Logo } from "@/components/layout/logo";
import { footerNav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-brand/10 bg-brand-surface">
      <SiteContainer className="py-14 lg:py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr_0.9fr_1fr] lg:gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-5 max-w-xs text-[0.9375rem] leading-relaxed text-muted-foreground">
              Exquisite flooring solutions for residential and commercial
              spaces.
            </p>
          </div>

          <div>
            <h2 className="section-eyebrow">Quick Links</h2>
            <ul className="mt-4 space-y-2.5">
              {footerNav.quickLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="section-eyebrow">Products</h2>
            <ul className="mt-4 space-y-2.5">
              {footerNav.products.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="section-eyebrow">Contact</h2>
            <ul className="mt-4 space-y-2.5 text-[0.9375rem] text-foreground/80">
              <li>
                <a href={site.phoneHref} className="hover:text-brand">
                  Phone: {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-brand">
                  Email: {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.locationHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand"
                >
                  {site.location}
                </a>
              </li>
            </ul>
            <div className="mt-5 flex gap-5">
              <SocialLink href={site.facebook} label="Facebook" />
              <SocialLink href={site.instagram} label="Instagram" />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-brand/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-6">
            {footerNav.legal.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs text-muted-foreground transition-colors hover:text-brand"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </SiteContainer>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-[0.9375rem] text-foreground/80 transition-colors hover:text-brand"
    >
      {children}
    </Link>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-brand/75 hover:text-brand"
    >
      {label}
    </a>
  );
}
