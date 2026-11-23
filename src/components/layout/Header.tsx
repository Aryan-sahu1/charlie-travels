"use client";

import Image from "next/image";
import Link from "next/link";
import { headerLinks } from "@/data/navigation";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { bookingUrl } from "@/lib/booking";

const navigationIcons: Record<string, string> = {
  "/": "house-door",
  "/about-us": "people",
  "/services": "bus-front",
  "/gallery": "images",
  "/contact-us": "chat-dots",
  "/tracking": "box-seam",
  "/login": "person",
  "/blogs": "journal-text",
};

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const drawerRef = useRef<HTMLDialogElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dialog = drawerRef.current;
    if (!dialog || !open) return;
    dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const media = window.matchMedia("(max-width: 1050px)");
    const onResize = () => {
      if (!media.matches) setOpen(false);
    };
    media.addEventListener("change", onResize);
    return () => {
      media.removeEventListener("change", onResize);
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
    };
  }, [open]);

  function navigationLinks() {
    return (
      <ul>
        {headerLinks.map(([label, href]) => {
          const active =
            href === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);
          return (
            <li key={href}>
              <Link
                href={href}
                className={[
                  active ? "is-active" : "",
                  href === "/login" ? "nav-login" : "",
                  href === "/tracking" ? "nav-tracking" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                <i className={`bi bi-${navigationIcons[href]} nav-item-icon`} aria-hidden="true" />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <>
      <div className="header-topbar">
        <div className="site-container topbar-inner">
          <div className="topbar-contact">
            <a href="tel:+919599412941">
              <i className="bi bi-telephone-fill" aria-hidden="true" />
              +91 95994 12941
            </a>
            <a
              href="mailto:Charlietravels1@gmail.com"
              className="topbar-icon-link"
              aria-label="Email Charlie Travels"
              title="Charlietravels1@gmail.com"
            >
              <i className="bi bi-envelope-at" aria-hidden="true" />
              <span className="topbar-contact-label">Charlietravels1@gmail.com</span>
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Charlie+Travels+%26+Cargo+37+Gate+no+5+Mori+Gate+Delhi"
              target="_blank"
              rel="noopener noreferrer"
              className="topbar-icon-link"
              aria-label="Find Charlie Travels on Google Maps"
              title="37, Gate no. 5 Mori Gate"
            >
              <i className="bi bi-geo-alt-fill" aria-hidden="true" />
              <span className="topbar-contact-label">37, Gate no. 5 Mori Gate</span>
            </a>
          </div>
          <div className="topbar-social" role="group" aria-label="Follow Charlie Travels">
            <span className="topbar-social-label">Follow us</span>
            <a
              href="https://www.facebook.com/charlietravels1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Charlie Travels on Facebook"
            >
              <i className="bi bi-facebook" aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/charlie_travels_cargo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Charlie Travels on Instagram"
            >
              <i className="bi bi-instagram" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      <header className="site-header">
        <div className="site-container header-inner">
          <Link
            href="/"
            className="brand"
            aria-label="Charlie Travels & Cargo home"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/logo.webp"
              alt="Charlie Travels & Cargo"
              width={88}
              height={88}
              priority
              className="header-logo"
            />
            <span className="brand-name">
              CHARLIE<span>TRAVELS &amp; CARGO</span>
            </span>
          </Link>
          <button
            type="button"
            ref={toggleRef}
            className="menu-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            <i className={`bi ${open ? "bi-x-lg" : "bi-list"}`} aria-hidden="true" />
          </button>
          <nav
            id="primary-navigation"
            aria-label="Main navigation"
            className={`primary-navigation${open ? " is-open" : ""}`}
          >
            {navigationLinks()}
          </nav>
        </div>
        <dialog
          ref={drawerRef}
          className="mobile-menu"
          aria-labelledby="mobile-menu-title"
          onCancel={(event) => {
            event.preventDefault();
            setOpen(false);
          }}
          onClick={(event) => {
            if (event.target !== event.currentTarget) return;
            const rect = event.currentTarget.getBoundingClientRect();
            if (
              event.clientX < rect.left ||
              event.clientX > rect.right ||
              event.clientY < rect.top ||
              event.clientY > rect.bottom
            )
              setOpen(false);
          }}
        >
          <div className="mobile-menu-heading">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="mobile-menu-brand"
              aria-label="Charlie Travels home"
            >
              <Image src="/logo.webp" alt="" width={44} height={44} />
              <span id="mobile-menu-title">
                CHARLIE<small>TRAVELS &amp; CARGO</small>
              </span>
            </Link>
            <button
              type="button"
              className="mobile-menu-close"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              autoFocus
            >
              <i className="bi bi-x-lg" aria-hidden="true" />
            </button>
          </div>
          <div className="mobile-menu-intro">
            <span>LET?S GET YOU MOVING</span>
            <p>Where would you like to go?</p>
          </div>
          <nav
            id="mobile-navigation"
            className="mobile-menu-navigation"
            aria-label="Mobile navigation"
          >
            {navigationLinks()}
          </nav>
          <div className="mobile-menu-footer">
            <a
              className="mobile-menu-book"
              href={bookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              <i className="bi bi-whatsapp" aria-hidden="true" />
              Book on WhatsApp
            </a>
            <a className="mobile-menu-call" href="tel:+919599412941">
              <i className="bi bi-telephone" aria-hidden="true" />
              +91 95994 12941
            </a>
            <p>Travel with comfort. Send with care.</p>
          </div>
        </dialog>
      </header>
    </>
  );
}
