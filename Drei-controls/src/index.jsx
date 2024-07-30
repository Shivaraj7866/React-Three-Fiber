import ReactDom from "react-dom/client"
import Experience from "./Experience";
import { Canvas } from "@react-three/fiber";
import "./style.css";

const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(
  <>
    <Canvas
      camera={{
        fov: 45,
        position: [-4,3,6],
        near:0.1,
        far:200
      }}>
      <Experience />
    </Canvas>
  </>
);
