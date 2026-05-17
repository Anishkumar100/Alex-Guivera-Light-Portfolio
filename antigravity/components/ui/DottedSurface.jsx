'use client';

export default function DottedSurface() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] h-screen w-screen opacity-40">
      {/* 
        This creates a seamless, high-performance CSS radial-gradient dot pattern 
        perfect for the 'dark void' aesthetic. 
      */}
      <div 
        className="absolute inset-0 h-full w-full"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />
      
      {/* Gradient mask to fade out the dots near the edges and center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--void)_80%)]" />
    </div>
  );
}
