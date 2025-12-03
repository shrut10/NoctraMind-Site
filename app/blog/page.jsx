export const dynamic = "force-static";

const posts = [
  {
    title: "Bridging Minds and Machines through Neural Networks",
    excerpt: "What would it take to upload a human brain into a computer?",
    link: "https://medium.com/@rjayashruthi/bridging-minds-and-machines-through-neural-networks-9a5f06778cc2"
  },
  {
    title: "My Overview of Structural dependencies in Discrete and Continuous time Markov processes",
    excerpt: "An overview of how ideas such as communicating classes, irreducibility, periodicity, Poisson processes and generator matrices connect to form the structure of Markov processes.",
    link: "/pdfs/markov-essay.pdf"
  },
  {
    title: "Exploring the Hypothesis of a Cyclical Universe",
    excerpt: "In this essay I explore the idea that the universe follows a cyclic pattern of creation and collapse, influenced by recurring energetic structures that appear throughout nature.",
    link: "https://medium.com/@rjayashruthi/exploring-the-hypothesis-of-a-cyclical-universe-fbc11c980dc5"
  },
  {
    title: "What Channel 4’s “Humans” Teaches Us About Machine Minds",
    excerpt: "For years, Humans was the only piece of media that closely resembled what I believed to be the most likely path to sentient artificial intelligence.",
    link: "https://medium.com/@rjayashruthi/what-channel-4s-humans-teaches-us-about-machine-minds-cc752e3f576f"
  },
  {
    title: "Can Psychedelics Aid in Meditation for Higher States of Consciousness?",
    excerpt: "My interest in altered states of consciousness did not begin with books or scientific articles.",
    link: "https://medium.com/@rjayashruthi/can-psychedelics-aid-in-meditation-for-reaching-higher-states-of-consciousness-b609e6a5aa7f"
  }
];

export default function Page() {
  return (
    <section className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
        <p className="opacity-80">My ideas in writing</p>
      </header>

      <ul className="grid gap-4 sm:grid-cols-2">
        {posts.map((p) => (
          <li key={p.title} className="card">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="opacity-80 mt-2">{p.excerpt}</p>

            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="btn mt-4"
            >
              Read on Medium
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
