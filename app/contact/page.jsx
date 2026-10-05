import PixelIcon from '@/components/PixelIcon';
import { profile, contact } from '@/content/site';

export const metadata = { title: 'Contact', description: 'Get in touch with Shruthi about AI and ML opportunities, projects or ideas.', alternates: { canonical: '/contact' } };

export default function Contact() {
  const links = [{ title: 'GitHub', text: 'My personal projects', href: profile.github }, { title: 'University code', text: 'Coursework and group projects', href: profile.universityGithub }, { title: 'LinkedIn', text: 'Work and opportunities', href: profile.linkedin }];
  return <><header className="page-heading"><p className="eyebrow">The mailbox</p><h1>{contact.title}</h1><p>{contact.intro}</p></header><section className="letter"><div className="letter-top"><span>To: Shruthi</span><span className="postage" aria-hidden="true"><PixelIcon name="flower" /></span></div><p className="lead">{contact.note}</p><a href={`mailto:${profile.email}`} className="email-address">{profile.email}</a><div><a href={`mailto:${profile.email}`} className="button button-green">Write me an email <PixelIcon name="mail" /></a></div></section><ul className="contact-links">{links.map(link => <li key={link.href}><a href={link.href} target="_blank" rel="noopener noreferrer"><div><h2>{link.title}</h2><p>{link.text}</p></div><span aria-hidden="true">↗</span></a></li>)}</ul></>;
}
