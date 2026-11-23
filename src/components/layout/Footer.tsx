import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-intro">
        <div>
          <span className="footer-eyebrow">CHARLIE TRAVELS &amp; CARGO</span>
          <p>Your journey. Our commitment.</p>
        </div>
        <a href="tel:+917042236323" className="footer-call">
          <i className="bi bi-telephone" aria-hidden="true" />
          <span>
            LET’S GET YOU MOVING<strong>+91 7042236323</strong>
          </span>
        </a>
      </div>
      <div className="site-container footer-grid">
        <div className="footer-about">
          <Link href="/" aria-label="Charlie Travels & Cargo home" className="footer-brand">
            <Image
              src="/logo.webp"
              alt="Charlie Travels & Cargo"
              width={158}
              height={158}
              className="footer-logo"
            />
            <span className="brand-name">
              CHARLIE<span>TRAVELS &amp; CARGO</span>
            </span>
          </Link>
          <p>
            Charlie Travels &amp; Cargo is a trusted intercity bus travel provider based in Delhi,
            offering daily AC sleeper and seater coach services across North India. Our easy
            WhatsApp booking and efficient parcel services make us the preferred choice for
            travelers and businesses alike. Experience hassle-free travel with safety and
            professionalism at every step.
          </p>
        </div>
        <div className="footer-links">
          <h2>Quick Links</h2>
          <nav aria-label="Footer navigation">
            <ul>
              {footerLinks.map(([label, href]) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="footer-information">
          <h2>Information</h2>
          <address>
            <div className="contact-row">
              <i className="bi bi-geo-alt" aria-hidden="true" />
              <span>
                <small>VISIT US</small>37, Gate no. 5 Mori Gate
              </span>
            </div>
            <a className="contact-row" href="tel:+917042236323">
              <i className="bi bi-telephone" aria-hidden="true" />
              <span>
                <small>CALL US</small>+91 7042236323
              </span>
            </a>
            <a className="contact-row" href="mailto:Charlietravels1@gmail.com">
              <i className="bi bi-envelope" aria-hidden="true" />
              <span>
                <small>WRITE TO US</small>Charlietravels1@gmail.com
              </span>
            </a>
          </address>
        </div>
      </div>
      <div className="site-container footer-bottom">
        <span>© Charlie Travels &amp; Cargo. All rights reserved.</span>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <span>Travel with confidence. Send with care.</span>
      </div>
    </footer>
  );
}
