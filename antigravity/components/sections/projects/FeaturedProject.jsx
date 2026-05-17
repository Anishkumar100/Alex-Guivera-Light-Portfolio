'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import MagneticButton from '@/components/ui/MagneticButton';

const GlareCard = ({ children, className = "" }) => {
  const ref = useRef(null);
  
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 25 });

  // Rotate based on mouse pos
  const rotateX = useTransform(mouseYSpring, [0, 1], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [0, 1], ["-5deg", "5deg"]);
  
  // Glare position based on mouse pos
  const glareX = useTransform(mouseXSpring, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [0, 1], ["0%", "100%"]);
  // Only show glare when mouse is not centered
  const glareOpacity = useTransform(mouseXSpring, [0, 0.45, 0.55, 1], [0.3, 0.05, 0.05, 0.3]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width;
    const mouseY = (e.clientY - rect.top) / rect.height;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    // Return to flat state
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <div style={{ perspective: "1500px" }} className={`relative ${className}`}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative h-full w-full overflow-hidden rounded-[var(--radius-2xl)] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]"
      >
        {children}

        {/* The Glare Effect Overlay */}
        <motion.div 
          className="pointer-events-none absolute inset-0 z-50 rounded-[var(--radius-2xl)] mix-blend-overlay"
          style={{
            background: "radial-gradient(circle at center, rgba(255,255,255,0.7) 0%, transparent 40%)",
            left: useTransform(glareX, v => `calc(${v} - 50%)`),
            top: useTransform(glareY, v => `calc(${v} - 50%)`),
            width: "200%",
            height: "200%",
            opacity: glareOpacity
          }}
        />
        {/* Soft edge border glow */}
        <div className="pointer-events-none absolute inset-0 z-40 rounded-[var(--radius-2xl)] border border-[rgba(255,255,255,0.05)] transition-colors duration-500 hover:border-accent-primary/30" />
      </motion.div>
    </div>
  );
};

export default function FeaturedProject() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden border-y border-[rgba(255,255,255,0.05)] py-32 md:py-40">
      
      {/* Background Spotlight */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30">
        <div className="absolute h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,transparent_60%)] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col-reverse items-center gap-16 px-6 md:px-12 lg:flex-row lg:gap-24">
        
        {/* Left Info */}
        <div className="flex w-full flex-col lg:w-5/12">
          <div className="mb-6 flex items-center gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-secondary">
              Featured Case Study
            </span>
            <span className="h-[1px] w-12 bg-accent-secondary/50" />
            <span className="font-mono text-[11px] tracking-widest text-text-dim">2026</span>
          </div>

          <h2 className="mb-8 font-display text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-tight text-white">
            Quantum <br />
            <span className="text-white/60">Engine OS</span>
          </h2>

          <p className="mb-12 font-body text-[1.125rem] font-light leading-relaxed text-text-secondary">
            A complete architectural reimagining of the Quantum OS dashboard. We stripped away 60% of the visual noise, introduced a physics-based motion system, and rebuilt the entire design language from zero to create an interface that feels less like software and more like a high-performance vehicle.
          </p>

          <div className="mb-12 flex flex-wrap gap-8 border-l-2 border-[rgba(255,255,255,0.1)] pl-6">
            <div className="flex flex-col">
              <span className="font-display text-[1.5rem] font-bold text-white">+42%</span>
              <span className="mt-1 font-mono text-[10px] uppercase tracking-widest text-text-dim">User Retention</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-[1.5rem] font-bold text-white">12ms</span>
              <span className="mt-1 font-mono text-[10px] uppercase tracking-widest text-text-dim">Interaction Latency</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-[1.5rem] font-bold text-white">Webby</span>
              <span className="mt-1 font-mono text-[10px] uppercase tracking-widest text-text-dim">Nominee '26</span>
            </div>
          </div>

          <div className="flex">
            <Link href="/projects/quantum-engine">
              <MagneticButton 
                className="!px-8 !py-4 font-display text-[1rem] font-medium uppercase tracking-widest text-white border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.03)] hover:bg-white hover:text-void transition-colors duration-300"
              >
                Deep Dive →
              </MagneticButton>
            </Link>
          </div>
        </div>

        {/* Right Image with Glare Effect */}
        <div className="w-full lg:w-7/12">
          <GlareCard className="aspect-[4/3] w-full lg:aspect-[16/10]">
            <img 
              src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1600&auto=format&fit=crop" 
              alt="Quantum Engine OS Case Study" 
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Color Burn Overlay */}
            <div className="absolute inset-0 mix-blend-color-burn bg-white/10" />
            {/* Edge Shadow */}
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(5,5,7,0.8)]" />
          </GlareCard>
        </div>

      </div>
    </section>
  );
}
