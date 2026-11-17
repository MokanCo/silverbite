"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BiteDisc } from "@/components/brand/BiteDisc";

const particles = [
  { top: "18%", left: "16%", color: "bg-bright", delay: "0s" },
  { top: "30%", left: "82%", color: "bg-silver", delay: "1.1s" },
  { top: "68%", left: "10%", color: "bg-silver", delay: "0.4s" },
  { top: "74%", left: "76%", color: "bg-bright", delay: "1.6s" },
  { top: "46%", left: "90%", color: "bg-silver", delay: "0.8s" },
];

function GlassCard({
  kicker,
  label,
  className,
  delay,
}: {
  kicker: string;
  label: string;
  className: string;
  delay: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={`absolute border border-white/15 bg-white/10 p-3 backdrop-blur-md sm:p-4 ${className}`}
      animate={reduce ? undefined : { y: [0, -8, 0] }}
      transition={reduce ? undefined : { duration: 7 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-bright">{kicker}</p>
      <p className="mt-1 text-sm font-medium text-white">{label}</p>
    </motion.div>
  );
}

export function HeroArt() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [24, -36]);

  return (
    <div ref={ref} className="relative h-[340px] sm:h-[460px] lg:h-[540px]" aria-hidden>
      <div className="absolute inset-[12%] rounded-full bg-cyan/20 blur-3xl" />
      <span className="absolute left-0 top-0 h-6 w-6 border-l border-t border-silver/50" />
      <span className="absolute right-0 top-0 h-6 w-6 border-r border-t border-silver/50" />
      <span className="absolute bottom-0 left-0 h-6 w-6 border-b border-l border-silver/50" />
      <span className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-silver/50" />
      {particles.map((particle) => (
        <span
          key={`${particle.top}-${particle.left}`}
          className={`particle absolute h-1 w-1 ${particle.color}`}
          style={{ top: particle.top, left: particle.left, animationDelay: particle.delay }}
        />
      ))}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-silver/25"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={reduce ? undefined : { duration: 90, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 bg-bright" />
      </motion.div>
      <div className="absolute left-1/2 top-1/2 h-[64%] w-[64%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-silver/15" />
      <motion.div className="absolute inset-0" style={reduce ? undefined : { y }}>
        <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2">
          <div className="absolute right-[12%] top-[8%] h-20 w-20 rounded-full bg-cyan/25 blur-2xl" />
          <BiteDisc idPrefix="hero" detailed className="relative h-full w-full" />
        </div>
      </motion.div>
      <GlassCard kicker="Design" label="Interface systems" className="left-0 top-[8%] max-w-[46%]" delay={0} />
      <GlassCard kicker="Build" label="Product engineering" className="right-0 top-[42%] max-w-[48%]" delay={0.6} />
      <GlassCard
        kicker="Scale"
        label="Intelligent automation"
        className="bottom-[6%] left-[8%] hidden max-w-[52%] sm:block"
        delay={1.1}
      />
      <p className="absolute bottom-1 right-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
        Fig. 01 · Silver geometry
      </p>
    </div>
  );
}
