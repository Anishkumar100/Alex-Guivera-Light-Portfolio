'use client';

import { useRef } from 'react';
import { motion, useSpring, useTransform, useScroll } from 'motion/react';

// Approximation of ReactBits BlurText per paragraph
const BlurParagraph = ({ children, delay = 0 }) => {
  return (
    <motion.p
      initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
      whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
      className="mb-6 font-body text-[1.1rem] leading-relaxed text-text-secondary"
    >
      {children}
    </motion.p>
  );
};

export default function Hero() {
  const imageRef = useRef(null);
  
  // 3D Tilt calculation (Aceternity 3D Card Effect approximation)
  const springConfig = { stiffness: 300, damping: 30, mass: 0.5 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Parallax for left side content
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, -80]);

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 sm:px-6 pb-20 pt-32 md:px-12 md:pt-40">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-12 md:flex-row md:items-center md:gap-8 lg:gap-16">
        
        {/* Left Side: 55% Text */}
        <motion.div 
          style={{ y: yParallax }}
          className="flex w-full flex-col md:w-[55%] md:pr-12"
        >
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-accent-secondary"
          >
            About Me
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-4 font-display text-[clamp(2.5rem,6vw,6rem)] font-extrabold leading-[1.1] tracking-tight text-text-primary"
          >
            Alex Antigravity
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-10 font-body text-[1.5rem] font-light italic text-text-secondary"
          >
            Creative Director. Visual Architect. Obsessive.
          </motion.h2>

          <div className="flex flex-col">
            <BlurParagraph delay={0.5}>
              I build digital experiences that operate at the intersection of logical architecture and emotional resonance. The systems I design are robust, scalable, and rigorously engineered—but their primary metric for success is how they make the user feel.
            </BlurParagraph>
            <BlurParagraph delay={0.6}>
              Over the last eight years, I've partnered with visionary founders to translate abstract technical concepts into visceral, unforgettable brands. I don't believe in generic solutions or 'best practices' when those practices mean blending in with the noise.
            </BlurParagraph>
            <BlurParagraph delay={0.7}>
              My methodology is rooted in obsession. Every bezier curve, every micro-interaction, every millisecond of a transition is an opportunity to communicate quality. If it doesn't evoke a reaction, it goes back to the artboard.
            </BlurParagraph>
          </div>

          <motion.div 
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 origin-top border-l-4 border-white pl-6"
          >
            <p className="font-display text-[1.3rem] font-semibold italic leading-relaxed text-[var(--text-primary)]">
              "Design is not what it looks like. Design is how it makes people feel — and I refuse to make people feel nothing."
            </p>
          </motion.div>
        </motion.div>

        {/* Right Side: 45% Image */}
        <div className="relative flex w-full justify-center md:w-[40%] lg:w-[45%] md:justify-end">
          
          {/* Aceternity Spotlight Background Radial */}
          <div className="absolute left-1/2 top-1/2 -z-10 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(80,70,229,0.06)] blur-[100px]" />
          
          <div className="relative w-full max-w-[400px] md:max-w-[500px] [perspective:1000px]">
            <motion.div
              ref={imageRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateY: useTransform(x, [-0.5, 0.5], [-8, 8]),
                rotateX: useTransform(y, [-0.5, 0.5], [8, -8]),
                transformStyle: 'preserve-3d',
              }}
              initial={{ opacity: 0, scale: 0.9, filter: 'blur(20px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
              className="group relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius-xl)] border border-[rgba(10,9,20,0.06)] bg-void-2 shadow-2xl transition-colors duration-500 hover:border-[rgba(10,9,20,0.15)] hover:shadow-[0_0_40px_rgba(10,9,20,0.08)]"
            >
              {/* Professional Portrait Image */}
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
                alt="Alex Antigravity — Portrait" 
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

              {/* Inner Vignette */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

              {/* Floating Badge (Z-translated for 3D effect) */}
              <div 
                className="absolute right-6 top-6 rounded-full border border-[rgba(10,9,20,0.1)] bg-void-1/80 px-4 py-2 backdrop-blur-md"
                style={{ transform: 'translateZ(50px)' }}
              >
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-text-secondary">
                    Open to Work
                  </span>
                </div>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
