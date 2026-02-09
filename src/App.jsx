import { Canvas } from "@react-three/fiber";
import Navbar from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Showcase from "./sections/Showcase";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import OceanScene from "./sections/HeroModel/OceanScene";
import { PanProvider, usePan } from "./context/PanProvider";
import { useEffect, useState } from "react";

function App() {
  return (
    <PanProvider>
      <AppComponent />
    </PanProvider>
  );
}

function AppComponent() {
  const { handlePointerDown, handlePointerMove, handlePointerUp } = usePan();
  const [startLoading, setStartLoading] = useState(false);
  useEffect(() => {
    // 200ms delay before starting 3D loading
    const timer = setTimeout(() => {
      setStartLoading(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <Navbar />
      { (
        <div className={`hero-3d-layout transition-opacity duration-500 fixed top-0 left-0 w-full h-full z-0 pointer-events-none ${startLoading ? "opacity-100" : "opacity-0"}`}>
          <Canvas
            camera={{ fov: 55, near: 1, far: 20000 }}
            style={{
              pointerEvents: "auto",
              height: "100vh",
              width: "100vw",
              background: "#000",
              zIndex: "0",
            }}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerMove={handlePointerMove}
          >
            <OceanScene />
          </Canvas>
        </div>
      )}
      <div className="relative select-none" style={{ pointerEvents: "none" }}>
        <Hero></Hero>
        <Skills />
        <Achievements />
        <Experience />
        <Showcase></Showcase>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
