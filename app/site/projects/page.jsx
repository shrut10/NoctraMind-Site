"use client";

import { motion } from "framer-motion";

export const dynamic = "force-static";

const projects = [
  {
    title: "AI Agent System Automation Tool",
    description:
      "A natural language powered OS automation agent. Uses OCR, SQLite memory, action planning and Python scripting to execute tasks on macOS locally without browser automation.",
    tags: ["Python", "LLMs", "Automation", "OCR"],
    link: "https://github.com/wphs3147-uol/ai-agent-tool",
  },
  {
    title: "PageRank Search Spider & Visualiser",
    description:
      "A Python search engine emulator that crawls websites, stores link graphs in SQLite, computes PageRank iteratively and includes a D3.js force directed visualiser for further exploration.",
    tags: ["Python", "SQLite", "PageRank", "Web Crawling"],
    link: "https://github.com/shrut10/pagerank",
  },
  {
    title: "Shakespearean Text Evolution Algorithm",
    description:
      "An evolutionary algorithm that transforms random text strings into a target Shakespearean sonnet using mutation, crossover, scoring functions and iterative optimisation.",
    tags: ["NLP", "Genetic Algorithms", "Optimisation"],
    link: "https://github.com/wphs3147-uol/MATH1604-group-project",
  },
];

export default function Page() {
  return (
    <section className="space-y-8 relative">
      {/* sparkly bg */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-twinkle absolute inset-0 opacity-40" />
      </div>

      <header className="relative">
        <h1 className="text-4xl font-extrabold tracking-tight text-pink-400 drop-shadow-[0_0_20px_rgba(236,72,153,0.9)]">
          Projects
        </h1>
        <p className="opacity-80 text-lg">My builds and experiments</p>
      </header>

      <ul className="relative grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <motion.li
            key={p.title}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 30px rgba(236,72,153,0.8)",
            }}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}
            className="relative p-6 rounded-2xl bg-black/60 backdrop-blur-xl border border-pink-500/40 shadow-[0_0_22px_rgba(236,72,153,0.6)] overflow-hidden"
          >
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-pink-500/20 via-purple-700/10 to-sky-500/10 blur-2xl" />
            <div className="relative">
              <h3 className="text-2xl font-semibold text-pink-200 drop-shadow-[0_0_12px_rgba(236,72,153,0.8)]">
                {p.title}
              </h3>
              <p className="opacity-90 mt-3 text-sm leading-relaxed">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs opacity-90">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 rounded-full bg-pink-900/40 border border-pink-500/40 text-pink-100 shadow-[0_0_10px_rgba(236,72,153,0.7)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                className="inline-block mt-6 px-4 py-2 rounded-xl border border-pink-400/80 text-pink-100 hover:bg-pink-600/20 transition-all shadow-[0_0_14px_rgba(236,72,153,0.9)]"
                href={p.link}
                target="_blank"
                rel="noreferrer"
              >
                View Code →
              </a>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
