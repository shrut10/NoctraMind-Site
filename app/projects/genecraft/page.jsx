import Link from 'next/link';
import Image from 'next/image';
import { genecraft, ui } from '@/content/site';

export const metadata = { title: 'GeneCraft — Minecraft agents', description: genecraft.description, alternates: { canonical: '/projects/genecraft' }, openGraph: { images: [{ url: genecraft.image, alt: genecraft.imageAlt }] } };

export default function GeneCraft() {
  return <><Link href="/projects" className="text-link breadcrumb">{ui.backProjects}</Link>
    <header className="project-heading"><p className="eyebrow">{genecraft.kind}</p><h1>{genecraft.title}</h1><p className="project-subtitle">{genecraft.subtitle}</p><p className="project-summary">{genecraft.description}</p><div className="button-row"><a className="button button-green" href={genecraft.release} target="_blank" rel="noopener noreferrer">{genecraft.releaseButton} ↗</a><a className="button" href={genecraft.github} target="_blank" rel="noopener noreferrer">{ui.codeButton} ↗</a></div></header>
    <figure className="project-screenshot"><Image src={genecraft.image} alt={genecraft.imageAlt} width={2940} height={1340} priority sizes="(max-width: 1200px) 100vw, 1120px" /><figcaption>{genecraft.imageCaption}</figcaption></figure>
    <section className="detail-section"><h2>{genecraft.question}</h2><div className="prose"><p>{genecraft.motivation}</p></div></section>
    <section className="detail-section"><h2>{genecraft.howHeading}</h2><ol className="steps">{genecraft.steps.map((step, i) => <li key={step.title}><span className="step-number">{i + 1}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol></section>
    <section className="detail-section"><h2>{genecraft.implementationHeading}</h2><div className="prose"><p>{genecraft.implementation}</p><p>{genecraft.limits}</p><ul className="tags" aria-label="Technologies">{genecraft.stack.map(tag => <li key={tag}>{tag}</li>)}</ul></div></section>
    <p className="afterword">{genecraft.affiliation}</p>
  </>;
}
