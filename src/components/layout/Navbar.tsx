"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { isActivePath, navLinks, type NavIconName } from "@/content/navigation";
import { socialMarks } from "@/content/site";
import { cn } from "@/lib/cn";

const ease = [0.22, 1, 0.36, 1] as const;
const socialEase = [0.45, 0, 0.15, 1] as const;

const icons: Record<NavIconName, ReactNode> = {
  home: (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" aria-hidden>
      <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  ),
  about: (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" aria-hidden>
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5.5 19.5c1.2-3 3.4-4.5 6.5-4.5s5.3 1.5 6.5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  services: (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" aria-hidden>
      <path d="M12 3.5 20 8v8l-8 4.5L4 16V8l8-4.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M12 12 20 8M12 12v8.5M12 12 4 8" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  work: (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" aria-hidden>
      <rect x="3.5" y="7" width="17" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  industries: (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" aria-hidden>
      <path d="M4 20V10l5-3v3l5-3v13" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M14 20V9l6 3v8" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M3 20h18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  process: (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" aria-hidden>
      <circle cx="6" cy="7" r="2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="18" cy="12" r="2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="7" cy="18" r="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 8.2 16.2 11M16.2 13.2 8.8 16.6" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  contact: (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" aria-hidden>
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
};

const socialIcons: Record<string, ReactNode> = {
  LinkedIn: (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
      <path d="M4.7 3.4A1.8 1.8 0 1 1 4.68 7a1.8 1.8 0 0 1 .02-3.6ZM3.2 8.7h3.1V20.6H3.2V8.7Zm5.1 0h3v1.6h.1c.4-.8 1.5-1.7 3.1-1.7 3.3 0 3.9 2.2 3.9 5v6.9h-3.1v-6.1c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3v6.2H8.3V8.7Z" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden>
      <rect x="4" y="4" width="16" height="16" rx="4.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16.7" cy="7.3" r="0.8" fill="currentColor" />
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
      <path d="M14.2 20.5v-7.1h2.4l.4-2.8h-2.8V8.9c0-.8.2-1.4 1.4-1.4h1.5V5.1c-.3 0-1.1-.1-2.2-.1-2.2 0-3.6 1.3-3.6 3.8v1.8H9v2.8h2.3v7.1h2.9Z" />
    </svg>
  ),
  X: (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
      <path d="M14.7 4h2.6l-5.7 6.5L18.5 20h-4.6l-3.6-4.7L6.3 20H3.7l6.1-7L3.8 4h4.7l3.3 4.3L14.7 4Zm-.9 14.4h1.4L8.3 5.5H6.8l7 12.9Z" />
    </svg>
  ),
};

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" aria-hidden>
      <circle cx="7" cy="12" r="2.1" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="16.5" cy="7" r="2.1" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="16.5" cy="17" r="2.1" stroke="currentColor" strokeWidth="1.4" />
      <path d="m8.8 11.1 5.8-3.2M8.8 12.9l5.8 3.2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function SocialItem({ profile }: { profile: { label: string; href: string } }) {
  const className = "group relative grid h-8 w-full place-items-center rounded-full text-silver transition-colors duration-300 hover:text-cyan";
  const content = (
    <>
      {socialIcons[profile.label]}
      <Tooltip label={profile.label} />
    </>
  );
  if (!profile.href) {
    return (
      <span aria-label={profile.label} className={className}>
        {content}
      </span>
    );
  }
  return (
    <a href={profile.href} target="_blank" rel="noreferrer" aria-label={profile.label} className={className}>
      {content}
    </a>
  );
}

function Tooltip({ label }: { label: string }) {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute left-[calc(100%+14px)] top-1/2 z-10 -translate-y-1/2 translate-x-1 rounded-full border border-silver/25 bg-obsidian/95 px-3 py-1 text-[11px] font-medium tracking-[0.04em] text-ice opacity-0 shadow-[0_10px_30px_rgba(9,11,16,0.35)] transition duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
    >
      {label}
    </span>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [hash, setHash] = useState("");
  const [socialOpen, setSocialOpen] = useState(false);

  useEffect(() => {
    const read = () => setHash(window.location.hash);
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, [pathname]);

  const processActive = pathname === "/" && hash === "#approach";

  function follow(event: { preventDefault: () => void }, href: string) {
    if (href === "/" && pathname === "/") {
      event.preventDefault();
      window.history.pushState(null, "", "/");
      setHash("");
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      return;
    }
    if (href === "/") setHash("");
    if (href === "/#approach") {
      setHash("#approach");
      if (pathname === "/") {
        event.preventDefault();
        window.history.pushState(null, "", "/#approach");
        document.getElementById("approach")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      }
    }
  }

  return (
    <>
      <motion.nav
        aria-label="Primary"
        className="fixed left-4 top-1/2 z-50 hidden md:block"
        initial={reduce ? { y: "-50%" } : { opacity: 0, x: -14, y: "-50%" }}
        animate={{ opacity: 1, x: 0, y: "-50%" }}
        transition={{ duration: 0.6, ease }}
      >
        <div className="flex w-[60px] flex-col items-center rounded-full border border-silver/30 bg-obsidian/80 px-1.5 py-2 shadow-[inset_0_1px_0_rgba(199,205,214,0.28),0_18px_40px_rgba(9,11,16,0.4)] backdrop-blur-xl">
          <ul className="flex w-full flex-col items-center gap-0.5">
            {navLinks.map((link) => {
              const active = link.href === "/#approach" ? processActive : isActivePath(pathname, link.href) && !processActive;
              return (
                <li key={link.href} className="w-full">
                  <Link
                    href={link.href}
                    aria-label={link.label}
                    aria-current={active ? "page" : undefined}
                    onClick={(event) => follow(event, link.href)}
                    className={cn(
                      "group relative grid h-10 w-full place-items-center rounded-full transition-colors duration-300",
                      active ? "text-cyan" : "text-silver hover:text-ice",
                    )}
                  >
                    {active ? (
                      <motion.span
                        layoutId={reduce ? undefined : "pill-active"}
                        className="absolute inset-0 rounded-full bg-cyan/15 shadow-[inset_0_0_0_1px_rgba(0,213,255,0.5)]"
                        transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 36 }}
                      />
                    ) : (
                      <span className="absolute inset-0 rounded-full opacity-0 transition duration-300 group-hover:bg-silver/10 group-hover:opacity-100" />
                    )}
                    <span className="relative transition-transform duration-300 group-hover:-translate-y-px">{icons[link.icon]}</span>
                    <Tooltip label={link.label} />
                  </Link>
                </li>
              );
            })}
          </ul>
          <motion.div
            className="relative mt-5 w-full overflow-hidden"
            initial={false}
            animate={{ height: socialOpen ? socialMarks.length * 32 : 40 }}
            transition={{ duration: reduce ? 0.01 : 0.9, ease: socialEase }}
            onMouseEnter={() => setSocialOpen(true)}
            onMouseLeave={() => setSocialOpen(false)}
          >
            <motion.div
              aria-hidden
              className="absolute inset-x-0 top-0 grid h-10 place-items-center text-silver"
              initial={false}
              animate={{ opacity: socialOpen ? 0 : 1 }}
              transition={{ duration: reduce ? 0.01 : socialOpen ? 0.25 : 0.55, delay: reduce || socialOpen ? 0 : 0.28, ease: socialEase }}
              style={{ pointerEvents: "none" }}
            >
              <ShareIcon />
            </motion.div>
            <motion.ul
              className="flex w-full flex-col items-center"
              initial={false}
              animate={{ opacity: socialOpen ? 1 : 0, y: socialOpen ? 0 : -6 }}
              transition={{ duration: reduce ? 0.01 : 0.7, delay: reduce || !socialOpen ? 0 : 0.12, ease: socialEase }}
              style={{ pointerEvents: socialOpen ? "auto" : "none" }}
            >
              {socialMarks.map((profile, index) => (
                <motion.li
                  key={profile.label}
                  className="w-full"
                  initial={false}
                  animate={{ opacity: socialOpen ? 1 : 0, y: socialOpen ? 0 : -6 }}
                  transition={{ duration: reduce ? 0.01 : 0.55, delay: reduce ? 0 : socialOpen ? 0.08 + index * 0.07 : 0, ease: socialEase }}
                >
                  <SocialItem profile={profile} />
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </motion.nav>

      <div className="fixed inset-x-3 bottom-3 z-50 flex flex-col items-center gap-3 md:hidden">
        <nav
          aria-label="Social"
          onMouseEnter={() => setSocialOpen(true)}
          onMouseLeave={() => setSocialOpen(false)}
          className="flex min-h-11 min-w-11 items-center overflow-hidden rounded-full border border-silver/30 bg-obsidian/88 px-1.5 py-1 shadow-[0_12px_30px_rgba(9,11,16,0.35)] backdrop-blur-xl"
        >
          <motion.div
            className="relative flex items-center overflow-hidden"
            initial={false}
            animate={{ width: socialOpen ? socialMarks.length * 36 : 36 }}
            transition={{ duration: reduce ? 0.01 : 0.9, ease: socialEase }}
          >
            <motion.div
              aria-hidden
              className="absolute left-0 grid h-9 w-9 place-items-center text-silver"
              initial={false}
              animate={{ opacity: socialOpen ? 0 : 1 }}
              transition={{ duration: reduce ? 0.01 : socialOpen ? 0.25 : 0.55, delay: reduce || socialOpen ? 0 : 0.28, ease: socialEase }}
              style={{ pointerEvents: "none" }}
            >
              <ShareIcon />
            </motion.div>
            <motion.div
              className="flex"
              initial={false}
              animate={{ opacity: socialOpen ? 1 : 0 }}
              transition={{ duration: reduce ? 0.01 : 0.7, delay: reduce || !socialOpen ? 0 : 0.12, ease: socialEase }}
              style={{ pointerEvents: socialOpen ? "auto" : "none" }}
            >
              {socialMarks.map((profile) =>
                profile.href ? (
                  <a
                    key={profile.label}
                    href={profile.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={profile.label}
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-silver"
                  >
                    {socialIcons[profile.label]}
                  </a>
                ) : (
                  <span key={profile.label} aria-label={profile.label} className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-silver">
                    {socialIcons[profile.label]}
                  </span>
                ),
              )}
            </motion.div>
          </motion.div>
        </nav>
        <nav
          aria-label="Primary"
          className="flex w-full items-center justify-between rounded-full border border-silver/30 bg-obsidian/88 px-1.5 py-1.5 shadow-[0_16px_40px_rgba(9,11,16,0.4)] backdrop-blur-xl"
        >
          {navLinks.map((link) => {
            const active = link.href === "/#approach" ? processActive : isActivePath(pathname, link.href) && !processActive;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-label={link.label}
                aria-current={active ? "page" : undefined}
                onClick={(event) => follow(event, link.href)}
                className={cn(
                  "grid h-11 w-10 place-items-center rounded-full transition-colors",
                  active ? "bg-cyan/15 text-cyan shadow-[inset_0_0_0_1px_rgba(0,213,255,0.45)]" : "text-silver",
                )}
              >
                {icons[link.icon]}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
