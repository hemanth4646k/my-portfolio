const Skills = () => {
  return (
    <section id="skills" className="w-full h-screen bg-transparent text-white flex flex-col items-center justify-center pointer-events-auto">
      <h2 className="text-4xl font-bold mb-10">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Helper text until we implement the full section */}
        <div className="p-5 border border-white/20 rounded-lg">
          <h3 className="text-xl font-bold">Frontend</h3>
          <p className="text-gray-400">React, Tailwind, Three.js</p>
        </div>
        <div className="p-5 border border-white/20 rounded-lg">
          <h3 className="text-xl font-bold">Backend</h3>
          <p className="text-gray-400">Node.js, Python, Databases</p>
        </div>
        <div className="p-5 border border-white/20 rounded-lg">
          <h3 className="text-xl font-bold">Tools</h3>
          <p className="text-gray-400">Git, VS Code, Figma</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;