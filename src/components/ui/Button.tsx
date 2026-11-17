import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "dark" | "light" | "ghost" | "ghostDark";

const variants: Record<Variant, string> = {
  primary: "bg-cyan text-obsidian shadow-[0_0_0_rgba(0,213,255,0)] hover:bg-bite hover:shadow-[0_12px_32px_rgba(0,213,255,0.28)]",
  dark: "bg-obsidian text-ice hover:bg-titanium",
  light: "bg-ice text-obsidian hover:bg-silver",
  ghost: "border border-silver/70 bg-transparent text-ice hover:border-cyan hover:text-cyan",
  ghostDark: "border border-obsidian/20 bg-transparent text-obsidian hover:border-obsidian hover:bg-obsidian hover:text-ice",
};

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type Common = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  withArrow?: boolean;
  onClick?: () => void;
};

type LinkProps = Common & { href: string };
type NativeProps = Common & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button({
  variant = "primary",
  className,
  children,
  withArrow = true,
  onClick,
  ...props
}: LinkProps | NativeProps) {
  const classes = cn(
    "group inline-flex h-12 items-center justify-center gap-2.5 rounded-full px-6 text-[15px] font-semibold transition duration-300 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    className,
  );
  const content = (
    <>
      {children}
      {withArrow ? (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden>
          <Arrow />
        </span>
      ) : null}
    </>
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  const buttonProps = props as NativeProps;
  return (
    <button {...buttonProps} className={classes} onClick={onClick}>
      {content}
    </button>
  );
}
