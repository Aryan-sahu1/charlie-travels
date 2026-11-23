import { bookingUrl } from "@/lib/booking";
import type { ReactNode } from "react";

export default function BookingLink({
  children,
  message,
  variant = "primary",
  className = "",
}: {
  children: ReactNode;
  message?: string;
  variant?: "primary" | "outline" | "light" | "dark";
  className?: string;
}) {
  return (
    <a
      href={bookingUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`home-button button-${variant} ${className}`}
    >
      <i className="bi bi-whatsapp" aria-hidden="true" />
      {children}
    </a>
  );
}
