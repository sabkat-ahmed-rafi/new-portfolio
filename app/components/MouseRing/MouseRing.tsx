'use client';

import { useEffect, useRef } from 'react';

interface MouseRingProps {
  parentRef: React.RefObject<HTMLElement>;
}

const MouseRing = ({ parentRef }: MouseRingProps) => {
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    const parent = parentRef.current;
    if (!parent) return;

    const bounds = parent.getBoundingClientRect();
    mouse.current.x = e.clientX - bounds.left;
    mouse.current.y = e.clientY - bounds.top;
  };

  const animate = () => {
    ring.current.x += (mouse.current.x - ring.current.x) * 0.15;
    ring.current.y += (mouse.current.y - ring.current.y) * 0.15;

    if (ringRef.current) {
      ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`;
    }

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const parent = parentRef?.current;
    if (!parent) return;

    parent.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      parent.removeEventListener('mousemove', handleMouseMove);
    };
  }, [parentRef]);

  return (
    <div
      ref={ringRef}
      className="pointer-events-none absolute top-0 left-0 z-[9999] w-10 h-10 border border-[#f7939d] rounded-full overflow-hidden"
    />
  );
};

export default MouseRing;
