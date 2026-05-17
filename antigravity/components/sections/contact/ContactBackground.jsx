'use client';

import dynamic from 'next/dynamic';

const LightPillar = dynamic(() => import('../../animations/LightPillar'), { ssr: false });

export default function ContactBackground() {
  return (
    <LightPillar topColor="#FFFFFF" bottomColor="#AAAACC" intensity={0.4} glowAmount={0.002} pillarWidth={4} quality="medium" />
  );
}
