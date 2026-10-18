import '@fontsource/pixelify-sans/latin-400.css';
import '@fontsource/pixelify-sans/latin-600.css';
import '@fontsource/dm-sans/latin-400.css';
import '@fontsource/dm-sans/latin-500.css';
import '@fontsource/dm-sans/latin-600.css';
import '@fontsource/dm-sans/latin-700.css';
import './styles/globals.css';
import ClientLayout from './ClientLayout';
import StructuredData from '@/components/StructuredData';
import { identityData, pageMetadata } from '@/lib/seo';
import { profile } from '@/content/site';
import { search } from '@/content/search';

export const metadata = {
  ...pageMetadata('home'),
  metadataBase: new URL(search.url),
  title: { default: search.pages.home.title, template: `%s | ${profile.name}` },
  authors: [{ name: profile.name, url: `${search.url}/about` }],
  creator: profile.name,
  verification: { google: search.googleVerification },
  category: 'Neurotechnology and artificial intelligence',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
};

export default function RootLayout({ children }) {
  return <html lang="en-GB"><body><StructuredData data={identityData()} /><ClientLayout>{children}</ClientLayout></body></html>;
}
