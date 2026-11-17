const technologies = ["React", "Next.js", "Node.js", "Python", "React Native", "PostgreSQL", "AWS", "Azure"] as const;

function ToolIcon({ name }: { name: (typeof technologies)[number] }) {
  const className = "h-9 w-9";
  switch (name) {
    case "React":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="9.2" ry="3.6" stroke="currentColor" strokeWidth="1.2" />
          <ellipse cx="12" cy="12" rx="9.2" ry="3.6" stroke="currentColor" strokeWidth="1.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9.2" ry="3.6" stroke="currentColor" strokeWidth="1.2" transform="rotate(120 12 12)" />
        </svg>
      );
    case "Next.js":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
          <path d="M12 2.2a9.8 9.8 0 1 0 0 19.6 9.8 9.8 0 0 0 0-19.6Zm3.9 14.2h-1.7V10.4L9.6 16.4H8.1V7.6h1.7v6l4.5-6h1.6v8.8Z" />
        </svg>
      );
    case "Node.js":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
          <path d="M12 2.4 20.2 7.1v9.8L12 21.6 3.8 16.9V7.1L12 2.4Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
          <path d="M8.2 15.2V9.6L12 7.5l3.8 2.1v5.6L12 17.3l-3.8-2.1Z" fill="currentColor" />
        </svg>
      );
    case "Python":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
          <path d="M12 2.2c-2.7 0-2.5 1.2-2.5 2.7v1.4h5.1v.7H7.3C5.6 7 4.5 8.1 4.5 10.2c0 2.2 1.2 3.2 2.8 3.2h1.8v-1.5c0-1.7 1.5-3.1 3.2-3.1h2.7c1.6 0 2.8-1.3 2.8-2.9V4.9c0-1.7-1.2-2.7-3-2.7H12Zm-1.3 1.9a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z" />
          <path d="M12 21.8c2.7 0 2.5-1.2 2.5-2.7v-1.4H9.4v-.7h7.3c1.7 0 2.8-1.1 2.8-3.2 0-2.2-1.2-3.2-2.8-3.2h-1.8v1.5c0 1.7-1.5 3.1-3.2 3.1H8.9c-1.6 0-2.8 1.3-2.8 2.9v2.1c0 1.7 1.2 2.7 3 2.7H12Zm1.3-1.9a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
        </svg>
      );
    case "React Native":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
          <rect x="7" y="2.4" width="10" height="19.2" rx="2.2" stroke="currentColor" strokeWidth="1.3" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="4.2" ry="1.6" stroke="currentColor" strokeWidth="1" />
          <ellipse cx="12" cy="12" rx="4.2" ry="1.6" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="4.2" ry="1.6" stroke="currentColor" strokeWidth="1" transform="rotate(120 12 12)" />
        </svg>
      );
    case "PostgreSQL":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
          <path d="M8.2 8.2c.4-2.2 2.2-3.7 4.4-3.7 1.8 0 3.1.8 3.6 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M16.2 6.8c1.2-.2 2.4.6 2.6 1.8.2.8-.1 1.6-.7 2.1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <ellipse cx="11.5" cy="12.2" rx="4.6" ry="3.6" stroke="currentColor" strokeWidth="1.4" />
          <path d="M8.2 14.2c-.2 1.6.2 3 1.2 4.1.4.5.3 1.2-.2 1.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="10.2" cy="11.4" r="0.7" fill="currentColor" />
        </svg>
      );
    case "AWS":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
          <path d="M5.2 15.2c2.6 2.2 6.2 3.2 10.2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="m14.6 15.6 3.1.8-1-2.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "Azure":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
          <path d="M10.6 20.2 3.8 6.2h5.1l3.2 8.4 3.4-8.4h4.7L13.4 20.2h-2.8Z" />
        </svg>
      );
  }
}

export function TrustStrip() {
  const row = [...technologies, ...technologies];
  return (
    <section className="overflow-hidden border-b border-obsidian/10 bg-ice py-6" aria-label="Technologies in our practice">
      <p className="px-5 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-titanium">
        Tools in our practice. Not partnerships or certifications.
      </p>
      <p className="sr-only">{technologies.join(", ")}</p>
      <div className="marquee-fade mt-5 py-2" aria-hidden>
        <ul className="marquee-track flex min-w-max items-center gap-16 pr-16">
          {row.map((name, index) => (
            <li key={`${name}-${index}`} className="text-obsidian" title={name}>
              <ToolIcon name={name} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
