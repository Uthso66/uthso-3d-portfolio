import { Contact } from "./components/sections/Contact";
import { Hero } from "./components/sections/Hero";
import { Navigation } from "./components/sections/Navigation";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
