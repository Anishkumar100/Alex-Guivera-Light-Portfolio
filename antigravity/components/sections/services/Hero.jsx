'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Approximation of Aceternity Background Beams with Collision
const CollisionSpark = ({ x }) => {
  return (
    <div className="absolute bottom-[10vh] flex items-center justify-center" style={{ left: `${x}%` }}>
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-accent-primary shadow-[0_0_10px_var(--accent-primary)]"
          initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
          animate={{
            x: (Math.random() - 0.5) * 100,
            y: -Math.random() * 100,
            scale: 0,
            opacity: 0
          }}
          transition={{ duration: 0.8, ease: "circOut" }}
        />
      ))}
      <motion.div
        className="absolute h-[2px] w-[60px] rounded-full bg-accent-secondary blur-[2px]"
        initial={{ scaleX: 0, opacity: 1 }}
        animate={{ scaleX: 1, opacity: 0 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

const BeamCollisionBackground = () => {
  const [beams, setBeams] = useState([]);
  const [sparks, setSparks] = useState([]);

  useEffect(() => {
    // Generate new beams
    const interval = setInterval(() => {
      const id = Math.random();
      const x = 10 + Math.random() * 80; // random x between 10% and 90%
      
      setBeams(prev => [...prev.slice(-4), { id, x }]);
      
      // Schedule spark exactly when beam hits bottom
      setTimeout(() => {
        setSparks(prev => [...prev.slice(-4), { id, x }]);
      }, 1500); // matches the duration of the beam drop

    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Grid overlay — no opaque bg-void so LightPillar shows through */}
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <AnimatePresence>
        {beams.map(beam => (
          <motion.div
            key={`beam-${beam.id}`}
            className="absolute top-0 w-[1px] bg-gradient-to-b from-transparent via-accent-primary to-accent-secondary shadow-[0_0_20px_var(--accent-primary)]"
            style={{ left: `${beam.x}%`, height: '20vh' }}
            initial={{ y: '-20vh', opacity: 0 }}
            animate={{ y: '90vh', opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.5, ease: "linear" }}
          />
        ))}
      </AnimatePresence>

      <AnimatePresence>
        {sparks.map(spark => (
          <CollisionSpark key={`spark-${spark.id}`} x={spark.x} />
        ))}
      </AnimatePresence>

      {/* Bottom fade mask to blend the collision line */}
      <div className="absolute bottom-0 h-[20vh] w-full bg-gradient-to-t from-void via-void to-transparent" />
    </div>
  );
};

export default function Hero() {
  const title = "OFFER";
  
  const letterVariants = {
    hidden: { opacity: 0, y: -150, filter: 'blur(15px)', scale: 1.5 },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)', 
      scale: 1,
      transition: { 
        type: "spring",
        damping: 15,
        stiffness: 100,
      } 
    }
  };

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      
      <BeamCollisionBackground />

      <div className="relative z-10 flex flex-col items-center text-center px-6 mt-[-5vh]">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8 font-mono text-[14px] uppercase tracking-[0.3em] text-text-secondary"
        >
          What I
        </motion.span>
        
        <motion.h1 
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1, delayChildren: 0.5 }}
          className="flex font-display text-[clamp(6rem,15vw,14rem)] font-extrabold leading-none tracking-tighter text-text-primary"
        >
          {title.split("").map((char, i) => (
            <motion.span 
              key={i} 
              variants={letterVariants} 
              className="drop-shadow-[0_0_40px_rgba(108,99,255,0.2)]"
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 1.5, ease: "easeOut" }}
          className="mt-12 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] px-10 py-4 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)]"
        >
          <p className="font-body text-[1.25rem] font-light text-text-secondary tracking-wide">
            Not a menu. <span className="font-medium text-white italic ml-1">A commitment.</span>
          </p>
        </motion.div>
      </div>

    </section>
  );
}
