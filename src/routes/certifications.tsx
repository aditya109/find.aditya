import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — Aditya" },
      {
        name: "description",
        content:
          "Aditya's professional certifications — Certified Kubernetes Administrator and more.",
      },
      { property: "og:title", content: "Certifications — Aditya" },
    ],
  }),
  component: Certifications,
});

const CERTS = [
  {
    title: "Certified Kubernetes Administrator",
    issuer: "The Linux Foundation",
    period: "Valid '21 – '24",
    badge: `${import.meta.env.BASE_URL}cka.png`,
    validateUrl:
      "https://www.credly.com/badges/65b33e5c-851e-4db6-aba7-8f96cbe837b9/public_url",
    description:
      "Earners of this designation demonstrated the skills, knowledge and competencies to perform the responsibilities of a Kubernetes Administrator.",
    skills: [
      "Cluster Administration",
      "Networking",
      "Storage",
      "Security",
      "Workloads",
    ],
  },
];

function Certifications() {
  return (
    <section className="mx-auto max-w-7xl min-[1920px]:max-w-[1600px] px-5 md:px-8 min-[1920px]:px-12 py-16">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-sm uppercase tracking-[0.3em] text-primary/80"
      >
        Credentials
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-4 font-display font-bold text-5xl md:text-7xl max-w-4xl"
      >
        Certified to <span className="text-aurora">ship with confidence.</span>
      </motion.h1>

      <div className="mt-16 grid gap-8 max-w-3xl">
        {CERTS.map((cert, i) => (
          <motion.article
            key={cert.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-2xl p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <Award size={18} className="text-primary" />
              <span className="text-xs uppercase tracking-wider text-primary">
                Certification
              </span>
            </div>

            <div className="flex items-start gap-5">
              <img
                src={cert.badge}
                alt={`${cert.title} badge`}
                className="w-16 h-16 rounded-xl object-contain border border-primary/20 bg-surface p-1"
              />
              <div className="flex-1">
                <h2 className="font-display text-2xl md:text-3xl font-semibold">
                  {cert.title}
                </h2>
                <p className="mt-1 text-primary font-medium text-sm">
                  {cert.issuer}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {cert.period}
                </p>
              </div>
            </div>

            <p className="mt-5 text-muted-foreground leading-relaxed">
              {cert.description}
            </p>

            <a
              href={cert.validateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <ExternalLink size={14} /> Validate Certificate
            </a>

            <div className="mt-6 flex flex-wrap gap-2">
              {cert.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
