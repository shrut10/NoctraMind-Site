import Link from 'next/link';
import PixelIcon from '@/components/PixelIcon';
import ProjectCard from '@/components/ProjectCard';
import { projects, intentlab } from '@/content/site';

export const metadata = { title: 'Projects', description: 'AI, machine learning and programming projects by Shruthi, including IntentLab, an imagined-movement EEG experiment.', alternates: { canonical: '/projects' } };

export default function Projects() {
  return <><header className="page-heading"><h1>Projects</h1><p>Machine learning, neural interfaces and software development</p></header>
    <section className="featured-project" aria-labelledby="featured-title"><div className="featured-art" aria-hidden="true"><PixelIcon name="brain" /><span className="pixel-wave">▁▁▃▆▂▁▅█▃▁▁</span><p>signal → prediction</p></div><div className="featured-copy"><p className="eyebrow">Latest project · Brain–computer interfaces</p><h2 id="featured-title">{intentlab.title}</h2><p className="lead">{intentlab.subtitle}</p><p>{intentlab.description}</p><ul className="tags">{['EEG', 'PyTorch', 'FastAPI', 'Public demo'].map(tag => <li key={tag}>{tag}</li>)}</ul><div className="button-row"><Link className="button button-green" href="/projects/intentlab">Explore IntentLab <PixelIcon name="arrow" /></Link><a className="text-link" href={intentlab.live} target="_blank" rel="noopener noreferrer">Live experiment ↗</a></div></div></section>
    <section className="page-section" aria-labelledby="more-projects"><div className="section-heading"><h2 id="more-projects">Other projects</h2></div><div className="project-grid">{projects.map(project => <ProjectCard key={project.id} project={project} />)}</div></section>
  </>;
}
