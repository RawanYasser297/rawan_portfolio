import React from "react";
import { Canvas } from "@react-three/fiber";
import HybridBlob from "./HybridBlob";
import './GlobalBackground.css'
export default function GlobalBackground() {
  return (
    <div className="global-bg">
      <Canvas camera={{ position: [0, 0, 8], fov: 55 }}>
        <color attach="background" args={["#06000a"]} />
        <ambientLight intensity={0.7} />
        <pointLight color="#ff40e0" position={[5, 5, 5]} intensity={1.2} />
        <pointLight color="#7a5bff" position={[-5, -2, 3]} intensity={0.6} />
        <HybridBlob />
      </Canvas>
    </div>
  );
}
