import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Shot } from "@/components/visuals/Shot";
import { featuredServices, supportingServices } from "@/content/services";
import { serviceVisual } from "@/content/visuals";
import { cn } from "@/lib/cn";

export function ServicesGrid() {
  return (
    <section id="services" className="bg-ice pb-8 lg:pb-16">
      <Container>
        <Reveal>
          <div className="grid gap-6 border-t border-obsidian/10 pt-16 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow>What we do</Eyebrow>
              <h2 className="mt-4 text-[clamp(2.4rem,4.8vw,4.6rem)] font-semibold leading-[0.96] tracking-[-0.05em]">
                Practices, not a menu of cards.
              </h2>
            </div>
            <p className="text-base leading-relaxed text-titanium lg:col-span-5">
              Each practice has its own visual language and a page that explains how an engagement actually runs.
            </p>
          </div>
        </Reveal>
      </Container>
      <div className="mt-10 md:pl-24">
        {featuredServices.map((service, index) => {
          const visual = serviceVisual[service.icon];
          const flip = index % 2 === 1;
          return (
            <article key={service.slug} className="border-t border-obsidian/10">
              <Link href={`/services/${service.slug}`} className="group grid lg:grid-cols-12">
                <div className={cn("flex flex-col justify-center px-5 py-10 sm:px-8 lg:px-12 lg:py-14", flip ? "lg:order-2 lg:col-span-5" : "lg:col-span-5")}>
                  <p className="text-sm font-semibold tabular-nums text-titanium">{service.number}</p>
                  <h3 className="mt-4 max-w-[12ch] text-4xl font-semibold leading-[0.95] tracking-[-0.045em] sm:text-5xl">
                    {service.title}
                  </h3>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-titanium">{service.summary}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-obsidian">
                    View practice
                    <span aria-hidden className="text-cyan transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
                <div className={cn("relative min-h-[280px] lg:col-span-7 lg:min-h-[440px]", flip && "lg:order-1")}>
                  <Shot
                    src={visual.src}
                    alt={visual.alt}
                    className="absolute inset-0"
                    imageClassName="transition duration-700 group-hover:scale-[1.04]"
                    sizes="(min-width: 1024px) 55vw, 100vw"
                  />
                </div>
              </Link>
            </article>
          );
        })}
      </div>
      <Container className="py-8">
        <ul className="grid border-t border-obsidian/10 md:grid-cols-2">
          {supportingServices.map((service) => {
            const visual = serviceVisual[service.icon];
            return (
              <li key={service.slug} className="border-b border-obsidian/10">
                <Link href={`/services/${service.slug}`} className="group grid grid-cols-[112px_1fr] items-center gap-4 py-5 sm:grid-cols-[148px_1fr]">
                  <Shot src={visual.src} alt="" className="h-20 sm:h-24" sizes="148px" />
                  <span>
                    <span className="block text-xs font-semibold tabular-nums text-titanium">{service.number}</span>
                    <span className="mt-1 block text-xl font-semibold tracking-[-0.03em] group-hover:text-obsidian">
                      {service.title}
                    </span>
                    <span className="mt-1 block max-w-md text-sm leading-relaxed text-titanium">{service.summary}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
