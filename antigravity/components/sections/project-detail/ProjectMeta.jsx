'use client';

import { motion } from 'motion/react';

export default function ProjectMeta({ project }) {
  const metaItems = [
    { label: "Client", value: project.client },
    { label: "Industry", value: project.industry },
    { label: "Duration", value: project.duration },
    { label: "Role", value: project.role },
  ];

  return (
    <section className="relative w-full border-b border-[rgba(255,255,255,0.05)] bg-void-2 px-6 py-16 md:px-12 md:py-20">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col md:flex-row md:items-center md:justify-between">
        
        {metaItems.map((item, idx) => (
          <motion.div 
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className={`flex flex-col py-6 md:py-0 md:px-8 lg:px-16 ${
              idx !== 0 ? 'border-t border-[rgba(255,255,255,0.05)] md:border-t-0 md:border-l' : ''
            } ${idx === 0 ? 'md:pl-0' : ''} ${idx === metaItems.length - 1 ? 'md:pr-0' : ''}`}
          >
            <span className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-text-dim">
              {item.label}
            </span>
            <span className="font-display text-[1.25rem] font-bold text-white md:text-[1.5rem]">
              {item.value}
            </span>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
