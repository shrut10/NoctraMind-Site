import Link from 'next/link';
import PixelIcon from '@/components/PixelIcon';
import { about, profile } from '@/content/site';

export const metadata = { title: 'About', description: 'Meet Jayashruthi Rajesh Babu, a data science student at Leeds interested in AI, machine learning and human minds.', alternates: { canonical: '/about' } };

export default function About() {
  return <><header className="page-heading"><h1>{about.title}</h1></header><div className="about-grid"><div className="about-story prose"><p className="lead">{about.intro}</p>{about.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<div className="button-row"><Link className="button button-green" href="/projects">View my projects <PixelIcon name="arrow" /></Link><Link href="/contact" className="text-link">Contact ↗</Link></div></div><aside className="field-notes"><div className="note-pin" aria-hidden="true" /><PixelIcon name="sprout" /><h2>{about.currentHeading}</h2><ul>{about.current.map(item => <li key={item}>{item}</li>)}</ul><p className="small-copy">{profile.degree}</p></aside></div></>;
}
