import type { ProjectArtName } from "@/content/projects";

function Signal() {
  return (
    <div className="absolute inset-6 border border-white/10 sm:inset-8">
      <div className="flex h-8 items-center gap-1.5 border-b border-white/10 px-3">
        <span className="h-1.5 w-1.5 rounded-full bg-silver/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-silver/40" />
        <span className="h-1.5 w-1.5 rounded-full bg-bright" />
      </div>
      <div className="grid h-[calc(100%-2rem)] grid-cols-[22%_1fr]">
        <div className="border-r border-white/10" />
        <div className="flex flex-col justify-center gap-3 px-4">
          <span className="h-2 w-[84%] bg-silver/70" />
          <span className="h-2 w-[58%] bg-silver/35" />
          <span className="h-2 w-[72%] bg-bright" />
          <span className="h-2 w-[40%] bg-silver/25" />
        </div>
      </div>
    </div>
  );
}

function Tide() {
  return (
    <>
      <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-silver/20" />
      <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-silver/30" />
      <div className="absolute left-1/2 top-1/2 h-[58%] w-[27%] -translate-x-1/2 -translate-y-1/2 rounded-[22px] border-2 border-silver/80">
        <div className="mx-auto mt-3 h-1 w-8 rounded-full bg-silver/50" />
        <div className="mx-4 mt-6 h-2 bg-bright" />
        <div className="mx-4 mt-3 h-1.5 w-2/3 bg-silver/40" />
        <div className="mx-4 mt-2 h-1.5 w-1/2 bg-silver/25" />
      </div>
    </>
  );
}

function Loom() {
  return (
    <div className="absolute inset-8 grid grid-cols-3 grid-rows-2 gap-3">
      <div className="border border-white/10 bg-white/5" />
      <div className="bg-bright" />
      <div className="bite-corner border border-white/10 bg-silver/20" />
      <div className="col-span-2 border border-white/10 bg-white/[0.04]" />
      <div className="border border-white/10 bg-white/5" />
    </div>
  );
}

function NodeArt() {
  return (
    <svg viewBox="0 0 320 220" className="absolute inset-0 h-full w-full">
      <path d="M40 150 L120 60 L210 110 L270 50 L250 160 L140 170 Z" fill="none" stroke="#C7CDD6" strokeOpacity="0.55" />
      <path d="M120 60 L150 150" stroke="#00D5FF" strokeOpacity="0.9" />
      <circle cx="40" cy="150" r="5" fill="#C7CDD6" />
      <circle cx="120" cy="60" r="7" fill="#00D5FF" />
      <circle cx="210" cy="110" r="5" fill="#F4F6F8" />
      <circle cx="270" cy="50" r="4" fill="#C7CDD6" />
      <circle cx="250" cy="160" r="5" fill="#C7CDD6" />
      <circle cx="140" cy="170" r="4" fill="#C7CDD6" />
    </svg>
  );
}

function Stack() {
  return (
    <div className="absolute inset-0">
      <div className="absolute left-[10%] top-[22%] h-[34%] w-[62%] border border-silver/35 bg-white/5" />
      <div className="absolute left-[20%] top-[36%] h-[34%] w-[62%] border border-silver/55 bg-navy" />
      <div className="absolute left-[30%] top-[50%] h-[30%] w-[56%] border-l-2 border-bright bg-ink" />
    </div>
  );
}

function Folio() {
  return (
    <div className="absolute inset-0">
      <p className="absolute left-8 top-10 text-7xl font-semibold tracking-[-0.06em] text-white/10 sm:text-8xl">Aa</p>
      <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <span className="block h-1.5 w-full bg-silver/50" />
          <span className="block h-1.5 w-4/5 bg-silver/30" />
          <span className="block h-1.5 w-3/5 bg-silver/20" />
        </div>
        <div className="space-y-2">
          <span className="block h-1.5 w-full bg-bright" />
          <span className="block h-1.5 w-2/3 bg-silver/30" />
          <span className="block h-1.5 w-1/2 bg-silver/20" />
        </div>
      </div>
    </div>
  );
}

function Kiln() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="relative h-48 w-48 sm:h-56 sm:w-56">
        <div className="absolute inset-0 rounded-full border border-silver/25" />
        <div className="bite-corner absolute inset-6 bg-silver/80" />
        <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-bright" />
        <span className="absolute right-6 top-0 h-1.5 w-1.5 rounded-full bg-silver" />
      </div>
    </div>
  );
}

function Ledger() {
  const bars = ["42%", "68%", "36%", "80%", "54%", "90%", "48%"];
  return (
    <div className="absolute inset-x-8 bottom-8 top-16 flex items-end gap-2 sm:gap-3">
      {bars.map((height, index) => (
        <span
          key={height + index}
          className={index === 3 ? "flex-1 bg-bright" : "flex-1 bg-silver/50"}
          style={{ height }}
        />
      ))}
    </div>
  );
}

const arts = {
  signal: Signal,
  tide: Tide,
  loom: Loom,
  node: NodeArt,
  stack: Stack,
  folio: Folio,
  kiln: Kiln,
  ledger: Ledger,
};

export function ProjectArt({ name }: { name: ProjectArtName }) {
  const Art = arts[name];
  return (
    <div className="relative aspect-[16/10] overflow-hidden border border-silver/25 bg-titanium">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="absolute left-3 top-3 z-10 border border-white/20 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-silver sm:left-4 sm:top-4">
        Concept
      </div>
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
        <Art />
      </div>
    </div>
  );
}
