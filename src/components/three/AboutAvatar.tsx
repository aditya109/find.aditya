import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useIsMobile } from "@/hooks/use-mobile";

function Avatar() {
  const g = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (!g.current) return;
    g.current.rotation.y += delta * 0.4;
    g.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
  });
  return (
    <group ref={g}>
      <mesh>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshStandardMaterial
          color="#2dd4a8"
          wireframe
          emissive="#73ffb8"
          emissiveIntensity={0.5}
        />
      </mesh>
      <mesh scale={0.9}>
        <icosahedronGeometry args={[1.4, 0]} />
        <meshStandardMaterial
          color="#0d3a2e"
          metalness={0.8}
          roughness={0.2}
          emissive="#2dd4a8"
          emissiveIntensity={0.15}
        />
      </mesh>
    </group>
  );
}

export function AboutAvatar() {
  const mobile = useIsMobile();
  return (
    <Canvas
      dpr={mobile ? 1 : [1, 1.5]}
      camera={{ position: [0, 0, 4.5], fov: 50 }}
      gl={{ antialias: !mobile, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[3, 3, 3]} intensity={1.4} color="#2dd4a8" />
      <pointLight position={[-3, -2, 2]} intensity={0.6} color="#a78bfa" />
      <Avatar />
    </Canvas>
  );
}
