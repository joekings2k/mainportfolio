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
      "Designed and deployed containerized production applications to DigitalOcean droplets with Docker, and built RESTful APIs in Node.js and Express. Implemented distributed background job processing and caching with Redis and BullMQ, offloading long-running work to message-driven queues to cut API response times. Automated build, test, and deploy through GitHub Actions CI/CD, reducing manual deployment errors, and added structured logging and error tracking for faster incident debugging.",
    ],
    metrics: [
      { v: "Docker", k: "Containerized deploys", accent: true },
      { v: "Redis + BullMQ", k: "Queues & caching" },
      { v: "CI/CD", k: "GitHub Actions" },
    ],
    stack: ["Node.js", "Express", "Docker", "Redis", "BullMQ", "GitHub Actions", "Jest"],
  },
  {
    role: "Front-End Developer",
    company: "Toon Central",
    when: "Aug 2024 — Sept 2025",
    meta: ["Remote", "Full-time"],
    description: [
      "Spearheaded the delivery of ",
      { strong: "10+" },
      " reusable Shadcn/UI components with React, TypeScript, and Tailwind, cutting feature rollout time by ",
      { strong: "30%" },
      ". Elevated user engagement by ",
      { strong: "20%" },
      " through interactive GSAP and Framer Motion animations, and shipped ",
      { strong: "25+" },
      " SEO-optimized pages that drove an 18% increase in organic traffic. Integrated Clerk and Auth0 for serverless auth, and automated complex UI workflows and form validation with Formik/Yup.",
    ],
    metrics: [
      { v: "30%", k: "Faster rollout", accent: true },
      { v: "20%", k: "More engagement" },
      { v: "25+", k: "SEO pages shipped" },
    ],
    stack: ["React", "TypeScript", "Tailwind", "Shadcn/UI", "GSAP", "Framer Motion", "React Query"],
  },
  {
    role: "Full-Stack Developer",
    company: "Easy Hotel Finder",
    when: "Mar 2025 — Aug 2025",
    meta: ["Remote", "Contract"],
    description: [
      "Designed and normalized PostgreSQL schemas, improving query efficiency and booking reliability by ",
      { strong: "30%" },
      ". Developed ",
      { strong: "10+" },
      " RESTful APIs with AdonisJS for hotel creation, bookings, and availability blocking, and integrated Paystack payments with SubAccounts to securely manage hotel funds and automate disbursements. Built booking and management flows in Next.js and used Amazon S3 for image uploads, cutting media handling issues by 35%.",
    ],
    metrics: [
      { v: "30%", k: "Booking reliability", accent: true },
      { v: "10+", k: "REST APIs" },
      { v: "20%", k: "Higher completion" },
    ],
    stack: ["Next.js", "AdonisJS", "PostgreSQL", "Paystack", "Amazon S3"],
  },
  {
    role: "Full-Stack Developer",
    company: "Tens Global Systems",
    when: "Jul 2023 — Nov 2024",
    meta: ["Remote", "Full-time"],
    description: [
      "Refactored ",
      { strong: "1,000+" },
      " lines of state logic with React hooks, cutting load times by ",
      { strong: "40%" },
      ". Designed ",
      { strong: "15+" },
      " secure REST APIs with Node.js, Express, and Supabase, and deployed 20+ features via GitHub Actions and Vercel at a 90% release success rate. Built JWT auth with role-based access control and integrated Redis caching, reducing API latency by 50% while sustaining 99.9% uptime.",
    ],
    metrics: [
      { v: "40%", k: "Faster load", accent: true },
      { v: "50%", k: "Lower latency" },
      { v: "99.9%", k: "Uptime" },
    ],
    stack: ["React", "Node.js", "Express", "Supabase", "PostgreSQL", "Redis", "Vercel"],
  },
  {
    role: "Front-End Developer",
    company: "Blog Team",
    when: "Jun 2022 — Jan 2023",
    meta: ["Port Harcourt, NG", "Full-time"],
    description: [
      "Launched an MVP with ",
      { strong: "10+ features" },
      " in under two months through agile collaboration. Optimized API and component logic to improve UI performance by 25%, and cut developer onboarding by two days with a clean, modular architecture — shipping features off real user feedback in a fast-moving Agile environment.",
    ],
    metrics: [
      { v: "10+", k: "Features shipped", accent: true },
      { v: "25%", k: "Better UI perf" },
      { v: "< 2mo", k: "To MVP" },
    ],
    stack: ["React", "JavaScript", "REST APIs", "Agile"],
  },
];
