import Link from 'next/link';
import PixelIcon from '@/components/PixelIcon';
import { about, profile, ui } from '@/content/site';
import StructuredData from '@/components/StructuredData';
import { pageMetadata, pageData } from '@/lib/seo';

export const metadata = pageMetadata('about');

export default function About() {
  return <><StructuredData data={pageData('about')} /><header className="page-heading"><h1>{about.title}</h1></header><div className="about-grid"><div className="about-story prose"><p className="lead">{about.intro}</p>{about.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<div className="button-row"><Link className="button button-green" href="/projects">{ui.projectsButton} <PixelIcon name="arrow" /></Link><Link href="/contact" className="text-link">{ui.contactButton} ↗</Link></div></div><aside className="field-notes"><div className="note-pin" aria-hidden="true" /><PixelIcon name="sprout" /><h2>{about.currentHeading}</h2><ul>{about.current.map(item => <li key={item}>{item}</li>)}</ul><p className="small-copy">{profile.degree}</p></aside></div></>;
}
