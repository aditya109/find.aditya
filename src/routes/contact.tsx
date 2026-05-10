import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Copy, Github, Linkedin, Mail, Check } from "lucide-react";
import { useState } from "react";
import { lazyThree } from "@/components/three/ClientOnly";

const ContactParticles = lazyThree(() => import("@/components/three/ContactParticles"), "ContactParticles");

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Aditya" },
      {
        name: "description",
        content:
          "Get in touch with Aditya — backend & platform engineer based in Bangalore.",
      },
      { property: "og:title", content: "Contact — Aditya" },
    ],
  }),
  component: Contact,
});

const EMAIL = "hello@aditya.dev"; // placeholder — replace with real email

function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className="relative min-h-[80vh]">
      <div className="absolute inset-0 -z-10">
        <ContactParticles />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/30 via-background/60 to-background pointer-events-none" />

      <div className="mx-auto max-w-4xl px-5 md:px-8 py-20 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm uppercase tracking-[0.3em] text-primary/80"
        >
          Contact
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-4 font-display font-bold text-5xl md:text-7xl"
        >
          Let's <span className="text-aurora">build</span> something durable.
        </motion.h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
          Open to senior backend, platform, and distributed-systems roles, plus
          interesting consulting around Temporal & event-driven architecture.
        </p>

        <div className="mt-10 inline-flex items-center gap-2 glass rounded-full pl-5 pr-2 py-2">
          <Mail size={16} className="text-primary" />
          <span className="font-mono text-sm">{EMAIL}</span>
          <button
            onClick={copy}
            className="ml-2 inline-flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-xs font-medium hover:scale-[1.03] transition-transform"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          <a
            href="https://github.com/aditya109"
            target="_blank"
            rel="noreferrer"
            className="glass rounded-full p-3 hover:border-primary/40 transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/aditya"
            target="_blank"
            rel="noreferrer"
            className="glass rounded-full p-3 hover:border-primary/40 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
