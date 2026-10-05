import PixelIcon from './PixelIcon';

export default function ProjectCard({ project }) {
  return <article className="project-card">
    <div className="project-top"><span className="project-icon"><PixelIcon name={project.icon} /></span><span className="eyebrow">{project.kind}</span></div>
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <ul className="tags" aria-label="Technologies">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    <a className="text-link" href={project.link} target="_blank" rel="noopener noreferrer">Look through the code <span aria-hidden="true">↗</span><span className="sr-only"> for {project.title} (opens in a new tab)</span></a>
  </article>;
}
