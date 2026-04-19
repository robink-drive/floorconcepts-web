import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Launching soon...",
  description: "Floor Concepts — launching soon...",
};

export default function ComingSoonPage() {
  return <ComingSoon />;
}
