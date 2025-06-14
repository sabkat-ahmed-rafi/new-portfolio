"use client";

import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { AnimationMixer, Mesh, MeshStandardMaterial } from "three";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      primitive: any;
    }
  }
}

useGLTF.preload("/dragon/source/dragon.glb");

const Model = () => {
  const {scene, animations} = useGLTF("/dragon/source/dragon.glb");
  const mixer = useRef<AnimationMixer>();

  useEffect(() => {
    if(animations.length) {
        mixer.current = new AnimationMixer(scene);
        const wingsFlying = animations[0];
        mixer.current?.clipAction(wingsFlying).play();
    }

    // Change materials to pinkish/blackish
    scene.traverse((child) => {
      if ((child as Mesh).isMesh) {
        const mesh = child as Mesh;
    const applyColor = (material: MeshStandardMaterial, color: string) => {

      if (material.map) {
        material.map = null; // disable baked texture
        material.needsUpdate = true;
      }  

      material.color.set(color);
      material.roughness = 0.6;
      material.metalness = 0.3;
    };

    // Detect wings or body by mesh name
    if (mesh.name === "wings") {
      // Pinkish wings
      if (Array.isArray(mesh.material)) {
        mesh.material.forEach((mat) =>
          applyColor(mat as MeshStandardMaterial, "#F7939D")
        );
      } else {
        applyColor(mesh.material as MeshStandardMaterial, "#F7939D");
      }
    } else if (mesh.name === "Loona_baked") {
      // Blackish body
      if (Array.isArray(mesh.material)) {
          mesh.material.forEach((mat) =>
            applyColor(mat as MeshStandardMaterial, "#F7939D")
        );
    } else {
        // #a19ca1 
        // #cfc8cf
        applyColor(mesh.material as MeshStandardMaterial, "#cfc8cf");
      }
    };
      }
    });

    return () => {
      mixer.current?.stopAllAction();
    };
  }, [animations, scene])

    useFrame((state, delta) => {
    mixer.current?.update(delta);
  });

  return (
  <primitive
    object={scene}
    scale={0.3}
    position={[-0.5, -1.5, 1]} 
    rotation={[0, -0.7, 0]} 
  />
);
};

const DragonModel = () => {
  return (
    <Canvas style={{ width: "100%", height: "100%" }}>
      <ambientLight intensity={1.5} />
       <directionalLight position={[0, 0, 5]} />
       <Model />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default DragonModel;
