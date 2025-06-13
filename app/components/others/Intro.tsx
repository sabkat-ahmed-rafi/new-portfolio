"use client";

import React, { useRef } from 'react'
import ShimmerButton from "@/components/magicui/shimmer-button";
import ShimmerButton2 from "@/components/magicui/shimmer-button2";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import localFont from 'next/font/local';
import MouseRing from '../MouseRing/MouseRing';
import Particles from '../Particle/Particles';

gsap.registerPlugin(useGSAP);

const Anton = localFont({
  src: "../../fonts/Anton.ttf",
  variable: "--font-anton",
  weight: "400"
})

const Intro = () => {

const sectionRef = useRef<HTMLElement>(null);

  return (
    <>
        <section 
        ref={sectionRef}
        className='flex flex-col lg:flex-row justify-between space-y-2 text-center text-[#F7939D] min-h-screen' 
        style={{background: "linear-gradient(to bottom, #000000 0%, #000000 55%, #F7939D 350%)"}} 
        >
            <div className={`md:text-[200px] text-[130px] text-left max-w-full leading-none select-none ${Anton.variable}`} style={{ fontFamily: 'var(--font-anton)' }} >
              <h1>SABKAT</h1>
              <h1>AHMED</h1>
              <h1>RAFI</h1>
            </div>
            <div className='md:self-end md:flex md:flex-row flex-col md:space-x-6 space-x-1 md:mr-2 lg:mr-3 md:pb-10'
            style={{zIndex: '1'}}
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
        </section>
        <MouseRing parentRef={sectionRef} />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 0 }}>
          <Particles
            particleColors={['#f7939d']}
            particleCount={500}
            particleSpread={10}
            speed={0.2}
            particleBaseSize={100}
            // moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
    </>
  )
}

export default Intro