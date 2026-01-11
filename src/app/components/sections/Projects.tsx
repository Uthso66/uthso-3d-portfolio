"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { ProjectCard } from "../ui/ProjectCard";
import { projects, allTechnologies, categories } from "@/data/projects";
import { Filter, Code2, Eye, Cpu, GitBranch, Globe, Box } from "lucide-react";

// Dynamically import 3D components
const Canvas = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.Canvas),
  { ssr: false }
);

const ProjectOrbit = dynamic(
  () => import("../3d/ProjectOrbits").then((mod) => mod.ProjectOrbit),
  { ssr: false }
);

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTech, setSelectedTech] = useState<string>("all");
  const [selectedProjectId, setSelectedProjectId] = useState<string>("");
  const [viewMode, setViewMode] = useState<"grid" | "3d">("grid");
  const [mounted, setMounted] = useState(false);

  // Filter projects based on selections
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const categoryMatch =
        selectedCategory === "all" || project.category === selectedCategory;
      const techMatch =
        selectedTech === "all" || project.technologies.includes(selectedTech);
      return categoryMatch && techMatch;
    });
  }, [selectedCategory, selectedTech]);

  // Get featured projects count
  const featuredCount = projects.filter((p) => p.featured).length;

  return (
    <section id="projects" className="relative py-20 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 mb-6">
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-300">My Work</span>
          </div>

          <h2 className="text-3xl font-bold text-white mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            A collection of my work showcasing motion-first frontend, 3D web
            systems, and applied AI integration.
          </p>
        </div>

        {/* View mode toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg bg-gray-900/50 border border-gray-800 p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${
                viewMode === "grid"
                  ? "bg-cyan-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Globe className="w-4 h-4" />
              Grid View
            </button>
            <button
              onClick={() => {
                setViewMode("3d");
                setMounted(true);
              }}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${
                viewMode === "3d"
                  ? "bg-cyan-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Box className="w-4 h-4" />
              3D View
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
          <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-4 border border-gray-800 text-center">
            <div className="text-xl font-bold text-cyan-300">
              {projects.length}
            </div>
            <div className="text-xs text-gray-400 mt-1">Total Projects</div>
          </div>
          <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-4 border border-gray-800 text-center">
            <div className="text-xl font-bold text-green-300">
              {featuredCount}
            </div>
            <div className="text-xs text-gray-400 mt-1">Featured</div>
          </div>
          <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-4 border border-gray-800 text-center">
            <div className="text-xl font-bold text-purple-300">
              {projects.filter((p) => p.liveUrl).length}
            </div>
            <div className="text-xs text-gray-400 mt-1">Live Demos</div>
          </div>
          <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-4 border border-gray-800 text-center">
            <div className="text-xl font-bold text-yellow-300">
              {allTechnologies.length}
            </div>
            <div className="text-xs text-gray-400 mt-1">Technologies</div>
          </div>
        </div>

        {/* Filter controls */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-medium text-gray-300">
                Filter by:
              </span>
            </div>

            {/* Category filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? "bg-cyan-500 text-white"
                      : "bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Technology filter */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-medium text-gray-300">
                Technologies:
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTech("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedTech === "all"
                    ? "bg-cyan-500 text-white"
                    : "bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white"
                }`}
              >
                All Tech
              </button>
              {allTechnologies.slice(0, 8).map((tech) => (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedTech === tech
                      ? "bg-cyan-500 text-white"
                      : "bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  {tech}
                </button>
              ))}
              {allTechnologies.length > 8 && (
                <button
                  onClick={() => setSelectedTech("all")}
                  className="px-3 py-1.5 rounded-lg text-xs bg-gray-900 text-gray-400 hover:bg-gray-800"
                >
                  +{allTechnologies.length - 8} more
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Content based on view mode */}
        {viewMode === "grid" ? (
          /* Grid view */
          <>
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-900/50 border border-gray-800 mb-4">
                  <Eye className="w-6 h-6 text-gray-500" />
                </div>
                <h3 className="text-lg font-medium text-gray-300 mb-2">
                  No projects found
                </h3>
                <p className="text-gray-500 text-sm">
                  Try selecting a different category or technology filter
                </p>
              </div>
            )}
          </>
        ) : (
          /* 3D View */
          <div className="h-[500px] w-full rounded-xl overflow-hidden border border-gray-800 bg-gray-900">
            {mounted && (
              <Canvas
                camera={{ position: [0, 5, 15], fov: 50 }}
                gl={{ alpha: true, antialias: true }}
              >
                <color attach="background" args={["#0f172a"]} />
                <fog attach="fog" args={["#0f172a", 10, 30]} />

                <ProjectOrbit
                  projects={filteredProjects}
                  selectedProjectId={selectedProjectId}
                  onProjectSelect={setSelectedProjectId}
                />

                {/* Additional lights */}
                <ambientLight intensity={0.3} />
                <directionalLight
                  position={[10, 10, 5]}
                  intensity={0.8}
                  color="#4cc9f0"
                />
                <directionalLight
                  position={[-10, -10, -5]}
                  intensity={0.4}
                  color="#ff6d00"
                />
              </Canvas>
            )}

            {/* 3D View instructions */}
            <div className="absolute bottom-4 left-4 bg-gray-900/80 backdrop-blur-sm rounded-lg p-3 border border-gray-700">
              <p className="text-xs text-gray-400">
                <span className="text-cyan-400 font-medium">Click</span> on a
                sphere to select project
                <br />
                <span className="text-cyan-400 font-medium">Hover</span> to see
                project name
              </p>
            </div>
          </div>
        )}

        {/* Selected project details (for 3D view) */}
        {viewMode === "3d" && selectedProjectId && (
          <div className="mt-8">
            {(() => {
              const project = projects.find((p) => p.id === selectedProjectId);
              return project ? (
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-sm flex items-center gap-2"
                      >
                        <GitBranch className="w-4 h-4" />
                        Code
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-sm flex items-center gap-2"
                        >
                          <Globe className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-md bg-gray-800 text-gray-300 text-sm border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null;
            })()}
          </div>
        )}

        {/* Project count */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="text-cyan-300 font-medium">
              {filteredProjects.length}
            </span>{" "}
            of{" "}
            <span className="text-gray-300 font-medium">{projects.length}</span>{" "}
            projects
          </p>
        </div>

        {/* View more projects */}
        <div className="mt-8 text-center">
          <a
            href="https://github.com/Uthso66?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-700 hover:border-cyan-500 text-sm text-gray-400 hover:text-white transition-all"
          >
            <GitBranch className="w-4 h-4" />
            View all projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
