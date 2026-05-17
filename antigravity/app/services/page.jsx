'use client';

import dynamic from 'next/dynamic';
import Hero from '../../components/sections/services/Hero';
import CoreOfferings from '../../components/sections/services/CoreOfferings';
import ProcessExpanded from '../../components/sections/services/ProcessExpanded';
import Comparison from '../../components/sections/services/Comparison';
import AddOnServices from '../../components/sections/services/AddOnServices';
import TimelineDelivery from '../../components/sections/services/TimelineDelivery';
import FAQ from '../../components/sections/services/FAQ';
import ServicesCTA from '../../components/sections/services/ServicesCTA';

const Galaxy = dynamic(() => import('../../components/animations/Galaxy'), { ssr: false });
const LightPillar = dynamic(() => import('../../components/animations/LightPillar'), { ssr: false });

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden">
      {/* Hero — LightPillar */}
      <div className="relative w-full min-h-screen">
        <LightPillar topColor="#FFFFFF" bottomColor="#AAAACC" intensity={0.5} glowAmount={0.003} pillarWidth={4} quality="medium" />
        <Hero />
      </div>

      {/* Body sections — Galaxy */}
      <div className="relative w-full">
        <Galaxy speed={0.4} density={1.0} glowIntensity={0.5} />
        <CoreOfferings />
        <ProcessExpanded />
      </div>

      <Comparison />

      <div className="relative w-full">
        <Galaxy speed={0.3} density={0.8} glowIntensity={0.45} />
        <AddOnServices />
        <TimelineDelivery />
        <FAQ />
      </div>

      <ServicesCTA />
    </main>
  );
}
