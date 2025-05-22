'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Preloader = () => {
  const preloaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      delay: 0.5,
      onComplete: () => {
        // Remove the preloader after sliding up
        gsap.set(preloaderRef.current, { display: 'none' });
      },
    });

    tl.to(preloaderRef.current, {
      y: '-100%',
      duration: 0.5,
      ease: 'power2.inOut',
    });
  }, []);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center text-white"
    >
    </div>
  );
};

export default Preloader;
