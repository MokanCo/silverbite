import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Eyebrow({ children, invert = false }: { children: ReactNode; invert?: boolean }) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em]",
        invert ? "text-muted" : "text-dusk",
      )}
    >
      <span className={cn("h-px w-8", invert ? "bg-cyan" : "bg-bite")} aria-hidden />
      {children}
    </p>
  );
}
