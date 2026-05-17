'use client';

import { motion } from 'motion/react';

const ARCHIVE_PROJECTS = [
  { name: "Nebula Protocol", year: "2025", category: "Brand Identity", link: "#" },
  { name: "Apex Financial", year: "2025", category: "UI/UX Architecture", link: "#" },
  { name: "Lumina Studio", year: "2024", category: "Motion Design", link: "#" },
  { name: "Vanguard Tech", year: "2024", category: "Web Ecosystem", link: "#" },
  { name: "Horizon Capital", year: "2023", category: "Brand Identity", link: "#" },
  { name: "Echo Dynamics", year: "2023", category: "3D Interaction", link: "#" },
  { name: "Pulse Healthcare", year: "2022", category: "UI/UX Architecture", link: "#" },
  { name: "Nexus Media", year: "2022", category: "Print & Typography", link: "#" },
];

export default function ArchiveGrid() {
  return (
    <section className="relative w-full px-6 py-32 md:px-12">
      <div className="mx-auto w-full max-w-[1200px]">
        
        {/* Header */}
        <div className="mb-16 flex flex-col items-start">
          <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-extrabold tracking-tight text-[var(--text-primary)]">
            The Archive
          </h2>
          <p className="mt-4 max-w-xl font-body text-[1.125rem] font-light text-text-secondary">
            A comprehensive index of past engagements, legacy systems, and conceptual explorations.
          </p>
        </div>

        {/* The Grid Header (Desktop only) */}
        <div className="hidden grid-cols-12 border-b border-[rgba(10,9,20,0.1)] pb-4 md:grid">
          <div className="col-span-5 font-mono text-[11px] uppercase tracking-widest text-text-dim">Project</div>
          <div className="col-span-2 font-mono text-[11px] uppercase tracking-widest text-text-dim">Year</div>
          <div className="col-span-4 font-mono text-[11px] uppercase tracking-widest text-text-dim">Category</div>
          <div className="col-span-1 text-right font-mono text-[11px] uppercase tracking-widest text-text-dim">Link</div>
        </div>

        {/* The Archive List */}
        <div className="flex flex-col">
          {ARCHIVE_PROJECTS.map((project, idx) => (
            <motion.a
              key={idx}
              href={project.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group grid grid-cols-1 gap-4 border-b border-[rgba(10,9,20,0.05)] py-6 transition-colors duration-500 hover:bg-[rgba(10,9,20,0.02)] hover:px-4 md:grid-cols-12 md:items-center md:gap-0 md:py-8"
            >
              {/* Project Name */}
              <div className="col-span-1 flex items-center md:col-span-5">
                <h3 className="font-display text-[1.5rem] font-bold text-[var(--text-primary)] transition-colors duration-300 group-hover:text-accent-primary">
                  {project.name}
                </h3>
              </div>

              {/* Year */}
              <div className="col-span-1 font-mono text-[13px] text-text-secondary md:col-span-2">
                {project.year}
              </div>

              {/* Category */}
              <div className="col-span-1 font-mono text-[13px] text-text-secondary md:col-span-4">
                {project.category}
              </div>

              {/* Link Arrow */}
              <div className="hidden justify-end md:col-span-1 md:flex">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(10,9,20,0.1)] text-text-dim transition-all duration-500 group-hover:scale-110 group-hover:border-accent-primary group-hover:bg-accent-primary/10 group-hover:text-accent-primary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
