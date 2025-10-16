import { clsx, type ClassValue } from "clsx";
import { icons } from "lucide-react";
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
    link: "https://github.com/pritam-das-26/vembric",
    live: "https://vembric.vercel.app/",
    bullets: [
      "Automated API documentation generation via REST API integration",
      "Built-in versioning for managing multiple API revisions",
      "Dynamic sidebar navigation with categorized resources and endpoints",
      "Responsive dark-themed UI inspired by modern documentation frameworks",
      "Developed using MERN stack with a Next.js frontend for speed and scalability",
    ],
    tech: [
      "MongoDB",
      "Next.js",
      "REST API",
      "Documentation Automation",
      "Versioning",
    ],
  },
  {
    id: 2,
    name: "Coloured Icons",
    image: "/assets/project/coloured-icons.png",
    description:
      "A Next.js-based icon integration library offering instant, CDN-delivered colored icons. Eliminates installation and build steps, providing developers with a fast, plug-and-play experience for modern UI design.",
    link: "https://github.com/pritam-das-26/coloured-icons",
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
  {
    id: 3,
    name: "MonkeyFad",
    image: "/assets/project/ecommerce.png",
    description:
      "A full-stack MERN fashion platform offering a seamless shopping experience with AI chatbot assistance, PayPal integration, and a powerful admin dashboard for product, order, and user management. Built with React (Vite) and Node.js following MVC architecture for scalability and maintainability.",
    link: "https://github.com/pritam-das-26/monkeyfad",
    live: "https://monkeyfad.vercel.app/",
    bullets: [
      "Developed a complete MERN-based online store with user authentication, cart, checkout, and payment features",
      "Implemented JWT-based secure login and OTP-verified registration system for enhanced security",
      "Designed responsive collection pages with dynamic product filtering and sorting for smooth UX",
      "Built an admin dashboard for managing users, products, and orders with Cloudinary image uploads",
      "Integrated AI chatbot using Google Dialogflow for instant product recommendations and FAQs",
    ],
    tech: [
      "React.js (Vite)",
      "Redux Toolkit",
      "Tailwind CSS",
      "PayPal API",
      "Cloudinary",
      "Dialogflow AI",
    ],
  },
  {
    id: 4,
    name: "Personal Portfolio",
    image: "/assets/project/portfolio.png",
    description:
      "A modern, interactive personal portfolio built with Next.js and Tailwind CSS, featuring dynamic animations, 3D visuals, and a sleek dark-themed interface. Showcases technical expertise, projects, and professional background in a visually engaging format.",
    link: "https://github.com/pritam-das-26/Portfolio",
    live: "https://pd26.vercel.app/",
    bullets: [
      "Crafted with Next.js 15, TypeScript, and Tailwind CSS for performance and maintainability",
      "Utilizes Framer Motion and Three.js for fluid 3D and motion effects",
      "Built with Radix UI and Lucide Icons for accessible, responsive UI components",
      "Showcases professional experience, technical stack, and highlighted projects in a single-page layout",
      "Deployed seamlessly on Vercel with optimized dark theme and smooth navigation",
    ],
    tech: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Framer Motion",
      "Radix UI",
      "Lucide Icons",
      "Three.js",
    ],
  },
];

export const FRONTEND_SKILLS = [
  {
    name: "React",
    icon: "react",
  },
  {
    name: "Next.js",
    icon: "nextjs",
  },
  {
    name: "Angular",
    icon: "angular",
  },
  {
    name: "TypeScript",
    icon: "typescript",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwindcss",
  },
  {
    name: "Redux",
    icon: "redux",
  },
  {
    name: "Shadcn UI",
    icon: "shadcn",
  },
  {
    name: "Figma",
    icon: "figma",
  },
  {
    name: "Framer Motion",
    icon: "framer",
  },
];

export const DEVOPS_SKILLS = [
  {
    name: "AWS",
    icon: "aws-light",
  },
  {
    name: "Docker",
    icon: "docker",
  },
  {
    name: "Git",
    icon: "git",
  },
  {
    name: "Jenkins",
    icon: "jenkins",
  },
  {
    name: "GitLab",
    icon: "gitlab",
  },
];

export const BACKEND_SKILLS = [
  {
    name: "Python",
    icon: "python",
  },
  {
    name: "FastAPI",
    icon: "fastapi",
  },
  {
    name: "MongoDB",
    icon: "mongodb",
  },
  {
    name: "Redis",
    icon: "redis",
  },
];
