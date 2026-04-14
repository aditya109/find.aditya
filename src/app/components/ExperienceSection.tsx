import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const experiences = [
  {
    company: "Flexera",
    location: "Bangalore, India",
    role: "Senior Software Engineer",
    period: "August '24 - Present",
    current: true,
    color: "#4cbb17",
    keywords: [
      "Golang",
      "Rust",
      "Temporal",
      "SQS",
      "SNS",
      "MongoDB",
      "AWS",
      "EKS",
      "Github Actions",
    ],
    achievements: [
      {
        text: "Designed and developed a critical billing-locking microservice that manages automatic and manual billing period locks to ensure data integrity, audit compliance, and controlled reprocessing of finalized billing data. Built an event-driven pub/sub and queue-based architecture for asynchronous bulk reprocess/unlock requests, unified multi-stage bill data enrichment into a searchable view with CSV export, and added audit logging, rate limiting, cursor pagination, and automated retry recovery.",
        metric: "safe reprocessing of finalized bills manual effort ↓",
      },
      {
        text: "Architected and built a durable workflow orchestration service using Temporal workflow-as-code to coordinate multi-stage cloud billing pipelines for locking, unlocking, reprocessing, and schedule-based finalization across distributed downstream systems. Implemented built-in retries, heartbeat health checks, stale-operation recovery, query/signal-based progress visibility, per-organization rate limiting, audit-trail correlation, and bulk partial-failure handling for safe concurrent bill reprocessing.",
        metric: "100% reliability for critical orchestration operations",
      },
      {
        text: "Designed and documented a unified connector platform for cloud account onboarding, delivering a single consistent experience across multiple service domains. Defined an event-driven architecture with SQS/SNS, queue adapters, and asynchronous change workflows for create/update/delete operations, including clear failure reporting and retry paths. Built CloudFormation StackSet–based IAM role provisioning, credential vault integration, and migration from legacy credential storage. Ensured backward compatibility for downstream services by maintaining existing MongoDB schemas while introducing a dual-source model, and defined the contract for connector events and failure notifications to keep FinOps workflows resilient and observable.",
        metric: "3–4 day onboarding duration → 2 hours",
      },
    ],
  },
  {
    company: "Furlenco",
    location: "Bangalore, India",
    role: "Senior Software Engineer",
    period: "December '22 – August '24",
    current: false,
    color: "#00A1DE",
    keywords: [
      "Golang",
      "Rust",
      "Temporal",
      "Apache Kafka",
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "CircleCI",
      "Kubernetes",
    ],
    achievements: [
      {
        text: "Crafted a robust, scalable, and resilient event-driven service in Rust, leveraging PostgreSQL and Kafka. Employed accurate state transition management, subtle retry mechanisms, and the effective use of the adaptor pattern. Integrated various vendors like Moengage, Google Analytics, and Facebook, enabling the reconciliation of user actions for a precise understanding of business dynamics. This effort significantly contributed to providing product teams with an accurate depiction of user journeys, enhancing business insights.",
        metric: null,
      },
      {
        text: "Rebuilt the application orchestration microservice in Golang, focusing on improved communication and request management between application services. Introduced concurrency to enhance workflow latency, implemented distributed tracing, and incorporated the reliable Temporal runtime for efficient debugging. ",
        metric: "63% customer adoption ↑ · 82% infrastructure cost ↓",
      },
      {
        text: "Implemented a Rust-based cart management service integrating Apache Kafka for user journey analysis.",
        metric: "37% acquisition funnel ↑",
      },
      {
        text: "Constructed a dynamic listing platform as a rendering engine for products and related data, consolidating diverse microservice data elements. Utilized data modeling and Mongo DB Atlas search to enable dynamic filter functionality and similar product recommendations. Implemented Kafka to ensure seamless data synchronization with business-dependent services.",
        metric: null,
      },
      {
        text: "Led the engineering team — implementing development workflows, creating technical specifications, and establishing quality standards through unit tests and design documents.",
        metric: null,
      },
    ],
  },
  {
    company: "Exotel Techcom",
    location: "Bangalore, India",
    role: "Member of Technical Staff – I",
    period: "February '22 – December '22",
    current: false,
    color: "#39b54a",
    keywords: [
      "Golang",
      "Ruby",
      "Jenkins",
      "Istio",
      "Terraform",
      "AWS",
      "Jenkins",
      "Kubernetes",
    ],
    achievements: [
      {
        text: "Designed microservice model for a monolithic service, which enabled independent deployments for individual components of the service. Brought in containerization for smoother and faster scaling. Built CI/CD for the service, increasing developer productivity by increasing frequency and reducing deployment time. ",
        metric: "Scaled from 25M → 108M requests/day",
      },
      {
        text: "Designed and developed a custom (vegeta-based) robust load-testing framework to replicate multiple types of tenant-based production scenarios, which helped in the capacity estimation (throughput and threshold) of the then-current system.",
        metric: null,
      },
      {
        text: "Integrated service mesh Istio within the service, to leverage traffic management capability and circuit breaking mechanism (outlier detection). Created fault injection pipelines to test the production cluster to increase confidence within the system. Also leveraged tenant-based rate limiting from the integrated service mesh.",
        metric: null,
      },
    ],
  },
  {
    company: "Gravity iLabs",
    location: "Bangalore, India",
    role: "Associate Software Developer",
    period: "July '20 – February '22",
    current: false,
    color: "#FF745C",
    keywords: [
      "Golang",
      "C#",
      "Java",
      "Spring",
      "Azure Kubernetes Cluster",
      "Unit Testing",
    ],
    achievements: [
      {
        text: "Built RuleEngine for the company’s core product StrategyDotZero, to serve business rule configurations for the product based on the different clients in .NET Core. Part of the team migrating the product into a microservice (.NET Core/Go) from its current monolithic architecture (.NET MVC).",
        metric: null,
      },
      {
        text: "Worked with the team to refactor 3 core modules and rebuilt the codebase according to defined company guidelines, aimed towards easier code maintenance. Deployed the decoupled modules as a microservice in an Azure Kubernetes Cluster, migrating it from its existing monolithic model. mplemented unit testing in the CI pipeline for the decoupled modules.",
        metric: null,
      },
    ],
  },
  {
    company: "Mayadata Inc.",
    location: "Bangalore, India",
    role: "Software Engineer",
    period: "July '19 – July '20",
    current: false,
    color: "#BF40BF",
    keywords: ["ReactJS", "Golang", "Travis CI", "GKE", "Kubernetes"],
    achievements: [
      {
        text: "Developed and managed the product showcase website for CNCF Open-Source Sandbox Project 'Litmus', utilizing ReactJS for frontend and Golang for backend APIs.",
        metric: "137% open-source contributions MoM ↑ ",
      },
      {
        text: "Implemented continuous integration in Travis and deployed the application on Google Kubernetes Engine (GKE).",
        metric: null,
      },
    ],
  },
];

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <div
      className="relative rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: `1px solid ${expanded ? exp.color + "40" : "rgba(255,255,255,0.07)"}`,
      }}
    >
      {/* Top accent bar */}
      {expanded && (
        <div
          className="h-0.5"
          style={{
            background: `linear-gradient(90deg, ${exp.color}, transparent)`,
          }}
        />
      )}

      <div className="p-6">
        {/* Header */}
        <div
          className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 cursor-pointer"
          onClick={() => setExpanded(!expanded)}
        >
          <div className="flex items-start gap-4">
            {/* Company dot */}
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{
                background: `${exp.color}15`,
                border: `1px solid ${exp.color}30`,
              }}
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: exp.color }}
              />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3
                  style={{
                    color: "#ffffff",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                  }}
                >
                  {exp.company}
                </h3>
                {exp.current && (
                  <span
                    className="px-2 py-0.5 rounded-full text-xs"
                    style={{
                      background: "rgba(0,212,255,0.12)",
                      color: "#00d4ff",
                      border: "1px solid rgba(0,212,255,0.25)",
                    }}
                  >
                    Current
                  </span>
                )}
              </div>
              <div
                style={{
                  color: exp.color,
                  fontSize: "0.85rem",
                  fontWeight: 500,
                }}
              >
                {exp.role}
              </div>
              <div
                className="flex items-center gap-2 mt-1 flex-wrap"
                style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.78rem" }}
              >
                <span>{exp.location}</span>
                <span>·</span>
                <span>{exp.period}</span>
              </div>
            </div>
          </div>
          <button
            className="self-start sm:self-center p-1.5 rounded-lg transition-colors duration-200 flex-shrink-0"
            style={{
              color: "rgba(255,255,255,0.4)",
              background: "rgba(255,255,255,0.05)",
            }}
            aria-label={expanded ? "Collapse" : "Expand"}
          >
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>

        {/* Expanded content */}
        {expanded && (
          <div className="mt-5">
            <ul className="space-y-3 mb-5">
              {exp.achievements.map((a, ai) => (
                <li key={ai} className="flex gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                    style={{ background: exp.color }}
                  />
                  <div>
                    <p
                      style={{
                        color: "rgba(255,255,255,0.65)",
                        fontSize: "0.85rem",
                        lineHeight: 1.7,
                      }}
                    >
                      {a.text}
                    </p>
                    {a.metric && (
                      <span
                        className="inline-flex mt-1 px-2 py-0.5 rounded text-xs"
                        style={{
                          background: `${exp.color}15`,
                          color: exp.color,
                          border: `1px solid ${exp.color}25`,
                        }}
                      >
                        {a.metric}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            {/* Keywords */}
            <div
              className="flex flex-wrap gap-2 pt-4"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              {exp.keywords.map((kw, ki) => (
                <span
                  key={ki}
                  className="px-2.5 py-1 rounded-md text-xs"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    color: "rgba(255,255,255,0.45)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 md:py-28"
      style={{
        background: "linear-gradient(180deg, #07071a 0%, #06060f 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className="text-xs uppercase tracking-widest mb-3 block"
            style={{ color: "#7c3aed" }}
          >
            Career Journey
          </span>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            Work Experience
          </h2>
          <div
            className="mx-auto mt-4 rounded-full"
            style={{
              width: "60px",
              height: "3px",
              background: "linear-gradient(90deg, #7c3aed, #00d4ff)",
            }}
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px hidden lg:block ml-5"
            style={{
              background:
                "linear-gradient(180deg, #00d4ff20, #7c3aed20, transparent)",
            }}
          />
          <div className="space-y-5">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>

        {/* Education */}
        <div
          className="mt-10 p-6 rounded-2xl"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(16,185,129,0.1)",
                border: "1px solid rgba(16,185,129,0.25)",
              }}
            >
              <span style={{ fontSize: "1.1rem" }}>🎓</span>
            </div>
            <div>
              <h3 style={{ color: "#ffffff", fontWeight: 600 }}>
                B.Tech – Computer Science &amp; Engineering
              </h3>
              <div
                style={{
                  color: "#10b981",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                }}
              >
                Kalinga Institute of Industrial Technology
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: "0.78rem",
                  marginTop: "0.25rem",
                }}
              >
                Bhubaneswar, India · 2014 – 2018
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
