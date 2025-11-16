export const dynamic = "force-static";

export default function Page() {
  return (
    <section className="space-y-6 max-w-3xl">
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-pink-200 drop-shadow-[0_0_14px_rgba(236,72,153,0.8)]">
          About Me
        </h1>
        <p className="opacity-80 text-sm uppercase tracking-[0.25em] mt-2">
          Data Science · AI · Cognition · Systems
        </p>
      </header>

      <p className="opacity-90 leading-relaxed">
        My name is <strong>Jayashruthi Rajesh Babu</strong>, but most people call me <strong>Shruthi</strong>.
        I am a Data Science student at the University of Leeds with a longstanding avid interest in
        artificial intelligence, automation and the deeper questions that come up when
        you examine human minds and machines through the same computational lens.
      </p>

      <p className="opacity-90 leading-relaxed">
        My work covers practical software engineering and conceptual exploration. I build
        automation tools, experiment with AI agents and in my free time, I write about topics such as
        consciousness, cognition and emerging intelligent systems. I enjoy approaching
        technical challenges with both scientific precision but also creative abstraction,
        treating programs as a medium for understanding behaviour, structure and thought.
      </p>

      <p className="opacity-90 leading-relaxed">
        Beyond academic work, I use personal projects to test ideas quickly. These range from
        OS-level AI agents and experimental memory models to essays on computational
        philosophy and the future of machine intelligence. These projects allow me to
        explore how reasoning, perception and identity might be represented in systems
        very different from our own.
      </p>

      <p className="opacity-90 leading-relaxed">
        I am working towards a career in AI engineering, data science or intelligent
        systems research, with the ultimate ambition of contributing to technologies
        that further our understanding of what minds are and how they can be modelled.
        I developed this wesbite as a living archive of my projects, ideas and ongoing
        development.
      </p>

      <p className="opacity-90 leading-relaxed">
        If you'd like to collaborate, discuss ideas or get in touch about opportunities,
        feel free to reach out through the contact page.
      </p>
    </section>
  );
}
