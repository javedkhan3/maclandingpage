import { useGLTF, useScroll, useTexture } from '@react-three/drei';
import React from 'react';
import Geometries from 'three/src/renderers/common/Geometries.js';
import * as THREE from "three";
// import { texture } from 'three/tsl';
import { useFrame } from '@react-three/fiber';


function MacContainer() {
    const tex = useTexture('./red.jpg'); // replace with actual path
    const model = useGLTF('./mac.glb');

    let meshes = {};
    model.scene.traverse((e) => {
        meshes[e.name] = e;
    });

    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
    meshes.matte.material.map = tex;
    meshes.matte.material.emissiveIntensity = 0;
    meshes.matte.material.metalness = 0;
    meshes.matte.material.roughness = 1;


    let data = useScroll();
    useFrame((state, delta) => {
        meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 90);
    })
    return (
        <group position={[0, -12, 30]}>
           <primitive object={model.scene} />   
        </group>        
    )
}

export default MacContainer;