import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Shot } from "@/components/visuals/Shot";
import { getService, type Service } from "@/content/services";
import { serviceVisual } from "@/content/visuals";
import { site } from "@/content/site";

const marks = ["orbit", "bars", "nodes", "stack"] as const;

export function ServiceView({ service }: { service: Service }) {
  const related = service.related
    .map((slug) => getService(slug))
    .filter((item): item is Service => Boolean(item));
  const mark = marks[Number(service.number) % marks.length] ?? "orbit";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.intro,
    provider: { "@type": "Organization", name: site.name, url: site.url },
    url: `${site.url}/services/${service.slug}`,
  };

  const crumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
      { "@type": "ListItem", position: 3, name: service.title, item: `${site.url}/services/${service.slug}` },
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={crumbs} />
      <PageHero
        eyebrow={`Service ${service.number}`}
        title={service.title}
        mark={mark}
        crumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      >
        {service.intro}
      </PageHero>
      <Shot
        src={serviceVisual[service.icon].src}
        alt={serviceVisual[service.icon].alt}
        className="aspect-[16/8] max-h-[640px] w-full"
        sizes="100vw"
      />
      <section className="bg-snow py-20 lg:py-28">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">The work</h2>
            <p className="mt-5 text-base leading-relaxed text-dusk sm:text-lg">{service.narrative}</p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-dusk">What an engagement can include</h2>
            <ul className="mt-4">
              {service.delivers.map((item) => (
                <li key={item} className="border-t border-ink/10 py-3 text-base text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      <section className="bg-ink py-20 text-white lg:py-28">
        <Container>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">How an engagement moves</h2>
          <ol className="mt-12 grid gap-10 lg:grid-cols-4">
            {service.steps.map((step, index) => (
              <li key={step.title}>
                <p className="text-sm font-semibold tabular-nums text-bright">0{index + 1}</p>
                <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em]">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-silver">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
      <section className="bg-paper py-20 lg:py-28">
        <Container className="grid gap-10 lg:grid-cols-12">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] lg:col-span-4">A good fit when</h2>
          <ul className="lg:col-span-8">
            {service.fit.map((item) => (
              <li key={item} className="border-t border-ink/10 py-5 text-lg leading-snug tracking-[-0.02em] text-ink">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section className="bg-white py-16">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-dusk">Related practices</h2>
          <ul className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8">
            {related.map((item) => (
              <li key={item.slug}>
                <Link href={`/services/${item.slug}`} className="text-lg font-semibold tracking-[-0.03em] underline decoration-transparent underline-offset-4 hover:decoration-bite">
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="text-lg font-semibold tracking-[-0.03em] text-dusk hover:text-ink">
                All services
              </Link>
            </li>
          </ul>
        </Container>
      </section>
      <CtaBand
        title={`Talk with us about ${service.title.toLowerCase()}.`}
        text="Bring the outcome you need. We will help decide whether this practice, or a neighboring one, is the right shape for the work."
      />
    </>
  );
}
