'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, animate } from 'motion/react';
import Link from 'next/link';

export const FILTERS = ["All", "Branding", "UI/UX", "Motion", "3D", "Print"];
export const COUNTS = {
  "All": 24,
  "Branding": 8,
  "UI/UX": 7,
  "Motion": 5,
  "3D": 2,
  "Print": 2
};

// Animated Counter component
function AnimatedCounter({ value }) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const controls = animate(displayValue, value, {
      duration: 0.8,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest));
      }
    });
    return controls.stop;
  }, [value, displayValue]);

  return <span>{displayValue}</span>;
}

// --- MOCK DATA ---
const ALL_PROJECTS = Array.from({ length: 24 }).map((_, i) => {
  const categories = ["Branding", "UI/UX", "Motion", "3D", "Print"];
  // Deterministic category for filtering
  const category = categories[i % categories.length];
  
  // Heights for masonry rhythm
  const heights = ["h-[250px]", "h-[350px]", "h-[500px]"];
  const heightClass = heights[i % heights.length];

  // Curated dark abstract Unsplash images
  const images = [
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1000&auto=format&fit=crop",
  ];
  const image = images[i % images.length];

  const slugs = ['quantum-engine', 'nebula-protocol', 'apex-financial'];
  return {
    id: i + 1,
    title: `Project ${String(i + 1).padStart(3, '0')}`,
    slug: slugs[i % slugs.length],
    category,
    heightClass,
    image
  };
});

// --- DIRECTION AWARE HOVER LOGIC ---
const getDirection = (ev, obj) => {
  const { width: w, height: h, left, top } = obj.getBoundingClientRect();
  const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
  const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
  const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
  return d; // 0: top, 1: right, 2: bottom, 3: left
};

const ProjectCard = ({ project }) => {
  const ref = useRef(null);
  const [direction, setDirection] = useState("bottom");
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (e) => {
    if (!ref.current) return;
    const dir = getDirection(e, ref.current);
    switch (dir) {
      case 0: setDirection("top"); break;
      case 1: setDirection("right"); break;
      case 2: setDirection("bottom"); break;
      case 3: setDirection("left"); break;
      default: setDirection("bottom");
    }
    setIsHovered(true);
  };

  const handleMouseLeave = (e) => {
    setIsHovered(false);
  };

  // Map direction to Framer Motion initial variants
  const slideVariants = {
    top: { y: "-100%", x: 0 },
    bottom: { y: "100%", x: 0 },
    left: { x: "-100%", y: 0 },
    right: { x: "100%", y: 0 },
    center: { x: 0, y: 0 }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.85 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative w-full overflow-hidden rounded-[var(--radius-lg)] border border-[rgba(10,9,20,0.05)] bg-void-1 transition-colors duration-500 hover:border-[rgba(10,9,20,0.12)] ${project.heightClass}`}
    >
      {/* Base Image */}
      <motion.img
        src={project.image}
        alt={project.title}
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />

      {/* Default Bottom Gradient (always visible for legibility) */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-[rgba(5,5,7,0.4)] to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-40" />

      {/* Direction-Aware Hover Overlay */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={slideVariants[direction]}
            animate="center"
            exit={slideVariants[direction]}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[rgba(10,9,20,0.08)] backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-center gap-2 rounded-full border border-[rgba(10,9,20,0.12)] bg-[rgba(80,70,229,0.06)] px-6 py-2 backdrop-blur-md"
            >
              <span className="font-mono text-[13px] uppercase tracking-widest text-[var(--text-primary)]">View Project</span>
              <span className="text-[var(--text-primary)]">→</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Static Info (Hidden when overlay is fully covering, but we keep it below z-index) */}
      <div className="absolute bottom-0 left-0 z-0 w-full p-6 transition-transform duration-500 group-hover:translate-y-4 group-hover:opacity-0">
        <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-accent-secondary">
          {project.category}
        </span>
        <h3 className="font-display text-[1.75rem] font-bold tracking-tight text-[var(--text-primary)]">
          {project.title}
        </h3>
      </div>
    </motion.div>
  );
};

export default function ProjectGrid({ activeFilter, setActiveFilter }) {
  const [visibleCount, setVisibleCount] = useState(9);

  // Filter logic
  const filteredProjects = ALL_PROJECTS.filter(
    (p) => activeFilter === "All" || p.category === activeFilter
  );

  // Slice based on pagination
  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 9);
  };

  return (
    <section className="relative w-full px-6 pb-20 md:px-12">
      <div className="mx-auto w-full max-w-[1400px]">
        
        {/* Filter Section */}
        <div className="mb-12 flex flex-col items-center justify-between gap-6 border-b border-[rgba(10,9,20,0.05)] pb-8 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[12px] uppercase tracking-widest text-text-dim">
              Showing
            </span>
            <span className="rounded-full bg-[rgba(10,9,20,0.05)] px-3 py-1 font-mono text-[11px] text-[var(--text-primary)]">
              <AnimatedCounter value={COUNTS[activeFilter]} /> Works
            </span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-2 md:gap-3"
          >
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`relative px-5 py-2 font-mono text-[11px] uppercase tracking-widest transition-colors duration-300 md:text-[12px] ${isActive ? 'text-white' : 'text-text-secondary hover:text-[var(--text-primary)]'}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="gridFilterBg"
                      className="absolute inset-0 z-[-1] rounded-full bg-[var(--accent-primary)] shadow-[var(--shadow-accent)]"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                  {!isActive && (
                    <div className="absolute inset-0 z-[-1] rounded-full border border-[rgba(10,9,20,0.08)] transition-colors hover:border-[rgba(10,9,20,0.1)]" />
                  )}
                  {filter}
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* CSS Column Masonry */}
        <motion.div layout className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          <AnimatePresence>
            {visibleProjects.map((project) => (
              <div key={project.id} className="mb-6 break-inside-avoid">
              <Link href={`/projects/${project.slug}`} className="block">
                <ProjectCard project={project} />
              </Link>
              </div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-20 flex w-full justify-center">
            <button
              onClick={handleLoadMore}
              className="group relative flex items-center gap-3 overflow-hidden rounded-full border border-[rgba(10,9,20,0.1)] bg-transparent px-8 py-4 transition-colors hover:border-[var(--accent-primary)] hover:bg-[var(--accent-primary)]"
            >
              <span className="font-mono text-[13px] uppercase tracking-widest text-[var(--text-primary)] transition-colors group-hover:text-white">
                Load More
              </span>
              <span className="text-text-dim transition-colors group-hover:text-white">
                ↓
              </span>
            </button>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="flex w-full flex-col items-center justify-center py-32 text-center">
            <span className="font-mono text-[14px] text-text-dim">No projects found for {activeFilter}.</span>
          </div>
        )}

      </div>
    </section>
  );
}
