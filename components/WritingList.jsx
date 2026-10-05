export default function WritingList({ posts }) {
  return <ol className="writing-list">{posts.map((post, i) => <li key={post.link}>
    <span className="entry-number" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
    <div className="writing-entry"><p className="eyebrow">{post.topic} <span aria-hidden="true">/</span> {post.format}</p><h3><a href={post.link} target="_blank" rel="noopener noreferrer">{post.title}<span className="sr-only"> (opens in a new tab)</span></a></h3><p>{post.excerpt}</p></div>
    <span className="writing-arrow" aria-hidden="true">↗</span>
  </li>)}</ol>;
}
