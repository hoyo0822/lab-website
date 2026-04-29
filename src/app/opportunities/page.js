import opportunities from "../../../data/opportunities.json";

export default function OpportunitiesPage() {
  return (
    <div style={{ maxWidth: "860px", margin: "0 auto", padding: "3rem 2rem" }}>

      <h1 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "0.4rem", color: "var(--text)" }}>
        Opportunities
      </h1>
      <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        Join the BIRD Lab
      </p>
      <hr style={{ border: "none", borderTop: "1px solid var(--border)", marginBottom: "2rem" }} />

      {/* Intro */}
      <div style={{
        background: "var(--accent-soft)",
        border: "1px solid var(--accent)",
        borderRadius: "8px",
        padding: "1.4rem 1.8rem",
        marginBottom: "2.5rem",
      }}>
        <p style={{ fontSize: "0.93rem", lineHeight: 1.85, color: "var(--text)" }}>
          {opportunities.intro}
        </p>
      </div>

      {/* Positions */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginBottom: "3rem" }}>
        {opportunities.positions.map((pos) => (
          <div key={pos.id} style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            overflow: "hidden",
          }}>
            {/* Header */}
            <div style={{
              background: "var(--accent)",
              padding: "0.8rem 1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
            }}>
              <span style={{
                fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.1em",
                color: "#fff", opacity: 0.8,
                background: "rgba(255,255,255,0.18)",
                padding: "2px 8px", borderRadius: "20px",
              }}>
                {pos.type.toUpperCase()}
              </span>
              <h2 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#fff" }}>
                {pos.title}
              </h2>
            </div>
            {/* Body */}
            <div style={{ padding: "1.2rem 1.5rem" }}>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "0.9rem", lineHeight: 1.7 }}>
                {pos.description}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {pos.requirements.map((req, i) => (
                  <li key={i} style={{
                    fontSize: "0.87rem", color: "var(--text-secondary)",
                    lineHeight: 1.75, paddingLeft: "1rem", position: "relative",
                    marginBottom: "0.2rem",
                  }}>
                    <span style={{
                      position: "absolute", left: 0, top: "0.55em",
                      width: "5px", height: "5px", borderRadius: "50%",
                      background: "var(--accent)", display: "block",
                    }} />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div style={{
        background: "var(--bg-alt)",
        border: "1px solid var(--border)",
        borderRadius: "8px",
        padding: "1.6rem 2rem",
        textAlign: "center",
      }}>
        <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", marginBottom: "0.8rem" }}>
          Interested in joining BIRDlab? Send your CV and research interests to
        </p>
        <a href={`mailto:${opportunities.contactEmail}`}
          style={{
            display: "inline-block",
            fontSize: "1rem",
            fontWeight: 700,
            color: "var(--accent)",
            borderBottom: "2px solid var(--accent)",
            paddingBottom: "1px",
          }}>
          {opportunities.contactEmail}
        </a>
      </div>

    </div>
  );
}
