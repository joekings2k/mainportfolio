import worksect1 from "../../assets/worksect1.png";
import worksect2 from "../../assets/worksect2.png";
import worksect3 from "../../assets/worksect3.png";

export type WorkItem = {
  image: string;
  title: string;
  badge: string;
  year: string;
  sub: string;
  meta: string;
  stack: string[];
};

export const works: WorkItem[] = [
  {
    image: worksect1,
    title: "Toons Central",
    badge: "Lead Frontend",
    year: "2024",
    sub: "Webtoon platform",
    meta: "Next.js · TypeScript",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    image: worksect2,
    title: "Numisnest",
    badge: "Frontend",
    year: "2023",
    sub: "Coin marketplace",
    meta: "React · Material UI",
    stack: ["React", "TypeScript", "Material UI", "React Query"],
  },
  {
    image: worksect3,
    title: "Quick Artisan",
    badge: "Full-stack",
    year: "2023",
    sub: "Service marketplace",
    meta: "Next.js · Tailwind",
    stack: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
  },
];

export const archiveLink = "#";
