import type { Metadata } from "next";
import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { PortfolioExplorer } from "@/components/portfolio/PortfolioExplorer";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Portfolio",
  description:
    "Concept studies from Silverbite Technologies across web applications, mobile, e-commerce, AI automation, and enterprise software.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero eyebrow="Portfolio" title="Good ideas, drawn far enough to judge the craft." mark="stack">
        These are concept studies. They are labeled that way because they are not client projects, testimonials, or
        results. They exist to show how we think about interface, structure, and product.
      </PageHero>
      <PortfolioExplorer />
      <CtaBand
        title="Have a product that deserves this level of care?"
        text="A concept on this page is a direction. Your project would be specific, contracted, and real."
      />
    </>
  );
}
