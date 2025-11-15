"use client";

import { motion } from "framer-motion";
import NextLink from "next/link";

export default function Page() {
  return (
    <section className="space-y-10">
      <Hero />
      <QuickGrid />
    </section>
  );
}

function Hero() {
  return (
    <motion.section
      className="nm-hero p-8 sm:p-10 md:p-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <div className="nm-pixel-sky" />
      <div
        className="nm-orb"
        style={{
          width: "210px",
          height: "210px",
          top: "-40px",
          right: "-30px",
          background:
            "radial-gradient(circle, rgba(236,72,153,0.8), transparent 55%)",
        }}
      />

      <div className="relative max-w-2xl space-y-4">
        <motion.p
          className="uppercase tracking-[0.25em] text-xs text-pink-200/80"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          NoctraMind Laboratory
        </motion.p>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-pink-50 drop-shadow-[0_0_18px_rgba(236,72,153,0.9)]"
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Mapping the border between{" "}
          <span className="text-pink-300">code</span> and{" "}
          <span className="text-purple-300">consciousness</span>.
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg text-slate-100/90 max-w-xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35 }}
        >
          Data scientist exploring machine minds, artificial agency, and the
          intersections between intelligence, introspection, and digital
          consciousness.
        </motion.p>

        <motion.div
          className="mt-6 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <NextLink href="/projects" className="btn">
            View Projects
          </NextLink>

          <NextLink href="/blog" className="btn">
            Visit Blog
          </NextLink>

          <NextLink href="/contact" className="btn">
            Contact
          </NextLink>
        </motion.div>
      </div>
    </motion.section>
  );
}

function QuickGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="card">
        <h3 className="font-semibold text-lg text-pink-200">
          Agents & Automation
        </h3>
        <p className="opacity-90 mt-2 text-sm">
          Experiments in AI agents and computational behaviour.
        </p>
        <NextLink className="btn mt-4" href="/projects">
          Explore Projects
        </NextLink>
      </div>

      <div className="card">
        <h3 className="font-semibold text-lg text-pink-200">
          Blog & Essays
        </h3>
        <p className="opacity-90 mt-2 text-sm">
          Writing on intelligence, consciousness, metaphysics and machine minds.
        </p>
        <NextLink className="btn mt-4" href="/blog">
          Read Blog
        </NextLink>
      </div>

      <div className="card">
        <h3 className="font-semibold text-lg text-pink-200">Say Hello</h3>
        <p className="opacity-90 mt-2 text-sm">
          Want to collaborate or discuss an idea? Reach out.
        </p>
        <NextLink className="btn mt-4" href="/contact">
          Contact
        </NextLink>
      </div>
    </div>
  );
}
