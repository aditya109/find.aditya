import { V as jsxRuntimeExports } from "./server-BZ2XrYGv.js";
import { m as motion } from "./proxy-BKWPxPGV.js";
import { c as createLucideIcon } from "./router-C4nYUeac.js";
import { E as ExternalLink } from "./external-link-CGvRF8do.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
];
const BookOpen = createLucideIcon("book-open", __iconNode);
const PUBS = [{
  title: "Abstractive Text Summarization and Unsupervised Text Classifier",
  venue: "Springer ICMLIP '19",
  url: "https://link.springer.com/chapter/10.1007/978-981-15-1884-3_33",
  icon: "/springer-logo.png",
  description: "Research paper published at the International Conference on Machine Learning and Intelligent Processing (ICMLIP 2019), Springer. Explores deep learning approaches to abstractive summarization using Sequence-to-Sequence RNN with Bidirectional LSTM for unsupervised classification of natural language text.",
  tags: ["NLP", "Deep Learning", "Text Summarization", "Unsupervised Learning"]
}];
function Publications() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-5 md:px-8 py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, className: "text-sm uppercase tracking-[0.3em] text-primary/80", children: "Research" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.6
    }, className: "mt-4 font-display font-bold text-5xl md:text-7xl max-w-4xl", children: [
      "Papers that ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-aurora", children: "pushed boundaries." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-8 max-w-3xl", children: PUBS.map((pub, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { initial: {
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 18, className: "text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-wider text-primary", children: "Publication" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: pub.icon, alt: `${pub.venue} logo`, className: "w-16 h-16 rounded-xl object-contain border border-primary/20 bg-surface p-1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl font-semibold leading-tight", children: pub.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex mt-2 px-3 py-0.5 rounded-full text-xs bg-amber-500/10 text-amber-400 border border-amber-500/20", children: pub.venue })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground leading-relaxed", children: pub.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: pub.url, target: "_blank", rel: "noopener noreferrer", className: "mt-4 inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 14 }),
        " Read on Springer"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: pub.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/20", children: tag }, tag)) })
    ] }, pub.title)) })
  ] });
}
export {
  Publications as component
};
