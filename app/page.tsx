"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Education from "./components/Education/Education";
import EmailBox from "./components/EmailBox/EmailBox";
import Footer from "./components/Footer/Footer";
import Intro from "./components/others/Intro";
import Skill from "./components/others/Skill";
import Projects from "./components/project/Projects";
import AboutMe from "./components/AboutMe/AboutMe";


gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);

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
    <section ref={containerRef}>
      <div className="panel h-screen">
        <Intro />
      </div>

      <div className="panel h-screen"> 
        <Projects />
      </div>

      <div className="panel h-screen bg-white flex items-center justify-center">
        <AboutMe />
      </div>

      <div className="panel h-screen bg-green-500 flex items-center justify-center">
        <Skill />
      </div>

      <div className="panel h-screen bg-blue-500 flex items-center justify-center">
      </div>

      <div className="panel h-screen bg-yellow-500 flex items-center justify-center">
        <Education />
      </div>

      <div className="panel h-screen bg-pink-500 flex items-center justify-center">
        <EmailBox />
      </div>

      <div className="panel h-screen bg-purple-500 flex items-center justify-center">
        <Footer />
      </div>
    </section>
  );
}
