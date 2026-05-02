'use client';
import { useState, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CoverSlideshow({ covers }) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const router = useRouter();

  const go = useCallback((next) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((next + covers.length) % covers.length);
      setAnimating(false);
    }, 220);
  }, [animating, covers.length]);

  if (!covers || covers.length === 0) return null;
  const cover = covers[current];

  const handleClick = () => {
    if (cover.pubId) {
      router.push(`/publications?highlight=${cover.pubId}`);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>

      {/* Main image + arrows */}
      <div style={{ position: "relative", width: "100%", maxWidth: "400px" }}>
        {/* Prev */}
        <button
          onClick={() => go(current - 1)}
          style={{
            position: "absolute", left: "-18px", top: "50%", transform: "translateY(-50%)",
            zIndex: 2, background: "var(--surface)", border: "1px solid var(--border)",
            borderRadius: "50%", width: "34px", height: "34px",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1.2rem", color: "var(--text)", cursor: "pointer",
            boxShadow: "var(--shadow-sm)", transition: "background 0.18s",
          }}
          aria-label="Previous"
        >‹</button>

        {/* Image */}
        <div
          onClick={handleClick}
          style={{
            position: "relative", width: "100%", aspectRatio: "4/3",
            borderRadius: "6px", overflow: "hidden",
            boxShadow: "var(--shadow-lg)", background: "var(--bg-alt)",
            opacity: animating ? 0 : 1,
            transform: animating ? "scale(0.97)" : "scale(1)",
            transition: "opacity 0.22s ease, transform 0.22s ease",
            cursor: cover.pubId ? "pointer" : "default",
          }}
        >
          <Image
            src={cover.image}
            alt={cover.journal}
            fill
            sizes="(max-width: 820px) 100vw, 400px"
            style={{ objectFit: "contain", padding: "8px" }}
          />
        </div>

        {/* Next */}
        <button
          onClick={() => go(current + 1)}
          style={{
            position: "absolute", right: "-18px", top: "50%", transform: "translateY(-50%)",
            zIndex: 2, background: "var(--surface)", border: "1px solid var(--border)",
            borderRadius: "50%", width: "34px", height: "34px",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1.2rem", color: "var(--text)", cursor: "pointer",
            boxShadow: "var(--shadow-sm)", transition: "background 0.18s",
          }}
          aria-label="Next"
        >›</button>
      </div>

      {/* Journal label */}
      <p style={{
        fontSize: "0.78rem", fontWeight: 500, color: "var(--text-muted)",
        letterSpacing: "0.04em", textAlign: "center",
        opacity: animating ? 0 : 1, transition: "opacity 0.22s ease",
      }}>
        {cover.journal}

      </p>

      {/* Dots */}
      {covers.length > 1 && (
        <div style={{ display: "flex", gap: "6px" }}>
          {covers.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i - current)}
              style={{
                width: i === current ? "20px" : "7px", height: "7px",
                borderRadius: "4px", border: "none",
                background: i === current ? "var(--accent)" : "var(--border)",
                cursor: "pointer", padding: 0,
                transition: "width 0.3s, background 0.3s",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
