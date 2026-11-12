export type Metric = { v: string; k: string; accent?: boolean };

export type ExperienceEntry = {
  role: string;
  company: string;
  when: string;
  current?: boolean;
  meta: string[];
  description: Array<string | { strong: string }>;
  metrics?: Metric[];
  stack: string[];
};

export const experiences: ExperienceEntry[] = [
  {
    role: "Software Engineer",
    company: "VeoHMO",
    when: "Nov 2025 — Present",
    current: true,
    meta: ["Remote", "Full-time"],
    description: [
      "Containerized production services with Docker and automated their deployment to DigitalOcean through GitHub Actions CI/CD, cutting deployment time by ",
      { strong: "~60%" },
      " and removing manual, error-prone release steps. Moved long-running work off the request path into Redis/BullMQ background queues, reducing average API response times by ",
      { strong: "~40%" },
      ". Added structured logging and error tracking across production services, cutting incident resolution time by ",
      { strong: "~35%" },
      ", and built Node.js/Express REST APIs backed by Jest unit and integration tests that reduced post-release regressions by ~30%.",
    ],
    metrics: [
      { v: "60%", k: "Faster deploys", accent: true },
      { v: "40%", k: "Faster API responses" },
      { v: "35%", k: "Quicker incident fixes" },
    ],
    stack: ["Node.js", "Express", "Docker", "Redis", "BullMQ", "GitHub Actions", "DigitalOcean", "Jest"],
  },
  {
    role: "Front-End Developer",
    company: "Toon Central",
    when: "Aug 2024 — Sept 2025",
    meta: ["Remote", "Full-time"],
    description: [
      "Built ",
      { strong: "10+" },
      " reusable Shadcn/UI components with React, TypeScript, and Tailwind CSS for a comic-book platform featuring short animated videos, standardizing the design system and cutting feature rollout time by ",
      { strong: "~30%" },
      ". Added GSAP and Framer Motion interactions to key pages and instrumented them with PostHog, using the insights to lift user engagement by ",
      { strong: "~20%" },
      ". Shipped 25+ SEO-optimized pages that drove an ~18% increase in organic traffic, and integrated Clerk and Auth0 for secure serverless, multi-tenant authentication.",
    ],
    metrics: [
      { v: "30%", k: "Faster rollout", accent: true },
      { v: "20%", k: "More engagement" },
      { v: "18%", k: "More organic traffic" },
    ],
    stack: ["React", "TypeScript", "Tailwind", "Shadcn/UI", "GSAP", "Framer Motion", "PostHog", "Clerk"],
  },
  {
    role: "Full-Stack Developer",
    company: "Easy Hotel Finder",
    when: "Mar 2025 — Aug 2025",
    meta: ["Remote", "Contract"],
    description: [
      "Designed and normalized PostgreSQL schemas, improving booking reliability by ",
      { strong: "~30%" },
      ". Built ",
      { strong: "10+" },
      " RESTful APIs with AdonisJS for hotel creation, bookings, and availability blocking to prevent double-bookings, reducing booking errors by ~25%. Integrated Paystack payments with SubAccounts to securely hold hotel funds and automate vendor disbursements, and built booking and management flows in Next.js with Amazon S3 image uploads, improving booking completion by ",
      { strong: "~20%" },
      ".",
    ],
    metrics: [
      { v: "30%", k: "Booking reliability", accent: true },
      { v: "25%", k: "Fewer booking errors" },
      { v: "20%", k: "Higher completion" },
    ],
    stack: ["Next.js", "AdonisJS", "PostgreSQL", "Paystack", "Amazon S3"],
  },
  {
    role: "Full-Stack Developer",
    company: "Tens Global Systems",
    when: "Jun 2022 — Nov 2024",
    meta: ["Remote", "Full-time"],
    description: [
      "Designed and built ",
      { strong: "15+" },
      " secure REST APIs with Node.js, Express, and Supabase, with JWT auth and role-based access control for users and admins. Refactored ",
      { strong: "1,000+" },
      " lines of state logic with React hooks, cutting load times by ",
      { strong: "~40%" },
      ". Integrated Redis caching to reduce API latency by ~50%, and set up GitHub Actions and Vercel deployments with structured logging — shipping 20+ features at a 90% release success rate while sustaining 99.9% uptime.",
    ],
    metrics: [
      { v: "40%", k: "Faster load", accent: true },
      { v: "50%", k: "Lower latency" },
      { v: "99.9%", k: "Uptime" },
    ],
    stack: ["React", "Node.js", "Express", "Supabase", "Redis", "GitHub Actions", "Vercel"],
  },
];
