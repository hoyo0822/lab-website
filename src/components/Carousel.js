'use client';
import { useState, useCallback, useEffect } from "react";
import Image from "next/image";

export default function Carousel({ photos, caption }) {
  const [idx, setIdx] = useState(0);
  const [animating, setAnimating] = useState(false);

  const go = useCallback((dir) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setIdx((prev) => (prev + dir + photos.length) % photos.length);
      setAnimating(false);
    }, 200);
  }, [animating, photos.length]);

  // Auto-advance every 4s if more than 1 photo
  useEffect(() => {
    if (photos.length <= 1) return;
    const timer = setInterval(() => go(1), 4000);
    return () => clearInterval(timer);
  }, [go, photos.length]);

  if (!photos || photos.length === 0) return null;

  if (photos.length === 1) {
    return (
      <div className="carousel-wrap">
        <div className="carousel-img-wrap">
          <Image src={photos[0]} alt={caption} fill style={{ objectFit: "cover" }} />
        </div>
      </div>
    );
  }

  return (
    <div className="carousel-wrap">
      <div className="carousel-img-wrap" style={{ opacity: animating ? 0.6 : 1, transition: "opacity 0.2s" }}>
        <Image
          key={photos[idx]}
          src={photos[idx]}
          alt={`${caption} ${idx + 1}`}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Prev / Next */}
      <button className="carousel-btn carousel-btn-prev" onClick={() => go(-1)} aria-label="Previous">
        &#8249;
      </button>
      <button className="carousel-btn carousel-btn-next" onClick={() => go(1)} aria-label="Next">
        &#8250;
      </button>

      {/* Dots */}
      <div className="carousel-dots">
        {photos.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot${i === idx ? " active" : ""}`}
            onClick={() => setIdx(i)}
            aria-label={`Photo ${i + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="carousel-counter">{idx + 1} / {photos.length}</div>
    </div>
  );
}
