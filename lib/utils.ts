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
  },
  {
    name: "Next.js",
  },
  {
    name: "Angular",
  },
  {
    name: "TypeScript",
  },
  {
    name: "Tailwind CSS",
  },
  {
    name: "Redux",
  },
  {
    name: "UI/UX",
  },
  {
    name: "Responsive Design",
  },
];

export const DEVOPS_SKILLS = [
  {
    name: "AWS",
  },
  {
    name: "Docker",
  },
  {
    name: "Git",
  },
  {
    name: "CI/CD Pipeline",
  },
];

export const BACKEND_SKILLS = [
  {
    name: "Python",
  },
  {
    name: "FastAPI",
  },
  {
    name: "MongoDB",
  },
  {
    name: "Redis",
  },
];
