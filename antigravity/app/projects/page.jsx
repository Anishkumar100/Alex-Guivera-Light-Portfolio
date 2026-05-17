'use client';

import dynamic from 'next/dynamic';
import ProjectsClient from '../../components/sections/projects/ProjectsClient';
import FeaturedProject from '../../components/sections/projects/FeaturedProject';
import CreativeProcess from '../../components/sections/projects/CreativeProcess';
import ArchiveGrid from '../../components/sections/projects/ArchiveGrid';
import Collaborations from '../../components/sections/projects/Collaborations';
import ProjectStats from '../../components/sections/projects/ProjectStats';
import ProjectsCTA from '../../components/sections/projects/ProjectsCTA';

const Galaxy = dynamic(() => import('../../components/animations/Galaxy'), { ssr: false });
const LightPillar = dynamic(() => import('../../components/animations/LightPillar'), { ssr: false });

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden">
      {/* Hero — LightPillar */}
      <div className="relative w-full min-h-screen">
        <LightPillar />
        <ProjectsClient />
      </div>

      {/* Body sections — Galaxy */}
      <div className="relative w-full">
        <Galaxy speed={0.4} density={1.0} glowintensity={0.4} />
        <FeaturedProject />
        <CreativeProcess />
      </div>

      <div className="relative w-full">
        <Galaxy speed={0.3} density={0.8} glowIntensity={0.45} />
        <ArchiveGrid />
        <Collaborations />
        <ProjectStats />
      </div>

      <ProjectsCTA />
    </main>
  );
}
