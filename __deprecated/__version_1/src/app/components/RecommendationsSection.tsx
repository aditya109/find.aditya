import { Linkedin, Quote } from "lucide-react";

const recommendations = [
  {
    name: "Amitesh Srivastava",
    title: "Senior Software Engineer",
    company: "CBTS",
    relation:
      "Aditya was senior to Amitesh but didn’t manage Amitesh directly at Furlenco",
    avatar: "AS",
    color: "#00d4ff",
    text: "I had the pleasure of working with Aditya at Furlenco. His ability to tackle complex problems with innovative solutions was truly impressive. He is always eager to learn about new technologies and find ways to apply them to our work. \nHe also played a crucial role in fostering a positive and collaborative team culture. His enthusiasm and dedication inspired everyone around them, and I believe his contributions significantly increased our team’s overall productivity.",
  },
  {
    name: "Akil KJ Bhat",
    title: "Senior Product Manager",
    company: "Furlenco",
    relation: "Akil worked with Aditya on the same team at Furlenco",
    avatar: "AB",
    color: "#7c3aed",
    text: "Aditya's approach to problem-solving is exemplary, consistently demonstrating a sound understanding of intricate systems. Aditya possesses the unique ability to break down complex issues and present them with clarity, fostering a collaborative environment that encourages open discussion and innovative solutions. \nWorking with Aditya was a continuous learning experience for me as a Product Manager. His collaborative nature and insightful contributions made our projects truly two-way endeavours. It was never just about transactions; it was about mutual growth and achieving project success together. \nAditya Kumar's expertise, collaborative spirit and commitment to excellence make him an invaluable asset to any team or project.",
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
                  fontSize: "0.8rem",
                  lineHeight: 1.8,
                  fontStyle: "italic",
                }}
              >
                "
                {rec.text.split("\n").map((line, idx) => (
                  <span key={idx}>
                    {line}
                    {idx < rec.text.split("\n").length - 1 && <br />}
                  </span>
                ))}
                "
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
                  <div
                    style={{
                      color: "#ffffff",
                      fontSize: "0.88rem",
                      fontWeight: 600,
                    }}
                  >
                    {rec.name}
                  </div>
                  <div style={{ color: rec.color, fontSize: "0.75rem" }}>
                    {rec.relation}
                  </div>
                  <div
                    style={{
                      color: "rgba(255,255,255,0.3)",
                      fontSize: "0.72rem",
                    }}
                  >
                    {rec.title} · {rec.company}
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
