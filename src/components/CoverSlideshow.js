'use client';
import { useState, useEffect } from "react";
import Image from "next/image";

export default function CoverSlideshow({ covers }) {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!covers || covers.length <= 1) return;
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % covers.length);
        setVisible(true);
      }, 400);
    }, 3000);
    return () => clearInterval(timer);
  }, [covers]);

  if (!covers || covers.length === 0) return null;
  const cover = covers[current];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
      {/* Main image */}
      <div style={{
        position: "relative",
        width: "100%",
        height: "240px",
        borderRadius: "6px",
        overflow: "hidden",
        boxShadow: "var(--shadow-lg)",
        background: "var(--bg-alt)",
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.97)",
        transition: "opacity 0.4s ease, transform 0.4s ease",
      }}>
        <Image
          src={cover.image}
          alt={cover.journal}
          fill
          style={{ objectFit: "contain", padding: "8px" }}
        />
      </div>

      {/* Journal label */}
      <p style={{
        fontSize: "0.78rem", fontWeight: 600, color: "var(--text-muted)",
        letterSpacing: "0.04em", textAlign: "center",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.4s ease",
      }}>
        {cover.journal}
      </p>

      {/* Dots */}
      {covers.length > 1 && (
        <div style={{ display: "flex", gap: "6px" }}>
          {covers.map((_, i) => (
            <button
              key={i}
              onClick={() => { setVisible(false); setTimeout(() => { setCurrent(i); setVisible(true); }, 400); }}
              style={{
                width: i === current ? "20px" : "7px",
                height: "7px",
                borderRadius: "4px",
                border: "none",
                background: i === current ? "var(--accent)" : "var(--border)",
                cursor: "pointer",
                padding: 0,
                transition: "width 0.3s, background 0.3s",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
