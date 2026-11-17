import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { navLinks } from "@/content/navigation";
import { services } from "@/content/services";
import { site, socialProfiles } from "@/content/site";

export function Footer() {
  return (
    <footer className="overflow-hidden border-t border-white/10 bg-ink text-white">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo idPrefix="footer" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-silver">
              A digital studio for web, mobile, software, AI, and the systems that help a business move.
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">{site.slogan}</p>
          </div>
          <div className="lg:col-span-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">Company</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-silver transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">Services</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="text-silver transition-colors hover:text-white">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">Contact</p>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="text-muted">Email</dt>
                <dd className="mt-1 text-silver">
                  {site.email ? (
                    <a className="hover:text-white" href={`mailto:${site.email}`}>
                      {site.email}
                    </a>
                  ) : (
                    "Email forthcoming"
                  )}
                </dd>
              </div>
              <div>
                <dt className="text-muted">Phone</dt>
                <dd className="mt-1 text-silver">
                  {site.phone ? (
                    <a className="hover:text-white" href={`tel:${site.phone}`}>
                      {site.phone}
                    </a>
                  ) : (
                    "Phone forthcoming"
                  )}
                </dd>
              </div>
            </dl>
            <Link href="/contact" className="mt-5 inline-flex text-sm font-semibold text-bright hover:text-white">
              Start a project
            </Link>
            {socialProfiles.length > 0 ? (
              <>
                <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">Social</p>
                <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-silver">
                  {socialProfiles.map((profile) => (
                    <li key={profile.label}>
                      <a href={profile.href} target="_blank" rel="noreferrer" className="hover:text-cyan">
                        {profile.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>
        </div>
        <p
          aria-hidden
          className="pointer-events-none mt-16 select-none text-[clamp(3.2rem,13vw,8.5rem)] font-semibold leading-none tracking-[-0.07em] text-white/[0.045]"
        >
          Silverbite
        </p>
        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Silverbite Technologies. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms and conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
