import PixelIcon from './PixelIcon';
import Image from 'next/image';
import { ui } from '@/content/site';

export default function ProjectCard({ project }) {
  return <article className="project-card">
    {project.image && <a className="project-thumbnail" href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`${project.title}: ${ui.codeButton}`}><Image src={project.image} alt={project.imageAlt} width={1260} height={810} sizes="(max-width: 760px) 100vw, 540px" /></a>}
    <div className="project-top"><span className="project-icon"><PixelIcon name={project.icon} /></span><span className="eyebrow">{project.kind}</span></div>
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <ul className="tags" aria-label="Technologies">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    <a className="text-link" href={project.link} target="_blank" rel="noopener noreferrer">{ui.codeButton} <span aria-hidden="true">↗</span><span className="sr-only"> for {project.title} (opens in a new tab)</span></a>
  </article>;
}
