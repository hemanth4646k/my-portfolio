import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  const project4Ref = useRef(null);
  const project5Ref = useRef(null);
  const project6Ref = useRef(null);
  
  useGSAP(() => {
      const projects = [
        project1Ref.current,
        project2Ref.current,
        project3Ref.current,
        // project4Ref.current,
        // project5Ref.current,
      ];
    projects.forEach((project, index) => {
      gsap.fromTo(
        project,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: project,
            start: "top bottom-=100",
          },
        }
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="relative z-10 app-showcase pointer-events-auto">
      <div className="w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-teal-400 to-blue-500">
            Projects
          </h2>
        </div>
        <div className="showcase-layout">
          {/* leftside */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/linkstate.png" alt="Link State Routing Simulator" />
            </div>
            <div className="text-content">
              <h2>
                <a
                  href="https://github.com/hemanth4646k/Link-State-Routing-Simulator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Link State Routing Simulator ↗
                </a>
              </h2>
              <p className="text-white-50 md:text-xl">
                A visual, interactive simulator demonstrating how link state routing protocols operate in computer networks. Drag-and-drop routers, define custom link costs, watch animated LSP flooding, and compute shortest paths via Dijkstra&apos;s Algorithm — all in the browser.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {['React', 'GSAP', 'JavaScript', "Dijkstra's Algorithm"].map((t) => (
                  <span key={t} className="px-3 py-1 text-sm rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300">
                    {t}
                  </span>
                ))}
              </div>

            </div>
          </div>
          {/* rightside */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/code_sync.png" alt="CodeSathi" />
              </div>
              <h2>
                <a
                  href="https://github.com/hemanth4646k/code_sync"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  CodeSathi ↗
                </a>
              </h2>
              <p>
                A real-time collaborative code editing platform with live cursor tracking, file system synchronization, integrated chat, and user authentication — powered by Socket.IO, Monaco Editor, and MongoDB.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {['React', 'Node.js', 'Socket.IO', 'MongoDB', 'Monaco Editor'].map((t) => (
                  <span key={t} className="px-3 py-1 text-sm rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe2db]">
                <img src="/images/getcurex.png" alt="Get Curex Clone" />
              </div>
              <h2>
                <a
                  href="https://github.com/hemanth4646k/get-curex-clone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Get Curex Clone ↗
                </a>
              </h2>
              <p>
                A pixel-perfect clone of the Curex healthcare platform with 30+ fully built pages, responsive design, reusable UI components, and client-side routing — deployed on Vercel.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'React Router'].map((t) => (
                  <span key={t} className="px-3 py-1 text-sm rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
