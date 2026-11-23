import Image from "next/image";
import BookingLink from "@/components/ui/BookingLink";

export default function OfferBanner() {
  return (
    <section className="offer-section">
      <Image
        src="/images/bus-interior.webp"
        alt="Comfortable seats inside a Charlie Travels bus"
        fill
        sizes="100vw"
      />
      <div className="offer-overlay" />
      <div className="site-container offer-inner">
        <div>
          <span className="section-eyebrow">DAILY BUS SERVICE FROM KASHMERE GATE</span>
          <h2>
            Your first parcel.
            <br />
            <span>₹20 less. Same care.</span>
          </h2>
          <p>Get ₹20 OFF on your first parcel booking!</p>
        </div>
        <BookingLink
          message="Hi, I would like to claim the ₹20 off offer on my first parcel booking. Please confirm the offer and availability."
          variant="light"
        >
          Get Offer Now
        </BookingLink>
      </div>
    </section>
  );
}
