import {
  PivotControls,
  TransformControls,
  OrbitControls,
  Html,
  Text,
  Float,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { useRef } from "react";

export default function Experience() {
  const cubeRef = useRef();
  const sphereRef = useRef();
  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <PivotControls
        anchor={[0, 0, 0]}
        depthTest={false}
        scale={100}
        lineWidth={4}
        axisColors={["red", "green", "blue"]}
        fixed={true}>
        <mesh ref={sphereRef} position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
          <Html
            wrapperClass="label"
            distanceFactor={6}
            position={[1, 1, 0]}
            occlude={[cubeRef, sphereRef]}
            center>
            That's a sphere with PivotControls
          </Html>
        </mesh>
      </PivotControls>

      <mesh ref={cubeRef} position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
        <Html
          wrapperClass="label"
          position={[1, 0.5, 0]}
          center
          occlude={[cubeRef, sphereRef]}>
          Box with TransformControls
        </Html>
      </mesh>
      <TransformControls object={cubeRef} mode="translate" />

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        {/* <meshStandardMaterial color="greenyellow" /> */}
        <MeshReflectorMaterial
        color="skyblue"
        resolution={512}
        blur={[1000,1000]}
        mixBlur={1}
        mirror={0.75}

        />
      </mesh>
      <Float speed={5} floatIntensity={2}>
        <Text
          position={[0, 2, 0]}
          font="./bangers-v20-latin-regular.woff"
          color="salmon"
          maxWidth={2}
          textAlign="center"
          fontSize={1}>
          I LOVE R3F
          {/* <meshNormalMaterial /> */}

        </Text>
      </Float>
    </>
  );
}


