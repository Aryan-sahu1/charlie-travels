"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function AnimateIn({
  children,
  className = "",
  delay = 0,
  stagger = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (
      !element ||
      !window.IntersectionObserver ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const animations: Animation[] = [];
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const targets = stagger ? Array.from(element.children) : [element];
        targets.forEach((target, index) =>
          animations.push(
            target.animate(
              [
                { opacity: 0, transform: "translateY(24px)" },
                { opacity: 1, transform: "translateY(0)" },
              ],
              {
                duration: 650,
                delay: delay + Math.min(index, 5) * 75,
                easing: "cubic-bezier(.2,.7,.2,1)",
                fill: "backwards",
              },
            ),
          ),
        );
        observer.disconnect();
      },
      { threshold: 0.12 },
    );
    observer.observe(element);
    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
    };
  }, [delay, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
