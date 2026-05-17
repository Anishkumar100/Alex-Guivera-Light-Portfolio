'use client';

import dynamic from 'next/dynamic';

// Dynamically import WebGL components to avoid SSR issues
const Galaxy = dynamic(() => import('./Galaxy'), { ssr: false });
const LightPillar = dynamic(() => import('./LightPillar'), { ssr: false });

/**
 * Section wrapper that adds a Galaxy background behind its children.
 * Use this for ALL content sections (not hero/header/footer).
 */
export function GalaxySection({ children, className = "", ...rest }) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`} {...rest}>
      <Galaxy />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

/**
 * Header wrapper that adds a LightPillar background behind its children.
 * Use this for ALL hero/header sections.
 */
export function LightPillarSection({ children, className = "", ...rest }) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`} {...rest}>
      <LightPillar
        topColor="#000000"
        bottomColor="#000000"
        intensity={1.8}
        glowAmount={0.005}
        pillarWidth={5.5}
        quality="medium"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
