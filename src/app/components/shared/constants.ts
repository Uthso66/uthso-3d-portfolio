// Navigation
export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

// Colors
export const COLORS = {
  primary: {
    cyan: "#06b6d4",
    blue: "#3b82f6",
    purple: "#8b5cf6",
    pink: "#ec4899",
  },
  gradients: {
    hero: "from-cyan-500 via-blue-500 to-purple-500",
    projects: "from-cyan-500 to-blue-600",
    skills: "from-green-500 to-emerald-600",
    contact: "from-purple-500 to-pink-600",
  },
} as const;

// Breakpoints
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

// Social Links
export const SOCIAL_LINKS = {
  github: "https://github.com/Uthso66",
  linkedin: "https://linkedin.com/in/tarikul-islam-uthso",
  codeforces: "https://codeforces.com/profile/tarikul_uthso",
  codewars: "https://www.codewars.com/users/Uthso66",
  leetcode: "https://leetcode.com/u/user2176YS/",
  email: "mailto:tarikulislam.uthso.3966@gmail.com",
} as const;

// Animation Durations
export const ANIMATION_DURATIONS = {
  fast: 150,
  normal: 300,
  slow: 500,
  verySlow: 1000,
} as const;

// 3D Settings
export const THREE_SETTINGS = {
  particleCount: 800,
  orbitSpeed: 0.1,
  cameraFov: 75,
} as const;
