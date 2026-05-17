'use client';

import { motion } from 'motion/react';

const MILESTONES = [
  {
    year: "2017",
    title: "The Genesis",
    location: "London, UK",
    desc: "Began as a self-taught UI designer, obsessing over pixel perfection in Sketch. Took on small freelance gigs, learning the harsh realities of client feedback and delivery constraints.",
    clients: ["Local Startups", "Indie Devs"]
  },
  {
    year: "2019",
    title: "Agency Crucible",
    location: "Berlin, DE",
    desc: "Joined a high-paced digital agency. Learned to build scalable design systems and collaborate closely with engineering teams. The gap between design and code started closing.",
    clients: ["Fintech Co.", "E-commerce Giant"]
  },
  {
    year: "2021",
    title: "The Independent Shift",
    location: "Remote",
    desc: "Left the agency world to establish an independent studio practice. Focused strictly on partnering with early-stage founders to build zero-to-one products with uncompromising visual standards.",
    clients: ["Nexus AI", "Oasis Systems"]
  },
  {
    year: "2023",
    title: "Awwwards & Acclaim",
    location: "Global",
    desc: "The work began receiving international recognition. Shifted focus toward highly experiential web design, heavily integrating WebGL, GSAP, and advanced motion graphics into standard interfaces.",
    clients: ["Vora Capital", "Aethel Dynamics"]
  },
  {
    year: "2025",
    title: "Antigravity",
    location: "The Present",
    desc: "Running a specialized micro-agency. Delivering end-to-end digital experiences where brand, product, and marketing blur into one cohesive, undeniably premium aesthetic.",
    clients: ["Polymath", "Next Gen Web"]
  }
];

export default function OriginStory() {
  return (
    <section className="relative w-full overflow-hidden bg-void py-32 md:py-48">
      {/* Subtle aurora glow */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-50 mix-blend-screen">
        <div className="absolute -top-[20%] left-[10%] h-[80%] w-[60%] rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_60%)] blur-[100px]" />
        <div className="absolute bottom-[0%] right-[10%] h-[70%] w-[60%] rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_60%)] blur-[100px]" />
      </div>

      {/* Grid overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)]" />

      {/* Vertical centerline for timeline effect */}
      <div className="absolute left-6 top-0 z-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.1)] to-transparent opacity-50 md:left-1/2 md:-translate-x-1/2" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col gap-24 px-6 md:gap-40 md:px-12">
        {MILESTONES.map((milestone, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`relative flex w-full flex-col items-center justify-between gap-12 md:flex-row ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Year Section */}
            <div className={`flex w-full flex-col justify-center md:w-1/2 ${idx % 2 === 1 ? 'md:items-start pl-8' : 'md:items-end pr-8'}`}>
              <span className="mb-4 font-mono text-[12px] uppercase tracking-widest text-accent-secondary">
                Chapter {idx + 1}
              </span>
              <h2 className="font-display text-[clamp(5rem,14vw,10rem)] font-extrabold leading-none tracking-tighter text-text-dim mix-blend-overlay">
                {milestone.year}
              </h2>
            </div>

            {/* Timeline dot */}
            <div className="absolute left-0 top-12 h-[12px] w-[12px] -translate-x-1/2 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.3)] md:left-1/2 md:top-1/2 md:-translate-y-1/2" />

            {/* Card Section */}
            <div className={`flex w-full justify-center md:w-1/2 ${idx % 2 === 1 ? 'md:justify-end' : 'md:justify-start'}`}>
              <div className="w-full max-w-[500px] rounded-[var(--radius-xl)] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-6 shadow-2xl backdrop-blur-xl transition-transform duration-500 hover:scale-[1.02] hover:border-[rgba(255,255,255,0.15)] sm:p-8 md:p-10">
                <div className="mb-6 flex items-center justify-between border-b border-[rgba(255,255,255,0.05)] pb-6">
                  <h3 className="font-display text-[1.75rem] font-bold text-white">
                    {milestone.title}
                  </h3>
                  <span className="rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-text-dim">
                    {milestone.location}
                  </span>
                </div>

                <p className="mb-8 font-body text-[1.125rem] font-light leading-relaxed text-text-secondary">
                  {milestone.desc}
                </p>

                <div className="flex flex-col gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-text-dim">
                    Key Focus / Clients
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {milestone.clients.map((client, cIdx) => (
                      <span key={cIdx} className="rounded-md border border-[rgba(255,255,255,0.05)] bg-void-2 px-3 py-1.5 font-mono text-[11px] text-accent-secondary">
                        {client}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
          </motion.div>
        ))}
      </div>
    </section>
  );
}
