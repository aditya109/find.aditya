import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useIsMobile, useCanvasDpr } from "@/hooks/use-mobile";

function Particles({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.05;
    ref.current.rotation.x =
      THREE.MathUtils.lerp(ref.current.rotation.x, state.pointer.y * 0.5, 0.04);
    const targetZ = state.pointer.x * 0.5;
    ref.current.rotation.z = THREE.MathUtils.lerp(
      ref.current.rotation.z,
      targetZ,
      0.04,
    );
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#73ffb8"
        sizeAttenuation
        transparent
        opacity={0.9}
      />
    </points>
  );
}

export function ContactParticles() {
  const mobile = useIsMobile();
  const dpr = useCanvasDpr();
  return (
    <Canvas
      dpr={dpr}
      camera={{ position: [0, 0, 6], fov: 60 }}
      gl={{ antialias: !mobile, alpha: true, powerPreference: "high-performance" }}
      performance={{ min: 0.5 }}
    >
      <Particles count={mobile ? 600 : 1800} />
    </Canvas>
  );
}
