"use client";

import React from 'react'
import {WordRotate} from "@/components/magicui/word-rotate";
import ShimmerButton from "@/components/magicui/shimmer-button";
import ShimmerButton2 from "@/components/magicui/shimmer-button2";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Intro = () => {

  useGSAP(() => {
      const tl = gsap.timeline();

      tl
      .fromTo(
        ".I", 
        { y: -400, x: 150 }, 
        { 
          y: 0, 
          x:0,
          duration: 2, 
          ease: "elastic.inOut"
        }, 0)

      .fromTo(
        [".left-element", ".right-element"],
        { x: 0 }, 
        {
          x: (i) => (i === 0 ? "-=50" : "+=50"), // Left goes left, right goes right
          duration: 0.7,
          ease: "elastic.inOut"
        }, 1.5)

      .to(".M", {
          rotation: 360,
          duration: 2,
          ease: "elastic.inOut"
        }, 2)

      .to(
        [".left-element", ".right-element"], 
        { 
          x: 0,
          duration: 1,
          ease: "elastic.inOut"
        }, 3);

  }), [];

  return (
    <>
        <section className='flex flex-col justify-center items-center  space-y-2 text-center md:mx-auto lg:mt-10'>
            <h1 className='font-lilita font-extrabold  text-[100px] dark:text-white'>
              <span className='inline-block left-element'>Hi, I&apos;</span> 
              <span className='inline-block M'>m</span>
              <span className='inline-block right-element sm:pl-5'>Raf
                <span className='inline-block I'>i</span>
              </span>
            </h1>
            <h3 className='text-4xl  font-extralight font-serif text-slate-800'>
            <WordRotate
                className="text-4xl  font-extralight font-serif text-slate-800 dark:text-white"
                words={["A Programmer", "A Developer", "A Student"]}
               /></h3>
            <p className='text-slate-700 dark:text-white md:w-[500px]'>A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.</p>
            <div className='md:flex md:flex-row flex-col justify-center lg:justify-start  md:space-x-6 space-x-1 '>
            <a href="/files/Sabkat_Ahmed_Rafi_Resume.pdf" download="Sabkat_Ahmed_Rafi_Resume.pdf" target='_blank'>
            <ShimmerButton className="shadow-2xl mx-auto lg:mx-0 ">
             <span className="whitespace-pre-wrap text-center font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Download Resume
            </span>
            </ShimmerButton>
            </a>
            <a href="https://drive.google.com/file/d/1SJHuo9RgJSV5HN1uamLQ13SLwQnExjk7/view?usp=drive_link" target='_blank'>
            <ShimmerButton2 className="shadow-2xl mx-auto lg:mx-0">
             <span className="whitespace-pre-wrap text-center font-medium leading-none tracking-tight text-black dark:from-white dark:to-slate-900/10 lg:text-lg">
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