"use client";

import { useRef, useMemo, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Sphere, Line, Html } from "@react-three/drei";
import * as THREE from "three";
import type { Project } from "@/data/projects";

interface ProjectOrbitProps {
  projects: Project[];
  selectedProjectId?: string;
  onProjectSelect?: (projectId: string) => void;
}

export function ProjectOrbit({
  projects,
  selectedProjectId,
  onProjectSelect,
}: ProjectOrbitProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // Map project categories to colors
  const getColorForCategory = (category: string): string => {
    switch (category) {
      case "3d":
        return "#4cc9f0"; // Cyan
      case "ai":
        return "#9d4edd"; // Purple
      case "web":
        return "#06d6a0"; // Green
      default:
        return "#ff6d00"; // Orange
    }
  };

  // Calculate positions for projects in orbit
  const projectPositions = useMemo(() => {
    const positions: THREE.Vector3[] = [];
    const radius = 8;
    const projectsCount = projects.length;

    for (let i = 0; i < projectsCount; i++) {
      const angle = (i / projectsCount) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = Math.sin(angle * 2) * 0.5; // Slight vertical variation
      positions.push(new THREE.Vector3(x, y, z));
    }

    return positions;
  }, [projects]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      groupRef.current.rotation.x =
        Math.sin(state.clock.getElapsedTime() * 0.05) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central sun */}
      <Sphere args={[1.2, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#FFD700"
          emissive="#FFA500"
          emissiveIntensity={0.5}
          roughness={0.1}
          metalness={0.9}
        />
        <pointLight intensity={1.5} color="#FFD700" distance={15} />

        {/* Sun text */}
        <Text
          position={[0, -2, 0]}
          fontSize={0.5}
          color="#FFD700"
          anchorX="center"
          anchorY="middle"
        >
          Projects
        </Text>
      </Sphere>

      {/* Orbit paths */}
      <group>
        {Array.from({ length: 3 }).map((_, idx) => {
          const orbitRadius = 5 + idx * 2.5;
          const points = Array.from({ length: 64 }, (_, i) => {
            const angle = (i / 64) * Math.PI * 2;
            return new THREE.Vector3(
              Math.cos(angle) * orbitRadius,
              Math.sin(angle * 0.5) * 0.3,
              Math.sin(angle) * orbitRadius
            );
          });

          return (
            <Line
              key={idx}
              points={points}
              color="#4cc9f033"
              lineWidth={0.5}
              transparent
              opacity={0.2}
              dashed
              dashSize={0.2}
              gapSize={0.1}
            />
          );
        })}
      </group>

      {/* Project spheres */}
      {projects.map((project, idx) => {
        const position = projectPositions[idx] || new THREE.Vector3(0, 0, 0);
        const { x, y, z } = position;
        const color = getColorForCategory(project.category);
        const isSelected = selectedProjectId === project.id;
        const isHovered = hoveredProject === project.id;
        const scale = isSelected ? 1.3 : isHovered ? 1.2 : 1;

        return (
          <group key={project.id} position={[x, y, z]}>
            {/* Project sphere */}
            <Sphere
              args={[0.7, 32, 32]}
              scale={scale}
              onClick={() => onProjectSelect?.(project.id)}
              onPointerOver={() => setHoveredProject(project.id)}
              onPointerOut={() => setHoveredProject(null)}
            >
              <meshStandardMaterial
                color={isSelected ? "#FFFFFF" : color}
                emissive={color}
                emissiveIntensity={isSelected ? 1 : isHovered ? 0.8 : 0.3}
                roughness={0.2}
                metalness={0.7}
              />

              {/* Project name on hover */}
              {isHovered && (
                <Html center distanceFactor={15}>
                  <div className="bg-gray-900/90 backdrop-blur-md rounded-lg px-3 py-2 border border-gray-700">
                    <div className="text-sm font-medium text-white whitespace-nowrap">
                      {project.title}
                    </div>
                  </div>
                </Html>
              )}
            </Sphere>

            {/* Connection line to center */}
            <Line
              points={[new THREE.Vector3(0, 0, 0), position]}
              color={`${color}33`}
              lineWidth={1}
              transparent
              opacity={isHovered ? 0.5 : 0.2}
            />

            {/* Technology particles (optional) */}
            {isHovered && (
              <group>
                {project.technologies.slice(0, 3).map((tech, techIdx) => {
                  const angle = (techIdx / 3) * Math.PI * 2;
                  const radius = 1.5;
                  return (
                    <Sphere
                      key={tech}
                      args={[0.1, 8, 8]}
                      position={[
                        Math.cos(angle) * radius,
                        Math.sin(angle) * radius * 0.5,
                        Math.sin(angle) * radius * 0.3,
                      ]}
                    >
                      <meshStandardMaterial
                        color={color}
                        emissive={color}
                        emissiveIntensity={0.5}
                      />
                    </Sphere>
                  );
                })}
              </group>
            )}
          </group>
        );
      })}

      {/* Ambient light */}
      <ambientLight intensity={0.2} />
    </group>
  );
}
