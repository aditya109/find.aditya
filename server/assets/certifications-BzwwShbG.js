import { V as jsxRuntimeExports } from "./server-BZ2XrYGv.js";
import { m as motion } from "./proxy-BKWPxPGV.js";
import { c as createLucideIcon } from "./router-C4nYUeac.js";
import { E as ExternalLink } from "./external-link-CGvRF8do.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode);
const CERTS = [{
  title: "Certified Kubernetes Administrator",
  issuer: "The Linux Foundation",
  period: "Valid '21 – '24",
  badge: "/cka.png",
  validateUrl: "https://www.credly.com/badges/65b33e5c-851e-4db6-aba7-8f96cbe837b9/public_url",
  description: "Earners of this designation demonstrated the skills, knowledge and competencies to perform the responsibilities of a Kubernetes Administrator.",
  skills: ["Cluster Administration", "Networking", "Storage", "Security", "Workloads"]
}];
function Certifications() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-5 md:px-8 py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, className: "text-sm uppercase tracking-[0.3em] text-primary/80", children: "Credentials" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.6
    }, className: "mt-4 font-display font-bold text-5xl md:text-7xl max-w-4xl", children: [
      "Certified to ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-aurora", children: "ship with confidence." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-8 max-w-3xl", children: CERTS.map((cert, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { initial: {
      opacity: 0,
      y: 24
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true,
      margin: "-80px"
    }, transition: {
      duration: 0.5,
      delay: i * 0.1
    }, className: "glass rounded-2xl p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { size: 18, className: "text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-wider text-primary", children: "Certification" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: cert.badge, alt: `${cert.title} badge`, className: "w-16 h-16 rounded-xl object-contain border border-primary/20 bg-surface p-1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl font-semibold", children: cert.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-primary font-medium text-sm", children: cert.issuer }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-xs text-muted-foreground", children: cert.period })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground leading-relaxed", children: cert.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: cert.validateUrl, target: "_blank", rel: "noopener noreferrer", className: "mt-4 inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 14 }),
        " Validate Certificate"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: cert.skills.map((skill) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/20", children: skill }, skill)) })
    ] }, cert.title)) })
  ] });
}
export {
  Certifications as component
};
