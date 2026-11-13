import WritingList, { WritingCard } from '@/components/WritingList';
import PixelIcon from '@/components/PixelIcon';
import { markovPaper, posts, profile, ui } from '@/content/site';
import StructuredData from '@/components/StructuredData';
import { pageMetadata, pageData } from '@/lib/seo';

export const metadata = pageMetadata('writing');

export default function Writing() {
  const [featured, ...archive] = posts;

  return (
    <>
      <StructuredData data={pageData('writing')} />
      <header className="page-heading writing-heading">
        <div><h1>{ui.writingTitle}</h1><p>{ui.writingIntro}</p></div>
        <a href={profile.medium} className="button button-yellow" target="_blank" rel="noopener noreferrer">
          {ui.mediumButton} <span aria-hidden="true">↗</span>
        </a>
      </header>
      <WritingCard post={featured} featured />
      <section className="page-section" aria-labelledby="essay-archive">
        <div className="section-heading"><h2 id="essay-archive">More essays</h2></div>
        <WritingList posts={[...archive.filter(post => post.image), ...archive.filter(post => !post.image)]} />
      </section>
      <section className="page-section" aria-labelledby="maths-paper">
        <div className="section-heading"><h2 id="maths-paper">Mathematics</h2></div>
        <div className="writing-paper">
          <PixelIcon name="book" />
          <div><h3>{markovPaper.title}</h3><p>{markovPaper.excerpt}</p></div>
          <a href={markovPaper.link} className="button" target="_blank" rel="noopener noreferrer">
            Read the PDF <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </>
  );
}
