'use client';
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";

export default function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    let wasScrolled = false;
    const el = headerRef.current;
    if (!el) return;

    const update = () => {
      const isScrolled = window.scrollY > 40;
      if (isScrolled !== wasScrolled) {
        el.classList.toggle("hdr-scrolled", isScrolled);
        wasScrolled = isScrolled;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header ref={headerRef} className="site-header">
      <div className="site-header-inner">
        <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <Image
            src="/lab-logo1.png"
            alt="BIRD Lab logo"
            width={160}
            height={62}
            className="site-header-logo"
            style={{ objectFit: "contain", width: "auto" }}
            priority
          />
        </Link>
        <NavLinks />
      </div>
    </header>
  );
}
