"use client";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";

const Preloader = ({
  hide,
  onHidden,
}: {
  hide: boolean;
  onHidden: () => void;
}) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);
  const hasExitedRef = useRef(false);
  const onHiddenRef = useRef(onHidden);

  useEffect(() => {
    onHiddenRef.current = onHidden;
  }, [onHidden]);

  // Pre-generate particle positions so they don't change every render (perf)
  const particles = useMemo(
    () =>
      Array.from({ length: 14 }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 2,
      })),
    []
  );

  // Minimum display time (1.2 seconds) to prevent flashing
  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Simulate progress loading while waiting for real ready signal
  useEffect(() => {
    if (hide) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev; // Cap at 90% until actually ready
        const next = prev + 8 + Math.random() * 6;
        return next > 90 ? 90 : next;
      });
    }, 130);

    return () => clearInterval(interval);
  }, [hide]);

  // Jump to 100% when parent says "ready"
  useEffect(() => {
    if (hide) {
      setProgress(100);
    }
  }, [hide]);

  // Exit animation – run once when all conditions are true
  useEffect(() => {
    if (!preloaderRef.current) return;
    if (hasExitedRef.current) return;

    if (hide && minTimeElapsed && progress >= 100) {
      // Prevent double-running in dev/StrictMode or due to re-renders
      hasExitedRef.current = true;

      const q = gsap.utils.selector(preloaderRef);
      const tl = gsap.timeline({
        onComplete: () => {
          // Keep it gone permanently; do NOT revert styles on later renders.
          gsap.set(preloaderRef.current, { display: "none" });
          onHiddenRef.current();
        },
      });

      tl.to(q(".loader-ring"), {
        scale: 0,
        opacity: 0,
        duration: 0.4,
        stagger: 0.08,
        ease: "power2.in",
      })
        .to(
          q(".loader-text"),
          {
            opacity: 0,
            y: -20,
            duration: 0.3,
            ease: "power2.in",
          },
          "-=0.2"
        )
        .to(
          q(".loader-progress"),
          {
            opacity: 0,
            scale: 0.9,
            duration: 0.3,
            ease: "power2.in",
          },
          "-=0.2"
        )
        .to(
          preloaderRef.current,
          {
            y: "-100%",
            duration: 0.6,
            ease: "power3.inOut",
          },
          "-=0.1"
        );

      // If the component unmounts mid-animation, just stop the timeline (no revert).
      return () => {
        tl.kill();
      };
    }
  }, [hide, minTimeElapsed, progress]);

  // Intro + continuous animations, GSAP context-safe for React StrictMode.
  // Initial "hidden" state is in the markup (Tailwind classes), and we animate TO visible.
  useLayoutEffect(() => {
    if (!preloaderRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      const q = gsap.utils.selector(preloaderRef);

      tl.to(q(".loader-ring"), {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.7)",
      })
        .to(
          q(".loader-text"),
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .to(
          q(".loader-progress"),
          {
            opacity: 1,
            scaleX: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.3"
        );

      gsap.to(q(".loader-ring-outer"), {
        rotation: 360,
        duration: 3,
        repeat: -1,
        ease: "none",
      });

      gsap.to(q(".loader-ring-middle"), {
        rotation: -360,
        duration: 2.5,
        repeat: -1,
        ease: "none",
      });

      gsap.to(q(".loader-ring-inner"), {
        rotation: 360,
        duration: 2,
        repeat: -1,
        ease: "none",
      });

      gsap.to(q(".loader-dot"), {
        scale: 1.2,
        opacity: 0.7,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, preloaderRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-50 bg-gradient-to-br from-black via-[#1a0a0f] to-black flex flex-col items-center justify-center text-white overflow-hidden"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#f7939d] opacity-30 loader-particle"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              animationDelay: `${p.delay}s`,
              animation: "loader-float 4s ease-in-out infinite",
            }}
          />
        ))}
      </div>

      {/* Main loader container */}
      <div className="relative flex flex-col items-center justify-center z-10">
        {/* Animated rings */}
        <div className="relative w-32 h-32 md:w-40 md:h-40 mb-8">
          {/* Outer ring */}
          <div
            className="loader-ring loader-ring-outer absolute inset-0 border-4 border-transparent border-t-[#f7939d] border-r-[#f7939d] rounded-full opacity-0 scale-0"
            style={{ boxShadow: "0 0 20px rgba(247, 147, 157, 0.5)" }}
          />

          {/* Middle ring */}
          <div
            className="loader-ring loader-ring-middle absolute inset-4 border-4 border-transparent border-b-[#f7939d] border-l-[#f7939d] rounded-full opacity-0 scale-0"
            style={{ boxShadow: "0 0 15px rgba(247, 147, 157, 0.4)" }}
          />

          {/* Inner ring */}
          <div
            className="loader-ring loader-ring-inner absolute inset-8 border-4 border-transparent border-t-[#f7939d] border-r-[#f7939d] rounded-full opacity-0 scale-0"
            style={{ boxShadow: "0 0 10px rgba(247, 147, 157, 0.3)" }}
          />

          {/* Center dot */}
          <div
            className="loader-dot absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#f7939d] rounded-full"
            style={{ boxShadow: "0 0 20px rgba(247, 147, 157, 0.8)" }}
          />
        </div>

        {/* Loading text */}
        <div className="loader-text text-center mb-6 opacity-0 translate-y-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-wider loader-title">
            LOADING
          </h2>
          <p className="text-sm md:text-base text-gray-400 tracking-widest">
            Preparing Experience
          </p>
        </div>

        {/* Progress bar */}
        <div className="loader-progress w-64 md:w-80 h-1 bg-gray-800 rounded-full overflow-hidden opacity-0 scale-x-0 origin-left">
          <div
            className="h-full bg-gradient-to-r from-[#f7939d] to-[#ff6b9d] rounded-full transition-all duration-300"
            style={{
              width: `${progress}%`,
              boxShadow: "0 0 10px rgba(247, 147, 157, 0.8)",
            }}
          />
        </div>

        {/* Progress percentage */}
        <div className="loader-text mt-4 text-sm text-gray-400 font-mono">
          {Math.round(progress)}%
        </div>
      </div>
    </div>
  );
};

export default Preloader;
