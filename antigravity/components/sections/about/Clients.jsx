'use client';

import { motion } from 'motion/react';

// Using refined typography-based logos to maintain high fidelity 
// while adhering strictly to the "no generic logos" constraint.
const LOGOS = [
  "AETHEL DYNAMICS", "NEXUS AI", "OASIS SYSTEMS", "VORA CAPITAL", 
  "POLYMATH", "LUMINEX", "SYNTHESIS", "VERTEX",
  "QUANTUM", "AEON CORP", "KINETIC", "OMNI LABS"
];

const LogoCard = ({ name }) => (
  <div className="group flex h-[140px] w-[260px] shrink-0 items-center justify-center rounded-[var(--radius-lg)] border border-[rgba(255,255,255,0.03)] bg-[rgba(255,255,255,0.01)] transition-all duration-500 hover:border-accent-primary/30 hover:bg-[rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(108,99,255,0.15)]">
    <span className="font-display text-[1.25rem] font-bold tracking-widest text-white opacity-20 transition-opacity duration-500 group-hover:opacity-100">
      {name}
    </span>
  </div>
);

export default function Clients() {
  const row1 = LOGOS.slice(0, 6);
  const row2 = LOGOS.slice(6, 12);

  // Triplicate the array to ensure the infinite scroll has enough content to wrap seamlessly.
  // 3 sets means scrolling exactly 1 set (-33.333%) creates a perfect visual loop.
  const duplicatedRow1 = [...row1, ...row1, ...row1];
  const duplicatedRow2 = [...row2, ...row2, ...row2];

  return (
    <section className="relative w-full overflow-hidden py-32">
      
      {/* Inline Keyframes for custom Marquee Animation without relying on tailwind.config mutation */}
      <style>{`
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-100% / 3)); }
        }
        @keyframes scrollRight {
          from { transform: translateX(calc(-100% / 3)); }
          to { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scrollLeft 35s linear infinite;
        }
        .animate-scroll-right {
          animation: scrollRight 35s linear infinite;
        }
        .pause-on-hover:hover .animate-scroll-left,
        .pause-on-hover:hover .animate-scroll-right {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mb-16 flex w-full flex-col items-center justify-center">
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent-secondary">
          Trusted By
        </span>
      </div>

      <div className="pause-on-hover relative flex w-full flex-col gap-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        
        {/* Row 1: Moves Left */}
        <div className="flex w-[fit-content]">
          <div className="animate-scroll-left flex gap-6 pr-6">
            {duplicatedRow1.map((name, idx) => (
              <LogoCard key={`r1-${idx}`} name={name} />
            ))}
          </div>
        </div>

        {/* Row 2: Moves Right */}
        <div className="flex w-[fit-content]">
          <div className="animate-scroll-right flex gap-6 pr-6">
            {duplicatedRow2.map((name, idx) => (
              <LogoCard key={`r2-${idx}`} name={name} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
