import WritingList from '@/components/WritingList';
import { posts, profile } from '@/content/site';

export const metadata = { title: 'Writing', description: 'Essays by Shruthi on consciousness, neural networks, mathematics and the questions that connect minds and machines.', alternates: { canonical: '/blog' } };

export default function Writing() {
  return <><header className="page-heading"><p className="eyebrow">The notebook</p><h1>Writing</h1><p>Brains, machines, maths and the occasional existential detour.</p></header><div className="notebook"><div className="notebook-label"><h2>Collected thoughts</h2><span>{String(posts.length).padStart(2, '0')} entries</span></div><WritingList posts={posts} /></div><p className="afterword">Most essays live on Medium. The Markov processes essay opens as a PDF. <a href={profile.medium} className="text-link" target="_blank" rel="noopener noreferrer">Visit my Medium ↗</a></p></>;
}
