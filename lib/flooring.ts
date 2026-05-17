export type FlooringStyle = {
  name: string;
  description: string;
};

export type FlooringType = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  intro: string;
  styles: FlooringStyle[];
};

export const flooringTypes: FlooringType[] = [
  {
    slug: "carpet",
    title: "Carpet",
    shortTitle: "Carpet",
    description: "Soft, comfortable carpet for living spaces and bedrooms.",
    intro:
      "From plush comfort to durable loop piles, explore carpet styles suited to how you live—without browsing individual SKU listings.",
    styles: [
      { name: "Plush", description: "Dense, velvety pile for bedrooms and low-traffic areas." },
      { name: "Textured", description: "Hides footprints and wear in active family spaces." },
      { name: "Berber", description: "Loop construction built for durability and easy care." },
      { name: "Patterned", description: "Visual interest for stairs, offices, and statement rooms." },
    ],
  },
  {
    slug: "cork",
    title: "Cork",
    shortTitle: "Cork",
    description: "Natural, resilient cork flooring with quiet underfoot comfort.",
    intro:
      "Sustainable and warm underfoot, cork offers unique texture and acoustic benefits for modern interiors.",
    styles: [
      { name: "Natural", description: "Classic cork grain with a warm, organic look." },
      { name: "Stained", description: "Rich tones that complement contemporary palettes." },
      { name: "Floating Plank", description: "Click-lock installation for faster renovations." },
      { name: "Glue-Down Tile", description: "Stable format for kitchens and open layouts." },
    ],
  },
  {
    slug: "engineered-hardwood",
    title: "Engineered Hardwood",
    shortTitle: "Eng. Hardwood",
    description: "Real wood beauty with enhanced stability for Alberta homes.",
    intro:
      "Engineered hardwood delivers authentic wood character with construction designed for seasonal climate shifts.",
    styles: [
      { name: "Wide Plank", description: "Expansive boards that open up living areas." },
      { name: "Wire-Brushed", description: "Textured surface that masks everyday wear." },
      { name: "Matte Oil", description: "Natural matte finish with a relaxed feel." },
      { name: "Herringbone", description: "Classic pattern for elevated focal spaces." },
    ],
  },
  {
    slug: "hardwood",
    title: "Hardwood",
    shortTitle: "Hardwood",
    description: "Solid hardwood floors built to last for generations.",
    intro:
      "Solid hardwood remains the benchmark for timeless appeal, refinishing potential, and long-term value.",
    styles: [
      { name: "Oak", description: "Versatile grain that suits traditional and modern homes." },
      { name: "Maple", description: "Clean, light tone with subtle character." },
      { name: "Walnut", description: "Deep, rich colour for formal living spaces." },
      { name: "Site-Finished", description: "Custom stain and sheen applied in place." },
    ],
  },
  {
    slug: "laminate",
    title: "Laminate",
    shortTitle: "Laminate",
    description: "Affordable, durable laminate with realistic wood and stone looks.",
    intro:
      "High-performance laminate offers striking visuals and straightforward maintenance for busy households.",
    styles: [
      { name: "Wood-Look", description: "Convincing timber visuals at accessible price points." },
      { name: "Stone-Look", description: "Tile aesthetics without cold, hard surfaces." },
      { name: "Water-Resistant", description: "Extra protection for kitchens and entries." },
      { name: "Embossed", description: "Registered texture that mirrors real materials." },
    ],
  },
  {
    slug: "linoleum",
    title: "Linoleum",
    shortTitle: "Linoleum",
    description: "Natural linoleum with colour depth and eco-conscious appeal.",
    intro:
      "Made from renewable materials, linoleum brings bold colour and resilient performance to commercial and residential spaces.",
    styles: [
      { name: "Sheet", description: "Seam-friendly format for kitchens and clinics." },
      { name: "Tile", description: "Modular layouts with crisp geometric patterns." },
      { name: "Marbled", description: "Organic swirls for retro and contemporary designs." },
      { name: "Solid Colour", description: "Minimalist fields for modern interiors." },
    ],
  },
  {
    slug: "luxury-vinyl-tile",
    title: "Luxury Vinyl Tile",
    shortTitle: "LVT",
    description: "Waterproof luxury vinyl with premium wood and stone visuals.",
    intro:
      "LVT combines waterproof performance with designer looks—ideal for basements, kitchens, and rental properties.",
    styles: [
      { name: "Rigid Core", description: "Stable planks for uneven subfloors." },
      { name: "Glue-Down", description: "Low profile for transitions and condos." },
      { name: "Loose Lay", description: "Removable option for flexible installations." },
      { name: "Large Format Tile", description: "Stone visuals with fewer grout lines." },
    ],
  },
  {
    slug: "tile",
    title: "Tile",
    shortTitle: "Tile",
    description: "Porcelain and ceramic tile for wet areas and high-impact design.",
    intro:
      "From spa bathrooms to statement backsplashes, tile delivers lasting performance and endless design flexibility.",
    styles: [
      { name: "Porcelain", description: "Dense body suited to floors and heavy traffic." },
      { name: "Ceramic", description: "Classic option for walls and light-duty floors." },
      { name: "Large Format", description: "Fewer joints, seamless modern appearance." },
      { name: "Mosaic", description: "Detail work for niches, showers, and accents." },
    ],
  },
];

export function getFlooringBySlug(slug: string): FlooringType | undefined {
  return flooringTypes.find((type) => type.slug === slug);
}

export function getAllFlooringSlugs(): string[] {
  return flooringTypes.map((type) => type.slug);
}
