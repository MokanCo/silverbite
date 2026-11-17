"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

const stages = [
  ["01", "Discover", "We understand your business, requirements, and goals."],
  ["02", "Strategize", "We define the right roadmap and technology."],
  ["03", "Design", "We create meaningful and intuitive experiences."],
  ["04", "Develop", "We engineer, test, and refine the solution."],
  ["05", "Launch", "We release the work with the care a first day in the world deserves."],
  ["06", "Optimize", "We watch real use and improve what the launch reveals."],
];

export function Approach() {
  const reduce = useReducedMotion();

  return (
    <section id="approach" className="bg-titanium py-20 text-ice lg:py-28">
      <div className="px-5 sm:px-8 md:pl-32 md:pr-10">
        <Reveal>
          <Eyebrow invert>Our process</Eyebrow>
          <h2 className="mt-4 max-w-3xl text-[clamp(2.4rem,4.8vw,4.6rem)] font-semibold leading-[0.96] tracking-[-0.05em]">
            From vision to reality.
          </h2>
        </Reveal>
        <ol className="relative mt-16 grid gap-10 lg:mt-20 lg:grid-cols-6 lg:gap-6">
          <span className="absolute bottom-3 left-[7px] top-3 w-px bg-silver/25 lg:bottom-auto lg:left-0 lg:right-0 lg:top-[7px] lg:h-px lg:w-auto" aria-hidden />
          <motion.span
            aria-hidden
            className="absolute bottom-3 left-[7px] top-3 w-px origin-top bg-cyan lg:hidden"
            initial={reduce ? false : { scaleY: 0 }}
            whileInView={reduce ? undefined : { scaleY: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.span
            aria-hidden
            className="absolute left-0 right-0 top-[7px] hidden h-px origin-left bg-cyan lg:block"
            initial={reduce ? false : { scaleX: 0 }}
            whileInView={reduce ? undefined : { scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
          {stages.map(([number, title, text]) => (
            <li key={number} className="relative pl-8 lg:pl-0 lg:pt-10">
              <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border border-cyan bg-obsidian lg:top-0" aria-hidden />
              <p className="text-xs font-semibold tabular-nums tracking-[0.16em] text-cyan">{number}</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-silver">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
