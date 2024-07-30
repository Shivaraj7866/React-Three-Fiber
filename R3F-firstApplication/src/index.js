import { Canvas } from "@react-three/fiber";
import { createRoot } from "react-dom/client";
import "./style.css";
import Experience from "./Components/Experience";
import * as THREE from "three";

const root = createRoot(document.querySelector("#root"));

const cameraSettings = {
  fov: 45,
  near: 0.1,
  far: 1000,
  position: [2, 3, 6],
};

root.render(
  <>
    <Canvas
      dpr={[1, 2]}
      gl={{
        antialias: true,
        toneMapping: THREE.CineonToneMapping,
        outputColorSpace: THREE.SRGBColorSpace,
      }}
      camera={cameraSettings}>
      <Experience />
    </Canvas>
  </>
);
