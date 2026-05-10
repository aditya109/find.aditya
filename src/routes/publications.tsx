import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications — Aditya" },
      {
        name: "description",
        content:
          "Aditya's research publications — Abstractive Text Summarization, NLP, and Deep Learning.",
      },
      { property: "og:title", content: "Publications — Aditya" },
    ],
  }),
  component: Publications,
});

const PUBS = [
  {
    title: "Abstractive Text Summarization and Unsupervised Text Classifier",
    venue: "Springer ICMLIP '19",
    url: "https://link.springer.com/chapter/10.1007/978-981-15-1884-3_33",
    icon: `${import.meta.env.BASE_URL}springer-logo.png`,
    description:
      "Research paper published at the International Conference on Machine Learning and Intelligent Processing (ICMLIP 2019), Springer. Explores deep learning approaches to abstractive summarization using Sequence-to-Sequence RNN with Bidirectional LSTM for unsupervised classification of natural language text.",
    tags: [
      "NLP",
      "Deep Learning",
      "Text Summarization",
      "Unsupervised Learning",
    ],
  },
];

function Publications() {
  return (
    <section className="mx-auto max-w-7xl min-[1920px]:max-w-[1600px] px-5 md:px-8 min-[1920px]:px-12 py-16">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-sm uppercase tracking-[0.3em] text-primary/80"
      >
        Research
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-4 font-display font-bold text-5xl md:text-7xl max-w-4xl"
      >
        Papers that <span className="text-aurora">pushed boundaries.</span>
      </motion.h1>

      <div className="mt-16 grid gap-8 max-w-3xl">
        {PUBS.map((pub, i) => (
          <motion.article
            key={pub.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-2xl p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <BookOpen size={18} className="text-primary" />
              <span className="text-xs uppercase tracking-wider text-primary">
                Publication
              </span>
            </div>

            <div className="flex items-start gap-5">
              <img
                src={pub.icon}
                alt={`${pub.venue} logo`}
                className="w-16 h-16 rounded-xl object-contain border border-primary/20 bg-surface p-1"
              />
              <div className="flex-1">
                <h2 className="font-display text-2xl md:text-3xl font-semibold leading-tight">
                  {pub.title}
                </h2>
                <span className="inline-flex mt-2 px-3 py-0.5 rounded-full text-xs bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  {pub.venue}
                </span>
              </div>
            </div>

            <p className="mt-5 text-muted-foreground leading-relaxed">
              {pub.description}
            </p>

            <a
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <ExternalLink size={14} /> Read on Springer
            </a>

            <div className="mt-6 flex flex-wrap gap-2">
              {pub.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
