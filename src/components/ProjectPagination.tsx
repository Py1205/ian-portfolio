import { projects } from "@/lib/data";

const labelStyle: React.CSSProperties = {
  fontSize: "14px",
  fontWeight: 400,
  fontFamily: "var(--font-geist-mono), monospace",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: "var(--color-text-muted)",
  paddingBottom: "8px",
};

const titleStyle: React.CSSProperties = {
  fontSize: "22px",
  fontFamily: "var(--font-heading)",
  fontWeight: 500,
  letterSpacing: "-0.01em",
  color: "var(--color-text-strong)",
  transition: "color 150ms ease",
};

export default function ProjectPagination({ currentSlug }: { currentSlug: string }) {
  const idx = projects.findIndex((p) => p.slug === currentSlug);
  if (idx === -1) return null;

  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  return (
    <section
      className="content-col-narrow"
      style={{
        paddingTop: "var(--section-gap)",
        paddingBottom: "var(--section-gap)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "24px",
      }}
    >
      <a href={prev.href} className="group block">
        <p style={labelStyle}>← Previous</p>
        <p className="card-title" style={titleStyle}>{prev.title}</p>
      </a>
      <a href={next.href} className="group block" style={{ textAlign: "right" }}>
        <p style={labelStyle}>Next →</p>
        <p className="card-title" style={titleStyle}>{next.title}</p>
      </a>
    </section>
  );
}
