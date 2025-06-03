"use client";

import React from 'react'
import {WordRotate} from "@/components/magicui/word-rotate";
import ShimmerButton from "@/components/magicui/shimmer-button";
import ShimmerButton2 from "@/components/magicui/shimmer-button2";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import localFont from 'next/font/local';

gsap.registerPlugin(useGSAP);

  const Anton = localFont({
  src: "../../fonts/Anton.ttf",
  variable: "--font-anton",
  weight: "400"
})

const Intro = () => {

  const startFlipI = () => {
    gsap.to(".flipI", { 
      rotationX: 180,
      duration: 0.5, 
      repeat: -1,
      yoyo: true,
      ease: "Power2.inOut",
      repeatDelay: 3
     });
  };

  // useGSAP(() => {
  //   const tl = gsap.timeline();
  
  //   tl.fromTo(
  //       ".I", 
  //       { y: -400, x: 150 }, 
  //       { 
  //         y: 0, 
  //         x: 0,
  //         duration: 2, 
  //         ease: "elastic.inOut"
  //       }, 0
  //     )
  //     .fromTo(
  //       [".left-element", ".right-element"],
  //       { x: 0 }, 
  //       {
  //         x: (i) => (i === 0 ? "-=50" : "+=50"),
  //         duration: 0.7,
  //         ease: "elastic.inOut"
  //       }, 1.5
  //     )
  //     .to(".M", {
  //       rotation: 360,
  //       duration: 2,
  //       ease: "elastic.inOut"
  //     }, 2)
  //     .to(
  //       [".left-element", ".right-element"], 
  //       { 
  //         x: 0,
  //         duration: 1,
  //         ease: "elastic.inOut"
  //       }, 3
  //     )
  //     .call(() => startFlipI());
  
  // }, []);
  


  return (
    <>
        <section className='flex flex-col lg:flex-row justify-between space-y-2 text-center text-[#F7939D]  '>
            <div className={`md:text-[200px] text-[130px] text-left max-w-full leading-none select-none ${Anton.variable}`} style={{ fontFamily: 'var(--font-anton)' }} >
              <h1>SABKAT</h1>
              <h1>AHMED</h1>
              <h1>RAFI</h1>
            </div>
            <div className='md:self-end md:flex md:flex-row flex-col md:space-x-6 space-x-1 lg:mr-3'>
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
    </>
  )
}

export default Intro