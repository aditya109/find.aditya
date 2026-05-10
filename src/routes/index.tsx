import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Download, Layers, Sparkles } from "lucide-react";
import { ClientOnly } from "@/components/three/ClientOnly";
import { HeroShader } from "@/components/three/HeroShader";
import { FunkyButton } from "@/components/three/FunkyButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aditya — Backend & Platform Engineer" },
      {
        name: "description",
        content:
          "Aditya, Senior Software Engineer at Flexera. I build durable distributed systems with Go, Rust, Temporal and Kafka.",
      },
      { property: "og:title", content: "Aditya — Backend & Platform Engineer" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative min-h-[92vh] overflow-hidden">
        <div className="absolute inset-0 -z-10 grid-bg opacity-40" />
        <div className="absolute inset-0 -z-10">
          <ClientOnly>
            <HeroShader />
          </ClientOnly>
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/0 via-background/40 to-background pointer-events-none" />

        <div className="mx-auto max-w-7xl px-5 md:px-8 pt-24 md:pt-32">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-[0.3em] text-primary/80"
          >
            Senior Software Engineer · Bangalore
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mt-5 font-display font-bold leading-[0.95] text-5xl md:text-7xl lg:text-8xl max-w-5xl"
          >
            Building <span className="text-aurora">durable systems</span> that
            outlast the hype.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            I design event-driven backends, Temporal workflows, and platform
            services that quietly do the right thing at 3 AM. Currently shipping
            cloud billing infrastructure at Flexera.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Link
              to="/experience"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium shadow-mint hover:scale-[1.02] transition-transform"
            >
              View Experience
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full font-medium hover:border-primary/40 transition-colors"
            >
              Get in touch
            </Link>
            <ClientOnly>
              <FunkyButton href={`${import.meta.env.BASE_URL}Aditya_Resume.pdf`}>
                <Download size={18} />
                Resume
              </FunkyButton>
            </ClientOnly>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              icon: Cpu,
              title: "Distributed by default",
              body: "Event-driven pub/sub, queue adapters, idempotent retries — failure is a first-class state.",
            },
            {
              icon: Layers,
              title: "Workflow as code",
              body: "Temporal orchestrations with heartbeats, signals, and stale-operation recovery for safe reprocessing.",
            },
            {
              icon: Sparkles,
              title: "Platform thinking",
              body: "Unified connector platforms, observability-first, audit trails baked in — not bolted on.",
            },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 hover:border-primary/40 transition-colors"
            >
              <c.icon className="text-primary mb-4" size={22} />
              <h3 className="font-display text-xl font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {c.body}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 pb-20">
        <div className="overflow-hidden glass rounded-2xl py-6">
          <div className="flex gap-12 animate-[marquee_30s_linear_infinite] whitespace-nowrap">
            {[
              "Golang",
              "Rust",
              "Python",
              "Temporal",
              "Kafka",
              "PostgreSQL",
              "MongoDB",
              "Redis",
              "AWS",
              "Kubernetes",
              "Terraform",
              "Istio",
              "ArgoCD",
              "Aerospike",
            ]
              .concat([
                "Golang",
                "Rust",
                "Python",
                "Temporal",
                "Kafka",
                "PostgreSQL",
                "MongoDB",
                "Redis",
                "AWS",
                "Kubernetes",
                "Terraform",
                "Istio",
                "ArgoCD",
                "Aerospike",
              ])
              .map((t, i) => (
                <span
                  key={i}
                  className="font-display text-2xl text-muted-foreground/60"
                >
                  {t}
                </span>
              ))}
          </div>
        </div>
      </section>

      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </>
  );
}
