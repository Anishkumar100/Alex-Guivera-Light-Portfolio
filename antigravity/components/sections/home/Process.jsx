'use client';

import { useRef } from 'react';
import { motion } from 'motion/react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const STEPS = [
  {
    number: "01",
    title: "Discovery",
    desc: "I listen before I look. Every brief is a conversation that reveals the invisible architecture of your brand.",
    shape: (
      <svg viewBox="0 0 120 120" className="h-full w-full fill-none stroke-[rgba(80,70,229,0.25)]">
        <circle cx="50" cy="50" r="35" strokeWidth="0.5" strokeDasharray="3 5" />
        <circle cx="50" cy="50" r="25" strokeWidth="1" />
        <circle cx="50" cy="50" r="12" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="3" fill="var(--accent-primary)" stroke="none" />
        <line x1="50" y1="15" x2="50" y2="0" strokeWidth="0.5" />
        <line x1="50" y1="85" x2="50" y2="100" strokeWidth="0.5" />
        <line x1="15" y1="50" x2="0" y2="50" strokeWidth="0.5" />
        <line x1="85" y1="50" x2="100" y2="50" strokeWidth="0.5" />
        <path d="M75 25 L95 5" strokeWidth="0.5" strokeDasharray="2 3" />
        <circle cx="98" cy="3" r="3" strokeWidth="0.8" />
      </svg>
    )
  },
  {
    number: "02",
    title: "Strategy",
    desc: "Decisions made in data. Vision executed in instinct. Every pixel has a strategic purpose.",
    shape: (
      <svg viewBox="0 0 120 120" className="h-full w-full fill-none stroke-[rgba(80,70,229,0.25)]">
        <rect x="15" y="15" width="90" height="90" rx="2" strokeWidth="0.5" />
        <rect x="25" y="25" width="70" height="70" rx="2" strokeWidth="0.5" strokeDasharray="3 5" />
        <line x1="15" y1="55" x2="105" y2="55" strokeWidth="0.3" />
        <line x1="60" y1="15" x2="60" y2="105" strokeWidth="0.3" />
        <rect x="20" y="20" width="35" height="30" rx="1" strokeWidth="1" />
        <rect x="65" y="60" width="30" height="35" rx="1" strokeWidth="1" />
        <path d="M40 75 L40 95 L55 95" strokeWidth="1" strokeLinecap="round" />
        <circle cx="40" cy="75" r="2" fill="var(--accent-primary)" stroke="none" />
        <circle cx="55" cy="95" r="2" fill="var(--accent-primary)" stroke="none" />
      </svg>
    )
  },
  {
    number: "03",
    title: "Craft",
    desc: "Pixel by pixel. Frame by frame. Until the result feels inevitable and alive.",
    shape: (
      <svg viewBox="0 0 120 120" className="h-full w-full fill-none stroke-[rgba(80,70,229,0.25)]">
        <polygon points="60,8 108,35 108,85 60,112 12,85 12,35" strokeWidth="0.5" />
        <polygon points="60,22 94,42 94,78 60,98 26,78 26,42" strokeWidth="1" />
        <polygon points="60,36 80,48 80,72 60,84 40,72 40,48" strokeWidth="1.5" />
        <circle cx="60" cy="60" r="6" fill="var(--accent-primary)" fillOpacity="0.15" strokeWidth="1" />
        <line x1="60" y1="8" x2="60" y2="22" strokeWidth="0.5" />
        <line x1="108" y1="35" x2="94" y2="42" strokeWidth="0.5" />
        <line x1="12" y1="35" x2="26" y2="42" strokeWidth="0.5" />
      </svg>
    )
  },
  {
    number: "04",
    title: "Launch",
    desc: "Not just delivered — detonated. We don’t hand off; we ignite.",
    shape: (
      <svg viewBox="0 0 120 120" className="h-full w-full fill-none stroke-[rgba(80,70,229,0.25)]">
        <path d="M60 10 L65 50 L100 60 L65 70 L60 110 L55 70 L20 60 L55 50 Z" strokeWidth="1" />
        <circle cx="60" cy="60" r="8" fill="var(--accent-primary)" fillOpacity="0.1" strokeWidth="1.5" />
        <circle cx="60" cy="60" r="3" fill="var(--accent-primary)" stroke="none" />
        <line x1="60" y1="2" x2="60" y2="10" strokeWidth="0.5" strokeDasharray="2 2" />
        <line x1="60" y1="110" x2="60" y2="118" strokeWidth="0.5" strokeDasharray="2 2" />
        <line x1="2" y1="60" x2="20" y2="60" strokeWidth="0.5" strokeDasharray="2 2" />
        <line x1="100" y1="60" x2="118" y2="60" strokeWidth="0.5" strokeDasharray="2 2" />
        <path d="M30 30 L42 42" strokeWidth="0.5" />
        <path d="M90 30 L78 42" strokeWidth="0.5" />
        <path d="M30 90 L42 78" strokeWidth="0.5" />
        <path d="M90 90 L78 78" strokeWidth="0.5" />
      </svg>
    )
  }
];

export default function Process() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 50%',
          end: 'bottom 80%',
          scrub: true,
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden px-6 py-32 md:px-12">
      <div className="mx-auto w-full max-w-[1200px]">
        
        {/* Section Header */}
        <div className="mb-32 flex flex-col items-center text-center">
          <span className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-accent-secondary">
            Process
          </span>
          <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] font-extrabold tracking-tight text-text-primary">
            How I Work
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative mx-auto flex w-full flex-col">
          
          {/* Background Dashed Line */}
          <div className="absolute left-6 top-0 h-full w-[2px] border-l-2 border-dashed border-[rgba(10,9,20,0.06)] md:left-1/2 md:-translate-x-1/2" />
          
          {/* Animated Solid Line */}
          <div 
            ref={lineRef}
            className="absolute left-6 top-0 h-full w-[2px] origin-top bg-[var(--accent-primary)] md:left-1/2 md:-translate-x-1/2"
            style={{ boxShadow: 'var(--glow-primary)' }}
          />

          <div className="flex flex-col gap-24 md:gap-32">
            {STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative flex w-full flex-col md:flex-row ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  
                  {/* Central Timeline Dot */}
                  <div className="absolute left-6 top-1/2 z-10 h-4 w-4 -translate-x-[7px] -translate-y-1/2 rounded-full border-2 border-[var(--accent-primary)] bg-white md:left-1/2 transition-shadow duration-300 hover:shadow-[var(--shadow-accent)]" />

                  {/* Content Panel */}
                  <div className={`flex w-full pl-20 md:w-1/2 md:pl-0 ${isEven ? 'md:justify-end md:pr-24 md:text-right' : 'md:justify-start md:pl-24 md:text-left'}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className={`flex max-w-[400px] flex-col ${isEven ? 'md:items-end' : 'md:items-start'}`}
                    >
                      <span className="mb-2 font-mono text-[11px] tracking-[0.2em] text-accent-secondary">
                        {step.number}
                      </span>
                      <h3 className="mb-4 font-display text-[2rem] font-bold text-text-primary">
                        {step.title}
                      </h3>
                      <p className="font-body text-[1.125rem] font-light leading-relaxed text-text-secondary">
                        {step.desc}
                      </p>
                    </motion.div>
                  </div>

                  {/* Visual Geometry Panel */}
                  <div className={`hidden w-full items-center justify-center md:flex md:w-1/2 ${isEven ? 'md:pl-24' : 'md:pr-24'}`}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                      className="h-[200px] w-[200px]"
                    >
                      {step.shape}
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
