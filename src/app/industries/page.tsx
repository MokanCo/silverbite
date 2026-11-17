import type { Metadata } from "next";
import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Shot } from "@/components/visuals/Shot";
import { industries } from "@/content/industries";
import { industryVisuals } from "@/content/visuals";
import { pageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/cn";

export const metadata: Metadata = pageMetadata({
  title: "Industries",
  description:
    "How Silverbite Technologies approaches healthcare, retail, hospitality, finance, education, real estate, logistics, and startups.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero eyebrow="Industries" title="Different industries. The same standard of product." mark="nodes">
        Sector knowledge matters. So does the discipline not to pretend a website is a case study. These notes describe
        the kinds of problems we are built to take on.
      </PageHero>
      {industries.map((industry, index) => (
        <section key={industry.id} id={industry.id} className={cn(index % 2 === 0 ? "bg-snow" : "bg-paper", "scroll-mt-28")}>
          <Container className="grid gap-10 py-16 lg:grid-cols-12 lg:py-24">
            <div className="lg:col-span-5">
              <Shot
                src={industryVisuals[index % industryVisuals.length].src}
                alt=""
                className="mb-6 aspect-[16/10]"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <p className="text-sm font-semibold tabular-nums text-dusk">0{index + 1}</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{industry.name}</h2>
              <p className="mt-5 text-base leading-relaxed text-dusk sm:text-lg">{industry.overview}</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-dusk">What tends to be hard</h3>
                <ul className="mt-4">
                  {industry.pressures.map((item) => (
                    <li key={item} className="border-t border-ink/10 py-3 text-sm leading-relaxed text-ink">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-dusk">Where the work usually is</h3>
                <ul className="mt-4">
                  {industry.contributions.map((item) => (
                    <li key={item} className="border-t border-ink/10 py-3 text-sm leading-relaxed text-ink">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>
      ))}
      <CtaBand
        title="Your industry is specific. The technology should be too."
        text="Tell us the operation, not just the sector. That is where a useful product starts."
      />
    </>
  );
}
