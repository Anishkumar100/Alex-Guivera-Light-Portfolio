'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const AWARDS = [
  { name: "Awwwards SOTD", org: "Awwwards", year: "2023" },
  { name: "CSS Design Awards", org: "CSSDA", year: "2022" },
  { name: "Behance Featured", org: "Adobe", year: "2021" },
  { name: "Communication Arts", org: "CommArts", year: "2024" },
  { name: "Red Dot Design Award", org: "Red Dot", year: "2023" }
];

export default function Awards() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const rows = gsap.utils.toArray('.award-row');
    
    // Stagger slide-in from alternating sides
    rows.forEach((row, i) => {
      gsap.from(row, {
        x: i % 2 === 0 ? -150 : 150,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: row,
          start: "top 90%",
        }
      });
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full overflow-hidden py-32">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-24 flex flex-col items-center text-center">
          <span className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-accent-secondary">
            Recognition
          </span>
          <h2 className="font-display text-[clamp(3rem,6vw,5rem)] font-extrabold tracking-tight text-text-primary">
            Awards
          </h2>
        </div>

        {/* Awards List */}
        <div className="flex flex-col border-t border-[rgba(10,9,20,0.05)]">
          {AWARDS.map((award, idx) => (
            <div 
              key={idx}
              className="award-row group relative flex cursor-default flex-col items-start justify-between border-b border-[rgba(10,9,20,0.05)] px-6 py-8 transition-colors duration-500 hover:bg-[rgba(10,9,20,0.02)] md:flex-row md:items-center md:px-10 md:py-12"
            >
              {/* Left Border appear on hover */}
              <div className="absolute left-0 top-0 h-full w-[4px] scale-y-0 bg-accent-primary origin-center transition-transform duration-300 group-hover:scale-y-100 shadow-[0_0_15px_var(--accent-primary)]" />
              
              {/* Left: Award Name */}
              <div className="md:w-[40%]">
                <h3 className="font-display text-[2rem] font-bold tracking-tight text-text-primary transition-transform duration-500 group-hover:translate-x-4">
                  {award.name}
                </h3>
              </div>

              {/* Center: Thin Separator Line */}
              <div className="mx-8 hidden h-[1px] w-full flex-grow bg-[rgba(10,9,20,0.05)] transition-colors duration-500 group-hover:bg-[rgba(10,9,20,0.15)] md:block" />

              {/* Right: Year + Organization */}
              <div className="mt-6 flex w-full justify-between md:mt-0 md:w-auto md:justify-end md:gap-12">
                <span className="font-mono text-[14px] uppercase tracking-widest text-text-secondary transition-colors duration-300 group-hover:text-accent-secondary">
                  {award.org}
                </span>
                <span className="font-mono text-[14px] text-text-dim">
                  {award.year}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
