import type { Metadata } from "next";
import Image from "next/image";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionHeading from "@/components/ui/SectionHeading";
import BookingLink from "@/components/ui/BookingLink";
import InquiryForm from "@/components/home/InquiryForm";
import RouteExplorer from "@/components/home/RouteExplorer";
import Gallery from "@/components/home/Gallery";
import FaqList from "@/components/ui/FaqList";
import JourneyVideo from "@/components/ui/JourneyVideo";
import OfferBanner from "@/components/ui/OfferBanner";
import {
  ServiceCard,
  BookingGuides,
  TestimonialCard,
  DeliveryPricing,
} from "@/components/home/ContentCards";
import { faqs, services, testimonials } from "@/data/home";
import "@/styles/home.css";

const title = "Charlie Travels & Cargo | Delhi Bus Travel & Parcel Delivery";
const description =
  "Book AC sleeper and seater buses from Delhi to North India. Explore routes, parcel delivery prices and easy WhatsApp booking with Charlie Travels & Cargo.";
export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_IN",
    siteName: "Charlie Travels & Cargo",
    images: [{ url: "/images/gallery-1.webp", alt: "Charlie Travels buses" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/gallery-1.webp"] },
};
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TravelAgency",
      name: "Charlie Travels & Cargo",
      description,
      telephone: "+91-9599412941",
      email: "Charlietravels1@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "37, Gate no. 5 Mori Gate",
        addressLocality: "Delhi",
        addressCountry: "IN",
      },
      areaServed: "North India",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};
