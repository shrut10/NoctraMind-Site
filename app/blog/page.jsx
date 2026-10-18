import WritingList from '@/components/WritingList';
import { posts, profile, ui } from '@/content/site';

export const metadata = { title: 'Writing', description: 'Essays by Shruthi on consciousness, neural networks, mathematics and the questions that connect minds and machines.', alternates: { canonical: '/blog' } };

export default function Writing() {
  return <><header className="page-heading"><h1>{ui.writingTitle}</h1><p>{ui.writingIntro}</p></header><div className="notebook"><div className="notebook-label"><h2>{ui.essaysLabel}</h2><span>{String(posts.length).padStart(2, '0')} {ui.entriesLabel}</span></div><WritingList posts={posts} /></div><p className="afterword">{ui.writingNote} <a href={profile.medium} className="text-link" target="_blank" rel="noopener noreferrer">{ui.mediumButton} ↗</a></p></>;
}
