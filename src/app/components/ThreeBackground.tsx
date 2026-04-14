import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 80;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Create particles
    const particleCount = 120;
    const positions: number[] = [];
    const velocities: THREE.Vector3[] = [];
    const spread = 100;

    for (let i = 0; i < particleCount; i++) {
      positions.push(
        (Math.random() - 0.5) * spread,
        (Math.random() - 0.5) * spread,
        (Math.random() - 0.5) * 40
      );
      velocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.06,
          (Math.random() - 0.5) * 0.06,
          (Math.random() - 0.5) * 0.02
        )
      );
    }

    const geometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(positions);
    geometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));

    const material = new THREE.PointsMaterial({
      color: 0x00d4ff,
      size: 0.7,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
    });

    const particlesMesh = new THREE.Points(geometry, material);
    scene.add(particlesMesh);

    // Lines geometry
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(particleCount * particleCount * 6);
    lineGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions, 3)
    );

    const lineMaterial = new THREE.LineSegments(
      lineGeometry,
      new THREE.LineBasicMaterial({
        color: 0x00d4ff,
        transparent: true,
        opacity: 0.15,
      })
    );
    scene.add(lineMaterial);

    // Mouse interaction
    const mouse = new THREE.Vector2(9999, 9999);
    const handleMouseMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / mount.clientWidth) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / mount.clientHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      const pos = geometry.attributes.position.array as Float32Array;

      // Update particle positions
      for (let i = 0; i < particleCount; i++) {
        pos[i * 3] += velocities[i].x;
        pos[i * 3 + 1] += velocities[i].y;
        pos[i * 3 + 2] += velocities[i].z;

        // Bounce off walls
        if (Math.abs(pos[i * 3]) > spread / 2) velocities[i].x *= -1;
        if (Math.abs(pos[i * 3 + 1]) > spread / 2) velocities[i].y *= -1;
        if (Math.abs(pos[i * 3 + 2]) > 20) velocities[i].z *= -1;
      }
      geometry.attributes.position.needsUpdate = true;

      // Update lines
      let lineIndex = 0;
      const lp = lineGeometry.attributes.position.array as Float32Array;
      const maxDist = 22;

      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = pos[i * 3] - pos[j * 3];
          const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
          const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < maxDist && lineIndex < lp.length - 5) {
            lp[lineIndex++] = pos[i * 3];
            lp[lineIndex++] = pos[i * 3 + 1];
            lp[lineIndex++] = pos[i * 3 + 2];
            lp[lineIndex++] = pos[j * 3];
            lp[lineIndex++] = pos[j * 3 + 1];
            lp[lineIndex++] = pos[j * 3 + 2];
          }
        }
      }
      // Clear remaining
      for (let k = lineIndex; k < lp.length; k++) lp[k] = 0;
      lineGeometry.attributes.position.needsUpdate = true;
      lineGeometry.setDrawRange(0, lineIndex / 3);

      // Subtle rotation based on mouse
      particlesMesh.rotation.y = mouse.x * 0.05 + elapsed * 0.03;
      particlesMesh.rotation.x = -mouse.y * 0.05 + elapsed * 0.01;
      lineMaterial.rotation.y = mouse.x * 0.05 + elapsed * 0.03;
      lineMaterial.rotation.x = -mouse.y * 0.05 + elapsed * 0.01;

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none" }}
    />
  );
}
