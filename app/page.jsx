import Link from 'next/link';
import Image from 'next/image';
import ThrongletField from '@/components/ThrongletField';
import PixelIcon from '@/components/PixelIcon';
import FeaturedProject from '@/components/FeaturedProject';
import WritingList, { EssayDate } from '@/components/WritingList';
import { home, posts, intentlab, genecraft, ui } from '@/content/site';
import StructuredData from '@/components/StructuredData';
import { pageMetadata, pageData } from '@/lib/seo';

export const metadata = pageMetadata('home');

export default function Home() {
  const latestEssays = posts.filter(post => post.published === posts[0].published);

  return <><StructuredData data={pageData('home')} />
    <div className="home-top">
      <section className="updates" aria-labelledby="updates-title">
        <h1 id="updates-title">Updates</h1>
        <div className="essay-updates">
          <div className="essay-updates-heading">
            <h2>{latestEssays.length === 1 ? 'New essay' : 'New essays'}</h2>
            <EssayDate published={latestEssays[0].published} />
          </div>
          <ul role="list">
            {latestEssays.map(post => (
              <li key={post.link}>
                <a href={post.link} target="_blank" rel="noopener noreferrer">
                  {post.image && <Image src={post.image.src} width={post.image.width} height={post.image.height} alt="" unoptimized />}
                  <span>{post.title}<span className="sr-only"> (Medium, opens in a new tab)</span></span>
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <article className="news-board research-update" aria-labelledby="recognition-title">
          <div className="news-copy"><p className="eyebrow">{home.newsLabel}</p><h2 id="recognition-title">{home.newsTitle}</h2><p>{home.newsText}</p></div>
          <div className="news-actions"><Link className="text-link" href={home.newsHref}>{home.newsButton} ↗</Link><a className="text-link" href={intentlab.recognitionUrl} target="_blank" rel="noopener noreferrer">{home.newsResourceLabel}{'\u00a0↗'}</a></div>
        </article>
      </section>
      <ThrongletField />
    </div>

    <section className="page-section" aria-labelledby="projects-heading"><div className="section-heading"><div><h2 id="projects-heading">{home.projectsHeading}</h2><p>{home.projectsIntro}</p></div><Link href="/projects" className="text-link">{ui.allProjects} <span aria-hidden="true">→</span></Link></div><div className="featured-grid"><FeaturedProject compact project={intentlab} href="/projects/intentlab" titleId="home-intentlab" /><FeaturedProject compact project={genecraft} href="/projects/genecraft" titleId="home-genecraft" /></div></section>
    <section className="page-section" aria-labelledby="writing-heading"><div className="section-heading"><div><h2 id="writing-heading">{home.writingHeading}</h2><p>{home.writingIntro}</p></div><Link href="/blog" className="text-link">{ui.allWriting} <span aria-hidden="true">→</span></Link></div><WritingList posts={posts.filter(post => !latestEssays.includes(post)).slice(0, 3)} compact /></section>
    <section className="contact-strip"><PixelIcon name="mail" /><div><h2>{home.contactHeading}</h2><p>{home.contactText}</p></div><Link href="/contact" className="button">{ui.contactButton} <span aria-hidden="true">↗</span></Link></section>
  </>;
}
