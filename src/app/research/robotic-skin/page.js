import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Robotic Skin – BIRD Lab @ KIST",
};

const topics = [
  "Printing-based large-area electronic functionalization",
  "Highly integrated, system-level electronic epidermis that innervates and controls soft robots and/or humans",
  "Modular skin computer for optimal health monitoring",
  "Electrical impedance tomography (EIT)",
  "Elastomagnetic tomography (EMT)",
  "Modular robotic skin for meter-scale real-time tactile sensing",
  "Whole-body tactile sensation for augmenting robotic perception, learning framework, and human-robot interaction",
  "Data-assisted AI skin for physical AI",
];

export default function RoboticSkinPage() {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "3rem 2rem" }}>

      {/* Breadcrumb */}
      <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "1.8rem" }}>
        <Link href="/research" style={{ color: "var(--accent)" }}>Research</Link>
        <span style={{ margin: "0 0.4rem" }}>›</span>
        <span>Robotic Skin</span>
      </div>

      {/* Page header */}
      <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "0.4rem", color: "var(--text)" }}>
        Robotic Skin
      </h1>
      <div style={{
        width: "40px", height: "3px",
        background: "linear-gradient(90deg, var(--accent), var(--accent2))",
        borderRadius: "2px",
        marginBottom: "2.5rem",
      }} />

      {/* Images */}
      <div className="img-grid-2">
        {["/research/robotic-skin-1.png", "/research/robotic-skin-2.png"].map((src, i) => (
          <div key={i} style={{
            position: "relative", aspectRatio: "4/3",
            borderRadius: "var(--radius)",
            overflow: "hidden",
            border: "1px solid var(--border)",
          }}>
            <Image src={src} alt={`Robotic skin ${i + 1}`} fill style={{ objectFit: "cover" }} />
          </div>
        ))}
      </div>

      {/* Research topics */}
      <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1.2rem", color: "var(--text)" }}>
        Research Topics
      </h2>
      <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {topics.map((topic, i) => (
          <li key={i} style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "0.75rem",
            padding: "0.85rem 1rem",
            background: "var(--bg-alt)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            fontSize: "0.9rem",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
          }}>
            <span style={{
              flexShrink: 0,
              marginTop: "0.1rem",
              width: "22px", height: "22px",
              borderRadius: "50%",
              background: "var(--accent-soft)",
              color: "var(--accent)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "0.72rem", fontWeight: 700,
            }}>
              {i + 1}
            </span>
            {topic}
          </li>
        ))}
      </ul>

      {/* Back link */}
      <div style={{ marginTop: "3rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border)" }}>
        <Link href="/research" style={{
          display: "inline-flex", alignItems: "center", gap: "0.4rem",
          fontSize: "0.85rem", color: "var(--accent)", fontWeight: 500,
        }}>
          ← Back to Research
        </Link>
      </div>

    </div>
  );
}
