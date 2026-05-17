'use client';

import { motion } from 'motion/react';

const ROW_ONE = [
  'Brand Identity', 'Motion Design', 'UI/UX', 'Art Direction',
  '3D Visualization', 'Typography', 'Product Design', 'Prototyping'
];

const ROW_TWO = [
  'Figma', 'After Effects', 'Blender', 'Cinema 4D',
  'Framer', 'Webflow', 'React', 'Next.js'
];

const MarqueeRow = ({ items, direction = 1, duration = 40 }) => {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        initial={{ x: direction === 1 ? '0%' : '-50%' }}
        animate={{ x: direction === 1 ? '-50%' : '0%' }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: duration,
        }}
        className="flex w-max hover:[animation-play-state:paused]"
      >
        {/* We duplicate the array 4 times to ensure it spans the viewport multiple times seamlessly */}
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div 
            key={`${item}-${idx}`} 
            className="group/pill mx-2 flex shrink-0 cursor-default items-center justify-center rounded-full border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] px-6 py-2 transition-all duration-300 hover:border-accent-primary hover:bg-accent-primary/20 hover:shadow-[0_0_15px_rgba(108,99,255,0.2)]"
          >
            <span className="font-display text-[1rem] font-bold tracking-[0.08em] text-text-secondary transition-colors duration-300 group-hover/pill:text-white">
              {item}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function Marquee() {
  return (
    <section className="relative flex h-[120px] w-full flex-col justify-center overflow-hidden border-y border-[rgba(255,255,255,0.06)] bg-void-2 py-4">
      <MarqueeRow items={ROW_ONE} direction={1} duration={40} />
      <div className="mt-3" />
      <MarqueeRow items={ROW_TWO} direction={-1} duration={50} />
      
      {/* Gradient Fades for edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-void-2 to-transparent md:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-void-2 to-transparent md:w-32" />
    </section>
  );
}
