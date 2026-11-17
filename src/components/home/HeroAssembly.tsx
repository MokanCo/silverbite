"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;
const src = "/visuals/sb-campaign.jpg";

const panes = [
  { clip: "inset(0 42% 46% 0)", dx: -28, dy: -16 },
  { clip: "inset(0 0 48% 50%)", dx: 26, dy: -14 },
  { clip: "inset(50% 48% 0 0)", dx: -22, dy: 18 },
  { clip: "inset(46% 0 0 44%)", dx: 24, dy: 16 },
];

type Phase = "assemble" | "scatter" | "join" | "hold";

export function HeroAssembly({ phase }: { phase: Phase }) {
  return (
    <div className="absolute inset-0">
      <motion.img
        src={src}
        alt="Dark server architecture under a silver lattice, with a few cyan nodes. A studio visual, not a client system."
        className="absolute inset-0 h-full w-full object-cover object-[68%_center]"
        initial={false}
        animate={{ opacity: phase === "scatter" ? 0.4 : 0.15 }}
        transition={{ duration: 1.8, ease }}
      />
      {panes.map((pane, index) => (
        <motion.div
          key={pane.clip}
          aria-hidden
          className="absolute inset-0"
          style={{ clipPath: pane.clip }}
          initial={false}
          animate={
            phase === "assemble"
              ? { x: [pane.dx, pane.dx, 0], y: [pane.dy, pane.dy, 0] }
              : phase === "scatter"
                ? { x: pane.dx, y: pane.dy }
                : { x: 0, y: 0 }
          }
          transition={{
            duration: phase === "assemble" ? 4.6 : phase === "scatter" ? 2.8 : 3.6,
            delay: (phase === "assemble" || phase === "join" ? 0.16 : 0.08) * index,
            ease,
            times: phase === "assemble" ? [0, 0.1, 1] : undefined,
          }}
        >
          <img src={src} alt="" className="absolute inset-0 h-full w-full object-cover object-[68%_center]" />
        </motion.div>
      ))}
    </div>
  );
}

export type { Phase as AssemblyPhase };
