import { ExternalLink, Award, BookOpen } from "lucide-react";

const certifications = [
  {
    title: "Certified Kubernetes Administrator",
    issuer: "The Linux Foundation",
    period: "Valid '21 – '24",
    badge: "cka.png",
    color: "#326CE5",
    validateUrl:
      "https://www.credly.com/badges/65b33e5c-851e-4db6-aba7-8f96cbe837b9/public_url",
    description:
      "Earners of this designation demonstrated the skills, knowledge and competencies to perform the responsibilities of a Kubernetes Administrator. ",
    skills: [
      "Cluster Administration",
      "Networking",
      "Storage",
      "Security",
      "Workloads",
    ],
  },
];

const publications = [
  {
    title: "Abstractive Text Summarization and Unsupervised Text Classifier",
    venue: "Springer ICMLIP '19",
    venueColor: "#f59e0b",
    description:
      "Research paper published at the International Conference on Machine Learning and Intelligent Processing (ICMLIP 2019), Springer. Explores deep learning approaches to abstractive summarization and unsupervised classification of natural language text.",
    tags: [
      "NLP",
      "Deep Learning",
      "Text Summarization",
      "Unsupervised Learning",
    ],
    icon: "springer-logo.png",
  },
];

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="py-20 md:py-28"
      style={{ background: "#07071a" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className="text-xs uppercase tracking-widest mb-3 block"
            style={{ color: "#f59e0b" }}
          >
            Credentials &amp; Research
          </span>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            Certifications &amp; Publications
          </h2>
          <div
            className="mx-auto mt-4 rounded-full"
            style={{
              width: "60px",
              height: "3px",
              background: "linear-gradient(90deg, #f59e0b, #ec4899)",
            }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div
            className="rounded-2xl p-6 flex flex-col h-full transition-all duration-300 hover:scale-[1.01]"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: `1px solid ${certifications[0].color}30`,
              minHeight: "430px",
            }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Award size={18} style={{ color: "#f59e0b" }} />
              <h3
                className="uppercase tracking-wider text-xs"
                style={{ color: "#f59e0b" }}
              >
                Certifications
              </h3>
            </div>
            <div className="flex-1">
              {certifications.map((cert, i) => (
                <div key={i} className="flex flex-col h-full">
                  <div
                    className="h-0.5 rounded-full mb-5"
                    style={{
                      background: `linear-gradient(90deg, ${cert.color}, transparent)`,
                    }}
                  />
                  <div className="flex items-start gap-4">
                    <img
                      src={`/${cert.badge}`}
                      alt={`${cert.title} badge`}
                      className="w-12 h-12 rounded-xl object-contain"
                      style={{ border: `1px solid ${cert.color}30` }}
                    />
                    <div className="flex-1">
                      <h4
                        style={{
                          color: "#ffffff",
                          fontSize: "0.95rem",
                          fontWeight: 600,
                          lineHeight: 1.4,
                        }}
                      >
                        {cert.title}
                      </h4>
                      <div
                        className="mt-1"
                        style={{
                          color: cert.color,
                          fontSize: "0.82rem",
                          fontWeight: 500,
                        }}
                      >
                        {cert.issuer}
                      </div>
                      <div
                        className="mt-0.5"
                        style={{
                          color: "rgba(255,255,255,0.4)",
                          fontSize: "0.78rem",
                        }}
                      >
                        {cert.period}
                      </div>
                    </div>
                  </div>

                  <p
                    className="mt-4"
                    style={{
                      color: "rgba(255,255,255,0.55)",
                      fontSize: "0.82rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {cert.description}
                  </p>
                  <a
                    href={cert.validateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs transition-opacity duration-200 hover:opacity-80"
                    style={{ color: cert.color }}
                  >
                    <ExternalLink size={12} /> Validate Certificate
                  </a>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {cert.skills.map((skill, si) => (
                      <span
                        key={si}
                        className="px-2 py-1 rounded-md text-xs"
                        style={{
                          background: `${cert.color}10`,
                          color: cert.color,
                          border: `1px solid ${cert.color}25`,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-2xl p-6 flex flex-col h-full transition-all duration-300 hover:scale-[1.01]"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(236,72,153,0.2)",
              minHeight: "430px",
            }}
          >
            <div className="flex items-center gap-2 mb-6">
              <BookOpen size={18} style={{ color: "#ec4899" }} />
              <h3
                className="uppercase tracking-wider text-xs"
                style={{ color: "#ec4899" }}
              >
                Publications
              </h3>
            </div>
            <div className="flex-1">
              {publications.map((pub, i) => (
                <div key={i} className="flex flex-col h-full">
                  <div
                    className="h-0.5 rounded-full mb-5"
                    style={{
                      background:
                        "linear-gradient(90deg, #ec4899, transparent)",
                    }}
                  />
                  <div className="flex items-start gap-4">
                    <img
                      src={`/${pub.icon}`}
                      alt={`${pub.title} icon`}
                      className="w-12 h-12 rounded-xl object-contain"
                      style={{ border: `1px solid ${pub.venueColor}30` }}
                    />
                    <div className="flex-1">
                      <h4
                        style={{
                          color: "#ffffff",
                          fontSize: "0.95rem",
                          fontWeight: 600,
                          lineHeight: 1.4,
                        }}
                      >
                        {pub.title}
                      </h4>
                      <span
                        className="inline-flex mt-2 px-2 py-0.5 rounded text-xs"
                        style={{
                          background: `${pub.venueColor}15`,
                          color: pub.venueColor,
                          border: `1px solid ${pub.venueColor}30`,
                        }}
                      >
                        {pub.venue}
                      </span>
                    </div>
                  </div>

                  <p
                    className="mt-4"
                    style={{
                      color: "rgba(255,255,255,0.55)",
                      fontSize: "0.82rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {pub.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {pub.tags.map((tag, ti) => (
                      <span
                        key={ti}
                        className="px-2 py-1 rounded-md text-xs"
                        style={{
                          background: "rgba(236,72,153,0.08)",
                          color: "#ec4899",
                          border: "1px solid rgba(236,72,153,0.2)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
