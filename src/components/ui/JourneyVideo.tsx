"use client";

import { useState } from "react";

type Video = { src: string; title: string; poster?: string };

export default function JourneyVideo({
  className = "",
  src = "/images/customer-video.mp4",
  poster = "/images/gallery-2.webp",
  title = "Charlie Travels customer journey video",
}: {
  className?: string;
  src?: string;
  poster?: string;
  title?: string;
}) {
  return (
    <div className={`film-player ${className}`}>
      <video controls preload="none" poster={poster} aria-label={title}>
        <source src={src} type="video/mp4" />
        Your browser does not support video. <a href={src}>Download the video</a>.
      </video>
      <span>
        <i className="bi bi-play-circle" aria-hidden="true" /> Real journeys. Shared moments.
      </span>
    </div>
  );
}

export function VideoPlaylist({ videos }: { videos: readonly Video[] }) {
  const [selected, setSelected] = useState(0);
  const video = videos[selected];
  if (!video) return null;
  return (
    <div className="gallery-playlist">
      <div className="gallery-playlist-screen">
        <JourneyVideo key={video.src} src={video.src} title={video.title} poster={video.poster} />
        <div className="gallery-now-playing">
          <span>NOW SHOWING</span>
          <strong>{video.title}</strong>
        </div>
      </div>
      <div className="gallery-playlist-menu">
        <div className="gallery-playlist-heading">
          <h3>Charlie Travels</h3>
          <span>{videos.length} videos</span>
        </div>
        <div role="group" aria-label="Choose a Charlie Travels video">
          {videos.map((item, index) => (
            <button
              type="button"
              key={item.src}
              aria-pressed={index === selected}
              onClick={() => setSelected(index)}
            >
              <span className="gallery-clip-icon">
                <i
                  className={`bi bi-${index === selected ? "play-circle-fill" : "play-circle"}`}
                  aria-hidden="true"
                />
              </span>
              <span>
                <small>FILM {String(index + 1).padStart(2, "0")}</small>
                <strong>{item.title}</strong>
              </span>
              <i className="bi bi-chevron-right" aria-hidden="true" />
            </button>
          ))}
        </div>
        <p>Choose a film and press play to watch.</p>
      </div>
    </div>
  );
}
