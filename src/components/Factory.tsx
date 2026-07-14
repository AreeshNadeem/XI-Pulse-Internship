"use client"; 
import {useGLTF} from "@react-three/drei"; 
import {useRef} from "react";
import {useFrame} from "@react-three/fiber";

import * as THREE from "three"; 
export default function Factory(){

    const factory=useGLTF("/models/Factory.glb");
    const ref=useRef<THREE.Group>(null);
    useFrame(()=>{

        if(ref.current){
            ref.current.rotation.y+=0.01;
        }
    })
    return (<primitive ref={ref} object={factory.scene} scale={1} position={[0, 0.5, 0]} />); 
    
}

