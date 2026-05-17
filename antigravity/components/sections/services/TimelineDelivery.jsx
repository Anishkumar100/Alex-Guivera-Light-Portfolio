'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TIMELINE_PHASES = [
  { id: 1, name: "Brief & Kickoff", time: "Day 1", position: "0%" },
  { id: 2, name: "Discovery", time: "Days 2-5", position: "25%" },
  { id: 3, name: "Craft & Design", time: "Days 6-20", position: "50%" },
  { id: 4, name: "Review & Refine", time: "Days 21-25", position: "75%" },
  { id: 5, name: "Launch", time: "Day 30", position: "100%" }
];

export default function TimelineDelivery() {
  const containerRef = useRef(null);
  const fillRef = useRef(null);
  const pointsRef = useRef([]);

  useGSAP(() => {
    // Animate the main fill bar width strictly based on scroll progress
    gsap.fromTo(fillRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",   // Start filling when section hits middle of screen
          end: "bottom 80%",  // Finish filling before section leaves
          scrub: 0.5,         // Adds a 0.5s smooth catch-up to the scroll bar
        }
      }
    );

    // Stagger reveal the text nodes so they don't pop in abruptly
    gsap.from(pointsRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full overflow-hidden py-32">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-24 flex flex-col items-center text-center">
          <span className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-accent-secondary">
            The Schedule
          </span>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tight text-text-primary">
            Timeline & Delivery
          </h2>
          <p className="mt-4 max-w-xl font-body text-[1.125rem] font-light text-text-secondary">
            Thirty days from kickoff to deployment. No dragging, no scope creep. Absolute precision.
          </p>
        </div>

        {/* The Timeline Track Container */}
        <div className="relative mx-auto mt-20 h-64 w-[90%] md:mt-32 md:h-40 md:w-full">
          
          {/* Base empty track */}
          <div className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded-full bg-[rgba(10,9,20,0.05)]" />
          
          {/* Animated Fill Track */}
          <div 
            ref={fillRef} 
            className="absolute left-0 top-1/2 h-[4px] w-full origin-left -translate-y-1/2 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary shadow-[0_0_20px_var(--accent-primary)]"
          />

          {/* Timeline Nodes */}
          {TIMELINE_PHASES.map((phase, idx) => {
            // Alternate text position up and down to prevent overlapping, especially on mobile
            const isTop = idx % 2 === 0;

            return (
              <div 
                key={phase.id}
                ref={el => pointsRef.current[idx] = el}
                className="absolute top-1/2 flex flex-col items-center -translate-x-1/2 -translate-y-1/2"
                style={{ left: phase.position }}
              >
                {/* Node Point */}
                <div className="z-10 h-5 w-5 rounded-full border-[3px] border-white bg-accent-secondary shadow-[0_0_15px_var(--accent-secondary)] transition-transform duration-300 hover:scale-150" />
                
                {/* Content */}
                <div 
                  className={`absolute flex w-[120px] flex-col items-center text-center md:w-[150px] ${
                    isTop ? 'bottom-8 md:bottom-10' : 'top-8 md:top-10'
                  }`}
                >
                  <span className="font-display text-[1rem] font-bold leading-tight text-[var(--text-primary)] md:text-[1.125rem]">
                    {phase.name}
                  </span>
                  <span className="mt-2 font-mono text-[11px] uppercase tracking-widest text-accent-primary md:text-[12px]">
                    {phase.time}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
