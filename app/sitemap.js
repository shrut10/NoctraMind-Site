export default function sitemap() {
  return ['', '/projects', '/projects/genecraft', '/projects/intentlab', '/blog', '/about', '/contact'].map(path => ({ url: `https://jayashruthi.com${path}`, lastModified: '2026-10-18', changeFrequency: 'monthly', priority: path === '' ? 1 : 0.7 }));
}
