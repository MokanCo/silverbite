import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-[1380px] px-5 sm:px-8 md:pl-32 md:pr-10", className)}>{children}</div>;
}
