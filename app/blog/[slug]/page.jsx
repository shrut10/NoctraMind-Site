import Link from "next/link";
import { getOne, getSlugs } from "@/lib/content";


export const dynamic = "force-static";

export function generateStaticParams() {
  const slugs = getSlugs("blog");
  return slugs.map((slug) => ({ slug }));
}

export default function Page({ params }) {
  const { meta, html } = getOne("blog", params.slug);
  return (
    <article className="prose prose-invert max-w-none">
      <header className="mb-6 not-prose">
        <Link className="btn mb-6" href="/blog">← Back</Link>
        <h1 className="text-3xl font-bold tracking-tight">{meta.title}</h1>
        <p className="opacity-80">{meta.excerpt}</p>
        <div className="text-sm opacity-70">{new Date(meta.date).toLocaleDateString()}</div>
      </header>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
