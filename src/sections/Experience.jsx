const Experience = () => {
  return (
    <section id="experience" className="w-full py-20 bg-transparent text-white pointer-events-auto">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <h2 className="text-4xl font-bold mb-10 text-center">Experience</h2>
        <div className="space-y-8 max-w-3xl mx-auto">
          
          <div className="relative pl-8 border-l-2 border-white/20">
             <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
             <h3 className="text-2xl font-bold">Web Developer</h3>
             <span className="text-blue-400">2023 - Present</span>
             <p className="mt-2 text-gray-300">
               Building responsive web applications and experimenting with 3D web technologies.
             </p>
          </div>

          <div className="relative pl-8 border-l-2 border-white/20">
             <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
             <h3 className="text-2xl font-bold">Freelance Projects</h3>
             <span className="text-blue-400">2022 - 2023</span>
             <p className="mt-2 text-gray-300">
               Worked on various frontend projects for local businesses.
             </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
