import WritingList from '@/components/WritingList';
import { posts, profile, ui } from '@/content/site';
import StructuredData from '@/components/StructuredData';
import { pageMetadata, pageData } from '@/lib/seo';

export const metadata = pageMetadata('writing');

export default function Writing() {
  return <><StructuredData data={pageData('writing')} /><header className="page-heading"><h1>{ui.writingTitle}</h1><p>{ui.writingIntro}</p></header><div className="notebook"><div className="notebook-label"><h2>{ui.essaysLabel}</h2><span>{String(posts.length).padStart(2, '0')} {ui.entriesLabel}</span></div><WritingList posts={posts} /></div><p className="afterword">{ui.writingNote} <a href={profile.medium} className="text-link" target="_blank" rel="noopener noreferrer">{ui.mediumButton} ↗</a></p></>;
}
