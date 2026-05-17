'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const DIY_POINTS = [
  "Relying on the exact same templates as your competitors.",
  "Inconsistent typography and fighting with design software.",
  "Clunky user flows that create friction and cause drop-offs.",
  "Settling for 'good enough' because you ran out of time.",
  "Zero motion design; a static, lifeless digital presence."
];

const MY_WAY_POINTS = [
  "Bespoke design systems built rigorously from zero.",
  "Obsessive, pixel-perfect alignment and typography.",
  "Frictionless user journeys optimized for conversion.",
  "An undeniable, premium aesthetic that commands authority.",
  "Physics-based interactions that feel alive and inevitable."
];

export default function Comparison() {
  const containerRef = useRef(null);
  
  // Tie the animation strictly to the scroll position
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "start 10%"]
  });

  // Overlapping reveals — both sides animate simultaneously for part of the scroll
  const clipLeft = useTransform(scrollYProgress, [0, 0.6], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);
  const clipRight = useTransform(scrollYProgress, [0.3, 1], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);

  return (
    <section ref={containerRef} className="relative w-full overflow-hidden bg-void-2 py-32">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <span className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-accent-secondary">
            The Reality
          </span>
          <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] font-extrabold tracking-tight text-text-primary">
            The Difference
          </h2>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Side: Standard Route */}
          <motion.div 
            style={{ clipPath: clipLeft }}
            className="flex flex-col rounded-t-[var(--radius-2xl)] border border-[rgba(10,9,20,0.05)] bg-[rgba(10,9,20,0.01)] p-6 sm:p-10 md:rounded-l-[var(--radius-2xl)] md:rounded-tr-none md:border-r-0 md:p-16"
          >
            <h3 className="mb-10 font-display text-[2rem] font-bold text-text-dim line-through decoration-[rgba(10,9,20,0.1)]">
              The Standard Route
            </h3>
            <ul className="flex flex-col gap-8">
              {DIY_POINTS.map((point, idx) => (
                <li key={idx} className="flex items-start gap-5">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[rgba(10,9,20,0.03)] text-[10px] text-text-dim border border-[rgba(10,9,20,0.05)]">
                    ✕
                  </span>
                  <span className="font-body text-[1.125rem] font-light leading-relaxed text-text-secondary opacity-70">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Side: My Way */}
          <motion.div 
            style={{ clipPath: clipRight }}
            className="flex flex-col rounded-b-[var(--radius-2xl)] border border-[rgba(10,9,20,0.12)] bg-[rgba(10,9,20,0.03)] p-6 sm:p-10 shadow-[0_0_50px_rgba(10,9,20,0.05)] md:rounded-r-[var(--radius-2xl)] md:rounded-bl-none md:p-16"
          >
            <h3 className="mb-10 font-display text-[2rem] font-extrabold text-[var(--text-primary)]">
              The Antigravity Way
            </h3>
            <ul className="flex flex-col gap-8">
              {MY_WAY_POINTS.map((point, idx) => (
                <li key={idx} className="flex items-start gap-5">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[rgba(80,70,229,0.06)] text-[10px] text-[var(--text-primary)] shadow-[0_0_15px_rgba(10,9,20,0.15)] border border-[rgba(10,9,20,0.15)]">
                    ✓
                  </span>
                  <span className="font-body text-[1.125rem] font-medium leading-relaxed text-[var(--text-primary)]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
