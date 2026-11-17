import type { Metadata } from "next";
import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Shot } from "@/components/visuals/Shot";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Silverbite Technologies is a digital studio for design, engineering, automation, and the decisions that sit between them.",
  path: "/about",
});

const principles = [
  {
    number: "01",
    title: "Clarity before code",
    text: "We would rather spend time understanding the job than rush into a stack. A clear problem survives a change of tools. A vague one does not.",
  },
  {
    number: "02",
    title: "Taste is part of delivery",
    text: "Spacing, type, and the quiet parts of an interface are not decoration. They are how a product feels reliable before anyone reads a feature list.",
  },
  {
    number: "03",
    title: "Systems over one-off screens",
    text: "A single beautiful page is easy to fake. We design the rules underneath so the tenth screen still belongs to the same product.",
  },
  {
    number: "04",
    title: "Honesty about scope",
    text: "If a request is a new project, we say so. If a tool you already own can do the job, we would rather tell you than build a duplicate.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="The studio" title="A studio for companies that are serious about what they ship." mark="orbit">
        Silverbite Technologies is a full-service technology studio. Design, engineering, automation, and consulting live
        in one place so a product does not get handed across a canyon between agencies.
      </PageHero>
      <Shot
        src="/visuals/sb-design.jpg"
        alt="Interface studies arranged on a dark studio table."
        className="aspect-[16/7] max-h-[560px] w-full"
        sizes="100vw"
      />
      <section className="bg-snow py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-dusk">Position</p>
            <p className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
              We Build What Moves Your Business Forward.
            </p>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-dusk sm:text-lg lg:col-span-6 lg:col-start-7">
            <p>
              The work is websites, mobile applications, custom software, AI and automation, commerce, cloud, integrations,
              marketing, and the maintenance that follows a launch. The point of keeping those practices together is
              simple: the interface, the system, and the operation are usually the same problem.
            </p>
            <p>
              We work with startups finding a first product, with small and medium businesses replacing a stack of
              workarounds, and with established companies that need a next system without losing the one they already
              run. Healthcare, retail, hospitality, real estate, finance, education, and logistics are all in range. The
              common thread is a problem that deserves a proper product.
            </p>
            <p>
              <Link href="/industries" className="font-semibold text-ink underline decoration-blue decoration-2 underline-offset-4">
                See how we think about industries
              </Link>
            </p>
          </div>
        </Container>
      </section>
      <section className="bg-paper py-20 lg:py-28">
        <Container>
          <h2 className="max-w-xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">How we hold the work</h2>
          <ol className="mt-12">
            {principles.map((principle) => (
              <li key={principle.number} className="grid gap-4 border-t border-ink/10 py-8 lg:grid-cols-12">
                <span className="text-sm font-semibold tabular-nums text-ink lg:col-span-2">{principle.number}</span>
                <h3 className="text-2xl font-semibold tracking-[-0.03em] lg:col-span-4">{principle.title}</h3>
                <p className="text-base leading-relaxed text-dusk lg:col-span-6">{principle.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
      <section className="bg-white py-20 lg:py-28">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Who we like in the room</h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-dusk sm:text-lg lg:col-span-6 lg:col-start-7">
            <p>
              Founders who can describe the outcome even if the feature list is still moving. Operators who know where
              the current process breaks. Product and technology leaders who want a partner, not a ticket queue.
            </p>
            <p>
              We do not publish invented team biographies or borrowed client lists. If you want to know how an engagement
              feels, the useful test is a conversation about your actual constraints.
            </p>
          </div>
        </Container>
      </section>
      <CtaBand
        title="Bring us the problem worth solving."
        text="A short note is enough to start. We will tell you honestly if we are the right studio for it."
      />
    </>
  );
}
