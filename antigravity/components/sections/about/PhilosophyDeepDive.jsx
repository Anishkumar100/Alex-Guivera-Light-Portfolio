'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

const BELIEFS = [
  {
    title: "LESS, MORE POWERFUL",
    desc: "Complexity is the enemy of execution. I strip away the superfluous until only the essential remains. What is left must hit with maximum impact.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3v18" />
        <circle cx="12" cy="12" r="5" fill="var(--accent-primary)" stroke="none" opacity="0.3" />
      </svg>
    )
  },
  {
    title: "EMOTION OVER INSTRUCTION",
    desc: "If you have to explain why something is good, it failed. Exceptional design is felt immediately before it is understood intellectually.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    )
  },
  {
    title: "OBSESSION IS A FEATURE",
    desc: "Good enough is a compromise. True differentiation comes from obsessing over details that 99% of people will never consciously notice.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
        <circle cx="12" cy="12" r="2" fill="var(--accent-secondary)" stroke="none" />
      </svg>
    )
  }
];

const WobbleCard = ({ belief, index }) => {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-12, 12]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group relative flex w-full flex-col justify-between rounded-[var(--radius-2xl)] border border-[rgba(10,9,20,0.08)] bg-[rgba(10,9,20,0.02)] p-10 shadow-2xl backdrop-blur-xl transition-colors duration-500 hover:bg-[rgba(10,9,20,0.05)] md:h-[450px]"
    >
      {/* Dynamic Hover Glow */}
      <div 
        className="pointer-events-none absolute inset-0 -z-10 rounded-[var(--radius-2xl)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(circle at center, rgba(108,99,255,0.15) 0%, transparent 70%)',
          boxShadow: 'inset 0 0 0 1px rgba(108,99,255,0.3)'
        }}
      />

      <div style={{ transform: "translateZ(40px)" }}>
        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(10,9,20,0.05)] text-[var(--text-primary)] shadow-[0_0_15px_rgba(10,9,20,0.05)] transition-transform duration-300 group-hover:scale-110 group-hover:text-accent-primary">
          {belief.icon}
        </div>
        <h3 className="mb-4 font-display text-[1.5rem] font-bold tracking-wide text-text-primary">
          {belief.title}
        </h3>
      </div>
      
      <div style={{ transform: "translateZ(20px)" }}>
        <p className="font-body text-[1.125rem] font-light leading-relaxed text-text-secondary">
          {belief.desc}
        </p>
      </div>
    </motion.div>
  );
};

export default function PhilosophyDeepDive() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 py-32 md:px-12">
      
      {/* ReactBits Aurora Background Approximation */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-50 mix-blend-multiply">
        <motion.div 
          animate={{ 
            x: [0, 100, -100, 0],
            y: [0, -100, 100, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute left-[20%] top-[20%] h-[50vw] w-[50vw] rounded-full bg-[radial-gradient(circle,rgba(108,99,255,0.15)_0%,transparent_60%)] blur-[80px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -150, 100, 0],
            y: [0, 100, -50, 0],
            scale: [1, 0.9, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute right-[10%] top-[40%] h-[40vw] w-[40vw] rounded-full bg-[radial-gradient(circle,rgba(255,60,172,0.1)_0%,transparent_60%)] blur-[80px]"
        />
        <motion.div 
          animate={{ 
            x: [0, 50, -50, 0],
            y: [0, 50, -50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] left-[30%] h-[60vw] w-[60vw] rounded-full bg-[radial-gradient(circle,rgba(0,245,212,0.1)_0%,transparent_60%)] blur-[80px]"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        
        <div className="mb-24 flex flex-col items-center text-center">
          <span className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-accent-secondary">
            Philosophy
          </span>
          <h2 className="font-display text-[clamp(3rem,6vw,5rem)] font-extrabold tracking-tight text-text-primary">
            What I Believe
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8 [perspective:1000px]">
          {BELIEFS.map((belief, idx) => (
            <WobbleCard key={idx} belief={belief} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
