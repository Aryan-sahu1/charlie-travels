import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: new URL("/tracking", siteUrl).href, changeFrequency: "monthly", priority: 0.8 },
    { url: new URL("/privacy-policy", siteUrl).href, changeFrequency: "yearly", priority: 0.4 },
    { url: new URL("/blogs", siteUrl).href, changeFrequency: "weekly", priority: 0.8 },
    ...blogPosts.map((post) => ({
      url: new URL(`/blogs/${post.slug}`, siteUrl).href,
      lastModified: post.date,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: new URL("/contact-us", siteUrl).href, changeFrequency: "monthly", priority: 0.8 },
    { url: siteUrl.href, changeFrequency: "weekly", priority: 1 },
    { url: new URL("/about-us", siteUrl).href, changeFrequency: "monthly", priority: 0.8 },
    { url: new URL("/services", siteUrl).href, changeFrequency: "monthly", priority: 0.9 },
    { url: new URL("/gallery", siteUrl).href, changeFrequency: "monthly", priority: 0.7 },
  ];
}
