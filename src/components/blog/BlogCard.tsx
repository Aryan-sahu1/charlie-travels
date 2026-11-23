import Image from "next/image";
import Link from "next/link";
import { formatPostDate, readingMinutes, type BlogPost } from "@/data/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="journal-card">
      <Link
        href={`/blogs/${post.slug}`}
        className="journal-card-photo"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={`/images/${post.image}`}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 650px) 100vw, (max-width: 1050px) 50vw, 33vw"
        />
        <span>{post.category}</span>
      </Link>
      <div className="journal-card-copy">
        <div className="journal-meta">
          <time dateTime={post.date}>{formatPostDate(post.date)}</time>
          <span>{readingMinutes(post)} min read</span>
        </div>
        <h3>
          <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
        </h3>
        <p>{post.excerpt}</p>
        <Link href={`/blogs/${post.slug}`} className="journal-read">
          Read the story
          <span className="journal-read-line" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
