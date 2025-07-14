import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Hero } from "./sections/Hero";
import Showcase from "./sections/Showcase";
import OceanScene from "./sections/HeroModel/OceanScene";
import { PanProvider, usePan } from "./context/PanProvider";

function App() {
  return (
    <PanProvider>
      <AppComponent />
    </PanProvider>
  );
}

function AppComponent() {
  const { handlePointerDown, handlePointerMove, handlePointerUp } = usePan();
  return (
    <div>
      <div className="hero-3d-layout">
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
      <div className="relative select-none" style={{ pointerEvents: "none" }}>
        <Hero></Hero>
        <Showcase></Showcase>
      </div>
    </div>
  );
}

export default App;
