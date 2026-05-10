import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { ClientOnly } from "@/components/three/ClientOnly";
import { TimelineSpine } from "@/components/three/TimelineSpine";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Aditya" },
      {
        name: "description",
        content:
          "Aditya's engineering experience — Senior Software Engineer at Flexera building billing-locking services, Temporal orchestration, and unified connector platforms.",
      },
      { property: "og:title", content: "Experience — Aditya" },
    ],
  }),
  component: Experience,
});

type Achievement = { metric: string; title: string; body: string };

const FLEXERA: Achievement[] = [
  {
    metric: "Manual effort ↓",
    title: "Billing-locking microservice",
    body: "Designed and developed a critical billing-locking microservice that manages automatic and manual billing-period locks to ensure data integrity, audit compliance, and controlled reprocessing of finalized billing data. Built an event-driven pub/sub and queue-based architecture for asynchronous bulk reprocess/unlock requests, unified multi-stage bill data enrichment into a searchable view with CSV export, and added audit logging, rate limiting, cursor pagination, and automated retry recovery.",
  },
  {
    metric: "100% reliability",
    title: "Temporal workflow orchestration",
    body: "Architected and built a durable workflow orchestration service using Temporal workflow-as-code to coordinate multi-stage cloud billing pipelines for locking, unlocking, reprocessing, and schedule-based finalization across distributed downstream systems. Implemented built-in retries, heartbeat health checks, stale-operation recovery, query/signal-based progress visibility, per-organization rate limiting, audit-trail correlation, and bulk partial-failure handling for safe concurrent bill reprocessing.",
  },
  {
    metric: "3–4 days → 2 hours",
    title: "Unified connector platform",
    body: "Designed and documented a unified connector platform for cloud account onboarding, delivering a single consistent experience across multiple service domains. Defined an event-driven architecture with SQS/SNS, queue adapters, and asynchronous change workflows for create/update/delete operations, including clear failure reporting and retry paths. Built CloudFormation StackSet–based IAM role provisioning, credential vault integration, and migration from legacy credential storage. Ensured backward compatibility for downstream services by maintaining existing MongoDB schemas while introducing a dual-source model.",
  },
];

const FURLENCO: Achievement[] = [
  {
    metric: "Precise user journeys",
    title: "Event-driven analytics service (Rust)",
    body: "Crafted a robust, scalable, and resilient event-driven service in Rust, leveraging PostgreSQL and Kafka. Employed accurate state transition management, subtle retry mechanisms, and the adaptor pattern. Integrated vendors like Moengage, Google Analytics, and Facebook, enabling reconciliation of user actions for a precise understanding of business dynamics.",
  },
  {
    metric: "63% adoption ↑ · 82% cost ↓",
    title: "Application orchestration (Golang)",
    body: "Rebuilt the application orchestration microservice in Golang, focusing on improved communication and request management between application services. Introduced concurrency to enhance workflow latency, implemented distributed tracing, and incorporated the Temporal runtime for efficient debugging.",
  },
  {
    metric: "37% acquisition funnel ↑",
    title: "Cart management service (Rust + Kafka)",
    body: "Implemented a Rust-based cart management service integrating Apache Kafka for user journey analysis.",
  },
  {
    metric: "Dynamic recommendations",
    title: "Dynamic listing platform",
    body: "Constructed a dynamic listing platform as a rendering engine for products and related data, consolidating diverse microservice data elements. Utilized data modeling and MongoDB Atlas Search to enable dynamic filter functionality and similar product recommendations. Implemented Kafka for seamless data synchronization.",
  },
];

const EXOTEL: Achievement[] = [
  {
    metric: "25M → 108M req/day",
    title: "Monolith to microservices",
    body: "Designed microservice model for a monolithic service, enabling independent deployments for individual components. Brought in containerization for smoother and faster scaling. Built CI/CD for the service, increasing developer productivity by increasing frequency and reducing deployment time.",
  },
  {
    metric: "Capacity estimation",
    title: "Custom load-testing framework",
    body: "Designed and developed a custom (Vegeta-based) robust load-testing framework to replicate multiple types of tenant-based production scenarios, which helped in capacity estimation (throughput and threshold) of the system.",
  },
  {
    metric: "Traffic resilience",
    title: "Istio service mesh integration",
    body: "Integrated service mesh Istio within the service to leverage traffic management and circuit breaking (outlier detection). Created fault injection pipelines to test the production cluster and leveraged tenant-based rate limiting from the service mesh.",
  },
];

const GRAVITY: Achievement[] = [
  {
    metric: "Core product",
    title: "RuleEngine for StrategyDotZero",
    body: "Built RuleEngine for the company's core product StrategyDotZero, serving business rule configurations for different clients in .NET Core. Part of the team migrating the product from monolithic .NET MVC to microservices (.NET Core/Go).",
  },
  {
    metric: "AKS migration",
    title: "Module refactor & Kubernetes deployment",
    body: "Refactored 3 core modules and rebuilt the codebase according to company guidelines. Deployed the decoupled modules as microservices in an Azure Kubernetes Cluster, migrating from the monolithic model. Implemented unit testing in the CI pipeline.",
  },
];

