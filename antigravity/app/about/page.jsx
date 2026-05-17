'use client';

import dynamic from 'next/dynamic';
import Hero from '../../components/sections/about/Hero';
import OriginStory from '../../components/sections/about/OriginStory';
import SkillsMatrix from '../../components/sections/about/SkillsMatrix';
import PhilosophyDeepDive from '../../components/sections/about/PhilosophyDeepDive';
import Awards from '../../components/sections/about/Awards';
import WorkProcess from '../../components/sections/about/WorkProcess';
import Clients from '../../components/sections/about/Clients';
import AboutCTA from '../../components/sections/about/AboutCTA';

const Galaxy = dynamic(() => import('../../components/animations/Galaxy'), { ssr: false });
const LightPillar = dynamic(() => import('../../components/animations/LightPillar'), { ssr: false });

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden">
      {/* Hero — LightPillar with explicit min-height */}
      <div className="relative w-full min-h-screen">
        <LightPillar />
        <Hero />
      </div>

      <OriginStory />

      {/* Body sections — Galaxy */}
      <div className="relative w-full">
        <Galaxy speed={0.4} density={1.0} glowintensity={0.4} />
        <SkillsMatrix />
        <PhilosophyDeepDive />
      </div>

      <div className="relative w-full">
        <Galaxy speed={0.3} density={0.8} glowIntensity={0.45} />
        <Awards />
        <WorkProcess />
        <Clients />
      </div>

      <AboutCTA />
    </main>
  );
}
