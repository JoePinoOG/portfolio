'use client';
import Link from 'next/link';
import Image from 'next/image'; // Importar Image
import { Github, ArrowRight } from 'lucide-react';

interface ProjectProps {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  imageUrl?: string; // Nueva propiedad opcional
}

export default function ProjectCard({ slug, title, description, technologies, githubUrl, imageUrl }: ProjectProps) {
  const accentColor = "bg-[#20C997]";
  const secondaryBg = "bg-[#2C2C33]";
  
  return (
    <article className={`${secondaryBg} p-6 rounded-xl shadow-2xl transition-all duration-300 hover:shadow-[#20C997]/20`}>
      <div className="w-full h-48 relative mb-4 rounded-lg overflow-hidden bg-gray-700">
        {imageUrl ? (
          <Image 
            src={imageUrl} 
            alt={title} 
            fill 
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            [Sin imagen]
          </div>
        )}
      </div>
      
      <h3 className="text-3xl font-bold mb-3 text-[#EBEBEC]">{title}</h3>
      <p className="text-[#86868B] mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.map((tech) => (
          <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-[#20C997]/20 text-[#20C997]">
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 bg-[#3C3C43] text-[#EBEBEC] rounded-lg hover:bg-[#4C4C53] transition-colors"
        >
          <Github className="w-4 h-4 mr-2" />
          Code
        </a>
        <Link
          href={`/proyectos/${slug}`}
          className="flex items-center px-4 py-2 bg-[#20C997] text-[#17171B] rounded-lg hover:bg-[#1AB386] transition-colors"
        >
          View More
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </article>
  );
}