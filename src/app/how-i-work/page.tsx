import { siteConfig } from "@/lib/data";
import ThemeToggle from "@/components/ThemeToggle";
import MobileHeader from "@/components/MobileHeader";
import Sidebar from "@/components/Sidebar";

const labelStyle: React.CSSProperties = {
  fontSize: "14px",
  fontWeight: 400,
  fontFamily: "var(--font-geist-mono), monospace",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: "var(--color-text-muted)",
  paddingBottom: "16px",
};

const sectionHeadingStyle: React.CSSProperties = {
  fontSize: "32px",
  fontWeight: 500,
  lineHeight: 1.2,
  letterSpacing: "-0.02em",
  color: "var(--color-text-strong)",
  paddingBottom: "24px",
};

const bodyStyle: React.CSSProperties = {
  fontSize: "17px",
  lineHeight: 1.7,
  color: "var(--color-text)",
  paddingBottom: "16px",
};

const principleTitleStyle: React.CSSProperties = {
  fontSize: "18px",
  fontWeight: 500,
  color: "var(--color-text-strong)",
  paddingBottom: "8px",
};

// ─── Replace the placeholder content below with your own ─────────────────────

const PRINCIPLES = [
  {
    title: "Principle one",
    body: "One or two sentences describing this principle. Keep it concrete. Tie it to a real working habit, not an abstraction.",
  },
  {
    title: "Principle two",
    body: "Same shape. Aim for something you'd actually defend in a 1:1 with a PM, not something that sounds good on a portfolio.",
  },
  {
    title: "Principle three",
    body: "Optional. Three to four principles is a sweet spot. More than that and the page starts to feel like a manifesto.",
  },
  {
    title: "Principle four",
    body: "Optional. Remove this card if you only want three.",
  },
];

const PROCESS_STEPS = [
  {
    label: "01",
    title: "Listen",
    body: "What I do first. Usually some mix of stakeholder conversations, reading the existing code, and getting the user research in front of me.",
  },
  {
    label: "02",
    title: "Frame",
    body: "How I move from raw inputs to a working problem statement. The framing decision is usually where the project's success or failure is locked in.",
  },
  {
    label: "03",
    title: "Make",
    body: "Sketch, prototype, ship. I tend to skip mid-fidelity mockups and go straight to coded prototypes when I can.",
  },
  {
    label: "04",
    title: "Test",
    body: "How I validate. Usability sessions, reviews, or production observation. I optimize for the cheapest signal that disconfirms the design.",
  },
  {
    label: "05",
    title: "Ship",
    body: "What handoff looks like with me. Increasingly: the design output is the code, merged directly into the engineering branch.",
  },
];

const TOOLS = [
  { category: "Design", items: "Figma, FigJam, Notion" },
  { category: "Code", items: "Next.js, React, Tailwind, TypeScript" },
  { category: "Prototyping", items: "Coded prototypes (preferred), Figma prototyping for early flows" },
  { category: "Research", items: "User interviews, usability testing, surveys, production analytics" },
];

// ──────────────────────────────────────────────────────────────────────────────

