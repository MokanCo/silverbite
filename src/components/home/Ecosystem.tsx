import { Eyebrow } from "@/components/ui/Eyebrow";

const phrases = [
  "The problem first",
  "Then the tools",
  "Clear enough to hand over",
  "Calm in daily use",
  "Familiar on purpose",
  "No badge implied",
  "No partnership implied",
];

export function Ecosystem() {
  const loop = [...phrases, ...phrases];
  return (
    <section className="overflow-hidden bg-obsidian py-20 text-ice lg:py-28">
      <div className="px-5 sm:px-8 md:pl-32 md:pr-10">
        <Eyebrow invert>Technology</Eyebrow>
        <h2 className="mt-4 max-w-3xl text-[clamp(2.4rem,4.6vw,4.4rem)] font-semibold leading-[0.96] tracking-[-0.05em]">
          Built with the right technology.
        </h2>
        <div className="mt-6 max-w-2xl space-y-4 text-sm leading-relaxed text-silver sm:text-base">
          <p>
            Technology is a means. We choose it after the work is clear: what a person needs to do, what has to stay
            reliable, and what another team will inherit.
          </p>
          <p>
            A website, a product, and the systems around them do not have to share one stack. They have to share a
            standard of clarity. Familiar tools are used when they fit. That is a practice, not a partnership, a badge,
            or a certification.
          </p>
        </div>
      </div>
      <div className="marquee-fade mt-14 py-3" aria-hidden>
        <p className="marquee-track flex min-w-max items-center gap-10 pr-10 text-[clamp(2.6rem,6vw,5.4rem)] font-semibold leading-none tracking-[-0.05em]">
          {loop.map((item, index) => (
            <span key={`a-${item}-${index}`} className="flex items-center gap-10">
              <span className={index % 2 === 0 ? "text-ice" : "marquee-outline"}>{item}</span>
              <span className="h-2 w-2 rounded-full bg-cyan" />
            </span>
          ))}
        </p>
      </div>
      <div className="marquee-fade py-2" aria-hidden>
        <p className="marquee-track marquee-slow flex min-w-max items-center gap-10 pr-10 text-[clamp(2rem,4.5vw,3.6rem)] font-semibold leading-none tracking-[-0.05em] [animation-direction:reverse]">
          {loop.map((item, index) => (
            <span key={`b-${item}-${index}`} className="flex items-center gap-10">
              <span className={index % 2 === 0 ? "marquee-outline" : "text-silver/80"}>{item}</span>
              <span className="h-px w-8 bg-bite" />
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
