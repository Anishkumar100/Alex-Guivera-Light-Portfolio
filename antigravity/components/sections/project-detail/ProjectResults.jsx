'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'motion/react';

function ResultCounter({ value, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => setDisplayValue(Math.round(latest))
      });
      return controls.stop;
    }
  }, [value, isInView]);

  return (
    <span ref={ref} className="font-display text-[3.5rem] font-bold text-white md:text-[5rem]">
      {prefix}{displayValue}{suffix}
    </span>
  );
}

export default function ProjectResults() {
  const results = [
    { value: 42, suffix: "%", desc: "Increase in User Retention", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
    { value: 12, suffix: "ms", desc: "Interaction Latency Reached", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { value: 100, suffix: "+", desc: "Reusable Components Built", icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" }
  ];

  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-void-2 py-32 md:py-40">
      
      {/* Aurora Background Simulation */}
      <div className="absolute inset-0 z-0 opacity-30 mix-blend-screen">
        <motion.div 
          animate={{ 
            x: ["-20%", "20%", "-20%"],
            y: ["-10%", "10%", "-10%"]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 top-0 h-[80vh] w-[80vw] rounded-[100%] bg-accent-primary blur-[150px]"
        />
        <motion.div 
          animate={{ 
            x: ["20%", "-20%", "20%"],
            y: ["10%", "-10%", "10%"]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute right-0 bottom-0 h-[80vh] w-[80vw] rounded-[100%] bg-[#4f46e5] blur-[150px]"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-12">
        
        <div className="mb-20 text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
            The Impact
          </span>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 lg:gap-16">
          {results.map((res, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="flex flex-col items-center text-center rounded-[var(--radius-xl)] bg-void/50 p-10 backdrop-blur-md border border-[rgba(255,255,255,0.05)] shadow-2xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent-primary/20 text-accent-primary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={res.icon} />
                </svg>
              </div>
              <ResultCounter value={res.value} suffix={res.suffix} prefix={res.prefix} />
              <p className="mt-4 font-body text-[1.125rem] font-light text-text-secondary">
                {res.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
