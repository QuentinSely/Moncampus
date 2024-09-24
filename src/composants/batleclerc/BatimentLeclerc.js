import React, { useEffect } from "react";

import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

import { BatLeclerc } from "./Unedent";

const BatimentLeclerc = () => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.z += -7;
    camera.position.y += 0;
    camera.position.x += 5;
    camera.updateProjectionMatrix();
  }, []);
  return (
    <>
      Lumière ambiante avec une intensité subtile pour un éclairage de base
      <ambientLight intensity={2.4} />
      {/* Lumière directionnelle pour simuler la lumière du soleil */}
      <directionalLight castShadow position={[1, 2, 4]} intensity={1.5} />
      <directionalLight
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        position={[1, 2, 4]}
        intensity={3.5}
      />
      <directionalLight
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={-50}
        shadow-camera-left={10}
        shadow-camera-right={-10}
        shadow-camera-top={-10}
        shadow-camera-bottom={10}
        position={[-1, -2, -4]}
        intensity={5.5}
      />
      {/* OrbitControls pour naviguer autour de la scène */}
      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
      {/* // minAzimuthAngle={-Math.PI / 2.8} // -45 degrees
        // maxAzimuthAngle={Math.PI / 4} //  45 degrees */}
      {/* <Dental position={[0, -2, 0]} /> */}
      <BatLeclerc position={[0, -8, 0]} />
    </>
  );
};

export default BatimentLeclerc;
