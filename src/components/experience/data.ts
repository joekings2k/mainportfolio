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
    role: "Frontend Developer",
    company: "tensGlobal",
    when: "2023 — Present",
    current: true,
    meta: ["Lagos, Festac", "Hybrid", "Full-time"],
    description: [
      "Optimized the Wenigro admin application's state management process by ",
      { strong: "40%" },
      " using built-in hooks, enhancing data retrieval speed and overall performance. Improved data fetching and caching strategies, benefiting ",
      { strong: "1,000+ users" },
      " who rely on the admin to operate an external system. Collaborated with the backend team to streamline API communication and decluttered global state across the codebase, reducing redundancy by ",
      { strong: "30%" },
      ".",
    ],
    metrics: [
      { v: "40%", k: "Faster state", accent: true },
      { v: "1,000+", k: "Daily users" },
      { v: "30%", k: "Less redundancy" },
    ],
    stack: ["React", "TypeScript", "Zustand", "React Query", "Tailwind"],
  },
  {
    role: "Frontend Developer",
    company: "NomadHQ",
    when: "2022 — 2023",
    meta: ["Remote", "Contract"],
    description: [
      "Audited and rebuilt the marketing site — code-split routes, deferred third-party scripts, and migrated to next-gen image formats, cutting LCP from ",
      { strong: "2.1s to 0.6s" },
      ". Shipped a tiny opinionated component library of ",
      { strong: "12 primitives" },
      " that replaced 40+ ad-hoc components scattered across three product surfaces.",
    ],
    metrics: [
      { v: "2.1s → 0.6s", k: "LCP", accent: true },
      { v: "12", k: "Primitives shipped" },
      { v: "−72%", k: "Bundle size" },
    ],
    stack: ["Next.js", "TypeScript", "Radix UI", "Storybook"],
  },
  {
    role: "Freelance Developer",
    company: "Independent",
    when: "2021 — 2022",
    meta: ["Lagos, NG", "Self-employed"],
    description: [
      "Shipped ",
      { strong: "six" },
      " small-business sites and an internal booking tool end-to-end — design, dev and deploy. Three clients returned for follow-up work, and the referral pipeline became my entry point into full-time product engineering.",
    ],
    metrics: [
      { v: "6", k: "Client builds" },
      { v: "5★", k: "Repeat clients", accent: true },
    ],
    stack: ["React", "Node", "Express", "MongoDB"],
  },
  {
    role: "Junior Developer",
    company: "Various",
    when: "2019 — 2021",
    meta: ["Lagos, NG", "Internships"],
    description: [
      'Agency gigs, internships and a lot of getting yelled at by Webpack. The years that made everything since feel easy — and where I learned the difference between "it works" and "it\'s good."',
    ],
    stack: ["JavaScript", "HTML/CSS", "jQuery", "PHP"],
  },
];
