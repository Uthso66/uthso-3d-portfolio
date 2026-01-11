import { Hero } from "./components/sections/Hero";
import { Navigation } from "./components/sections/Navigation";
import { Projects } from "./components/sections/Projects";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Projects />

      {/* Keep other placeholders for now */}
      <section
        id="skills"
        className="min-h-screen bg-gray-950 flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Skills</h2>
          <p className="text-gray-400">Coming soon...</p>
        </div>
      </section>

      <section
        id="contact"
        className="min-h-screen bg-gray-900 flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
          <p className="text-gray-400">Coming soon...</p>
        </div>
      </section>
    </main>
  );
}
