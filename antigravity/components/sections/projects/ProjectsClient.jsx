'use client';

import { useState } from 'react';
import Hero from './Hero';
import ProjectGrid from './ProjectGrid';

export default function ProjectsClient() {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <>
      <Hero />
      <ProjectGrid activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
    </>
  );
}
