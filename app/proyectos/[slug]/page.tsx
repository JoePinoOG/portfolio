import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '@/app/data/projectsdata';
import AnimatedBackground from '@/app/components/AnimatedBackground';
import ProjectGallery from '@/app/components/ProjectGallery';

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <AnimatedBackground />
      <main className="min-h-screen bg-transparent text-[#EBEBEC] py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto ">
          <Link 
            href="/#proyectos" 
            className="inline-flex items-center text-[#20C997] hover:text-[#1AB386] mb-8 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back to Projects
          </Link>

          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#EBEBEC]">
            {project.title}
          </h1>
          <p className="text-xl text-[#86868B] mb-8">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm font-medium rounded-full bg-[#20C997]/20 text-[#20C997] border border-[#20C997]/30"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mb-12">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-[#2C2C33] text-[#EBEBEC] rounded-lg hover:bg-[#3C3C43] transition-colors"
            >
              <Github className="w-5 h-5 mr-2" />
              View Code
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#20C997] text-[#17171B] rounded-lg hover:bg-[#1AB386] transition-colors"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View Project
              </a>
            )}
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#EBEBEC]">
              About the Project
            </h2>
            <p className="text-lg text-[#86868B] leading-relaxed">
              {project.longDescription}
            </p>
          </section>

          {project.images && project.images.length > 0 && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#EBEBEC]">
                Screenshots
              </h2>
              <ProjectGallery images={project.images} title={project.title} />
            </section>
          )}

          {project.features && project.features.length > 0 && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#EBEBEC]">
                Main Features
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start text-[#86868B]"
                  >
                    <span className="text-[#20C997] mr-3 mt-1">▸</span>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
          {project.challenges && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#EBEBEC]">
                Technical Challenges
              </h2>
              <p className="text-lg text-[#86868B] leading-relaxed bg-[#2C2C33] p-6 rounded-lg border border-[#3C3C43]">
                {project.challenges}
              </p>
            </section>
          )}

          {project.outcome && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#EBEBEC]">
                Results & Outcome
              </h2>
              <p className="text-lg text-[#86868B] leading-relaxed bg-[#20C997]/10 p-6 rounded-lg border border-[#20C997]/30">
                {project.outcome}
              </p>
            </section>
          )}
        </div>
      </main>
    </>
  );
}