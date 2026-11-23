"use client";

import Image from "next/image";
import { useRef } from "react";
import { gallery } from "@/data/home";

export default function Gallery({ items = gallery }: { items?: typeof gallery }) {
  const track = useRef<HTMLDivElement>(null);
  function scroll(direction: number) {
    if (track.current)
      track.current.scrollBy({
        left: direction * track.current.clientWidth * 0.85,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      });
  }
  return (
    <>
      <div className="gallery-controls">
        <span>A glimpse of life on the move</span>
        <div>
          <button type="button" aria-label="Previous gallery photos" onClick={() => scroll(-1)}>
            <i className="bi bi-chevron-left" aria-hidden="true" />
          </button>
          <button type="button" aria-label="Next gallery photos" onClick={() => scroll(1)}>
            <i className="bi bi-chevron-right" aria-hidden="true" />
          </button>
        </div>
      </div>
      <div
        ref={track}
        className="gallery-track"
        role="region"
        aria-label="Charlie Travels photo gallery"
        tabIndex={0}
      >
        {items.map((item) => (
          <figure key={item.image}>
            <Image
              src={`/images/${item.image}`}
              alt={item.alt}
              width={600}
              height={600}
              sizes="(max-width: 575px) 85vw, (max-width: 991px) 45vw, 30vw"
            />
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
