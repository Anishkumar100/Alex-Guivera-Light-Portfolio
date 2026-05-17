import ProjectDetailClient from '../../../components/sections/project-detail/ProjectDetailClient';

// Mock DB fetch for static generation
const getProjectData = (slug) => {
  return {
    slug,
    title: "Quantum Engine OS",
    category: "Product Design",
    year: "2026",
    tags: ["UI/UX Architecture", "Motion Systems", "Design System"],
    client: "Quantum Lab Inc.",
    industry: "SaaS / Deep Tech",
    duration: "4 Months",
    role: "Lead Product Designer",
    heroImage: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2000&auto=format&fit=crop",
  };
};

export function generateMetadata({ params }) {
  const project = getProjectData(params.slug);
  return {
    title: `${project.title} | Antigravity`,
    description: `Case study: ${project.title} - ${project.category}`,
  };
}

// Generate static params for the mock projects so they render fast
export function generateStaticParams() {
  return [
    { slug: 'quantum-engine' },
    { slug: 'nebula-protocol' },
    { slug: 'apex-financial' }
  ];
}

export default function ProjectPage({ params }) {
  const project = getProjectData(params.slug);

  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden bg-void">
      <ProjectDetailClient project={project} />
    </main>
  );
}
