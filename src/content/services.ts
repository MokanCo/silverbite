export type ServiceIconName =
  | "web"
  | "mobile"
  | "ai"
  | "software"
  | "design"
  | "commerce"
  | "marketing"
  | "cloud"
  | "api"
  | "consulting"
  | "support"
  | "automation";

export type ServiceTone = "dark" | "light" | "tint";

export type Service = {
  slug: string;
  number: string;
  title: string;
  icon: ServiceIconName;
  featured: boolean;
  tone: ServiceTone;
  summary: string;
  index: string;
  intro: string;
  narrative: string;
  delivers: string[];
  steps: { title: string; text: string }[];
  fit: string[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    number: "01",
    title: "Web Development",
    icon: "web",
    featured: true,
    tone: "dark",
    summary:
      "Beautiful, fast, scalable websites and web applications built with modern technologies.",
    index:
      "Marketing sites, product websites, and web applications engineered to stay fast, clear, and ready for the next release.",
    intro:
      "A website should carry the product, the story, and the next step a customer takes. We design and build sites that feel finished because the structure, the interface, and the engineering were considered together.",
    narrative:
      "The practice covers marketing sites, content platforms, and web applications with real workflows. We pay attention to the details that decide whether a site feels expensive: hierarchy, performance, accessibility, and an editing experience people will actually use. The stack follows the product. React and Next.js are frequent choices, not a requirement we force onto every brief.",
    delivers: [
      "Marketing and product websites",
      "Web applications with everyday workflows",
      "Component systems made for the browser",
      "Performance, accessibility, and search foundations",
      "Publishing setups when content has to move without a developer",
    ],
    steps: [
      {
        title: "Name the job",
        text: "We clarify what the site has to do for the business and for the person on the other side of the screen.",
      },
      {
        title: "Shape the structure",
        text: "Information architecture and interface come before decoration, so the pages have a reason to exist.",
      },
      {
        title: "Engineer it",
        text: "We build the front end, the connections it depends on, and the states people actually hit.",
      },
      {
        title: "Launch and tighten",
        text: "After release we watch the rough edges and improve the parts that real use reveals.",
      },
    ],
    fit: [
      "You are introducing a company or a product and the current site undersells it.",
      "A web application needs to be clearer and faster for the people who use it every day.",
      "Content, design, and engineering are currently three separate arguments.",
    ],
    related: ["ui-ux-design", "software-development"],
  },
  {
    slug: "mobile-app-development",
    number: "02",
    title: "Mobile App Development",
    icon: "mobile",
    featured: true,
    tone: "light",
    summary:
      "Engaging iOS and Android applications designed for exceptional user experiences.",
    index:
      "iOS and Android products designed for the hand, whether the right build is cross-platform or native.",
    intro:
      "A phone is where a lot of products are actually used. We design and build iOS and Android applications that feel considered in the hand, not like a desktop system that learned to shrink.",
    narrative:
      "The path can be React Native or Flutter when one codebase serves the product, or Swift and Kotlin when the experience needs the platform itself. We choose from the interaction, the team who will own it, and the systems the app has to talk to. Releases, accounts, notifications, and the awkward middle of a flow get the same attention as the first screen.",
    delivers: [
      "iOS and Android product design and development",
      "Cross-platform builds when they are the right fit",
      "Native Swift or Kotlin when the product calls for it",
      "Account, notification, and on-the-go flows",
      "Support through app store release",
    ],
    steps: [
      {
        title: "Define the mobile job",
        text: "We separate what belongs on a phone from what should stay on the web or in an internal tool.",
      },
      {
        title: "Design at phone scale",
        text: "Flows are drawn for one hand, short sessions, and the moments where attention drops.",
      },
      {
        title: "Build and test on devices",
        text: "The app is engineered against real screens and connected to the APIs it depends on.",
      },
      {
        title: "Release with a next version in mind",
        text: "Launch includes a path for the fixes and features that show up after people start using it.",
      },
    ],
    fit: [
      "The service happens in the field, on a visit, or away from a desk.",
      "Customers expect an application, not only a responsive site.",
      "A team needs a focused tool that lives with them.",
    ],
    related: ["ui-ux-design", "api-integrations"],
  },
  {
    slug: "ai-automation",
    number: "03",
    title: "AI & Machine Learning",
    icon: "ai",
    featured: true,
    tone: "dark",
    summary:
      "Smart AI solutions and automated workflows that help businesses work more efficiently.",
    index:
      "Applied AI, machine learning where it earns a place, and automations built around a human decision.",
    intro:
      "Artificial intelligence is useful when it removes a real burden. We design AI features and automated workflows around a decision, a handoff, or a repetitive process, and we leave the parts that should stay human in human hands.",
    narrative:
      "This practice covers applied AI, business process automation, and machine learning when the problem is extraction, classification, or prediction. We would rather ship a workflow a team trusts on a Tuesday than a demonstration that cannot be left alone. OpenAI APIs and other model providers are tools we use when they fit. They are not a partnership, and they are not the answer to every brief.",
    delivers: [
      "Assistive features inside products you already run",
      "Workflow automation across tools, documents, and inboxes",
      "Review steps so a person can approve what the system proposes",
      "Connections to modern AI APIs where they are appropriate",
      "Practical machine learning when the data and the question support it",
    ],
    steps: [
      {
        title: "Find the burden",
        text: "We look for the work that is slow, repetitive, or easy to get wrong.",
      },
      {
        title: "Draw the boundary",
        text: "We decide what the system may do alone and what a person must confirm.",
      },
      {
        title: "Build the loop",
        text: "The workflow, the interface, and the connections are built as one piece.",
      },
      {
        title: "Refine the edges",
        text: "Real cases show the failures. We tighten those before the automation spreads.",
      },
    ],
    fit: [
      "A team is losing hours to copying, sorting, or follow-up.",
      "You want AI inside a product, with a job you can describe.",
      "Automation has to respect review, privacy, and accountability.",
    ],
    related: ["software-development", "api-integrations"],
  },
  {
    slug: "software-development",
    number: "04",
    title: "Custom Software Development",
    icon: "software",
    featured: true,
    tone: "light",
    summary:
      "Tailored software platforms designed around your operations and business goals.",
    index:
      "Platforms, portals, and internal systems shaped around the operation instead of a generic tool.",
    intro:
      "Some businesses cannot run on a bundle of generic tools. We design and build custom software around the way the operation actually works, including the exceptions that never make it into a sales demo.",
    narrative:
      "The result might be an internal platform, a customer portal, or the system that sits between the tools you already pay for. We care about permissions, the source of truth, and an architecture another team can keep building on. A handover is part of the work, not a favor at the end.",
    delivers: [
      "Custom platforms and internal tools",
      "Customer and partner portals",
      "Role-based access and flows that can be audited",
      "Integrations with the systems you already use",
      "Documentation a team can own after launch",
    ],
    steps: [
      {
        title: "Map the operation",
        text: "We learn the people, the exceptions, and the tools already in the path.",
      },
      {
        title: "Define a complete first version",
        text: "The first release is small enough to ship and whole enough to be useful.",
      },
      {
        title: "Design and build in the open",
        text: "You can see the product while it is forming, not only at the end.",
      },
      {
        title: "Test against real scenarios",
        text: "We try the cases your team already knows will be difficult.",
      },
    ],
    fit: [
      "Spreadsheets and inboxes have quietly become the product.",
      "Off-the-shelf software fights the way you work.",
      "More than one department needs to share a system.",
    ],
    related: ["api-integrations", "cloud-devops"],
  },
  {
    slug: "ui-ux-design",
    number: "05",
    title: "UI/UX & Product Design",
    icon: "design",
    featured: true,
    tone: "dark",
    summary:
      "Intuitive interfaces and thoughtful digital experiences that put users first.",
    index:
      "Product design for web and mobile, from the structure of a flow to a system engineering can build.",
    intro:
      "Interface design is how a product explains itself. We design digital experiences that stay clear under pressure, feel distinctive up close, and are ready for engineering.",
    narrative:
      "UI and UX at Silverbite is product design, not a coat of paint added after the build is already decided. We work through structure, interaction, visual design, and the handoff that keeps the implementation faithful. A screen that only looks good in a presentation is not finished.",
    delivers: [
      "Discovery and user flows",
      "Interface design for web and mobile",
      "Design systems and component libraries",
      "Prototypes for testing a direction before it is fully built",
      "Design partnership during engineering",
    ],
    steps: [
      {
        title: "Understand the task",
        text: "We learn the user, the job, and the constraints the interface cannot ignore.",
      },
      {
        title: "Structure before style",
        text: "The flow and the hierarchy come first, so visual design has something true to express.",
      },
      {
        title: "Design the real states",
        text: "Empty, loading, error, and edge cases are part of the design, not leftovers.",
      },
      {
        title: "Stay through the build",
        text: "We work with engineering so the shipped product still matches the intent.",
      },
    ],
    fit: [
      "A product works, but people struggle to use it.",
      "A new product needs a design foundation before code spreads.",
      "Design and engineering are currently guessing at each other.",
    ],
    related: ["web-development", "mobile-app-development"],
  },
  {
    slug: "ecommerce",
    number: "06",
    title: "E-commerce Solutions",
    icon: "commerce",
    featured: true,
    tone: "light",
    summary:
      "Scalable digital storefronts and commerce platforms designed for growth.",
    index:
      "Storefronts, catalogs, and the operational connections behind an order, designed as one experience.",
    intro:
      "A store should be as considered as the thing it sells. We design and build commerce experiences that can handle a catalog, a promotion, and a busy week without losing the plot.",
    narrative:
      "The work covers product storytelling, finding an item, checkout clarity, and the connections to payment, inventory, and fulfillment. The platform follows the business. We do not treat a theme as a strategy, and we do not promise sales figures we cannot know.",
    delivers: [
      "Storefront design and development",
      "Catalog, search, and merchandising structure",
      "Checkout flows that stay understandable",
      "Integrations for payment, inventory, and fulfillment",
      "A foundation that can grow with the catalog",
    ],
    steps: [
      {
        title: "Learn the sale",
        text: "We look at the catalog, the customer, and what has to happen after an order is placed.",
      },
      {
        title: "Design the path",
        text: "Discovery, product, and checkout are designed as one continuous decision.",
      },
      {
        title: "Build the store",
        text: "The storefront and the integrations it depends on are engineered together.",
      },
      {
        title: "Refine the hesitation",
        text: "After launch we look at the moments where the experience gets in the way.",
      },
    ],
    fit: [
      "You are opening a digital store or replacing one that has stalled.",
      "The brand is ahead of the current shopping experience.",
      "The site and the operation behind an order need to agree.",
    ],
    related: ["web-development", "digital-marketing"],
  },
  {
    slug: "digital-marketing",
    number: "07",
    title: "Digital Marketing & SEO",
    icon: "marketing",
    featured: false,
    tone: "light",
    summary: "Search, content, and campaigns that help the right people find and understand you.",
    index:
      "Technical SEO, content structure, and campaign pages tied to the product instead of disconnected tactics.",
    intro:
      "Marketing works when the right person can find you and understand why you matter. We plan and build the search, content, and campaign foundations that support that.",
    narrative:
      "Digital marketing and SEO at Silverbite sit next to the site and the product. We care about structure, language, page speed, and reporting a non-specialist can read. We do not sell guaranteed rankings. Search changes, and anyone who promises a position is guessing.",
    delivers: [
      "Technical and on-page SEO",
      "Content structure and landing pages",
      "Search-oriented information architecture",
      "Campaign pages and clear next steps",
      "Reporting that does not require a specialist to interpret",
    ],
    steps: [
      {
        title: "See how people arrive",
        text: "We review the current site, its structure, and the queries it should be able to answer.",
      },
      {
        title: "Fix what blocks clarity",
        text: "Technical issues, thin structure, and confusing pages are addressed before more content is poured in.",
      },
      {
        title: "Publish with a system",
        text: "Pages and content are shaped so they can be maintained, not only launched.",
      },
      {
        title: "Read what changed",
        text: "We look at the evidence and decide the next useful move, without inventing a victory.",
      },
    ],
    fit: [
      "The site is hard to find or hard to understand once someone arrives.",
      "A launch needs a proper page, not only an advertisement.",
      "Content is being published without a structure underneath it.",
    ],
    related: ["web-development", "ui-ux-design"],
  },
  {
    slug: "cloud-devops",
    number: "08",
    title: "Cloud & DevOps",
    icon: "cloud",
    featured: false,
    tone: "light",
    summary: "Environments, deployment, and reliability for products that need to stay up.",
    index:
      "Cloud architecture, pipelines, and the operational care that keeps a release from becoming an incident.",
    intro:
      "Shipping software is also an infrastructure problem. We help teams deploy, observe, and look after the systems their products run on.",
    narrative:
      "Cloud and DevOps work includes environments, deployment pipelines, and the reliability that keeps a launch quiet. We work with AWS, Azure, and Google Cloud. The choice follows the product and the team. Naming a cloud here is not a certification or a partnership.",
    delivers: [
      "Cloud architecture for the product you are building",
      "Deployment pipelines and environment setup",
      "Monitoring, logging, and alerting a human can answer",
      "Infrastructure choices that respect performance and cost",
      "A handover so the system is not a mystery",
    ],
    steps: [
      {
        title: "Review the path to production",
        text: "We look at how the product is deployed today, or how it needs to launch.",
      },
      {
        title: "Match the environment to the stage",
        text: "The setup should fit the risk, not a diagram borrowed from a much larger company.",
      },
      {
        title: "Automate the release",
        text: "The path from code to a running version becomes repeatable.",
      },
      {
        title: "Leave it understandable",
        text: "We document how it runs and tighten the parts that are still fragile.",
      },
    ],
    fit: [
      "Releases are manual, fragile, or understood by one person.",
      "A product is moving off a single server.",
      "You want cloud help without surrendering the keys.",
    ],
    related: ["software-development", "website-support"],
  },
  {
    slug: "api-integrations",
    number: "09",
    title: "API & System Integrations",
    icon: "api",
    featured: false,
    tone: "light",
    summary: "APIs and connections that let the tools you already depend on speak clearly.",
    index:
      "New APIs and reliable integrations between internal systems and the platforms a company already uses.",
    intro:
      "Most businesses already have software. The pain is that the pieces do not speak. We design and build the APIs and integrations that let them.",
    narrative:
      "That includes APIs for products we build and connections to platforms a company already depends on. The work is judged by whether data moves reliably, whether failures are visible, and whether the next integration is easier than the last one.",
    delivers: [
      "API design and development",
      "Integrations between internal and third-party systems",
      "Authentication, webhooks, and error handling that can be debugged",
      "Data mapping that respects the source of truth",
      "Documentation for the people who will extend it",
    ],
    steps: [
      {
        title: "Name the crossing",
        text: "We identify the systems and the events that need to move between them.",
      },
      {
        title: "Design the contract",
        text: "The payload, the owner of each field, and the failure cases are decided before the build sprawls.",
      },
      {
        title: "Build against real payloads",
        text: "We test with the awkward data, not only the happy example.",
      },
      {
        title: "Document the ownership",
        text: "Someone on your side should be able to understand the integration after we step back.",
      },
    ],
    fit: [
      "Teams are retyping information that already exists somewhere else.",
      "A product needs an API for a partner, a site, or a mobile app.",
      "A previous integration works only when nobody touches it.",
    ],
    related: ["software-development", "ai-automation"],
  },
  {
    slug: "it-consulting",
    number: "10",
    title: "IT Consulting",
    icon: "consulting",
    featured: false,
    tone: "light",
    summary: "A clear technical point of view before a budget is committed to a build.",
    index:
      "Discovery, system reviews, and roadmaps for teams who need a decision before they need more software.",
    intro:
      "Not every engagement should start with a build. Sometimes the most useful thing is a clear technical point of view.",
    narrative:
      "IT consulting at Silverbite helps leadership and product teams decide what to build, what to keep, and what to stop. We look at systems, vendors, and roadmaps with the same care we bring to engineering, because we may be asked to build what we recommend. Advice that cannot survive contact with implementation is not advice we want to give.",
    delivers: [
      "Technical discovery and system reviews",
      "Build-versus-buy recommendations",
      "Roadmaps a team can sequence",
      "Vendor and architecture guidance",
      "A written point of view you can share internally",
    ],
    steps: [
      {
        title: "Learn the goal",
        text: "We start with the business outcome and the systems already in the room.",
      },
      {
        title: "Separate fact from habit",
        text: "We look at what is working, what is fragile, and what is only rumor.",
      },
      {
        title: "Recommend with tradeoffs",
        text: "The path is explained in plain language, including what it will not solve.",
      },
      {
        title: "Stay if you want the build",
        text: "Consulting can end with a decision, or continue into the work itself.",
      },
    ],
    fit: [
      "A project is about to start and the brief is still foggy.",
      "Tools overlap and nobody is sure which one should win.",
      "Leadership needs a technical partner before a budget is committed.",
    ],
    related: ["software-development", "cloud-devops"],
  },
  {
    slug: "website-support",
    number: "11",
    title: "Website Support & Maintenance",
    icon: "support",
    featured: false,
    tone: "light",
    summary: "Care, updates, and improvements after a site is live.",
    index:
      "Ongoing care for websites that need updates, fixes, and a known path for what comes next.",
    intro:
      "A launch is not the end of a website. We look after the sites we build, and we can take on the care of a site that needs a steady pair of hands.",
    narrative:
      "Website maintenance covers updates, fixes, performance, and the small improvements that keep a site from quietly decaying. It is a relationship with a rhythm, not an emergency-only inbox. When a request is really a new project, we will say so.",
    delivers: [
      "Updates and security-minded care",
      "Bug fixes and adjustments to existing pages",
      "Attention to performance and uptime",
      "A known path for requests",
      "Improvement work that is larger than a patch, when you want it",
    ],
    steps: [
      {
        title: "Review the site",
        text: "We look at the stack, the risks, and how requests are handled today.",
      },
      {
        title: "Agree the care",
        text: "The engagement names what is included and what would be a separate project.",
      },
      {
        title: "Keep a queue",
        text: "Requests have a visible path instead of disappearing into a chat thread.",
      },
      {
        title: "Recommend the next improvement",
        text: "When care alone is not enough, we say what should change and why.",
      },
    ],
    fit: [
      "The site is live and nobody is really looking after it.",
      "You want the people who understand the build to stay with it.",
      "Internal time is better spent on the business than on the CMS.",
    ],
    related: ["web-development", "cloud-devops"],
  },
  {
    slug: "business-process-automation",
    number: "12",
    title: "Business Process Automation",
    icon: "automation",
    featured: false,
    tone: "dark",
    summary: "Workflows that take repetitive operational work off a team, with a person still able to review the result.",
    index:
      "Automations for handoffs, documents, and follow-up, built around a process a team already understands.",
    intro:
      "Automation is worth building when a process is clear and the repetition is expensive. We design workflows that move work between people and systems, and we keep a review step where a mistake would matter.",
    narrative:
      "This practice is the operational side of intelligent systems: inboxes, documents, approvals, and the quiet tasks that fill a week. A model is used only when it earns a place. The goal is a workflow a team will trust on an ordinary Tuesday, not a demonstration. We do not claim measured savings until a real engagement produces them.",
    delivers: [
      "Workflows across the tools a team already uses",
      "Document and inbox handling with a human review",
      "Handoffs that stop living in a spreadsheet",
      "A clear boundary for what the system may do alone",
      "A path to adjust the automation after real use",
    ],
    steps: [
      {
        title: "Name the process",
        text: "We write down the steps as they actually happen, including the exceptions.",
      },
      {
        title: "Choose what to automate",
        text: "Repetition is a candidate. Judgment, exceptions, and accountability stay visible.",
      },
      {
        title: "Build the handoff",
        text: "The workflow connects the systems involved and shows a person what changed.",
      },
      {
        title: "Tighten after use",
        text: "The first weeks reveal the cases the diagram missed. We fix those before it spreads.",
      },
    ],
    fit: [
      "A team repeats the same handoff every day.",
      "Work stalls because it lives in inboxes and spreadsheets.",
      "You want automation with a person still able to stop it.",
    ],
    related: ["ai-automation", "api-integrations"],
  },
];

export const featuredServices = services.filter((service) => service.featured);
export const supportingServices = services.filter((service) => !service.featured);

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
