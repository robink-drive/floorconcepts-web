"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  mobileNavItems,
  mobileNavPanels,
  site,
  type MobileNavPanelId,
} from "@/lib/site";
import { QuoteCtaButton } from "@/components/ui/quote-cta-button";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

const menuPadding = "px-[clamp(1.25rem,5.5vw,2.5rem)]";

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [activePanel, setActivePanel] = useState<MobileNavPanelId | null>(null);
  const visiblePanel = open ? activePanel : null;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (visiblePanel) setActivePanel(null);
      else onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, visiblePanel]);

  const handleClose = () => {
    setActivePanel(null);
    onClose();
  };

  return (
    <>
      <button
        type="button"
        aria-label="Close menu"
        onClick={handleClose}
        className={cn(
          "fixed inset-0 z-40 bg-black/40 transition-opacity duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      />
      <aside
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-[min(88vw,28rem)] flex-col overflow-hidden bg-brand-surface shadow-2xl transition-transform duration-300 ease-out sm:w-[min(32vw,26rem)]",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="relative flex min-h-0 flex-1 flex-col">
          <div className="flex min-h-0 flex-1 flex-col">
            <div
              className={cn(
                "flex items-center justify-between border-b border-brand/10 py-5",
                menuPadding
              )}
            >
              <a
                href={site.phoneHref}
                className="text-[0.9375rem] tracking-wide text-brand"
              >
                {site.phone}
              </a>
              <button
                type="button"
                onClick={handleClose}
                className="flex size-9 items-center justify-center text-brand"
                aria-label="Close menu"
              >
                <CloseIcon />
              </button>
            </div>

            <nav className={cn("flex-1 overflow-y-auto", menuPadding)}>
              <ul>
                {mobileNavItems.map((item) =>
                  item.type === "panel" ? (
                    <li key={item.label} className="border-b border-brand/10">
                      <div className="mobile-menu-panel-item">
                        <span className="mobile-menu-panel-label">
                          {item.label}
                        </span>
                        <PanelOpenButton
                          label={item.label}
                          onClick={() => setActivePanel(item.panel)}
                        />
                      </div>
                    </li>
                  ) : (
                    <li key={item.label} className="border-b border-brand/10">
                      <Link
                        href={item.href}
                        onClick={handleClose}
                        className="mobile-menu-link"
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </nav>

            <MenuFooter onClose={handleClose} />
          </div>

          {(Object.keys(mobileNavPanels) as MobileNavPanelId[]).map((panelId) => (
            <SubPanel
              key={panelId}
              open={visiblePanel === panelId}
              items={mobileNavPanels[panelId].items}
              onBack={() => setActivePanel(null)}
              onNavigate={handleClose}
            />
          ))}
        </div>
      </aside>
    </>
  );
}

function SubPanel({
  open,
  items,
  onBack,
  onNavigate,
}: {
  open: boolean;
  items: readonly { label: string; href: string }[];
  onBack: () => void;
  onNavigate: () => void;
}) {
  return (
    <div
      className={cn(
        "absolute inset-0 z-10 flex flex-col bg-brand-surface transition-transform duration-300 ease-out",
        open ? "translate-x-0" : "pointer-events-none translate-x-full"
      )}
      aria-hidden={!open}
    >
      <div className={cn("border-b border-brand/10 py-5", menuPadding)}>
        <button
          type="button"
          onClick={onBack}
          className="flex size-8 items-center justify-center rounded-full bg-brand/10 text-brand transition-colors hover:bg-brand/15"
          aria-label="Back to menu"
        >
          <BackIcon />
        </button>
      </div>

      <nav className={cn("flex-1 overflow-y-auto", menuPadding)}>
        <ul>
          {items.map((item) => (
            <li key={item.href} className="border-b border-brand/10">
              <Link
                href={item.href}
                onClick={onNavigate}
                className="mobile-menu-sub-link"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

function PanelOpenButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mobile-menu-panel-chevron flex size-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand transition-colors hover:bg-brand/15"
      aria-label={`Open ${label}`}
    >
      <svg width="8" height="8" viewBox="0 0 8 12" fill="none" aria-hidden>
        <path
          d="M1 1l5 5-5 5"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

function MenuFooter({ onClose }: { onClose: () => void }) {
  return (
    <div
      className={cn("space-y-5 border-t border-brand/10 py-6", menuPadding)}
    >
      <div className="mobile-menu-footer-contact">
        <a href={site.phoneHref} className="block hover:text-brand">
          {site.phone}
        </a>
        <a href={`mailto:${site.email}`} className="block hover:text-brand">
          {site.email}
        </a>
      </div>
      <div onClick={onClose}>
        <QuoteCtaButton fullWidth />
      </div>
      <div className="flex justify-end gap-4 pt-1">
        <SocialIcon href={site.facebook} label="Facebook">
          <FacebookIcon />
        </SocialIcon>
        <SocialIcon href={site.instagram} label="Instagram">
          <InstagramIcon />
        </SocialIcon>
        <SocialIcon href={site.linkedin} label="LinkedIn">
          <LinkedInIcon />
        </SocialIcon>
      </div>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BackIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 8 12" fill="none" aria-hidden>
      <path
        d="M7 1L2 6l5 5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-brand transition-colors hover:text-brand/75"
      aria-label={label}
    >
      {children}
    </a>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.127 0 2.062 2.062 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
