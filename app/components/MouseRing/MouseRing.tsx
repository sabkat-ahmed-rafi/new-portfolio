'use client';

import { useEffect, useRef, useState } from 'react'


const MouseRing = () => {

  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);

  const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
  }

  const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.15;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.15;

      if(ringRef.current) {
          ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`;
      };

      requestAnimationFrame(animate);
  }

  useEffect(() => {
      document.addEventListener("mousemove", handleMouseMove);
      animate();

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };
  }, [])

  return (
    <div
      ref={ringRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] w-10 h-10 border border-[#454242] rounded-full"
    />
  )
}

export default MouseRing