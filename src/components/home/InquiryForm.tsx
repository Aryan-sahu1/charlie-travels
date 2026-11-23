"use client";

import { useState, type FormEvent } from "react";
import { bookingUrl } from "@/lib/booking";
import { routes } from "@/data/home";

export default function InquiryForm() {
  const [mode, setMode] = useState("Bus travel");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = `Hi Charlie Travels! I would like to enquire about ${mode}.\nFrom: Delhi\nDestination: ${form.get("destination")}\nDate: ${form.get("date")}`;
    window.open(bookingUrl(message), "_blank", "noopener,noreferrer");
  }
  return (
    <form className="inquiry-form" onSubmit={submit}>
      <div className="inquiry-top">
        <div>
          <i className="bi bi-compass" aria-hidden="true" />
          <strong>Where are you headed?</strong>
        </div>
        <span>Travel or send a parcel. We’ll take it from here.</span>
      </div>
      <div className="inquiry-fields">
        <label>
          <span>
            <i className="bi bi-geo-alt" aria-hidden="true" /> DESTINATION
          </span>
          <input
            name="destination"
            placeholder="Where to from Delhi?"
            list="destinations"
            required
            maxLength={100}
          />
          <datalist id="destinations">
            {routes.map((route) => (
              <option key={route.city} value={route.city} />
            ))}
          </datalist>
        </label>
        <label>
          <span>
            <i className="bi bi-calendar3" aria-hidden="true" /> JOURNEY DATE
          </span>
          <input
            type="date"
            name="date"
            aria-label="Journey date"
            required
            onFocus={(event) => {
              const now = new Date();
              event.currentTarget.min = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
            }}
          />
        </label>
        <label>
          <span>
            <i className="bi bi-grid" aria-hidden="true" /> SERVICE
          </span>
          <select name="mode" value={mode} onChange={(event) => setMode(event.target.value)}>
            <option value="Bus travel">Passenger Travel (AC Sleeper/Seater)</option>
            <option value="Parcel delivery">Parcel Delivery (Documents & Small Packages)</option>
            <option value="Cargo shipping">Cargo Shipping (Bulk Boxes 5–100kg)</option>
          </select>
        </label>
        <button type="submit" className="home-button button-primary">
          <i className="bi bi-whatsapp" aria-hidden="true" />
          Inquire Now
        </button>
      </div>
      <p className="inquiry-note">
        <i className="bi bi-lock" aria-hidden="true" /> Opens WhatsApp with your enquiry.
        Availability confirmed by our team.
      </p>
    </form>
  );
}
