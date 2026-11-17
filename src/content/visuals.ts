import type { ProjectArtName } from "@/content/projects";
import type { ServiceIconName } from "@/content/services";

export type Visual = { src: string; alt: string };

export const serviceVisual: Record<ServiceIconName, Visual> = {
  web: {
    src: "/visuals/sb-web.jpg",
    alt: "Silver laptop on a dark desk, its screen showing a geometric interface. A studio visual for web development, not a client site.",
  },
  mobile: {
    src: "/visuals/sb-mobile.jpg",
    alt: "Silver phone showing a dark app with stacked panels and a cyan action. A studio visual for mobile work, not a shipped product.",
  },
  ai: {
    src: "/visuals/sb-ai.jpg",
    alt: "Abstract field of connected silver nodes with a few cyan points, used to suggest intelligent systems.",
  },
  software: {
    src: "/visuals/sb-software.jpg",
    alt: "Dark product interface made of silver blocks and a thin cyan line. A studio visual for custom software.",
  },
  design: {
    src: "/visuals/sb-design.jpg",
    alt: "Overhead view of interface studies, a metal ruler, and a cyan swatch on a dark table.",
  },
  commerce: {
    src: "/visuals/sb-commerce.jpg",
    alt: "Dark still life of a silver product box beside a tablet showing a quiet storefront layout.",
  },
  marketing: {
    src: "/visuals/sb-analytics.jpg",
    alt: "A dark glass panel with silver bars and one cyan bar, suggesting measurement without showing real data.",
  },
  cloud: {
    src: "/visuals/sb-cloud.jpg",
    alt: "Layered silver planes in a dark field with thin cyan traces, suggesting infrastructure.",
  },
  api: {
    src: "/visuals/sb-software.jpg",
    alt: "Stacked interface blocks used to suggest systems talking to each other.",
  },
  consulting: {
    src: "/visuals/sb-hero.jpg",
    alt: "Brushed silver ring with a precise opening and a line of cyan light.",
  },
  support: {
    src: "/visuals/sb-web.jpg",
    alt: "Laptop interface used to suggest an ongoing website, not a specific client.",
  },
  automation: {
    src: "/visuals/sb-analytics.jpg",
    alt: "Dark glass panel with silver traces and a cyan mark, used to suggest a workflow under review. Not a client system.",
  },
};

export const projectVisual: Record<ProjectArtName, Visual> = {
  signal: serviceVisual.web,
  tide: serviceVisual.mobile,
  loom: serviceVisual.commerce,
  node: serviceVisual.ai,
  stack: serviceVisual.software,
  folio: serviceVisual.design,
  kiln: serviceVisual.marketing,
  ledger: serviceVisual.cloud,
};

export const industryVisuals: Visual[] = [
  serviceVisual.software,
  serviceVisual.commerce,
  serviceVisual.mobile,
  serviceVisual.web,
  serviceVisual.design,
  serviceVisual.ai,
  serviceVisual.cloud,
  serviceVisual.marketing,
];
