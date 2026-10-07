import WritingList from '@/components/WritingList';
import { posts, profile } from '@/content/site';

export const metadata = { title: 'Writing', description: 'Essays by Shruthi on consciousness, neural networks, mathematics and the questions that connect minds and machines.', alternates: { canonical: '/blog' } };

export default function Writing() {
  return <><header className="page-heading"><h1>Writing</h1><p>Essays on consciousness, neuroscience and mathematics</p></header><div className="notebook"><div className="notebook-label"><h2>Essays</h2><span>{String(posts.length).padStart(2, '0')} entries</span></div><WritingList posts={posts} /></div><p className="afterword">The essays are published on Medium, with the Markov processes paper available as a PDF <a href={profile.medium} className="text-link" target="_blank" rel="noopener noreferrer">Visit my Medium ↗</a></p></>;
}
