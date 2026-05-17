import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FlooringDetail } from "@/components/flooring/flooring-detail";
import { getAllFlooringSlugs, getFlooringBySlug } from "@/lib/flooring";
import { site } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllFlooringSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const flooring = getFlooringBySlug(slug);
  if (!flooring) return { title: site.name };

  return {
    title: `${flooring.title} | ${site.name}`,
    description: flooring.description,
  };
}

export default async function FlooringTypePage({ params }: PageProps) {
  const { slug } = await params;
  const flooring = getFlooringBySlug(slug);
  if (!flooring) notFound();

  return <FlooringDetail flooring={flooring} />;
}