const MAYADATA: Achievement[] = [
  {
    metric: "137% contributions ↑ MoM",
    title: "CNCF Litmus showcase website",
    body: "Developed and managed the product showcase website for CNCF Open-Source Sandbox Project 'Litmus', using ReactJS for frontend and Golang for backend APIs.",
  },
  {
    metric: "GKE deployment",
    title: "CI/CD with Travis & GKE",
    body: "Implemented continuous integration in Travis and deployed the application on Google Kubernetes Engine (GKE).",
  },
];

type Role = {
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  keywords: string[];
  achievements: Achievement[];
};

const ROLES: Role[] = [
  {
    company: "Flexera",
    role: "Senior Software Engineer",
    period: "Aug 2024 — Present",
    location: "Bangalore, India",
    current: true,
    keywords: ["Golang", "Rust", "Temporal", "SQS", "SNS", "MongoDB", "AWS", "EKS", "Github Actions"],
    achievements: FLEXERA,
  },
  {
    company: "Furlenco",
    role: "Senior Software Engineer",
    period: "Dec 2022 — Aug 2024",
    location: "Bangalore, India",
    keywords: ["Golang", "Rust", "Temporal", "Apache Kafka", "PostgreSQL", "MongoDB", "AWS", "CircleCI", "Kubernetes"],
    achievements: FURLENCO,
  },
  {
    company: "Exotel Techcom",
    role: "Member of Technical Staff — I",
    period: "Feb 2022 — Dec 2022",
    location: "Bangalore, India",
    keywords: ["Golang", "Ruby", "Jenkins", "Istio", "Terraform", "AWS", "Kubernetes"],
    achievements: EXOTEL,
  },
  {
    company: "Gravity iLabs",
    role: "Associate Software Developer",
    period: "Jul 2020 — Feb 2022",
    location: "Bangalore, India",
    keywords: ["Golang", "C#", "Java", "Spring", "Azure Kubernetes", "Unit Testing"],
    achievements: GRAVITY,
  },
  {
    company: "Mayadata Inc.",
    role: "Software Engineer",
    period: "Jul 2019 — Jul 2020",
    location: "Bangalore, India",
    keywords: ["ReactJS", "Golang", "Travis CI", "GKE", "Kubernetes"],
    achievements: MAYADATA,
  },
];

function Experience() {
  return (
    <section className="relative">
      <div className="fixed inset-y-0 right-0 w-[40%] -z-10 hidden md:block opacity-70 pointer-events-none">
        <ClientOnly>
          <TimelineSpine />
        </ClientOnly>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm uppercase tracking-[0.3em] text-primary/80"
        >
          Experience
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-4 font-display font-bold text-5xl md:text-7xl max-w-3xl"
        >
          Where I've <span className="text-aurora">shipped</span> things that
          mattered.
        </motion.h1>

        <ol className="relative mt-16 max-w-3xl border-l border-primary/30 pl-8 space-y-16">
          {ROLES.map((role, ri) => (
            <li key={role.company} className="relative">
              {role.current ? (
                <span className="absolute -left-[42px] top-1 size-4 rounded-full bg-primary shadow-mint" />
              ) : (
                <span className="absolute -left-[42px] top-1 size-4 rounded-full border-2 border-primary/40" />
              )}
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                {role.current && (
                  <span className="px-2 py-0.5 rounded-full bg-primary/15 text-primary text-xs uppercase tracking-wider">
                    Current
                  </span>
                )}
                <span className="inline-flex items-center gap-1">
                  <Calendar size={14} /> {role.period}
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin size={14} /> {role.location}
                </span>
              </div>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold">
                {role.role} ·{" "}
                <span className="text-aurora">{role.company}</span>
              </h2>

              <div className="mt-4 flex flex-wrap gap-2">
                {role.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="px-2.5 py-0.5 rounded-full text-xs bg-surface text-muted-foreground border border-border/50"
                  >
                    {kw}
                  </span>
                ))}
              </div>

              <div className="mt-6 space-y-4">
                {role.achievements.map((a, i) => (
                  <motion.article
                    key={a.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="glass rounded-2xl p-6"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h3 className="font-display text-xl font-semibold">
                        {a.title}
                      </h3>
                      <span className="text-xs px-3 py-1 rounded-full bg-primary/15 text-primary font-medium whitespace-nowrap">
                        {a.metric}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {a.body}
                    </p>
                  </motion.article>
                ))}
              </div>
            </li>
          ))}

          {/* Education */}
          <li className="relative">
            <span className="absolute -left-[42px] top-1 size-4 rounded-full border-2 border-primary/40" />
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <Calendar size={14} /> 2014 — 2018
              </span>
              <span className="inline-flex items-center gap-1">
                <MapPin size={14} /> Bhubaneswar, India
              </span>
            </div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold">
              B.Tech — CS&E ·{" "}
              <span className="text-aurora">KIIT University</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Kalinga Institute of Industrial Technology
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
