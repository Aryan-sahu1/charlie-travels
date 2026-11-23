import Image from "next/image";
import BookingLink from "@/components/ui/BookingLink";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateIn from "@/components/ui/AnimateIn";
import { guides, pricing, services, testimonials } from "@/data/home";

export function DeliveryPricing() {
  return (
    <section className="home-section section-tinted" id="pricing">
      <div className="site-container">
        <SectionHeading
          eyebrow="OUR CHARGES ARE CLEAR AND STRAIGHTFORWARD"
          title="Transparent pricing for delivery"
          description="A little parcel or a business shipment — find the right fit before you book."
        />
        <AnimateIn className="pricing-grid" stagger>
          {pricing.map((group) => (
            <PricingCard key={group.title} group={group} />
          ))}
        </AnimateIn>
        <ol className="pricing-notes">
          <li>Final pricing may vary based on destination and route availability.</li>
          <li>Parcels must be sealed and labeled properly before drop-off.</li>
          <li>We only accept legally allowed personal or small commercial items.</li>
          <li>Oversized or restricted items will not be accepted.</li>
        </ol>
      </div>
    </section>
  );
}

export function BookingGuides() {
  return (
    <section className="home-section section-tinted" id="booking">
      <div className="site-container">
        <SectionHeading
          eyebrow="OUR DETAILS"
          title="How to book with us"
          description="Whether you’re booking a seat or sending a parcel — our process is simple, fast, and just a message away."
        />
        <AnimateIn className="booking-grid" stagger>
          {guides.map((guide) => (
            <BookingGuideCard key={guide.title} guide={guide} />
          ))}
        </AnimateIn>
        <p className="booking-note">
          <i className="bi bi-info-circle" aria-hidden="true" />
          We only carry legal personal items or small-sized parcels on approved bus routes. No large
          freight or restricted items are accepted.
        </p>
      </div>
    </section>
  );
}

export function ServiceCard({ service }: { service: (typeof services)[number] }) {
  return (
    <article className="service-card">
      <div
        className={`service-image${service.image === "whatsapp-guide.webp" ? " is-illustration" : ""}`}
      >
        <Image
          src={`/images/${service.image}`}
          alt={service.title}
          width={520}
          height={430}
          sizes="(max-width: 575px) 90vw, (max-width: 991px) 45vw, 23vw"
        />
        <span className="service-icon">
          <i className={`bi bi-${service.icon}`} aria-hidden="true" />
        </span>
      </div>
      <div className="service-card-body">
        <span>{service.tag}</span>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    </article>
  );
}

export function BookingGuideCard({ guide }: { guide: (typeof guides)[number] }) {
  return (
    <article className={`booking-card booking-${guide.theme}`}>
      <div className="booking-card-heading">
        <span className="booking-icon">
          <i className={`bi bi-${guide.icon}`} aria-hidden="true" />
        </span>
        <span className="booking-badge">POPULAR</span>
        <h3>{guide.title}</h3>
        <p>{guide.subtitle}</p>
      </div>
      <ol>
        {guide.steps.map((step, i) => (
          <li key={step}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <strong>{step}</strong>
            <i className="bi bi-check2" aria-hidden="true" />
          </li>
        ))}
      </ol>
      <div className="booking-card-bottom">
        <p>
          <i className="bi bi-check-circle" aria-hidden="true" />
          {guide.note}
        </p>
        <BookingLink
          message={guide.message}
          variant={guide.theme === "travel" ? "dark" : "primary"}
        >
          {guide.cta}
        </BookingLink>
      </div>
    </article>
  );
}

export function TestimonialCard({ item }: { item: (typeof testimonials)[number] }) {
  return (
    <figure className="testimonial-card">
      <i className="bi bi-quote" aria-hidden="true" />
      <blockquote>{item.quote}</blockquote>
      <figcaption>
        <span className="review-avatar" aria-hidden="true">
          {item.name.charAt(0)}
        </span>
        <span>
          <strong>{item.name}</strong>
          <small>{item.role}</small>
        </span>
        <span className="review-mark">
          <i className="bi bi-chat-heart" aria-hidden="true" />
        </span>
      </figcaption>
    </figure>
  );
}

export function PricingCard({ group }: { group: (typeof pricing)[number] }) {
  return (
    <article className={`pricing-card pricing-${group.type}`}>
      <div className="pricing-heading">
        <i className={`bi bi-${group.icon}`} aria-hidden="true" />
        <div>
          <h3>{group.title}</h3>
          <p>{group.subtitle}</p>
        </div>
      </div>
      <div className="price-list">
        {group.items.map((item) => (
          <div className="price-row" key={item.name}>
            <div>
              <h4>{item.name}</h4>
              <span>
                {group.type === "parcel" ? "Size" : "Weight"}: {item.size}
              </span>
            </div>
            <strong>
              <span>&#8377;</span>
              {item.price}
            </strong>
          </div>
        ))}
      </div>
      <BookingLink
        variant={group.type === "parcel" ? "dark" : "primary"}
        message={`Hi, I would like to book ${group.title.toLowerCase()}. Please confirm pricing and availability.`}
      >
        Book Now
      </BookingLink>
    </article>
  );
}
