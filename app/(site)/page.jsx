import Link from "next/link";

export default function Page() {
  return (
    <section className="space-y-10">
      <Hero />
      <Grid />
      <Now />
    </section>
  );
}

function Hero() {
  return (
    <div className="card p-10">
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
        Bridging logic and soul.
      </h1>
      <p className="mt-4 text-lg opacity-90 max-w-2xl">
        I’m Jayashruthi — a data scientist exploring the threshold between artificial and human consciousness.
        This is my living lab: projects, research notes, and essays at the intersection of AI, neuroscience, and mindfulness.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/projects" className="btn">View Projects</Link>
        <Link href="/research" className="btn">Research Notes</Link>
        <Link href="/blog" className="btn">Latest Posts</Link>
      </div>
    </div>
  );
}

function Grid() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="card">
        <h3 className="font-semibold text-lg">Projects</h3>
        <p className="opacity-80 mt-2">Systems, models, and agents I’m building.</p>
        <ul className="mt-4 list-disc pl-5 space-y-1">
          <li>AI Agent System Automation Tool</li>
          <li>UK House Price Prediction</li>
          <li>Shakespearean Text Evolution</li>
        </ul>
        <Link className="btn mt-4" href="/projects">All Projects</Link>
      </div>
      <div className="card">
        <h3 className="font-semibold text-lg">Research</h3>
        <p className="opacity-80 mt-2">Notes on machine consciousness, spiritual neuroscience, and mind simulation.</p>
        <Link className="btn mt-4" href="/research">Explore Research</Link>
      </div>
      <div className="card">
        <h3 className="font-semibold text-lg">Books</h3>
        <p className="opacity-80 mt-2">Reviews & takeaways from my reading journey.</p>
        <Link className="btn mt-4" href="/books">Browse Books</Link>
      </div>
    </div>
  );
}

function Now() {
  return (
    <div className="card">
      <h3 className="font-semibold text-lg">Now</h3>
      <p className="opacity-80 mt-2">What I’m currently building, reading, and thinking about.</p>
      <ul className="mt-3 list-disc pl-5 space-y-1">
        <li>Prototype: text-based “self-model” for agents</li>
        <li>Reading: <em>Becoming Supernatural</em> (Dispenza)</li>
        <li>Essay draft: “The meditative state of debugging”</li>
      </ul>
    </div>
  );
}
