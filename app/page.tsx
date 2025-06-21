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
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".panel");

      // For snapping – get all start positions
      const tops = panels.map((panel) =>
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
        })
      );

      // Pin each panel
      panels.forEach((panel) => {
        ScrollTrigger.create({
          trigger: panel,
          start: () =>
            panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
          pin: true,
          pinSpacing: false,
        });
      });

      // Snapping logic
      ScrollTrigger.create({
        snap: {
          snapTo: (_, self) => {
            const panelStarts = tops.map((st) => st.start);
            const scrollValue = self?.scroll ? self.scroll() : 0;
            const snapScroll = gsap.utils.snap(panelStarts, scrollValue);
            return gsap.utils.normalize(
              0,
              ScrollTrigger.maxScroll(window),
              snapScroll
            );
          },
          duration: 0.5,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
    <Preloader
      hide={allReady}
      onHidden={() => setPreloaderDone(true)} // ✅ this triggers the start of animations
    />

    <section ref={containerRef}>
      
      <div className="panel h-screen">
        <Intro 
        startAnimation={preloaderDone}
        onIntroReady={() => setIntroReady(true)}
        onModelLoaded={() => setModelLoaded(true)} />
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
