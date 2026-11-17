"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { HeroAssembly, type AssemblyPhase } from "@/components/home/HeroAssembly";
import { HeroField } from "@/components/home/HeroField";
import { Button } from "@/components/ui/Button";

const lines = [
  { text: "Engineering", tone: "text-ice" },
  { text: "what's", tone: "text-silver" },
  { text: "next.", tone: "text-cyan" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const [phase, setPhase] = useState<AssemblyPhase>("hold");

  useEffect(() => {
    if (reduce !== false) {
      if (reduce) setPhase("hold");
      return;
    }
    let alive = true;
    const timers: number[] = [];
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timers.push(window.setTimeout(resolve, ms));
      });

    async function play() {
      setPhase("assemble");
      await wait(5200);
      if (!alive) return;
      setPhase("hold");
      await wait(1600);
      if (!alive) return;
      setPhase("scatter");
      await wait(3000);
      if (!alive) return;
      setPhase("join");
      await wait(4000);
      while (alive) {
        setPhase("hold");
        await wait(120000);
        if (!alive) return;
        setPhase("scatter");
        await wait(3000);
        if (!alive) return;
        setPhase("join");
        await wait(4000);
      }
    }

    void play();
    return () => {
      alive = false;
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, [reduce]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden bg-obsidian text-ice">
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <motion.div className="absolute inset-0" style={reduce ? undefined : { y }}>
          <HeroAssembly phase={reduce === false ? phase : "hold"} />
        </motion.div>
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, #090B10 6%, rgba(9,11,16,0.92) 40%, rgba(9,11,16,0.18) 100%)" }}
        />
      </div>
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-50 [mask-image:linear-gradient(to_right,#000_0%,#000_40%,transparent_72%)]" />
      <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_right,#000_0%,#000_34%,transparent_68%)]">
        <HeroField />
      </div>
      <div className="pointer-events-none absolute right-[8%] top-[18%] z-[2] hidden h-[42vh] w-[42vh] rounded-full bg-cyan/10 blur-3xl lg:block" />
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1480px] flex-col justify-center px-5 pb-28 pt-16 sm:px-8 md:pb-16 md:pl-32 lg:pr-10">
        <div className="relative z-10 max-w-[38rem]">
          <motion.p
            className="text-[11px] font-semibold uppercase tracking-[0.32em] text-silver"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            Silverbite Technologies
          </motion.p>
          <div className="relative mt-5">
            <h1 className="relative z-10 text-[clamp(3.15rem,6vw,6.2rem)] font-semibold uppercase leading-[0.86] tracking-[-0.055em]">
              {lines.map((line, index) => (
                <span key={line.text} className="block overflow-hidden">
                  <motion.span
                    className={`block ${line.tone}`}
                    initial={reduce ? false : { y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.9, ease, delay: 0.12 + index * 0.08 }}
                  >
                    {line.text}
                  </motion.span>
                </span>
              ))}
            </h1>
          </div>
          <motion.p
            className="mt-8 max-w-xl text-base leading-relaxed text-silver sm:text-lg"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.5 }}
          >
            We design and develop intelligent digital experiences, powerful software and innovative technology that help
            businesses move forward.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.62 }}
          >
            <Button href="/contact">Start a Project</Button>
            <Button href="/portfolio" variant="ghost">
              Explore Our Work
            </Button>
          </motion.div>
        </div>
        <div className="relative z-[2] mt-10 h-[38vh] min-h-[240px] overflow-hidden lg:hidden">
          <HeroAssembly phase={reduce === false ? phase : "hold"} />
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-obsidian to-transparent" />
        </div>
      </div>
      <a
        href="#studio"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-silver md:flex"
      >
        Scroll
        <span className="relative h-10 w-px overflow-hidden bg-silver/30" aria-hidden>
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-cyan"
            animate={reduce ? undefined : { y: ["-100%", "220%"] }}
            transition={reduce ? undefined : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </a>
    </section>
  );
}
