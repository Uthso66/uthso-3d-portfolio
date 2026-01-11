"use client";

import { useState, useMemo } from "react";
import { ProjectCard } from "../ui/ProjectCard";
import { projects, allTechnologies, categories } from "@/data/projects";
import { Filter, Code2, Eye, Cpu, GitBranch } from "lucide-react";

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTech, setSelectedTech] = useState<string>("all");

  // Filter projects based on selections
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Filter by category
      const categoryMatch =
        selectedCategory === "all" || project.category === selectedCategory;

      // Filter by technology
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

        {/* Projects grid */}
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

        {/* View more projects (optional) */}
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
