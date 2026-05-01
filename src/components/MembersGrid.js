'use client';
import { useState, useEffect } from "react";
import Image from "next/image";

export default function MembersGrid({ members }) {
  const [selected, setSelected] = useState(null);

  // Close on Escape key
  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => { if (e.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  // Prevent body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(148px, 1fr))",
        gap: "1.6rem",
      }}>
        {members.map((m) => (
          <button
            key={m.id}
            onClick={() => setSelected(m)}
            style={{
              textAlign: "center",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              borderRadius: "6px",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
          >
            <div style={{
              position: "relative", width: "100%", aspectRatio: "3 / 4",
              marginBottom: "0.65rem", borderRadius: "6px", overflow: "hidden",
              boxShadow: "0 2px 10px rgba(0,0,0,0.10)",
            }}>
              <Image
                src={m.photo}
                alt={m.name}
                fill
                sizes="(max-width: 600px) 50vw, 148px"
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
            <p style={{ fontWeight: 600, fontSize: "0.84rem", color: "var(--text)", marginBottom: "0.15rem", lineHeight: 1.3 }}>
              {m.name}
            </p>
            <p style={{ fontSize: "0.76rem", color: "var(--text-muted)", fontStyle: "italic" }}>
              {m.role}
            </p>
          </button>
        ))}
      </div>

      {/* ── Modal ── */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 1000,
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(4px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "1.5rem",
            animation: "fadeIn 0.18s ease",
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              position: "relative",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              boxShadow: "0 24px 60px rgba(0,0,0,0.25)",
              maxWidth: "520px",
              width: "100%",
              overflow: "hidden",
              animation: "fadeInUp 0.22s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            {/* Top: photo + name */}
            <div style={{
              display: "flex", gap: "1.5rem", alignItems: "flex-start",
              padding: "1.8rem 1.8rem 1.4rem",
              borderBottom: "1px solid var(--border)",
            }}>
              <div style={{
                position: "relative", width: "90px", height: "120px",
                flexShrink: 0, borderRadius: "6px", overflow: "hidden",
              }}>
                <Image
                  src={selected.photo}
                  alt={selected.name}
                  fill
                  sizes="90px"
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
              <div style={{ flex: 1, paddingTop: "0.3rem" }}>
                <div style={{
                  display: "inline-block",
                  fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em",
                  color: "var(--accent)", background: "var(--accent-soft)",
                  padding: "2px 9px", borderRadius: "20px",
                  border: "1px solid var(--accent)", marginBottom: "0.5rem",
                  textTransform: "uppercase",
                }}>
                  {selected.category === "postdoc" ? "Postdoc / Visiting" :
                   selected.category === "phd" ? "Graduate Student" : "Intern"}
                </div>
                <h2 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.2rem" }}>
                  {selected.name}
                </h2>
                <p style={{ fontSize: "0.84rem", color: "var(--text-muted)", fontStyle: "italic", marginBottom: "0.6rem" }}>
                  {selected.role}
                </p>
                {selected.email && (
                  <a href={`mailto:${selected.email}`} style={{
                    fontSize: "0.82rem", color: "var(--accent)", wordBreak: "break-all",
                  }}>
                    ✉ {selected.email}
                  </a>
                )}
              </div>
            </div>

            {/* Body: details */}
            <div style={{ padding: "1.4rem 1.8rem 1.8rem" }}>
              {selected.education && (
                <DetailRow label="Education" value={selected.education} />
              )}
              {selected.researchInterests && (
                <DetailRow label="Research Interests" value={selected.researchInterests} />
              )}
              {selected.bio && (
                <div style={{ marginTop: selected.education || selected.researchInterests ? "1rem" : 0 }}>
                  <p style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--text-muted)", marginBottom: "0.35rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    About
                  </p>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.75 }}>
                    {selected.bio}
                  </p>
                </div>
              )}
              {!selected.education && !selected.researchInterests && !selected.bio && (
                <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", fontStyle: "italic", textAlign: "center", padding: "0.5rem 0" }}>
                  More information coming soon.
                </p>
              )}
            </div>

            {/* Close button */}
            <button
              onClick={() => setSelected(null)}
              style={{
                position: "absolute", top: "1rem", right: "1rem",
                background: "var(--bg-alt)", border: "1px solid var(--border)",
                borderRadius: "50%", width: "30px", height: "30px",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1rem", color: "var(--text-muted)", cursor: "pointer",
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "var(--accent-soft)"; e.currentTarget.style.color = "var(--accent)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "var(--bg-alt)"; e.currentTarget.style.color = "var(--text-muted)"; }}
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function DetailRow({ label, value }) {
  return (
    <div style={{ marginBottom: "0.85rem" }}>
      <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-muted)", marginBottom: "0.2rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
        {label}
      </p>
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
        {value}
      </p>
    </div>
  );
}
