import { profile, intentlab, genecraft, projects } from '@/content/site';
import { search } from '@/content/search';

export const personId = `${search.url}/#person`;
const websiteId = `${search.url}/#website`;
const projectId = key => `${search.url}${search.pages[key].path}#software`;

export function pageMetadata(key) {
  const page = search.pages[key];
  const image = {
    url: page.image || '/social-card.png?v=identity-20261018',
    width: page.imageWidth || 1200,
    height: page.imageHeight || 630,
    alt: page.imageAlt || 'Jayashruthi Rajesh Babu (Shruthi / Jaya) — BCI, neuroscience and agentic AI.',
  };
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: page.path },
    openGraph: { type: 'website', locale: 'en_GB', siteName: profile.name, title: page.title, description: page.description, url: `${search.url}${page.path}`, images: [image] },
    twitter: { card: 'summary_large_image', title: page.title, description: page.description, images: [image] },
  };
}

export function identityData() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person', '@id': personId,
        name: profile.name, alternateName: profile.alternateNames,
        url: `${search.url}/about`, description: search.personDescription,
        sameAs: [profile.github, profile.universityGithub, profile.linkedin, profile.medium],
        jobTitle: 'Data Science Student',
        affiliation: { '@type': 'CollegeOrUniversity', name: 'University of Leeds' },
        knowsAbout: search.topics,
      },
      {
        '@type': 'WebSite', '@id': websiteId,
        url: `${search.url}/`, name: profile.name,
        alternateName: ['Shruthi Rajesh Babu', 'Jayashruthi', 'Shruthi', 'Jaya'],
        description: search.pages.home.description,
        inLanguage: 'en-GB', publisher: { '@id': personId },
      },
    ],
  };
}

function softwareData(key) {
  const project = key === 'intentlab' ? intentlab : genecraft;
  return {
    '@type': 'SoftwareSourceCode', '@id': projectId(key),
    name: project.title, url: `${search.url}${search.pages[key].path}`,
    description: search.pages[key].description,
    author: { '@id': personId }, codeRepository: project.github,
    image: `${search.url}${project.image}`,
    mainEntityOfPage: { '@id': `${search.url}${search.pages[key].path}#webpage` },
    programmingLanguage: key === 'intentlab' ? ['Python', 'JavaScript'] : ['Java', 'Python'],
    keywords: key === 'intentlab' ? ['BCI', 'EEG', 'Motor imagery', 'Machine learning'] : ['Agentic AI', 'AI agents', 'Minecraft', 'Persistent memory'],
    ...(key === 'intentlab' ? { citation: intentlab.recognitionUrl } : {}),
  };
}

export function pageData(key) {
  const page = search.pages[key];
  const url = `${search.url}${page.path}`;
  const type = key === 'about' ? ['AboutPage', 'ProfilePage'] : ['projects', 'writing'].includes(key) ? 'CollectionPage' : key === 'contact' ? 'ContactPage' : 'WebPage';
  const entities = ['intentlab', 'genecraft'];
  const data = {
    '@type': type, '@id': `${url}#webpage`, url,
    name: page.title, description: page.description, inLanguage: 'en-GB',
    isPartOf: { '@id': websiteId }, author: { '@id': personId },
    about: { '@id': personId },
    ...(['home', 'about'].includes(key) ? { mainEntity: { '@id': personId } } : {}),
    ...(['intentlab', 'genecraft'].includes(key) ? { mainEntity: { '@id': projectId(key) } } : {}),
  };
  const graph = [data];
  if (['home', 'projects'].includes(key)) {
    data.mentions = entities.map(project => ({ '@id': projectId(project) }));
    graph.push(...entities.map(softwareData));
  } else if (entities.includes(key)) {
    graph.push(softwareData(key));
  }
  if (key === 'projects') {
    data.mainEntity = {
      '@type': 'ItemList', itemListElement: [
        ...entities.map(project => ({ name: search.pages[project].title.split(' | ')[0], url: `${search.url}${search.pages[project].path}` })),
        ...projects.map(project => ({ name: project.title, url: project.link })),
      ].map((project, index) => ({ '@type': 'ListItem', position: index + 1, ...project })),
    };
  }
  if (key !== 'home') {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${search.url}/` },
        ...(entities.includes(key) ? [{ '@type': 'ListItem', position: 2, name: 'Projects', item: `${search.url}/projects` }] : []),
        { '@type': 'ListItem', position: entities.includes(key) ? 3 : 2, name: entities.includes(key) ? key === 'intentlab' ? intentlab.title : genecraft.title : key === 'writing' ? 'Writing' : key.charAt(0).toUpperCase() + key.slice(1), item: url },
      ],
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}
