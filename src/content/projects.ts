export type ProjectArtName =
  | "signal"
  | "tide"
  | "loom"
  | "node"
  | "stack"
  | "folio"
  | "kiln"
  | "ledger";

export type ProjectCategory =
  | "Web Applications"
  | "Mobile Apps"
  | "E-commerce"
  | "AI & Automation"
  | "Enterprise Software";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  art: ProjectArtName;
  summary: string;
  notes: string;
  focus: string[];
  featured: boolean;
};

export const projectCategories: Array<"All" | ProjectCategory> = [
  "All",
  "Web Applications",
  "Mobile Apps",
  "E-commerce",
  "AI & Automation",
  "Enterprise Software",
];

export const projects: Project[] = [
  {
    slug: "northline",
    title: "Northline",
    category: "Web Applications",
    art: "signal",
    summary:
      "A concept for an operations web application: queues, ownership, and a calm hierarchy for complicated daily work.",
    notes:
      "Northline is a concept study for teams coordinating multi-step operations. It explores dense information without turning the screen into a dashboard costume. Nothing here is a client engagement or a reported result.",
    focus: [
      "Status that can be scanned before it is read",
      "Ownership and handoff made visible",
      "A layout that stays quiet when the queue is long",
    ],
    featured: true,
  },
  {
    slug: "harbor",
    title: "Harbor",
    category: "Mobile Apps",
    art: "tide",
    summary:
      "A concept guest app for hospitality, designed around arrival, requests, and a screen that fits one hand.",
    notes:
      "Harbor studies a guest experience on a phone: the reservation, the arrival, and the small requests that usually become a phone call. It is a design exploration, not a launched product.",
    focus: [
      "A first screen that answers “where am I in this stay?”",
      "Requests that do not require a desktop menu",
      "Type and spacing that survive bright outdoor light",
    ],
    featured: true,
  },
  {
    slug: "atelier",
    title: "Atelier",
    category: "E-commerce",
    art: "loom",
    summary:
      "A concept storefront for a catalog with a point of view, built around product story and a clear purchase path.",
    notes:
      "Atelier explores a specialty catalog: how a product is introduced, compared, and bought without a generic theme doing the talking. It is not a live store and it does not represent sales performance.",
    focus: [
      "Product pages that can carry a material story",
      "A grid that still feels edited",
      "Checkout that stays visually related to the brand",
    ],
    featured: true,
  },
  {
    slug: "lumen",
    title: "Lumen",
    category: "AI & Automation",
    art: "node",
    summary:
      "A concept automation layer: review queues, human approval, and workflows that take repetitive steps out of a week.",
    notes:
      "Lumen studies an automation beside an existing business. The emphasis is the boundary between what software may finish and what a person should approve. It is a concept, not a claim about time saved.",
    focus: [
      "A queue of proposed actions, not a hidden script",
      "Approval as a first-class screen",
      "Failures that stay visible instead of silent",
    ],
    featured: true,
  },
  {
    slug: "meridian",
    title: "Meridian",
    category: "Enterprise Software",
    art: "stack",
    summary:
      "A concept for internal enterprise software, focused on permissions, shared records, and departments using one system.",
    notes:
      "Meridian explores internal software used by more than one department. The study is about permissions, auditability, and interfaces that respect different jobs inside the same record. It is not a deployment.",
    focus: [
      "One record, several roles",
      "Navigation that does not assume everyone has the same job",
      "A visual system sturdy enough for dense data",
    ],
    featured: true,
  },
  {
    slug: "folio",
    title: "Folio",
    category: "Web Applications",
    art: "folio",
    summary:
      "A concept content platform for a professional firm: long-form reading, service wayfinding, and a structure editors can keep.",
    notes:
      "Folio studies a marketing and content platform for a firm that publishes seriously. It looks at reading, service paths, and a model editors can maintain. It is a concept study, labeled as such.",
    focus: [
      "Long pages with a real reading measure",
      "Wayfinding between services without a maze of cards",
      "Editorial structure that is not a blog bolted on",
    ],
    featured: false,
  },
  {
    slug: "kiln",
    title: "Kiln",
    category: "Mobile Apps",
    art: "kiln",
    summary:
      "A concept restaurant app for menus that change, order status, and a visit designed for a short attention span.",
    notes:
      "Kiln explores hospitality on a phone: a menu that changes often, a location, and an order status a guest can understand at a glance. It is not a client case study.",
    focus: [
      "Menus that can change without a redesign",
      "Status a guest can read in a loud room",
      "A brand mark that survives a small screen",
    ],
    featured: false,
  },
  {
    slug: "ledger",
    title: "Ledger",
    category: "Enterprise Software",
    art: "ledger",
    summary:
      "A concept reporting workspace for a finance team: comparison, export, and numbers presented without costume.",
    notes:
      "Ledger studies a reporting workspace. The bars in the visual are composition, not data, and the study does not claim a financial outcome. It explores comparison, export, and an interface that treats numbers as something to trust.",
    focus: [
      "Comparison before decoration",
      "Export and review treated as primary actions",
      "Density without a wall of equal cards",
    ],
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
