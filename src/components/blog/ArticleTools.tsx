"use client";

import { useEffect, useRef, useState } from "react";

export default function ArticleTools({ title, url }: { title: string; url: string }) {
  const progress = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState("");
  useEffect(() => {
    function update() {
      const article = document.getElementById("article-body");
      if (!article || !progress.current) return;
      const rect = article.getBoundingClientRect();
      const distance = Math.max(1, article.offsetHeight - window.innerHeight * 0.45);
      progress.current.style.transform = `scaleX(${Math.min(1, Math.max(0, -rect.top / distance))})`;
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setStatus("Link copied. Ready to share.");
    } catch {
      setStatus("Copy the page address from your browser to share this story.");
    }
  }
  return (
    <>
      <div className="journal-progress" aria-hidden="true">
        <div ref={progress} />
      </div>
      <div className="journal-share">
        <span>Share this story</span>
        <a
          aria-label="Share this story on WhatsApp"
          href={`https://wa.me/?text=${encodeURIComponent(`${title}\n${url}`)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-whatsapp" aria-hidden="true" />
        </a>
        <button type="button" aria-label="Copy story link" onClick={copy}>
          <i className="bi bi-link-45deg" aria-hidden="true" />
        </button>
        <p role="status">{status}</p>
      </div>
    </>
  );
}
