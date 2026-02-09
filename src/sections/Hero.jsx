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
                Hi, I'm <span className="text-blue-500">Hemanth</span>
              </h1>
              <div className="text-3xl sm:text-4xl md:text-6xl font-bold mt-2 flex items-center gap-3">
                <span>I'm a</span>
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, i) => (
                      <span
                        key={i}
                        className="flex items-center pb-2 whitespace-nowrap"
                      >
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </div>
            </div>
            <div className="relative text-white text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl p-6 rounded-2xl bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_100%)]">
              {/* Radially fading backdrop blur */}
              <div
                className="absolute inset-0 rounded-2xl backdrop-blur-md pointer-events-none"
                style={{
                  maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 75%)',
                  WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 75%)',
                }}
              />
              <div className="relative z-10 text-center">
                <p>
                  Full-Stack Developer specializing in the MERN stack.
                  </p>
                  <p>My background in competitive programming allows me to write optimized, clean code and solve complex backend challenges with ease.
                </p>
                <p className="mt-4">
                  I’m eager to contribute to impactful projects and exchange knowledge. Let's build something great together.
                </p>
              </div>
            </div>
            <div className="w-full max-w-2xl flex justify-center">
              <Button
                className="w-1/2 h-12 sm:h-14 md:h-16 pointer-events-auto"
                href="#contact"
                text="Contact Me"
              />
            </div>
          </div>
        </header>
        {/* Right Side 3d model*/}
        
      
      </div>
    </section>
  );
};
export { Hero };
