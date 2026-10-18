import Image from 'next/image';
import Link from 'next/link';
import { ui } from '@/content/site';

export default function FeaturedProject({ project, href, titleId, compact = false }) {
  return <article className={`featured-project${compact ? ' featured-compact' : ''}`} aria-labelledby={titleId}>
    <Link className="featured-image" href={href} aria-label={`${project.title}: ${ui.projectButton}`}>
      <Image src={project.image} alt={project.imageAlt} width={1470} height={800} sizes={compact ? '(max-width: 760px) 100vw, 550px' : '(max-width: 760px) 100vw, 600px'} />
    </Link>
    <div className="featured-copy"><p className="eyebrow">{project.kind}</p><h2 id={titleId}>{project.title}</h2><p className="lead">{project.subtitle}</p><p>{project.description}</p><ul className="tags" aria-label="Technologies">{project.stack.slice(0, 4).map(tag => <li key={tag}>{tag}</li>)}</ul><div className="button-row"><Link className="button button-green" href={href}>{ui.projectButton} <span aria-hidden="true">→</span></Link>{project.live && <a className="text-link" href={project.live} target="_blank" rel="noopener noreferrer">{ui.demoButton} ↗</a>}{project.release && <a className="text-link" href={project.release} target="_blank" rel="noopener noreferrer">{project.releaseButton} ↗</a>}</div></div>
  </article>;
}
