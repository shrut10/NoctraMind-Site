import Link from 'next/link';
import ThrongletField from '@/components/ThrongletField';
import PixelIcon from '@/components/PixelIcon';
import FeaturedProject from '@/components/FeaturedProject';
import WritingList from '@/components/WritingList';
import { profile, home, posts, intentlab, genecraft, ui } from '@/content/site';
import StructuredData from '@/components/StructuredData';
import { pageMetadata, pageData } from '@/lib/seo';

export const metadata = pageMetadata('home');

export default function Home() {
  return <><StructuredData data={pageData('home')} />
    <section className="news-board" aria-labelledby="recognition-title"><div className="news-stamp" aria-hidden="true"><PixelIcon name="brain" /></div><div className="news-copy"><p className="eyebrow">{home.newsLabel}</p><h2 id="recognition-title">{home.newsTitle}</h2><p>{home.newsText}</p><p className="news-detail"><a className="text-link" href={intentlab.recognitionUrl} target="_blank" rel="noopener noreferrer">{home.newsResourceLabel} <span aria-hidden="true">↗</span></a></p></div><Link className="button button-yellow" href={home.newsHref}>{home.newsButton}<PixelIcon name="arrow" /></Link></section>
    <section className="hero" aria-labelledby="hello">
      <div className="hero-copy"><h1 id="hello">{home.greeting}<br /><span>{profile.shortName}</span></h1><p className="identity-name">{profile.name} ({profile.shortName})</p><p className="hero-intro">{profile.introduction}</p><p className="hero-welcome">{profile.welcome}</p><div className="button-row"><Link href="/projects" className="button button-green">{ui.projectsButton} <PixelIcon name="arrow" /></Link><Link href="/about" className="text-link">{ui.aboutButton} ↗</Link></div><p className="degree">{profile.degree}</p></div>
      <ThrongletField />
    </section>

    <section className="page-section" aria-labelledby="projects-heading"><div className="section-heading"><div><h2 id="projects-heading">{home.projectsHeading}</h2><p>{home.projectsIntro}</p></div><Link href="/projects" className="text-link">{ui.allProjects} <span aria-hidden="true">→</span></Link></div><div className="featured-grid"><FeaturedProject compact project={intentlab} href="/projects/intentlab" titleId="home-intentlab" /><FeaturedProject compact project={genecraft} href="/projects/genecraft" titleId="home-genecraft" /></div></section>
    <section className="page-section" aria-labelledby="writing-heading"><div className="section-heading"><div><h2 id="writing-heading">{home.writingHeading}</h2><p>{home.writingIntro}</p></div><Link href="/blog" className="text-link">{ui.allWriting} <span aria-hidden="true">→</span></Link></div><WritingList posts={posts.filter(post => post.format === 'Essay')} /></section>
    <section className="contact-strip"><PixelIcon name="mail" /><div><h2>{home.contactHeading}</h2><p>{home.contactText}</p></div><Link href="/contact" className="button">{ui.contactButton} <span aria-hidden="true">↗</span></Link></section>
  </>;
}
