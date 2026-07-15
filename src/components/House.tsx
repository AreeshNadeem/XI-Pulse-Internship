"use client"; 
import {useGLTF} from '@react-three/drei';

export default function House(){

    const house = useGLTF("/models/House.glb");
    return (<primitive object={house.scene} />);
}