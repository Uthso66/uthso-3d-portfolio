"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Points, PointMaterial } from "@react-three/drei";

export function CosmicBackground() {
  const ref = useRef<THREE.Points>(null);

  const particleCount = 800;
  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);

    const randomValues = new Array(particleCount * 3);
    for (let i = 0; i < randomValues.length; i++) {
      // eslint-disable-next-line react-hooks/purity
      randomValues[i] = Math.random();
    }

    for (let i = 0; i < particleCount; i++) {
      const radius = 5 + randomValues[i * 3] * 8;
      const theta = randomValues[i * 3 + 1] * Math.PI * 2;
      const phi = Math.acos(2 * randomValues[i * 3 + 2] - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.01;
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.005;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#4cc9f0"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.3}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}
