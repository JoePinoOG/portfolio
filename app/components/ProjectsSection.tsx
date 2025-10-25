'use client';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../data/projectsdata';

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold mb-12 text-center text-[#EBEBEC]">
        My <span className="text-[#20C997]">Projects</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.slug}
            slug={project.slug}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </section>
  );
}