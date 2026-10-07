import Link from 'next/link';
import PixelIcon from '@/components/PixelIcon';

export default function NotFound() {
  return <section className="not-found"><PixelIcon name="sprout" /><p className="eyebrow">404</p><h1>Page not found</h1><p>Use the navigation to find a project or return to the homepage</p><Link href="/" className="button button-green">Back home →</Link></section>;
}
