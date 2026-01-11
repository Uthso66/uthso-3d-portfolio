"use client";

import { GitBranch, ExternalLink, Sparkles, Eye } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative bg-gray-900/40 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 hover:scale-[1.02]">
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-3 py-1 rounded-full bg-linear-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 backdrop-blur-sm">
          <Sparkles className="w-3 h-3 text-cyan-400" />
          <span className="text-xs font-medium text-cyan-300">Featured</span>
        </div>
      )}

      {/* Card content */}
      <div className="p-6">
        {/* Category indicator */}
        <div className="flex items-center gap-2 mb-4">
          <div
            className={`w-2 h-2 rounded-full ${
              project.category === "3d"
                ? "bg-cyan-500"
                : project.category === "ai"
                ? "bg-purple-500"
                : "bg-green-500"
            }`}
          />
          <span className="text-xs text-gray-400 uppercase tracking-wider">
            {project.category === "3d"
              ? "3D & Motion"
              : project.category === "ai"
              ? "AI & ML"
              : "Web App"}
          </span>
        </div>

        {/* Title and description */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Technology tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-md bg-gray-800/50 text-gray-300 border border-gray-700/50"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 text-xs rounded-md bg-gray-800/30 text-gray-500">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <GitBranch className="w-4 h-4" />
              <span>Code</span>
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          {/* View details button */}
          <button className="flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 transition-colors opacity-0 group-hover:opacity-100">
            <Eye className="w-4 h-4" />
            <span>Details</span>
          </button>
        </div>
      </div>

      {/* Hover effects */}
      <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Glow effect */}
      <div className="absolute -inset-1 bg-linear-to-r from-cyan-500/10 to-blue-500/10 blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
}
