import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Terms and conditions",
  description: "Terms for using the Silverbite Technologies website. A project requires its own written agreement.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero quiet eyebrow="Legal" title="Terms and conditions" mark="quiet">
        Last updated November 16, 2026. These terms cover use of this website. They are not a project contract, and they
        should be reviewed by counsel before they are treated as final.
      </PageHero>
      <section className="bg-snow py-16 lg:py-24">
        <Container>
          <div className="legal max-w-3xl text-base leading-relaxed text-dusk">
            <h2>Using the site</h2>
            <p>
              You may browse this website for information about Silverbite Technologies. You may not misuse it, attempt
              to disrupt it, or scrape it in a way that degrades the service for other people.
            </p>
            <h2>No project is formed by an inquiry</h2>
            <p>
              Sending the contact form is a request for a conversation. It does not create a client relationship, a
              deadline, or an obligation to begin work. A project starts only when scope and commercial terms are agreed
              in writing.
            </p>
            <h2>Concept studies</h2>
            <p>
              Portfolio pieces on this website are concept studies. They are not client engagements, testimonials,
              partnerships, certifications, or measured business results. Do not present them as otherwise.
            </p>
            <h2>Intellectual property</h2>
            <p>
              The site design, writing, and original graphics are owned by Silverbite Technologies unless a notice says
              otherwise. You may not copy them for your own commercial site. Technology names belong to their respective
              owners and are used here only to describe tools in our practice.
            </p>
            <h2>Information on the site</h2>
            <p>
              Content is provided for general information. It is not professional, legal, or technical advice for your
              situation until we have agreed to an engagement and looked at the actual problem.
            </p>
            <h2>Warranties and liability</h2>
            <p>
              The website is provided as available. To the extent permitted by law, we do not warrant that it will be
              uninterrupted or error free, and we are not liable for damages arising only from use of the public website.
              A contracted project is governed by that contract, not by this page.
            </p>
            <h2>Applicable law</h2>
            <p>
              The laws that apply depend on where Silverbite Technologies operates and should be confirmed before these
              terms are relied on in a dispute. This page deliberately does not invent a jurisdiction.
            </p>
            <h2>Changes</h2>
            <p>We may update these terms. The date above will change when we do.</p>
          </div>
        </Container>
      </section>
    </>
  );
}
