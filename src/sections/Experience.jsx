import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const experiences = [
  {
    role: 'Front-End Developer',
    type: 'Freelance',
    company: 'getCurex WebApp',
    location: 'Remote',
    period: 'Jul 2025 – Aug 2025',
    gradient: 'from-blue-600 to-cyan-500',
    border: 'border-blue-500/30',
    glow: 'shadow-blue-500/20',
    dotColor: 'bg-blue-500',
    bullets: [
      'Engineered a responsive front-end for a telehealth platform, leveraging React, TypeScript & CSS.',
      'Built a fully responsive SPA with React Router, component-driven architecture & seamless mobile-to-desktop experience.',
    ],
    tech: [
      { name: 'React', icon: `${CDN}/react/react-original.svg` },
      { name: 'TypeScript', icon: `${CDN}/typescript/typescript-original.svg` },
      { name: 'CSS', icon: `${CDN}/css3/css3-original.svg` },
      { name: 'React Router', icon: `${CDN}/reactrouter/reactrouter-original.svg` },
    ],
  },
];

const Experience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      if (!section) return;

      const stem = section.querySelector('.exp-stem');
      const nodes = section.querySelectorAll('.exp-node');
      const cards = section.querySelectorAll('.exp-card');
      const connectors = section.querySelectorAll('.exp-connector');
      const bullets = section.querySelectorAll('.exp-bullet');
      const techBadges = section.querySelectorAll('.exp-tech');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 100%',
          end: 'bottom 60%',
          scrub: 0.5,
        },
      });

      // 1. Stem grows downward
      tl.fromTo(
        stem,
        { scaleY: 0, autoAlpha: 0 },
        { scaleY: 1, autoAlpha: 1, duration: 1.5, ease: 'none' }
      );

      // 2. Timeline nodes pulse in
      nodes.forEach((node, i) => {
        tl.fromTo(
          node,
          { scale: 0, autoAlpha: 0 },
          { scale: 1, autoAlpha: 1, duration: 0.3, ease: 'back.out(2)' },
          0.3 + i * 0.5
        );
      });

      // 3. Connectors grow out from stem
      connectors.forEach((conn, i) => {
        tl.fromTo(
          conn,
          { scaleX: 0, autoAlpha: 0 },
          { scaleX: 1, autoAlpha: 1, duration: 0.3, ease: 'power2.out' },
          0.4 + i * 0.5
        );
      });

      // 4. Cards branch out
      cards.forEach((card, i) => {
        tl.fromTo(
          card,
          { x: -40, autoAlpha: 0, scaleX: 0 },
          { x: 0, autoAlpha: 1, scaleX: 1, duration: 0.5, ease: 'power2.out' },
          0.5 + i * 0.5
        );
      });

      // 5. Bullets reveal one by one
      bullets.forEach((bullet, i) => {
        tl.fromTo(
          bullet,
          { x: -20, autoAlpha: 0 },
          { x: 0, autoAlpha: 1, duration: 0.4, ease: 'power2.out' },
          0.8 + i * 0.3
        );
      });

      // 6. Tech badges pop in
      techBadges.forEach((badge, i) => {
        tl.fromTo(
          badge,
          { scale: 0, autoAlpha: 0 },
          { scale: 1, autoAlpha: 1, duration: 0.3, ease: 'back.out(1.7)' },
          1.2 + i * 0.15
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="w-full min-h-screen relative text-white flex flex-col items-center justify-start pointer-events-auto py-20 px-4"
    >
      {/* Title */}
      <h2 className="text-5xl md:text-7xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
        Experience
      </h2>
      <p className="text-gray-400 text-lg mb-16 text-center">Where I&apos;ve worked</p>

      {/* Timeline container */}
      <div className="w-full max-w-4xl relative">
        {/* Vertical stem */}
        <div
          className="exp-stem absolute left-6 md:left-8 top-0 w-[2px] h-full bg-gradient-to-b from-blue-600 via-purple-500 to-pink-500"
          style={{ visibility: 'hidden', transformOrigin: 'top center' }}
        />

        {/* Experience entries */}
        <div className="flex flex-col gap-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative flex items-start">
              {/* Timeline node */}
              <div
                className={`exp-node absolute left-6 md:left-8 -translate-x-1/2 z-10 w-4 h-4 rounded-full ${exp.dotColor} shadow-lg shadow-blue-500/50 ring-4 ring-blue-500/20`}
                style={{ visibility: 'hidden', top: '1.5rem' }}
              />

              {/* Connector line from stem to card */}
              <div
                className={`exp-connector absolute left-8 md:left-10 top-[1.65rem] w-8 md:w-10 h-[2px] bg-gradient-to-r ${exp.gradient}`}
                style={{ visibility: 'hidden', transformOrigin: 'left center' }}
              />

              {/* Card */}
              <div
                className={`exp-card ml-16 md:ml-20 flex-1 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border ${exp.border} shadow-lg ${exp.glow}`}
                style={{ visibility: 'hidden', transformOrigin: 'left center' }}
              >
                {/* Header */}
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {exp.role}
                  </h3>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full bg-gradient-to-r ${exp.gradient} text-white`}>
                    {exp.type}
                  </span>
                </div>

                {/* Company & meta */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-blue-400 font-medium">{exp.company}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400 text-sm">{exp.location}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400 text-sm">{exp.period}</span>
                </div>

                {/* Bullets */}
                <ul className="space-y-3 mb-5">
                  {exp.bullets.map((bullet, bi) => (
                    <li
                      key={bi}
                      className="exp-bullet flex items-start gap-3 text-gray-300 text-sm md:text-base"
                      style={{ visibility: 'hidden' }}
                    >
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.gradient} shrink-0`} />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, ti) => (
                    <div
                      key={ti}
                      className={`exp-tech flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border ${exp.border} text-sm text-gray-200`}
                      style={{ visibility: 'hidden' }}
                    >
                      <img
                        src={t.icon}
                        alt={t.name}
                        className="w-4 h-4 object-contain"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                      {t.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
