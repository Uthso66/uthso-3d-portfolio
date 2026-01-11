export interface Skill {
  name: string;
  level: number; // 1-5
  category: "frontend" | "backend" | "3d" | "ai" | "tools" | "languages";
  icon: string;
}

export interface Achievement {
  platform: string;
  title: string;
  value: string;
  description: string;
  color: string;
  link: string;
}

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 5, category: "frontend", icon: "⚛️" },
  { name: "Next.js", level: 5, category: "frontend", icon: "▲" },
  { name: "TypeScript", level: 5, category: "frontend", icon: "📘" },
  { name: "Tailwind CSS", level: 5, category: "frontend", icon: "🎨" },
  { name: "GSAP", level: 4, category: "frontend", icon: "✨" },

  // 3D & Motion
  { name: "Three.js", level: 4, category: "3d", icon: "🎮" },
  { name: "React Three Fiber", level: 4, category: "3d", icon: "🕹️" },
  { name: "WebGL", level: 3, category: "3d", icon: "🌐" },

  // AI & ML
  { name: "PyTorch", level: 4, category: "ai", icon: "🧠" },
  { name: "FastAPI", level: 4, category: "ai", icon: "⚡" },
  { name: "TensorFlow", level: 3, category: "ai", icon: "📊" },

  // Backend
  { name: "Node.js", level: 4, category: "backend", icon: "🟢" },
  { name: "Supabase", level: 4, category: "backend", icon: "🗄️" },
  { name: "PostgreSQL", level: 3, category: "backend", icon: "🐘" },

  // Programming Languages
  { name: "Python", level: 5, category: "languages", icon: "🐍" },
  { name: "C++", level: 4, category: "languages", icon: "⚙️" },
  { name: "C", level: 4, category: "languages", icon: "🔧" },
  { name: "JavaScript", level: 5, category: "languages", icon: "🟨" },

  // Tools
  { name: "Git", level: 5, category: "tools", icon: "📚" },
  { name: "Docker", level: 3, category: "tools", icon: "🐳" },
  { name: "Vercel", level: 5, category: "tools", icon: "🚀" },
];

export const achievements: Achievement[] = [
  {
    platform: "Codeforces",
    title: "Specialist",
    value: "Max 1478",
    description: "854+ problems solved • Top 10% globally",
    color: "from-red-500 to-orange-500",
    link: "https://codeforces.com/profile/tarikul_uthso",
  },
  {
    platform: "Codewars",
    title: "3 kyu",
    value: "Top 1.98%",
    description: "306+ kata completed • Highest: JavaScript 3 kyu",
    color: "from-green-500 to-emerald-500",
    link: "https://www.codewars.com/users/Uthso66",
  },
  {
    platform: "LeetCode",
    title: "Solved",
    value: "283+",
    description: "198 Easy, 80 Medium, 5 Hard • Contest Rating: 1421",
    color: "from-yellow-500 to-amber-500",
    link: "https://leetcode.com/u/user2176YS/",
  },
  {
    platform: "Samsung R&D",
    title: "QA Engineer",
    value: "2+ years",
    description: "Automation, failure analysis, reliability-first mindset",
    color: "from-blue-500 to-cyan-500",
    link: "https://www.linkedin.com/in/tarikul-islam-uthso/",
  },
];

export const skillCategories = [
  { id: "frontend", label: "Frontend", icon: "💻" },
  { id: "3d", label: "3D & Motion", icon: "🎬" },
  { id: "ai", label: "AI & ML", icon: "🤖" },
  { id: "backend", label: "Backend", icon: "⚙️" },
  { id: "languages", label: "Languages", icon: "🔤" },
  { id: "tools", label: "Tools", icon: "🛠️" },
];
