'use client';

import ProjectHero from './ProjectHero';
import ProjectMeta from './ProjectMeta';
import ProjectOverview from './ProjectOverview';
import ProjectGallery from './ProjectGallery';
import ProjectProcess from './ProjectProcess';
import ProjectResults from './ProjectResults';
import ProjectFooter from './ProjectFooter';

export default function ProjectDetailClient({ project }) {
  return (
    <>
      <ProjectHero project={project} />
      <ProjectMeta project={project} />
      <ProjectOverview />
      <ProjectGallery />
      <ProjectProcess />
      <ProjectResults />
      <ProjectFooter />
    </>
  );
}
