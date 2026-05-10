import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useIsMobile } from "@/hooks/use-mobile";

function Spine({ progress }: { progress: number }) {
  const orbRef = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (orbRef.current) {
      orbRef.current.position.y = THREE.MathUtils.lerp(
        orbRef.current.position.y,
        4 - progress * 8,
        0.08,
      );
      const s = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.08;
      orbRef.current.scale.setScalar(s);
    }
  });
  return (
    <>
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 12, 8]} />
        <meshBasicMaterial color="#2dd4a8" transparent opacity={0.35} />
      </mesh>
      {Array.from({ length: 12 }).map((_, i) => (
        <mesh key={i} position={[0, 5 - i, 0]}>
          <torusGeometry args={[0.18, 0.012, 8, 32]} />
          <meshBasicMaterial color="#73ffb8" transparent opacity={0.4} />
        </mesh>
      ))}
      <mesh ref={orbRef} position={[0, 4, 0]}>
        <sphereGeometry args={[0.22, 32, 32]} />
        <meshBasicMaterial color="#73ffb8" />
      </mesh>
      <pointLight position={[0, 4, 1]} color="#2dd4a8" intensity={2} distance={4} />
    </>
  );
}

export function TimelineSpine() {
  const mobile = useIsMobile();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Canvas
      dpr={mobile ? 1 : [1, 1.5]}
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ antialias: !mobile, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <Spine progress={progress} />
    </Canvas>
  );
}
