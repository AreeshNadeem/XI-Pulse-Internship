"use client";

import { useGLTF } from "@react-three/drei";

export default function Liver() {
  const liver = useGLTF("/models/Liver.glb");

  return (
    <group
  onClick={(e) => {
    e.stopPropagation(); // Prevent the click event from propagating to the canvas
    console.log("Mesh:", e.object.name);

    console.log(
      `World Position:
        x: ${e.point.x.toFixed(3)}
        y: ${e.point.y.toFixed(3)}
        z: ${e.point.z.toFixed(3)}`
            );
        }}
        >
    <primitive object={liver.scene} position={[0, 0.5, 0]} scale={4} />
    </group>
  );
}