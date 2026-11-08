// Single source of truth for site content.
// Every fact here comes from the existing site (Home, Products, Our Work, About,
// Contact, PRODUCT.md) or the redesign brief. Do not add clients, quotes,
// metrics or capabilities that are not verified and approved for public use.

export const CONTACT = {
  email: "contact@ascendons.com",
  phoneDisplay: "+91 95232 97323",
  phoneHref: "tel:+919523297323",
  // Same number as the published phone line. Confirm it is on WhatsApp Business.
  whatsappHref:
    "https://wa.me/919523297323?text=" +
    encodeURIComponent("Hi Ascendons, I'd like to talk about a project."),
  address:
    "Plot No. J-72, Vastu Villa, Mansarovar, Godadara, Surat, Gujarat 395012",
  linkedin: "https://www.linkedin.com/company/ascendons1/",
  instagram: "https://www.instagram.com/ascendonstech/",
};

export const PRODUCT_URLS = {
  briefguard: "https://briefguard.ascendons.in",
  dpp: "https://dpp.ascendons.in",
  impakt: "https://impakt.ascendons.in",
};

/** ["a", "b", "c"] -> "a, b and c" */
export const listify = (items: readonly string[]) =>
  items.length < 2
    ? items.join("")
    : `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "What We Build" },
  { to: "/products", label: "Products" },
  { to: "/our-work", label: "Our Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export type ServiceVisual =
  "app" | "modules" | "ai" | "integrations" | "team" | "blueprint";

export const SERVICES: {
  id: string;
  title: string;
  description: string;
  points: string[];
  cta: { label: string; to: string };
  visual: ServiceVisual;
}[] = [
  {
    id: "mvp",
    title: "MVP & Product Development",
    description:
      "From concept validation to production-ready applications, we help founders bring their ideas to life.",
    points: [
      "Web apps, mobile apps & SaaS",
      "Fixed scope and price",
      "A working demo every week",
    ],
    cta: { label: "Scope your MVP", to: "/contact?type=mvp" },
    visual: "app",
  },
  {
    id: "systems",
    title: "Custom CRMs & Business Systems",
    description:
      "Purpose-built business applications that streamline operations, automate workflows and connect teams.",
    points: [
      "CRMs, admin systems, internal tools",
      "Built around how your teams work",
      "From scratch or on Ascendons CRM",
    ],
    cta: { label: "Plan your system", to: "/contact?type=systems" },
    visual: "modules",
  },
  {
    id: "ai",
    title: "AI & Intelligent Automation",
    description:
      "Make your business smarter with AI-powered assistants, automated workflows and intelligent integrations.",
    points: [
      "Assistants that answer from your documents",
      "WhatsApp & messaging automation",
      "Workflows that remove manual steps",
    ],
    cta: {
      label: "Explore automation",
      to: "/solutions/whatsapp-business-automation",
    },
    visual: "ai",
  },
  {
    id: "integrations",
    title: "Enterprise Integrations",
    description:
      "Connect your business ecosystem through reliable APIs, integrations and scalable architectures.",
    points: [
      "ERPs, payments & messaging",
      "REST APIs and webhooks",
      "Your existing databases",
    ],
    cta: { label: "Discuss integrations", to: "/contact?type=integrations" },
    visual: "integrations",
  },
  {
    id: "team",
    title: "Dedicated Product Engineering",
    description:
      "Extend your engineering capabilities with a team that understands your product, technology and business goals.",
    points: [
      "Product, design, engineering & QA",
      "An extension of your team",
      "Monthly engagement",
    ],
    cta: { label: "Build a team", to: "/contact?type=team" },
    visual: "team",
  },
  {
    id: "consulting",
    title: "Technology Consulting",
    description:
      "Make better technology decisions with architecture reviews, product strategy and engineering guidance.",
    points: [
      "Architecture reviews",
      "Build-vs-buy decisions",
      "Automation roadmaps & stalled projects",
    ],
    cta: { label: "Book a review", to: "/contact?type=consulting" },
    visual: "blueprint",
  },
];

export const BRIEFGUARD = {
  name: "BriefGuard",
  kind: "Legal operating system for India",
  summary:
    "Research, drafting, review and practice management, with citation verification built in. Every citation is checked against the actual judgment before filing.",
  features: [
    {
      title: "Citation verification",
      body: "Each citation is checked against the actual judgment, so fabricated or misattributed authorities are caught before filing.",
    },
    {
      title: "Legal research & drafting",
      body: "AI-assisted drafting grounded in Indian case law, in 11 Indian languages, with awareness of BNS, BNSS and IPC.",
    },
    {
      title: "Works where lawyers write",
      body: "Inside Microsoft Word and Google Docs.",
    },
    {
      title: "Practice & workflow management",
      body: "Matters, deadlines and a multi-user workspace with role-based access and track changes.",
    },
  ],
  audience: [
    "Law firms & chambers",
    "Independent advocates",
    "In-house counsel",
    "Legal researchers",
  ],
};

export const CRM = {
  name: "Ascendons CRM",
  kind: "Configurable CRM & business operations platform",
  summary:
    "For organisations that need their sales and operations process reflected in the software, rather than adapting to a fixed template.",
  features: [
    {
      title: "Pipeline management",
      body: "Pipelines, stages, fields and approvals configured to match how your sales and operations teams work.",
    },
    {
      title: "Leads & accounts",
      body: "Lead assignment and follow-up reminders, with every change captured in an audit trail.",
    },
    {
      title: "Workflow automation & approvals",
      body: "Automated approvals and WhatsApp or email notifications.",
    },
    {
      title: "Multi-branch operations",
      body: "Role-based access with multi-branch and multi-team hierarchies.",
    },
  ],
  integrations: [
    "WhatsApp Cloud API",
    "Email",
    "ERPs",
    "Payment gateways",
    "Existing databases",
  ],
};

export const DPP = {
  name: "Ascendons DPP",
  kind: "Digital Product Passports for manufacturers",
  summary:
    "Organises product data and compliance evidence, and publishes versioned passports that open from a QR code.",
  highlights: [
    "Readiness checks for EU product rules",
    "Data extracted from PDFs and spreadsheets, confirmed by people",
    "Versioned passports that open from a QR code",
    "REST API, signed webhooks and CSV/Excel import",
  ],
  features: [
    {
      title: "Passport management",
      body: "Draft, review and publish passports per product, with category-specific data models and QR codes that always open the latest published version.",
    },
    {
      title: "Document extraction",
      body: "Product data extracted from PDFs and spreadsheets with source quotes. A person confirms every value before it is used.",
    },
    {
      title: "Readiness checks",
      body: "Checks against EU product requirements show what is complete, missing or needs review, with a next step for each gap.",
    },
    {
      title: "Traceability & audit",
      body: "Immutable passport versions, an append-only audit log, lifecycle events and chain of custody for textile material lots.",
    },
    {
      title: "Integrations",
      body: "CSV and Excel import with field mapping, a versioned REST API and signed webhooks.",
    },
    {
      title: "Privacy & data storage",
      body: "GDPR-oriented privacy controls, EU data storage, private document storage and a full export of your organisation's data.",
    },
  ],
  audience: [
    "Manufacturers & brand owners",
    "Compliance & sustainability teams",
    "Importers & distributors",
  ],
};

// Source: https://impakt.ascendons.in (captured 2026-11-08).
export const IMPAKT = {
  name: "Impakt",
  kind: "Monitoring & evaluation for NGOs",
  summary:
    "Brings beneficiaries, field reports, training and placements into one simple workspace, so programme teams spend less time on spreadsheets and more time in the community.",
  highlights: [
    "Beneficiary records from intake to placement",
    "Daily field reporting from any phone",
    "LFA indicators tracked week by week",
    "Read-only donor access to progress",
  ],
  features: [
    {
      title: "Beneficiary records",
      body: "One profile per person: baseline, education, aspirations, learning and placement, all in one place.",
    },
    {
      title: "Daily field reporting",
      body: "Field teams log activities in minutes. Managers see progress the same day, not at month-end.",
    },
    {
      title: "LFA indicators",
      body: "Track your logical framework weekly and see which outcomes are on course and which need attention.",
    },
    {
      title: "Courses & batches",
      body: "Plan curricula, run training batches and follow attendance and completion for every cohort.",
    },
    {
      title: "Placement tracking",
      body: "Follow leads, interviews and offers through to the job, and prove long-term outcomes.",
    },
    {
      title: "Secure by design",
      body: "Role-based access for HQ, field staff and donors, with sensitive personal fields encrypted.",
    },
  ],
  audience: [
    "Girls' education",
    "Skilling & livelihoods",
    "Women's self-help groups",
    "Youth employability",
  ],
};

export const PHASES = [
  {
    n: "01",
    title: "Discover",
    when: "Week 1",
    body: "Understand the problem, users, requirements and business objectives. You get a written scope, a timeline and a fixed price.",
    output: "A written scope, timeline and fixed price",
  },
  {
    n: "02",
    title: "Design",
    when: "Weeks 1–2",
    body: "Create user journeys, wireframes, architecture and technical specifications, on a stack that can grow with the product.",
    output: "Journeys, wireframes and the data model",
  },
  {
    n: "03",
    title: "Engineer",
    when: "Weeks 2–5",
    body: "Develop the application in weekly sprints using scalable architecture, with a working demo on a live staging link at the end of each one.",
    output: "Weekly demo on staging",
  },
  {
    n: "04",
    title: "Launch",
    when: "Weeks 5–6",
    body: "Deploy, test, monitor and prepare the application for real-world usage, with analytics and documentation.",
    output: "Production, monitoring and docs",
  },
  {
    n: "05",
    title: "Evolve",
    when: "After launch",
    body: "Continuously improve the product through feedback, analytics and enhancements. Post-launch support is included.",
    output: "Support and iteration",
  },
];

export const REASONS = [
  {
    title: "Faster product execution",
    body: "MVPs in 4–6 weeks on a stack and process we've already run in production.",
  },
  {
    title: "Transparent communication",
    body: "A written scope, a fixed price and one team you talk to directly.",
  },
  {
    title: "Weekly working demos",
    body: "A live staging link every week, so you see progress instead of status reports.",
  },
  {
    title: "Production-ready engineering",
    body: "Monitoring, error handling and security are part of every build.",
  },
  {
    title: "Scalable architecture",
    body: "Data models and infrastructure chosen for where the product is going.",
  },
  {
    title: "Post-launch support",
    body: "We stay on after launch to fix, monitor and improve.",
  },
  {
    title: "We run our own products",
    body: "BriefGuard and our CRM are in daily use. That experience goes into client work.",
  },
];

// The only figures approved for publication (PRODUCT.md, "Evidence on Hand").
export const PROOF = [
  {
    value: 300,
    suffix: "+",
    before: "A nonprofit platform we built serves",
    after: "partner organisations.",
  },
  {
    value: 5000,
    suffix: "+",
    before: "WhatsApp automation we built handles",
    after: "conversations a day.",
  },
];

export type IndustryGlyph =
  "rocket" | "grid" | "scale" | "pulse" | "heart" | "cart";

export const INDUSTRIES: {
  id: string;
  name: string;
  glyph: IndustryGlyph;
  problem: string;
  solution: string;
  tags: string[];
}[] = [
  {
    id: "startups",
    name: "Startups & SaaS",
    glyph: "rocket",
    problem:
      "An idea that needs real users before the runway runs out, and no in-house team to build it.",
    solution:
      "A first version scoped to what early users need, launched in weeks, and built on a stack that can scale when it works.",
    tags: ["MVPs", "SaaS", "Weekly demos"],
  },
  {
    id: "enterprise",
    name: "Enterprise & Operations",
    glyph: "grid",
    problem:
      "Processes spread across spreadsheets, email and tools that don't talk to each other.",
    solution:
      "CRMs, admin systems and automation built around how teams already work, connected to existing tools and ERPs.",
    tags: ["CRMs", "Admin systems", "ERP integration"],
  },
  {
    id: "legal",
    name: "Legal Technology",
    glyph: "scale",
    problem:
      "Research and drafting where a single wrong or fabricated citation can damage a case.",
    solution:
      "BriefGuard, our own legal operating system, checks every citation against the actual judgment before filing.",
    tags: ["BriefGuard", "Citation checks", "Drafting"],
  },
  {
    id: "healthcare",
    name: "Healthcare & Services",
    glyph: "pulse",
    problem: "Staff time lost to booking calls, reminders and follow-ups.",
    solution:
      "Booking, reminders and follow-ups automated across WhatsApp and email, without extra admin work.",
    tags: ["Booking", "Reminders", "WhatsApp"],
  },
  {
    id: "nonprofits",
    name: "Nonprofits",
    glyph: "heart",
    problem:
      "Partner onboarding, document checks and approvals run on email chains and spreadsheets.",
    solution:
      "Fundraising platforms with self-service onboarding, multi-level approvals, payments and audit trails, one of which serves 300+ partner organisations. And Impakt, our own monitoring & evaluation platform.",
    tags: ["Fundraising", "Impakt", "Audit trails"],
  },
  {
    id: "ecommerce",
    name: "E-commerce & Retail",
    glyph: "cart",
    problem:
      "Thousands of repetitive questions about orders, delivery and products, answered by hand.",
    solution:
      "Order updates, support and customer messaging automated on WhatsApp, with handoff to people for the hard cases.",
    tags: ["Order tracking", "Support", "Lead qualification"],
  },
];

export const STACK = [
  {
    layer: "Experience",
    tagline: "Interfaces people use",
    items: ["React", "Next.js", "Angular"],
  },
  {
    layer: "Services",
    tagline: "Business logic & APIs",
    items: ["Node.js", "Java", "Spring Boot"],
  },
  {
    layer: "Data",
    tagline: "State, search & speed",
    items: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    layer: "Infrastructure",
    tagline: "Where it runs",
    items: ["AWS", "Google Cloud", "Docker", "Kubernetes"],
  },
  {
    layer: "Integrations",
    tagline: "What it connects to",
    items: ["REST APIs", "WhatsApp Cloud API", "Razorpay", "Stripe"],
  },
];

export const CASE_STUDIES = [
  {
    id: "whatsapp",
    sector: "Consumer platform, automation",
    title: "WhatsApp automation for a consumer-facing platform",
    metric: { value: "5,000+", label: "conversations handled a day" },
    problem:
      "Thousands of customer enquiries a day arrived on WhatsApp. Manual replies were slow and inconsistent, the team spent hours on order-status and product questions, and leads were lost to delayed responses.",
    solution: [
      [
        "Lead qualification",
        "Workflows that qualify leads, answer product questions and route qualified leads to sales.",
      ],
      [
        "Order tracking",
        "Order status, shipping notifications and delivery confirmations, sent automatically.",
      ],
      [
        "Support workflows",
        "Automated answers to common questions, with handoff to people for complex issues.",
      ],
      [
        "System integration",
        "Connected to their order management, inventory and CRM systems.",
      ],
    ] as [string, string][],
    architecture: [
      "WhatsApp Cloud API",
      "Order management",
      "Inventory",
      "CRM",
    ],
    result:
      "Handles 5,000+ conversations a day without adding staff, and the team now spends its time on the complex cases.",
    link: "/solutions/whatsapp-business-automation",
  },
  {
    id: "nonprofit",
    sector: "Nonprofit, platform",
    title: "Fundraising & admin platform for a large nonprofit",
    metric: { value: "300+", label: "partner organisations on the platform" },
    problem:
      "Hundreds of partner organisations were managed by hand. Onboarding took weeks, documents were checked over email, approvals lived in spreadsheets, and there was no single audit trail.",
    solution: [
      [
        "Self-service onboarding",
        "Multi-step registration with document upload and real-time application tracking.",
      ],
      [
        "Document workflows",
        "Verification, format validation and secure storage with version history.",
      ],
      [
        "Approvals",
        "Configurable multi-level approvals with role-based permissions and notifications.",
      ],
      [
        "Payments & audit",
        "Integrated payment gateways and a full audit trail with export-ready reports.",
      ],
    ] as [string, string][],
    architecture: [
      "Partner portal",
      "Approval engine",
      "Document store",
      "Payment gateway",
    ],
    result:
      "The platform serves 300+ partner organisations, with onboarding, approvals and payments in one place.",
    link: "/solutions/fundraising-workflow-platforms",
  },
];

export const PROJECT_TYPES = [
  { value: "mvp", label: "New product / MVP" },
  { value: "systems", label: "CRM or business system" },
  { value: "ai", label: "AI & automation" },
  { value: "integrations", label: "Integrations" },
  { value: "team", label: "Dedicated team" },
  { value: "consulting", label: "Consulting" },
  { value: "other", label: "Something else" },
] as const;

export type ProjectTypeValue = (typeof PROJECT_TYPES)[number]["value"];

export const ENGAGEMENT_MODELS = [
  {
    title: "MVP Sprint",
    body: "Fixed scope and price, idea to launch in 4–6 weeks.",
  },
  {
    title: "Dedicated Team",
    body: "Product, design, engineering and QA as an extension of your team, monthly.",
  },
  {
    title: "Consulting",
    body: "Architecture reviews, build-vs-buy advice and automation roadmaps.",
  },
];
