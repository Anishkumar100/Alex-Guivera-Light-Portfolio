'use client';

import dynamic from 'next/dynamic';
import { motion } from 'motion/react';
import Link from 'next/link';

const AuroraBackground = dynamic(() => import('@/components/animations/AuroraBackground'), { ssr: false });

export default function UnifiedCTA({
  headline = "Let's build something",
  subline = "extraordinary.",
  buttonText = "Start the Conversation →",
  href = "/contact"
}) {
  return (
    <section className="relative flex min-h-[60vh] w-full flex-col items-center justify-center overflow-hidden">
      <AuroraBackground />

      <div className="relative z-10 flex w-full max-w-[900px] flex-col items-center px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-4 font-display text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold leading-[1.05] tracking-tight text-white"
        >
          {headline}
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-12 font-display text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold leading-[1.05] tracking-tight text-white/50"
        >
          {subline}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
        >
          <Link href={href}>
            <button className="group relative overflow-hidden rounded-full border border-white/20 bg-white/5 px-8 py-4 sm:px-12 sm:py-5 font-display text-[0.875rem] sm:text-[1rem] font-bold uppercase tracking-widest text-white backdrop-blur-md transition-all duration-500 hover:border-white/40 hover:bg-white/10 hover:shadow-[0_0_50px_rgba(255,255,255,0.1)]">
              <span className="relative z-10">{buttonText}</span>
              <div className="absolute inset-0 -z-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] transition-transform duration-700 group-hover:translate-x-[100%]" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
