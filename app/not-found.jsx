import Link from 'next/link';
import PixelIcon from '@/components/PixelIcon';

export default function NotFound() {
  return <section className="not-found"><PixelIcon name="sprout" /><p className="eyebrow">404 · A small wrong turn</p><h1>Nothing planted here yet.</h1><p>This page doesn’t exist. Let’s get you back to the workbench.</p><Link href="/" className="button button-green">Back home →</Link></section>;
}
