import { OrbitControls } from "@react-three/drei";
import { button, useControls } from "leva";
import { Perf } from "r3f-perf";
export default function Experience() {
  const { PerfControls } = useControls({
    PerfControls: false,
  });
  const { position, color, visible, wireframe, myInterval } = useControls(
    "sphere",
    {
      position: {
        value: { x: -2, y: 0, z: 0 },
        step: 0.01,
        joystick: "invertY",
      },
      visible: true,
      wireframe: false,
      myInterval: {
        min: 0,
        max: 10,
        value: 1,
        step: 0.01,
      },
      clickMe: button(() => console.log("clicked")),
      choice: { options: ["-select-", "charan", "shivaraj", "prakyath"] },
    }
  );

  const { cubeScale } = useControls("cube", {
    cubeScale: {
      min: 1,
      max: 10,
      value: 1.5,
      step: 0.01,
    },
  });

  return (
    <>
      {PerfControls && <Perf position="top-left" />}

      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <mesh
        visible={visible}
        scale={myInterval}
        position={[position.x, position.y, position.z]}>
        <sphereGeometry />
        <meshStandardMaterial wireframe={wireframe} color="green" />
      </mesh>

      <mesh position-x={2} scale={cubeScale}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
