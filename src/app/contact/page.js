export default function ContactPage() {
  return (
    <div style={{ maxWidth: "860px", margin: "0 auto", padding: "3rem 2rem" }}>

      <h1 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "0.4rem", color: "var(--text)" }}>
        Contact
      </h1>
      <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        Get in touch with BIRD Lab
      </p>
      <hr style={{ border: "none", borderTop: "1px solid var(--border)", marginBottom: "2rem" }} />

      <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap", alignItems: "flex-start" }}>

        {/* Contact info */}
        <div style={{
          flex: 1, minWidth: "260px",
          background: "var(--bg-alt)", border: "1px solid var(--border)",
          borderRadius: "8px", padding: "1.8rem 2rem",
        }}>
          <h2 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "1rem", color: "var(--text)" }}>
            Junghwan Byun, Ph.D
          </h2>
          <div style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 2.1 }}>
            <p>Electronic and Hybrid Materials Research Center</p>
            <p>Korea Institute of Science and Technology (KIST)</p>
            <p>Laboratory Bldg L4, Rm L4345</p>
            <p>5, Hwarang-ro 14-gil</p>
            <p>Seongbuk-gu Seoul 02792</p>
            <p>Republic of Korea</p>
          </div>
          <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "1rem 0" }} />
          <div style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 2 }}>
            <p>
              <strong style={{ color: "var(--text)" }}>Email:</strong>{" "}
              <a href="mailto:junghwan@kist.re.kr" style={{ color: "var(--accent)" }}>
                junghwan@kist.re.kr
              </a>
            </p>
            <p>
              <strong style={{ color: "var(--text)" }}>Phone:</strong> +82-2-958-5357
            </p>
          </div>
        </div>

        {/* Map */}
        <div style={{ flex: 1, minWidth: "280px" }}>
          <div style={{
            borderRadius: "8px", overflow: "hidden",
            border: "1px solid var(--border)",
            boxShadow: "var(--shadow-sm)",
          }}>
            <iframe
              title="KIST Location"
              src="https://maps.google.com/maps?q=Korea+Institute+of+Science+and+Technology+KIST+Seoul&output=embed"
              width="100%"
              height="320"
              style={{ border: "none", display: "block" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "0.5rem", textAlign: "center" }}>
            Hwarang-ro 14-gil 5, Seongbuk-gu, Seoul (02792)
          </p>
        </div>

      </div>

    </div>
  );
}
