"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Edges, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion-3d";

export default function Cube() {
  return (
    <Canvas className="w-full aspect-square">
      <OrbitControls enableZoom={false} enablePan={false} />
      <ambientLight intensity={2} />
      <CubeMesh />
    </Canvas>
  );
}

function CubeMesh() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (mesh.current) {
      const elapsedTime = state.clock.getElapsedTime();
      mesh.current.rotation.x += Math.cos(2 * elapsedTime + Math.PI) / 1500;
      mesh.current.rotation.y += Math.sin(elapsedTime) / 1500;
    }
  });

  return (
    // @ts-expect-error: motion.mesh does not infer ref as THREE.Mesh
    <motion.mesh ref={mesh} rotation={[0, -Math.PI / 6, 0]}>
      <boxGeometry args={[3, 3, 3]} />
      <meshBasicMaterial transparent opacity={0} />
      <Edges color="black" />
      {/* 
    // @ts-expect-error: motion.mesh does not infer ref as THREE.Mesh */}
    </motion.mesh>
  );
}