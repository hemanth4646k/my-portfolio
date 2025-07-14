import AnimatedCounter from "../components/AnimatedCounter";
import { Button } from "../components/Button";
import OceanScene from "./HeroModel/OceanScene";
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
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>
      <div className="hero-layout">
        {/* Left:Hero content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
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
              <h1>that Deliver Results</h1>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
              labore eligendi fugit.
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12 pointer-events-auto"
              id="button1"
              text="See my work"
            ></Button>
          </div>
        </header>
        {/* Right Side 3d model*/}
        
      
      </div>
      <AnimatedCounter></AnimatedCounter>
    </section>
  );
};
export { Hero };
