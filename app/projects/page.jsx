import FeaturedProject from '@/components/FeaturedProject';
import ProjectCard from '@/components/ProjectCard';
import { projects, intentlab, genecraft, ui, profile } from '@/content/site';

export const metadata = { title: 'Projects', description: 'GeneCraft, IntentLab and machine learning projects by Shruthi.', alternates: { canonical: '/projects' } };

export default function Projects() {
  return <><header className="page-heading"><h1>{ui.projectsTitle}</h1><p>{ui.projectsIntro}</p></header>
    <div className="featured-list"><FeaturedProject project={genecraft} href="/projects/genecraft" titleId="genecraft-title" /><FeaturedProject project={intentlab} href="/projects/intentlab" titleId="intentlab-title" /></div>
    <section className="page-section" aria-labelledby="more-projects"><div className="section-heading"><h2 id="more-projects">{ui.moreProjects}</h2><a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer">{ui.githubButton} ↗</a></div><div className="project-grid">{projects.map(project => <ProjectCard key={project.id} project={project} />)}</div></section>
  </>;
}
