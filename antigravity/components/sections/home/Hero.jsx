'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import MagneticButton from '@/components/ui/MagneticButton';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 200]);

  // Framer motion variants for SplitText mockup
  const textContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.8 }
    }
  };
  
  const charVariant = {
    hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
  };

  // Subtitle blur words
  const subtitleWords = "Creative Director & Visual Architect — crafting interfaces that live between imagination and obsession.".split(' ');

  return (
    <section ref={containerRef} className="relative flex min-h-screen w-full items-center justify-center overflow-hidden pt-20">
      {/* Black overlay page load split animation */}
      <motion.div 
        className="pointer-events-none absolute inset-0 z-50 flex"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 1.2, duration: 0.1 }}
      >
        <motion.div 
          className="h-full w-1/2 bg-black"
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
        />
        <motion.div 
          className="h-full w-1/2 bg-black"
          initial={{ x: 0 }}
          animate={{ x: '100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
        />
      </motion.div>

      {/* Spotlight glow */}
      <div className="absolute -top-40 -left-40 z-0 h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] rounded-full bg-white/10 blur-[120px]" />

      <div className="z-10 flex flex-col items-center px-4 sm:px-6 text-center">
        <motion.div style={{ y: yParallax }} className="flex flex-col items-center">
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="font-display text-[clamp(2.5rem,8vw,9rem)] font-extrabold leading-[0.9] text-text-primary tracking-tight"
          >
            DESIGN THAT
          </motion.h1>
          
          <motion.h1 
            variants={textContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-x-1 sm:gap-x-2 md:gap-x-4 font-display text-[clamp(2.5rem,8vw,9rem)] font-extrabold leading-[0.9] tracking-tight"
          >
            <span className="flex text-white mr-2 sm:mr-4 md:mr-6">
              {"DEFIES".split('').map((char, i) => (
                <motion.span key={`defies-${i}`} variants={charVariant} className="inline-block">{char}</motion.span>
              ))}
            </span>
            <span className="flex text-white/60">
              {"GRAVITY".split('').map((char, i) => (
                <motion.span key={`gravity-${i}`} variants={charVariant} className="inline-block">{char}</motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-8 max-w-[600px] font-body text-[clamp(1rem,2vw,1.25rem)] font-light leading-relaxed text-text-secondary"
          >
            {subtitleWords.map((word, i) => (
              <motion.span 
                key={i} 
                className="inline-block mr-1.5"
                initial={{ opacity: 0, filter: 'blur(8px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ delay: 1.2 + (i * 0.08), duration: 0.8 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:gap-8"
          >
            <MagneticButton variant="primary">View Work →</MagneticButton>
            <MagneticButton variant="ghost">About Me</MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Left: Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 sm:bottom-12 left-4 sm:left-6 md:left-12 hidden md:flex flex-col items-center gap-4"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-dim" style={{ writingMode: 'vertical-rl' }}>
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-text-dim" />
        </motion.div>
      </motion.div>

      {/* Bottom Right: Availability Badge */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 right-6 md:right-12 hidden md:flex items-center gap-3 rounded-full border border-[rgba(255,255,255,0.06)] bg-void-1/50 px-4 py-2 backdrop-blur-md"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
        </span>
        <span className="font-mono text-[11px] uppercase tracking-widest text-text-secondary">
          Available for Projects
        </span>
      </motion.div>
    </section>
  );
}
