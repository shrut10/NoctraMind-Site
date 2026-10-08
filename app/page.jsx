import Link from 'next/link';
import ThrongletField from '@/components/ThrongletField';
import PixelIcon from '@/components/PixelIcon';
import ProjectCard from '@/components/ProjectCard';
import WritingList from '@/components/WritingList';
import { profile, home, projects, posts, intentlab } from '@/content/site';

export const metadata = { alternates: { canonical: '/' } };

export default function Home() {
  return <>
    <section className="news-board" aria-labelledby="latest-title"><div className="news-stamp"><PixelIcon name="brain" /><span>NEW<br />BUILD</span></div><div className="news-copy"><p className="eyebrow">{home.newsLabel}</p><h2 id="latest-title">{home.newsTitle}</h2><p>{home.newsText}</p><p className="news-detail"><a className="text-link" href={intentlab.recognitionUrl} target="_blank" rel="noopener noreferrer">{intentlab.recognition} <span aria-hidden="true">↗</span></a></p></div><Link className="button button-yellow" href="/projects/intentlab">{home.newsButton}<PixelIcon name="arrow" /></Link></section>
    <section className="hero" aria-labelledby="hello">
      <div className="hero-copy"><h1 id="hello">{home.greeting}<br /><span>{profile.shortName}</span></h1><p className="hero-intro">{profile.introduction}</p><p className="hero-welcome">{profile.welcome}</p><div className="button-row"><Link href="/projects" className="button button-green">Explore my projects <PixelIcon name="arrow" /></Link><Link href="/about" className="text-link">About me ↗</Link></div><p className="degree">{profile.degree}</p></div>
      <ThrongletField />
    </section>

    <section className="page-section" aria-labelledby="projects-heading"><div className="section-heading"><div><h2 id="projects-heading">{home.projectsHeading}</h2><p>{home.projectsIntro}</p></div><Link href="/projects" className="text-link">All projects <span aria-hidden="true">→</span></Link></div><div className="project-grid">{projects.slice(0, 2).map(project => <ProjectCard key={project.id} project={project} />)}</div></section>
    <section className="page-section" aria-labelledby="writing-heading"><div className="section-heading"><div><h2 id="writing-heading">{home.writingHeading}</h2><p>{home.writingIntro}</p></div><Link href="/blog" className="text-link">All writing <span aria-hidden="true">→</span></Link></div><WritingList posts={[posts[0], posts[3]]} /></section>
    <section className="contact-strip"><PixelIcon name="mail" /><div><h2>{home.contactHeading}</h2><p>{home.contactText}</p></div><Link href="/contact" className="button">Get in touch <span aria-hidden="true">↗</span></Link></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Person', name: profile.name, alternateName: 'Shruthi Rajesh Babu', url: 'https://jayashruthi.com', sameAs: [profile.linkedin, profile.github, profile.medium], jobTitle: 'Data Science Student', affiliation: { '@type': 'CollegeOrUniversity', name: 'University of Leeds' } }).replace(/</g, '\\u003c') }} />
  </>;
}
