'use client';
import Image from 'next/image';

const SKILLS = [
  { name: ".NET", icon: '/netcore.svg' },
  { name: "TypeScript", icon: '/typescript.svg' },
  { name: "Angular", icon: '/angular.svg' },
  { name: "Next.js", icon: '/next.js.svg' },
  { name: "Visual Studio", icon: '/visualstudio.svg' },
  { name: "VS Code", icon: '/vscode.svg' },
];

const OTHERSKILLS = [
  { name: "Git", icon: '/git.svg' },
  { name: "Python", icon: '/python.svg' },
  { name: "Node.js", icon: '/node.js.svg' },
  { name: "PostgreSQL", icon: '/postgressql.svg' },
  { name: "SQLite", icon: '/sqlite.svg' },
  { name: "Mysql", icon: '/mysql.svg' },
];

export default function SkillsSection() {
  return (
    <>
      <section id="habilidades" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-[#20C997]">Principal</span> Tools
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center p-6 rounded-lg transition-all duration-300 hover:ring-2 ring-offset-2 ring-[#20C997] 
              bg-transparent  border border-transparent hover:border-[#20C997]"
            >
              <div className="relative w-16 h-16 mb-3 p-2 rounded-full flex items-center justify-center">
                <Image
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <p className="text-lg font-semibold text-[#EBEBEC]">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="otrasherramientas" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-[#20C997]">Other</span> Tools
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {OTHERSKILLS.map((otherskill) => (
            <div
              key={otherskill.name}
              className="flex flex-col items-center p-6 rounded-lg transition-all duration-300 hover:ring-2 ring-offset-2 ring-[#20C997] bg-transparent border border-transparent hover:border-[#20C997]"
            >
              <div className="relative w-16 h-16 mb-3 p-2 rounded-full flex items-center justify-center">
                <Image
                  src={otherskill.icon}
                  alt={`${otherskill.name} icon`}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <p className="text-lg font-semibold text-[#EBEBEC]">{otherskill.name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
