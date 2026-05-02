import galleryData from "../../../data/gallery.json";
import Carousel from "../../components/Carousel";

export default function GalleryPage() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 2rem" }}>

      <h1 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "0.4rem", color: "var(--text)" }}>
        Gallery
      </h1>
      <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        Lab events, conferences, and memories
      </p>
      <hr style={{ border: "none", borderTop: "1px solid var(--border)", marginBottom: "2.5rem" }} />

      {galleryData.map((yearGroup) => {
        const eventsWithPhotos = yearGroup.events.filter((e) => e.photos && e.photos.length > 0);
        if (eventsWithPhotos.length === 0) return null;

        return (
          <section key={yearGroup.year} style={{ marginBottom: "4rem" }}>
            {/* Year badge */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
              <span style={{
                fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em",
                color: "var(--accent)", background: "var(--accent-soft)",
                padding: "4px 12px", borderRadius: "20px",
                border: "1px solid var(--accent)",
              }}>
                {yearGroup.year}
              </span>
              <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
            </div>

            {/* Events grid */}
            <div className="gallery-events-grid" style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(500px, 100%), 1fr))",
              gap: "1.5rem",
            }}>
              {eventsWithPhotos.map((event) => (
                <div key={event.id} className="gallery-card">
                  {/* Carousel */}
                  <Carousel photos={event.photos} caption={event.caption} />
                  {/* Caption */}
                  <div style={{ padding: "0.85rem 1rem" }}>
                    <p style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--text)", marginBottom: "0.2rem", lineHeight: 1.4 }}>
                      {event.caption}
                    </p>
                    <p style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
                      {event.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}

    </div>
  );
}
