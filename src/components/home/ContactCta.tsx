import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Shot } from "@/components/visuals/Shot";

export function ContactCta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-obsidian py-20 text-ice lg:py-28">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 opacity-40 lg:block">
        <Shot src="/visuals/sb-neural.jpg" alt="" className="h-full w-full" imageClassName="object-center" sizes="50vw" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/90 to-obsidian/40" />
      <Container className="relative grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Eyebrow invert>Contact</Eyebrow>
          <h2 className="mt-4 text-[clamp(2.8rem,5.4vw,5rem)] font-semibold leading-[0.92] tracking-[-0.05em]">
            Let&apos;s build something worth talking about.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-silver sm:text-lg">
            Have an idea, a challenge, or a vision for what&apos;s next? Let&apos;s turn it into something extraordinary.
          </p>
        </div>
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
