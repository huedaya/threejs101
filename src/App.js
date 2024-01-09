import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

const App = () => {
  function CelestialObject(props) {
    // Use ref to get access to the div
    const meshRef = useRef();

    // Rotate the mesh
    useFrame((state, delta) => (meshRef.current.rotation.y += delta / 5));

    // Apply texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load("world_map.svg");
    const material = new THREE.MeshStandardMaterial({
      map: texture,
    });

    return (
      <mesh {...props} ref={meshRef} scale={1}>
        <sphereGeometry args={[2, 32, 32]} />
        <primitive object={material} />
      </mesh>
    );
  }

  function SpaceObject(props) {
    // Texture for spaces container
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load("stars.jpg");

    return (
      <mesh scale={14} position={[0, 0, -6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    );
  }

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas style={{ width: "100%", height: "100%" }}>
        <ambientLight />
        <CelestialObject position={[0, 0, 0]} />
        <SpaceObject />
      </Canvas>
    </div>
  );
};

export default App;
