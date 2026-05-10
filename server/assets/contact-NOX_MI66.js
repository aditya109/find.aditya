import { V as jsxRuntimeExports, r as reactExports } from "./server-BZ2XrYGv.js";
import { u as useIsMobile, C as Canvas, b as useFrame, M as MathUtils, c as ClientOnly } from "./use-mobile-k2JT7JgB.js";
import { m as motion } from "./proxy-BKWPxPGV.js";
import { c as createLucideIcon } from "./router-C4nYUeac.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$4 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode$4);
const __iconNode$3 = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
];
const Copy = createLucideIcon("copy", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef"
    }
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
];
const Github = createLucideIcon("github", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
];
const Linkedin = createLucideIcon("linkedin", __iconNode$1);
const __iconNode = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode);
function Particles({ count }) {
  const ref = reactExports.useRef(null);
  const positions = reactExports.useMemo(() => {
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
    ref.current.rotation.x = MathUtils.lerp(ref.current.rotation.x, state.pointer.y * 0.5, 0.04);
    const targetZ = state.pointer.x * 0.5;
    ref.current.rotation.z = MathUtils.lerp(
      ref.current.rotation.z,
      targetZ,
      0.04
    );
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("points", { ref, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("bufferGeometry", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "bufferAttribute",
      {
        attach: "attributes-position",
        args: [positions, 3]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "pointsMaterial",
      {
        size: 0.04,
        color: "#73ffb8",
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.9
      }
    )
  ] });
}
function ContactParticles() {
  const mobile = useIsMobile();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Canvas,
    {
      dpr: mobile ? 1 : [1, 1.5],
      camera: { position: [0, 0, 6], fov: 60 },
      gl: { antialias: !mobile, alpha: true },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Particles, { count: mobile ? 600 : 1800 })
    }
  );
}
const EMAIL = "hello@aditya.dev";
function Contact() {
  const [copied, setCopied] = reactExports.useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[80vh]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ClientOnly, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContactParticles, {}) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-background/30 via-background/60 to-background pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-5 md:px-8 py-20 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, className: "text-sm uppercase tracking-[0.3em] text-primary/80", children: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.6
      }, className: "mt-4 font-display font-bold text-5xl md:text-7xl", children: [
        "Let's ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-aurora", children: "build" }),
        " something durable."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-muted-foreground max-w-xl mx-auto", children: "Open to senior backend, platform, and distributed-systems roles, plus interesting consulting around Temporal & event-driven architecture." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 inline-flex items-center gap-2 glass rounded-full pl-5 pr-2 py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 16, className: "text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-sm", children: EMAIL }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: copy, className: "ml-2 inline-flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-xs font-medium hover:scale-[1.03] transition-transform", children: [
          copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { size: 14 }),
          copied ? "Copied" : "Copy"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/aditya109", target: "_blank", rel: "noreferrer", className: "glass rounded-full p-3 hover:border-primary/40 transition-colors", "aria-label": "GitHub", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { size: 18 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://linkedin.com/in/aditya", target: "_blank", rel: "noreferrer", className: "glass rounded-full p-3 hover:border-primary/40 transition-colors", "aria-label": "LinkedIn", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { size: 18 }) })
      ] })
    ] })
  ] });
}
export {
  Contact as component
};
