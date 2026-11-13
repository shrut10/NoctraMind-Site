import Image from 'next/image';
import styles from './WritingList.module.css';

const dateFormat = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

export function EssayDate({ published }) {
  return <time dateTime={published}>{dateFormat.format(new Date(published))}</time>;
}

export function WritingCard({ post, featured = false }) {
  const Heading = featured ? 'h2' : 'h3';
  const { image } = post;

  return (
    <article className={featured ? `${styles.card} ${styles.featured}` : styles.card}>
      {image && (
        <figure className={styles.figure}>
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt}
            unoptimized
            loading={featured ? 'eager' : 'lazy'}
          />
          <figcaption>{image.credit}</figcaption>
        </figure>
      )}
      <div className={styles.copy}>
        <p className={styles.meta}>
          <span>{post.topic}</span>
          <EssayDate published={post.published} />
        </p>
        <Heading className={styles.title}>
          <a href={post.link} target="_blank" rel="noopener noreferrer">
            {post.title}
            <span className="sr-only"> (Medium, opens in a new tab)</span>
          </a>
        </Heading>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <span className={styles.read} aria-hidden="true">Read on Medium ↗</span>
      </div>
    </article>
  );
}

export default function WritingList({ posts, compact = false }) {
  return (
    <ul className={compact ? `${styles.grid} ${styles.compact}` : styles.grid} role="list">
      {posts.map(post => (
        <li key={post.link}><WritingCard post={post} /></li>
      ))}
    </ul>
  );
}
