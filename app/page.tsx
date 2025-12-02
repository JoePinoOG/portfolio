'use client';
import Hero from './components/Hero';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import Aboutme from './components/Aboutme';

export default function Home() {
  return (
    <>
      <Hero />
      <hr className="w-4/5 mx-auto border-[#2C2C33]" />
      <Aboutme />
      <hr className="w-4/5 mx-auto border-[#2C2C33]" />
      <SkillsSection />
      <hr className="w-4/5 mx-auto border-[#2C2C33]" />
      <ProjectsSection />
    </>
  );
}

const PROJECTS = [
  {
    slug: 'project-1',
    title: 'Project 1',
    description: 'Description of Project 1',
    technologies: ['Technology 1', 'Technology 2'],
    githubUrl: 'https://github.com/username/project-1',
    images: ['image1.jpg', 'image2.jpg']
  },
  {
    slug: 'project-2',
    title: 'Project 2',
    description: 'Description of Project 2',
    technologies: ['Technology 1', 'Technology 2'],
    githubUrl: 'https://github.com/username/project-2',
    images: ['image3.jpg', 'image4.jpg']
  },
  {
    slug: 'project-3',
    title: 'Project 3',
    description: 'Description of Project 3',
    technologies: ['Technology 1', 'Technology 2'],
    githubUrl: 'https://github.com/username/project-3',
    images: ['image5.jpg', 'image6.jpg']
  }
];

const ProjectCard = ({ slug, title, description, technologies, githubUrl, imageUrl }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {technologies.map(tech => (
          <span key={tech} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-4">
        <a href={githubUrl} className="text-blue-600 hover:underline">
          GitHub
        </a>
      </div>
      <img src={imageUrl} alt={title} className="mt-4 rounded-lg" />
    </div>
  </div>
);