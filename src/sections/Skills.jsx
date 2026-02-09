import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const skillsData = [
  {
    category: 'Languages',
    gradient: 'from-blue-600 to-cyan-500',
    border: 'border-blue-500/30',
    glow: 'shadow-blue-500/20',
    skills: [
      { name: 'C/C++', icon: `${CDN}/cplusplus/cplusplus-original.svg` },
      { name: 'SQL', icon: `${CDN}/azuresqldatabase/azuresqldatabase-original.svg` },
      { name: 'JavaScript', icon: `${CDN}/javascript/javascript-original.svg` },
      { name: 'HTML/CSS', icon: `${CDN}/html5/html5-original.svg` },
    ],
  },
  {
    category: 'Frameworks',
    gradient: 'from-purple-600 to-pink-500',
    border: 'border-purple-500/30',
    glow: 'shadow-purple-500/20',
    skills: [
      { name: 'React.js', icon: `${CDN}/react/react-original.svg` },
      { name: 'MongoDB', icon: `${CDN}/mongodb/mongodb-original.svg` },
      { name: 'Node.js', icon: `${CDN}/nodejs/nodejs-original.svg` },
      { name: 'Three.js', icon: `${CDN}/threejs/threejs-original.svg` },
      { name: 'GSAP', icon: `${CDN}/javascript/javascript-original.svg` },
      { name: 'Express.js', icon: `${CDN}/express/express-original.svg` },
      { name: 'Bootstrap', icon: `${CDN}/bootstrap/bootstrap-original.svg` },
      { name: 'Recoil', icon: `${CDN}/react/react-original.svg` },
    ],
  },
  {
    category: 'Dev Tools',
    gradient: 'from-emerald-600 to-green-500',
    border: 'border-emerald-500/30',
    glow: 'shadow-emerald-500/20',
    skills: [
      { name: 'Git', icon: `${CDN}/git/git-original.svg` },
      { name: 'GitHub', icon: `${CDN}/github/github-original.svg` },
      { name: 'VS Code', icon: `${CDN}/vscode/vscode-original.svg` },
      { name: 'React DevTools', icon: `${CDN}/react/react-original.svg` },
      { name: 'Postman', icon: `${CDN}/postman/postman-original.svg` },
      { name: 'Vercel', icon: `${CDN}/vercel/vercel-original.svg` },
    ],
  },
];

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      skillsData.forEach((_, catIdx) => {
        const column = document.querySelector(`.skill-col-${catIdx}`);
        if (!column) return;

        const header = column.querySelector('.cat-header');
        const cards = column.querySelectorAll('.skill-card');
        const connectors = column.querySelectorAll('.branch-connector');
        const stem = column.querySelector('.tree-stem');

        // Single scrub timeline per column
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: column,
            start: 'top 100%',
            end: 'bottom 50%',
            scrub: 0.5,
          },
        });

        // 1. Header stretches in
        tl.fromTo(
          header,
          { scaleX: 0, autoAlpha: 0 },
          { scaleX: 1, autoAlpha: 1, duration: 0.5, ease: 'power3.out' }
        );

        // 2. Stem grows downward
        tl.fromTo(
          stem,
          { scaleY: 0, autoAlpha: 0 },
          { scaleY: 1, autoAlpha: 1, duration: 2, ease: 'none' },
          0.2
        );

        // 3. Cards + connectors branch out sequentially as stem grows
        cards.forEach((card, i) => {
          const connector = connectors[i];
          const t = 0.4 + i * 0.4; // earlier start + tighter stagger
          const fromLeft = i % 2 === 0;

          // Connector grows out from stem
          if (connector) {
            tl.fromTo(
              connector,
              { scaleX: 0, autoAlpha: 0 },
              { scaleX: 1, autoAlpha: 1, duration: 0.3, ease: 'power2.out' },
              t
            );
          }

          // Card slides out from stem side
          tl.fromTo(
            card,
            { x: fromLeft ? 40 : -40, autoAlpha: 0, scaleX: 0 },
            { x: 0, autoAlpha: 1, scaleX: 1, duration: 0.5, ease: 'power2.out' },
            t + 0.1
          );
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="w-full min-h-screen relative text-white flex flex-col items-center justify-start pointer-events-auto py-20 px-4"
    >
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-teal-400 to-blue-500">
        Tech Stack
      </h2>

      {/* Three Column Layout */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {skillsData.map((cat, catIdx) => (
          <div key={cat.category} className={`skill-col-${catIdx} flex flex-col items-center`}>
            {/* Category Header — the root */}
            <div
              className={`cat-header w-full py-4 rounded-2xl bg-gradient-to-r ${cat.gradient} text-center font-bold text-xl md:text-2xl shadow-lg ${cat.glow}`}
              style={{ visibility: 'hidden', transformOrigin: 'center center' }}
            >
              {cat.category}
            </div>

            {/* Tree: stem + branches */}
            <div className="relative w-full flex flex-col items-center">
              {/* Vertical stem line */}
              <div
                className={`tree-stem absolute left-1/2 top-0 w-[2px] h-full -translate-x-1/2 bg-gradient-to-b ${cat.gradient}`}
                style={{ visibility: 'hidden', transformOrigin: 'top center' }}
              />

              {/* Skill Cards — branches */}
              <div className="w-full flex flex-col gap-3 pt-4 relative">
                {cat.skills.map((skill, i) => (
                  <div key={skill.name} className="relative flex items-center">
                    {/* Branch connector line */}
                    <div
                      className={`branch-connector absolute left-1/2 top-1/2 -translate-y-1/2 w-6 h-[2px] bg-gradient-to-r ${cat.gradient}`}
                      style={{ visibility: 'hidden', transformOrigin: i % 2 === 0 ? 'right center' : 'left center', transform: `translate(${i % 2 === 0 ? '-100%' : '0'}, -50%)` }}
                    />
                    {/* Card */}
                    <div
                      className={`skill-card flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 backdrop-blur-sm border ${cat.border} hover:bg-white/10 hover:scale-[1.03] transition-all duration-300 cursor-default ${i % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'} w-[46%]`}
                      style={{ visibility: 'hidden', transformOrigin: i % 2 === 0 ? 'right center' : 'left center' }}
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-8 h-8 object-contain shrink-0"
                        loading="lazy"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                      <span className="text-sm md:text-base font-medium text-gray-100 whitespace-nowrap">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
