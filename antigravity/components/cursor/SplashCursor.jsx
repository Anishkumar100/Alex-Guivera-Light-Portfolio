'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function SplashCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const isHovering = useRef(false);
  const scaleVal = useMotionValue(1);

  const smoothX = useSpring(cursorX, { stiffness: 500, damping: 28, mass: 0.5 });
  const smoothY = useSpring(cursorY, { stiffness: 500, damping: 28, mass: 0.5 });
  const smoothScale = useSpring(scaleVal, { stiffness: 300, damping: 20 });

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleOver = (e) => {
      const el = e.target;
      if (el.closest('a') || el.closest('button') || el.tagName === 'A' || el.tagName === 'BUTTON') {
        scaleVal.set(2.5);
        isHovering.current = true;
      } else if (isHovering.current) {
        scaleVal.set(1);
        isHovering.current = false;
      }
    };

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mouseover', handleOver, { passive: true });
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', handleOver);
    };
  }, [cursorX, cursorY, scaleVal]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference md:block"
      style={{ x: smoothX, y: smoothY, scale: smoothScale }}
    />
  );
}
