"use client";

import React from 'react'
import {WordRotate} from "@/components/magicui/word-rotate";
import ShimmerButton from "@/components/magicui/shimmer-button";
import ShimmerButton2 from "@/components/magicui/shimmer-button2";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import localFont from 'next/font/local';

gsap.registerPlugin(useGSAP);

  const CherryBombOne = localFont({
  src: "../../fonts/CherryBombOne.ttf",
  variable: "--font-cherry-bomd-one",
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
        <section style={{ background: "linear-gradient(to bottom, #000000 0%, #000000 55%, #F7939D 350%)" }} className='flex flex-col justify-center items-center  space-y-2 text-center md:mx-auto h-screen  text-[#F7939D] '>
            <div className={`text-[100px] ${CherryBombOne.variable}`} style={{ fontFamily: 'var(--font-cherry-bomd-one)' }} >
              <h1>SABKAT</h1>
              <h1>AHMED</h1>
              <h1>RAFI</h1>
            </div>
            <div className='md:flex md:flex-row flex-col justify-center lg:justify-start  md:space-x-6 space-x-1 '>
            <a href="/files/Sabkat_Ahmed_Rafi_Resume.pdf" download="Sabkat_Ahmed_Rafi_Resume.pdf" target='_blank' className='border-2'>
            <ShimmerButton className="shadow-2xl mx-auto lg:mx-0">
             <span className="whitespace-pre-wrap text-center font-extrabold leading-none tracking-tight text-black dark:from-white dark:to-slate-900/10 lg:text-lg">
                Download Resume
            </span>
            </ShimmerButton>
            </a>
            <a href="https://drive.google.com/file/d/1SJHuo9RgJSV5HN1uamLQ13SLwQnExjk7/view?usp=drive_link" target='_blank' className='border-2 border-[#f7939d]'>
            <ShimmerButton2 className="shadow-2xl mx-auto lg:mx-0">
             <span className="whitespace-pre-wrap text-center font-extrabold leading-none tracking-tight text-black dark:from-white dark:to-slate-900/10 lg:text-lg">
             Preview Resume
            </span>
            </ShimmerButton2>
            </a>
            </div>
        </section>
    </>
  )
}

export default Intro