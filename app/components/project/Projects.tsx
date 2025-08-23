"use client";

import React, { useRef, useLayoutEffect } from 'react';
import Project from './Project';
import SplashCursor from '../SplashCursor/SplashCursor';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const projectRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "restart restart none none",
        },
      });

      tl.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
      }).from(projectRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.4"); // Overlap animation slightly

      ScrollTrigger.refresh(); // recalculate after layout

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const projectQuantumDoc = {
    name: "QuantumDocs",
    description: "QuantumDoc is a real-time collaborative document editor, similar to Google Docs..",
    liveLink: "https://quantum-docs-frontend.vercel.app",
    githubLink: "https://github.com/sabkat-ahmed-rafi/QuantumDocs"
  };

  return (
    <section 
      ref={containerRef}
      className='min-h-screen'
      style={{background: "linear-gradient(to bottom, #000000 0%, #000000 55%, #ffffff 550%)"}}
    >    
      <h1 
        ref={titleRef}
        className='font-extrabold text-white text-6xl text-center py-10'>
        Projects
      </h1>

      <section className='flex flex-col justify-center items-center bg-black space-y-5'>
        <div ref={projectRef}>
          <Project {...projectQuantumDoc} />
        </div>
      </section>
      <p className='md:text-3xl text-xl text-white text-center absolute bottom-10 hidden md:flex'>
        I believe in quality over quantity — that’s why I focus on building meaningful, real-world apps. QuantumDocs is the first step, and many more are on the way.
      </p>
      <SplashCursor />
    </section>
  );
};

export default Projects;
