import { Button } from "../components/Button";
import { words } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Canvas } from "@react-three/fiber";
const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.25,
        duration: 1,
        ease: "power2.inOut",
      }
    );
  });
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>
      <div className="hero-layout">
        {/* Left:Hero content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Hi, I'm <span className="text-blue-500">Your Name</span>
              </h1>
              <h1 className="text-4xl md:text-6xl font-bold mt-2">
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
            </div>
            <div className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              <p className="mb-4">
                Hello! I'm a passionate developer building my portfolio. I love creating visuals and functional web applications.
              </p>
              <p>
                My journey involves learning new technologies and applying them in real-world projects. I'm constantly looking for opportunities to grow and collaborate.
              </p>
            </div>
            <Button
              className="md:w-80 md:h-16 w-60 h-12 pointer-events-auto"
              id="button1"
              text="Contact Me"
            ></Button>
          </div>
        </header>
        {/* Right Side 3d model*/}
        
      
      </div>
    </section>
  );
};
export { Hero };
