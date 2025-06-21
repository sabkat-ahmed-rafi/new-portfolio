"use client";

import React, { useEffect, useRef } from 'react'
import ShimmerButton from "@/components/magicui/shimmer-button";
import ShimmerButton2 from "@/components/magicui/shimmer-button2";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import localFont from 'next/font/local';
import MouseRing from '../MouseRing/MouseRing';
import Particles from '../Particle/Particles';
import DragonModel from '../DragonModel/DragonModel';

gsap.registerPlugin(useGSAP);

const Anton = localFont({
  src: "../../fonts/Anton.ttf",
  variable: "--font-anton",
  weight: "400"
})

const Intro = ({
  startAnimation,
  onIntroReady,
  onModelLoaded
}: {
  startAnimation: boolean;
  onIntroReady: () => void;
  onModelLoaded: () => void;
}) => {

  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {

    if (!startAnimation) return;

    // Initial entry animation
    const tl = gsap.timeline({
      delay: 1,
      defaults: { duration: 1.3, ease: "power4.out" }
    });

    tl.from(".intro-word", {
      x: "-150vw",
      rotateY: 720,
      scale: 3,
      filter: "blur(20px)",
      opacity: 0,
      transformOrigin: "left center",
      stagger: 0.3,
    }).to(".intro-word", {
      scale: 1,
      rotateY: 0,
      filter: "blur(0px)",
      opacity: 1,
      duration: 0.8,
      ease: "expo.out",
      stagger: 0.15,
    });

  }, [startAnimation]);
  
  useGSAP(() => {
  
    if (!startAnimation) return;

  const words = gsap.utils.toArray(".intro-word");

  const tl = gsap.timeline({
    delay: 3,
    defaults: { ease: "power4.out" },
  });

  // Add shine sweep effect
  tl.to(
    words,
    {
      color: "#F7939D",
      textShadow: "0px 0px 20px #F7939D",
      duration: 1.3,
      yoyo: true,
      repeat: 1,
      stagger: 0.2,
    },
    "-=0.6"
  );

  // Add subtle bounce and glow loop
  tl.to(
    words,
    {
      y: "+=4",
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "sine.inOut",
      stagger: { each: 0.2, from: "center" },
    },
    "+=0.2"
  );

  }, [startAnimation]);

  useGSAP(() => {

  if (!startAnimation) return;

  const buttons = gsap.utils.toArray(".intro-buttons > a");

  gsap.from(buttons, {
    opacity: 0,
    y: 100,
    scale: 0.8,
    duration: 1,
    ease: "back.out(1.7)",
    stagger: 0.2,
    delay: 2 
  });
  }, [startAnimation]);

  useEffect(() => {
    onIntroReady(); // notify Home that Intro has mounted
  }, []);

  return (
    <>
      <section 
        ref={sectionRef}
        className='flex flex-col lg:flex-row justify-between text-center text-[#F7939D] min-h-screen' 
        style={{background: "linear-gradient(to bottom, #000000 0%, #000000 55%, #F7939D 350%)"}} 
        >
            <div 
            ref={textRef}
            className={`md:text-[165px] lg:text-[200px] text-[130px] text-left max-w-full leading-none select-none ${Anton.variable} ${!startAnimation && 'invisible'}`} style={{ fontFamily: 'var(--font-anton)' }} >
              <h1 className="intro-word">SABKAT</h1>
              <h1 className="intro-word">AHMED</h1>
              <h1 className="intro-word">RAFI</h1>
            </div>
            <div className={`md:self-end md:flex md:flex-row flex-col md:space-x-6 space-x-1 md:mr-2 lg:mr-3 pb-3 lg:pb-10 intro-buttons ${!startAnimation && 'invisible'}`}
            style={{zIndex: '2'}}
            >
            <a href="/files/Sabkat_Ahmed_Rafi_Resume.pdf" download="Sabkat_Ahmed_Rafi_Resume.pdf" target='_blank'>
              <div className='border-2 inline-block mb-3 sm:mb-0 mr-24 sm:mr-0'>
               <ShimmerButton className="shadow-2xl mx-auto lg:mx-0">
               <span className="whitespace-pre-wrap text-center font-extrabold leading-none tracking-tight text-black dark:from-white dark:to-slate-900/10 lg:text-lg">
                Download Resume
               </span>
               </ShimmerButton>
              </div>
            </a>
            <a href="https://drive.google.com/file/d/1SJHuo9RgJSV5HN1uamLQ13SLwQnExjk7/view?usp=drive_link" target='_blank'>
              <div className='border-2 border-[#f7939d] inline-block ml-24 sm:ml-0'>
                <ShimmerButton2 className="shadow-2xl mx-auto lg:mx-0">
                <span className="whitespace-pre-wrap text-center font-extrabold leading-none tracking-tight text-black dark:from-white dark:to-slate-900/10 lg:text-lg">
                 Preview Resume
                </span>
               </ShimmerButton2>
              </div>
            </a>
            </div>
        <MouseRing parentRef={sectionRef} />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 0 }}>
          <Particles
            particleColors={['#f7939d']}
            particleCount={500}
            particleSpread={10}
            speed={0.3}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
            />
        </div>
        <div style={{ width: "100%", height: "100vh", position: "absolute", zIndex: 1 }}>
          <DragonModel onModelLoaded={onModelLoaded}  />
        </div>

      </section>
    </>
  )
}

export default Intro