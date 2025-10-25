
const Aboutme = () => {
  return (
    <section id="about" className="relative min-h-screen py-20 px-4 overflow-hidden">

      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#20C997] bg-clip-text">
            About Me
          </h2>
          <div className="h-1 w-20 bg-[#20C997] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-[#20C997] rounded-2xl blur-xl opacity-50"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <img src="/images/milo.png" alt="About Me" className="w-full h-full object-cover rounded-lg" />
                <div className="w-full h-full bg[#20C997] rounded-lg flex items-center justify-center">
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <p className="text-gray-300 leading-relaxed mb-4">
              Junior Full-Stack Software Developer (DuocUC Graduate) with a strong passion for technology and clean development.
              </p>
              <p className="text-gray-300 leading-relaxed">
              A self-taught professional with proven experience in teamwork and problem-solving (gained in a consultancy role). 
              My expertise includes developing key modules like admin panels.
              I am eager to grow by delivering effective and efficient solutions.
              </p>
            </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-semibold mb-4 text-white">Tech Stack</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">▹</span>
                    <span>Core Stack: TypeScript, .NET, Python.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">▹</span>
                    <span>Framework Experience: Next.js, Angular 19, .NET 8, .NET 4.5, Django REST.</span>
                  </li>
                </ul>
              </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-white">Focus On</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">▹</span>
                  Desktop Application Engineering
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">▹</span>
                  Full-Cycle Web Solutions
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">▹</span>
                  Clean Code & Scalability Principles
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;