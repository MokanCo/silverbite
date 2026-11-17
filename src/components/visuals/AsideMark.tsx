import { BiteDisc } from "@/components/brand/BiteDisc";

export function AsideMark({ name }: { name: "orbit" | "bars" | "nodes" | "stack" | "quiet" }) {
  return (
    <div className="relative h-72 w-full" aria-hidden>
      <span className="absolute left-0 top-0 h-5 w-5 border-l border-t border-silver/40" />
      <span className="absolute right-0 top-0 h-5 w-5 border-r border-t border-silver/40" />
      <span className="absolute bottom-0 left-0 h-5 w-5 border-b border-l border-silver/40" />
      <span className="absolute bottom-0 right-0 h-5 w-5 border-b border-r border-silver/40" />
      {name === "orbit" ? (
        <div className="absolute inset-8">
          <div className="absolute inset-0 rounded-full border border-dashed border-silver/30" />
          <div className="absolute inset-8 rounded-full border border-silver/20" />
          <div className="absolute right-[8%] top-[10%] h-16 w-16 rounded-full bg-cyan/25 blur-2xl" />
          <BiteDisc idPrefix="aside" className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2" />
        </div>
      ) : null}
      {name === "bars" ? (
        <div className="absolute inset-x-8 top-1/2 flex -translate-y-1/2 flex-col gap-4">
          <span className="h-2 w-[86%] bg-silver/80" />
          <span className="h-2 w-[62%] bg-silver/45" />
          <span className="h-2 w-[74%] bg-bright" />
          <span className="h-2 w-[40%] bg-silver/30" />
        </div>
      ) : null}
      {name === "nodes" ? (
        <svg viewBox="0 0 240 220" className="absolute inset-6 h-[calc(100%-3rem)] w-[calc(100%-3rem)]">
          <path d="M40 150 L110 70 L180 120 L140 170" stroke="#C7CDD6" strokeOpacity="0.7" fill="none" />
          <path d="M110 70 L70 90" stroke="#C7CDD6" strokeOpacity="0.4" fill="none" />
          <circle cx="40" cy="150" r="6" fill="#C7CDD6" />
          <circle cx="110" cy="70" r="7" fill="#00D5FF" />
          <circle cx="180" cy="120" r="5" fill="#C7CDD6" />
          <circle cx="140" cy="170" r="4" fill="#F4F6F8" />
          <circle cx="70" cy="90" r="3" fill="#C7CDD6" />
        </svg>
      ) : null}
      {name === "stack" ? (
        <div className="absolute inset-10">
          <div className="absolute left-0 top-6 h-24 w-[78%] border border-silver/40 bg-white/5" />
          <div className="absolute left-8 top-16 h-24 w-[78%] border border-silver/50 bg-navy" />
          <div className="absolute left-16 top-28 h-24 w-[70%] border border-bright/70 bg-ink" />
        </div>
      ) : null}
      {name === "quiet" ? (
        <div className="absolute inset-x-8 top-1/2">
          <div className="h-px w-full bg-silver/30" />
          <div className="mt-4 h-2 w-10 bg-bright" />
        </div>
      ) : null}
    </div>
  );
}
