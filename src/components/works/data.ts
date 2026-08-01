import worksect1 from "../../assets/worksect1.png";
import worksect2 from "../../assets/worksect2.png";
import worksect3 from "../../assets/worksect3.png";
import worksect4 from "../../assets/worksect4.png";

export type CaseDecision = { choice: string; detail: string };

export type CaseStudy = {
  role: string;
  timeframe: string;
  team: string;
  overview: string;
  problem: string;
  constraints: string[];
  decisions: CaseDecision[];
  built: string[];
  outcome: string;
  outcomeMetrics?: { v: string; k: string }[];
  learned: string;
  links?: { label: string; href: string }[];
};

export type WorkItem = {
  slug: string;
  image?: string;
  /** code-drawn cover when there's no frontend shot (used on card + case study) */
  cover?: ArchCover;
  title: string;
  badge: string;
  year: string;
  sub: string;
  meta: string;
  stack: string[];
  study: CaseStudy;
};

export const works: WorkItem[] = [
  {
    slug: "toons-central",
    image: worksect1,
    title: "Toons Central",
    badge: "Lead Frontend",
    year: "2024",
    sub: "Webtoon platform",
    meta: "Next.js · TypeScript",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    study: {
      role: "Lead Frontend",
      timeframe: "Aug 2024 — Sept 2025",
      team: "Frontend lead in a product squad",
      overview:
        "A webtoon platform where readers discover and follow serialized comics and creators publish and manage their series. I owned the frontend — the component system, the reader experience, and the auth and data layers underneath it.",
      problem:
        "The platform needed to ship reader and creator surfaces on a fast cadence — without the UI fragmenting into dozens of one-off components as features piled on and each new screen slowing the last.",
      constraints: [
        "\"Build fast, iterate faster\" release cadence",
        "SEO-critical — organic traffic was the growth channel",
        "Multi-tenant access, no dedicated auth backend",
      ],
      decisions: [
        {
          choice: "A reusable Shadcn/UI component library over ad-hoc components",
          detail:
            "Built 10+ reusable primitives in React, TypeScript, and Tailwind so feature work became composition instead of hand-rolled markup — cutting feature rollout time ~30%. Rejected per-feature bespoke components: they drift and duplicate fast on a team shipping daily.",
        },
        {
          choice: "GSAP + Framer Motion as first-class, not decoration",
          detail:
            "Engagement was the KPI, so motion had to carry weight — interactive transitions and reader micro-interactions lifted user engagement ~20%.",
        },
        {
          choice: "Clerk + Auth0 for serverless auth",
          detail:
            "Multi-tenant access shipped without standing up and maintaining an auth backend, keeping the team on product surface instead of plumbing.",
        },
        {
          choice: "Formik + Yup for the form-heavy flows",
          detail:
            "Schema-validated forms cut user error rates ~25% and made validation rules live next to the fields they guard.",
        },
      ],
      built: [
        "10+ reusable Shadcn/UI primitives adopted across the app",
        "25+ SEO-optimized pages",
        "Animated reader and navigation interactions",
        "Serverless auth flows (Clerk / Auth0)",
        "React Query + Context API data and state layer",
      ],
      outcome:
        "The component library turned feature work into composition, motion carried engagement, and the SEO-first pages compounded into steady organic growth.",
      outcomeMetrics: [
        { v: "30%", k: "Faster rollout" },
        { v: "20%", k: "More engagement" },
        { v: "18%", k: "Organic traffic" },
      ],
      learned:
        "A small, opinionated component library pays for itself fast on a team that ships daily. The upfront cost that felt like overhead early became the thing that let features land without regressions.",
    },
  },
  {
    slug: "numisnest",
    image: worksect2,
    title: "Numisnest",
    badge: "Solo Full-Stack",
    year: "2023",
    sub: "Collectibles marketplace",
    meta: "Next.js · Supabase",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    study: {
      role: "Solo full-stack — design, build, deploy",
      timeframe: "2023",
      team: "Solo",
      overview:
        "A full-stack marketplace for coins and collectibles, with structured listings, real-time buyer-seller chat, and a WhatsApp handoff for closing deals. I designed, built, and deployed the whole thing end to end.",
      problem:
        "Coin and collectibles sellers were closing deals in DMs and comment threads — no structured listings, no trust signals, and no way to reach a buyer without handing out a personal number.",
      constraints: [
        "No backend team",
        "No budget for a chat vendor",
        "Buyers live on WhatsApp and won't install an app",
      ],
      decisions: [
        {
          choice: "Supabase over a custom Node backend",
          detail:
            "Needed Postgres, auth, and realtime from one box so a solo dev could ship listings and live chat without running infra. Rejected Firebase — the data is relational (listings ↔ sellers ↔ offers) and I didn't want to fake joins in a document store.",
        },
        {
          choice: "Supabase Realtime for buyer-seller chat instead of a paid service",
          detail:
            "Chat was low-volume per thread but trust-critical. A Postgres-backed subscription was free, auditable, and already inside my auth boundary.",
        },
        {
          choice: "WhatsApp deep linking for the deal close",
          detail:
            "Instead of forcing conversion inside the app, I met buyers where they already transact — one tap hands an in-app thread to WhatsApp with listing context pre-filled.",
        },
      ],
      built: [
        "Listing CRUD with image upload",
        "Real-time in-app buyer-seller chat",
        "WhatsApp deep-link deal handoff",
        "Seller profiles and trust signals",
      ],
      outcome:
        "Deals that used to scatter across DMs now start from a structured listing and convert through a single tracked handoff.",
      learned:
        "Don't fight your users' channel. The WhatsApp handoff converted better than any in-app checkout would have — the job was to organize the deal, not to own every step of it.",
    },
  },
  {
    slug: "quick-artisan",
    image: worksect3,
    title: "Quick Artisan",
    badge: "Full-Stack",
    year: "2023",
    sub: "Service marketplace",
    meta: "Next.js · Prisma",
    stack: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
    study: {
      role: "Full-stack",
      timeframe: "2023",
      team: "Solo",
      overview:
        "A two-sided marketplace connecting people who need skilled-labor jobs done with nearby artisans — searchable listings, profiles, and a request flow that replaces word-of-mouth discovery.",
      problem:
        "People who needed small skilled-labor jobs done had no fast way to find a trusted artisan nearby — discovery happened by word of mouth, and there was no shared place to compare, request, and track work.",
      constraints: [
        "Two-sided marketplace cold-start — need supply and demand at once",
        "Relational domain: users, artisans, services, requests",
        "Discovery pages must be indexable to grow without ad spend",
      ],
      decisions: [
        {
          choice: "Next.js + Prisma over Postgres",
          detail:
            "The domain is relational (artisan ↔ services ↔ requests), so a typed ORM over Postgres kept the model honest, and SSR made category and location pages server-rendered and indexable.",
        },
        {
          choice: "Tailwind for a single design system",
          detail:
            "One utility system across every surface meant the two-sided UI (seeker flow vs. artisan flow) stayed visually consistent without a component library to maintain solo.",
        },
      ],
      built: [
        "Artisan profiles and service listings",
        "Category- and location-based search",
        "Request / booking flow between seeker and artisan",
      ],
      outcome:
        "A single structured place to find, request, and track artisan work — replacing word-of-mouth discovery with searchable, comparable listings.",
      learned:
        "Two-sided marketplaces live or die on the trust layer. The hard part wasn't the booking flow — it was giving a seeker enough signal to pick a stranger with confidence.",
    },
  },
];

