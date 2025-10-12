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