export default function Home() {
  return (
    <main className="home-page home-front" id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <section className="home-hero" aria-labelledby="hero-heading">
        <Image
          src="/images/gallery-1.webp"
          alt="Charlie Travels buses ready for intercity journeys"
          fill
          priority
          sizes="100vw"
          className="hero-photo"
        />
        <div className="hero-shade" />
        <div className="site-container hero-content">
          <div className="hero-kicker">
            <span /> Daily bus service from Kashmere Gate
          </div>
          <h1 id="hero-heading">
            Your next journey.
            <br />
            <span>Our everyday promise.</span>
          </h1>
          <p className="hero-subtitle">
            Your trusted partner for travel &amp; express parcel delivery across North India.
          </p>
          <p className="hero-description">
            Travel with comfort or send parcels safely — Charlie Travels &amp; Cargo makes it fast,
            reliable, and affordable. Book via WhatsApp today.
          </p>
          <div className="hero-actions">
            <BookingLink message="Hi, I would like to book a bus seat.">
              Book via WhatsApp in 10 Seconds
            </BookingLink>
            <BookingLink variant="light" message="Hi, I would like to send a parcel.">
              Send Parcel Instantly
            </BookingLink>
          </div>
          <div className="hero-trust">
            <span>
              <i className="bi bi-snow" aria-hidden="true" /> AC sleeper &amp; seater
            </span>
            <span>
              <i className="bi bi-box-seam" aria-hidden="true" /> Safe parcel delivery
            </span>
            <span>
              <i className="bi bi-whatsapp" aria-hidden="true" /> One-message booking
            </span>
          </div>
          <aside className="hero-journey-card" aria-label="Daily travel and parcel service">
            <span className="hero-card-eyebrow">
              <i className="bi bi-bus-front" aria-hidden="true" /> YOUR EVERYDAY CONNECTION
            </span>
            <div className="hero-card-route">
              <strong>Delhi</strong>
              <span className="hero-card-track" aria-hidden="true">
                <i className="bi bi-bus-front" />
              </span>
              <strong>North India</strong>
            </div>
            <div className="hero-card-footer">
              <span>
                <i className="bi bi-snow" aria-hidden="true" /> Travel in comfort
              </span>
              <span>
                <i className="bi bi-box-seam" aria-hidden="true" /> Send with care
              </span>
            </div>
          </aside>
        </div>
      </section>
      <div className="site-container inquiry-wrap">
        <InquiryForm />
      </div>
      <div className="home-promise-strip site-container">
        <span>In just one click, book your bus and parcel.</span>
        <span>
          Delhi <span aria-hidden="true">/</span> North India <span aria-hidden="true">/</span>{" "}
          Every day
        </span>
      </div>
      <section className="home-section">
        <div className="site-container">
          <AnimateIn>
            <SectionHeading
              eyebrow="WHAT WE OFFER"
              title="Top Values for You"
              description="From a comfortable seat to a carefully handled parcel — the little things make all the difference."
            />
          </AnimateIn>
          <AnimateIn className="service-grid" stagger>
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </AnimateIn>
        </div>
      </section>
      <section className="home-section section-tinted" id="routes">
        <div className="site-container">
          <AnimateIn>
            <SectionHeading
              eyebrow="TOP DESTINATIONS"
              title="Our Popular Bus Routes"
              description="Our popular bus routes connect Delhi with the places and people that matter to you."
            />
          </AnimateIn>
          <RouteExplorer />
        </div>
      </section>
      <section className="home-section experience-section">
        <AnimateIn className="site-container experience-grid" stagger>
          <div className="experience-visual">
            <Image
              src="/images/experience.webp"
              alt="Charlie Travels team carefully loading a parcel onto a bus"
              width={640}
              height={740}
              sizes="(max-width: 767px) 90vw, 45vw"
            />
            <div className="experience-stamp">
              <strong>10+</strong>
              <span>
                YEARS ON
                <br />
                THE ROAD
              </span>
            </div>
          </div>
          <div className="experience-copy">
            <AnimateIn>
              <SectionHeading
                align="left"
                eyebrow="OUR EXPERIENCE"
                title="Driven by trust. Built on journeys."
              />
            </AnimateIn>
            <p>
              With years of on-road experience, Charlie Travels &amp; Cargo has become a daily
              companion for thousands across North India.
            </p>
            <p>
              We don’t just run buses — we deliver comfort, reliability, and real peace of mind with
              every trip and parcel.
            </p>
            <AnimateIn className="home-stats" stagger>
              {[
                ["10+", "Years of Service"],
                ["50k", "Satisfied Travelers"],
                ["20K", "Parcel Deliveries"],
              ].map(([value, label]) => (
                <div key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </AnimateIn>
            <BookingLink variant="dark">Let’s plan your journey</BookingLink>
          </div>
        </AnimateIn>
      </section>
      <BookingGuides />
      <section className="home-section">
        <div className="site-container">
          <AnimateIn>
            <SectionHeading
              eyebrow="TESTIMONIALS"
              title="What Our Customers Say About Us"
              description="What our customers say about us — from daily travelers to small business owners."
            />
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
      <section className="customer-film">
        <AnimateIn className="site-container film-grid" stagger>
          <div>
            <AnimateIn>
              <SectionHeading
                align="left"
                light
                eyebrow="THE PEOPLE BEHIND THE JOURNEYS"
                title="What our customers say about us"
                description="From daily travelers to small business owners — here’s what people love about Charlie Travels & Cargo."
              />
            </AnimateIn>
            <BookingLink>Book Now</BookingLink>
          </div>
          <JourneyVideo />
        </AnimateIn>
      </section>
      <section className="home-section gallery-section">
        <div className="site-container">
          <AnimateIn>
            <SectionHeading
              align="left"
              eyebrow="ON THE ROAD WITH CHARLIE"
              title="A window into your next journey"
            />
          </AnimateIn>
          <Gallery />
        </div>
      </section>
      <DeliveryPricing />
      <OfferBanner />
      <section className="home-section" id="faq">
        <div className="site-container faq-layout">
          <div className="faq-intro">
            <AnimateIn>
              <SectionHeading
                align="left"
                eyebrow="FREQUENTLY ASKED QUESTIONS"
                title="Have Any Question?"
                description="Have any question? Here are the things travelers and senders ask us most."
              />
            </AnimateIn>
            <div className="faq-contact">
              <i className="bi bi-whatsapp" aria-hidden="true" />
              <h3>Still have a question?</h3>
              <p>A real person. A helpful reply. Just a message away.</p>
              <BookingLink variant="dark">Chat with our team</BookingLink>
            </div>
          </div>
          <FaqList items={faqs} name="home-faq" />
        </div>
      </section>
      <section className="home-section section-tinted location-section">
        <div className="site-container">
          <div className="whatsapp-steps">
            <div>
              <span className="section-eyebrow">EASY WHATSAPP BOOKING</span>
              <h2>One chat. All sorted.</h2>
            </div>
            <ol>
              <li>
                <i className="bi bi-chat-dots" aria-hidden="true" />
                <span>
                  <small>STEP 1</small>Message us
                </span>
              </li>
              <li>
                <i className="bi bi-bus-front" aria-hidden="true" />
                <span>
                  <small>STEP 2</small>Get bus / parcel options
                </span>
              </li>
              <li>
                <i className="bi bi-check2-circle" aria-hidden="true" />
                <span>
                  <small>STEP 3</small>Arrive &amp; go
                </span>
              </li>
            </ol>
          </div>
          <div className="location-grid">
            <div>
              <AnimateIn>
                <SectionHeading
                  align="left"
                  eyebrow="FIND YOUR STARTING POINT"
                  title="See you at Mori Gate."
                  description="We serve daily travelers from Delhi, Agra, Ayodhya, Basti, Haridwar, and more…"
                />
              </AnimateIn>
              <p className="location-address">
                <i className="bi bi-geo-alt" aria-hidden="true" />
                <span>
                  Charlie Travels &amp; Cargo
                  <br />
                  <strong>37, Gate no. 5 Mori Gate, Delhi</strong>
                </span>
              </p>
              <a
                className="home-button button-outline"
                href="https://www.google.com/maps/search/?api=1&query=Charlie+Travels+%26+Cargo+Mori+Gate+Delhi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-map" aria-hidden="true" />
                Open in Google Maps
              </a>
            </div>
            <iframe
              title="Charlie Travels & Cargo location in Mori Gate, Delhi"
              src="https://maps.google.com/maps?q=Charlie%20Travels%20%26%20Cargo%20Mori%20Gate%20Delhi&output=embed"
              width="700"
              height="380"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
