import { useFrame } from "@react-three/fiber";
import {
  BakeShadows,
  OrbitControls,
  SoftShadows,
  useHelper,
} from "@react-three/drei";
import { useRef } from "react";
import { Perf } from "r3f-perf";
import * as THREE from "three";

export default function Experience() {
  const cube = useRef();
  const dLight = useRef();

  useHelper(dLight, THREE.DirectionalLightHelper, 1, "green");

  useFrame((state, delta) => {
    cube.current.rotation.y += delta * 0.2;
  });

  return (
    <>
      <color args={["skyblue"]} attach="background" />

      {/* <BakeShadows /> */}
      <SoftShadows frustrum={3.5} size={20} samples={10} near={9.5} rings={11} />

      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight
        ref={dLight}
        position={[1, 2, 3]}
        intensity={4.5}
        castShadow
        shadow-mapSize={[720, 720]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={3}
        shadow-camera-right={3}
        shadow-camera-bottom={-3}
        shadow-camera-left={-3}
      />
      <ambientLight intensity={1.5} />

      <mesh position-x={-2} castShadow>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh ref={cube} position-x={2} scale={1.5} castShadow>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="ivory" />
      </mesh>
    </>
  );
}
