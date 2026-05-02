"use client";

import { useState } from "react";

export default function Expandable({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          fontSize: "16px",
          fontWeight: 500,
          color: "var(--color-text)",
          background: "none",
          border: "none",
          borderBottom: "0.5px solid var(--color-border-strong)",
          padding: "12px 0",
          width: "100%",
          textAlign: "left",
          cursor: "pointer",
        }}
      >
        <span style={{ flex: 1 }}>{label}</span>
        <span
          style={{
            display: "inline-block",
            transition: "transform 300ms ease",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            fontSize: "14px",
            color: "var(--color-text-muted)",
          }}
        >
          ↓
        </span>
      </button>
      {open && (
        <div style={{ paddingTop: "24px", paddingBottom: "8px" }}>
          {children}
        </div>
      )}
    </div>
  );
}
