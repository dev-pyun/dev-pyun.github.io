"use client";

import { useEffect } from "react";

/**
 * Arms each gauge's reveal when it actually enters the viewport, so an
 * instrument below the fold still performs its reading when the visitor
 * reaches it rather than spending it on load.
 *
 * The resting state is the finished reading. If this never runs — no JS, no
 * IntersectionObserver, reduced motion — every gauge is simply already at
 * value, which is why nothing here hides anything.
 */
export function ArmGauges() {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const gauges = Array.from(document.querySelectorAll("[data-gauge]"));
    if (gauges.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.setAttribute("data-gauge", "armed");
          io.unobserve(e.target);
        }
      },
      { threshold: 0.35 },
    );

    for (const g of gauges) io.observe(g);
    return () => io.disconnect();
  }, []);

  return null;
}
