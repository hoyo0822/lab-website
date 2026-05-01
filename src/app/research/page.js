import research from "../../../data/research.json";
import Image from "next/image";
import Link from "next/link";

export default function ResearchPage() {
  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "3rem 2rem" }}>

      <h1 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "0.4rem", color: "var(--text)" }}>
        Research Focus
      </h1>
      <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        Multidisciplinary science at the frontier of robotics and biology
      </p>
      <hr style={{ border: "none", borderTop: "1px solid var(--border)", marginBottom: "1.8rem" }} />

      <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "var(--text-secondary)", marginBottom: "0.8rem", maxWidth: "820px" }}>
        Our group is interested in designing and building <strong style={{ color: "var(--text)" }}>bio-interactive robot systems</strong> with
        yet-to-be conceived functionalities. The backbone of our research is highly multidisciplinary at the
        intersection between <strong style={{ color: "var(--text)" }}>Architected Materials, Soft Electronics, Soft Robotics,</strong> and{" "}
        <strong style={{ color: "var(--text)" }}>Biomedical Engineering</strong>. The goal of our group spans a broad range of future robot
        applications from meter-scale marine energy harvesting, human-scale skin computer and actuation system
        down to microscale biomedical robots for cutting-edge cancer therapeutics.
      </p>
      <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", marginBottom: "2.5rem" }}>
        {research.clickNote}
      </p>

      {/* Research image grid */}
      <div className="research-areas-grid">
        {research.areas.map((area) => (
          <Link key={area.id} href={area.link} className="research-area">
            <Image
              src={area.image}
              alt={area.title}
              fill
              sizes="(max-width: 600px) 50vw, 25vw"
              className="research-area-img"
              style={{ objectFit: "cover" }}
            />
            <div className="research-area-overlay" />
          </Link>
        ))}
      </div>

    </div>
  );
}