/* Routable case studies that aren't featured in the home Selected-Work
 * carousel, but open real /work/:slug pages from the archive.               */
const extraCaseStudies: WorkItem[] = [
  {
    slug: "easy-hotel-finder",
    title: "Easy Hotel Finder",
    badge: "Full-Stack · Contract",
    year: "2025",
    sub: "Hotel booking platform",
    meta: "AdonisJS · PostgreSQL",
    stack: ["Next.js", "AdonisJS", "PostgreSQL", "Paystack", "Amazon S3"],
    cover: {
      type: "architecture",
      client: "Next.js UI",
      api: "AdonisJS API",
      services: ["PostgreSQL", "Paystack", "Amazon S3"],
    },
    study: {
      role: "Full-Stack (Contract) — backend-focused",
      timeframe: "Mar 2025 — Aug 2025",
      team: "Contract within a small product team",
      overview:
        "A hotel booking and management platform. I owned the backend — the normalized data model, the booking and availability APIs, Paystack disbursements, and S3 media — plus the Next.js booking and admin flows on top.",
      problem:
        "Hotels needed bookings that couldn't double-book under load, and a way to take payment and pay each hotel out automatically — without a finance team reconciling money by hand.",
      constraints: [
        "Money movement must be correct and auditable",
        "Availability can't double-book under concurrent requests",
        "Small team, fixed contract timeline",
      ],
      decisions: [
        {
          choice: "A normalized PostgreSQL schema over a quick denormalized model",
          detail:
            "Modeled hotels, rooms, bookings, and availability as proper relations so availability blocking and reporting stay correct — improving query efficiency and booking reliability ~30%.",
        },
        {
          choice: "AdonisJS for the API layer",
          detail:
            "Built 10+ REST endpoints for hotel creation, bookings, and availability blocking behind a typed, batteries-included framework, cutting booking errors ~25%.",
        },
        {
          choice: "Paystack SubAccounts for disbursements",
          detail:
            "Each hotel's funds route to its own subaccount so payouts automate — no manual reconciliation or finance step in the loop.",
        },
        {
          choice: "Amazon S3 for media",
          detail:
            "Offloaded hotel image uploads to S3, cutting media-handling issues ~35% and keeping the app servers stateless.",
        },
      ],
      built: [
        "Normalized Postgres schema (hotels, rooms, bookings, availability)",
        "10+ AdonisJS REST APIs",
        "Paystack payments + SubAccount disbursements",
        "S3 image uploads",
        "Next.js booking + admin dashboard flows",
      ],
      outcome:
        "Bookings became reliable and non-conflicting, and money moved to hotels automatically through tracked disbursements.",
      outcomeMetrics: [
        { v: "30%", k: "Booking reliability" },
        { v: "25%", k: "Fewer booking errors" },
        { v: "20%", k: "Higher completion" },
      ],
      learned:
        "On anything touching money and inventory, the schema is the product. Getting the relational model and availability constraints right up front is what made payments and payouts boringly reliable.",
    },
  },
  {
    slug: "ai-data-scraper",
    image: worksect4,
    title: "AI-Powered Data Scraper",
    badge: "Full-Stack",
    year: "2023",
    sub: "Structured web scraper",
    meta: "Next.js · Stripe",
    stack: ["Next.js", "Stripe", "TypeScript"],
    study: {
      role: "Full-stack",
      timeframe: "2023",
      team: "Solo",
      overview:
        "A scraper that pulls structured data from complex, inconsistent UIs using dynamic selectors, wrapped in a Next.js app with Stripe-gated access.",
      problem:
        "Target sites had messy, shifting markup, so brittle hardcoded selectors broke constantly — extraction needed to survive layout changes without a rewrite each time.",
      constraints: [
        "Source UIs change without notice",
        "Runs must be reliable enough to charge for",
        "Solo build",
      ],
      decisions: [
        {
          choice: "Dynamic selectors over hardcoded paths",
          detail:
            "Resolve elements by resilient signals rather than fixed CSS paths, so a layout tweak doesn't break the whole run.",
        },
        {
          choice: "Stripe-gated access",
          detail:
            "Put scraping behind Stripe so usage maps to paid tiers from day one instead of being bolted on later.",
        },
        {
          choice: "Next.js as the single app shell",
          detail:
            "One framework for the UI, API routes, and job triggers kept a solo project shippable end to end.",
        },
      ],
      built: [
        "Dynamic-selector extraction engine",
        "Next.js dashboard + API routes",
        "Stripe billing / gated access",
      ],
      outcome:
        "Reliable structured output from UIs that break naive scrapers, behind a paid access wall.",
      learned:
        "Resilience beats precision for scraping — selectors that bend with the page outlast clever ones that assume it never changes.",
    },
  },
];

