"use client";

import { type FormEvent } from "react";
import { bookingUrl } from "@/lib/booking";

export default function ContactForm() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !message) return;
    window.location.assign(
      bookingUrl(`Hi Charlie Travels & Cargo,\nName: ${name}\nEmail: ${email}\n\n${message}`),
    );
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <label htmlFor="contact-name">
        Your name
        <input
          id="contact-name"
          name="name"
          autoComplete="name"
          placeholder="Full name"
          required
          maxLength={100}
          pattern={".*\\S.*"}
        />
      </label>
      <label htmlFor="contact-email">
        Email address
        <input
          id="contact-email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
          maxLength={200}
        />
      </label>
      <label htmlFor="contact-message">
        How can we help?
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Tell us your route, travel date or parcel details..."
          required
          maxLength={2000}
        />
      </label>
      <button className="home-button button-primary" type="submit">
        <i className="bi bi-whatsapp" aria-hidden="true" /> Send enquiry on WhatsApp
      </button>
      <p>Opens WhatsApp with your message. Send it there to reach our team.</p>
    </form>
  );
}
