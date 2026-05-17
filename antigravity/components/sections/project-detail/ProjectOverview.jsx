'use client';

import { motion } from 'motion/react';

export default function ProjectOverview() {
  return (
    <section className="relative w-full bg-white px-6 py-32 md:px-12 md:py-40">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-16 lg:flex-row lg:gap-24">
        
        {/* Left: Challenge */}
        <div className="flex w-full flex-col lg:w-7/12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="mb-6 block font-mono text-[11px] uppercase tracking-[0.2em] text-accent-secondary">
              The Challenge
            </span>
            <h2 className="mb-8 font-display text-[2rem] font-bold leading-tight text-[var(--text-primary)] md:text-[2.5rem]">
              Legacy architecture was suffocating the product's scale. They needed a zero-latency interface that didn't compromise on visual fidelity.
            </h2>
            <div className="flex flex-col gap-6 font-body text-[1.125rem] font-light leading-relaxed text-text-secondary">
              <p>
                Quantum Lab had spent 4 years building one of the most powerful backend compute engines in the world, but their frontend interface was still treating the platform like a standard CRUD app. Users were overwhelmed by data density, and interaction latency was causing a 14% drop-off in the core funnel.
              </p>
              <p>
                The brief was absolute: Strip away 60% of the visual noise, introduce a physics-based motion system to guide the eye naturally, and rebuild the entire component library from scratch to ensure a constant 60fps render cycle even when rendering 10,000+ nodes.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right: The Solution */}
        <div className="flex w-full items-start lg:w-5/12 lg:pt-12">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col border-l-2 border-accent-primary bg-[rgba(10,9,20,0.02)] p-8 md:p-10"
          >
            <span className="mb-6 block font-mono text-[11px] uppercase tracking-[0.2em] text-accent-primary">
              The Solution
            </span>
            <p className="font-display text-[1.5rem] font-medium leading-snug text-[var(--text-primary)] md:text-[1.75rem]">
              We designed an interface that feels less like standard software and more like a high-performance vehicle—utilizing dark-void aesthetics and inevitable physics interactions.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
