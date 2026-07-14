"use client";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei"; 
export default function Scene(){


    return (

        <Canvas>
            <gridHelper args={[10,10]} />
            <axesHelper args={[5]} />
            <OrbitControls />

            <directionalLight position={[2,2,2]} />
            <mesh position={[-2,0,0]} rotation={[0, Math.PI/2,0]} scale={2}>
                <boxGeometry />
                    <meshStandardMaterial color="orange" />
                
            </mesh>
            
        </Canvas>

    )
}