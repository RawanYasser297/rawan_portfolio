import React, { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * CyberHero.tsx
 * Fullscreen hero background with hybrid mesh (wireframe + points + subtle solid)
 * - Pink-Purple cyber glow
 * - Dynamic wave motion (medium speed)
 * - Mouse interaction (behind title)
 *
 * Paste this component into your React app and render <CyberHero /> near root.
 */

/* -------------------------
   Utility: pseudo "wave noise"
   ------------------------- */
function waveNoise(x: number, y: number, z: number, t: number) {
  // combinational trig-based pseudo-noise — cheap and organic-looking
  const a = Math.sin(x * 1.6 + t * 0.9) * Math.cos(y * 1.9 - t * 0.6);
  const b = Math.sin(y * 1.2 + t * 1.1) * Math.cos(z * 1.5 + t * 0.7);
  const c = Math.sin(z * 1.8 - t * 0.8) * Math.cos(x * 1.3 + t * 0.5);
  return (a + b + c) * 0.33;
}

/* -------------------------
   Three Object: HybridBlob
   - creates an icosahedron-based geometry
   - three layers: subtle standard mesh, wireframe, points
   - animates vertex positions & points via buffer attribute updates
   ------------------------- */
const HybridBlob: React.FC = () => {
  const meshRef = useRef<THREE.Mesh | null>(null);
  const wireRef = useRef<THREE.Mesh | null>(null);
  const pointsRef = useRef<THREE.Points | null>(null);

  // normalized mouse [-1,1]
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  // base geometry (icosahedron — good for organic blobs)
  // detail chosen to balance look & perf
  const baseGeometry = useMemo(() => new THREE.IcosahedronGeometry(3.0, 48), []);

  // We'll store base positions (Float32Array) to compute displacements each frame
  const basePositions = useMemo(() => {
    const pos = baseGeometry.attributes.position.array as Float32Array;
    // copy to avoid mutating original
    return new Float32Array(pos);
  }, [baseGeometry]);

  // create points geometry once using base positions
  const pointsGeometry = useMemo(() => {
    const g = new THREE.BufferGeometry();
    // clone base positions into points geometry
    g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(basePositions), 3));
    return g;
  }, [basePositions]);

  // create wire geometry (clone)
  const wireGeometry = useMemo(() => baseGeometry.clone(), [baseGeometry]);

  // Materials
  const surfaceMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#1b0020", // very dark fill (mostly invisible but gives subtle depth)
        roughness: 0.2,
        metalness: 0.15,
        transparent: true,
        opacity: 0.12,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
      }),
    []
  );

  const wireMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: "#ff66dd",
        wireframe: true,
        transparent: true,
        opacity: 0.25,
      }),
    []
  );

  const pointsMaterial = useMemo(
    () =>
      new THREE.PointsMaterial({
        size: 0.04,
        sizeAttenuation: true,
        color: "#ff2bd9",
        transparent: true,
        opacity: 0.95,
      }),
    []
  );

  // animation loop: update positions on mesh & points (wave displacement)
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const mx = mouse.current.x * 0.6; // influence scale
    const my = mouse.current.y * 0.6;

    // update vertex positions in the main geometry (mesh & wire)
    if (meshRef.current && meshRef.current.geometry instanceof THREE.BufferGeometry) {
      const geom = meshRef.current.geometry as THREE.BufferGeometry;
      const posAttr = geom.attributes.position as THREE.BufferAttribute;
      const arr = posAttr.array as Float32Array;

      for (let i = 0; i < arr.length; i += 3) {
        const ix = arr[i];
        const iy = arr[i + 1];
        const iz = arr[i + 2];

        // read base (original) coords
        const bx = basePositions[i];
        const by = basePositions[i + 1];
        const bz = basePositions[i + 2];

        // medium-speed wave: t * 0.8 (tweak multiplier here)
        const n = waveNoise(bx * 0.9 + mx * 0.6, by * 0.9 + my * 0.6, bz * 0.9, t * 0.8);

        // displacement amplitude
        const amp = 0.22; // overall amplitude (medium)
        arr[i] = bx + (n * amp);
        arr[i + 1] = by + (n * amp);
        arr[i + 2] = bz + (n * amp);
      }
      posAttr.needsUpdate = true;
      // recompute normals for nicer lighting
      geom.computeVertexNormals();
    }

    // sync the wireframe geometry to match the mesh geometry transform (we can copy positions)
    if (wireRef.current && wireRef.current.geometry instanceof THREE.BufferGeometry && meshRef.current) {
      const src = (meshRef.current.geometry as THREE.BufferGeometry).attributes.position.array as Float32Array;
      const dst = (wireRef.current.geometry as THREE.BufferGeometry).attributes.position.array as Float32Array;
      // copy
      dst.set(src);
      (wireRef.current.geometry as THREE.BufferGeometry).attributes.position.needsUpdate = true;
    }

    // update points (slightly higher amplitude for visible "breathing")
    if (pointsRef.current && pointsRef.current.geometry instanceof THREE.BufferGeometry) {
      const pos = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
      const parr = pos.array as Float32Array;

      for (let i = 0; i < parr.length; i += 3) {
        const bx = basePositions[i];
        const by = basePositions[i + 1];
        const bz = basePositions[i + 2];

        const n = waveNoise(bx * 1.1 + mx * 0.9, by * 1.1 + my * 0.9, bz * 1.1, t * 0.9);
        const amp = 0.28;
        parr[i] = bx + n * amp;
        parr[i + 1] = by + n * amp;
        parr[i + 2] = bz + n * amp;
      }
      pos.needsUpdate = true;
    }

    // gentle global rotation for extra motion
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0012; // slow
      meshRef.current.rotation.x += 0.0009;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0016;
    }
  });

  return (
    <group>
      <mesh ref={meshRef} geometry={baseGeometry} material={surfaceMaterial} position={[0, -0.15, 0]} />
      <mesh ref={wireRef} geometry={wireGeometry} material={wireMaterial} position={[0, -0.15, 0]} />
      <points ref={pointsRef} geometry={pointsGeometry} material={pointsMaterial} position={[0, -0.15, 0]} />
    </group>
  );
};


export default HybridBlob;
