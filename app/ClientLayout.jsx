"use client";

import { ThemeProvider } from "next-themes";
import NextLink from "next/link";

export default function ClientLayout({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={false}>
      <SiteShell>{children}</SiteShell>
    </ThemeProvider>
  );
}

function SiteShell({ children }) {
  return (
    <div className="relative nm-root">
      <TopNav />
      <main className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8 py-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}

function TopNav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-ink-950/80 dark:bg-black/70 border-b border-pink-500/30 shadow-[0_0_25px_rgba(236,72,153,0.5)]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">

        <NextLink
          href="/"
          className="font-semibold tracking-tight text-pink-300 drop-shadow-[0_0_12px_rgba(236,72,153,0.9)]"
        >
          NoctraMind by Jayashruthi
        </NextLink>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <NextLink href="/">Home</NextLink>
          <NextLink href="/projects">Projects</NextLink>
          <NextLink href="/blog">Blog</NextLink>
          <NextLink href="/vision">Vision</NextLink>
          <NextLink href="/contact" className="btn">Contact</NextLink>
        </nav>

        {/* Mobile placeholder (no theme toggle) */}
        <div className="sm:hidden"></div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ink-700/70 py-10 mt-16 bg-black/60 backdrop-blur">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm opacity-80">
        <p>© {new Date().getFullYear()} Jayashruthi at NoctraMind</p>
        <div className="flex gap-4">
          <a
            href="https://github.com/shrut10"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-300"
          >
            Personal GitHub
          </a>
          <a
            href="https://github.com/wphs3147-uol"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-300"
          >
            GitHub for my work at University of Leeds
          </a>
          <a
            href="https://www.linkedin.com/in/jayashruthi-r-6592101b9/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
