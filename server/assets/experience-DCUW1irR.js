import { r as reactExports, V as jsxRuntimeExports } from "./server-BZ2XrYGv.js";
import { u as useIsMobile, C as Canvas, b as useFrame, M as MathUtils, c as ClientOnly } from "./use-mobile-k2JT7JgB.js";
import { m as motion } from "./proxy-BKWPxPGV.js";
import { c as createLucideIcon } from "./router-C4nYUeac.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode);
function Spine({ progress }) {
  const orbRef = reactExports.useRef(null);
  useFrame((state, delta) => {
    if (orbRef.current) {
      orbRef.current.position.y = MathUtils.lerp(
        orbRef.current.position.y,
        4 - progress * 8,
        0.08
      );
      const s = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.08;
      orbRef.current.scale.setScalar(s);
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [0, 0, 0], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("cylinderGeometry", { args: [0.02, 0.02, 12, 8] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshBasicMaterial", { color: "#2dd4a8", transparent: true, opacity: 0.35 })
    ] }),
    Array.from({ length: 12 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [0, 5 - i, 0], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("torusGeometry", { args: [0.18, 0.012, 8, 32] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshBasicMaterial", { color: "#73ffb8", transparent: true, opacity: 0.4 })
    ] }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { ref: orbRef, position: [0, 4, 0], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("sphereGeometry", { args: [0.22, 32, 32] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshBasicMaterial", { color: "#73ffb8" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [0, 4, 1], color: "#2dd4a8", intensity: 2, distance: 4 })
  ] });
}
function TimelineSpine() {
  const mobile = useIsMobile();
  const [progress, setProgress] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Canvas,
    {
      dpr: mobile ? 1 : [1, 1.5],
      camera: { position: [0, 0, 6], fov: 50 },
      gl: { antialias: !mobile, alpha: true },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.4 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Spine, { progress })
      ]
    }
  );
}
const FLEXERA = [{
  metric: "Manual effort ↓",
  title: "Billing-locking microservice",
  body: "Designed and developed a critical billing-locking microservice that manages automatic and manual billing-period locks to ensure data integrity, audit compliance, and controlled reprocessing of finalized billing data. Built an event-driven pub/sub and queue-based architecture for asynchronous bulk reprocess/unlock requests, unified multi-stage bill data enrichment into a searchable view with CSV export, and added audit logging, rate limiting, cursor pagination, and automated retry recovery."
}, {
  metric: "100% reliability",
  title: "Temporal workflow orchestration",
  body: "Architected and built a durable workflow orchestration service using Temporal workflow-as-code to coordinate multi-stage cloud billing pipelines for locking, unlocking, reprocessing, and schedule-based finalization across distributed downstream systems. Implemented built-in retries, heartbeat health checks, stale-operation recovery, query/signal-based progress visibility, per-organization rate limiting, audit-trail correlation, and bulk partial-failure handling for safe concurrent bill reprocessing."
}, {
  metric: "3–4 days → 2 hours",
  title: "Unified connector platform",
  body: "Designed and documented a unified connector platform for cloud account onboarding, delivering a single consistent experience across multiple service domains. Defined an event-driven architecture with SQS/SNS, queue adapters, and asynchronous change workflows for create/update/delete operations, including clear failure reporting and retry paths. Built CloudFormation StackSet–based IAM role provisioning, credential vault integration, and migration from legacy credential storage. Ensured backward compatibility for downstream services by maintaining existing MongoDB schemas while introducing a dual-source model."
}];
const FURLENCO = [{
  metric: "Precise user journeys",
  title: "Event-driven analytics service (Rust)",
  body: "Crafted a robust, scalable, and resilient event-driven service in Rust, leveraging PostgreSQL and Kafka. Employed accurate state transition management, subtle retry mechanisms, and the adaptor pattern. Integrated vendors like Moengage, Google Analytics, and Facebook, enabling reconciliation of user actions for a precise understanding of business dynamics."
}, {
  metric: "63% adoption ↑ · 82% cost ↓",
  title: "Application orchestration (Golang)",
  body: "Rebuilt the application orchestration microservice in Golang, focusing on improved communication and request management between application services. Introduced concurrency to enhance workflow latency, implemented distributed tracing, and incorporated the Temporal runtime for efficient debugging."
}, {
  metric: "37% acquisition funnel ↑",
  title: "Cart management service (Rust + Kafka)",
  body: "Implemented a Rust-based cart management service integrating Apache Kafka for user journey analysis."
}, {
  metric: "Dynamic recommendations",
  title: "Dynamic listing platform",
  body: "Constructed a dynamic listing platform as a rendering engine for products and related data, consolidating diverse microservice data elements. Utilized data modeling and MongoDB Atlas Search to enable dynamic filter functionality and similar product recommendations. Implemented Kafka for seamless data synchronization."
}];
const EXOTEL = [{
  metric: "25M → 108M req/day",
  title: "Monolith to microservices",
  body: "Designed microservice model for a monolithic service, enabling independent deployments for individual components. Brought in containerization for smoother and faster scaling. Built CI/CD for the service, increasing developer productivity by increasing frequency and reducing deployment time."
}, {
  metric: "Capacity estimation",
  title: "Custom load-testing framework",
  body: "Designed and developed a custom (Vegeta-based) robust load-testing framework to replicate multiple types of tenant-based production scenarios, which helped in capacity estimation (throughput and threshold) of the system."
}, {
  metric: "Traffic resilience",
  title: "Istio service mesh integration",
  body: "Integrated service mesh Istio within the service to leverage traffic management and circuit breaking (outlier detection). Created fault injection pipelines to test the production cluster and leveraged tenant-based rate limiting from the service mesh."
}];
const GRAVITY = [{
  metric: "Core product",
  title: "RuleEngine for StrategyDotZero",
  body: "Built RuleEngine for the company's core product StrategyDotZero, serving business rule configurations for different clients in .NET Core. Part of the team migrating the product from monolithic .NET MVC to microservices (.NET Core/Go)."
}, {
  metric: "AKS migration",
  title: "Module refactor & Kubernetes deployment",
  body: "Refactored 3 core modules and rebuilt the codebase according to company guidelines. Deployed the decoupled modules as microservices in an Azure Kubernetes Cluster, migrating from the monolithic model. Implemented unit testing in the CI pipeline."
}];
const MAYADATA = [{
  metric: "137% contributions ↑ MoM",
  title: "CNCF Litmus showcase website",
  body: "Developed and managed the product showcase website for CNCF Open-Source Sandbox Project 'Litmus', using ReactJS for frontend and Golang for backend APIs."
}, {
  metric: "GKE deployment",
  title: "CI/CD with Travis & GKE",
  body: "Implemented continuous integration in Travis and deployed the application on Google Kubernetes Engine (GKE)."
}];
const ROLES = [{
  company: "Flexera",
  role: "Senior Software Engineer",
  period: "Aug 2024 — Present",
  location: "Bangalore, India",
  current: true,
  keywords: ["Golang", "Rust", "Temporal", "SQS", "SNS", "MongoDB", "AWS", "EKS", "Github Actions"],
  achievements: FLEXERA
}, {
  company: "Furlenco",
  role: "Senior Software Engineer",
  period: "Dec 2022 — Aug 2024",
  location: "Bangalore, India",
  keywords: ["Golang", "Rust", "Temporal", "Apache Kafka", "PostgreSQL", "MongoDB", "AWS", "CircleCI", "Kubernetes"],
  achievements: FURLENCO
}, {
  company: "Exotel Techcom",
  role: "Member of Technical Staff — I",
  period: "Feb 2022 — Dec 2022",
  location: "Bangalore, India",
  keywords: ["Golang", "Ruby", "Jenkins", "Istio", "Terraform", "AWS", "Kubernetes"],
  achievements: EXOTEL
}, {
  company: "Gravity iLabs",
  role: "Associate Software Developer",
  period: "Jul 2020 — Feb 2022",
  location: "Bangalore, India",
  keywords: ["Golang", "C#", "Java", "Spring", "Azure Kubernetes", "Unit Testing"],
  achievements: GRAVITY
}, {
  company: "Mayadata Inc.",
  role: "Software Engineer",
  period: "Jul 2019 — Jul 2020",
  location: "Bangalore, India",
  keywords: ["ReactJS", "Golang", "Travis CI", "GKE", "Kubernetes"],
  achievements: MAYADATA
}];
function Experience() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-y-0 right-0 w-[40%] -z-10 hidden md:block opacity-70 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ClientOnly, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineSpine, {}) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 md:px-8 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, className: "text-sm uppercase tracking-[0.3em] text-primary/80", children: "Experience" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.6
      }, className: "mt-4 font-display font-bold text-5xl md:text-7xl max-w-3xl", children: [
        "Where I've ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-aurora", children: "shipped" }),
        " things that mattered."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "relative mt-16 max-w-3xl border-l border-primary/30 pl-8 space-y-16", children: [
        ROLES.map((role, ri) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "relative", children: [
          role.current ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-[42px] top-1 size-4 rounded-full bg-primary shadow-mint" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-[42px] top-1 size-4 rounded-full border-2 border-primary/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 text-sm text-muted-foreground", children: [
            role.current && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-full bg-primary/15 text-primary text-xs uppercase tracking-wider", children: "Current" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 14 }),
              " ",
              role.period
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 14 }),
              " ",
              role.location
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-3xl md:text-4xl font-semibold", children: [
            role.role,
            " ·",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-aurora", children: role.company })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: role.keywords.map((kw) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-0.5 rounded-full text-xs bg-surface text-muted-foreground border border-border/50", children: kw }, kw)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-4", children: role.achievements.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { initial: {
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
            delay: i * 0.08
          }, className: "glass rounded-2xl p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold", children: a.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-3 py-1 rounded-full bg-primary/15 text-primary font-medium whitespace-nowrap", children: a.metric })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: a.body })
          ] }, a.title)) })
        ] }, role.company)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-[42px] top-1 size-4 rounded-full border-2 border-primary/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 14 }),
              " 2014 — 2018"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 14 }),
              " Bhubaneswar, India"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-3xl md:text-4xl font-semibold", children: [
            "B.Tech — CS&E ·",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-aurora", children: "KIIT University" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Kalinga Institute of Industrial Technology" })
        ] })
      ] })
    ] })
  ] });
}
export {
  Experience as component
};
