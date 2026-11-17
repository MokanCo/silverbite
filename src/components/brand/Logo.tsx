import Link from "next/link";

export function Logo({ idPrefix, mark = false }: { idPrefix: string; mark?: boolean }) {
  const metal = `${idPrefix}-logo-metal`;
  const mask = `${idPrefix}-logo-bite`;

  return (
    <Link href="/" className="relative z-10 flex items-center gap-2.5" aria-label="Silverbite Technologies, home">
      <svg viewBox="0 0 40 40" className="h-10 w-10 overflow-visible" aria-hidden>
        <defs>
          <linearGradient id={metal} x1="6" y1="4" x2="32" y2="36" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#F4F6F8" />
            <stop offset="0.48" stopColor="#C7CDD6" />
            <stop offset="1" stopColor="#F4F6F8" />
          </linearGradient>
          <mask id={mask}>
            <rect width="40" height="40" fill="white" />
            <circle cx="30" cy="9" r="6.2" fill="black" />
          </mask>
        </defs>
        <circle cx="17" cy="21" r="10" fill="none" stroke={`url(#${metal})`} strokeWidth="4" mask={`url(#${mask})`} />
        <circle cx="33.2" cy="5.2" r="1.7" fill="#C7CDD6" />
        <circle cx="36.2" cy="9.4" r="1.25" fill="#00D5FF" />
      </svg>
      {mark ? null : (
        <span className="leading-none">
          <span className="block text-[15px] font-semibold tracking-[-0.04em] text-ice">Silverbite</span>
          <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.22em] text-silver">
            Technologies
          </span>
        </span>
      )}
    </Link>
  );
}
