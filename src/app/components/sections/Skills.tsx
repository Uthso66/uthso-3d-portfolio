"use client";

import { useState, useMemo } from "react";
import { skills, achievements, skillCategories } from "@/data/skills";
import { Cpu, Award, TrendingUp, Target, Zap, Code2 } from "lucide-react";

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredSkills = useMemo(() => {
    if (selectedCategory === "all") return skills;
    return skills.filter((skill) => skill.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="skills" className="relative py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 mb-6">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-300">
              Technical Expertise
            </span>
          </div>

          <h2 className="text-3xl font-bold text-white mb-4">
            Skills & <span className="text-cyan-400">Achievements</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            A comprehensive overview of my technical skills, competitive
            programming achievements, and professional experience.
          </p>
        </div>

        {/* Skills Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
              selectedCategory === "all"
                ? "bg-cyan-500 text-white"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
            }`}
          >
            <Code2 className="w-4 h-4" />
            All Skills
          </button>

          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                selectedCategory === category.id
                  ? "bg-cyan-500 text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
              }`}
            >
              <span>{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{skill.icon}</div>
                  <h3 className="text-lg font-bold text-white">{skill.name}</h3>
                </div>
                <span className="text-sm font-medium px-3 py-1 rounded-full bg-gray-900 text-cyan-300">
                  {skill.level}/5
                </span>
              </div>

              {/* Skill level bars */}
              <div className="mb-4">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-linear-to-r ${
                      skill.category === "frontend"
                        ? "from-cyan-500 to-blue-500"
                        : skill.category === "3d"
                        ? "from-purple-500 to-pink-500"
                        : skill.category === "ai"
                        ? "from-green-500 to-emerald-500"
                        : skill.category === "backend"
                        ? "from-orange-500 to-red-500"
                        : skill.category === "languages"
                        ? "from-yellow-500 to-amber-500"
                        : "from-gray-500 to-gray-400"
                    }`}
                    style={{ width: `${(skill.level / 5) * 100}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">
                  {skill.category.charAt(0).toUpperCase() +
                    skill.category.slice(1)}
                </span>
                <span className="text-gray-500">
                  {skill.level === 5
                    ? "Expert"
                    : skill.level === 4
                    ? "Advanced"
                    : skill.level === 3
                    ? "Intermediate"
                    : skill.level === 2
                    ? "Basic"
                    : "Beginner"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 mb-4">
              <Award className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium text-green-300">
                Competitive Programming
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Platform <span className="text-green-400">Achievements</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Performance metrics from competitive programming platforms and
              professional experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, idx) => (
              <a
                key={idx}
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-transparent transition-all duration-300 overflow-hidden"
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-sm text-gray-400">
                        {achievement.platform}
                      </div>
                      <div className="text-xl font-bold text-white mt-1">
                        {achievement.title}
                      </div>
                    </div>
                    <div
                      className={`text-2xl font-bold bg-linear-to-r ${achievement.color} bg-clip-text text-transparent`}
                    >
                      {achievement.value}
                    </div>
                  </div>

                  <p className="text-sm text-gray-400 mb-4">
                    {achievement.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-cyan-400">
                    <TrendingUp className="w-4 h-4" />
                    <span>View Profile</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-4">
              <Target className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">
                Professional Journey
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Experience <span className="text-purple-400">Timeline</span>
            </h3>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {/* Samsung R&D */}
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-linear-to-r from-cyan-500 to-blue-500" />
                <div className="absolute left-2 top-4 bottom-0 w-0.5 bg-gray-700" />

                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                    <h4 className="text-lg font-bold text-white">
                      Software QA Engineer
                    </h4>
                    <span className="text-sm text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full">
                      Aug 2023 – Present
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <Zap className="w-4 h-4" />
                    <span className="font-medium">Samsung R&D Institute</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>
                        Automated and maintained 80+ Selenium test cases for
                        Android systems
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>
                        Worked closely with developers to identify UI/UX, logic,
                        and edge-case defects
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>
                        QA background reinforces disciplined debugging and
                        reliability-first frontend development
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* SUST Education */}
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-linear-to-r from-green-500 to-emerald-500" />
                <div className="absolute left-2 top-4 bottom-0 w-0.5 bg-gray-700" />

                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                    <h4 className="text-lg font-bold text-white">
                      B.Sc. in Computer Science and Engineering
                    </h4>
                    <span className="text-sm text-green-400 bg-green-500/10 px-3 py-1 rounded-full">
                      2020 – 2024
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <span className="font-medium">
                      Shahjalal University of Science and Technology (SUST)
                    </span>
                  </div>
                  <div className="text-sm text-gray-400">
                    <span className="text-green-400 font-medium">
                      GPA: 3.11
                    </span>{" "}
                    • Focus on algorithms, data structures, and software
                    engineering principles
                  </div>
                </div>
              </div>

              {/* Current Focus */}
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-linear-to-r from-purple-500 to-pink-500" />

                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-700/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-5 h-5 text-purple-400" />
                    <h4 className="text-lg font-bold text-white">
                      Current Focus
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-gray-300">
                        Advanced animation systems in React
                      </div>
                      <div className="text-sm text-gray-400">
                        GSAP, Framer Motion, React Spring
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-gray-300">
                        Applied AI products
                      </div>
                      <div className="text-sm text-gray-400">
                        Real-time inference, model deployment
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-gray-300">
                        High-fidelity interactive UI
                      </div>
                      <div className="text-sm text-gray-400">
                        3D WebGL, motion-first approach
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-gray-300">
                        EU/Asia remote roles
                      </div>
                      <div className="text-sm text-gray-400">
                        Open to relocation and remote positions
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
