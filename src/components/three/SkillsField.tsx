import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useIsMobile, useCanvasDpr } from "@/hooks/use-mobile";

const COLORS = [
  "#2dd4a8",
  "#73ffb8",
  "#a78bfa",
  "#f472b6",
  "#fbbf24",
  "#60a5fa",
];

function Field({ count }: { count: number }) {
  const ref = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const data = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        pos: new THREE.Vector3(
          (Math.random() - 0.5) * 18,
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 12,
        ),
        rot: new THREE.Vector3(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI,
        ),
        speed: 0.2 + Math.random() * 0.5,
        scale: 0.15 + Math.random() * 0.45,
        color: new THREE.Color(COLORS[Math.floor(Math.random() * COLORS.length)]),
      })),
    [count],
  );

  useFrame((state, delta) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    data.forEach((d, i) => {
      d.rot.x += delta * d.speed * 0.4;
      d.rot.y += delta * d.speed * 0.3;
      dummy.position.set(
        d.pos.x + Math.sin(t * d.speed + i) * 0.4,
        d.pos.y + Math.cos(t * d.speed * 0.8 + i) * 0.4,
        d.pos.z,
      );
      dummy.rotation.set(d.rot.x, d.rot.y, d.rot.z);
      dummy.scale.setScalar(d.scale);
      dummy.updateMatrix();
      ref.current!.setMatrixAt(i, dummy.matrix);
      ref.current!.setColorAt(i, d.color);
    });
    ref.current.instanceMatrix.needsUpdate = true;
    if (ref.current.instanceColor) ref.current.instanceColor.needsUpdate = true;
    ref.current.rotation.y = state.pointer.x * 0.15;
    ref.current.rotation.x = state.pointer.y * 0.1;
  });

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, count]}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        roughness={0.3}
        metalness={0.6}
        emissiveIntensity={0.4}
      />
    </instancedMesh>
  );
}

export function SkillsField() {
  const mobile = useIsMobile();
  const dpr = useCanvasDpr();
  return (
    <Canvas
      dpr={dpr}
      camera={{ position: [0, 0, 8], fov: 55 }}
      gl={{ antialias: !mobile, alpha: true, powerPreference: "high-performance" }}
      performance={{ min: 0.5 }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#2dd4a8" />
      <pointLight position={[-5, -3, 2]} intensity={0.6} color="#a78bfa" />
      <Field count={mobile ? 28 : 70} />
    </Canvas>
  );
}
