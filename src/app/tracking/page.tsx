import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";
import BookingLink from "@/components/ui/BookingLink";
import TrackingForm from "@/components/tracking/TrackingForm";
import { siteUrl } from "@/lib/site";
import "@/styles/home.css";
import "@/styles/tracking.css";

const title = "Track Your Parcel";
const description =
  "Request the latest parcel delivery update from Charlie Travels & Cargo. Send your parcel or booking reference to our Delhi team on WhatsApp.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/tracking" },
  openGraph: {
    title: `${title} | Charlie Travels & Cargo`,
    description,
    url: "/tracking",
    type: "website",
    locale: "en_IN",
    siteName: "Charlie Travels & Cargo",
    images: [{ url: "/images/experience.webp", alt: "Parcel handling by Charlie Travels & Cargo" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/experience.webp"] },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Track Your Parcel | Charlie Travels & Cargo",
  description,
  url: new URL("/tracking", siteUrl).href,
  mainEntity: {
    "@type": "Service",
    name: "Parcel tracking support",
    provider: { "@type": "Organization", name: "Charlie Travels & Cargo", url: siteUrl.href },
  },
};

const steps = [
  [
    "Find your reference",
    "Use the parcel or booking reference shared at the counter or in your WhatsApp booking conversation.",
    "receipt",
  ],
  [
    "Send it to our team",
    "Enter the reference above. WhatsApp will open with the details already added to your message.",
    "send",
  ],
  [
    "Get an update",
    "Our team will check the latest available route and delivery update for your parcel.",
    "chat-dots",
  ],
] as const;

export default function TrackingPage() {
  return (
    <main className="home-page tracking-page" id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
      <section className="tracking-hero">
        <Image
          src="/images/experience.webp"
          alt="Charlie Travels team carefully loading a parcel for delivery"
          fill
          priority
          sizes="100vw"
        />
        <div className="site-container tracking-hero-content">
          <nav className="tracking-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Tracking</span>
          </nav>
          <AnimateIn>
            <span className="section-eyebrow">PARCEL TRACKING SUPPORT</span>
            <h1>
              Know where your parcel is.
              <br />
              <em>We’ll help you follow it.</em>
            </h1>
            <p>
              Share your parcel or booking reference, and our team will check the latest available
              delivery update for you.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="tracking-main">
        <div className="site-container">
          <AnimateIn className="tracking-card">
            <div className="tracking-card-copy">
              <span className="section-eyebrow">TRACK A PARCEL</span>
              <h2>Let’s find your delivery.</h2>
              <p>
                Your tracking reference helps us locate the right booking. We’ll confirm the current
                route or collection update directly with you on WhatsApp.
              </p>
              <div className="tracking-card-note">
                <i className="bi bi-shield-check" aria-hidden="true" />
                <span>Your reference is used only to help our team check your parcel update.</span>
              </div>
            </div>
            <TrackingForm />
          </AnimateIn>

          <div className="tracking-assurance" aria-label="Tracking support commitments">
            <span>
              <i className="bi bi-box-seam" aria-hidden="true" />
              Parcel delivery support
            </span>
            <span>
              <i className="bi bi-whatsapp" aria-hidden="true" />
              Updates over WhatsApp
            </span>
            <span>
              <i className="bi bi-headset" aria-hidden="true" />A helpful team, one message away
            </span>
          </div>
        </div>
      </section>

      <section className="home-section tracking-how">
        <div className="site-container">
          <AnimateIn className="tracking-heading">
            <span className="section-eyebrow">SIMPLE, HUMAN SUPPORT</span>
            <h2>A clear update in three easy steps.</h2>
            <p>We keep parcel tracking straightforward, personal and easy to follow.</p>
          </AnimateIn>
          <AnimateIn className="tracking-steps" stagger>
            {steps.map(([title, text, icon], index) => (
              <article key={title}>
                <span className="tracking-step-number">0{index + 1}</span>
                <i className={`bi bi-${icon}`} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </AnimateIn>
        </div>
      </section>

      <section className="tracking-support">
        <AnimateIn className="site-container tracking-support-inner">
          <div>
            <span className="section-eyebrow">CAN’T FIND YOUR REFERENCE?</span>
            <h2>No problem. We can still help.</h2>
            <p>
              Send us the sender or receiver name, destination and the mobile number used while
              booking. Our team will guide you from there.
            </p>
          </div>
          <BookingLink message="Hi Charlie Travels & Cargo, I need help tracking my parcel. I do not have my reference number.">
            Chat with our team
          </BookingLink>
        </AnimateIn>
      </section>
    </main>
  );
}
