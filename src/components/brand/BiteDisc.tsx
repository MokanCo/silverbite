import { cn } from "@/lib/cn";

export function BiteDisc({
  idPrefix,
  className,
  detailed = false,
}: {
  idPrefix: string;
  className?: string;
  detailed?: boolean;
}) {
  const metal = `${idPrefix}-metal`;
  const mask = `${idPrefix}-bite`;

  return (
    <svg viewBox="0 0 200 200" className={cn("overflow-visible", className)} fill="none" aria-hidden>
      <defs>
        <linearGradient id={metal} x1="36" y1="24" x2="168" y2="184" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#F4F6F8" />
          <stop offset="0.42" stopColor="#C7CDD6" />
          <stop offset="0.7" stopColor="#343B48" />
          <stop offset="1" stopColor="#C7CDD6" />
        </linearGradient>
        <mask id={mask}>
          <rect width="200" height="200" fill="white" />
          <circle cx="154" cy="50" r="28" fill="black" />
        </mask>
      </defs>
      <circle
        cx="96"
        cy="108"
        r="62"
        stroke={`url(#${metal})`}
        strokeWidth="18"
        mask={`url(#${mask})`}
      />
      {detailed ? (
        <>
          <circle cx="96" cy="108" r="36" stroke="#C7CDD6" strokeOpacity="0.35" strokeWidth="1" />
          <path d="M96 78v60M66 108h60" stroke="#C7CDD6" strokeOpacity="0.35" strokeWidth="1" />
        </>
      ) : null}
      <circle cx="168" cy="28" r="5" fill="#C7CDD6" />
      <circle cx="184" cy="46" r="3.2" fill="#00D5FF" />
      <circle cx="156" cy="16" r="2.2" fill="#F4F6F8" />
    </svg>
  );
}
