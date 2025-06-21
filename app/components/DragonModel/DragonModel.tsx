"use client";

import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { AnimationMixer, Mesh, MeshStandardMaterial, Group, Object3D } from "three";
import gsap from "gsap";



useGLTF.preload("/dragon/source/dragon.glb");

const Model = () => {
  const {scene, animations} = useGLTF("/dragon/source/dragon.glb");
  const mixer = useRef<AnimationMixer>();
  const dragonRef = useRef<Group>(null);
  const [scale, setScale] = useState(0.3);
  const [modelPosition, setModelPosition] = useState<[number, number, number]>([-0.5, -1.5, 1]);
  const [modelRotation, setModelRotation] = useState<[number, number, number]>([0, -0.7, 0]);

  useEffect(() => {
    // Responsive Position Logic
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
      const isDesktop = window.innerWidth >= 1024 && window.innerWidth < 1280;
      const largeDesktop = window.innerWidth >= 1280;
      if (isMobile) {
        setScale(0.1)
        setModelPosition([0.8, -1.5, 1]);
        setModelRotation([0, -1.3, 0])
      } else if(isTablet) {
        setModelPosition([1.8, -1.5, 1]); 
        setModelRotation([0, -1.3, 0])
      } else if(isDesktop) {
        setModelPosition([0.9, -1.5, 1]);
        setModelRotation([0, -1.1, 0])
      } else if(largeDesktop) {
        setModelPosition([-0.5, -1.5, 1]);
      }
    };

    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize); // Listen to resize

    return () => window.removeEventListener("resize", handleResize);
  }, [])

  useEffect(() => {

    // Giving prebuilt animation
    if(animations.length) {
        mixer.current = new AnimationMixer(scene);
        const wingsFlying = animations[0];
        mixer.current?.clipAction(wingsFlying).play();
    }

    // Change materials color to pinkish
    scene.traverse((child: Object3D) => {
      if ((child as Mesh).isMesh) {
        const mesh = child as Mesh;
    const applyColor = (material: MeshStandardMaterial, color: string) => {

      if (material.map) {
        material.map = null; // disable baked texture
        material.needsUpdate = true;
      }  

      material.color.set(color);
      material.roughness = 1;
      material.metalness = 0.4;
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
            applyColor(mat as MeshStandardMaterial, "#cfc8cf")
        );
    } else {
        applyColor(mesh.material as MeshStandardMaterial, "#cfc8cf");
      }
    };
      }
    });

    // Giving my own animation with gsap
    if (dragonRef.current) {

      // Changing the model's rotation based on the device viewport
      dragonRef.current.rotation.set(
       modelRotation[0],
       modelRotation[1],
       modelRotation[2]
      );

      // Rotating (Idle Rotating) Animation  
      gsap.to(dragonRef.current.rotation, {
        y: dragonRef.current.rotation.y + Math.PI * 2,
        delay: 3, // Animation will start after 3 seconds
        duration: 2, // Animation will complete withing 2 seconds
        ease: "power2.inOut", // Starts smoothly and Ends smoothly
        repeat: -1, // Repeat the animation infinite
        repeatDelay: 5, // Repeat the animation after each 5 seconds
        // yoyo: true, // Yoyo will reverse the animation
      });

      // Floating (Idle Hover) Animation
      gsap.to(dragonRef.current.position, {
          y: "+=0.4",
          duration: 1.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1
      });

      // Small Tilt Animation
      gsap.to(dragonRef.current.rotation, {
        z: "+=0.1",      
        duration: 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });


    }

    return () => {
      mixer.current?.stopAllAction();
    };
  }, [animations, scene, modelRotation])

  useFrame((_, delta) => {
    mixer.current?.update(delta);
  });

  return (
  <primitive
    ref={dragonRef}
    object={scene}
    scale={scale}
    position={modelPosition} 
    rotation={modelRotation} 
  />
);
};


const DragonModel = () => {
  return (
    <Canvas style={{ width: "100%", height: "100%" }}>
      <ambientLight intensity={1} />
       <directionalLight />
       <Model />
      <OrbitControls
       enableZoom={false}
       minPolarAngle={Math.PI / 2}
       maxPolarAngle={Math.PI / 2}
       />
    </Canvas>
  );
};

export default DragonModel;
