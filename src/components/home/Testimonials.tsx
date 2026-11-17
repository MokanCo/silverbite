import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const placeholders = [
  "This space is reserved for a client’s own words.",
  "A verified story will be added when one is ready to share.",
  "No names, companies, or results are shown until they are real.",
];

export function Testimonials() {
  return (
    <section className="bg-ice py-20 lg:py-28">
      <Container className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Eyebrow>Testimonials</Eyebrow>
          <h2 className="mt-4 text-[clamp(2.2rem,4vw,3.6rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
            Built on collaboration. Driven by trust.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-titanium">
            Client words will be published here after they are provided and approved. What follows is the layout only.
          </p>
        </div>
        <div className="grid gap-4 lg:col-span-8">
          <article className="border border-obsidian/10 bg-obsidian p-8 text-ice sm:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan">Placeholder 01</p>
            <p className="mt-6 text-3xl font-semibold leading-snug tracking-[-0.04em] sm:text-4xl">{placeholders[0]}</p>
            <p className="mt-8 text-sm text-silver">Identity withheld until a real endorsement is supplied.</p>
          </article>
          <div className="grid gap-4 md:grid-cols-2">
            {placeholders.slice(1).map((text, index) => (
              <article key={text} className="border border-obsidian/10 p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-obsidian">Placeholder 0{index + 2}</p>
                <p className="mt-5 text-xl font-semibold leading-snug tracking-[-0.03em]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
