import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookingGuides, DeliveryPricing } from "@/components/home/ContentCards";
import AnimateIn from "@/components/ui/AnimateIn";
import BookingLink from "@/components/ui/BookingLink";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteUrl } from "@/lib/site";
import "@/styles/home.css";
import "@/styles/services.css";

const description =
  "Explore Charlie Travels & Cargo services: daily AC sleeper and seater buses from Delhi, express parcel delivery across North India, transparent pricing and WhatsApp booking.";
export const metadata: Metadata = {
  title: "Bus Travel & Parcel Delivery Services",
  description,
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Travel & Parcel Services | Charlie Travels & Cargo",
    description,
    url: "/services",
    type: "website",
    images: [{ url: "/images/experience.webp", alt: "Charlie Travels bus and parcel services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Charlie Travels & Cargo Services",
    description,
    images: ["/images/experience.webp"],
  },
};

const parcelFeatures = [
  { title: "Express parcel delivery", description: "Across North India", icon: "box-seam" },
  {
    title: "From Delhi to major cities",
    description: "Same-day & next-day options",
    icon: "geo-alt",
  },
  { title: "Easy WhatsApp booking", description: "A simple system in 3 steps", icon: "whatsapp" },
  {
    title: "Proper loading & unloading",
    description: "A careful process from start to finish",
    icon: "truck",
  },
  { title: "Tracked, handled & confirmed", description: "By our team", icon: "clipboard-check" },
  { title: "Affordable, transparent pricing", description: "By weight or box size", icon: "tag" },
];
const travelFeatures = [
  {
    title: "Daily AC sleeper/seater",
    description: "Bus service from Kashmere Gate",
    icon: "bus-front",
  },
  { title: "Timely departures", description: "Early morning & night options", icon: "clock" },
  { title: "Easy WhatsApp booking", description: "A simple booking system", icon: "whatsapp" },
  {
    title: "Serving Delhi to",
    description: "Agra, Basti, Jalandhar, Ludhiana, Haridwar & all over North India",
    icon: "map",
  },
  { title: "Special focus on", description: "Family and senior-friendly travel", icon: "people" },
  {
    title: "Neat, comfortable & safe",
    description: "An experience for all passengers",
    icon: "shield-check",
  },
];
const stats = [
  { value: "10+", label: "Years of trust", icon: "shield-check" },
  { value: "50K", label: "Satisfied Travelers", icon: "people" },
  { value: "2K", label: "Parcel Deliveries", icon: "box-seam" },
  { value: "24 × 7", label: "Real-Time Assistance", icon: "headset" },
];

function ServiceFeatures({ items }: { items: typeof parcelFeatures }) {
  return (
    <div className="services-features">
      {items.map((item, index) => (
        <AnimateIn key={item.title} delay={(index % 2) * 70}>
          <article>
            <span className="services-feature-icon">
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
  );
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      name: "Charlie Travels & Cargo Services",
      description,
      url: new URL("/services", siteUrl).href,
    },
    {
      "@type": "Service",
      name: "Parcel & Cargo Delivery Services",
      serviceType: "Express parcel delivery",
      areaServed: "North India",
      provider: { "@type": "Organization", name: "Charlie Travels & Cargo", url: siteUrl.href },
    },
    {
      "@type": "Service",
      name: "Travel Services",
      serviceType: "AC sleeper and seater bus travel",
      areaServed: "North India",
      provider: { "@type": "Organization", name: "Charlie Travels & Cargo", url: siteUrl.href },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl.href },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: new URL("/services", siteUrl).href,
        },
      ],
    },
  ],
};

