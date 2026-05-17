'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const PROCESS_STEPS = [
  {
    phase: "01",
    title: "Deconstruction",
    desc: "We started by tearing down the existing 400-component library. Every element was audited for performance bottlenecks, accessibility failures, and visual inconsistencies.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
  },
  {
    phase: "02",
    title: "Physics Prototyping",
    desc: "Before writing a single line of production code, we spent 3 weeks in Framer prototyping the exact spring mathematics required to make the interface feel tactile and immediate.",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop"
  },
  {
    phase: "03",
    title: "System Architecture",
    desc: "We rebuilt the component foundation using a strict atomic design methodology, ensuring that every button, dropdown, and chart shared the same underlying motion and style tokens.",
    image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=800&auto=format&fit=crop"
  },
  {
    phase: "04",
    title: "Implementation & QA",
    desc: "The final phase involved integrating the new design system into the existing React application, carefully ensuring zero regressions in their complex data-fetching logic.",
    image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=800&auto=format&fit=crop"
  }
];

export default function ProjectProcess() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section ref={containerRef} className="relative w-full bg-white px-6 py-32 md:px-12 md:py-40">
      <div className="mx-auto w-full max-w-[1200px]">
        
        <div className="mb-24 flex flex-col items-center text-center">
          <span className="mb-6 block font-mono text-[11px] uppercase tracking-[0.2em] text-accent-secondary">
            Methodology
          </span>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-tight text-[var(--text-primary)]">
            Process Documentation
          </h2>
        </div>

        <div className="relative flex flex-col gap-24 md:gap-40">
          
          {/* Vertical Progress Line (Desktop) */}
          <div className="absolute left-1/2 top-0 hidden h-full w-[1px] -translate-x-1/2 bg-[rgba(10,9,20,0.05)] md:block">
            <motion.div 
              className="w-full origin-top bg-accent-primary"
              style={{ scaleY: scrollYProgress, height: '100%' }}
            />
          </div>

          {PROCESS_STEPS.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className={`relative flex flex-col md:flex-row md:items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* Text Content */}
                <div className={`flex w-full flex-col md:w-1/2 ${isEven ? 'md:pr-20 lg:pr-32 text-left md:text-right md:items-end' : 'md:pl-20 lg:pl-32 text-left md:items-start'}`}>
                  <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-4 font-mono text-[2rem] font-bold text-accent-primary opacity-50"
                  >
                    {step.phase}
                  </motion.span>
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-6 font-display text-[2rem] font-bold text-[var(--text-primary)] md:text-[2.5rem]"
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="font-body text-[1.125rem] font-light leading-relaxed text-text-secondary"
                  >
                    {step.desc}
                  </motion.p>
                </div>

                {/* Node Dot (Desktop) */}
                <div className="absolute left-1/2 top-1/2 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-accent-primary md:block" />

                {/* Image */}
                <div className={`mt-10 flex w-full md:mt-0 md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16'}`}>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="aspect-video w-full overflow-hidden rounded-[var(--radius-xl)] border border-[rgba(10,9,20,0.05)] shadow-2xl"
                  >
                    <img src={step.image} alt={step.title} className="h-full w-full object-cover grayscale transition-all duration-500 hover:scale-105 hover:grayscale-0" />
                  </motion.div>
                </div>
                
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
