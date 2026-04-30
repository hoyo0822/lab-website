'use client';
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function HeroSlideshow({ slides = [] }) {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const timerRef = useRef(null);

  const goTo = (next) => {
    setFading(true);
    setTimeout(() => {
      setCurrent(next);
      setFading(false);
    }, 500);
  };

  useEffect(() => {
    if (slides.length <= 1) return;
    timerRef.current = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % slides.length;
        setFading(true);
        setTimeout(() => setFading(false), 500);
        return next;
      });
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, [slides.length]);

  if (!slides || slides.length === 0) return null;

  return (
    <>
      {/* Background images (crossfade) */}
      {slides.map((src, i) => (
        <div
          key={src}
          style={{
            position: "absolute", inset: 0,
            opacity: i === current ? (fading ? 0 : 1) : 0,
            transition: "opacity 0.7s ease",
          }}
        >
          <Image
            src={src}
            alt={`Hero slide ${i + 1}`}
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority={i === 0}
          />
        </div>
      ))}

      {/* Dot indicators (only if >1 slide) */}
      {slides.length > 1 && (
        <div style={{
          position: "absolute", bottom: "4rem", left: "50%",
          transform: "translateX(-50%)",
          display: "flex", gap: "8px", zIndex: 3,
        }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              style={{
                width: i === current ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                border: "none",
                background: i === current ? "#fff" : "rgba(255,255,255,0.45)",
                cursor: "pointer",
                padding: 0,
                transition: "width 0.3s, background 0.3s",
              }}
            />
          ))}
        </div>
      )}
    </>
  );
}
