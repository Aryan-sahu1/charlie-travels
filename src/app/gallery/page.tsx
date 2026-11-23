import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Gallery from "@/components/home/Gallery";
import { TestimonialCard } from "@/components/home/ContentCards";
import AnimateIn from "@/components/ui/AnimateIn";
import BookingLink from "@/components/ui/BookingLink";
import JourneyVideo, { VideoPlaylist } from "@/components/ui/JourneyVideo";
import SectionHeading from "@/components/ui/SectionHeading";
import { gallery, testimonials } from "@/data/home";
import { siteUrl } from "@/lib/site";
import "@/styles/home.css";
import "@/styles/gallery.css";

const description =
  "Explore Charlie Travels & Cargo photos, bus interiors, parcel handling, customer stories and travel videos from Delhi NCR to North India.";
export const metadata: Metadata = {
  title: "Gallery & Customer Testimonials",
  description,
  alternates: { canonical: "/gallery" },
  openGraph: {
    locale: "en_IN",
    siteName: "Charlie Travels & Cargo",
    title: "Gallery & Stories | Charlie Travels & Cargo",
    description,
    url: "/gallery",
    type: "website",
    images: [{ url: "/images/family.webp", alt: "Travelers on a Charlie Travels coach" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Charlie Travels Gallery & Customer Stories",
    description,
    images: ["/images/family.webp"],
  },
};

const photos = [
  {
    image: "experience.webp",
    alt: "Charlie Travels team carefully loading parcels onto a bus",
    caption: "Every parcel, handled with care",
  },
  {
    image: "family.webp",
    alt: "Families traveling together inside a Charlie Travels bus",
    caption: "Journeys shared, memories made",
  },
  {
    image: "seating.webp",
    alt: "Reclining seater accommodation inside the coach",
    caption: "Settle in. Travel comfortably.",
  },
  ...gallery.filter((item) => item.image !== "experience.webp"),
];
const videos = [
  {
    src: "/images/gallery-clip-1.mp4",
    title: "A closer look at our coaches",
    poster: "/images/gallery-1.webp",
  },
  {
    src: "/images/gallery-clip-2.mp4",
    title: "On the road with Charlie",
    poster: "/images/gallery-4.webp",
  },
  {
    src: "/images/gallery-clip-3.mp4",
    title: "Travel, parcels & everyday journeys",
    poster: "/images/experience.webp",
  },
];
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      name: "Charlie Travels Gallery & Testimonials",
      description,
      url: new URL("/gallery", siteUrl).href,
      mainEntity: {
        "@type": "ImageGallery",
        name: "Charlie Travels photo gallery",
        image: photos.map((photo) => new URL(`/images/${photo.image}`, siteUrl).href),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl.href },
        {
          "@type": "ListItem",
          position: 2,
          name: "Gallery",
          item: new URL("/gallery", siteUrl).href,
        },
      ],
    },
  ],
};

export default function GalleryPage() {
  return (
    <main className="home-page gallery-page" id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
      <section className="gallery-page-hero">
        <div className="site-container gallery-hero-grid">
          <AnimateIn className="gallery-hero-copy">
            <nav className="gallery-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Gallery</span>
            </nav>
            <span className="section-eyebrow">THE JOURNEY, IN PICTURES</span>
            <h1>
              Our gallery.
              <br />
              <span>Your kind of journey.</span>
            </h1>
            <p>
              Your trusted daily bus &amp; express parcel partner from Delhi NCR to North India.
            </p>
            <div className="gallery-hero-actions">
              <a href="#photos" className="home-button button-primary">
                <i className="bi bi-images" aria-hidden="true" />
                Explore Photos
              </a>
              <a href="#films" className="home-button button-light">
                <i className="bi bi-play-circle" aria-hidden="true" />
                Watch Our Films
              </a>
            </div>
            <span className="gallery-hero-note">People. Places. Parcels. All connected.</span>
          </AnimateIn>
          <div className="gallery-hero-collage">
            <div className="gallery-hero-main-photo">
              <Image
                src="/images/family.webp"
                alt="Families enjoying a shared bus journey"
                fill
                priority
                sizes="(max-width: 767px) 90vw, 35vw"
              />
              <span>Moments that move us.</span>
            </div>
            <div className="gallery-hero-small-photo">
              <Image
                src="/images/gallery-1.webp"
                alt="Charlie Travels coaches ready for departure"
                fill
                sizes="(max-width: 767px) 45vw, 18vw"
              />
            </div>
            <div className="gallery-hero-caption">
              <i className="bi bi-camera" aria-hidden="true" />
              <span>
                A window into
                <br />
                <strong>life with Charlie.</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section gallery-photos-section" id="photos">
        <div className="site-container">
          <AnimateIn>
            <SectionHeading
              align="left"
              eyebrow="LIFE ON THE MOVE"
              title="Every journey has a story."
              description="Our coaches, our travelers and the care that goes into every parcel."
            />
          </AnimateIn>
          <Gallery items={photos} />
        </div>
      </section>

      <section className="customer-film gallery-feature-film">
        <div className="site-container film-grid">
          <AnimateIn>
            <SectionHeading
              align="left"
              light
              eyebrow="TESTIMONIALS"
              title="What Our Customers Say About Us"
              description="From daily travelers to small business owners — here’s what people love about Charlie Travels & Cargo."
            />
            <BookingLink>Book Now</BookingLink>
          </AnimateIn>
          <AnimateIn delay={80}>
            <JourneyVideo
              src="/images/gallery-feature.mp4"
              poster="/images/gallery-1.webp"
              title="Charlie Travels bus journey film"
            />
          </AnimateIn>
        </div>
      </section>

      <section className="home-section gallery-customer-stories">
        <div className="site-container">
          <AnimateIn>
            <SectionHeading eyebrow="TESTIMONIALS" title="What Our Customers Say About Us" />
          </AnimateIn>
          <div
            className="testimonials-track"
            tabIndex={0}
            role="region"
            aria-label="Customer testimonials"
          >
            {testimonials.map((item) => (
              <TestimonialCard key={item.name} item={item} />
            ))}
          </div>
          <p className="swipe-hint">Scroll to explore more customer stories</p>
        </div>
      </section>

      <section className="home-section section-tinted gallery-films-section" id="films">
        <div className="site-container">
          <AnimateIn>
            <SectionHeading
              align="left"
              eyebrow="CHARLIE TRAVELS · ON FILM"
              title="Press play. Come along."
              description="Three little windows into our travels, coaches and everyday journeys."
            />
          </AnimateIn>
          <VideoPlaylist videos={videos} />
        </div>
      </section>
    </main>
  );
}
