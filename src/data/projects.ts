export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
  category: "3d" | "ai" | "web" | "all";
}

export const projects: Project[] = [
  {
    id: "cosmic-coffee",
    title: "Cosmic Coffee Tracker",
    description:
      "3D data visualization where database rows become stars in a galaxy",
    longDescription:
      "Full-stack 3D data visualization experiment. Syncs Supabase real-time data with a Three.js coordinate system. Implements GSAP for high-fidelity motion, Next.js Server Actions for persistence.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Three.js",
      "Supabase",
      "GSAP",
      "Tailwind",
    ],
    githubUrl: "https://github.com/Uthso66/cosmic-coffee-tracker",
    liveUrl: "https://cosmic-coffee-tracker.vercel.app",
    featured: true,
    category: "3d",
  },
  {
    id: "ai-captioner",
    title: "AI Image Captioner",
    description:
      "End-to-end inference system using BLIP model for image captioning",
    longDescription:
      "A full-stack web application designed to generate natural-language captions for user-uploaded images in real-time. Demonstrates end-to-end system design, decoupling, and successful ML integration.",
    technologies: ["Next.js", "FastAPI", "PyTorch", "BLIP", "TypeScript"],
    githubUrl: "https://github.com/Uthso66/next-ai-captioner",
    liveUrl: "https://next-ai-captioner.vercel.app",
    featured: true,
    category: "ai",
  },
  {
    id: "mojito",
    title: "Mojito Cocktail Landing Page",
    description:
      "Motion engineering showcase with scroll-based interaction architecture",
    longDescription:
      "A motion-heavy landing page built to master complex animations. Features GSAP scroll-triggered parallax, SplitText reveals, video background integration with clean lifecycle management.",
    technologies: ["React", "TypeScript", "GSAP", "Vite", "Tailwind"],
    githubUrl: "https://github.com/Uthso66/react-mojito-cocktail-landing-page",
    liveUrl: "https://react-mojito-cocktail-landing-page.vercel.app",
    featured: true,
    category: "web",
  },
  {
    id: "macbook",
    title: "MacBook Pro M4 Landing Page",
    description: "Apple-inspired 3D product page with real-time interactions",
    longDescription:
      "High-performance Apple-inspired landing page for the MacBook Pro. Features interactive 3D product visualization, smooth transitions, and a responsive, mobile-first design.",
    technologies: ["Next.js", "Three.js", "GSAP", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/Uthso66/react-macbook-landing-page",
    liveUrl: "https://react-macbook-landing-page.vercel.app",
    featured: true,
    category: "3d",
  },
  {
    id: "cifar10",
    title: "CIFAR-10 Classifier",
    description: "Professional-grade PyTorch-based image classifier",
    longDescription:
      "A professional-grade PyTorch-based image classifier for the CIFAR-10 dataset. Showcases transfer learning with a fine-tuned ResNet18 model and a reproducible training pipeline.",
    technologies: ["PyTorch", "Python", "ResNet18", "Transfer Learning"],
    githubUrl: "https://github.com/Uthso66/cifar10-classifier",
    liveUrl: undefined,
    featured: false,
    category: "ai",
  },
  {
    id: "todo",
    title: "React Todo App",
    description: "Minimalist and responsive to-do app with persistence",
    longDescription:
      "A minimalist and responsive to-do app built with React and TypeScript. Implements localStorage persistence and clean UX with Tailwind CSS.",
    technologies: ["React", "TypeScript", "Tailwind", "Vite"],
    githubUrl: "https://github.com/Uthso66/react-todo-typescript",
    liveUrl: "https://react-todo-typescript-uthso.vercel.app",
    featured: false,
    category: "web",
  },
];

// Get all unique technologies for filtering
export const allTechnologies = Array.from(
  new Set(projects.flatMap((project) => project.technologies))
).sort();

// Categories for filtering
export const categories = [
  { id: "all", label: "All Projects" },
  { id: "3d", label: "3D & Motion" },
  { id: "ai", label: "AI & ML" },
  { id: "web", label: "Web Applications" },
];
