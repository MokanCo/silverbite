import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Start a project with Silverbite Technologies. Share the idea, the constraint, and the service you need.",
  path: "/contact",
});

const steps = [
  {
    title: "You send the form",
    text: "Name the outcome, the rough timing, and anything you already know about budget. Incomplete is fine. Invented precision is not required.",
  },
  {
    title: "We read it and reply",
    text: "We come back with questions or a suggestion to talk. We do not publish a response-time promise we cannot keep.",
  },
  {
    title: "We outline an approach",
    text: "If there is a fit, we describe the shape of the work, the practices involved, and what we would need from you.",
  },
  {
    title: "A project starts in writing",
    text: "Scope, responsibilities, and commercial terms are agreed before work begins. The form itself is not a contract.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Tell us what you want to build." mark="orbit">
        An idea, a broken process, or a product that has outgrown its tools. Start with the situation. We will help find
        the shape of the work.
      </PageHero>
      <section id="inquire" className="bg-ink py-16 text-white lg:py-24">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-semibold tracking-[-0.04em]">What happens next</h2>
            <ol className="mt-8 space-y-6">
              {steps.map((step, index) => (
                <li key={step.title}>
                  <p className="text-sm font-semibold tabular-nums text-bright">0{index + 1}</p>
                  <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-silver">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:col-span-8">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
