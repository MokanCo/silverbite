import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Shot } from "@/components/visuals/Shot";

const points = [
  ["01", "Strategic thinking", "We start from the result the business needs, then choose the technology that can carry it."],
  ["02", "Modern engineering", "Current frameworks, readable systems, and code another team can keep building on."],
  ["03", "Creative execution", "The product is shaped around your operation, with an interface that feels considered."],
  ["04", "Business-focused solutions", "Every engagement is judged by whether it moves the work, not by how fashionable the stack looks."],
  ["05", "Scalable technology", "Foundations that can take the next release, the next team, and a heavier load."],
  ["06", "Long-term collaboration", "Launch is a beginning. We stay for the care, the improvements, and the next chapter."],
];

export function WhySection() {
  return (
    <section className="bg-ice py-20 lg:py-28">
      <Container className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5 lg:sticky lg:top-10 lg:self-start">
          <Reveal>
            <Eyebrow>Why Silverbite</Eyebrow>
            <h2 className="mt-4 text-[clamp(2.3rem,4vw,3.8rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
              Not just developers. A technology partner.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-titanium sm:text-lg">
              We combine technical expertise, creative thinking, and business understanding to deliver solutions that
              make a meaningful difference.
            </p>
          </Reveal>
          <Shot
            src="/visuals/sb-hero.jpg"
            alt="The Silverbite ring: brushed silver with a cyan opening."
            className="mt-8 aspect-[4/5] max-h-[520px]"
            sizes="(min-width: 1024px) 36vw, 100vw"
          />
        </div>
        <ol className="lg:col-span-6 lg:col-start-7">
          {points.map(([number, title, text]) => (
            <li key={number} className="grid gap-4 border-t border-obsidian/10 py-7 sm:grid-cols-[4rem_1fr]">
              <span className="text-sm font-semibold tabular-nums text-obsidian">{number}</span>
              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">{title}</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-titanium">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