export default function ServicesPage() {
  return (
    <main className="home-page services-page" id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
      <section className="services-hero">
        <div className="site-container services-hero-grid">
          <div className="services-hero-copy">
            <nav className="services-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Services</span>
            </nav>
            <span className="section-eyebrow">PEOPLE & PARCELS, CONNECTED</span>
            <h1>
              Services that
              <br />
              <span>take you further.</span>
            </h1>
            <p>Trusted travel &amp; express parcel solutions across North India.</p>
            <div className="services-hero-actions">
              <a href="#travel" className="home-button button-primary">
                <i className="bi bi-bus-front" aria-hidden="true" />
                Explore Travel
              </a>
              <a href="#cargo" className="home-button button-light">
                <i className="bi bi-box-seam" aria-hidden="true" />
                Send a Parcel
              </a>
            </div>
            <div className="services-hero-detail">
              <i className="bi bi-geo-alt" aria-hidden="true" /> From Delhi. Across North India.
            </div>
          </div>
          <div className="services-hero-photo">
            <Image
              src="/images/experience.webp"
              alt="Charlie Travels team loading parcels onto an intercity bus"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 50vw"
            />
            <div className="services-photo-caption">
              <span>TRAVEL WELL. SEND SAFELY.</span>
              <strong>One partner. Every mile.</strong>
            </div>
          </div>
        </div>
      </section>
      <div className="services-jump-bar">
        <nav className="site-container" aria-label="Service sections">
          <a href="#cargo">
            <i className="bi bi-box-seam" aria-hidden="true" />
            Parcel &amp; Cargo
          </a>
          <a href="#travel">
            <i className="bi bi-bus-front" aria-hidden="true" />
            Travel Services
          </a>
          <a href="#pricing">
            <i className="bi bi-tag" aria-hidden="true" />
            Delivery Pricing
          </a>
          <a href="#booking">
            <i className="bi bi-whatsapp" aria-hidden="true" />
            How to Book
          </a>
        </nav>
      </div>

      <section className="home-section services-cargo" id="cargo">
        <div className="site-container services-detail-grid">
          <AnimateIn className="services-detail-intro">
            <SectionHeading
              align="left"
              eyebrow="FAST & SAFE DELIVERY"
              title="Parcel & Cargo Delivery Services"
              description="Sabse Jaldi, Sabse Tez — Parcel Delivery with Trust"
            />
            <div className="services-parcel-photo">
              <Image
                src="/images/parcel.webp"
                alt="A parcel being handled beside the Charlie Travels bus"
                width={600}
                height={440}
                sizes="(max-width: 767px) 90vw, 35vw"
              />
              <span>
                <i className="bi bi-box-seam" aria-hidden="true" />
                Handled with care. Delivered with trust.
              </span>
            </div>
            <BookingLink message="Hi, I would like to book parcel or cargo delivery. Please share route availability and pricing.">
              Book Now
            </BookingLink>
          </AnimateIn>
          <ServiceFeatures items={parcelFeatures} />
        </div>
      </section>

      <section className="home-section services-travel" id="travel">
        <div className="site-container services-detail-grid">
          <AnimateIn className="services-detail-intro">
            <SectionHeading
              align="left"
              light
              eyebrow="DAILY AC SLEEPER/SEATER BUS BOOKINGS"
              title="Travel Services"
            />
            <div className="services-travel-photo">
              <Image
                src="/images/gallery-5.webp"
                alt="Comfortable reclining seats on a Charlie Travels coach"
                width={600}
                height={400}
                sizes="(max-width: 767px) 90vw, 35vw"
              />
            </div>
            <BookingLink
              variant="light"
              message="Hi, I would like to book an AC sleeper or seater bus from Delhi."
            >
              Book Your Journey
            </BookingLink>
          </AnimateIn>
          <ServiceFeatures items={travelFeatures} />
        </div>
      </section>

      <DeliveryPricing />

      <section className="home-section services-trust">
        <div className="site-container">
          <AnimateIn>
            <SectionHeading eyebrow="BEFORE YOU DO" title="Why Choose Charlie?" />
          </AnimateIn>
          <div className="services-stats">
            {stats.map((stat, index) => (
              <AnimateIn key={stat.label} delay={index * 60}>
                <i className={`bi bi-${stat.icon}`} aria-hidden="true" />
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <BookingGuides />
    </main>
  );
}
