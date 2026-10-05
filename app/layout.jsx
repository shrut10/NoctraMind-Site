import '@fontsource/pixelify-sans/latin-400.css';
import '@fontsource/pixelify-sans/latin-600.css';
import '@fontsource/dm-sans/latin-400.css';
import '@fontsource/dm-sans/latin-500.css';
import '@fontsource/dm-sans/latin-600.css';
import '@fontsource/dm-sans/latin-700.css';
import './styles/globals.css';
import ClientLayout from './ClientLayout';

export const metadata = {
  metadataBase: new URL('https://jayashruthi.com'),
  title: { default: 'Shruthi | AI, ML & things I’m curious about', template: '%s | Shruthi' },
  description: 'Jayashruthi Rajesh Babu — data science student at Leeds, building AI and ML projects and writing about brains, minds and machines.',
  authors: [{ name: 'Jayashruthi Rajesh Babu' }],
  creator: 'Jayashruthi Rajesh Babu',
  openGraph: { type: 'website', locale: 'en_GB', siteName: 'Shruthi’s portfolio', images: [{ url: '/social-card.png', width: 1200, height: 630, alt: 'Shruthi — AI, ML and things I’m curious about' }] },
  twitter: { card: 'summary_large_image', images: ['/social-card.png'] },
};

export default function RootLayout({ children }) {
  return <html lang="en-GB"><body><ClientLayout>{children}</ClientLayout></body></html>;
}
