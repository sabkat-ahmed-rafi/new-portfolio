"use client";

import React, { useRef, useLayoutEffect } from 'react';
import Project from './Project';
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
    description: "QuantumDoc is a real-time collaborative document editor, similar to Google Docs",
    liveLink: "https://quantum-docs-frontend.vercel.app",
    githubLink: "https://github.com/sabkat-ahmed-rafi/QuantumDocs"
  };

  const projectCryptonism = {
    name: "Cryptonism",
    description: "End-to-end encryption library for browser to secure authentication and sensitive data with zero-knowledge architecture",
    liveLink: "https://cryptonism.vercel.app",
    githubLink: "https://github.com/sabkat-ahmed-rafi/cryptonism"
  };

  const projectFrontendArk = {
    name: "FrontendArk",
    description: "FrontendArk helps you practice JavaScript and React interview questions online.",
    liveLink: "https://frontendark.com",
  }

  return (
    <section 
      ref={containerRef}
      className='min-h-screen max-h-full overflow-y-auto bg-black'
      
    >    
      <h1 
        ref={titleRef}
        className='font-extrabold text-white text-6xl text-center py-10'>
        Projects
      </h1>

      <section className='flex justify-center items-center flex-col md:flex-row flex-wrap gap-5 mb-5'>
        <div ref={projectRef}>
          <Project {...projectQuantumDoc} />
        </div>
        <div ref={projectRef}>
          <Project {...projectCryptonism} />
        </div>
        <div ref={projectRef}>
          <Project {...projectFrontendArk} />
        </div>
      </section>
    </section>
  );
};

export default Projects;
