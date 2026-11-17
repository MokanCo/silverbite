import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Shot } from "@/components/visuals/Shot";
import { featuredServices, supportingServices } from "@/content/services";
import { serviceVisual } from "@/content/visuals";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "Web, mobile, custom software, AI, design, commerce, cloud, integrations, marketing, consulting, and ongoing support from Silverbite Technologies.",
  path: "/services",
});

const shapes = [
  {
    number: "01",
    title: "A defined project",
    text: "A website, an application, or a platform with a beginning, a release, and a clear owner on both sides.",
  },
  {
    number: "02",
    title: "A product partnership",
    text: "Design and engineering that continue after launch, when the real product starts to show itself.",
  },
  {
    number: "03",
    title: "An advisory engagement",
    text: "A written point of view before anyone commits to a build. Useful when the brief is still a pile of tools and opinions.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="A complete practice for digital products." mark="bars">
        Strategy, design, engineering, automation, and the care that follows a launch. One studio, so the pieces do not
        have to be introduced to each other later.
      </PageHero>
      <div className="grid md:grid-cols-3">
        {featuredServices.slice(0, 3).map((service) => (
          <Shot
            key={service.slug}
            src={serviceVisual[service.icon].src}
            alt={serviceVisual[service.icon].alt}
            className="aspect-[4/3]"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        ))}
      </div>
      <section className="bg-snow py-20 lg:py-28">
        <Container>
          <p className="max-w-3xl text-2xl font-medium leading-snug tracking-[-0.03em] sm:text-3xl">
            Choose the practice that matches the job. Most serious products borrow from more than one.
          </p>
          <div className="mt-14">
            {featuredServices.map((service) => (
              <article key={service.slug} className="grid gap-4 border-t border-ink/10 py-8 lg:grid-cols-12 lg:items-start">
                <p className="text-sm font-semibold tabular-nums text-dusk lg:col-span-1">{service.number}</p>
                <div className="lg:col-span-4">
                  <h2 className="text-3xl font-semibold tracking-[-0.04em]">{service.title}</h2>
                </div>
                <p className="text-base leading-relaxed text-dusk lg:col-span-5">{service.index}</p>
                <Link href={`/services/${service.slug}`} className="text-sm font-semibold text-ink underline decoration-bite underline-offset-4 lg:col-span-2 lg:text-right">
                  View practice
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-paper py-20 lg:py-24">
        <Container>
          <h2 className="text-3xl font-semibold tracking-[-0.04em]">The practices around the build</h2>
          <ul className="mt-8">
            {supportingServices.map((service) => (
              <li key={service.slug} className="border-t border-ink/10">
                <Link href={`/services/${service.slug}`} className="group grid gap-3 py-6 sm:grid-cols-12 sm:items-baseline">
                  <span className="text-sm tabular-nums text-dusk sm:col-span-1">{service.number}</span>
                  <span className="text-xl font-semibold tracking-[-0.03em] text-ink underline decoration-transparent underline-offset-4 group-hover:decoration-bite sm:col-span-4">{service.title}</span>
                  <span className="text-sm leading-relaxed text-dusk sm:col-span-7">{service.index}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <h2 className="max-w-xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Ways to engage</h2>
          <p className="mt-4 max-w-2xl text-dusk">
            There is no public rate card, because the work is not a package. These are the shapes a conversation usually
            takes.
          </p>
          <ol className="mt-10">
            {shapes.map((shape) => (
              <li key={shape.number} className="grid gap-3 border-t border-ink/10 py-7 lg:grid-cols-12">
                <span className="text-sm font-semibold tabular-nums text-ink lg:col-span-2">{shape.number}</span>
                <h3 className="text-2xl font-semibold tracking-[-0.03em] lg:col-span-4">{shape.title}</h3>
                <p className="text-base leading-relaxed text-dusk lg:col-span-6">{shape.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
      <CtaBand
        title="If you can describe the outcome, we can help shape the build."
        text="Start with the problem and the constraint. The service line can be decided after that."
      />
    </>
  );
}
