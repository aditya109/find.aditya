import { V as jsxRuntimeExports, r as reactExports } from "./server-BZ2XrYGv.js";
import { u as useIsMobile, C as Canvas, b as useFrame, c as ClientOnly } from "./use-mobile-k2JT7JgB.js";
import { m as motion } from "./proxy-BKWPxPGV.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function Avatar() {
  const g = reactExports.useRef(null);
  useFrame((state, delta) => {
    if (!g.current) return;
    g.current.rotation.y += delta * 0.4;
    g.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { ref: g, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("icosahedronGeometry", { args: [1.4, 1] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meshStandardMaterial",
        {
          color: "#2dd4a8",
          wireframe: true,
          emissive: "#73ffb8",
          emissiveIntensity: 0.5
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { scale: 0.9, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("icosahedronGeometry", { args: [1.4, 0] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meshStandardMaterial",
        {
          color: "#0d3a2e",
          metalness: 0.8,
          roughness: 0.2,
          emissive: "#2dd4a8",
          emissiveIntensity: 0.15
        }
      )
    ] })
  ] });
}
function AboutAvatar() {
  const mobile = useIsMobile();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Canvas,
    {
      dpr: mobile ? 1 : [1, 1.5],
      camera: { position: [0, 0, 4.5], fov: 50 },
      gl: { antialias: !mobile, alpha: true },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.5 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [3, 3, 3], intensity: 1.4, color: "#2dd4a8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [-3, -2, 2], intensity: 0.6, color: "#a78bfa" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, {})
      ]
    }
  );
}
const PRINCIPLES = ["Event-driven beats request/response at scale.", "Observability is a feature, not a chore.", "Workflows-as-code make failure recoverable.", "Boring, tested infra over clever, fragile infra.", "Backwards compatibility is empathy for future-you."];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-5 md:px-8 py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, className: "text-sm uppercase tracking-[0.3em] text-primary/80", children: "About" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.6
    }, className: "mt-4 font-display font-bold text-5xl md:text-7xl", children: [
      "Engineer of ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-aurora", children: "quiet systems." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid md:grid-cols-[1.2fr_1fr] gap-10 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 text-lg text-muted-foreground leading-relaxed", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "I'm Aditya — a backend & platform engineer who likes the parts of software nobody sees: queues, locks, audit trails, the timeout that saved you on Sunday night." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "Today I'm a Senior Software Engineer at",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Flexera" }),
          ", designing cloud-billing services and Temporal-based workflow orchestration that has to be right the first time, every time."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Before that, I've worked across event-driven architectures with Kafka, SQS/SNS, and queue adapters; built CloudFormation StackSet provisioning for IAM; and migrated legacy credential stores without breaking downstream consumers." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-[420px] rounded-3xl glass overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ClientOnly, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AboutAvatar, {}) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-semibold", children: "How I think" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 grid md:grid-cols-2 gap-3", children: PRINCIPLES.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.li, { initial: {
        opacity: 0,
        x: -10
      }, whileInView: {
        opacity: 1,
        x: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.06
      }, className: "glass rounded-xl px-5 py-4 flex gap-3 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary font-display", children: [
          "0",
          i + 1
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/90", children: p })
      ] }, p)) })
    ] })
  ] });
}
export {
  About as component
};
