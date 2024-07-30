import React, { useRef } from "react";
import { useThree, extend, useFrame } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import CustomObject from "./CustomObject";

extend({ OrbitControls });

const Experience = () => {
  const boxRef = useRef();
  const groupRef = useRef();
  const three = useThree();
  const { camera, gl } = three;


  useFrame((state, delta) => {
    const angle = state.clock.elapsedTime
    
    state.camera.position.x = Math.sin(angle) * 8
    state.camera.position.z = Math.cos(angle) * 8
    state.camera.lookAt(0,0,0)
    
    boxRef.current.rotation.y += delta;
  });

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />

      <directionalLight position={[1,2,3]} intensity={4.5}/>
      <ambientLight intensity={1.5}/>

      <group ref={groupRef}>
        <mesh position={[-2, 0, 1]}>
          <sphereGeometry />
          <meshStandardMaterial color={"orange"} wireframe={false} />
        </mesh>
        <mesh
          ref={boxRef}
          position-x={2}
          rotation-y={Math.PI * 0.25}
          scale={1.5}>
          <boxGeometry />
          <meshStandardMaterial color={"purple"} wireframe={false} />
        </mesh>
      </group>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color={"green"} wireframe={false} />
      </mesh>

      <CustomObject />
    </>
  );
};

export default Experience;
