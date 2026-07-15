"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Environment } from "@react-three/drei";
import Factory from "./Factory";
import House from "./House";

export default function Scene() {
  return (

  
    //different positions testing 

    //<Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
    //<Canvas camera={{ position: [20, 15, 20], fov: 30 }  }> 
    //<Canvas camera={{ position: [0, -1, 0], fov: 30 }  }>  //this makes the camera got beneath the model

    // fov: field of view, it tells how much the camera can see. 
    // the position tells where the camera is actually placed in the 3D space

    <Canvas camera={{ position: [10, 10, 10], fov: 50 }}>
      
    {/* ambient light illumivates the entire scene */}
    <ambientLight intensity={1} />

    {/* directional light is specific which shines according to the position that is set */}
    <directionalLight 
    position={[10, 10, 10]} // (x, y, z)
    intensity={2} /> 


    {/* there are multiple presets and it sets the lighting, etc accordingly. it creates imaginary world around the model */}
    <Environment preset="warehouse" />


    {/* from the top by default and if pos changed can be from other positions too */}
    {/* <spotLight intensity={10} position={[2, 2, 2]}/> */}


    {/* draws line to see the 3 axes */}
    <axesHelper args={[5]} />
    {/* draws a grid for better visualization */}
    <gridHelper args={[10, 10]} />

      
    <House/> 
    

      <OrbitControls />
    </Canvas>
  );
}