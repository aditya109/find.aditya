import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const experiences = [
  {
    company: "Furlenco",
    location: "Bangalore, India",
    role: "Senior Software Engineer",
    period: "December '22 – Present",
    current: true,
    color: "#00d4ff",
    keywords: ["Golang", "Temporal", "Apache Kafka", "PostgreSQL", "MongoDB", "AWS", "CircleCI", "Kubernetes"],
    achievements: [
      {
        text: "Developed a resilient event-driven service in Golang, utilizing PostgreSQL and Kafka, to integrate with third-party vendors like MoEngage and Google Analytics — ensuring accurate state transition management for marketing campaigns.",
        metric: null,
      },
      {
        text: "Built application orchestration microservice using Golang and Temporal with durable workflow executions, concurrency and distributed tracing.",
        metric: "63% customer adoption ↑ · 82% infrastructure cost ↓",
      },
      {
        text: "Implemented a Golang-based cart management service integrating Apache Kafka for user journey analysis.",
        metric: "37% improvement in acquisition funnel",
      },
      {
        text: "Constructed a dynamic listing platform using Golang and MongoDB Atlas search, consolidating microservice data with Kafka-driven automatic refresh.",
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
    color: "#7c3aed",
    keywords: ["Golang", "Java", "Jenkins", "Terraform", "AWS", "Unit Testing", "Kubernetes"],
    achievements: [
      {
        text: "Developed a robust load-testing framework to simulate various production scenarios for capacity estimation.",
        metric: null,
      },
      {
        text: "Implemented a microservices architecture for a monolithic service, introducing containerization and CI/CD.",
        metric: "Scaled from 25M → 108M requests/day",
      },
      {
        text: "Automated infrastructure with Terraform; integrated Istio service mesh for traffic management, circuit breaking, fault injection, and tenant-based rate limiting.",
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
    color: "#10b981",
    keywords: ["Golang", "C#", "Java", "Spring", "Azure Kubernetes Cluster", "Unit Testing"],
    achievements: [
      {
        text: "Developed a rule engine in Java for core project, facilitating dynamic business rule configurations for diverse clients.",
        metric: null,
      },
      {
        text: "Contributed to migration from a monolithic architecture to microservices in Spring, refactoring three core modules.",
        metric: null,
      },
      {
        text: "Deployed decoupled modules as microservices on Azure Kubernetes Cluster with unit testing in CI pipeline.",
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
    color: "#f59e0b",
    keywords: ["ReactJS", "Golang", "Travis CI", "GKE", "Kubernetes"],
    achievements: [
      {
        text: "Developed and managed the product showcase website for CNCF Open-Source Sandbox Project 'Litmus', utilizing ReactJS for frontend and Golang for backend APIs.",
        metric: "137% increase in open-source contributions within 8 months",
      },
      {
        text: "Implemented continuous integration in Travis and deployed the application on Google Kubernetes Engine (GKE).",
        metric: null,
      },
    ],
  },
];

function ExperienceCard({ exp, index }: { exp: (typeof experiences)[0]; index: number }) {
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
          style={{ background: `linear-gradient(90deg, ${exp.color}, transparent)` }}
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
              style={{ background: `${exp.color}15`, border: `1px solid ${exp.color}30` }}
            >
              <div className="w-3 h-3 rounded-full" style={{ background: exp.color }} />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 style={{ color: "#ffffff", fontSize: "1.05rem", fontWeight: 600 }}>
                  {exp.company}
                </h3>
                {exp.current && (
                  <span
                    className="px-2 py-0.5 rounded-full text-xs"
                    style={{ background: "rgba(0,212,255,0.12)", color: "#00d4ff", border: "1px solid rgba(0,212,255,0.25)" }}
                  >
                    Current
                  </span>
                )}
              </div>
              <div style={{ color: exp.color, fontSize: "0.85rem", fontWeight: 500 }}>
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
                    <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.85rem", lineHeight: 1.7 }}>
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
            <div className="flex flex-wrap gap-2 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
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
              background: "linear-gradient(180deg, #00d4ff20, #7c3aed20, transparent)",
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
              style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.25)" }}
            >
              <span style={{ fontSize: "1.1rem" }}>🎓</span>
            </div>
            <div>
              <h3 style={{ color: "#ffffff", fontWeight: 600 }}>
                B.Tech – Computer Science &amp; Engineering
              </h3>
              <div style={{ color: "#10b981", fontSize: "0.85rem", fontWeight: 500 }}>
                Kalinga Institute of Industrial Technology
              </div>
              <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.78rem", marginTop: "0.25rem" }}>
                Bhubaneswar, India · 2016 – 2020
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
