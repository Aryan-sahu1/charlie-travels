import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";
import BookingLink from "@/components/ui/BookingLink";
import ContactForm from "@/components/ui/ContactForm";
import FaqList from "@/components/ui/FaqList";
import SectionHeading from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/home/ContentCards";
import { faqs, testimonials } from "@/data/home";
import { siteUrl } from "@/lib/site";
import "@/styles/home.css";
import "@/styles/contact.css";

const title = "Contact Us for Bus Booking & Parcel Delivery";
const description =
  "Contact Charlie Travels & Cargo in Mori Gate, Delhi. Call +91 95994 12941 or message us on WhatsApp for AC bus bookings, parcel delivery and booking support.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact-us" },
  openGraph: {
    locale: "en_IN",
    siteName: "Charlie Travels & Cargo",
    title,
    description,
    url: "/contact-us",
    type: "website",
    images: [{ url: "/images/gallery-1.webp", alt: "Charlie Travels buses in Delhi" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/gallery-1.webp"] },
};
const address =
  "Shop No. 23, Ambedkar Market, Near Tis Hazari Court Gate No. 6, Mori Gate, Delhi 110054";
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      name: title,
      description,
      url: new URL("/contact-us", siteUrl).href,
      mainEntity: {
        "@type": "TravelAgency",
        name: "Charlie Travels & Cargo",
        url: siteUrl.href,
        telephone: "+91-9599412941",
        email: "Charlietravels1@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: address,
          addressLocality: "Delhi",
          postalCode: "110054",
          addressCountry: "IN",
        },
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl.href },
        {
          "@type": "ListItem",
          position: 2,
          name: "Contact Us",
          item: new URL("/contact-us", siteUrl).href,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};
export default function ContactPage() {
  return (
    <main className="home-page contact-page" id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
      <section className="contact-hero">
        <Image
          src="/images/gallery-1.webp"
          alt="Charlie Travels coaches ready for journeys from Delhi"
          fill
          priority
          sizes="100vw"
        />
        <div className="site-container contact-hero-content">
          <nav aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true"> / </span>
            <span>Contact Us</span>
          </nav>
          <AnimateIn>
            <span className="section-eyebrow">LET’S GET YOU GOING</span>
            <h1>
              A conversation away.
              <br />
              <em>A journey closer.</em>
            </h1>
            <p>
              Bus booking? Parcel delivery? We’re just a message away. Get in touch with Charlie
              Travels &amp; Cargo.
            </p>
            <BookingLink>Chat with our team</BookingLink>
          </AnimateIn>
        </div>
      </section>
      <section className="home-section">
        <div className="site-container">
          <AnimateIn className="contact-options" stagger>
            <a href="tel:+919599412941">
              <i className="bi bi-telephone" aria-hidden="true" />
              <span>
                GIVE US A CALL<strong>+91 95994 12941</strong>
                <small>Travel, parcels &amp; booking support</small>
              </span>
            </a>
            <a href="mailto:Charlietravels1@gmail.com">
              <i className="bi bi-envelope" aria-hidden="true" />
              <span>
                DROP US A LINE<strong>Charlietravels1@gmail.com</strong>
                <small>We’d love to hear from you</small>
              </span>
            </a>
            <a href="#visit-us">
              <i className="bi bi-geo-alt" aria-hidden="true" />
              <span>
                MEET US IN DELHI<strong>Mori Gate, Delhi</strong>
                <small>Find our counter &amp; get directions</small>
              </span>
            </a>
          </AnimateIn>
          <div className="contact-grid" id="visit-us">
            <AnimateIn className="contact-map-panel">
              <div className="contact-map-heading">
                <span className="section-eyebrow">YOUR JOURNEY STARTS HERE</span>
                <h2>Come say hello.</h2>
                <address>{address}</address>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Charlie+Travels+%26+Cargo+Shop+23+Ambedkar+Market+Mori+Gate+Delhi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Google Maps
                </a>
              </div>
              <iframe
                title="Charlie Travels & Cargo counter near Tis Hazari Court, Mori Gate, Delhi"
                src="https://maps.google.com/maps?q=Charlie%20Travels%20Cargo%20Shop%2023%20Ambedkar%20Market%20Mori%20Gate%20Delhi&output=embed"
                width="650"
                height="510"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </AnimateIn>
            <AnimateIn className="contact-form-panel" delay={75}>
              <SectionHeading
                align="left"
                eyebrow="CONTACT US"
                title="Tell us what’s next."
                description="Have a question? Call us or message us — we’ll help you get going."
              />
              <ContactForm />
            </AnimateIn>
          </div>
        </div>
      </section>
      <section className="home-section section-tinted">
        <div className="site-container">
          <AnimateIn>
            <SectionHeading eyebrow="TESTIMONIALS" title="Good journeys. Happy customers." />
          </AnimateIn>
          <AnimateIn className="contact-reviews" stagger>
            {testimonials.slice(0, 3).map((item) => (
              <TestimonialCard key={item.name} item={item} />
            ))}
          </AnimateIn>
        </div>
      </section>
      <section className="home-section">
        <div className="site-container faq-layout">
          <AnimateIn>
            <SectionHeading
              align="left"
              eyebrow="FREQUENTLY ASKED QUESTIONS"
              title="A little clarity before you go."
              description="From departure times to parcel updates, here’s what you need to know."
            />
            <BookingLink variant="dark">Ask us on WhatsApp</BookingLink>
          </AnimateIn>
          <AnimateIn>
            <FaqList items={faqs} name="contact-faq" />
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
