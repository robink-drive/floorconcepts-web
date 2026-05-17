export type Service = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  highlights: string[];
};

export const services: Service[] = [
  {
    slug: "residential-flooring",
    title: "Residential Flooring",
    description: "Flooring solutions tailored to homes, condos, and renovations.",
    intro:
      "From single-room updates to whole-home transformations, we help homeowners choose materials that fit lifestyle, budget, and design goals.",
    highlights: [
      "In-home consultations and showroom samples",
      "Hardwood, vinyl, tile, carpet, and more",
      "Coordination with builders and designers",
    ],
  },
  {
    slug: "commercial-flooring",
    title: "Commercial Flooring",
    description: "Durable flooring for offices, retail, and multi-unit properties.",
    intro:
      "Commercial projects demand performance, compliance, and minimal downtime. We specify products built for traffic while keeping your space presentable during install.",
    highlights: [
      "High-traffic and slip-resistant options",
      "Phased installation planning",
      "Maintenance programs for long-term value",
    ],
  },
  {
    slug: "custom-flooring",
    title: "Custom Flooring",
    description: "Unique patterns, inlays, and bespoke finishes for statement spaces.",
    intro:
      "When standard layouts are not enough, our team helps you realize custom designs—from herringbone layouts to mixed-material transitions.",
    highlights: [
      "Designer and architect collaboration",
      "Site-finished and custom stain options",
      "Detail work for stairs and feature areas",
    ],
  },
  {
    slug: "floor-installation",
    title: "Floor Installation",
    description: "Professional installation by experienced flooring craftsmen.",
    intro:
      "Proper installation protects your investment. Our installers follow manufacturer guidelines and respect your home throughout the project.",
    highlights: [
      "Subfloor assessment and prep",
      "Clean, efficient worksites",
      "Post-install walkthrough and care guidance",
    ],
  },
  {
    slug: "insurance-services",
    title: "Insurance Services",
    description: "Flooring replacement and restoration for insurance claims.",
    intro:
      "Water damage and unexpected loss are stressful. We work with adjusters and homeowners to document, match, and restore flooring efficiently.",
    highlights: [
      "Damage assessment and documentation",
      "Product matching for seamless repairs",
      "Clear timelines for claim coordination",
    ],
  },
  {
    slug: "maintenance-warranty",
    title: "Maintenance and Warranty",
    description: "Ongoing care, repairs, and warranty support after installation.",
    intro:
      "Floors perform best with the right care. We help you maintain warranties, address wear, and keep surfaces looking their best year after year.",
    highlights: [
      "Cleaning and care recommendations",
      "Re-stretch, repair, and refinishing options",
      "Warranty registration and support",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}
