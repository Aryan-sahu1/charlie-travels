import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: new URL("/contact-us", siteUrl).href, changeFrequency: "monthly", priority: 0.8 },
    { url: siteUrl.href, changeFrequency: "weekly", priority: 1 },
    { url: new URL("/about-us", siteUrl).href, changeFrequency: "monthly", priority: 0.8 },
    { url: new URL("/services", siteUrl).href, changeFrequency: "monthly", priority: 0.9 },
    { url: new URL("/gallery", siteUrl).href, changeFrequency: "monthly", priority: 0.7 },
  ];
}
