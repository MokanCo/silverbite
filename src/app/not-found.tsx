import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="bg-ink text-white">
      <Container className="flex min-h-[80vh] flex-col justify-center py-32">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">404</p>
        <h1 className="mt-4 max-w-3xl text-5xl font-semibold tracking-[-0.045em] sm:text-7xl">This page is not on the map.</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-silver">The link may be out of date. The work is still here.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/">Back home</Button>
          <Button href="/contact" variant="ghost">
            Let&apos;s Talk
          </Button>
        </div>
      </Container>
    </section>
  );
}
