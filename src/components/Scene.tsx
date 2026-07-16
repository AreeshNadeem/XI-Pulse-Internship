"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Environment } from "@react-three/drei";
import Factory from "./Factory";
import House from "./House";
import Liver from "./Liver";

export default function Scene() {
  return (

  
    //different positions testing 

    //<Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
    //<Canvas camera={{ position: [20, 15, 20], fov: 30 }  }> 
    //<Canvas camera={{ position: [0, -1, 0], fov: 30 }  }>  //this makes the camera got beneath the model

    // fov: field of view, it tells how much the camera can see. 
    // the position tells where the camera is actually placed in the 3D space

    <Canvas camera={{ position: [4, 4, 6], fov: 45 }}>

      <color
      attach="background"
      args={["#ececec"]}
      />
      
    {/* ambient light illumivates the entire scene */}
    <ambientLight intensity={0.5} />

    {/* directional light is specific which shines according to the position that is set */}
    <directionalLight
        position={[6,8,5]}
        intensity={2.2}
    />

    <directionalLight
    position={[-5,3,-2]}
    intensity={0.8}
    />


    {/* there are multiple presets asnd it sets the lighting, etc accordingly. it creates imaginary world around the model */}
    <Environment preset="warehouse" />


    {/* from the top by default and if pos changed can be from other positions too */}
    {/* <spotLight intensity={10} position={[2, 2, 2]}/> */}


    {/* draws line to see the 3 axes */}
    <axesHelper args={[2]} />
    {/* draws a grid for better visualization */}
    <gridHelper args={[20, 20]} />

      
    
    <Liver />


      <OrbitControls
        target={[0,0.5,0]}
        minDistance={3}
        maxDistance={10}
     />
    </Canvas>
  );
}