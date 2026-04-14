import { useEffect, useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    color: "#00d4ff",
    skills: ["Golang", "Java", "Python", "C#"],
  },
  {
    title: "Message Streaming",
    color: "#7c3aed",
    skills: ["Apache Kafka", "Temporal"],
  },
  {
    title: "Databases",
    color: "#10b981",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Aerospike"],
  },
  {
    title: "Cloud & DevOps",
    color: "#f59e0b",
    skills: ["Kubernetes", "AWS", "CircleCI", "Jenkins", "Terraform", "Istio"],
  },
  {
    title: "Frameworks",
    color: "#ec4899",
    skills: ["Spring Boot", "ReactJS", "Microservices"],
  },
  {
    title: "Practices",
    color: "#06b6d4",
    skills: ["Unit Testing", "CI/CD", "Distributed Tracing", "Event-Driven Architecture"],
  },
];

function AnimatedBar({ delay }: { delay: number }) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && barRef.current) {
            setTimeout(() => {
              if (barRef.current) {
                barRef.current.style.width = barRef.current.dataset.width || "0%";
              }
            }, delay);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [delay]);

  return barRef;
}

export function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 md:py-28"
      style={{ background: "#07071a" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className="text-xs uppercase tracking-widest mb-3 block"
            style={{ color: "#00d4ff" }}
          >
            Technical Proficiency
          </span>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            Skills &amp; Technologies
          </h2>
          <div
            className="mx-auto mt-4 rounded-full"
            style={{
              width: "60px",
              height: "3px",
              background: "linear-gradient(90deg, #00d4ff, #7c3aed)",
            }}
          />
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, ci) => (
            <div
              key={ci}
              className="rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-2 h-8 rounded-full"
                  style={{ background: category.color }}
                />
                <h3
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                  }}
                >
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, si) => (
                  <span
                    key={si}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 hover:scale-105 cursor-default"
                    style={{
                      background: `${category.color}15`,
                      color: category.color,
                      border: `1px solid ${category.color}30`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* All skills cloud */}
        <div className="mt-12 text-center">
          <p className="text-xs uppercase tracking-widest mb-6" style={{ color: "rgba(255,255,255,0.3)" }}>
            Full Stack
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Golang", "Java", "Python", "Kafka", "Temporal", "PostgreSQL", "MongoDB",
              "Redis", "Aerospike", "Kubernetes", "AWS", "CircleCI", "Jenkins",
              "Terraform", "Istio", "ReactJS", "Spring Boot", "Travis CI", "GKE",
            ].map((skill, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full text-sm transition-all duration-200 hover:scale-105 cursor-default"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  color: "rgba(255,255,255,0.55)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  fontSize: "0.8rem",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
