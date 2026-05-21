"use client";

import { useState, useCallback, useEffect } from "react";

export type CarouselSlide = {
  src: string;
  alt: string;
  caption: string;
};

type Props = {
  slides: CarouselSlide[];
};

export default function ScreenCarousel({ slides }: Props) {
  const [index, setIndex] = useState(0);
  const count = slides.length;

  const go = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count],
  );
  const prev = useCallback(() => go(index - 1), [go, index]);
  const next = useCallback(() => go(index + 1), [go, index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const current = slides[index];

  return (
    <div
      className="content-col-narrow"
      style={{
        background: "var(--color-screen-gallery-bg)",
        borderRadius: "20px",
        padding: "40px",
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          src={current.src}
          alt={current.alt}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            borderRadius: "10px",
            border: "1px solid var(--color-screen-border)",
          }}
        />

        <button
          type="button"
          aria-label="Previous screen"
          onClick={prev}
          className="carousel-arrow"
          style={{ left: "16px" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          type="button"
          aria-label="Next screen"
          onClick={next}
          className="carousel-arrow"
          style={{ right: "16px" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
          paddingTop: "24px",
        }}
      >
        <p
          style={{
            fontSize: "14px",
            lineHeight: 1.5,
            color: "var(--color-text)",
            flex: 1,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "12px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "var(--color-text-muted)",
              marginRight: "12px",
            }}
          >
            {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </span>
          {current.caption}
        </p>

        <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to screen ${i + 1}`}
              onClick={() => go(i)}
              className="carousel-dot"
              data-active={i === index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
