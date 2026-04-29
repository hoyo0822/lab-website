import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Biomedical Microrobots – BIRD Lab @ KIST",
};

const topics = [
  "Targeted cargo delivery and therapeutics",
  "Microrobotic electrochemical interfacing for cuproptosis and ferroptosis",
  "Cuproptosis-induced immunogenic cell death and immune-mediated clearance",
  "In situ mapping of tumor stiffness and solid stress for investigating tumorigenesis, pathology, and metastasis",
  "Ingestible microrobots for sealing of gastrointestinal perforation and bleeding",
  "Ingestible, deployable microrobots for large-area tissue regeneration",
  "Imaging-free, learning-based \"gut-in-the-loop\" auto-navigation of the gastrointestinal tract for personalized therapy",
  "Design and locomotion control of microrobot swarm under physiological blood flow conditions",
  "3D ultrasound imaging-based real-time tracking and auto-navigation of microrobot swarm",
  "Microrobotic thrombolysis",
];

export default function MicrorobotsPage() {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "3rem 2rem" }}>

      {/* Breadcrumb */}
      <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "1.8rem" }}>
        <Link href="/research" style={{ color: "var(--accent)" }}>Research</Link>
        <span style={{ margin: "0 0.4rem" }}>›</span>
        <span>Biomedical Microrobots</span>
      </div>

      {/* Page header */}
      <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "0.4rem", color: "var(--text)" }}>
        Biomedical Microrobots
      </h1>
      <div style={{
        width: "40px", height: "3px",
        background: "linear-gradient(90deg, var(--accent), var(--accent2))",
        borderRadius: "2px",
        marginBottom: "2.5rem",
      }} />

      {/* Images */}
      <div className="img-grid-3">
        {["/research/microrobots-1.png", "/research/microrobots-2.png", "/research/microrobots-3.png"].map((src, i) => (
          <div key={i} style={{
            position: "relative", aspectRatio: "4/3",
            borderRadius: "var(--radius)",
            overflow: "hidden",
            border: "1px solid var(--border)",
          }}>
            <Image src={src} alt={`Biomedical microrobot ${i + 1}`} fill style={{ objectFit: "cover" }} />
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