export default function HowIWork() {
  return (
    <>
      <div
        className="fixed z-[300]"
        style={{ bottom: "var(--nav-top)", left: "var(--grid-margin)" }}
      >
        <ThemeToggle />
      </div>

      <main className="page-grid content-col-narrow">
        <Sidebar activeHref="/how-i-work" />
        <MobileHeader activeHref="/how-i-work" />

        {/* ── Hero ── */}
        <section
          className="content-col-narrow"
          style={{ paddingTop: "var(--hero-top)", paddingBottom: "var(--section-gap)" }}
        >
          <p style={labelStyle}>How I work</p>
          <h1
            style={{
              fontSize: "var(--font-size-hero)",
              lineHeight: "var(--line-height-tight)",
              letterSpacing: "-0.02em",
              fontWeight: 500,
              color: "var(--color-text-strong)",
            }}
          >
            A short note on how I think about design.
          </h1>
          <p
            style={{
              fontSize: "20px",
              lineHeight: 1.4,
              color: "var(--color-label)",
              paddingTop: "32px",
              maxWidth: "640px",
            }}
          >
            One or two sentences of intro that frame the rest of the page. What
            this is, who it&apos;s for, and what someone reading it will walk
            away knowing about working with you.
          </p>
        </section>

        {/* ── Divider ── */}
        <div
          className="content-col-narrow"
          style={{ height: "var(--divider-width)", background: "var(--color-border)" }}
        />

        {/* ── Principles ── */}
        <section
          className="content-col-narrow"
          style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}
        >
          <p style={labelStyle}>Principles</p>
          <h2 style={sectionHeadingStyle}>What I believe about the work</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
              paddingTop: "8px",
            }}
          >
            {PRINCIPLES.map(({ title, body }) => (
              <div
                key={title}
                style={{
                  padding: "24px",
                  background: "var(--color-toggle-bg)",
                  borderRadius: "var(--radius-sm)",
                }}
              >
                <p style={principleTitleStyle}>{title}</p>
                <p style={{ fontSize: "16px", color: "var(--color-text)", lineHeight: 1.7 }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Divider ── */}
        <div
          className="content-col-narrow"
          style={{ height: "var(--divider-width)", background: "var(--color-border)" }}
        />

        {/* ── Process ── */}
        <section
          className="content-col-narrow"
          style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}
        >
          <p style={labelStyle}>Process</p>
          <h2 style={sectionHeadingStyle}>How a project usually moves</h2>

          <p style={{ ...bodyStyle, paddingBottom: "32px", maxWidth: "640px" }}>
            Optional intro paragraph for this section. Two sentences max.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {PROCESS_STEPS.map(({ label, title, body }) => (
              <div
                key={label}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                  gap: "24px",
                  paddingBottom: "24px",
                  borderBottom: "0.5px solid var(--color-border)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: "14px",
                    letterSpacing: "0.06em",
                    color: "var(--color-text-muted)",
                  }}
                >
                  {label}
                </p>
                <div>
                  <p style={principleTitleStyle}>{title}</p>
                  <p style={{ fontSize: "16px", color: "var(--color-text)", lineHeight: 1.7 }}>
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Divider ── */}
        <div
          className="content-col-narrow"
          style={{ height: "var(--divider-width)", background: "var(--color-border)" }}
        />

        {/* ── Tools ── */}
        <section
          className="content-col-narrow"
          style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}
        >
          <p style={labelStyle}>Tools</p>
          <h2 style={sectionHeadingStyle}>What I work with</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {TOOLS.map(({ category, items }) => (
              <div
                key={category}
                style={{
                  display: "grid",
                  gridTemplateColumns: "160px 1fr",
                  gap: "24px",
                  paddingBottom: "16px",
                  borderBottom: "0.5px solid var(--color-border)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: "14px",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "var(--color-text-muted)",
                  }}
                >
                  {category}
                </p>
                <p style={{ fontSize: "16px", color: "var(--color-text)", lineHeight: 1.7 }}>
                  {items}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Divider ── */}
        <div
          className="content-col-narrow"
          style={{ height: "var(--divider-width)", background: "var(--color-border)" }}
        />

        {/* ── Working with me ── */}
        <section
          className="content-col-narrow"
          style={{
            padding: "48px",
            background: "var(--color-toggle-bg)",
            borderRadius: "var(--radius-sm)",
          }}
        >
          <p style={{ ...labelStyle, paddingBottom: "24px" }}>Working with me</p>
          <p
            style={{
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: 1.6,
              color: "var(--color-text)",
              letterSpacing: "-0.01em",
              paddingBottom: "16px",
            }}
          >
            A short paragraph for someone who&apos;s thinking about hiring you
            or partnering with you. What do you need to do good work? What
            kinds of problems are you best at?
          </p>
          <p style={{ fontSize: "17px", color: "var(--color-text)", lineHeight: 1.7 }}>
            Optional second paragraph. Tone here can be a little warmer than
            the rest of the page.{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              style={{
                color: "var(--color-text-strong)",
                textDecoration: "underline",
              }}
            >
              Get in touch
            </a>
            .
          </p>
        </section>

        {/* ── Divider ── */}
        <div
          className="content-col-narrow"
          style={{ height: "var(--divider-width)", background: "var(--color-border)" }}
        />

        {/* ── Footer ── */}
        <footer
          className="text-base content-col-narrow"
          style={{
            paddingTop: "var(--header-pad)",
            paddingBottom: "var(--grid-margin)",
            color: "var(--color-text-muted)",
          }}
        >
          © {new Date().getFullYear()} {siteConfig.name}
        </footer>
      </main>
    </>
  );
}
