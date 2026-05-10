import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { lazyThree } from "@/components/three/ClientOnly";

const SkillsField = lazyThree(() => import("@/components/three/SkillsField"), "SkillsField");

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills & Tech — Aditya" },
      {
        name: "description",
        content:
          "Languages, platform frameworks, message streaming, databases, cloud & DevOps, and engineering practices Aditya works with.",
      },
      { property: "og:title", content: "Skills & Tech — Aditya" },
    ],
  }),
  component: Skills,
});

type Cat = {
  title: string;
  bar: string;
  chip: string;
  items: string[];
};

const CATEGORIES: Cat[] = [
  {
    title: "Languages",
    bar: "bg-cat-language",
    chip: "border-cat-language/40 text-cat-language bg-cat-language/5 hover:bg-cat-language/15",
    items: ["Golang", "Rust", "Python"],
  },
  {
    title: "Platform Frameworks",
    bar: "bg-cat-platform",
    chip: "border-cat-platform/40 text-cat-platform bg-cat-platform/5 hover:bg-cat-platform/15",
    items: ["Temporal", "Databricks"],
  },
  {
    title: "Message Streaming",
    bar: "bg-cat-stream",
    chip: "border-cat-stream/40 text-cat-stream bg-cat-stream/5 hover:bg-cat-stream/15",
    items: ["Apache Kafka", "SQS", "SNS"],
  },
  {
    title: "Databases",
    bar: "bg-cat-db",
    chip: "border-cat-db/40 text-cat-db bg-cat-db/5 hover:bg-cat-db/15",
    items: ["PostgreSQL", "MongoDB", "Redis", "Aerospike"],
  },
  {
    title: "Cloud & DevOps",
    bar: "bg-cat-cloud",
    chip: "border-cat-cloud/40 text-cat-cloud bg-cat-cloud/5 hover:bg-cat-cloud/15",
    items: [
      "AWS",
      "GCP",
      "Azure",
      "Kubernetes",
      "CircleCI",
      "ArgoCD",
      "Jenkins",
      "Terraform",
      "Istio",
    ],
  },
  {
    title: "Practices",
    bar: "bg-cat-practice",
    chip: "border-cat-practice/40 text-cat-practice bg-cat-practice/5 hover:bg-cat-practice/15",
    items: [
      "Unit Testing",
      "TDD",
      "Distributed Tracing",
      "Event-Driven Architecture",
    ],
  },
];

function Skills() {
  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-0 -z-10">
        <SkillsField />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/70 to-background pointer-events-none" />

      <div className="mx-auto max-w-7xl min-[1920px]:max-w-[1600px] px-5 md:px-8 min-[1920px]:px-12 py-16">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm uppercase tracking-[0.3em] text-primary/80"
        >
          Skills & Tech
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-4 font-display font-bold text-5xl md:text-7xl"
        >
          The <span className="text-aurora">full stack</span> I reach for.
        </motion.h1>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="glass rounded-2xl p-6 relative overflow-hidden"
            >
              <div
                className={`absolute left-0 top-6 bottom-6 w-1 rounded-r-full ${cat.bar}`}
              />
              <h2 className="pl-4 font-display text-xl font-semibold">
                {cat.title}
              </h2>
              <div className="mt-5 pl-4 flex flex-wrap gap-2">
                {cat.items.map((it) => (
                  <span
                    key={it}
                    className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${cat.chip}`}
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-16 text-center font-display tracking-[0.4em] text-xs text-muted-foreground/60">
          FULL STACK
        </p>
      </div>
    </section>
  );
}
