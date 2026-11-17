export type Industry = {
  id: string;
  name: string;
  line: string;
  overview: string;
  pressures: string[];
  contributions: string[];
};

export const industries: Industry[] = [
  {
    id: "healthcare",
    name: "Healthcare",
    line: "Tools for patients, staff, and the operational work between appointments.",
    overview:
      "Healthcare products have to be calm, precise, and careful with information. We help teams design and build the digital side of scheduling, intake, staff workflows, and patient-facing services. Compliance requirements are defined per project. We do not claim a certification the work has not earned.",
    pressures: [
      "People arrive anxious, rushed, or unfamiliar with the system.",
      "Staff tools are often older than the public website.",
      "Language has to be plain without becoming careless.",
    ],
    contributions: [
      "Patient-facing flows for scheduling, intake, and follow-up",
      "Interfaces for staff who repeat the same task all day",
      "Product design that treats privacy as a design constraint",
    ],
  },
  {
    id: "retail",
    name: "Retail & E-commerce",
    line: "Catalogs, storefronts, and the operation that has to agree with the page.",
    overview:
      "Retail lives in the details of a catalog and the honesty of an order. We design storefronts and the supporting tools around merchandising, content, and fulfillment connections, for specialty brands and growing shops alike.",
    pressures: [
      "The brand looks more expensive than the website.",
      "Promotions and catalog changes outrun the template.",
      "The storefront and the back office tell different stories.",
    ],
    contributions: [
      "Storefronts with a point of view",
      "Catalog structure, search, and product storytelling",
      "Integrations that keep an order connected to the operation",
    ],
  },
  {
    id: "hospitality",
    name: "Food & Hospitality",
    line: "Menus, reservations, guest apps, and systems for more than one location.",
    overview:
      "Hospitality software is used in short bursts, often on a phone, often in a loud room. We design guest experiences and the operational tools behind menus, reservations, orders, and locations that do not all run the same day the same way.",
    pressures: [
      "Menus and availability change faster than a brochure site.",
      "Guests and staff are looking at different versions of the truth.",
      "A pretty homepage still dumps the real task into a phone call.",
    ],
    contributions: [
      "Guest sites and apps for menus, visits, and requests",
      "Multi-location structure that does not clone a mess",
      "Ordering and reservation flows with a clear status",
    ],
  },
  {
    id: "finance",
    name: "Finance & Fintech",
    line: "Interfaces for accounts, reporting, and products where clarity is the feature.",
    overview:
      "Financial products are judged on whether a person can understand what just happened. We design and build interfaces, portals, and internal tools for finance teams and fintech products. Regulatory scope is agreed per engagement. We do not imply a license or a certification by listing the industry.",
    pressures: [
      "Dense information is dumped on the screen and called transparency.",
      "Internal tools lag behind the customer-facing product.",
      "Trust is lost in a label, a number, or a missing explanation.",
    ],
    contributions: [
      "Customer portals and onboarding flows",
      "Reporting workspaces for teams who live in the numbers",
      "Product design that explains state, risk, and next step",
    ],
  },
  {
    id: "education",
    name: "Education",
    line: "Learning products, enrollment, and campus operations with less friction.",
    overview:
      "Education technology has several users at once: students, families, faculty, and administrators. We help shape learning products and the operational systems around enrollment, content, and campus services so those people are not forced through the same screen.",
    pressures: [
      "One login is asked to serve completely different jobs.",
      "Content is trapped in a tool the faculty will not open.",
      "Enrollment season exposes every unclear step at once.",
    ],
    contributions: [
      "Learning and content experiences with a real reading rhythm",
      "Enrollment and campus workflows",
      "Role-aware interfaces for students, staff, and families",
    ],
  },
  {
    id: "real-estate",
    name: "Real Estate",
    line: "Listings, inquiries, and property operations that do not end at the gallery.",
    overview:
      "Real estate sites often stop at a photograph. The business continues in inquiries, availability, and the coordination around a property. We design the public experience and the tools that keep listings and follow-up from living in a personal inbox.",
    pressures: [
      "Listings are beautiful and the inquiry path is an afterthought.",
      "Availability changes and the site does not.",
      "Agents, owners, and buyers are stitching the process together by hand.",
    ],
    contributions: [
      "Listing and property experiences with serious search",
      "Inquiry flows that capture the right context",
      "Operational tools around availability and follow-up",
    ],
  },
  {
    id: "logistics",
    name: "Logistics",
    line: "Visibility for dispatch, tracking, and the handoffs in between.",
    overview:
      "Logistics software earns its place when someone can see where a thing is and who has it next. We build tracking experiences, dispatch tools, and the integrations that connect them to the systems already running the operation.",
    pressures: [
      "Status is spread across calls, sheets, and a vendor portal.",
      "Exceptions are the real workflow, and the software only knows the happy path.",
      "Field teams and office teams are looking at different clocks.",
    ],
    contributions: [
      "Tracking and status experiences for customers and teams",
      "Dispatch and exception workflows",
      "Integrations that make one status the status",
    ],
  },
  {
    id: "startups",
    name: "Startups",
    line: "A first product with a foundation that can survive the next stage.",
    overview:
      "Early products need a sharp version of the idea, not a miniature enterprise platform. We work with startups on the first release, the design system under it, and the engineering choices that will not have to be thrown away when the second customer arrives.",
    pressures: [
      "The idea is bigger than the current team.",
      "Speed is used as a reason to skip structure.",
      "The first version has to teach the company what to build next.",
    ],
    contributions: [
      "A first product with a clear job",
      "Design and engineering that can be extended",
      "Technical guidance when the roadmap is still moving",
    ],
  },
];
