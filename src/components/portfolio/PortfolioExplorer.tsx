"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Shot } from "@/components/visuals/Shot";
import { projectCategories, projects } from "@/content/projects";
import { projectVisual } from "@/content/visuals";
import { cn } from "@/lib/cn";

export function PortfolioExplorer() {
  const [active, setActive] = useState<(typeof projectCategories)[number]>("All");
  const visible = useMemo(
    () => (active === "All" ? projects : projects.filter((project) => project.category === active)),
    [active],
  );

  return (
    <section className="border-t border-silver/20 bg-obsidian py-16 text-ice lg:py-24">
      <Container>
        <div className="scroll-rail flex gap-6 overflow-x-auto pb-3" role="toolbar" aria-label="Filter concept studies">
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={active === category}
              onClick={() => setActive(category)}
              className={cn(
                "shrink-0 border-b-2 pb-2 text-sm font-semibold",
                active === category ? "border-cyan text-ice" : "border-transparent text-silver hover:text-ice",
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-silver">
          {visible.length} concept {visible.length === 1 ? "study" : "studies"}. These are design explorations created
          for this site. They are not client work, partnerships, or performance claims.
        </p>
        <div className="mt-6">
          {visible.map((project) => (
            <article id={project.slug} key={project.slug} className="group grid items-start gap-8 border-t border-silver/20 py-12 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-6">
                <div className="relative">
                  <Shot
                    src={projectVisual[project.art].src}
                    alt={projectVisual[project.art].alt}
                    className="aspect-[16/10]"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                  <span className="absolute left-4 top-4 border border-silver/50 bg-obsidian/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-ice">
                    Concept
                  </span>
                </div>
              </div>
              <div className="lg:col-span-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan">{project.category}</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-ice sm:text-5xl">{project.title}</h2>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-silver">Concept study</p>
                <p className="mt-5 text-base leading-relaxed text-silver">{project.notes}</p>
                <ul className="mt-6 space-y-3">
                  {project.focus.map((item) => (
                    <li key={item} className="border-t border-silver/20 pt-3 text-sm leading-relaxed text-ice">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
