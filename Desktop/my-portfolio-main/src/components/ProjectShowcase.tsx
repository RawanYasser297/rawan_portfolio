import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

const RotatingCard = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      
      if (hovered) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.2, 1.2, 1.2), 0.1);
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1.5, 2, 0.1]} />
      <meshStandardMaterial
        color={hovered ? "#ec4899" : "#a855f7"}
        roughness={0.3}
        metalness={0.8}
        emissive={hovered ? "#ec4899" : "#a855f7"}
        emissiveIntensity={0.3}
      />
    </mesh>
  );
};

const ProjectShowcase = () => {
  return (
    <div className="w-full h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/5 to-pink-500/5">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#ff00ff" />
        
        <RotatingCard position={[-2.5, 0, 0]} />
        <RotatingCard position={[0, 0, 0]} />
        <RotatingCard position={[2.5, 0, 0]} />
      </Canvas>
    </div>
  );
};

export default ProjectShowcase;
