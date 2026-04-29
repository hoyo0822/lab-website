'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
import { useTheme } from "./ThemeProvider";

const mainItems = [
  { href: "/", label: "HOME", exact: true },
  { href: "/research", label: "RESEARCH" },
  { href: "/people", label: "PEOPLE" },
  { href: "/publications", label: "PUBLICATIONS" },
  { href: "/news", label: "NEWS" },
];

const extraItems = [
  { href: "/opportunities", label: "OPPORTUNITIES" },
  { href: "/gallery", label: "GALLERY" },
  { href: "/contact", label: "CONTACT" },
];

export default function NavLinks() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);
  const { theme, toggle } = useTheme();

  const isActive = (href, exact) =>
    exact ? pathname === href : pathname.startsWith(href);

  const isMoreActive = extraItems.some((item) => pathname.startsWith(item.href));

  const handleMouseEnter = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <ul className="nav-list">

      {/* ── Main items ── */}
      {mainItems.map(({ href, label, exact }) => (
        <li key={href}>
          <Link href={href} className={`nav-link${isActive(href, exact) ? " active" : ""}`}>
            {label}
          </Link>
        </li>
      ))}

      {/* ── Extra items (wide screen) ── */}
      {extraItems.map(({ href, label }) => (
        <li key={href} className="nav-extra">
          <Link href={href} className={`nav-link${isActive(href, false) ? " active" : ""}`}>
            {label}
          </Link>
        </li>
      ))}

      {/* ── MORE... dropdown (narrow screen) ── */}
      <li
        className="nav-more"
        style={{ position: "relative" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className={`nav-link${isMoreActive ? " active" : ""}`}>
          MORE...
        </button>
        {open && (
          <div
            className="nav-dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {extraItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{ fontWeight: isActive(href, false) ? 600 : 400 }}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </li>

      {/* ── Dark mode toggle ── */}
      <li style={{ marginLeft: "0.4rem" }}>
        <button
          className="theme-toggle"
          onClick={toggle}
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          title={theme === "dark" ? "Light mode" : "Dark mode"}
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </li>

    </ul>
  );
}
