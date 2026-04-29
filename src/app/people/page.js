import data from "../../../data/people.json";
import Image from "next/image";
import Link from "next/link";

function MemberGrid({ members }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(148px, 1fr))",
      gap: "1.6rem",
    }}>
      {members.map((m) => (
        <div key={m.id} style={{ textAlign: "center" }}>
          <div className="member-photo" style={{
            position: "relative", width: "100%", aspectRatio: "3 / 4", marginBottom: "0.65rem",
          }}>
            <Image src={m.photo} alt={m.name} fill style={{ objectFit: "cover", objectPosition: "center top" }} />
          </div>
          <p style={{ fontWeight: 600, fontSize: "0.84rem", color: "var(--text)", marginBottom: "0.15rem", lineHeight: 1.3 }}>
            {m.name}
          </p>
          <p style={{ fontSize: "0.76rem", color: "var(--text-muted)", fontStyle: "italic" }}>
            {m.role}
          </p>
        </div>
      ))}
    </div>
  );
}

function SubSection({ title, members }) {
  if (!members || members.length === 0) return null;
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <h3 style={{
        fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em",
        textTransform: "uppercase", color: "var(--text-muted)",
        marginBottom: "1.4rem", paddingBottom: "0.4rem",
        borderBottom: "1px solid var(--border)",
      }}>
        {title}
      </h3>
      <MemberGrid members={members} />
    </div>
  );
}

export default function PeoplePage() {
  const { pi, members, alumni } = data;

  const postdocs   = members.filter(m => m.category === "postdoc");
  const grads      = members.filter(m => m.category === "phd");
  const interns    = members.filter(m => m.category === "intern");

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "3rem 2rem" }}>

      <h1 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "0.4rem", color: "var(--text)" }}>People</h1>
      <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        The minds behind BIRD Lab
      </p>
      <hr style={{ border: "none", borderTop: "1px solid var(--border)", marginBottom: "2.5rem" }} />

      {/* PI Section */}
      <section style={{
        display: "flex", gap: "3rem", alignItems: "flex-start",
        marginBottom: "3.5rem", flexWrap: "wrap",
        background: "var(--bg-alt)", borderRadius: "8px",
        border: "1px solid var(--border)", padding: "2rem",
      }}>
        <div style={{ flexShrink: 0, position: "relative", width: "190px", height: "250px", borderRadius: "4px", overflow: "hidden" }}>
          <Image src={pi.photo} alt={pi.name} fill style={{ objectFit: "cover", objectPosition: "center top" }} />
        </div>
        <div style={{ flex: 1, minWidth: "240px" }}>
          <div style={{
            display: "inline-block", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em",
            color: "var(--accent)", background: "var(--accent-soft)", padding: "3px 10px",
            borderRadius: "20px", border: "1px solid var(--accent)", marginBottom: "0.8rem",
          }}>
            PRINCIPAL INVESTIGATOR
          </div>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.15rem" }}>
            {pi.name}
          </h2>
          <p style={{ fontStyle: "italic", color: "var(--text-muted)", marginBottom: "1rem", fontSize: "0.9rem" }}>
            {pi.role}
          </p>
          <div style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 2 }}>
            <p>{pi.institution1}</p>
            <p>{pi.institution2}</p>
          </div>
          <div style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 2, marginTop: "0.6rem" }}>
            <p>Phone: {pi.phone}</p>
            <p>Email: <a href={`mailto:${pi.email}`} style={{ color: "var(--accent)" }}>{pi.email}</a></p>
            <p>Office: {pi.office}</p>
          </div>
          <div style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.7, marginTop: "0.4rem" }}>
            <p>{pi.address1}</p>
            <p>{pi.address2}</p>
          </div>
          <div style={{ marginTop: "1.1rem", display: "flex", gap: "1rem" }}>
            <Link href={pi.biography}
              style={{ fontSize: "0.85rem", color: "var(--accent2)", fontWeight: 500 }}>
              Biography →
            </Link>
            <a href={pi.googleScholar} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: "0.85rem", color: "var(--accent2)", fontWeight: 500 }}>
              Google Scholar ↗
            </a>
          </div>
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid var(--border)", marginBottom: "2.5rem" }} />

      {/* Lab Members — grouped by category */}
      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "2rem", color: "var(--text)" }}>
          Lab Members
        </h2>

        <SubSection title="Postdoctoral Associates &amp; Visiting Scientists" members={postdocs} />
        <SubSection title="Graduate Students" members={grads} />
        <SubSection title="Undergraduate Interns" members={interns} />
      </section>

      {/* Alumni */}
      {alumni && alumni.length > 0 && (
        <section style={{
          background: "var(--bg-alt)", border: "1px solid var(--border)",
          borderRadius: "8px", padding: "1.8rem 2rem",
        }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1.2rem", color: "var(--text)" }}>
            Alumni
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {alumni.map((a, i) => (
              <li key={a.id} style={{
                fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.9,
                padding: "0.5rem 0",
                borderBottom: i < alumni.length - 1 ? "1px solid var(--border)" : "none",
              }}>
                <span style={{ fontWeight: 600, color: "var(--text)" }}>{a.name}</span>
                <span style={{ marginLeft: "0.6rem", color: "var(--text-muted)" }}>— {a.period}</span>
                {a.current && (
                  <span style={{ color: "var(--text-secondary)" }}>
                    {" "}| Current: {a.current}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

    </div>
  );
}
