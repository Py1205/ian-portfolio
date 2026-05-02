"use client";

import { useState, useEffect, useCallback } from "react";
import { siteConfig, navLinks } from "@/lib/data";

export default function MobileMenu({ activeHref }: { activeHref: string }) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setVisible(true));
    });
  }, []);

  const handleClose = useCallback(() => {
    setVisible(false);
    setTimeout(() => setOpen(false), 300);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Hamburger button */}
      <button
        aria-label="Menu"
        className="flex items-center justify-center"
        style={{ width: "40px", height: "40px" }}
        onClick={handleOpen}
      >
        <div className="flex flex-col gap-[5px]">
          <span
            className="block h-[2px] w-6 origin-center transition-transform duration-300"
            style={{
              backgroundColor: "var(--color-text-strong)",
              transform: open ? "translateY(3.5px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block h-[2px] w-6 origin-center transition-transform duration-300"
            style={{
              backgroundColor: "var(--color-text-strong)",
              transform: open ? "translateY(-3.5px) rotate(-45deg)" : "none",
            }}
          />
        </div>
      </button>

      {/* Full-page overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[200] transition-opacity duration-300"
          style={{
            backgroundColor: "var(--color-bg)",
            opacity: visible ? 1 : 0,
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between"
            style={{
              paddingLeft: "var(--grid-margin)",
              paddingRight: "var(--grid-margin)",
              paddingTop: "var(--header-pad)",
              paddingBottom: "var(--header-pad)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontFeatureSettings: '"liga" 1, "ss02" 1, "ss03" 1, "ss04" 1, "ss06" 1',
                fontSize: "var(--font-size-name)",
                fontWeight: 600,
                color: "var(--color-text-strong)",
                textTransform: "uppercase",
              }}
            >
              {siteConfig.name}
            </p>
            <button
              aria-label="Close menu"
              className="flex items-center justify-center"
              style={{ width: "40px", height: "40px" }}
              onClick={handleClose}
            >
              <div className="flex flex-col gap-[5px]">
                <span
                  className="block h-[2px] w-6 origin-center"
                  style={{
                    backgroundColor: "var(--color-text-strong)",
                    transform: "translateY(3.5px) rotate(45deg)",
                  }}
                />
                <span
                  className="block h-[2px] w-6 origin-center"
                  style={{
                    backgroundColor: "var(--color-text-strong)",
                    transform: "translateY(-3.5px) rotate(-45deg)",
                  }}
                />
              </div>
            </button>
          </div>

          {/* Nav items */}
          <nav
            className="flex flex-col gap-1 text-base"
            style={{
              paddingLeft: "var(--grid-margin)",
              paddingTop: "var(--nav-links-top)",
            }}
          >
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleClose}
                className={`w-fit transition-all duration-300 ${link.href === activeHref ? "nav-link-active" : "nav-link"}`}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "none" : "translateY(-8px)",
                  transitionDelay: visible
                    ? `${160 + i * 20}ms`
                    : `${(navLinks.length - 1 - i) * 20}ms`,
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
