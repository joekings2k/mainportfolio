import type { ReactNode } from "react";

export type Service = {
  no: string;
  category: string;
  title: string;
  desc: string;
  points: string[];
  icon: ReactNode;
};

const sw = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const services: Service[] = [
  {
    no: "01",
    category: "End to end",
    title: "Full-stack product engineering",
    desc: "I take features from a blank page to production — design, build, ship, and iterate. One person accountable for the whole slice, not just a layer of it.",
    points: ["React / Next.js", "Node · Go", "Design → deploy"],
    icon: (
      <svg viewBox="0 0 24 24" {...sw} className="w-6 h-6">
        <path d="M12 3 3 8l9 5 9-5-9-5Z" />
        <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
      </svg>
    ),
  },
  {
    no: "02",
    category: "Interfaces",
    title: "Frontend & UI engineering",
    desc: "Reusable component systems and interfaces that feel alive — motion that carries weight, and SEO-first pages that actually rank. Fast to ship, hard to break.",
    points: ["Component systems", "GSAP · Framer Motion", "SEO-optimized"],
    icon: (
      <svg viewBox="0 0 24 24" {...sw} className="w-6 h-6">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
      </svg>
    ),
  },
  {
    no: "03",
    category: "Systems",
    title: "Backend & APIs",
    desc: "Well-modeled data and REST APIs that stay correct under load — normalized schemas, auth and access control, background jobs and caching where it counts.",
    points: ["REST APIs", "PostgreSQL schemas", "Redis · queues"],
    icon: (
      <svg viewBox="0 0 24 24" {...sw} className="w-6 h-6">
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
      </svg>
    ),
  },
  {
    no: "04",
    category: "Delivery",
    title: "DevOps & deployment",
    desc: "Containerized apps and pipelines that make shipping boring — the good kind. Automated build, test, and deploy so releases stop being an event.",
    points: ["Docker", "GitHub Actions CI/CD", "Vercel · DigitalOcean"],
    icon: (
      <svg viewBox="0 0 24 24" {...sw} className="w-6 h-6">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5M12 22V12" />
      </svg>
    ),
  },
  {
    no: "05",
    category: "Integrations",
    title: "Payments & integrations",
    desc: "Money movement and third-party wiring that has to be right — Stripe and Paystack flows, disbursements, media storage, and the plumbing that connects it all.",
    points: ["Stripe · Paystack", "Auth (Clerk / Auth0)", "S3 · webhooks"],
    icon: (
      <svg viewBox="0 0 24 24" {...sw} className="w-6 h-6">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20M6 15h4" />
      </svg>
    ),
  },
];
