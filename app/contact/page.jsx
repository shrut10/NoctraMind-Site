import PixelIcon from '@/components/PixelIcon';
import { profile, contact, ui } from '@/content/site';

export const metadata = { title: 'Contact', description: 'Get in touch with Shruthi about AI and ML opportunities, projects or ideas.', alternates: { canonical: '/contact' } };

export default function Contact() {
  const links = ui.contactLinks.map(link => ({ ...link, href: profile[link.key] }));
  return <><header className="page-heading"><h1>{contact.title}</h1><p>{contact.intro}</p></header><section className="letter"><div className="letter-top"><span>{ui.letterTo}</span><span className="postage" aria-hidden="true"><PixelIcon name="flower" /></span></div><p className="lead">{contact.note}</p><a href={`mailto:${profile.email}`} className="email-address">{profile.email}</a><div><a href={`mailto:${profile.email}`} className="button button-green">{ui.emailButton} <PixelIcon name="mail" /></a></div></section><ul className="contact-links">{links.map(link => <li key={link.href}><a href={link.href} target="_blank" rel="noopener noreferrer"><div><h2>{link.title}</h2><p>{link.text}</p></div><span aria-hidden="true">↗</span></a></li>)}</ul></>;
}
