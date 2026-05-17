'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function ProjectHero({ project }) {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  
  // Subtle parallax on the background image
  const y = useTransform(scrollY, [0, 1000], ['0%', '20%']);

  return (
    <section ref={ref} className="relative flex h-[100vh] min-h-[600px] w-full items-end overflow-hidden bg-white">
      
      {/* Parallax Background Image */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 h-[120%] w-full">
        <img 
          src={project.heroImage} 
          alt={project.title} 
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Extreme Gradient Overlay for text legibility */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[rgba(5,5,7,0.4)] to-white" />

      {/* Spotlighting / Vignette */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,7,0.5)_100%)]" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex w-full max-w-[1400px] flex-col px-6 pb-20 md:px-12 md:pb-32">
        
        <div className="flex w-full flex-col justify-end">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 flex items-center justify-between"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent-secondary">
              {project.category}
            </span>
            <span className="font-mono text-[12px] uppercase tracking-widest text-text-dim">
              {project.year}
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 font-display text-[clamp(3.5rem,8vw,8rem)] font-extrabold leading-[1] tracking-tighter text-[var(--text-primary)] drop-shadow-xl"
          >
            {project.title}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-wrap gap-3"
          >
            {project.tags.map((tag, idx) => (
              <span key={idx} className="rounded-full border border-[rgba(10,9,20,0.1)] bg-[rgba(10,9,20,0.03)] px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-text-secondary backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </motion.div>

        </div>
      </div>

    </section>
  );
}
