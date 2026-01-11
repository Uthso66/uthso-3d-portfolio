import { create } from "zustand";

interface AppState {
  // Theme
  isDarkMode: boolean;
  toggleDarkMode: () => void;

  // Navigation
  activeSection: string;
  setActiveSection: (section: string) => void;

  // 3D Performance
  useLowGraphics: boolean;
  setUseLowGraphics: (value: boolean) => void;

  // UI State
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  // Theme
  isDarkMode: true,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),

  // Navigation
  activeSection: "home",
  setActiveSection: (section) => set({ activeSection: section }),

  // 3D Performance
  useLowGraphics: false,
  setUseLowGraphics: (value) => set({ useLowGraphics: value }),

  // UI State
  isMobileMenuOpen: false,
  setMobileMenuOpen: (value) => set({ isMobileMenuOpen: value }),
}));
