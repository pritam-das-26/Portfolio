import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const PROJECT_INFO = [
  {
    id: 0,
    name: "Harukit UI",
    image: "/assets/project/harukit-ui.png",
    description:
      "A modern, accessible React component library built with TypeScript and Tailwind CSS. Features a comprehensive CLI tool for component generation, interactive documentation, and a monorepo architecture for efficient development.",
    link: "https://github.com/pritamdas26/harukit-ui",
    live: "https://harukit-ui-docs.vercel.app",
    bullets: [
      "Modern React 19 components with full TypeScript support",
      "CLI tool for automated component generation",
      "Interactive documentation with Fumadocs and MDX",
      "Accessibility-first design following WCAG guidelines",
    ],
    tech: ["Component Library", "Tailwind CSS", "Next.js", "Turborepo"],
  },
  {
    id: 1,
    name: "Unify-JS",
    image: "/assets/project/unify-js.png",
    description:
      "A lightweight, experimental type checker for JavaScript that catches type mismatches before runtime. Works directly with plain JS code without requiring TypeScript setup, featuring zero configuration and clear CLI output.",
    link: "https://github.com/pritamdas26/unify-js",
    live: "https://www.npmjs.com/package/@hareesh108/unify-js",
    bullets: [
      "Detects type mismatches in variables, functions, and expressions",
      "Supports polymorphic functions adaptable to multiple types",
      "Zero configuration setup with clear CLI debugging output",
      "Built with modern compiler design principles and AST parsing",
    ],
    tech: ["Compiler", "JavaScript", "Node.js", "AST Parser", "Type Checker"],
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
