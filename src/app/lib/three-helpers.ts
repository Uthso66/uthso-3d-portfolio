import * as THREE from "three";

// Create particle system positions
export const createParticlePositions = (
  count: number,
  radius = 10
): Float32Array => {
  const positions = new Float32Array(count * 3);
  const randomValues = new Array(count * 3);

  // Pre-generate random values
  for (let i = 0; i < randomValues.length; i++) {
    randomValues[i] = Math.random();
  }

  for (let i = 0; i < count; i++) {
    const r = radius * (0.7 + 0.3 * randomValues[i * 3]);
    const theta = randomValues[i * 3 + 1] * Math.PI * 2;
    const phi = Math.acos(2 * randomValues[i * 3 + 2] - 1);

    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }

  return positions;
};

// Create gradient material
export const createGradientMaterial = (
  color1: string,
  color2: string
): THREE.ShaderMaterial => {
  return new THREE.ShaderMaterial({
    uniforms: {
      color1: { value: new THREE.Color(color1) },
      color2: { value: new THREE.Color(color2) },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
      varying vec2 vUv;
      void main() {
        gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
      }
    `,
  });
};

// Calculate orbital position
export const calculateOrbitPosition = (
  time: number,
  radius: number,
  speed: number,
  offset: number = 0
): [number, number, number] => {
  const angle = time * speed + offset;
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;
  const y = Math.sin(angle * 2) * 0.3;
  return [x, y, z];
};

// Create starfield
export const createStarfield = (
  count: number,
  size: number = 100
): THREE.Points => {
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * size;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.1,
    transparent: true,
    opacity: 0.6,
  });

  return new THREE.Points(geometry, material);
};
