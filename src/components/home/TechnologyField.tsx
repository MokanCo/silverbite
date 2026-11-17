import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Shot } from "@/components/visuals/Shot";

const points = [
  ["01", "Applied intelligence", "Models earn a place when they remove a real burden. They are tools, not a claim of partnership."],
  ["02", "Automation with review", "Repetitive handoffs can move on their own. A person still sees the result when a mistake would matter."],
  ["03", "Quiet infrastructure", "Cloud, release, and the connections between systems stay understandable after the launch."],
];

export function TechnologyField() {
  return (
    <section className="bg-ice py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <Eyebrow>Intelligence</Eyebrow>
            <h2 className="mt-4 text-[clamp(2.5rem,4.8vw,4.6rem)] font-semibold leading-[0.94] tracking-[-0.05em]">
              Technology with a point of view.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-titanium sm:text-lg">
              The studio works across intelligent systems, automation, and the infrastructure that keeps a product
              standing. The image is a study of that idea. It is not a client system.
            </p>
            <ol className="mt-8 space-y-5">
              {points.map(([number, title, text]) => (
                <li key={number} className="grid grid-cols-[2.5rem_1fr] gap-3 border-t border-obsidian/10 pt-5">
                  <span className="text-xs font-semibold tabular-nums text-titanium">{number}</span>
                  <span>
                    <span className="block text-lg font-semibold tracking-[-0.03em]">{title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-titanium">{text}</span>
                  </span>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/services/ai-automation" variant="dark">
                AI practice
              </Button>
              <Link href="/services/cloud-devops" className="inline-flex items-center text-sm font-semibold text-obsidian underline decoration-bite underline-offset-4">
                Cloud and infrastructure
              </Link>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={0.08}>
            <Shot
              src="/visuals/sb-neural.jpg"
              alt="A glass panel etched with a silver neural lattice and a few cyan points, set on a brushed metal plinth."
              className="min-h-[320px] sm:min-h-[460px] lg:min-h-[620px]"
              sizes="(min-width: 1024px) 52vw, 100vw"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
