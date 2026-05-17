'use client';

import dynamic from 'next/dynamic';
import Hero from '../components/sections/home/Hero';
import Marquee from '../components/sections/home/Marquee';
import SelectedWork from '../components/sections/home/SelectedWork';
import Philosophy from '../components/sections/home/Philosophy';
import Stats from '../components/sections/home/Stats';
import Process from '../components/sections/home/Process';
import Testimonials from '../components/sections/home/Testimonials';
import CTA from '../components/sections/home/CTA';

const Galaxy = dynamic(() => import('../components/animations/Galaxy'), { ssr: false });
const LightPillar = dynamic(() => import('../components/animations/LightPillar'), { ssr: false });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden">
      {/* Hero — LightPillar background */}
      <div className="relative w-full min-h-screen">
        <LightPillar />
        <Hero />
      </div>

      <Marquee />

      {/* Body sections — Galaxy background */}
      <div className="relative w-full">
        <Galaxy speed={0.4} density={1.0} glowintensity={0.4} />
        <SelectedWork />
      </div>

      <Philosophy />

      <div className="relative w-full">
        <Galaxy speed={0.3} density={0.8} glowIntensity={0.45} />
        <Stats />
        <Process />
      </div>

      <div className="relative w-full">
        <Galaxy speed={0.5} density={0.9} glowintensity={0.4} />
        <Testimonials />
      </div>

      <CTA />
    </main>
  );
}
