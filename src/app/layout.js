import "./globals.css";
import NavLinks from "../components/NavLinks";
import { ThemeProvider } from "../components/ThemeProvider";
import Link from "next/link";
import lab from "../../data/lab.json";
import Image from "next/image";

export const metadata = {
  title: "BIRD Lab @ KIST",
  description: lab.description1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <ThemeProvider>

          {/* ── HEADER ── */}
          <header style={{ position: "sticky", top: 0, zIndex: 100 }}>
            <div style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "0 2rem",
              height: "68px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
              <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
                <Image
                  src="/lab-logo1.png"
                  alt="BIRD Lab logo"
                  width={160}
                  height={50}
                  style={{ objectFit: "contain", height: "46px", width: "auto" }}
                  priority
                />
              </Link>
              <NavLinks />
            </div>
          </header>

          {/* ── MAIN ── */}
          <main className="page-enter" style={{ flex: 1 }}>
            {children}
          </main>

          {/* ── FOOTER ── */}
          <footer style={{ padding: "2.5rem 2rem" }}>
            <div style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}>
              <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.85 }}>
                <p style={{ fontWeight: 700, color: "var(--text)", marginBottom: "0.2rem" }}>
                  BIRD Lab | Bio-Interactive Robot Design Laboratory
                </p>
                <p>{lab.addressLine1}</p>
                <p>{lab.addressLine2}</p>
                <p>
                  <strong>Tel:</strong> {lab.phone}&nbsp;&nbsp;|&nbsp;&nbsp;
                  <strong>E-mail:</strong>{" "}
                  <a href={`mailto:${lab.email}`} style={{ color: "var(--accent)" }}>{lab.email}</a>
                </p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                <Image src="/lab-logo1-orig.png" alt="BIRD Lab" width={120} height={40} style={{ objectFit: "contain", height: "38px", width: "auto" }} />
                <Image src="/kist-ci.png" alt="KIST" width={120} height={40} style={{ objectFit: "contain", height: "38px", width: "auto" }} />
              </div>
            </div>
            <div style={{ textAlign: "center", fontSize: "0.74rem", color: "var(--text-muted)", marginTop: "1.2rem" }}>
              ©{new Date().getFullYear()} {lab.copyright}. All rights reserved.
            </div>
          </footer>

        </ThemeProvider>
      </body>
    </html>
  );
}
