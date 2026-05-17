import { flooringTypes } from "@/lib/flooring";
import { services } from "@/lib/services";

export const site = {
  name: "Flooring Concepts",
  tagline: "Elevate Your Space",
  domain: "floorconcepts.ca",
  phone: "780-555-0100",
  phoneHref: "tel:+17805550100",
  email: "hello@floorconcepts.ca",
  location: "Edmonton, AB",
  locationHref: "https://maps.google.com",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  linkedin: "https://linkedin.com",
  quoteHref: "/book-appointment",
  /** Placeholder until Google Business Profile embed is configured */
  googleReviewsUrl: "https://www.google.com/maps",
  googleRating: 4.9,
  googleReviewCount: 120,
} as const;

export function flooringHref(slug: string) {
  return `/flooring-options/${slug}`;
}

export function serviceHref(slug: string) {
  return `/services/${slug}`;
}

export const mainNav = [
  {
    label: "Flooring Options",
    href: "/flooring-options",
    children: flooringTypes.map((type) => ({
      label: type.title,
      href: flooringHref(type.slug),
    })),
  },
  {
    label: "Services",
    href: "/services",
    children: services.map((service) => ({
      label: service.title,
      href: serviceHref(service.slug),
    })),
  },
  { label: "About", href: "/about" },
] as const;

export const mobileNavPanels = {
  flooring: {
    items: flooringTypes.map((type) => ({
      label: type.title,
      href: flooringHref(type.slug),
    })),
  },
  services: {
    items: services.map((service) => ({
      label: service.title,
      href: serviceHref(service.slug),
    })),
  },
  resources: {
    items: [
      { label: "FAQs", href: "/faqs" },
      { label: "Our Suppliers", href: "/our-suppliers" },
    ],
  },
} as const;

export type MobileNavPanelId = keyof typeof mobileNavPanels;

export const mobileNavItems = [
  { type: "link", label: "Home", href: "/" },
  { type: "panel", label: "Flooring Options", panel: "flooring" },
  { type: "panel", label: "Services", panel: "services" },
  { type: "link", label: "About", href: "/about" },
  { type: "panel", label: "Resources", panel: "resources" },
  { type: "link", label: "Blog", href: "/blog" },
  { type: "link", label: "Contact", href: "/contact" },
] as const;

export const footerNav = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Flooring Options", href: "/flooring-options" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Book Appointment", href: "/book-appointment" },
    { label: "FAQs", href: "/faqs" },
  ],
  products: flooringTypes.map((type) => ({
    label: type.shortTitle,
    href: flooringHref(type.slug),
  })),
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms and Conditions", href: "/terms-and-conditions" },
  ],
} as const;

export const partners = [
  "Shaw",
  "Mohawk",
  "Karndean",
  "COREtec",
  "Mannington",
  "Beaulieu",
  "TORLYS",
  "Preverco",
  "Mercier",
  "Appalachian",
] as const;

export type PartnerLogo = {
  readonly name: string;
  readonly logo: string;
  readonly alt: string;
};

/** Home page partner slider — replace logos in /public/partners/ */
export const partnerLogos: readonly PartnerLogo[] = [
  {
    name: "Daltile",
    logo: "/partners/daltile.webp",
    alt: "Daltile",
  },
  {
    name: "Shaw Floors",
    logo: "/partners/shaw.webp",
    alt: "Shaw Floors",
  },
  {
    name: "Beaulieu Canada",
    logo: "/partners/beaulieu.webp",
    alt: "Beaulieu Canada",
  },
  {
    name: "Engineered Floors",
    logo: "/partners/engineered-floors.webp",
    alt: "Engineered Floors",
  },
] as const;

export type Testimonial = {
  readonly name: string;
  readonly relativeDate: string;
  readonly rating: number;
  readonly text: string;
  readonly avatar?: string;
  readonly avatarColor?: string;
};

export const testimonials: readonly Testimonial[] = [
  {
    name: "Allison H.",
    relativeDate: "4 months ago",
    rating: 5,
    text: "Flooring Concepts made our whole-home reno feel effortless. Great selection, honest guidance, and installers who treated our home with care. We would absolutely use them again for any future flooring project.",
    avatarColor: "bg-[oklch(0.62_0.14_45)]",
  },
  {
    name: "James T.",
    relativeDate: "6 months ago",
    rating: 5,
    text: "From sample checkout to final install, the team was professional and on schedule. Our new vinyl plank looks incredible and the transition strips are flawless.",
    avatarColor: "bg-brand/80",
  },
  {
    name: "Priya K.",
    relativeDate: "8 months ago",
    rating: 5,
    text: "We compared several showrooms—Flooring Concepts had the best mix of quality, price, and service. The staff never rushed us and answered every question about maintenance and warranty.",
    avatarColor: "bg-[oklch(0.55_0.06_195)]",
  },
  {
    name: "Marcus L.",
    relativeDate: "1 year ago",
    rating: 5,
    text: "Outstanding experience from start to finish. They helped us choose the right hardwood for our main floor, coordinated timing with our contractor, and left the site spotless. The craftsmanship shows in every room—could not be happier with the result and would recommend them to anyone looking for quality flooring in Edmonton.",
    avatarColor: "bg-[oklch(0.62_0.14_45)]",
  },
] as const;

export const valuesColumns = [
  {
    title: "Why Choose Us",
    body: "Whether you need luxury vinyl for a basement or hardwood for a full main-floor renovation, Flooring Concepts brings trusted products, transparent guidance, and installation expertise. No project is too large or too small—we treat your home like our own.",
  },
  {
    title: "Maintenance & Care",
    body: "We help you protect your investment long after install. From proper cleaning routines to warranty support and re-stretch or repair services, our team stays available so your floors continue to look their best for years.",
  },
] as const;

export const instagramPosts = [
  { id: "1", caption: "Herringbone hardwood in a modern kitchen" },
  { id: "2", caption: "Warm neutrals, timeless texture" },
  { id: "3", caption: "Luxury vinyl that handles real life" },
  { id: "4", caption: "Showroom inspiration for your next project" },
  { id: "5", caption: "Before & after: main floor transformation" },
  { id: "6", caption: "Tile details that elevate every room" },
] as const;
