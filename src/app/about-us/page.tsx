import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ServiceCard, TestimonialCard } from "@/components/home/ContentCards";
import AnimateIn from "@/components/ui/AnimateIn";
import BookingLink from "@/components/ui/BookingLink";
import FaqList from "@/components/ui/FaqList";
import JourneyVideo from "@/components/ui/JourneyVideo";
import OfferBanner from "@/components/ui/OfferBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import { aboutServices, aboutStats, commitments, mission, vision } from "@/data/about";
import { faqs, guides, testimonials } from "@/data/home";
import { siteUrl } from "@/lib/site";
import "@/styles/home.css";
import "@/styles/about.css";

const description =
  "Meet Charlie Travels & Cargo, your daily bus and express parcel partner from Delhi NCR to North India. Discover our experience, mission and easy WhatsApp booking.";
export const metadata: Metadata = {
  title: "About Us",
  description,
  alternates: { canonical: "/about-us" },
  openGraph: {
    title: "About Charlie Travels & Cargo",
    description,
    url: "/about-us",
    type: "website",
    images: [{ url: "/images/experience.webp", alt: "Charlie Travels parcel service" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Charlie Travels & Cargo",
    description,
    images: ["/images/experience.webp"],
  },
};
const aboutFaqs = faqs.slice(0, 3);
const reviews = [testimonials[4], testimonials[0], testimonials[1]];
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      name: "About Charlie Travels & Cargo",
      description,
      url: new URL("/about-us", siteUrl).href,
      about: { "@type": "Organization", name: "Charlie Travels & Cargo", url: siteUrl.href },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl.href },
        {
          "@type": "ListItem",
          position: 2,
          name: "About Us",
          item: new URL("/about-us", siteUrl).href,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: aboutFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function AboutPage() {
  return (
    <main className="home-page about-page" id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
      <section className="about-hero">
        <div className="site-container about-hero-grid">
          <div className="about-hero-copy">
            <nav aria-label="Breadcrumb" className="about-breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">About Us</span>
            </nav>
            <span className="section-eyebrow">THE CHARLIE STORY</span>
            <h1>
              About us.
              <br />
              <span>
                Always moving.
                <br />
                Always caring.
              </span>
            </h1>
            <p>
              Your trusted daily bus &amp; express parcel partner from Delhi NCR to North India.
            </p>
            <BookingLink>Book Now</BookingLink>
            <div className="about-hero-footnote">
              <i className="bi bi-geo-alt" aria-hidden="true" /> From Kashmere Gate. For the
              journeys that matter.
            </div>
          </div>
          <div className="about-hero-visual">
            <Image
              src="/images/gallery-1.webp"
              alt="Charlie Travels buses ready to connect Delhi with North India"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 50vw"
            />
            <div className="about-photo-label">
              <i className="bi bi-bus-front" aria-hidden="true" />
              <div>
                <span>PEOPLE. PARCELS. POSSIBILITIES.</span>
                <strong>Every day, a little closer.</strong>
              </div>
            </div>
            <span className="about-vertical-label" aria-hidden="true">
              DELHI NCR — NORTH INDIA
            </span>
          </div>
        </div>
      </section>

      <section className="home-section about-story">
        <div className="site-container">
          <AnimateIn className="about-story-grid">
            <div className="about-story-image">
              <Image
                src="/images/experience.webp"
                alt="Charlie Travels team handling a parcel beside the bus"
                width={650}
                height={650}
                sizes="(max-width: 767px) 90vw, 42vw"
              />
              <div className="about-story-caption">
                <i className="bi bi-shield-check" aria-hidden="true" />
                <span>
                  Built on trust.
                  <br />
                  <strong>Delivered with care.</strong>
                </span>
              </div>
            </div>
            <div>
              <SectionHeading
                align="left"
                eyebrow="OUR EXPERIENCE"
                title="Driven by Trust, Built on Journeys"
              />
              <p>
                With years of on-road experience, Charlie Travels &amp; Cargo has become a daily
                companion for thousands across North India.
              </p>
              <p>
                Charlie Travels is trusted for its fastest delivery and daily intercity bus service
                from Delhi NCR to North India.
              </p>
              <div className="about-stats">
                {aboutStats.map((stat) => (
                  <div key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
              <a className="about-text-link" href="#our-purpose">
                Discover what drives us <i className="bi bi-chevron-down" aria-hidden="true" />
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="home-section section-tinted about-values">
        <div className="site-container">
          <AnimateIn>
            <SectionHeading
              eyebrow="WHAT WE OFFER"
              title="What Makes Us Different"
              description="We’re not just another travel or cargo service — we’re your trusted journey partner across North India."
            />
            <p className="about-section-note">
              Here’s what sets Charlie Travels &amp; Cargo apart:
            </p>
          </AnimateIn>
          <div className="service-grid">
            {aboutServices.map((service, index) => (
              <AnimateIn key={service.title} delay={index * 70}>
                <ServiceCard service={service} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section about-how">
        <div className="site-container">
          <AnimateIn className="about-how-grid">
            <div>
              <SectionHeading
                align="left"
                eyebrow="LET’S FIND OUT"
                title="How It Works"
                description="From booking to boarding, see how easy Charlie makes travel & delivery."
              />
              <ol className="about-process">
                {guides[0].steps.map((step, index) => (
                  <li key={step}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <strong>{step}</strong>
                      {index === 0 && <p>Click. Chat. Book.</p>}
                      {index === 1 && <p>Bus or parcel options, right on WhatsApp.</p>}
                      {index === 2 && <p>Your journey begins with Charlie.</p>}
                    </div>
                  </li>
                ))}
              </ol>
              <BookingLink variant="dark">WhatsApp Now</BookingLink>
            </div>
            <JourneyVideo className="about-video" />
          </AnimateIn>
        </div>
      </section>

      <section className="home-section section-tinted">
        <div className="site-container">
          <AnimateIn>
            <SectionHeading eyebrow="TESTIMONIALS" title="Why Thousands Trust Charlie Every Day" />
          </AnimateIn>
          <div className="about-reviews">
            {reviews.map((item, index) => (
              <AnimateIn key={item.name} delay={index * 80}>
                <TestimonialCard item={item} />
              </AnimateIn>
            ))}
          </div>
          <div className="about-centered-action">
            <BookingLink>Book Now</BookingLink>
          </div>
        </div>
      </section>

      <section className="home-section about-purpose" id="our-purpose">
        <div className="site-container">
          <AnimateIn className="about-purpose-intro">
            <SectionHeading
              align="left"
              light
              eyebrow="WHY WE EXIST"
              title="What Drives Charlie Travels"
            />
            <p>
              From Kashmere Gate to every corner of the region, our purpose is driven by people, not
              just packages.
            </p>
          </AnimateIn>
          <div className="about-purpose-grid">
            {[
              {
                title: "Our Mission: India’s Fastest Bus & Parcel Delivery",
                icon: "compass",
                items: mission,
              },
              {
                title: "Our Vision: On-Time, Safe & Honest Logistics",
                icon: "binoculars",
                items: vision,
              },
            ].map((group, index) => (
              <AnimateIn key={group.title} delay={index * 100}>
                <article className="about-purpose-card">
                  <i className={`bi bi-${group.icon}`} aria-hidden="true" />
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>
                        <i className="bi bi-check2" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn className="about-brand-message">
            <span lang="hi">सबसे जल्दी, सबसे तेज़,</span>
            <p>
              Charlie Travels
              <br />
              <strong>Hai Ek Dum Great</strong>
            </p>
            <BookingLink variant="light">Book Now</BookingLink>
          </AnimateIn>
        </div>
      </section>

      <section className="home-section">
        <div className="site-container">
          <div className="about-commitments">
            {commitments.map((item, index) => (
              <AnimateIn key={item.title} delay={(index % 2) * 70}>
                <article>
                  <span className="about-commitment-icon">
                    <i className={`bi bi-${item.icon}`} aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <OfferBanner />

      <section className="home-section about-faq">
        <div className="site-container">
          <AnimateIn>
            <SectionHeading eyebrow="FREQUENTLY ASKED QUESTIONS" title="Have Any Question?" />
          </AnimateIn>
          <div className="about-faq-grid">
            <AnimateIn className="about-faq-photo">
              <Image
                src="/images/gallery-6.webp"
                alt="Individual sleeper berths inside a Charlie Travels bus"
                width={600}
                height={600}
                sizes="(max-width: 767px) 90vw, 35vw"
              />
              <div>
                <i className="bi bi-whatsapp" aria-hidden="true" />
                <span>
                  One message.
                  <br />
                  <strong>We’re here to help.</strong>
                </span>
              </div>
            </AnimateIn>
            <AnimateIn>
              <FaqList items={aboutFaqs} name="about-faq" />
              <div className="about-faq-action">
                <span>Let’s get your next journey started.</span>
                <BookingLink variant="dark">WhatsApp Now</BookingLink>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </main>
  );
}
