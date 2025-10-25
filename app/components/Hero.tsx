'use client';
import Link from 'next/link';
import { ChevronDown, ChevronRight } from 'lucide-react';
import Contact from './Contact';


export default function Hero() {
  const accentColor = "text-[#20C997]";

  return (  
    <section id="hero" className="flex flex-col items-center justify-center min-h-screen text-center p-6 pt-24 md:pt-32">
      <p className="text-xl text-[#86868B] mb-4">
        &lt;Junior Programmer Analyst /&gt;
      </p>

      <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight">
        Hello, I am <span className={`${accentColor} tracking-tighter`}>[Camilo]</span>
      </h1>

      <p className="text-xl max-w-3xl mb-10 text-[#EBEBEC]/80">
        A Full-Stack approach to problem-solving, ensuring robust enterprise-level software with .NET and TypeScript.
      </p>

      <Link href="#proyectos" className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold rounded-lg transition duration-300 transform hover:scale-105 bg-[#20C997] text-[#17171B] shadow-lg shadow-[#20C997]/50">
          My Projects
          <ChevronRight className="w-5 h-5 ml-2" />
      </Link>

      <Contact />
      
      <div className="absolute bottom-8 animate-bounce">
        <ChevronDown className="w-8 h-8 text-[#20C997]" />
      </div>
    </section>
  );
}