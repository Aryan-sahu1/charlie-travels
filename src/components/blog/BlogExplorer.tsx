"use client";

import { useState } from "react";
import BlogCard from "@/components/blog/BlogCard";
import { type BlogPost } from "@/data/blog";

const categories = ["All stories", "Travel Tips", "Parcel & Cargo", "Booking Guides"] as const;
export default function BlogExplorer({ posts }: { posts: BlogPost[] }) {
  const [category, setCategory] = useState<string>("All stories");
  const [query, setQuery] = useState("");
  const filtered = posts.filter(
    (post) =>
      (category === "All stories" || post.category === category) &&
      `${post.title} ${post.excerpt} ${post.category}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  return (
    <div id="stories" className="journal-explorer">
      <div className="journal-explorer-heading">
        <div>
          <span className="section-eyebrow">A LITTLE KNOW-HOW FOR THE ROAD</span>
          <h2>Find your next good read.</h2>
        </div>
        <label className="journal-search">
          <i className="bi bi-search" aria-hidden="true" />
          <span className="visually-hidden">Search stories</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search stories..."
          />
        </label>
      </div>
      <div className="journal-filter-row">
        <div className="journal-filters" aria-label="Filter stories by category">
          {categories.map((item) => (
            <button
              type="button"
              key={item}
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
              <span>
                {item === "All stories"
                  ? posts.length
                  : posts.filter((post) => post.category === item).length}
              </span>
            </button>
          ))}
        </div>
        <p role="status">
          {filtered.length} {filtered.length === 1 ? "story" : "stories"}
        </p>
      </div>
      {filtered.length ? (
        <div className="journal-grid">
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="journal-empty">
          <i className="bi bi-search" aria-hidden="true" />
          <h3>No stories found</h3>
          <p>Try another keyword or explore all our guides.</p>
          <button
            type="button"
            className="home-button button-dark"
            onClick={() => {
              setCategory("All stories");
              setQuery("");
            }}
          >
            Show all stories
          </button>
        </div>
      )}
    </div>
  );
}
