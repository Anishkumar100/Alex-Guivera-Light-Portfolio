'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'motion/react';

// Animated Counter component that triggers only when scrolled into view
function StatCounter({ value, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1], // Custom snappy ease
        onUpdate: (latest) => {
          setDisplayValue(Math.round(latest));
        }
      });
      return controls.stop;
    }
  }, [value, isInView]);

  return (
    <span ref={ref} className="font-display text-[clamp(4rem,10vw,7rem)] font-extrabold leading-none tracking-tighter text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
      {prefix}{displayValue}{suffix}
    </span>
  );
}

export default function ProjectStats() {
  return (
    <section className="relative w-full border-t border-[rgba(255,255,255,0.05)] py-32 md:py-40">
      
      {/* Background Gradient */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-20">
        <div className="absolute h-[500px] w-full max-w-[1000px] rounded-[100%] bg-[radial-gradient(ellipse,rgba(108,99,255,0.15)_0%,transparent_70%)] blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 md:px-12">
        
        <div className="grid grid-cols-1 gap-20 md:grid-cols-3 md:gap-8">
          
          {/* Stat 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center text-center"
          >
            <StatCounter value={127} suffix="+" />
            <span className="mt-6 font-mono text-[12px] uppercase tracking-[0.25em] text-accent-secondary">
              Total Projects
            </span>
          </motion.div>

          {/* Stat 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center justify-center text-center md:before:absolute md:before:left-0 md:before:h-32 md:before:w-[1px] md:before:bg-[rgba(255,255,255,0.1)] md:after:absolute md:after:right-0 md:after:h-32 md:after:w-[1px] md:after:bg-[rgba(255,255,255,0.1)]"
          >
            <StatCounter value={14} />
            <span className="mt-6 font-mono text-[12px] uppercase tracking-[0.25em] text-accent-primary">
              Industries Served
            </span>
          </motion.div>

          {/* Stat 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center justify-center text-center"
          >
            <StatCounter value={22} />
            <span className="mt-6 font-mono text-[12px] uppercase tracking-[0.25em] text-text-dim">
              Countries Reached
            </span>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
