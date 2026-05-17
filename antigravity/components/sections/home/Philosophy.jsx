'use client';

import { motion } from 'motion/react';

const PANELS = [
  {
    number: "01",
    label: "FORM",
    title: "Form Follows Feeling",
    desc: "Aesthetic is not an afterthought; it is the primary interface of human connection. If a design does not evoke an emotional response, it has already failed its fundamental purpose.",
  },
  {
    number: "02",
    label: "CRAFT",
    title: "Obsession Over Output",
    desc: "The difference between good and extraordinary is hidden in the final 1%. It is the micro-interactions, the perfect easing curves, and the relentless pursuit of an impossible standard.",
  },
  {
    number: "03",
    label: "SPACE",
    title: "Silence Has Weight",
    desc: "Negative space is not empty space; it is the loudest element on the page. We design the void as carefully as the objects that inhabit it, guiding focus with absolute precision.",
  },
  {
    number: "04",
    label: "IMPACT",
    title: "Beauty That Converts",
    desc: "Visual excellence is not opposed to performance; it is the ultimate multiplier of trust. We build systems that are as ruthless in their conversion logic as they are breathtaking.",
  }
];

export default function Philosophy() {
  return (
    <section className="relative w-full overflow-hidden bg-void py-32 md:py-48">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-32 px-6 md:gap-48 md:px-12">
        {PANELS.map((panel, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 flex w-full flex-col md:flex-row md:items-center md:justify-between"
          >
            <div className="flex flex-1 flex-col">
              <span className="mb-6 font-mono text-[14px] uppercase tracking-[0.3em] text-accent-secondary">
                {panel.label}
              </span>
              <h3 className="mb-6 max-w-[600px] font-display text-[clamp(2.5rem,5vw,3.5rem)] font-bold leading-tight text-text-primary">
                {panel.title}
              </h3>
              <p className="max-w-[500px] font-body text-[1.125rem] leading-relaxed text-text-secondary">
                {panel.desc}
              </p>
            </div>

            <div className="relative mt-12 flex flex-1 items-center justify-start md:mt-0 md:justify-end">
              <span className="pointer-events-none select-none font-display text-[clamp(8rem,15vw,15rem)] font-extrabold leading-none text-text-dim opacity-50">
                {panel.number}
              </span>
            </div>
            
          </motion.div>
        ))}
      </div>
    </section>
  );
}
