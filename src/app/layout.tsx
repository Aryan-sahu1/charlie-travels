import type { Metadata } from "next";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/styles/globals.css";

import PageMotion from "@/components/ui/PageMotion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: { default: "Charlie Travels & Cargo", template: "%s | Charlie Travels & Cargo" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Charlie Travels & Cargo",
    images: [{ url: "/images/gallery-1.webp", alt: "Charlie Travels buses" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/gallery-1.webp"] },
  description:
    "AC sleeper and seater bus travel and parcel delivery from Delhi across North India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <PageMotion />
        <Header />
        <div className="site-content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
