import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CtaBand({ title, text }: { title: string; text: string }) {
  return (
    <section className="bg-ink text-white">
      <Container className="flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-end lg:py-20">
        <div className="max-w-2xl">
          <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-semibold leading-[1.02] tracking-[-0.04em]">{title}</h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-silver sm:text-lg">{text}</p>
        </div>
        <Button href="/contact" variant="primary">
          Start a Project
        </Button>
      </Container>
    </section>
  );
}
