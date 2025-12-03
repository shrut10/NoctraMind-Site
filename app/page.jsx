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

      {/* Glow Orbs */}
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
      <div
        className="nm-orb"
        style={{
          width: "120px",
          height: "120px",
          bottom: "-20px",
          left: "10%",
          background:
            "radial-gradient(circle, rgba(56,189,248,0.9), transparent 55%)",
        }}
      />

      <div className="relative max-w-2xl space-y-4">
        <motion.p
          className="uppercase tracking-[0.25em] text-xs text-pink-200/80"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          Jayashruthi Rajesh Babu's Portfolio Site
        </motion.p>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-pink-50 drop-shadow-[0_0_18px_rgba(236,72,153,0.9)]"
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Welcome to my website, where you will find my{" "}
          <span className="text-pink-300">projects</span> and{" "}
          <span className="text-purple-300">written work</span>.
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg text-slate-100/90 max-w-xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35 }}
        >
          Data scientist exploring AI agents and computational neuroscience to further the understanding of machine intelligence.
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
            Blog
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
          Technical Projects
        </h3>
        <p className="opacity-90 mt-2 text-sm">
          My builds and various other projects.
        </p>
        <NextLink className="btn mt-4" href="/projects">
          Explore projects
        </NextLink>
      </div>

      <div className="card">
        <h3 className="font-semibold text-lg text-pink-200">
          Writing
        </h3>
        <p className="opacity-90 mt-2 text-sm">
          Short blog posts on topics of interest.
        </p>
        <NextLink className="btn mt-4" href="/blog">
          Read the blog
        </NextLink>
      </div>

      <div className="card">
        <h3 className="font-semibold text-lg text-pink-200">
          Contact Me
        </h3>
        <p className="opacity-90 mt-2 text-sm">
          Here you can reach me for collaborations or opportunities.
        </p>
        <NextLink className="btn mt-4" href="/contact">
          Contact
        </NextLink>
      </div>
    </div>
  );
}

<script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Jayashruthi Rajesh Babu",
  "alternateName": "Shruthi Rajesh Babu",
  "url": "https://jayashruthi.com",
  "sameAs": [
    "https://www.linkedin.com/in/jayashruthi-r-6592101b9/",
    "https://github.com/shrut10",
    "https://medium.com/@rjayashruthi"
  ],
  "jobTitle": "Data Science Student",
  "affiliation": "University of Leeds"
}
`}
</script>
