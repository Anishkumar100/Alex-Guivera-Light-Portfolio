'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView, useSpring, useTransform } from 'motion/react';

const CountUpNumber = ({ target, suffix = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: 2000
  });

  useEffect(() => {
    if (inView) {
      springValue.set(target);
    }
  }, [inView, target, springValue]);

  const displayValue = useTransform(springValue, (current) => Math.round(current));

  return (
    <div ref={ref} className="flex items-center justify-center">
      <motion.span className="font-display text-[clamp(3.5rem,7vw,6rem)] font-extrabold tracking-tight text-accent-primary">
        {displayValue}
      </motion.span>
      <span className="font-display text-[clamp(3.5rem,7vw,6rem)] font-extrabold tracking-tight text-accent-primary">
        {suffix}
      </span>
    </div>
  );
};

const STATS = [
  { value: 127, suffix: "+", label: "Projects Delivered" },
  { value: 8, suffix: "+", label: "Years of Practice" },
  { value: 40, suffix: "+", label: "Happy Clients" },
  { value: 3, suffix: "×", label: "Awwwards Honored" }
];

export default function Stats() {
  const containerRef = useRef(null);
  
  return (
    <section 
      ref={containerRef}
      className="relative flex min-h-[50vh] w-full items-center justify-center overflow-hidden border-y border-[rgba(10,9,20,0.06)] py-24"
    >
      {/* ReactBits Aurora Placeholder */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#6C63FF08] via-[#00F5D408] to-[#FF3CAC05] opacity-80 blur-[100px]" />

      {/* Aceternity Sparkles Placeholder */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(80,70,229,0.15)_1px,transparent_1px)] bg-[size:24px_24px] opacity-15 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-12">
        <div className="relative flex flex-col items-center justify-between gap-16 md:flex-row md:gap-0">
          
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex w-full flex-col items-center md:w-1/4">
              
              <motion.div
                initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="flex flex-col items-center"
              >
                <CountUpNumber target={stat.value} suffix={stat.suffix} />
                <span className="mt-2 font-body text-[1rem] font-medium text-text-secondary">
                  {stat.label}
                </span>
              </motion.div>

              {/* Separator line for desktop */}
              {idx < STATS.length - 1 && (
                <div 
                  className="absolute top-1/2 hidden h-24 w-[1px] -translate-y-1/2 bg-[rgba(10,9,20,0.08)] md:block" 
                  style={{ left: `${(idx + 1) * 25}%` }} 
                />
              )}
              
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
