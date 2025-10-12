import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const PROJECT_INFO = [
 {
  id: 1,
  name: "Vembric",
  image: "/assets/project/vembric.png",
  description:
    "A modern MERN stack-based alternative to Docusaurus that automates API documentation through REST endpoints with built-in versioning — eliminating manual MDX file creation. Features a sleek, developer-friendly interface powered by Next.js.",
  link: "https://github.com/pritamdas26/vembric",
  live: "https://vembric.vercel.app/",
  bullets: [
    "Automated API documentation generation via REST API integration",
    "Built-in versioning for managing multiple API revisions",
    "Dynamic sidebar navigation with categorized resources and endpoints",
    "Responsive dark-themed UI inspired by modern documentation frameworks",
    "Developed using MERN stack with a Next.js frontend for speed and scalability",
  ],
  tech: ["MongoDB", "Next.js", "REST API", "Documentation Automation", "Versioning"],
},
 {
  id: 2,
  name: "Coloured Icons",
  image: "/assets/project/coloured-icons.png",
  description:
    "A Next.js-based icon integration library offering instant, CDN-delivered colored icons. Eliminates installation and build steps, providing developers with a fast, plug-and-play experience for modern UI design.",
  link: "https://github.com/pritamdas26/coloured-icons",
  live: "https://coloured-icons.vercel.app",
  bullets: [
    "Zero-install CDN-based delivery for over 1,000+ brand and technology icons",
    "Simplifies developer workflows with instant icon embedding via URL",
    "Clean and searchable interface with category-based filtering",
    "Achieved 265+ GitHub stars and 57 forks from global developer adoption",
    "Built with Next.js and Tailwind CSS for performance and scalability",
  ],
  tech: ["Next.js", "Tailwind CSS", "CDN", "React", "UI Library"],
},
];

export const FRONTEND_SKILLS = [
  {
    name: "React",
    color: "rgb(219 234 254)",
    darkColor: "rgba(59, 130, 246, 0.2)",
  },
  {
    name: "Next.js",
    color: "rgb(224 231 255)",
    darkColor: "rgba(99, 102, 241, 0.2)",
  },
  {
    name: "TypeScript",
    color: "rgb(219 234 254)",
    darkColor: "rgba(59, 130, 246, 0.2)",
  },
  {
    name: "Tailwind CSS",
    color: "rgb(207 250 254)",
    darkColor: "rgba(6, 182, 212, 0.2)",
  },
  {
    name: "Redux",
    color: "rgb(237 233 254)",
    darkColor: "rgba(124, 58, 237, 0.2)",
  },
  {
    name: "UI/UX",
    color: "rgb(254 226 226)",
    darkColor: "rgba(239, 68, 68, 0.2)",
  },
  {
    name: "Responsive Design",
    color: "rgb(220 252 231)",
    darkColor: "rgba(16, 185, 129, 0.2)",
  },
  {
    name: "Performance Optimization",
    color: "rgb(254 243 199)",
    darkColor: "rgba(245, 158, 11, 0.2)",
  },
];

export const DEVOPS_SKILLS = [
  {
    name: "AWS",
    color: "rgb(219 234 254)",
    darkColor: "rgba(59, 130, 246, 0.2)",
  },
  {
    name: "Docker",
    color: "rgb(224 231 255)",
    darkColor: "rgba(99, 102, 241, 0.2)",
  },
  {
    name: "Kubernetes",
    color: "rgb(219 234 254)",
    darkColor: "rgba(59, 130, 246, 0.2)",
  },
  {
    name: "CI/CD Pipeline",
    color: "rgb(207 250 254)",
    darkColor: "rgba(6, 182, 212, 0.2)",
  },
];

export const BACKEND_SKILLS = [
  {
    name: "Java",
    color: "rgb(219 234 254)",
    darkColor: "rgba(59, 130, 246, 0.2)",
  },
  {
    name: "SpringBoot",
    color: "rgb(224 231 255)",
    darkColor: "rgba(99, 102, 241, 0.2)",
  },
  {
    name: "Postgres",
    color: "rgb(219 234 254)",
    darkColor: "rgba(59, 130, 246, 0.2)",
  },
  {
    name: "Redis",
    color: "rgb(207 250 254)",
    darkColor: "rgba(6, 182, 212, 0.2)",
  },
];
