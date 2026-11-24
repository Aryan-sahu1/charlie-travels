import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";
import { siteUrl } from "@/lib/site";
import "@/styles/home.css";
import "@/styles/privacy.css";

const title = "Privacy Policy";
const description =
  "Read how Charlie Travels and Cargo collects, uses, shares and protects personal information for parcel booking and cargo services.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: `${title} | Charlie Travels and Cargo`,
    description,
    url: "/privacy-policy",
    type: "website",
    locale: "en_IN",
    siteName: "Charlie Travels & Cargo",
  },
  robots: { index: true, follow: true },
};

const policySections = [
  {
    title: "Information We Collect",
    intro: "We may collect the following information:",
    items: [
      "Name",
      "Mobile number",
      "Email address",
      "Pickup and delivery address",
      "Parcel details, including weight, size and destination",
      "Transaction details, if a payment gateway is used",
      "Device information for app performance and security",
    ],
    icon: "person-vcard",
  },
  {
    title: "How We Use Your Information",
    intro: "We use collected information to:",
    items: [
      "Process parcel bookings",
      "Provide tracking updates",
      "Provide customer support services",
      "Support admin panel management",
      "Improve app performance",
      "Send SMS or WhatsApp notifications",
    ],
    icon: "clipboard-data",
  },
  {
    title: "Data Sharing Policy",
    paragraphs: [
      "We do not sell personal information.",
      "Information may be shared with delivery staff or logistics partners only to complete the service.",
      "Payment information, where applicable, is handled securely by third-party payment gateways.",
    ],
    icon: "people",
  },
  {
    title: "Data Security",
    paragraphs: [
      "We use secure servers and technical safeguards to protect your data against unauthorised access, misuse or disclosure.",
    ],
    icon: "shield-check",
  },
  {
    title: "User Rights",
    intro: "Users can:",
    items: [
      "Request correction of their data",
      "Request account deletion",
      "Contact us for privacy concerns",
    ],
    icon: "person-check",
  },
  {
    title: "Children’s Privacy",
    paragraphs: ["Our services are not intended for individuals under 18 years of age."],
    icon: "balloon-heart",
  },
  {
    title: "Changes to This Privacy Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. Updated policies will be reflected inside the app.",
    ],
    icon: "arrow-repeat",
  },
] as const;

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy | Charlie Travels and Cargo",
  description,
  url: new URL("/privacy-policy", siteUrl).href,
  dateModified: "2026-02-14",
  publisher: { "@type": "Organization", name: "Charlie Travels and Cargo", url: siteUrl.href },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="home-page privacy-page" id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
      <section className="privacy-hero">
        <div className="site-container">
          <nav className="privacy-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Privacy Policy</span>
          </nav>
          <AnimateIn className="privacy-hero-content">
            <span className="section-eyebrow">YOUR INFORMATION, HANDLED WITH CARE</span>
            <h1>Privacy Policy</h1>
            <p>
              A clear explanation of how Charlie Travels and Cargo handles information for parcel
              booking and cargo services.
            </p>
            <div className="privacy-effective-date">
              <i className="bi bi-calendar3" aria-hidden="true" />
              <span>
                <small>EFFECTIVE DATE</small>
                14 February 2026
              </span>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="privacy-content">
        <div className="site-container privacy-layout">
          <aside className="privacy-aside">
            <div className="privacy-aside-sticky">
              <span className="section-eyebrow">ON THIS PAGE</span>
              <nav aria-label="Privacy policy sections">
                <ol>
                  {policySections.map((section, index) => (
                    <li key={section.title}>
                      <a href={`#policy-${index + 1}`}>{section.title}</a>
                    </li>
                  ))}
                  <li>
                    <a href="#contact-information">Contact Information</a>
                  </li>
                </ol>
              </nav>
              <p>
                Have a privacy question?{" "}
                <a href="mailto:support@charlietravelscargo.com">Email us</a>.
              </p>
            </div>
          </aside>

          <article className="privacy-policy-content">
            <AnimateIn>
              <div className="privacy-intro">
                <span className="privacy-intro-mark" aria-hidden="true">
                  <i className="bi bi-shield-lock" />
                </span>
                <div>
                  <p className="privacy-company">CHARLIE TRAVELS AND CARGO</p>
                  <p>
                    Charlie Travels and Cargo (“we”, “our”, “us”) operates a parcel booking and
                    cargo service mobile application for customers and administrators. We are
                    committed to protecting your privacy and ensuring the security of your personal
                    information.
                  </p>
                </div>
              </div>
            </AnimateIn>

            {policySections.map((section, index) => (
              <AnimateIn key={section.title} delay={index * 40}>
                <section className="privacy-section" id={`policy-${index + 1}`}>
                  <div className="privacy-section-number">{String(index + 1).padStart(2, "0")}</div>
                  <div>
                    <div className="privacy-section-heading">
                      <i className={`bi bi-${section.icon}`} aria-hidden="true" />
                      <h2>{section.title}</h2>
                    </div>
                    {"intro" in section && <p>{section.intro}</p>}
                    {"paragraphs" in section &&
                      section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    {"items" in section && (
                      <ul>
                        {section.items.map((item) => (
                          <li key={item}>
                            <i className="bi bi-check2" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </section>
              </AnimateIn>
            ))}

            <AnimateIn>
              <section className="privacy-contact" id="contact-information">
                <div className="privacy-contact-heading">
                  <span>08</span>
                  <div>
                    <span className="section-eyebrow">CONTACT INFORMATION</span>
                    <h2>We’re here to help.</h2>
                  </div>
                </div>
                <p>For questions or concerns about this Privacy Policy, please contact:</p>
                <address>
                  <strong>Charlie Travels and Cargo</strong>
                  <span>
                    <i className="bi bi-geo-alt" aria-hidden="true" />
                    Shop No. 23, Ambekar Market, Near Tis Hazari Court Gate No. 6, Mori Gate, Delhi
                    – 110006
                  </span>
                  <a href="tel:+919599412941">
                    <i className="bi bi-telephone" aria-hidden="true" />
                    +91-9599412941
                  </a>
                  <a
                    href="https://www.charlietravelscargo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-globe2" aria-hidden="true" />
                    www.charlietravelscargo.com
                  </a>
                  <a href="mailto:support@charlietravelscargo.com">
                    <i className="bi bi-envelope" aria-hidden="true" />
                    support@charlietravelscargo.com
                  </a>
                </address>
              </section>
            </AnimateIn>
          </article>
        </div>
      </section>
    </main>
  );
}
