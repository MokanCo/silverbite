import { JsonLd } from "@/components/seo/JsonLd";
import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { faqJsonLd, faqs } from "@/content/faq";

export function FaqSection() {
  return (
    <section id="faq" className="border-t border-obsidian/10 bg-ice py-20 lg:py-28">
      <JsonLd data={faqJsonLd()} />
      <Container className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4 lg:sticky lg:top-10 lg:self-start">
          <Eyebrow>Questions</Eyebrow>
          <h2 className="mt-4 text-[clamp(2.2rem,4vw,3.6rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
            Straight answers before a project starts.
          </h2>
        </div>
        <div className="lg:col-span-8">
          <Accordion items={faqs} />
        </div>
      </Container>
    </section>
  );
}
