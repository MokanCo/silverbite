"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

export function Accordion({ items }: { items: ReadonlyArray<{ question: string; answer: string }> }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="border-t border-ink/10">
      {items.map((item, index) => {
        const expanded = open === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        return (
          <div key={item.question} className="border-b border-ink/10">
            <h3>
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpen(expanded ? -1 : index)}
              >
                <span className="text-lg font-semibold tracking-[-0.03em] text-ink sm:text-2xl">{item.question}</span>
                <span
                  className={cn(
                    "grid h-9 w-9 shrink-0 place-items-center border border-bite text-obsidian transition-transform duration-300",
                    expanded && "rotate-45",
                  )}
                  aria-hidden
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn("grid transition-[grid-template-rows] duration-300", expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl pb-6 text-base leading-relaxed text-dusk">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
