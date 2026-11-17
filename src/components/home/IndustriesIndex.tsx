import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Shot } from "@/components/visuals/Shot";
import { industries } from "@/content/industries";
import { industryVisuals } from "@/content/visuals";
import { cn } from "@/lib/cn";

export function IndustriesIndex() {
  return (
    <section className="bg-ice py-20 lg:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Eyebrow>Industries</Eyebrow>
              <h2 className="mt-4 text-[clamp(2.4rem,4.6vw,4.2rem)] font-semibold leading-[0.96] tracking-[-0.05em]">
                Work shaped by the room it has to live in.
              </h2>
            </div>
            <Link href="/industries" className="text-sm font-semibold text-obsidian underline decoration-bite underline-offset-4">
              All industries
            </Link>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-3 md:grid-cols-4">
          {industries.map((industry, index) => {
            const visual = industryVisuals[index % industryVisuals.length];
            const lead = index === 0;
            const wide = index === 3 || index === 6;
            return (
              <Link
                key={industry.id}
                href={`/industries#${industry.id}`}
                className={cn(
                  "group relative min-h-[240px] overflow-hidden",
                  lead && "min-h-[420px] md:col-span-2 md:row-span-2",
                  wide && "md:col-span-2",
                )}
              >
                <Shot
                  src={visual.src}
                  alt=""
                  className="absolute inset-0 h-full w-full"
                  imageClassName="transition duration-700 group-hover:scale-105"
                  sizes={lead ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 100vw"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan">0{index + 1}</p>
                  <h3 className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-ice">{industry.name}</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-silver">{industry.line}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
