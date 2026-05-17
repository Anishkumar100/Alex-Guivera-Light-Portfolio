'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const DESIGN_TOOLS = [
  { name: 'Figma', level: 95 },
  { name: 'Framer', level: 90 },
  { name: 'Adobe Suite', level: 85 },
  { name: 'Sketch', level: 70 },
  { name: 'Spline', level: 80 },
  { name: 'Blender', level: 60 }
];

const DEVELOPMENT = [
  { name: 'React', level: 95 },
  { name: 'Next.js', level: 90 },
  { name: 'Three.js', level: 75 },
  { name: 'GSAP', level: 95 },
  { name: 'Framer Motion', level: 90 },
  { name: 'CSS/Tailwind', level: 100 }
];

const DISCIPLINES = [
  'Brand Identity', 'Motion Design', '3D/Spatial',
  'UI/UX Design', 'Art Direction', 'Creative Strategy',
  'Design Systems', 'Prototyping', 'Interaction'
];

const ProgressBar = ({ name, level, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="mb-6 flex flex-col">
      <div className="mb-3 flex items-center justify-between">
        <span className="font-display text-[1rem] font-bold text-white">{name}</span>
      </div>
      <div className="h-[3px] w-full overflow-hidden rounded-full bg-[rgba(255,255,255,0.05)]">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1.2, delay: 0.2 + (index * 0.1), ease: "circOut" }}
          className="h-full rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary shadow-[0_0_10px_var(--accent-primary)]"
        />
      </div>
    </div>
  );
};

export default function SkillsMatrix() {
  const containerRef = useRef(null);

  // SplitText Mockup
  const title = "Weapons of Choice";
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 }
    }
  };
  const letterVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden px-6 py-32 md:px-12">
      
      {/* Background Grid and Dot */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        
        {/* Section Header (Aceternity LampEffect Approximation) */}
        <div className="relative mb-24 flex flex-col items-center justify-center text-center">
          {/* Lamp Glow */}
          <div className="absolute left-1/2 top-0 -z-10 h-[150px] w-[600px] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_top,rgba(108,99,255,0.35)_0%,transparent_70%)] blur-[60px]" />
          <div className="absolute left-1/2 top-0 -z-10 h-[2px] w-[400px] -translate-x-1/2 bg-gradient-to-r from-transparent via-accent-primary to-transparent" />
          
          <span className="mt-8 mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-accent-secondary">
            Skills Matrix
          </span>
          <motion.h2 
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex font-display text-[clamp(3rem,6vw,5rem)] font-extrabold tracking-tight text-text-primary"
          >
            {title.split("").map((char, i) => (
              <motion.span key={i} variants={letterVariants} className={char === " " ? "w-4 md:w-6" : ""}>
                {char}
              </motion.span>
            ))}
          </motion.h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
          
          {/* Category 1: Design Tools */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col rounded-[var(--radius-xl)] border border-[rgba(255,255,255,0.06)] bg-void-2 p-8 shadow-2xl backdrop-blur-md md:p-10"
          >
            <h3 className="mb-10 font-mono text-[13px] uppercase tracking-widest text-text-secondary">
              // Design Tools
            </h3>
            <div className="flex flex-col">
              {DESIGN_TOOLS.map((tool, idx) => (
                <ProgressBar key={idx} name={tool.name} level={tool.level} index={idx} />
              ))}
            </div>
          </motion.div>

          {/* Category 2: Development */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col rounded-[var(--radius-xl)] border border-[rgba(255,255,255,0.06)] bg-void-2 p-8 shadow-2xl backdrop-blur-md md:p-10"
          >
            <h3 className="mb-10 font-mono text-[13px] uppercase tracking-widest text-text-secondary">
              // Development
            </h3>
            <div className="flex flex-col">
              {DEVELOPMENT.map((tool, idx) => (
                <ProgressBar key={idx} name={tool.name} level={tool.level} index={idx} />
              ))}
            </div>
          </motion.div>

          {/* Category 3: Disciplines */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col rounded-[var(--radius-xl)] border border-[rgba(255,255,255,0.06)] bg-void-2 p-8 shadow-2xl backdrop-blur-md md:p-10"
          >
            <h3 className="mb-10 font-mono text-[13px] uppercase tracking-widest text-text-secondary">
              // Disciplines
            </h3>
            <div className="flex flex-wrap gap-4">
              {DISCIPLINES.map((discipline, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + (idx * 0.05), type: "spring" }}
                  className="group cursor-default rounded-full border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] px-6 py-3 transition-all duration-300 hover:border-accent-primary hover:bg-accent-primary/20 hover:shadow-[0_0_15px_rgba(108,99,255,0.2)]"
                >
                  <span className="font-display text-[1rem] font-bold tracking-wide text-text-secondary transition-colors duration-300 group-hover:text-white">
                    {discipline}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
