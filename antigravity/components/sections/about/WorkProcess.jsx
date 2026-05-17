'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

// Subcomponents for the Bento Grid Cells

const CurrentObsession = () => {
  return (
    <div className="flex h-full w-full flex-col justify-between rounded-[var(--radius-lg)] border border-[rgba(10,9,20,0.06)] bg-[rgba(10,9,20,0.02)] p-8 backdrop-blur-md transition-colors duration-500 hover:border-accent-primary/50 hover:bg-[rgba(10,9,20,0.04)]">
      <div>
        <span className="font-mono text-[11px] uppercase tracking-widest text-accent-secondary">
          Cell 01
        </span>
        <h3 className="mt-4 font-display text-[2rem] font-bold text-text-primary">
          Current Obsessions
        </h3>
      </div>
      
      <div className="relative mt-8 h-[120px] w-full overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
        <motion.div
          animate={{ y: ["0%", "-50%"] }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity }}
          className="flex flex-col gap-4"
        >
          {/* Duplicate list for seamless infinite scroll */}
          {[1, 2].map((listIdx) => (
            <div key={listIdx} className="flex flex-col gap-4">
              <p className="font-body text-[1.125rem] font-light text-text-secondary">✦ Brutalist Architecture</p>
              <p className="font-body text-[1.125rem] font-light text-text-secondary">✦ Generative WebGL Shaders</p>
              <p className="font-body text-[1.125rem] font-light text-text-secondary">✦ Analog Synth Soundscapes</p>
              <p className="font-body text-[1.125rem] font-light text-text-secondary">✦ Swiss Typography Grids</p>
              <p className="font-body text-[1.125rem] font-light text-text-secondary">✦ Dark Matter Astrophysics</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const ToolsUsed = () => {
  const tools = ['Figma', 'React', 'GSAP', 'Next.js', 'Spline', 'Vercel'];
  return (
    <div className="flex h-full w-full flex-col justify-between rounded-[var(--radius-lg)] border border-[rgba(10,9,20,0.06)] bg-[rgba(10,9,20,0.02)] p-8 backdrop-blur-md transition-colors duration-500 hover:border-accent-primary/50 hover:bg-[rgba(10,9,20,0.04)]">
      <span className="font-mono text-[11px] uppercase tracking-widest text-accent-secondary">
        Cell 02
      </span>
      <div className="mt-6 flex flex-wrap gap-2">
        {tools.map((tool, i) => (
          <span key={i} className="rounded-md bg-void-2 px-3 py-1 font-mono text-[10px] text-text-dim">
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
};

const LocationTime = () => {
  return (
    <div className="group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[var(--radius-lg)] border border-[rgba(10,9,20,0.06)] bg-[rgba(10,9,20,0.02)] p-8 backdrop-blur-md transition-colors duration-500 hover:border-accent-primary/50 hover:bg-[rgba(10,9,20,0.04)]">
      <span className="font-mono text-[11px] uppercase tracking-widest text-accent-secondary z-10">
        Cell 03
      </span>
      <div className="mt-6 z-10">
        <h3 className="font-display text-[1.5rem] font-bold text-text-primary">Mumbai</h3>
        <p className="font-mono text-[12px] text-text-dim mt-1">GMT +5:30</p>
      </div>

      {/* Abstract Animated Globe/Grid */}
      <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full border border-accent-primary/30 opacity-50 transition-transform duration-700 group-hover:scale-125 group-hover:rotate-45">
        <div className="absolute left-1/2 top-0 h-full w-[1px] bg-accent-primary/30" />
        <div className="absolute left-0 top-1/2 h-[1px] w-full bg-accent-primary/30" />
      </div>
    </div>
  );
};

const ListeningTo = () => {
  return (
    <div className="group flex h-full w-full flex-col justify-between rounded-[var(--radius-lg)] border border-[rgba(10,9,20,0.06)] bg-[rgba(10,9,20,0.02)] p-8 backdrop-blur-md transition-colors duration-500 hover:border-accent-primary/50 hover:bg-[rgba(10,9,20,0.04)]">
      <span className="font-mono text-[11px] uppercase tracking-widest text-accent-secondary">
        Cell 04
      </span>
      <div className="flex h-full flex-col items-center justify-center pt-8">
        {/* Animated Audio Bars */}
        <div className="mb-8 flex items-end gap-1.5 h-12">
          {[1, 2, 3, 4, 5].map((bar) => (
            <motion.div
              key={bar}
              animate={{ height: ["20%", "100%", "30%", "80%", "20%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: bar * 0.1 }}
              className="w-1.5 bg-accent-primary rounded-t-sm"
            />
          ))}
        </div>
        <div className="text-center">
          <p className="font-mono text-[10px] uppercase tracking-widest text-text-dim mb-2">On Repeat</p>
          <h4 className="font-display text-[1.125rem] font-bold text-text-primary">Max Cooper</h4>
          <p className="font-body text-[0.875rem] text-text-secondary">Unspoken Words</p>
        </div>
      </div>
    </div>
  );
};

const Quote = () => {
  return (
    <div className="flex h-full w-full flex-col justify-center rounded-[var(--radius-lg)] border border-[rgba(10,9,20,0.06)] bg-[rgba(10,9,20,0.02)] p-8 md:p-12 backdrop-blur-md transition-colors duration-500 hover:border-accent-primary/50 hover:bg-[rgba(10,9,20,0.04)]">
      <span className="font-mono text-[11px] uppercase tracking-widest text-accent-secondary mb-6">
        Cell 05
      </span>
      <p className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-bold italic leading-tight text-text-primary">
        "Simplicity is not the absence of clutter, that's a consequence of simplicity. Simplicity is somehow essentially describing the purpose and place of an object and product."
      </p>
      <span className="mt-6 font-mono text-[12px] uppercase tracking-widest text-text-dim">
        — Jony Ive
      </span>
    </div>
  );
};

export default function WorkProcess() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative w-full overflow-hidden py-32">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-24 flex flex-col items-center text-center">
          <span className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-accent-secondary">
            Process
          </span>
          <h2 className="font-display text-[clamp(3rem,6vw,5rem)] font-extrabold tracking-tight text-text-primary">
            Inside the Studio
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-[minmax(200px,auto)_minmax(200px,auto)_auto] gap-4 md:gap-6"
        >
          {/* Cell 01: Current Obsession (2x2) */}
          <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-2 min-h-[300px]">
            <CurrentObsession />
          </motion.div>

          {/* Cell 02: Tools (1x1) */}
          <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1 min-h-[200px]">
            <ToolsUsed />
          </motion.div>

          {/* Cell 04: Listening To (1x2) -> placed in 4th column */}
          <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-2 min-h-[300px]">
            <ListeningTo />
          </motion.div>

          {/* Cell 03: Location (1x1) -> placed in 3rd column, 2nd row */}
          <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1 min-h-[200px]">
            <LocationTime />
          </motion.div>

          {/* Cell 05: Hero Quote (spans all 4 columns for solid foundation) */}
          <motion.div variants={itemVariants} className="md:col-span-4 md:row-span-1 mt-2 md:mt-0">
            <Quote />
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
