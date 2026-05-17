'use client';

import dynamic from 'next/dynamic';

const LightPillar = dynamic(() => import('../../animations/LightPillar'), { ssr: false });

export default function ContactBackground() {
  return (
    <LightPillar />
  );
}