/** Everything routable at /work/:slug — the carousel works plus archive-only. */
export const caseStudies: WorkItem[] = [...works, ...extraCaseStudies];

export const archiveLink = "/archive";

export const worksBySlug = Object.fromEntries(
  caseStudies.map((w) => [w.slug, w])
);

/* ---- Full archive (up to 5 projects) ---------------------------------- *
 * Reuses the three case-study projects and adds two resume projects as
 * static entries. Items without an `image` render a gradient placeholder;
 * items with a `slug` link to their /work/:slug case study, others use `href`
 * (or nothing). Fill in real links / images by editing this list.            */
import type { ArchCover } from "./coverArt";

export type ArchiveLang = "js" | "go";

export type ArchiveItem = {
  no: string;
  lang: ArchiveLang;
  title: string;
  year: string;
  role: string;
  blurb: string;
  stack: string[];
  image?: string;
  slug?: string;
  href?: string;
  /** code-drawn cover when there's no (or no-worth-showing) frontend shot */
  cover?: ArchCover;
  /** two-colour gradient for the placeholder card when there's no image */
  accent?: [string, string];
};

export const archive: ArchiveItem[] = [
  {
    no: "01",
    lang: "js",
    title: "Toons Central",
    year: "2024",
    role: "Lead Frontend",
    blurb:
      "A webtoon platform — reader and creator surfaces built on a reusable component system, motion, and serverless auth.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    image: worksect1,
    slug: "toons-central",
  },
  {
    no: "02",
    lang: "js",
    title: "Numisnest",
    year: "2023",
    role: "Solo Full-Stack",
    blurb:
      "A collectibles marketplace with structured listings, real-time chat, and a WhatsApp handoff for closing deals.",
    stack: ["Next.js", "Supabase", "TypeScript", "Tailwind"],
    image: worksect2,
    slug: "numisnest",
  },
  {
    no: "03",
    lang: "js",
    title: "Quick Artisan",
    year: "2023",
    role: "Full-Stack",
    blurb:
      "A two-sided service marketplace connecting people with nearby artisans — searchable, comparable, trackable.",
    stack: ["Next.js", "Prisma", "TypeScript", "Tailwind"],
    image: worksect3,
    slug: "quick-artisan",
  },
  {
    no: "04",
    lang: "js",
    title: "Easy Hotel Finder",
    year: "2025",
    role: "Full-Stack · Contract",
    blurb:
      "Hotel booking and management flows — normalized Postgres schemas, Paystack disbursements, and S3 media.",
    stack: ["Next.js", "AdonisJS", "PostgreSQL", "Paystack"],
    cover: {
      type: "architecture",
      client: "Next.js UI",
      api: "AdonisJS API",
      services: ["PostgreSQL", "Paystack", "Amazon S3"],
    },
    accent: ["#7BC47F", "#1F6F43"],
    slug: "easy-hotel-finder",
  },
  {
    no: "05",
    lang: "js",
    title: "AI-Powered Data Scraper",
    year: "2023",
    role: "Full-Stack",
    blurb:
      "A resilient scraper using dynamic selectors to pull structured data from complex UIs, with Stripe-gated access.",
    stack: ["Next.js", "Stripe", "TypeScript"],
    image: worksect4,
    accent: ["#5B8DEF", "#2B3A67"],
    slug: "ai-data-scraper",
  },

  /* ---- Go projects (static placeholders — fill in real ones) ---------- */
  {
    no: "06",
    lang: "go",
    title: "Ledger CLI",
    year: "2025",
    role: "Solo",
    blurb:
      "A double-entry accounting CLI — plain-text ledgers parsed into balanced reports, built as a single static binary.",
    stack: ["Go", "Cobra", "SQLite"],
    accent: ["#00ADD8", "#0A2A33"],
    href: "#",
  },
  {
    no: "07",
    lang: "go",
    title: "Shortlink Service",
    year: "2025",
    role: "Backend",
    blurb:
      "A URL shortener API with rate limiting, click analytics, and Redis-backed caching behind a chi router.",
    stack: ["Go", "chi", "PostgreSQL", "Redis"],
    accent: ["#00ADD8", "#122A2E"],
    href: "#",
  },
  {
    no: "08",
    lang: "go",
    title: "Presence Gateway",
    year: "2024",
    role: "Backend",
    blurb:
      "A realtime presence and pub/sub gateway over WebSockets — tracks who's online across horizontally-scaled nodes.",
    stack: ["Go", "WebSockets", "Redis", "Docker"],
    accent: ["#00ADD8", "#0A2A33"],
    href: "#",
  },
];
