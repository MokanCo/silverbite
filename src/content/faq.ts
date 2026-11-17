export const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "Silverbite Technologies is a full-service digital studio. We design and build websites, mobile apps, custom software, e-commerce, AI and automation, cloud and DevOps, APIs and integrations, digital marketing, IT consulting, and ongoing website support.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Yes. We work with startups, small and medium businesses, and established enterprises. An early product usually needs a sharp first version. A larger organization more often needs integration, reliability, and change done with care. The shape of the engagement follows the stage of the company.",
  },
  {
    question: "Can you build custom software?",
    answer:
      "Yes. Custom software is a core practice. We design platforms around the way a business operates, from internal tools to customer-facing systems, including the exceptions that generic software tends to ignore.",
  },
  {
    question: "Do you develop mobile applications?",
    answer:
      "Yes. We design and develop iOS and Android applications. That can be a cross-platform build when one codebase is the right fit, or native work when the product needs the platform itself.",
  },
  {
    question: "Do you provide AI and automation?",
    answer:
      "Yes. We build practical AI features and automated workflows that remove repetitive work and connect systems. We recommend them where they help the business, with a person still responsible for the decisions that should not be automatic.",
  },
  {
    question: "Can you redesign existing websites?",
    answer:
      "Yes. We redesign existing websites and products, and we can also improve what is already there when a full rebuild is not the right move. The first step is understanding what the current site is failing to do.",
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer:
      "Yes. Website support and maintenance covers updates, care, and improvements after launch. Longer partnerships can also include product work that is larger than a patch. We will say when a request has become a new project.",
  },
  {
    question: "How can I start a project?",
    answer:
      "Send a note through the contact form. Share what you want to build, the problem it should solve, and any timing or budget range you already know. We review the inquiry and reply with next steps. A project starts only after scope and terms are agreed.",
  },
] as const;

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
