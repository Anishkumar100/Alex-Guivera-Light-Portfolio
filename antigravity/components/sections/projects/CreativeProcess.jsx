'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const PROCESS_TYPES = [
  {
    id: "01",
    title: "Brand Ecosystems",
    desc: "A brand is not a logo; it is an operating system for perception. My process begins with absolute deconstruction of your market positioning. We establish the typographic voice, the color mathematics, and the core visual philosophy before generating the final comprehensive guideline.",
    tags: ["Positioning Strategy", "Typographic Systems", "Visual Identity"]
  },
  {
    id: "02",
    title: "Digital Architecture",
    desc: "Websites must function as high-performance software. I approach UI/UX from an engineering perspective, prioritizing component reusability, rigorous grid alignment, and frictionless user flows. The result is an interface that feels inevitable.",
    tags: ["UX Wireframing", "High-Fidelity UI", "Design Systems"]
  },
  {
    id: "03",
    title: "Motion & Interaction",
    desc: "Static design is dead. I inject physics into every digital touchpoint. Using GSAP and Framer Motion, I choreograph micro-interactions, scroll-linked animations, and spatial transitions that make the digital environment feel physical and alive.",
    tags: ["Kinetic Typography", "Physics Simulation", "Micro-Interactions"]
  }
];

const ProcessAccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-[rgba(255,255,255,0.05)]">
      <button
        onClick={onClick}
        className="group flex w-full items-center justify-between py-10 text-left transition-colors"
      >
        <div className="flex items-center gap-6 md:gap-10">
          <span className={`font-mono text-[1.25rem] transition-colors duration-300 ${isOpen ? 'text-accent-secondary' : 'text-text-dim'}`}>
            {item.id}
          </span>
          <h3 className={`font-display text-[1.5rem] md:text-[2.5rem] font-bold tracking-tight transition-colors duration-300 group-hover:text-white ${isOpen ? 'text-white' : 'text-text-primary'}`}>
            {item.title}
          </h3>
        </div>
        
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.4, ease: "backOut" }}
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${isOpen ? 'border-accent-secondary bg-accent-secondary/10 text-accent-secondary' : 'border-[rgba(255,255,255,0.1)] text-text-dim group-hover:border-[rgba(255,255,255,0.3)] group-hover:text-white'}`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pb-12 pl-[4.5rem] pr-6 md:pl-[6.5rem] md:pr-24">
              <p className="mb-8 font-body text-[1.125rem] font-light leading-relaxed text-text-secondary md:text-[1.25rem]">
                {item.desc}
              </p>
              <div className="flex flex-wrap gap-3">
                {item.tags.map((tag, idx) => (
                  <span key={idx} className="rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-text-dim transition-colors duration-300 hover:border-white/30 hover:text-white">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function CreativeProcess() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative w-full px-6 py-32 md:px-12">
      <div className="mx-auto w-full max-w-[1000px]">
        
        {/* Header */}
        <div className="mb-20 flex flex-col items-start">
          <span className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-accent-secondary">
            Methodology
          </span>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tight text-white">
            The Creative Process
          </h2>
        </div>

        {/* Accordions */}
        <div className="flex flex-col border-t border-[rgba(255,255,255,0.05)]">
          {PROCESS_TYPES.map((item, idx) => (
            <ProcessAccordionItem 
              key={item.id} 
              item={item} 
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
