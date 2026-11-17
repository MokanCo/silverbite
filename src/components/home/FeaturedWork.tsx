import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Shot } from "@/components/visuals/Shot";
import { featuredProjects } from "@/content/projects";
import { projectVisual } from "@/content/visuals";

export function FeaturedWork() {
  return (
    <section id="work" className="overflow-hidden bg-obsidian py-20 text-ice lg:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <Eyebrow invert>Selected studies</Eyebrow>
              <h2 className="mt-4 text-[clamp(2.4rem,4.8vw,4.6rem)] font-semibold leading-[0.96] tracking-[-0.05em]">
                Good ideas. Exceptional execution.
              </h2>
            </div>
            <Link href="/portfolio" className="text-sm font-semibold text-cyan">
              All concept studies →
            </Link>
          </div>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-silver">
            Concept studies in web, mobile, commerce, automation, and enterprise software. They show direction and
            craft. They are not client engagements or measured results.
          </p>
        </Reveal>
      </Container>
      <div className="scroll-rail mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:px-8 md:pl-32 md:pr-10">
        {featuredProjects.map((project, index) => {
          const visual = projectVisual[project.art];
          return (
            <article key={project.slug} className="group w-[86%] shrink-0 snap-start sm:w-[62%] lg:w-[46%]">
              <Link href={`/portfolio#${project.slug}`} className="block">
                <div className="relative border border-silver/20">
                  <div className="flex h-8 items-center gap-1.5 border-b border-silver/15 bg-obsidian px-3" aria-hidden>
                    <span className="h-1.5 w-1.5 rounded-full bg-silver/70" />
                    <span className="h-1.5 w-1.5 rounded-full bg-silver/40" />
                    <span className="h-1.5 w-1.5 rounded-full bg-silver/25" />
                  </div>
                  <Shot
                    src={visual.src}
                    alt={visual.alt}
                    className="aspect-[16/10]"
                    imageClassName="transition duration-700 group-hover:scale-[1.04]"
                    sizes="(min-width: 1024px) 46vw, 86vw"
                  />
                  <span className="absolute left-4 top-4 border border-silver/50 bg-obsidian/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-ice">
                    Concept
                  </span>
                </div>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan">
                  0{index + 1} — {project.category}
                </p>
                <h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{project.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-silver sm:text-base">{project.summary}</p>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
