'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const PROCESS_STEPS = [
  {
    id: "01",
    title: "Discovery & Audit",
    desc: "We begin by breaking down what currently exists. I analyze your market positioning, dissect competitors, and extract the raw, unpolished truth of what your brand needs to achieve. No assumptions, only data and deeply probing questions.",
    bullets: ["Stakeholder Interviews", "Competitor Matrix Analysis", "Current Asset Audit", "Goal Alignment"]
  },
  {
    id: "02",
    title: "Strategy & Architecture",
    desc: "Before a single pixel is placed, the foundation is built. We define the user journeys, the brand voice, and the underlying logic that will dictate every design decision moving forward. This is where the blueprint is finalized.",
    bullets: ["Information Architecture", "User Personas & Journeys", "Brand Voice Definition", "Technical Requirements"]
  },
  {
    id: "03",
    title: "Concept Exploration",
    desc: "The messy, creative phase. I generate multiple distinct visual directions that solve the strategic problems defined in Phase 2. We push boundaries, test aesthetics, and establish the visual language.",
    bullets: ["Moodboards & Stylescapes", "Initial Typographic Systems", "Color Theory Testing", "Key Screen Mockups"]
  },
  {
    id: "04",
    title: "Production & Craft",
    desc: "Once a direction is chosen, obsession takes over. Every screen, component, and interaction is meticulously crafted. The design system is formalized, ensuring absolute consistency across the entire digital ecosystem.",
    bullets: ["High-Fidelity UI Design", "Component Library Setup", "Interaction Choreography", "Edge Case Design"]
  },
  {
    id: "05",
    title: "Refinement & QA",
    desc: "Design is tested against reality. We prototype the flows, stress-test the UI across breakpoints, and refine the micro-interactions until the experience feels completely frictionless and inevitable.",
    bullets: ["Interactive Prototyping", "Responsive Stress-Testing", "Motion Refinement", "Usability Heuristics Check"]
  },
  {
    id: "06",
    title: "Handoff & Launch",
    desc: "A seamless transition from design to development. I provide granular documentation, perfectly organized files, and work closely with engineering teams to ensure the final coded product matches the vision exactly.",
    bullets: ["Developer Handoff Specs", "Asset Exporting", "Implementation Support", "Post-Launch Review"]
  }
];

const AccordionItem = ({ step, isOpen, onClick }) => {
  return (
    <motion.div 
      layout
      onClick={onClick}
      className={`group relative cursor-pointer border-b border-[rgba(255,255,255,0.05)] transition-colors duration-500 hover:bg-[rgba(255,255,255,0.01)] ${isOpen ? 'bg-[rgba(255,255,255,0.02)]' : ''}`}
    >
      {/* Active Left Border Indicator */}
      <motion.div 
        initial={false}
        animate={{ scaleY: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute left-0 top-0 h-full w-[3px] origin-top bg-accent-primary shadow-[0_0_15px_var(--accent-primary)]"
      />

      <div className="flex items-center justify-between px-6 py-8 md:px-12 md:py-10">
        <div className="flex items-center gap-8 md:gap-16">
          <motion.span 
            animate={{ 
              color: isOpen ? 'var(--text-primary)' : 'var(--text-dim)',
              textShadow: isOpen ? '0 0 30px rgba(108,99,255,0.5)' : 'none'
            }}
            transition={{ duration: 0.5 }}
            className="font-display text-[3rem] font-extrabold tracking-tighter md:text-[5rem]"
          >
            {step.id}
          </motion.span>
          <h3 className="font-display text-[1.25rem] font-bold tracking-tight text-white md:text-[1.75rem]">
            {step.title}
          </h3>
        </div>
        
        {/* Toggle Icon */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgba(255,255,255,0.1)] text-white"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-6 pb-10 pl-[6.5rem] md:px-12 md:pb-12 md:pl-[12rem]">
              <p className="mb-8 max-w-3xl font-body text-[1.125rem] font-light leading-relaxed text-text-secondary">
                {step.desc}
              </p>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {step.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-secondary shadow-[0_0_8px_var(--accent-secondary)]" />
                    <span className="font-mono text-[13px] text-text-dim">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function ProcessExpanded() {
  const [openIndex, setOpenIndex] = useState(0); // First one open by default

  return (
    <section className="relative w-full py-32">
      <div className="mx-auto w-full max-w-[1200px]">
        
        {/* Section Header */}
        <div className="mb-20 flex flex-col items-center text-center px-6">
          <span className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-accent-secondary">
            Methodology
          </span>
          <h2 className="font-display text-[clamp(3rem,6vw,5rem)] font-extrabold tracking-tight text-text-primary">
            How It Unfolds
          </h2>
        </div>

        {/* Accordion List */}
        <motion.div layout className="flex flex-col border-t border-[rgba(255,255,255,0.05)]">
          {PROCESS_STEPS.map((step, idx) => (
            <AccordionItem 
              key={step.id} 
              step={step} 
              isOpen={openIndex === idx} 
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
