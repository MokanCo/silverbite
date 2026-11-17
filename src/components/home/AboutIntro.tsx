import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Shot } from "@/components/visuals/Shot";

export function AboutIntro() {
  return (
    <section id="studio" className="bg-ice py-20 lg:py-28">
      <Container>
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="mt-4 text-[clamp(2.4rem,4.6vw,4.4rem)] font-semibold uppercase leading-[0.96] tracking-[-0.05em]">
              Sharp thinking. Refined execution.
            </h2>
            <p className="mt-6 max-w-sm text-lg font-medium leading-snug tracking-[-0.02em] text-obsidian">
              A technology studio combining creativity, strategy, and engineering.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.08}>
            <div className="space-y-5 text-base leading-relaxed text-titanium sm:text-lg">
              <p>
                At Silverbite Technologies, we bring ideas to life through thoughtful design, powerful engineering, and
                intelligent digital solutions.
              </p>
              <p>
                We partner with businesses to transform challenges into opportunities, simplify complex processes, and
                build technology that creates lasting value.
              </p>
            </div>
            <Button href="/about" variant="dark" className="mt-8">
              About the studio
            </Button>
          </Reveal>
        </div>
        <Reveal className="mt-12">
          <div className="grid gap-3 md:grid-cols-12">
            <Shot
              src="/visuals/sb-design.jpg"
              alt="Interface studies and a cyan swatch arranged on a dark studio table."
              className="min-h-[280px] md:col-span-7 md:min-h-[460px]"
              sizes="(min-width: 768px) 58vw, 100vw"
            />
            <div className="flex flex-col justify-between border border-obsidian/10 bg-obsidian p-7 text-ice md:col-span-5 md:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan">The line we work by</p>
              <p className="mt-10 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                From a first product to the next transformation, the work has to move the business.
              </p>
              <p className="mt-8 text-sm leading-relaxed text-silver">
                We help startups and established companies make ambitious ideas possible, without invented claims about
                who we have already served.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
