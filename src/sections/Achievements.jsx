const Achievements = () => {
  return (
    <section id="achievements" className="w-full py-20 bg-transparent text-white pointer-events-auto">
       <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <h2 className="text-4xl font-bold mb-10 text-center">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="p-6 border border-white/10 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
            <h3 className="text-xl font-bold mb-2">Hackathon Winner</h3>
            <p className="text-gray-400">Won 1st place in the City Hackathon 2024 for Best UI/UX.</p>
          </div>

          <div className="p-6 border border-white/10 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
            <h3 className="text-xl font-bold mb-2">Open Source Contributor</h3>
            <p className="text-gray-400">Contributed to several popular React libraries on GitHub.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;
