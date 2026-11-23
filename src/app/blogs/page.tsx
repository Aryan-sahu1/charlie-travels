import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";
import BookingLink from "@/components/ui/BookingLink";
import BlogExplorer from "@/components/blog/BlogExplorer";
import { blogPosts, formatPostDate, readingMinutes } from "@/data/blog";
import { siteUrl } from "@/lib/site";
import "@/styles/home.css";
import "@/styles/blog.css";

const title = "Travel Stories, Bus Booking & Parcel Guides";
const description =
  "Practical travel tips, sleeper and seater bus guides, parcel packing advice and WhatsApp booking help from Charlie Travels & Cargo, Delhi.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blogs" },
  openGraph: {
    title,
    description,
    url: "/blogs",
    type: "website",
    locale: "en_IN",
    siteName: "Charlie Travels & Cargo",
    images: [{ url: "/images/gallery-6.webp", alt: "Charlie Travels sleeper coach" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/gallery-6.webp"] },
};
const featured = blogPosts[0];
export default function BlogsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "The Charlie Journal",
    description,
    url: new URL("/blogs", siteUrl).href,
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: new URL(`/blogs/${post.slug}`, siteUrl).href,
      datePublished: post.date,
      image: new URL(`/images/${post.image}`, siteUrl).href,
      author: { "@type": "Organization", name: "Charlie Travels & Cargo", url: siteUrl.href },
    })),
  };
  return (
    <main id="main-content" className="home-page journal-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
      <section className="journal-hero">
        <div className="site-container">
          <nav className="journal-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Blogs</span>
          </nav>
          <AnimateIn className="journal-hero-heading">
            <div>
              <span className="section-eyebrow">THE CHARLIE JOURNAL</span>
              <h1>
                Good reads.
                <br />
                <span>Better journeys.</span>
              </h1>
            </div>
            <div className="journal-hero-note">
              <span className="journal-note-icon">
                <i className="bi bi-journal-text" aria-hidden="true" />
              </span>
              <p>
                A little inspiration. A lot of practical advice.
                <br />
                For the journeys you take and the parcels you send.
              </p>
              <a href="#stories">Explore the journal</a>
            </div>
          </AnimateIn>
          <AnimateIn className="journal-feature">
            <Link
              className="journal-feature-image"
              href={`/blogs/${featured.slug}`}
              aria-label={featured.title}
            >
              <Image
                src={`/images/${featured.image}`}
                alt={featured.imageAlt}
                fill
                priority
                sizes="(max-width: 767px) 100vw, 60vw"
              />
              <span className="journal-feature-label">
                <i className="bi bi-bookmark-star" aria-hidden="true" /> EDITOR’S PICK
              </span>
              <span className="journal-image-caption">A little more comfort. Every mile.</span>
            </Link>
            <div className="journal-feature-copy">
              <span className="journal-category">{featured.category}</span>
              <div className="journal-meta">
                <time dateTime={featured.date}>{formatPostDate(featured.date)}</time>
                <span>{readingMinutes(featured)} min read</span>
              </div>
              <h2>
                <Link href={`/blogs/${featured.slug}`}>{featured.title}</Link>
              </h2>
              <p>{featured.excerpt}</p>
              <Link href={`/blogs/${featured.slug}`} className="home-button button-primary">
                Read the story
              </Link>
              <div className="journal-author">
                <span>CT</span>
                <div>
                  <strong>Charlie Travels &amp; Cargo</strong>
                  <small>From our team to your next trip</small>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
      <section className="home-section journal-stories">
        <div className="site-container">
          <BlogExplorer posts={blogPosts} />
        </div>
      </section>
      <section className="journal-cta">
        <AnimateIn className="site-container journal-cta-inner">
          <div>
            <span className="section-eyebrow">FROM READING TO THE ROAD</span>
            <h2>Your next chapter starts here.</h2>
            <p>A seat for you. A safe journey for your parcel. Let’s get it sorted.</p>
          </div>
          <BookingLink>Plan with our team</BookingLink>
        </AnimateIn>
      </section>
    </main>
  );
}
