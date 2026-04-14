import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink, ChevronDown } from "lucide-react";
import { ThreeBackground } from "./ThreeBackground";

export function HeroSection() {
  const scrollToSkills = () => {
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #06060f 0%, #0d0d2b 50%, #06060f 100%)" }}
    >
      <ThreeBackground />

      {/* Gradient overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(124,58,237,0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(0,212,255,0.1) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs mb-6 border"
          style={{
            background: "rgba(0,212,255,0.07)",
            borderColor: "rgba(0,212,255,0.25)",
            color: "#00d4ff",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: "#00d4ff" }}
          />
          Available for opportunities
        </div>

        {/* Name */}
        <h1
          className="mb-4"
          style={{
            fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            background: "linear-gradient(135deg, #ffffff 0%, #a5b4fc 50%, #00d4ff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Aditya Kumar
        </h1>

        {/* Title */}
        <h2
          className="mb-6"
          style={{
            fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
            fontWeight: 500,
            color: "rgba(255,255,255,0.6)",
            letterSpacing: "0.05em",
          }}
        >
          Senior Software Engineer
        </h2>

        {/* Bio */}
        <p
          className="max-w-2xl mx-auto mb-8 leading-relaxed"
          style={{
            fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.8,
          }}
        >
          Passionate backend engineer specializing in{" "}
          <span style={{ color: "#00d4ff" }}>Golang</span>,{" "}
          <span style={{ color: "#a5b4fc" }}>distributed systems</span>, and{" "}
          <span style={{ color: "#00d4ff" }}>cloud-native architecture</span>. Building scalable,
          event-driven microservices that power millions of user journeys.
        </p>

        {/* Contact chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {[
            { icon: <MapPin size={14} />, text: "Bangalore, India" },
            { icon: <Mail size={14} />, text: "kumaraditya1096@gmail.com", href: "mailto:kumaraditya1096@gmail.com" },
            { icon: <Phone size={14} />, text: "+91 93482 86941", href: "tel:+919348286941" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs transition-all duration-200 hover:scale-105"
              style={{
                background: "rgba(255,255,255,0.05)",
                color: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(255,255,255,0.1)",
                textDecoration: "none",
                cursor: item.href ? "pointer" : "default",
              }}
            >
              <span style={{ color: "#00d4ff" }}>{item.icon}</span>
              {item.text}
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="https://www.linkedin.com/in/aditya109/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #0077b5, #005885)",
              color: "#ffffff",
              boxShadow: "0 4px 20px rgba(0,119,181,0.3)",
            }}
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href="https://github.com/aditya109"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{
              background: "rgba(255,255,255,0.08)",
              color: "#ffffff",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href="https://aditya109.github.io/find.aditya/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105"
            style={{
              background: "rgba(0,212,255,0.1)",
              color: "#00d4ff",
              border: "1px solid rgba(0,212,255,0.25)",
            }}
          >
            <ExternalLink size={16} /> Website
          </a>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {[
            { value: "5+", label: "Years Experience" },
            { value: "4", label: "Companies" },
            { value: "63%", label: "Adoption Boost" },
            { value: "82%", label: "Cost Reduction" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat.value}
              </div>
              <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={scrollToSkills}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity duration-300"
        style={{ color: "rgba(255,255,255,0.5)" }}
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase" style={{ fontSize: "0.65rem" }}>
          Scroll
        </span>
        <ChevronDown
          size={18}
          className="animate-bounce"
          style={{ animationDuration: "1.5s" }}
        />
      </button>
    </section>
  );
}
