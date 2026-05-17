'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function MagneticButton({ children, className = '', variant = 'primary', ...props }) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics config
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Magnetic pull factor: element moves slightly toward cursor
    x.set(distanceX * 0.3);
    y.set(distanceY * 0.3);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const baseStyles = "relative inline-flex items-center justify-center transition-colors rounded-full px-6 py-2.5";
  
  const variants = {
    primary: "bg-gradient-to-r from-accent-primary to-accent-secondary text-void font-bold shadow-[0_0_30px_rgba(108,99,255,0.3)] hover:shadow-glow-primary",
    ghost: "bg-transparent border border-[rgba(108,99,255,0.3)] text-text-primary hover:text-white hover:border-accent-primary hover:shadow-glow-primary"
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{ scale: isHovered ? 1.05 : 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ x: springX, y: springY }}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      <span className="relative z-10 pointer-events-none">
        {children}
      </span>
    </motion.button>
  );
}
