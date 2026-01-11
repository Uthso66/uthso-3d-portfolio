"use client";

import dynamic from "next/dynamic";
import { Typewriter } from "../ui/TypewriterText";

const Canvas = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.Canvas),
  { ssr: false }
);

const CosmicBackground = dynamic(
  () => import("../3d/CosmicBackground").then((mod) => mod.CosmicBackground),
  { ssr: false }
);

export function Hero() {
  const phrases = [
    "Motion-First Frontend Engineer",
    "3D Web Systems Specialist",
    "Applied AI Integration",
    "Competitive Programmer",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gray-950">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-purple-900/10 to-cyan-900/5" />
      </div>

      {/* 3D Background */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 60 }}
          gl={{ alpha: true, antialias: true }}
          className="absolute inset-0"
        >
          <ambientLight intensity={0.3} />
          <pointLight position={[5, 5, 5]} intensity={0.8} color="#4cc9f0" />
          <CosmicBackground />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Welcome badge */}
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
            <span className="text-xs font-medium text-gray-300">
              Frontend Engineer • 3D • AI
            </span>
          </div>

          {/* Main heading - ACTUALLY SMALL THIS TIME */}
          <div className="mb-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-2">
              Md. Tarikul Islam
            </h1>
            <h2 className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3">
              Uthso
            </h2>

            {/* Typewriter subtitle */}
            <div className="h-5 mb-3">
              <Typewriter phrases={phrases} />
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-lg mx-auto">
            Hybrid Software Engineer specializing in motion-first frontend, 3D
            web systems, and applied AI integration.Samsung R&D QA engineer with
            competitive programming expertise.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <button className="px-4 py-2 text-sm rounded-lg border border-gray-700 hover:border-cyan-500 hover:bg-gray-900/50 transition-all duration-300">
              View Projects
            </button>
            <button className="px-4 py-2 text-sm rounded-lg bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              Download CV
            </button>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-md mx-auto mb-8">
            {[
              { value: "Specialist", label: "Codeforces" },
              { value: "3 kyu", label: "Codewars" },
              { value: "6+", label: "Projects" },
              { value: "2+ yrs", label: "Experience" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10"
              >
                <div className="text-base font-bold text-cyan-300">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce">
              <div className="flex flex-col items-center gap-1">
                <span className="text-xs text-gray-500">Scroll</span>
                <div className="w-1 h-4 bg-cyan-500 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
