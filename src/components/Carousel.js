'use client';
import { useState, useCallback } from "react";
import Image from "next/image";

export default function Carousel({ photos, caption }) {
  const [idx, setIdx] = useState(0);
  const [animating, setAnimating] = useState(false);

  const go = useCallback((next) => {
    if (animating || next === idx) return;
    setAnimating(true);
    setTimeout(() => {
      setIdx(next);
      setAnimating(false);
    }, 180);
  }, [animating, idx]);

  const prev = () => go((idx - 1 + photos.length) % photos.length);
  const next = () => go((idx + 1) % photos.length);

  if (!photos || photos.length === 0) return null;

  if (photos.length === 1) {
    return (
      <div className="carousel-outer">
        <div className="carousel-wrap">
          <div className="carousel-img-wrap">
            <Image src={photos[0]} alt={caption} fill sizes="(max-width: 768px) 100vw, 800px" style={{ objectFit: "cover" }} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="carousel-outer">
      {/* Main image area */}
      <div className="carousel-wrap">
        <div className="carousel-img-wrap" style={{ opacity: animating ? 0.55 : 1, transition: "opacity 0.18s ease" }}>
          <Image
            key={photos[idx]}
            src={photos[idx]}
            alt={`${caption} ${idx + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Prev / Next buttons */}
        <button className="carousel-btn carousel-btn-prev" onClick={prev} aria-label="Previous">&#8249;</button>
        <button className="carousel-btn carousel-btn-next" onClick={next} aria-label="Next">&#8250;</button>

        {/* Counter */}
        <div className="carousel-counter">{idx + 1} / {photos.length}</div>
      </div>

      {/* Thumbnail strip — outside the overflow:hidden wrap */}
      <div className="carousel-thumbs">
        {photos.map((src, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Photo ${i + 1}`}
            className={`carousel-thumb${i === idx ? " active" : ""}`}
          >
            <Image
              src={src}
              alt={`${caption} thumbnail ${i + 1}`}
              fill
              sizes="80px"
              style={{ objectFit: "cover" }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
