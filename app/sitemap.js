import { search } from '@/content/search';

export default function sitemap() {
  return Object.values(search.pages).map(page => ({ url: `${search.url}${page.path}`, lastModified: search.updated, changeFrequency: 'monthly', priority: page.path === '/' ? 1 : 0.7 }));
}
