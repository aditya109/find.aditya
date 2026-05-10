import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState, useCallback, type ReactNode } from "react";
import * as THREE from "three";

const PARTICLE_COUNT = 40;

function Particles({ hovered }: { hovered: boolean }) {
  const mesh = useRef<THREE.Points>(null);
  const targetSpeed = useRef(0);
  const speed = useRef(0);

  const [positions, sizes] = (() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const sz = new Float32Array(PARTICLE_COUNT);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 4;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 1.5;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 1;
      sz[i] = Math.random() * 3 + 1;
    }
    return [pos, sz] as const;
  })();

  useFrame((_state, delta) => {
    targetSpeed.current = hovered ? 1 : 0.15;
    speed.current += (targetSpeed.current - speed.current) * delta * 3;

    if (!mesh.current) return;
    const geo = mesh.current.geometry;
    const posAttr = geo.getAttribute("position");
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      let x = posAttr.getX(i);
      x += delta * speed.current * (0.3 + sizes[i] * 0.15);
      if (x > 2) x = -2;
      posAttr.setX(i, x);
    }
    posAttr.needsUpdate = true;
    mesh.current.rotation.z += delta * speed.current * 0.08;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={PARTICLE_COUNT}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
          count={PARTICLE_COUNT}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#2dd4a8"
        transparent
        opacity={hovered ? 0.9 : 0.4}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export function FunkyButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const containerRef = useRef<HTMLAnchorElement>(null);
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setTilt({ x: y * -14, y: x * 14 });
    },
    [],
  );

  const handleMouseLeave = useCallback(() => {
    setHovered(false);
    setTilt({ x: 0, y: 0 });
  }, []);

  return (
    <a
      ref={containerRef}
      href={href}
      download
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-foreground overflow-hidden transition-shadow duration-300 cursor-pointer select-none"
      style={{
        perspective: "600px",
        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: hovered
          ? "transform 0.08s ease-out, box-shadow 0.3s"
          : "transform 0.4s ease-out, box-shadow 0.3s",
        boxShadow: hovered
          ? "0 0 24px oklch(0.82 0.18 170 / 0.5), inset 0 0 20px oklch(0.82 0.18 170 / 0.08)"
          : "0 0 0 oklch(0.82 0.18 170 / 0)",
        border: "1px solid oklch(0.82 0.18 170 / 0.25)",
        background: "oklch(0.22 0.045 235 / 0.8)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Three.js particle canvas behind text */}
      <span className="absolute inset-0 pointer-events-none">
        <Canvas
          dpr={1}
          camera={{ position: [0, 0, 2], fov: 50 }}
          gl={{ alpha: true, antialias: false }}
          style={{ width: "100%", height: "100%" }}
        >
          <Particles hovered={hovered} />
        </Canvas>
      </span>
      {/* Button content */}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </a>
  );
}
