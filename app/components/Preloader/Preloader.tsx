"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Preloader = ({
  hide,
  onHidden,
}: {
  hide: boolean;
  onHidden: () => void;
}) => {
  const preloaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(hide)
    if (hide) {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(preloaderRef.current, { display: 'none' });
          onHidden(); // ✅ tell parent that preloader is gone
        },
      });

      tl.to(preloaderRef.current, {
        y: '-100%',
        duration: 0.5,
        ease: 'power2.inOut',
      });
    }
  }, [hide]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-50 bg-[#f7939d] flex items-center justify-center text-white"
    >
    </div>
  );
};

export default Preloader;
