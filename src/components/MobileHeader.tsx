"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/data";
import MobileMenu from "./MobileMenu";

export default function MobileHeader({ activeHref }: { activeHref: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pill: React.CSSProperties = {
    borderRadius: "100px",
    boxShadow: scrolled ? "0 0 0 10px var(--color-toggle-bg)" : "none",
    transition: "box-shadow 300ms ease",
  };

  return (
    <header className="mobile-only mobile-header items-center justify-between">
      <a
        href="/"
        style={{
          ...pill,
          fontFamily: "var(--font-heading)",
          fontFeatureSettings: '"liga" 1, "ss02" 1, "ss03" 1, "ss04" 1, "ss06" 1',
          fontSize: "var(--font-size-name)",
          fontWeight: 600,
          color: "var(--color-text-strong)",
          textTransform: "uppercase",
        }}
      >
        {siteConfig.name}
      </a>
      <div style={{ ...pill }}>
        <MobileMenu activeHref={activeHref} />
      </div>
    </header>
  );
}
