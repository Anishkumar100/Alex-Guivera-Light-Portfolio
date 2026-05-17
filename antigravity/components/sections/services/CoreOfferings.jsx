'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';

const SERVICES = [
  {
    id: 1,
    title: "Brand Identity",
    tagline: "From idea to icon.",
    desc: "I don't just design logos; I architect visual ecosystems. Every brand I build is rooted in deep strategy, designed to resonate instantly and endure indefinitely.",
    deliverables: ["Logo Suite", "Type System", "Color Palette", "Guidelines"],
    price: "Starting at $5,000",
    accentText: "text-accent-primary",
    spotlightColor: "rgba(108, 99, 255, 0.15)",
    borderGlow: "group-hover:border-accent-primary/50",
    badge: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10 text-[var(--text-primary)] transition-colors duration-300 group-hover:text-accent-primary">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
        <circle cx="12" cy="10" r="2" fill="currentColor" stroke="none" />
      </svg>
    )
  },
  {
    id: 2,
    title: "UI/UX Design",
    tagline: "Logic made beautiful.",
    desc: "Designing digital products that feel inevitable. I combine rigorous usability principles with uncompromising aesthetics to create interfaces users don't just use, but love.",
    deliverables: ["Wireframing", "Prototyping", "Visual Design", "Design Systems"],
    price: "Starting at $8,500",
    accentText: "text-accent-secondary",
    spotlightColor: "rgba(0, 245, 212, 0.15)",
    borderGlow: "group-hover:border-accent-secondary/50",
    badge: "MOST REQUESTED",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10 text-[var(--text-primary)] transition-colors duration-300 group-hover:text-accent-secondary">
        <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9h18M9 21V9" />
        <circle cx="15" cy="15" r="2" fill="currentColor" stroke="none" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Motion & 3D",
    tagline: "Physics-defying interaction.",
    desc: "Static is dead. I inject life into digital experiences through high-performance WebGL, GSAP timelines, and physics-based interactions that demand attention.",
    deliverables: ["WebGL Shaders", "Scroll Animations", "Interactions", "3D Elements"],
    price: "Starting at $6,000",
    accentText: "text-accent-hot",
    spotlightColor: "rgba(255, 60, 172, 0.15)",
    borderGlow: "group-hover:border-accent-hot/50",
    badge: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10 text-[var(--text-primary)] transition-colors duration-300 group-hover:text-accent-hot">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
        <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
      </svg>
    )
  }
];

const ServiceCard = ({ service, index }) => {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-2xl)] border border-[rgba(10,9,20,0.06)] bg-[rgba(10,9,20,0.02)] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 md:p-10 ${service.borderGlow} ${service.badge ? 'shadow-[0_0_30px_rgba(0,245,212,0.05)]' : ''}`}
    >
      {/* Spotlight Effect Layer */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${service.spotlightColor}, transparent 40%)`,
        }}
      />

      <div className="relative z-10 flex flex-grow flex-col">
        {/* Header */}
        <div className="mb-10 flex items-start justify-between">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[rgba(10,9,20,0.03)] border border-[rgba(10,9,20,0.05)] shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:bg-[rgba(10,9,20,0.06)]">
            {service.icon}
          </div>
          {service.badge && (
            <span className="rounded-full border border-accent-secondary/30 bg-accent-secondary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent-secondary">
              {service.badge}
            </span>
          )}
        </div>

        {/* Titles */}
        <div className="mb-6">
          <h3 className="mb-2 font-display text-[2.5rem] font-extrabold tracking-tight text-[var(--text-primary)]">
            {service.title}
          </h3>
          <p className={`font-display text-[1.125rem] italic tracking-wide ${service.accentText}`}>
            {service.tagline}
          </p>
        </div>

        {/* Description */}
        <p className="mb-10 flex-grow font-body text-[1.125rem] font-light leading-relaxed text-text-secondary">
          {service.desc}
        </p>

        {/* Deliverables */}
        <div className="mb-10">
          <span className="mb-4 block font-mono text-[11px] uppercase tracking-widest text-text-dim">
            Deliverables
          </span>
          <div className="flex flex-wrap gap-2">
            {service.deliverables.map((item, i) => (
              <span key={i} className="rounded-md bg-[rgba(10,9,20,0.03)] border border-[rgba(10,9,20,0.05)] px-3 py-1.5 font-mono text-[11px] text-text-secondary transition-colors duration-300 group-hover:border-[rgba(10,9,20,0.1)] group-hover:text-[var(--text-primary)]">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Footer: Price and CTA */}
        <div className="mt-auto flex items-center justify-between border-t border-[rgba(10,9,20,0.05)] pt-8">
          <span className={`font-mono text-[14px] ${service.accentText}`}>
            {service.price}
          </span>
          <button className="group/btn relative flex items-center gap-2 overflow-hidden rounded-full border border-[rgba(10,9,20,0.1)] bg-transparent px-6 py-2 transition-colors duration-300 hover:border-[var(--accent-primary)] hover:bg-[var(--accent-primary)]">
            <span className="font-mono text-[12px] uppercase tracking-widest text-[var(--text-primary)] transition-colors duration-300 group-hover/btn:text-white">
              Inquire
            </span>
            <span className="text-[var(--text-primary)] transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:text-white">
              →
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default function CoreOfferings() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="relative w-full px-6 py-32 md:px-12">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8">
          {SERVICES.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
