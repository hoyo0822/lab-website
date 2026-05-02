import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Soft Robot – BIRD Lab @ KIST" };

const topics = [
  {
    title: "Large-scale Deployable Soft Robot",
    image: "/research/soft-robot-1.png",
    imageLeft: true,
    bullets: [
      "A novel soft robot design framework inspired by origami, kirigami, and natural lifeforms",
      "Dual-morphing stretchable origami for giant shape morphing",
      "Reconfigurable modular soft machines with variable length and stiffness changes",
      "Vine robots with self-stiffening mechanisms for 10-meter-scale robotic adaptive construction",
    ],
  },
  {
    title: "Underwater Swimming Carpet",
    image: "/research/soft-robot-2.png",
    imageLeft: false,
    bullets: [
      "A paradigm shift in the underwater locomotion principle for 2D sheet-type underwater robots",
      "Active flutter dynamics and underwater turbulence control",
      "Deployable, meter-scale swimming carpet for environmental remediation (e.g., oil skimming, plastic debris)",
      "Robotic offshore green energy harvesting",
    ],
  },
];

export default function SoftRobotPage() {
  return (
    <div style={{ maxWidth: "960px", margin: "0 auto", padding: "3rem 2rem" }}>
      <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "1.8rem" }}>
        <Link href="/research" style={{ color: "var(--accent)" }}>Research</Link>
        <span style={{ margin: "0 0.4rem" }}>›</span>
        <span>Soft Robot</span>
      </div>
      <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "0.4rem", color: "var(--text)" }}>Soft Robot</h1>
      <div style={{ width: "40px", height: "3px", background: "linear-gradient(90deg, var(--accent), var(--accent2))", borderRadius: "2px", marginBottom: "3rem" }} />

      {topics.map((t, i) => (
        <div key={i}>
          <div className="research-topic-flex" style={{ display: "flex", gap: "2.5rem", alignItems: "flex-start", flexWrap: "wrap", flexDirection: t.imageLeft ? "row" : "row-reverse", marginBottom: "2.5rem" }}>
            <div style={{ flex: "0 0 300px", maxWidth: "340px" }}>
              <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", borderRadius: "var(--radius)", overflow: "hidden", border: "1px solid var(--border)" }}>
                <Image src={t.image} alt={t.title} fill sizes="(max-width: 600px) 100vw, 340px" style={{ objectFit: "cover" }} />
              </div>
            </div>
            <div style={{ flex: 1, minWidth: "260px" }}>
              <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text)", marginBottom: "1rem" }}>{t.title}</h2>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                {t.bullets.map((b, j) => (
                  <li key={j} style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.65, display: "flex", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--accent)", marginRight: "0.5rem", flexShrink: 0 }}>•</span><span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {i < topics.length - 1 && <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "0 0 2.5rem" }} />}
        </div>
      ))}

      <div style={{ marginTop: "3rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border)" }}>
        <Link href="/research" style={{ fontSize: "0.85rem", color: "var(--accent)", fontWeight: 500 }}>← Back to Research</Link>
      </div>
    </div>
  );
}
