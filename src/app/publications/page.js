import pubData from "../../../data/publications.json";
import Image from "next/image";

function renderAuthors(authorsStr, piName) {
  if (!piName) return authorsStr;
  const tokens = authorsStr.split(", ");
  return tokens.map((token, i) => {
    const isBold = token.startsWith(piName);
    return (
      <span key={i}>
        {isBold ? <strong><u>{token}</u></strong> : token}
        {i < tokens.length - 1 ? ", " : ""}
      </span>
    );
  });
}

export default function PublicationsPage() {
  const { googleScholar, covers, list } = pubData;

  return (
    <>
      {/* ── Journal Covers — full width ── */}
      <div style={{
        width: "100%",
        overflowX: "auto",
        paddingBottom: "6px",
        borderBottom: "1px solid var(--border)",
      }}>
        <div style={{
          display: "flex",
          gap: "0",
          minWidth: "max-content",
        }}>
          {covers.map((cover) => (
            <div key={cover.id} style={{
              flex: "0 0 auto",
              width: "130px",
              position: "relative",
              height: "195px",
              overflow: "hidden",
            }} className="cover-item">
              <Image src={cover.image} alt={cover.journal} fill sizes="130px" style={{ objectFit: "cover" }} />
            </div>
          ))}
        </div>
      </div>

      {/* ── Publication List ── */}
      <div style={{ maxWidth: "920px", margin: "0 auto", padding: "2.5rem 2rem 4rem" }}>

        <h1 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "0.4rem", color: "var(--text)" }}>
          Publications
        </h1>
        <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
          Please check for the most up-to-date list:{" "}
          <a href={googleScholar} target="_blank" rel="noopener noreferrer"
            style={{ color: "var(--accent)", fontWeight: 500 }}>
            Google Scholar ↗
          </a>
        </p>
        <hr style={{ border: "none", borderTop: "1px solid var(--border)", marginBottom: "2rem" }} />

        <div style={{ display: "flex", flexDirection: "column" }}>
          {list.map((pub) => (
            <div key={pub.id} className="pub-item">
              <p style={{ marginBottom: "0.3rem" }}>
                <span style={{ color: "var(--accent)", fontWeight: 400, fontSize: "0.92rem", lineHeight: 1.5 }}>
                  [{pub.id}] {pub.title}
                </span>
              </p>
              <p style={{ fontSize: "0.84rem", color: "var(--text)", marginBottom: "0.2rem" }}>
                {renderAuthors(pub.authors, pub.pi)}
              </p>
              <p style={{ fontSize: "0.84rem" }}>
                <strong style={{ color: pub.venueColor || "var(--red)", fontWeight: 700 }}>{pub.venue}</strong>
                {pub.details && <span style={{ color: "var(--text-muted)", fontWeight: 300 }}>{" "}{pub.details}</span>}
                {pub.note && (
                  <span style={{ color: "var(--text-secondary)", marginLeft: "0.4rem", fontStyle: "italic", fontWeight: 300 }}>
                    {pub.note}
                  </span>
                )}
                {pub.pdf && (
                  <a href={pub.pdf} target="_blank" rel="noopener noreferrer"
                    style={{ marginLeft: "0.5rem", color: "var(--accent2)", fontWeight: 500 }}>
                    [pdf]
                  </a>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
