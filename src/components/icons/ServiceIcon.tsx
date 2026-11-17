import type { ServiceIconName } from "@/content/services";

const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  className: "h-6 w-6",
  "aria-hidden": true,
};

export function ServiceIcon({ name }: { name: ServiceIconName }) {
  switch (name) {
    case "web":
      return (
        <svg {...common}>
          <rect x="3" y="4.5" width="18" height="15" rx="1.5" />
          <path d="M3 8.5h18" />
          <circle cx="18.2" cy="6.4" r="2" fill="currentColor" stroke="none" />
        </svg>
      );
    case "mobile":
      return (
        <svg {...common}>
          <rect x="8" y="2.5" width="8" height="19" rx="2" />
          <path d="M11 18.5h2" />
        </svg>
      );
    case "ai":
      return (
        <svg {...common}>
          <circle cx="6" cy="15" r="2" />
          <circle cx="16" cy="6" r="2" />
          <circle cx="18" cy="17" r="2" />
          <path d="M7.7 13.8 14.2 7.6M7.8 15.8l8.2 1" />
        </svg>
      );
    case "software":
      return (
        <svg {...common}>
          <rect x="3.5" y="4.5" width="12" height="8" rx="1" />
          <rect x="8.5" y="11.5" width="12" height="8" rx="1" />
        </svg>
      );
    case "design":
      return (
        <svg {...common}>
          <path d="M4 16.5 14.5 4.5l4 4L8 20.5H4v-4Z" />
          <path d="M12.5 6.5 16.5 10.5" />
        </svg>
      );
    case "commerce":
      return (
        <svg {...common}>
          <path d="M6.5 8h11l-.8 11h-9.4L6.5 8Z" />
          <path d="M9 8a3 3 0 0 1 6 0" />
        </svg>
      );
    case "marketing":
      return (
        <svg {...common}>
          <path d="M4 15V9" />
          <path d="M4 12h6l8-5v10l-8-5H4Z" />
        </svg>
      );
    case "cloud":
      return (
        <svg {...common}>
          <path d="M7 17h10a3.5 3.5 0 0 0 .4-7 5 5 0 0 0-9.6 1.4A3.2 3.2 0 0 0 7 17Z" />
        </svg>
      );
    case "api":
      return (
        <svg {...common}>
          <path d="M9 7 4.5 12 9 17" />
          <path d="M15 7 19.5 12 15 17" />
        </svg>
      );
    case "consulting":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="m12 7 1.4 5L12 17l-1.4-5L12 7Z" />
        </svg>
      );
    case "support":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="7.5" />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      );
    case "automation":
      return (
        <svg {...common}>
          <path d="M4 7h6l2 3h8" />
          <path d="M4 17h5l2-3h9" />
          <circle cx="4" cy="7" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="20" cy="17" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      );
    default:
      return null;
  }
}
