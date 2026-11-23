"use client";

import { useState } from "react";
import { bookingUrl } from "@/lib/booking";
import { routes } from "@/data/home";
import BookingLink from "@/components/ui/BookingLink";

const filters = ["All routes", "Uttarakhand", "Uttar Pradesh", "Punjab", "More destinations"];
export default function RouteExplorer() {
  const [filter, setFilter] = useState("All routes");
  const [expanded, setExpanded] = useState(false);
  const filtered = routes.filter(
    (route) =>
      filter === "All routes" ||
      (filter === "More destinations"
        ? !["Uttarakhand", "Uttar Pradesh", "Punjab"].includes(route.region)
        : route.region === filter),
  );
  const visible = expanded || filter !== "All routes" ? filtered : filtered.slice(0, 6);
  return (
    <>
      <div className="route-filters" role="group" aria-label="Filter routes by region">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={filter === item}
            className={filter === item ? "selected" : ""}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="route-grid" aria-live="polite">
        {visible.map((route) => (
          <article className="route-card" key={route.city}>
            <div className="route-card-top">
              <span>{route.region}</span>
              <i className="bi bi-bus-front" aria-hidden="true" />
            </div>
            <h3>
              <span>Delhi</span>
              <span className="route-line" aria-hidden="true" />
              <span>{route.city}</span>
            </h3>
            <p>{route.description}</p>
            <a
              href={bookingUrl(
                `Hi, please share bus and parcel options from Delhi to ${route.city}.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Check availability <i className="bi bi-chat-dots" aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
      <div className="routes-bottom">
        <p>
          Multiple departures daily from Delhi to top North Indian cities — for both travel and
          parcel delivery.
        </p>
        {filter === "All routes" && (
          <button
            type="button"
            className="home-button button-outline"
            aria-expanded={expanded}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show fewer routes" : `Explore all ${routes.length} routes`}
            <i className={`bi bi-chevron-${expanded ? "up" : "down"}`} aria-hidden="true" />
          </button>
        )}
        <BookingLink variant="dark" message="Hi, please share available locations across India.">
          More locations across India
        </BookingLink>
      </div>
      <div className="all-routes-index">
        <h3>All destinations from Delhi</h3>
        <p>
          {routes.map((route, index) => (
            <span key={route.city}>
              {index > 0 && " · "}
              <a
                href={bookingUrl(`Hi, I would like to travel from Delhi to ${route.city}.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {route.city}
              </a>
            </span>
          ))}
        </p>
      </div>
    </>
  );
}
