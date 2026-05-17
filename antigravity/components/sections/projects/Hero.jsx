'use client';

import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative flex h-[70vh] min-h-[600px] w-full flex-col items-center justify-center overflow-hidden pt-20">
      
      <div className="relative z-10 flex w-full flex-col items-center px-6">
        
        {/* Decorative Background Text */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03]">
          <span className="font-display text-[20vw] font-bold leading-none tracking-tighter text-white">
            ARCHIVE
          </span>
        </div>

        {/* Headline */}
        <div className="relative flex w-full max-w-[1400px] flex-col items-center justify-center py-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-6 flex items-center gap-4"
          >
            <span className="h-[1px] w-12 bg-accent-secondary" />
            <span className="font-mono text-[12px] uppercase tracking-widest text-accent-secondary">
              Selected Works
            </span>
            <span className="h-[1px] w-12 bg-accent-secondary" />
          </motion.div>

          <motion.h1 
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-center font-display text-[clamp(4.5rem,14vw,14rem)] font-extrabold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40"
          >
            PROJECTS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 max-w-2xl text-center font-body text-[1.125rem] font-light leading-relaxed text-text-secondary"
          >
            A curated collection of digital experiences, where engineering precision meets obsessive aesthetic standards.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
