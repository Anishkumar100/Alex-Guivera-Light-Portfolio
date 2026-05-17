'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useSpring, useTransform } from 'motion/react';
import MagneticButton from '@/components/ui/MagneticButton';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ProjectCard = ({ project, className, large = false }) => {
  const ref = useRef(null);

  const springConfig = { stiffness: 300, damping: 30, mass: 0.5 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
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
        rotateY: useTransform(x, [-0.5, 0.5], [-6, 6]),
        rotateX: useTransform(y, [-0.5, 0.5], [6, -6]),
        transformStyle: 'preserve-3d',
      }}
      className={`group relative flex flex-col justify-end overflow-hidden rounded-[var(--radius-xl)] border border-[rgba(10,9,20,0.06)] bg-void-2 cursor-pointer transition-colors duration-500 hover:border-[rgba(10,9,20,0.12)] ${className}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 transition-transform duration-700 ease-out group-hover:scale-105">
        {project.image && <img src={project.image} alt={project.name} className="h-full w-full object-cover" />}
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-white via-white/40 to-transparent" />
      <div className="absolute inset-0 z-10 bg-[rgba(10,9,20,0.03)] opacity-0 transition-opacity duration-500 mix-blend-multiply group-hover:opacity-100" />

      {/* Content */}
      <div
        className="relative z-20 flex flex-col p-6 sm:p-10"
        style={{ transform: 'translateZ(40px)' }}
      >
        <div className="mb-4 flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-widest text-text-dim transition-colors group-hover:text-text-secondary">
            {project.year} · {project.category}
          </span>
        </div>

        <h3 className={`font-display font-extrabold text-[var(--text-primary)] ${large ? 'text-[clamp(1.5rem,3vw,2.5rem)]' : 'text-[clamp(1.25rem,2vw,1.75rem)]'}`}>
          {project.name}
        </h3>

        <div className="mt-4 overflow-hidden max-h-0 opacity-0 transition-all duration-500 group-hover:max-h-[40px] group-hover:mt-6 group-hover:opacity-100">
          <span className="inline-flex items-center font-body text-[14px] font-medium text-accent-secondary">
            View Project <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">→</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default function SelectedWork() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    gsap.fromTo(headerRef.current,
      { y: 80, opacity: 0, filter: 'blur(8px)' },
      {
        y: 0, opacity: 1, filter: 'blur(0px)',
        duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 75%' }
      }
    );

    gsap.fromTo(cardsRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0, opacity: 1,
        duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 60%' }
      }
    );
  }, { scope: containerRef });

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const projects = [
    { name: "Aethel", year: "2024", category: "Brand Identity", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop" },
    { name: "Nexus", year: "2023", category: "UI/UX Design", image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1000&auto=format&fit=crop" },
    { name: "Oasis", year: "2023", category: "Motion Graphics", image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=1000&auto=format&fit=crop" }
  ];

  return (
    <section ref={containerRef} className="relative w-full py-[clamp(4rem,8vw,8rem)] px-4 sm:px-6 md:px-12 overflow-hidden">

      <div className="relative z-10 mx-auto w-full max-w-[1400px]">

        {/* Section Header */}
        <div className="relative mb-20 sm:mb-24 flex flex-col items-center justify-center text-center" ref={headerRef}>
          <div className="absolute left-1/2 top-1/2 -z-10 h-[100px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(80,70,229,0.06)] blur-[80px]" />
          <span className="mb-4 font-mono text-[11px] tracking-[0.25em] text-accent-secondary uppercase">
            Selected
          </span>
          <h2 className="font-display text-[clamp(3rem,7vw,7rem)] font-extrabold leading-none tracking-tight text-text-primary">
            WORK
          </h2>
        </div>

        {/* Asymmetric Grid — NO parallax, cards stay in bounds */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-12 lg:gap-8">

          {/* Card 1: Large focus project */}
          <div className="lg:col-span-7 [perspective:1000px]" ref={addToRefs}>
            <ProjectCard project={projects[0]} large={true} className="h-[300px] sm:h-[400px] lg:h-[650px] w-full" />
          </div>

          {/* Cards 2 & 3: Stacked secondary projects */}
          <div className="flex flex-col gap-4 sm:gap-6 lg:col-span-5 lg:gap-8">
            <div className="[perspective:1000px]" ref={addToRefs}>
              <ProjectCard project={projects[1]} className="h-[250px] sm:h-[280px] lg:h-[305px] w-full" />
            </div>
            <div className="[perspective:1000px]" ref={addToRefs}>
              <ProjectCard project={projects[2]} className="h-[250px] sm:h-[280px] lg:h-[305px] w-full" />
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-24 sm:mt-32 flex justify-center">
          <Link href="/projects">
            <MagneticButton variant="ghost">See All Projects →</MagneticButton>
          </Link>
        </div>

      </div>
    </section>
  );
}
