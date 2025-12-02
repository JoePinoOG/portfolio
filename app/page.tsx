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