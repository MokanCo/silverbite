import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Privacy policy",
  description: "How the Silverbite Technologies website handles information submitted through the contact form.",
  path: "/privacy-policy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero quiet eyebrow="Legal" title="Privacy policy" mark="quiet">
        Last updated November 16, 2026. This policy describes how this website handles information. It is not legal
        advice and should be reviewed by counsel before it is treated as final.
      </PageHero>
      <section className="bg-snow py-16 lg:py-24">
        <Container>
          <div className="legal max-w-3xl text-base leading-relaxed text-dusk">
            <p>
              Silverbite Technologies (&quot;we&quot;) operates this website. If you contact us through the form, we
              receive the details you submit: name, email, company, phone, the service you select, a budget range, and
              your project description.
            </p>
            <h2>How inquiries are used</h2>
            <p>
              We use that information to read your request, reply, and decide whether there is a fit for a project. We
              do not sell personal information. Messages are delivered to the contact endpoint configured for this
              website, which may be an inbox or automation service chosen to receive inquiries.
            </p>
            <h2>Technical data</h2>
            <p>
              Hosting and delivery providers may process technical logs, such as IP address and browser type, as part of
              operating the site. This website, as built, does not use advertising cookies or a third-party analytics
              tracker.
            </p>
            <h2>How long information is kept</h2>
            <p>
              Inquiries are kept for as long as needed to respond and to keep a record of the conversation, unless you
              ask us to delete them and we are not required to retain them.
            </p>
            <h2>Your requests</h2>
            <p>
              To ask for access, correction, or deletion, use the contact form and mention privacy in the message. We
              will need enough detail to find the inquiry.
            </p>
            <h2>Children</h2>
            <p>This website is not directed at children, and we do not knowingly collect information from them.</p>
            <h2>Other countries</h2>
            <p>
              If you contact us from another country, your information will be processed wherever we and our service
              providers operate.
            </p>
            <h2>Changes</h2>
            <p>If this policy changes, the date at the top of the page will change with it.</p>
          </div>
        </Container>
      </section>
    </>
  );
}
