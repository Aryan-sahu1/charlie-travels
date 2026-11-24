"use client";

import { type FormEvent, useState } from "react";
import { bookingUrl } from "@/lib/booking";

export default function TrackingForm() {
  const [trackingId, setTrackingId] = useState("");
  const [error, setError] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const reference = trackingId.trim();
    if (reference.length < 4) {
      setError("Please enter a valid parcel or booking reference.");
      return;
    }
    window.location.assign(
      bookingUrl(
        `Hi Charlie Travels & Cargo, I would like a tracking update for reference: ${reference}`,
      ),
    );
  }

  return (
    <form className="tracking-form" onSubmit={submit} noValidate>
      <label htmlFor="tracking-reference">Parcel or booking reference</label>
      <div className="tracking-input-row">
        <i className="bi bi-upc-scan" aria-hidden="true" />
        <input
          id="tracking-reference"
          name="tracking-reference"
          value={trackingId}
          onChange={(event) => {
            setTrackingId(event.target.value);
            if (error) setError("");
          }}
          placeholder="Example: CT-12345"
          autoComplete="off"
          aria-describedby="tracking-help tracking-error"
        />
      </div>
      <button type="submit" className="home-button button-primary">
        <i className="bi bi-search" aria-hidden="true" />
        Request tracking update
      </button>
      <p id="tracking-help">
        This opens WhatsApp with your reference so our team can check the latest available update.
      </p>
      <p id="tracking-error" className="tracking-error" role="alert">
        {error}
      </p>
    </form>
  );
}
