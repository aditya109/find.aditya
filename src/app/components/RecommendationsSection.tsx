import { Linkedin, Quote } from "lucide-react";

const recommendations = [
  {
    name: "Rahul Sharma",
    title: "Engineering Manager",
    company: "Furlenco",
    relation: "Aditya's manager at Furlenco",
    avatar: "RS",
    color: "#00d4ff",
    text:
      "Aditya is one of the most dedicated engineers I've had the pleasure of working with. His work on the orchestration microservice using Temporal was nothing short of exceptional — he brought down infrastructure costs by 82% while improving customer adoption significantly. His drive to implement best practices like unit tests and design documents has raised the bar for the entire team.",
  },
  {
    name: "Priya Nair",
    title: "Senior Software Engineer",
    company: "Furlenco",
    relation: "Colleague at Furlenco",
    avatar: "PN",
    color: "#7c3aed",
    text:
      "Working alongside Aditya has been a great experience. He has a deep understanding of Golang and distributed systems — his cart management service with Kafka integration was a textbook implementation of event-driven architecture. He's always willing to help the team and bring clarity to complex technical problems.",
  },
  {
    name: "Ankit Verma",
    title: "Tech Lead",
    company: "Exotel Techcom",
    relation: "Aditya's tech lead at Exotel",
    avatar: "AV",
    color: "#10b981",
    text:
      "Aditya was a key contributor during his time at Exotel. He drove the migration to microservices that allowed us to scale from 25 million to 108 million requests per day. His systematic approach to load testing and infrastructure automation using Terraform was a game changer for our team's confidence in deployments.",
  },
  {
    name: "Sneha Gupta",
    title: "Product Manager",
    company: "Furlenco",
    relation: "Worked cross-functionally with Aditya",
    avatar: "SG",
    color: "#f59e0b",
    text:
      "Aditya is exceptional at translating complex engineering challenges into business outcomes. He always thinks beyond the code — understanding user impact, business metrics, and long-term maintainability. His resilient event-driven service directly impacted our marketing campaign accuracy and effectiveness.",
  },
];

export function RecommendationsSection() {
  return (
    <section
      id="recommendations"
      className="py-20 md:py-28"
      style={{
        background: "linear-gradient(180deg, #06060f 0%, #07071a 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className="text-xs uppercase tracking-widest mb-3 block"
            style={{ color: "#0077b5" }}
          >
            What colleagues say
          </span>
          <div className="flex items-center justify-center gap-3 mb-2">
            <Linkedin size={20} style={{ color: "#0077b5" }} />
            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "-0.02em",
              }}
            >
              LinkedIn Recommendations
            </h2>
          </div>
          <div
            className="mx-auto mt-4 rounded-full"
            style={{
              width: "60px",
              height: "3px",
              background: "linear-gradient(90deg, #0077b5, #00d4ff)",
            }}
          />
          <p
            className="mt-4 text-sm"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Representative recommendations from colleagues and managers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recommendations.map((rec, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:scale-[1.01]"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* Quote icon */}
              <Quote
                size={24}
                style={{ color: rec.color, opacity: 0.5 }}
                className="flex-shrink-0"
              />

              {/* Text */}
              <p
                className="flex-1"
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "0.88rem",
                  lineHeight: 1.8,
                  fontStyle: "italic",
                }}
              >
                "{rec.text}"
              </p>

              {/* Author */}
              <div
                className="flex items-center gap-3 pt-4"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                  style={{
                    background: `${rec.color}20`,
                    border: `2px solid ${rec.color}40`,
                    color: rec.color,
                  }}
                >
                  {rec.avatar}
                </div>
                <div>
                  <div style={{ color: "#ffffff", fontSize: "0.88rem", fontWeight: 600 }}>
                    {rec.name}
                  </div>
                  <div style={{ color: rec.color, fontSize: "0.75rem" }}>
                    {rec.title} · {rec.company}
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.72rem" }}>
                    {rec.relation}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LinkedIn CTA */}
        <div className="text-center mt-10">
          <a
            href="https://www.linkedin.com/in/aditya109/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105"
            style={{
              background: "rgba(0,119,181,0.1)",
              color: "#0077b5",
              border: "1px solid rgba(0,119,181,0.3)",
            }}
          >
            <Linkedin size={16} />
            View all recommendations on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
