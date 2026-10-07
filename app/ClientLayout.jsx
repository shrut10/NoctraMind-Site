'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';
import PixelIcon from '@/components/PixelIcon';
import { profile } from '@/content/site';

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Writing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);
  const active = href => href === '/' ? pathname === '/' : pathname.startsWith(href);
  function closeOnEscape(event) {
    if (event.key === 'Escape' && menuOpen) { setMenuOpen(false); menuButton.current?.focus(); }
  }
  return <div className="site-shell" onKeyDown={closeOnEscape}>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <div className="header-inner container">
        <Link className="brand" href="/" aria-label="Shruthi — home" onClick={() => setMenuOpen(false)}><PixelIcon name="sprout" /><span>shruthi</span></Link>
        <button className="menu-button button button-small" ref={menuButton} type="button" aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close ×' : 'Menu +'}</button>
        <nav id="site-navigation" aria-label="Main navigation" className={`site-nav ${menuOpen ? 'is-open' : ''}`}>{links.map(link => <Link key={link.href} href={link.href} aria-current={active(link.href) ? 'page' : undefined} onClick={() => setMenuOpen(false)}>{link.label}</Link>)}</nav>
      </div>
    </header>
    <main id="main" className="container main-content" tabIndex={-1}>{children}</main>
    <footer className="site-footer"><div className="container footer-inner"><div><Link className="footer-brand" href="/"><PixelIcon name="flower" />Jayashruthi Rajesh Babu</Link><p>© {new Date().getFullYear()} {profile.name}</p></div><nav aria-label="Social links"><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={profile.universityGithub} target="_blank" rel="noopener noreferrer">University code ↗</a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href={`mailto:${profile.email}`}>Email ↗</a></nav></div></footer>
  </div>;
}
