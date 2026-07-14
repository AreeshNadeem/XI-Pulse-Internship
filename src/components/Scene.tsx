"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";

import Factory from "./Factory";

export default function Scene() {
  return (
    <Canvas camera={{ position: [10, 10, 10], fov: 50 }}>
      <ambientLight intensity={2} />
      <directionalLight position={[10, 10, 10]} />

      <axesHelper args={[5]} />
      <gridHelper args={[20, 20]} />

      
    <Factory />
     

      

      <OrbitControls />
    </Canvas>
  );
}