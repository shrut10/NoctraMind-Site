export const dynamic = "force-static";

export default function Page() {
  return (
    <section className="space-y-6 max-w-3xl">
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-pink-200 drop-shadow-[0_0_14px_rgba(236,72,153,0.8)]">
          The NoctraMind Vision
        </h1>
        <p className="opacity-80 text-sm uppercase tracking-[0.25em] mt-2">
          AI · Consciousness · Spirituality · Mind
        </p>
      </header>

      <p className="opacity-90 leading-relaxed">
        NoctraMind is my personal research space, a place to experiment with the
        intersection of artificial intelligence and the
        longstanding human quest to understand consciousness. It sits deliberately between
        the technical and the metaphysical, refusing to treat them as opposing domains.
      </p>

      <p className="opacity-90 leading-relaxed">
        I am exploring a simple but interesting question:{" "}
        <em>what do we learn about the human mind when we try to recreate aspects of it in code?</em>{" "}
        Working on computational agents often exposes the assumptions and
        internal narratives we rely on without noticing and this feedback loop is where the real findings emerge.
      </p>

      <p className="opacity-90 leading-relaxed">
        Over time, this space will document my experiments. Coming up, I plan to research and review agents with long term
        memory and evolving self models, meditative debugging as a cognitive
        technique and small neuro adjacent
        practices reframed through information flow, attention modelling and internal state transitions.
        You may also find small or off topic projects here too. Nothing here is intended to be final theories, rather they’re probes, designed
        to test what becomes possible when you combine analytical rigour with
        intuition driven exploration, something more innately natural.
      </p>

      <p className="opacity-90 leading-relaxed">
        In the long run, NoctraMind is an archive of my attempt to bridge the rational
        and the mystical without diluting either. It is a record of 
        experimentation and the belief that understanding mind in biological or artificial form
        will require us to think beyond the boundaries of any single discipline.
      </p>
    </section>
  );
}
