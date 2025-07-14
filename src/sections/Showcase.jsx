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
    <section ref={sectionRef} id="work" className="z-100 app-showcase pointer-events-auto">
      <div className="w-full">
        <div className="showcase-layout">
          {/* leftside */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Project1" />
            </div>
            <div className="text-content">
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam,
                atque.
              </h2>
              <p className="text-white-50 md:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                dolorem deleniti vel laboriosam voluptatum maiores voluptas aut
                reprehenderit tenetur nisi.
              </p>
            </div>
          </div>
          {/* rightside */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="project2" />
              </div>
              <h2>Project2</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                blanditiis iste asperiores eveniet non itaque possimus eos, unde
                dolorum sed!
              </p>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe2db]">
                <img src="/images/project2.png" alt="project2" />
              </div>
              <h2>Project2</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                blanditiis iste asperiores eveniet non itaque possimus eos, unde
                dolorum sed!
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
