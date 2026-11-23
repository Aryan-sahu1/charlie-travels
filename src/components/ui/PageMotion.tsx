"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Enhance uncovered sections without hiding server-rendered content.
export default function PageMotion() {
  const pathname = usePathname();
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !window.IntersectionObserver) return;
    const animations: Animation[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          animations.push(
            entry.target.animate(
              [
                { opacity: 0, transform: "translateY(24px)" },
                { opacity: 1, transform: "translateY(0)" },
              ],
              { duration: 650, easing: "cubic-bezier(.2,.7,.2,1)" },
            ),
          );
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08 },
    );
    document
      .querySelectorAll(
        "main section > .site-container, main .section-heading, main .faq-list, main .testimonials-track",
      )
      .forEach((element) => {
        if (!element.closest("[data-animate-in]") && !element.querySelector("[data-animate-in]")) {
          const parent = element.parentElement?.closest("main section > .site-container");
          if (!parent || parent.querySelector("[data-animate-in]")) observer.observe(element);
        }
      });
    const stop = () => {
      if (preference.matches) {
        observer.disconnect();
        animations.forEach((a) => a.cancel());
      }
    };
    preference.addEventListener("change", stop);
    return () => {
      observer.disconnect();
      animations.forEach((a) => a.cancel());
      preference.removeEventListener("change", stop);
    };
  }, [pathname]);
  return null;
}
