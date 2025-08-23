"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Education from "./components/Education/Education";
import EmailBox from "./components/EmailBox/EmailBox";
import Intro from "./components/others/Intro";
import Skill from "./components/others/Skill";
import Projects from "./components/project/Projects";
import AboutMe from "./components/AboutMe/AboutMe";
import Preloader from "./components/Preloader/Preloader";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [introReady, setIntroReady] = useState(false);
  const [preloaderDone, setPreloaderDone] = useState(false);

  const allReady = modelLoaded && introReady;

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const panels = gsap.utils.toArray<HTMLElement>(".panel");
    const totalPanels = panels.length;

    // Precompute snap points (0, 1/(n-1), 2/(n-1), ..., 1)
    const snapPoints = panels.map((_, i) => i / (totalPanels - 1));

    const ctx = gsap.context(() => {
      // Animate vertical movement of all panels as a group
      gsap.to(panels, {
        yPercent: -100 * (totalPanels - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => "+=" + (window.innerHeight * (totalPanels - 1)),
          pin: true,
          scrub: 1,
          snap: snapPoints,
        },

      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Preloader
        hide={allReady}
        onHidden={() => setPreloaderDone(true)} // triggers the start of Intro animations
      />

      <section ref={containerRef} className="relative h-screen overflow-hidden">
        <div className="panel h-screen">
          <Intro
            startAnimation={preloaderDone}
            onIntroReady={() => setIntroReady(true)}
            onModelLoaded={() => setModelLoaded(true)}
          />
        </div>

        <div className="panel h-screen">
          <Projects />
        </div>

        <div className="panel h-screen">
          <AboutMe />
        </div>

        <div className="panel h-screen">
          <Skill />
        </div>

        <div className="panel h-screen">
          <Education />
        </div>

        <div className="panel h-screen">
          <EmailBox />
        </div>
      </section>
    </>
  );
}
