import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AnimateIn from "@/components/ui/AnimateIn";
import BookingLink from "@/components/ui/BookingLink";
import BlogCard from "@/components/blog/BlogCard";
import ArticleTools from "@/components/blog/ArticleTools";
import { blogPosts, getPost, formatPostDate, readingMinutes } from "@/data/blog";
import { siteUrl } from "@/lib/site";
import "@/styles/home.css";
import "@/styles/blog.css";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) notFound();
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blogs/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blogs/${post.slug}`,
      type: "article",
      publishedTime: `${post.date}T00:00:00+05:30`,
      authors: ["Charlie Travels & Cargo"],
      locale: "en_IN",
      siteName: "Charlie Travels & Cargo",
      images: [{ url: `/images/${post.image}`, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`/images/${post.image}`],
    },
  };
}
export default async function BlogDetailPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const url = new URL(`/blogs/${post.slug}`, siteUrl).href;
  const related = blogPosts
    .filter((item) => item.slug !== post.slug)
    .sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category))
    .slice(0, 3);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        datePublished: `${post.date}T00:00:00+05:30`,
        image: new URL(`/images/${post.image}`, siteUrl).href,
        mainEntityOfPage: url,
        articleSection: post.category,
        author: { "@type": "Organization", name: "Charlie Travels & Cargo", url: siteUrl.href },
        publisher: { "@type": "Organization", name: "Charlie Travels & Cargo", url: siteUrl.href },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl.href },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blogs",
            item: new URL("/blogs", siteUrl).href,
          },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  };
  return (
    <main id="main-content" className="home-page journal-page journal-detail">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
      <header className="journal-article-header site-container">
        <nav className="journal-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/blogs">Blogs</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{post.category}</span>
        </nav>
        <AnimateIn>
          <span className="journal-category">{post.category}</span>
          <h1>{post.title}</h1>
          <p className="journal-article-deck">{post.excerpt}</p>
          <div className="journal-article-byline">
            <div className="journal-author">
              <span>CT</span>
              <div>
                <strong>Charlie Travels &amp; Cargo</strong>
                <small>Travel &amp; parcel guides</small>
              </div>
            </div>
            <div className="journal-meta">
              <time dateTime={post.date}>{formatPostDate(post.date)}</time>
              <span>
                <i className="bi bi-clock" aria-hidden="true" /> {readingMinutes(post)} min read
              </span>
            </div>
          </div>
        </AnimateIn>
      </header>
      <figure className="journal-cover site-container">
        <div>
          <Image
            src={`/images/${post.image}`}
            alt={post.imageAlt}
            fill
            priority
            sizes="(max-width: 767px) 100vw, 1320px"
          />
        </div>
        <figcaption>{post.imageAlt}. A glimpse of the Charlie Travels experience.</figcaption>
      </figure>
      <div className="site-container journal-article-layout">
        <aside className="journal-sidebar">
          <div className="journal-sidebar-sticky">
            <nav aria-label="In this article">
              <span className="section-eyebrow">IN THIS STORY</span>
              <ol>
                {post.sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`}>{section.title}</a>
                  </li>
                ))}
              </ol>
            </nav>
            <div className="journal-sidebar-help">
              <i className="bi bi-chat-dots" aria-hidden="true" />
              <h2>A question of your own?</h2>
              <p>Our team is a message away.</p>
              <BookingLink>Let’s talk</BookingLink>
            </div>
          </div>
        </aside>
        <article id="article-body" className="journal-article-body">
          <div className="journal-takeaway">
            <span>
              <i className="bi bi-lightbulb" aria-hidden="true" /> THE QUICK TAKE
            </span>
            <p>{post.takeaway}</p>
          </div>
          {post.sections.map((section) => (
            <section id={section.id} key={section.id}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.checklist && (
                <div className="journal-checklist">
                  <h3>Your handy checklist</h3>
                  <ul>
                    {section.checklist.map((item) => (
                      <li key={item}>
                        <i className="bi bi-check2-circle" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          ))}
          <div className="journal-article-footer">
            <span className="journal-category">{post.category}</span>
            <ArticleTools title={post.title} url={url} />
          </div>
          <div className="journal-author-box">
            <span className="journal-author-monogram">CT</span>
            <div>
              <span className="section-eyebrow">WRITTEN BY</span>
              <h2>Charlie Travels &amp; Cargo</h2>
              <p>
                Practical advice from your Delhi bus travel and parcel team. Need details for your
                journey? We’ll help you check the available options.
              </p>
              <Link href="/about-us">Meet the team</Link>
            </div>
          </div>
          <Link href="/blogs" className="journal-back">
            Browse all stories
          </Link>
        </article>
      </div>
      <section className="home-section journal-related">
        <div className="site-container">
          <AnimateIn className="journal-related-heading">
            <div>
              <span className="section-eyebrow">KEEP EXPLORING</span>
              <h2>More for the road ahead.</h2>
            </div>
            <Link href="/blogs">View all stories</Link>
          </AnimateIn>
          <AnimateIn className="journal-grid" stagger>
            {related.map((item) => (
              <BlogCard post={item} key={item.slug} />
            ))}
          </AnimateIn>
        </div>
      </section>
      <section className="journal-cta">
        <div className="site-container journal-cta-inner">
          <div>
            <span className="section-eyebrow">READY WHEN YOU ARE</span>
            <h2>Good advice. An even better journey.</h2>
            <p>Talk to us about bus bookings and parcel delivery from Delhi.</p>
          </div>
          <BookingLink>Plan with our team</BookingLink>
        </div>
      </section>
    </main>
  );
}
