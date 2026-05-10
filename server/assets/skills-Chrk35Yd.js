import { V as jsxRuntimeExports, r as reactExports } from "./server-BZ2XrYGv.js";
import { u as useIsMobile, C as Canvas, O as Object3D, a as Color, V as Vector3, b as useFrame, c as ClientOnly } from "./use-mobile-k2JT7JgB.js";
import { m as motion } from "./proxy-BKWPxPGV.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const COLORS = [
  "#2dd4a8",
  "#73ffb8",
  "#a78bfa",
  "#f472b6",
  "#fbbf24",
  "#60a5fa"
];
function Field({ count }) {
  const ref = reactExports.useRef(null);
  const dummy = reactExports.useMemo(() => new Object3D(), []);
  const data = reactExports.useMemo(
    () => Array.from({ length: count }, () => ({
      pos: new Vector3(
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 12
      ),
      rot: new Vector3(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      ),
      speed: 0.2 + Math.random() * 0.5,
      scale: 0.15 + Math.random() * 0.45,
      color: new Color(COLORS[Math.floor(Math.random() * COLORS.length)])
    })),
    [count]
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
        d.pos.z
      );
      dummy.rotation.set(d.rot.x, d.rot.y, d.rot.z);
      dummy.scale.setScalar(d.scale);
      dummy.updateMatrix();
      ref.current.setMatrixAt(i, dummy.matrix);
      ref.current.setColorAt(i, d.color);
    });
    ref.current.instanceMatrix.needsUpdate = true;
    if (ref.current.instanceColor) ref.current.instanceColor.needsUpdate = true;
    ref.current.rotation.y = state.pointer.x * 0.15;
    ref.current.rotation.x = state.pointer.y * 0.1;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("instancedMesh", { ref, args: [void 0, void 0, count], children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("icosahedronGeometry", { args: [1, 0] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "meshStandardMaterial",
      {
        roughness: 0.3,
        metalness: 0.6,
        emissiveIntensity: 0.4
      }
    )
  ] });
}
function SkillsField() {
  const mobile = useIsMobile();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Canvas,
    {
      dpr: mobile ? 1 : [1, 1.5],
      camera: { position: [0, 0, 8], fov: 55 },
      gl: { antialias: !mobile, alpha: true },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.4 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [5, 5, 5], intensity: 1, color: "#2dd4a8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [-5, -3, 2], intensity: 0.6, color: "#a78bfa" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { count: mobile ? 28 : 70 })
      ]
    }
  );
}
const CATEGORIES = [{
  title: "Languages",
  bar: "bg-cat-language",
  chip: "border-cat-language/40 text-cat-language bg-cat-language/5 hover:bg-cat-language/15",
  items: ["Golang", "Rust", "Python"]
}, {
  title: "Platform Frameworks",
  bar: "bg-cat-platform",
  chip: "border-cat-platform/40 text-cat-platform bg-cat-platform/5 hover:bg-cat-platform/15",
  items: ["Temporal", "Databricks"]
}, {
  title: "Message Streaming",
  bar: "bg-cat-stream",
  chip: "border-cat-stream/40 text-cat-stream bg-cat-stream/5 hover:bg-cat-stream/15",
  items: ["Apache Kafka", "SQS", "SNS"]
}, {
  title: "Databases",
  bar: "bg-cat-db",
  chip: "border-cat-db/40 text-cat-db bg-cat-db/5 hover:bg-cat-db/15",
  items: ["PostgreSQL", "MongoDB", "Redis", "Aerospike"]
}, {
  title: "Cloud & DevOps",
  bar: "bg-cat-cloud",
  chip: "border-cat-cloud/40 text-cat-cloud bg-cat-cloud/5 hover:bg-cat-cloud/15",
  items: ["AWS", "GCP", "Azure", "Kubernetes", "CircleCI", "ArgoCD", "Jenkins", "Terraform", "Istio"]
}, {
  title: "Practices",
  bar: "bg-cat-practice",
  chip: "border-cat-practice/40 text-cat-practice bg-cat-practice/5 hover:bg-cat-practice/15",
  items: ["Unit Testing", "TDD", "Distributed Tracing", "Event-Driven Architecture"]
}];
function Skills() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ClientOnly, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SkillsField, {}) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/70 to-background pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 md:px-8 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, className: "text-sm uppercase tracking-[0.3em] text-primary/80", children: "Skills & Tech" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.6
      }, className: "mt-4 font-display font-bold text-5xl md:text-7xl", children: [
        "The ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-aurora", children: "full stack" }),
        " I reach for."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5", children: CATEGORIES.map((cat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 24
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        margin: "-80px"
      }, transition: {
        duration: 0.45,
        delay: i * 0.06
      }, className: "glass rounded-2xl p-6 relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute left-0 top-6 bottom-6 w-1 rounded-r-full ${cat.bar}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "pl-4 font-display text-xl font-semibold", children: cat.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 pl-4 flex flex-wrap gap-2", children: cat.items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-3 py-1.5 rounded-full text-sm border transition-colors ${cat.chip}`, children: it }, it)) })
      ] }, cat.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-16 text-center font-display tracking-[0.4em] text-xs text-muted-foreground/60", children: "FULL STACK" })
    ] })
  ] });
}
export {
  Skills as component
};
