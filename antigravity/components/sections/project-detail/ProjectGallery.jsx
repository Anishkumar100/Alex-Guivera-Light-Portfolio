'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';

// Reusing the GlareCard logic from FeaturedProject for stunning image interactions
const GlareImage = ({ src, alt, caption, className = "" }) => {
  const ref = useRef(null);
  
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [0, 1], ["3deg", "-3deg"]);
  const rotateY = useTransform(mouseXSpring, [0, 1], ["-3deg", "3deg"]);
  
  const glareX = useTransform(mouseXSpring, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [0, 1], ["0%", "100%"]);
  const glareOpacity = useTransform(mouseXSpring, [0, 0.45, 0.55, 1], [0.3, 0.05, 0.05, 0.3]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width;
    const mouseY = (e.clientY - rect.top) / rect.height;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <div style={{ perspective: "1500px" }} className="w-full h-full">
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative h-full w-full overflow-hidden rounded-[var(--radius-xl)] bg-void shadow-2xl"
        >
          <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]" />
          
          <motion.div 
            className="pointer-events-none absolute inset-0 z-50 mix-blend-overlay"
            style={{
              background: "radial-gradient(circle at center, rgba(255,255,255,0.6) 0%, transparent 40%)",
              left: useTransform(glareX, v => `calc(${v} - 50%)`),
              top: useTransform(glareY, v => `calc(${v} - 50%)`),
              width: "200%",
              height: "200%",
              opacity: glareOpacity
            }}
          />
          <div className="pointer-events-none absolute inset-0 z-40 border border-[rgba(255,255,255,0.05)] transition-colors duration-500 hover:border-accent-primary/30" />
        </motion.div>
      </div>
      {caption && (
        <span className="font-mono text-[11px] text-text-dim px-2">
          {caption}
        </span>
      )}
    </div>
  );
};

// Full width parallax image without 3D tilt (better for massive 100vw banners)
const ParallaxBanner = ({ src, alt, caption }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div className="flex w-full flex-col gap-4 px-6 md:px-12 py-16">
      <div ref={containerRef} className="relative h-[60vh] w-full overflow-hidden rounded-[var(--radius-2xl)] md:h-[80vh]">
        <motion.div style={{ y }} className="absolute inset-0 z-0 h-[130%] w-full">
          <img src={src} alt={alt} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,5,7,0.3)] to-transparent" />
        </motion.div>
      </div>
      {caption && (
        <span className="font-mono text-[11px] text-text-dim text-center">
          {caption}
        </span>
      )}
    </div>
  );
};

export default function ProjectGallery() {
  const images = [
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop", // Full
    "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop", // 50
    "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1000&auto=format&fit=crop", // 50
    "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=2000&auto=format&fit=crop", // Full
    "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=1600&auto=format&fit=crop", // 65
    "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1000&auto=format&fit=crop", // 35
  ];

  return (
    <section className="relative w-full bg-void-2 py-16 md:py-24">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-12 md:gap-24">
        
        {/* Image 1: Full Bleed Parallax */}
        <ParallaxBanner 
          src={images[0]} 
          alt="Quantum OS Main Interface" 
          caption="Fig. 1 — The redesigned Quantum OS primary dashboard featuring the dark-void aesthetic."
        />

        {/* Images 2-3: 50/50 Grid */}
        <div className="flex flex-col gap-6 px-6 md:flex-row md:gap-8 md:px-12">
          <GlareImage src={images[1]} alt="Data Visualization Component" caption="Fig. 2 — Custom physics-based data visualization charts." className="h-[40vh] md:h-[60vh] w-full md:w-1/2" />
          <GlareImage src={images[2]} alt="Navigation Sidebar" caption="Fig. 3 — The magnetic navigation sidebar state." className="h-[40vh] md:h-[60vh] w-full md:w-1/2" />
        </div>

        {/* Image 4: Full Bleed Parallax */}
        <ParallaxBanner 
          src={images[3]} 
          alt="Settings Interface" 
          caption="Fig. 4 — System preferences panel utilizing the floating label architecture."
        />

        {/* Images 5-6: Asymmetric 65/35 */}
        <div className="flex flex-col gap-6 px-6 md:flex-row md:gap-8 md:px-12">
          <GlareImage src={images[4]} alt="Command Palette" caption="Fig. 5 — The global command palette with instant search." className="h-[40vh] md:h-[70vh] w-full md:w-[65%]" />
          <GlareImage src={images[5]} alt="Dark Mode Tokens" caption="Fig. 6 — Color mathematics and token hierarchy." className="h-[40vh] md:h-[70vh] w-full md:w-[35%]" />
        </div>

      </div>
    </section>
  );
}
