import React, { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

const CustomObject = () => {
  const verticesCount = 30;
  const bufferRef = useRef();
  
  useEffect(()=>{
    bufferRef.current.computeVertexNormals();

},[])

  const positions = useMemo(() => {
    const positions = new Float32Array(verticesCount * 3);

    for (let i = 0; i < verticesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 3;
    }

    return positions;
  }, []);

  return (
    <mesh>
      <bufferGeometry ref={bufferRef}>
        <bufferAttribute
          attach="attributes-position"
          count={verticesCount}
          array={positions}
          itemSize={4}
        />
      </bufferGeometry>
      <meshStandardMaterial color="red" side={THREE.DoubleSide} />
    </mesh>
  );
};

export default CustomObject;
