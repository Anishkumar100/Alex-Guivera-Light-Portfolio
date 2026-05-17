'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import MagneticButton from '@/components/ui/MagneticButton';

const NEXT_PROJECTS = [
  {
    title: "Apex Financial",
    category: "UI/UX Architecture",
    image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=800&auto=format&fit=crop",
    link: "/projects/apex-financial"
  },
  {
    title: "Nebula Protocol",
    category: "Brand Identity",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=800&auto=format&fit=crop",
    link: "/projects/nebula-protocol"
  },
  {
    title: "Lumina Studio",
    category: "Motion Design",
    image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=800&auto=format&fit=crop",
    link: "/projects/lumina-studio"
  }
];

export default function ProjectFooter() {
  return (
    <>
      {/* Section 7: More Projects */}
      <section className="relative w-full bg-void px-6 py-32 md:px-12 md:py-40">
        <div className="mx-auto w-full max-w-[1400px]">
          
          <div className="mb-16 flex items-center justify-between">
            <h2 className="font-display text-[2rem] font-bold tracking-tight text-white md:text-[3rem]">
              More Work
            </h2>
            <Link href="/projects" className="group flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-text-dim transition-colors hover:text-accent-primary">
              View Archive
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {NEXT_PROJECTS.map((proj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
              >
                <Link href={proj.link} className="group relative flex w-full flex-col gap-6">
                  {/* Tilted Card Simulation */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-lg)] border border-[rgba(255,255,255,0.05)] bg-void-1 shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
                    <img src={proj.image} alt={proj.title} className="h-full w-full object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(108,99,255,0.5)] to-transparent opacity-0 transition-opacity duration-500 mix-blend-overlay group-hover:opacity-100" />
                  </div>
                  <div>
                    <span className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-text-dim">
                      {proj.category}
                    </span>
                    <h3 className="font-display text-[1.5rem] font-bold text-white transition-colors duration-300 group-hover:text-accent-primary">
                      {proj.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Section 8: Final Project CTA */}
      <section className="relative flex min-h-[50vh] w-full flex-col items-center justify-center overflow-hidden border-t border-[rgba(255,255,255,0.05)] bg-void py-32">
        
        {/* Subtle Background Beams Simulation */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] opacity-30" />

        <div className="relative z-10 flex w-full max-w-[800px] flex-col items-center px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 font-display text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[1.05] tracking-tight text-white"
          >
            Liked this project? <br />
            <span className="text-text-secondary">Let's make yours.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          >
            <Link href="/contact">
              <MagneticButton 
                className="!px-10 !py-5 font-display text-[1rem] font-bold uppercase tracking-widest text-void shadow-[0_0_40px_rgba(108,99,255,0.3)] transition-shadow duration-300 hover:shadow-[0_0_60px_rgba(108,99,255,0.6)]"
                style={{ backgroundImage: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))' }}
              >
                Start Your Project →
              </MagneticButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
