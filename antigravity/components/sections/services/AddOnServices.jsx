'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

const ADDONS = [
  {
    id: 1,
    title: "Strategy Consultation",
    desc: "A deep dive into your market positioning, resulting in a comprehensive strategic roadmap.",
    price: "$1,200 / session",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20V10m0 0l-3 3m3-3l3 3M12 4a8 8 0 00-8 8" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Design System Audit",
    desc: "A surgical breakdown of your existing UI components to identify friction and inconsistency.",
    price: "$2,500 flat",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Micro-interactions",
    desc: "Bespoke GSAP & Framer Motion animations to breathe life into your static interfaces.",
    price: "Starts at $1,800",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Art Direction",
    desc: "Guiding external photographers, 3D artists, or copywriters to ensure absolute brand alignment.",
    price: "$150 / hour",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  }
];

const TiltedCard = ({ addon, index }) => {
  const ref = useRef(null);

  // Motion values for mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth the mouse position to create a heavy, glassy feel
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

  // Transform coordinates into rotation (up to 12 degrees)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to center of card (-0.5 to 0.5)
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    // Reset to flat state when mouse leaves
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: "1000px" }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="group relative flex h-full flex-col justify-between rounded-[var(--radius-xl)] border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)] p-8 transition-colors duration-500 hover:border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.04)]"
      >
        {/* Inner Content translated slightly on Z-axis to enhance 3D pop */}
        <div style={{ transform: "translateZ(30px)" }}>
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.03)] text-accent-secondary shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:bg-accent-secondary/10">
              {addon.icon}
            </div>
            <h3 className="font-display text-[1.25rem] font-bold text-white">
              {addon.title}
            </h3>
          </div>
          
          <p className="mb-8 font-body text-[1.05rem] font-light leading-relaxed text-text-secondary">
            {addon.desc}
          </p>
        </div>

        <div style={{ transform: "translateZ(20px)" }} className="mt-auto flex items-center justify-between border-t border-[rgba(255,255,255,0.05)] pt-6 transition-colors duration-500 group-hover:border-[rgba(255,255,255,0.1)]">
          <span className="font-mono text-[13px] text-accent-primary">
            {addon.price}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-widest text-text-dim transition-colors group-hover:text-white">
            Add-On →
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default function AddOnServices() {
  return (
    <section className="relative w-full px-6 py-32 md:px-12">
      <div className="mx-auto w-full max-w-[1200px]">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tight text-text-primary">
            A La Carte
          </h2>
          <p className="mt-4 max-w-xl font-body text-[1.125rem] font-light text-text-secondary">
            Standalone strategic engagements and specialized craft for when you don't need a full rebuild.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {ADDONS.map((addon, idx) => (
            <TiltedCard key={addon.id} addon={addon} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
