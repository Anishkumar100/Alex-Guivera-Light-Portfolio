'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "Working with them felt like stepping into the future. The design wasn't just beautiful; it completely redefined our product's trajectory.",
    name: "Elena Rostova",
    role: "CEO, Aethel Dynamics"
  },
  {
    quote: "An absolute masterclass in visual storytelling. They took a complex, dry technical concept and turned it into an emotional experience.",
    name: "Marcus Chen",
    role: "Founder, Nexus AI"
  },
  {
    quote: "I've never seen someone obsess over micro-interactions the way they do. The final product feels alive, breathing, and inevitable.",
    name: "Sarah Jenkins",
    role: "VP Product, Oasis Systems"
  },
  {
    quote: "They don't just design interfaces; they engineer perception. Our conversion rates doubled within weeks of the new brand launch.",
    name: "David Althaus",
    role: "Director, Vora Capital"
  },
  {
    quote: "The rarest combination of extreme technical competence and visionary art direction. Uncompromising quality from day one.",
    name: "Maya Lin",
    role: "Creative Lead, Polymath"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  const goNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  // Auto-rotate
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(goNext, 5000);
    return () => clearInterval(interval);
  }, [isHovered, goNext]);

  const item = TESTIMONIALS[activeIndex];

  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden py-24 sm:py-32">

      <div className="relative z-10 mb-16 sm:mb-20 flex flex-col items-center text-center px-4">
        <span className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-accent-secondary">
          Testimonials
        </span>
        <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] font-extrabold tracking-tight text-text-primary">
          What They Say
        </h2>
      </div>

      {/* Testimonial Card — Single card, no drag */}
      <div
        className="relative w-full max-w-[700px] mx-auto px-4 sm:px-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative min-h-[300px] sm:min-h-[320px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60, filter: 'blur(4px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: direction * -60, filter: 'blur(4px)' }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col justify-between rounded-[var(--radius-xl)] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] p-8 sm:p-10 md:p-12 backdrop-blur-md"
            >
              {/* Decorative quote mark */}
              <div className="absolute right-8 top-8 text-6xl font-serif text-[rgba(255,255,255,0.04)] sm:right-10 sm:top-10 select-none">
                "
              </div>

              <p className="relative z-10 font-body text-[1.125rem] sm:text-[1.25rem] md:text-[1.375rem] font-light leading-relaxed text-text-primary mb-8 sm:mb-10">
                "{item.quote}"
              </p>

              <div className="relative z-10 flex flex-col">
                <span className="font-display text-[1rem] font-bold text-white">
                  {item.name}
                </span>
                <span className="mt-2 font-mono text-[11px] uppercase tracking-wider text-text-dim">
                  {item.role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation: Arrows + Dots */}
        <div className="mt-8 flex items-center justify-center gap-6">
          {/* Prev Arrow */}
          <button
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] text-text-dim transition-all duration-300 hover:border-white/30 hover:text-white hover:bg-white/5"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dot Indicators */}
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > activeIndex ? 1 : -1);
                  setActiveIndex(i);
                }}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? 'w-6 bg-white'
                    : 'w-2 bg-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.3)]'
                }`}
              />
            ))}
          </div>

          {/* Next Arrow */}
          <button
            onClick={goNext}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] text-text-dim transition-all duration-300 hover:border-white/30 hover:text-white hover:bg-white/5"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
