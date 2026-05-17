'use client';

import { motion } from 'motion/react';

const LOGOS = [
  "Apex", "Vanguard", "Nexus", "Pulse", "Echo", "Lumina", "Horizon", "Nebula"
];

// Reusing the procedural SVG generation logic for high-fidelity placeholders
const generatePlaceholderSVG = (name) => {
  return (
    <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto opacity-40 grayscale transition-all duration-500 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0 md:h-8">
      <text 
        x="50%" 
        y="50%" 
        dominantBaseline="middle" 
        textAnchor="middle" 
        fill="currentColor" 
        className="font-display text-[28px] font-extrabold tracking-[0.2em] text-[var(--text-primary)]"
      >
        {name.toUpperCase()}
      </text>
    </svg>
  );
};

export default function Collaborations() {
  return (
    <section className="relative w-full py-32 md:py-40">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <span className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-accent-secondary">
            Network & Press
          </span>
          <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-extrabold tracking-tight text-[var(--text-primary)]">
            Trusted By Industry Leaders
          </h2>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-2 border-l border-t border-[rgba(10,9,20,0.05)] md:grid-cols-4">
          {LOGOS.map((logo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group flex aspect-[3/2] items-center justify-center border-b border-r border-[rgba(10,9,20,0.05)] p-6 transition-colors duration-500 hover:bg-[rgba(10,9,20,0.02)]"
            >
              {generatePlaceholderSVG(logo)}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
