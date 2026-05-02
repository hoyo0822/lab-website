'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const height = scrolled ? "68px" : "90px";
  const logoH  = scrolled ? "46px" : "62px";

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 100,
      transition: "height 0.3s ease, box-shadow 0.3s ease",
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 1.25rem",
        height,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "height 0.3s ease",
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <Image
            src="/lab-logo1.png"
            alt="BIRD Lab logo"
            width={160}
            height={62}
            style={{
              objectFit: "contain",
              height: logoH,
              width: "auto",
              transition: "height 0.3s ease",
            }}
            priority
          />
        </Link>
        <NavLinks />
      </div>
    </header>
  );
}
