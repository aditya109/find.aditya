import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ClientOnly } from "@/components/three/ClientOnly";
import { AboutAvatar } from "@/components/three/AboutAvatar";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Aditya" },
      {
        name: "description",
        content:
          "About Aditya — backend engineer focused on event-driven systems, durable workflows, and platform thinking.",
      },
      { property: "og:title", content: "About — Aditya" },
    ],
  }),
  component: About,
});

const PRINCIPLES = [
  "Event-driven beats request/response at scale.",
  "Observability is a feature, not a chore.",
  "Workflows-as-code make failure recoverable.",
  "Boring, tested infra over clever, fragile infra.",
  "Backwards compatibility is empathy for future-you.",
];

function About() {
  return (
    <section className="mx-auto max-w-7xl px-5 md:px-8 py-16">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-sm uppercase tracking-[0.3em] text-primary/80"
      >
        About
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-4 font-display font-bold text-5xl md:text-7xl"
      >
        Engineer of <span className="text-aurora">quiet systems.</span>
      </motion.h1>

      <div className="mt-12 grid md:grid-cols-[1.2fr_1fr] gap-10 items-center">
        <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm Aditya — a backend & platform engineer who likes the parts of
            software nobody sees: queues, locks, audit trails, the timeout that
            saved you on Sunday night.
          </p>
          <p>
            Today I'm a Senior Software Engineer at{" "}
            <span className="text-foreground">Flexera</span>, designing
            cloud-billing services and Temporal-based workflow orchestration
            that has to be right the first time, every time.
          </p>
          <p>
            Before that, I've worked across event-driven architectures with
            Kafka, SQS/SNS, and queue adapters; built CloudFormation StackSet
            provisioning for IAM; and migrated legacy credential stores without
            breaking downstream consumers.
          </p>
        </div>
        <div className="relative h-[420px] rounded-3xl glass overflow-hidden">
          <ClientOnly>
            <AboutAvatar />
          </ClientOnly>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="font-display text-3xl md:text-4xl font-semibold">
          How I think
        </h2>
        <ul className="mt-8 grid md:grid-cols-2 gap-3">
          {PRINCIPLES.map((p, i) => (
            <motion.li
              key={p}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass rounded-xl px-5 py-4 flex gap-3 items-start"
            >
              <span className="text-primary font-display">0{i + 1}</span>
              <span className="text-foreground/90">{p}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
