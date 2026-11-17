import Link from "next/link";
import type { ReactNode } from "react";
import { AsideMark } from "@/components/visuals/AsideMark";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/cn";

export function PageHero({
  eyebrow,
  title,
  children,
  mark = "orbit",
  crumb,
  quiet = false,
}: {
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
  mark?: "orbit" | "bars" | "nodes" | "stack" | "quiet";
  crumb?: { label: string; href?: string }[];
  quiet?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -right-16 top-8 h-72 w-72 rounded-full bg-cyan/15 blur-3xl" />
      <Container className={cn("relative grid gap-10 pb-16 pt-16 lg:grid-cols-12 lg:pt-20", quiet ? "lg:pb-16" : "lg:pb-24")}>
        <div className="lg:col-span-8">
          {crumb ? (
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
                {crumb.map((item, index) => (
                  <li key={item.label} className="flex items-center gap-2">
                    {index > 0 ? <span aria-hidden>/</span> : null}
                    {item.href ? (
                      <Link href={item.href} className="hover:text-white">
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-silver">{item.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          ) : null}
          <Eyebrow invert>{eyebrow}</Eyebrow>
          <h1
            className={cn(
              "mt-5 max-w-4xl font-semibold tracking-[-0.045em] text-white",
              quiet
                ? "text-[clamp(2.4rem,5vw,4rem)] leading-[1.02]"
                : "text-[clamp(2.8rem,6vw,5.2rem)] leading-[0.94]",
            )}
          >
            {title}
          </h1>
          <div className="mt-6 max-w-xl text-base leading-relaxed text-silver sm:text-lg">{children}</div>
        </div>
        <div className="hidden lg:col-span-4 lg:block">
          <AsideMark name={mark} />
        </div>
      </Container>
    </section>
  );
}
