import BackButton from "@/components/BackButton";
import ThemeToggle from "@/components/ThemeToggle";
import CaseStudyNav from "@/components/CaseStudyNav";
import ProjectPagination from "@/components/ProjectPagination";

const NAV_SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "the-scope", label: "The Scope" },
  { id: "zooming-in", label: "Zooming In" },
];

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

const subHeadingStyle: React.CSSProperties = {
  fontSize: "18px",
  fontWeight: 500,
  color: "var(--color-text-strong)",
  paddingBottom: "12px",
  paddingTop: "40px",
};

const bodyStyle: React.CSSProperties = {
  fontSize: "17px",
  lineHeight: 1.7,
  color: "var(--color-text)",
  paddingBottom: "16px",
};

const keyInsightStyle: React.CSSProperties = {
  fontSize: "22px",
  fontWeight: 500,
  lineHeight: 1.4,
  letterSpacing: "-0.01em",
  color: "var(--color-text-strong)",
  paddingBottom: "24px",
};

const imgPlaceholder = (caption: string) => (
  <div
    style={{
      aspectRatio: "16 / 9",
      background: "var(--color-border-strong)",
      borderRadius: "var(--radius-sm)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px",
    }}
  >
    <p style={{ fontSize: "13px", color: "var(--color-text-muted)", textAlign: "center", fontStyle: "italic" }}>
      {caption}
    </p>
  </div>
);

export default function PhonewagonPage() {
  return (
    <>
      <div className="fixed z-[300]" style={{ top: "var(--nav-top)", left: "var(--grid-margin)" }}>
        <BackButton />
      </div>
      <div className="fixed z-[300]" style={{ bottom: "var(--nav-top)", left: "var(--grid-margin)" }}>
        <ThemeToggle />
      </div>
      <CaseStudyNav sections={NAV_SECTIONS} />

      <main className="page-grid content-col-narrow">

        {/* ── Hero ── */}
        <section
          id="overview"
          className="content-col-narrow"
          style={{ paddingTop: "var(--hero-top)", paddingBottom: "var(--section-gap)" }}
        >
          <p style={labelStyle}>Design system craft</p>
          <h1
            style={{
              fontSize: "var(--font-size-hero)",
              lineHeight: "var(--line-height-tight)",
              letterSpacing: "-0.02em",
              fontWeight: 500,
              color: "var(--color-text-strong)",
            }}
          >
            A design system defensible at the pixel level.
          </h1>

          <p style={{ fontSize: "20px", lineHeight: 1.4, color: "var(--color-label)", paddingTop: "32px" }}>
            Building a cross-platform SaaS design system from audit to adoption, then zooming into a single component to show the rigor behind it.
          </p>

          {/* Meta */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "24px",
              paddingTop: "40px",
              marginTop: "40px",
              borderTop: "0.5px solid var(--color-border-strong)",
            }}
          >
            {[
              { label: "Role", value: "Product Designer" },
              { label: "Timeline", value: "Nov 2020 – Feb 2021" },
              { label: "Team", value: "1 PM, 2 Product Designers, 1 Developer" },
              { label: "Skills", value: "Design systems, component architecture, interaction specs, documentation" },
            ].map(({ label, value }) => (
              <div key={label}>
                <p style={{ fontSize: "14px", fontWeight: 400, fontFamily: "var(--font-geist-mono), monospace", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-text-muted)", paddingBottom: "8px" }}>
                  {label}
                </p>
                <p style={bodyStyle}>
                  {value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Cover placeholder */}
        <div className="content-col-narrow">
          {imgPlaceholder("Hero image — Foundation + Website library overview")}
        </div>

        {/* ── Divider ── */}
        <div className="content-col-narrow" style={{ height: "var(--divider-width)", background: "var(--color-border)" }} />

        {/* ── The Scope ── */}
        <section id="the-scope" className="content-col-narrow" style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}>
          <p style={labelStyle}>The Scope</p>
          <h2 style={sectionHeadingStyle}>Two libraries, built from the ground up</h2>

          <p style={bodyStyle}>
            Phonewagon is a cross-platform SaaS application for tracking calls and texts tied to marketing campaigns. The product had grown faster than its UI vocabulary. Extraneous components, inconsistent patterns, no shared rules of use.
          </p>

          <p style={bodyStyle}>
            Over four months, the team and I defined core users and design principles, audited the existing app via interface inventory, consolidated redundant components and patterns, redesigned against the new foundation, documented usage rules, and rolled out two libraries.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", paddingTop: "16px", paddingBottom: "16px" }}>
            <div style={{ padding: "24px", background: "var(--color-toggle-bg)", borderRadius: "var(--radius-sm)" }}>
              <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-text-muted)", paddingBottom: "10px" }}>
                Foundation
              </p>
              <p style={{ fontSize: "16px", color: "var(--color-text)", lineHeight: 1.6 }}>
                Color, typography, spacing, icons, illustration, logo.
              </p>
            </div>
            <div style={{ padding: "24px", background: "var(--color-toggle-bg)", borderRadius: "var(--radius-sm)" }}>
              <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-text-muted)", paddingBottom: "10px" }}>
                Website
              </p>
              <p style={{ fontSize: "16px", color: "var(--color-text)", lineHeight: 1.6 }}>
                Button, avatar, badge, checkbox, dropdown, select, tab, table, and more.
              </p>
            </div>
          </div>

          <p style={{ ...bodyStyle, fontStyle: "italic", color: "var(--color-text-muted)" }}>
            Context: this was late 2020. shadcn/ui was still two years away, and the current ecosystem of ready-made SaaS component libraries didn&apos;t exist yet. We were building foundations from scratch.
          </p>

          <div style={{ paddingTop: "16px" }}>
            {imgPlaceholder("Library overview — Foundation + Website. Caption: \"Two shipped libraries, each with its own usage guidelines.\"")}
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="content-col-narrow" style={{ height: "var(--divider-width)", background: "var(--color-border)" }} />

        {/* ── Zooming In ── */}
        <section id="zooming-in" className="content-col-narrow" style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}>
          <p style={labelStyle}>Zooming In</p>
          <h2 style={sectionHeadingStyle}>One component, defended end to end</h2>

          <p style={keyInsightStyle}>
            The libraries are the deliverable. But the craft lives at the component level.
          </p>

          <p style={bodyStyle}>
            Here&apos;s one component, the <strong>chat message</strong>, walked through from anatomy to shape to color.
          </p>

          {/* Anatomy */}
          <p style={subHeadingStyle}>Anatomy</p>
          <p style={bodyStyle}>
            Five message types, 30+ states. We needed one structural pattern that held for all of them: <strong>avatar + time/lines + main body.</strong> The avatar lets agents identify who&apos;s speaking (chats can include customers and multiple teammates). The time/lines track which line a message came through, critical for a call-tracking product. The main body flexes across call, message, voicemail, browsing history, and search keywords, within a 40–380px width band, 16px internal padding, 24px external spacing, so the pattern holds across screen sizes without per-case overrides.
          </p>

          <div style={{ paddingTop: "16px" }}>
            {imgPlaceholder("Anatomy diagram — Avatar / Time and lines / Main body breakdown with explainer cards")}
          </div>

          {/* Readability */}
          <p style={subHeadingStyle}>Readability</p>
          <p style={bodyStyle}>
            Font size is 14px, derived from a 20-inch viewing distance and a 25° reading angle. The number has a reason.
          </p>

          <div style={{ paddingTop: "16px" }}>
            {imgPlaceholder("Eye-to-screen diagram — viewing distance and reading angle derivation")}
          </div>

          {/* Shape */}
          <p style={subHeadingStyle}>Shape</p>
          <p style={bodyStyle}>
            Three rounds of exploration with user feedback at each round. Small border radius felt flat against the rest of the UI. Tailed bubbles with large radius felt playful but visually dated. Final: tailless with a large radius and a smaller radius in the corner near the avatar. Visually anchored, functionally clean.
          </p>

          <div style={{ paddingTop: "16px" }}>
            {imgPlaceholder("Shape exploration — three-option comparison grid")}
          </div>

          {/* Color */}
          <p style={subHeadingStyle}>Color</p>
          <p style={bodyStyle}>
            Started with five color groups signaling different identities. Testing showed users couldn&apos;t parse that much encoded information quickly. The screen felt busy and signal got lost. Collapsed to three, because the avatar was already doing the &ldquo;who&rdquo; work. The color&apos;s job was tracking messages and separating internal notes from customer-facing replies. Nothing more.
          </p>

          <div style={{ paddingTop: "16px" }}>
            {imgPlaceholder("Color iteration — 5 groups vs. 3 groups with reasoning cards")}
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="content-col-narrow" style={{ height: "var(--divider-width)", background: "var(--color-border)" }} />

        {/* ── Why this project ── */}
        <section
          className="content-col-narrow"
          style={{ padding: "48px", background: "var(--color-toggle-bg)", borderRadius: "var(--radius-sm)" }}
        >
          <p style={{ ...labelStyle, paddingBottom: "24px" }}>Why this project is in my portfolio</p>
          <p style={{ fontSize: "20px", fontWeight: 500, lineHeight: 1.6, color: "var(--color-text)", letterSpacing: "-0.01em" }}>
            This project is about the kind of system work that lives at the pixel level: defending a 14px font size, a three-group color logic, a tailless bubble with asymmetric radius. The kind that takes craft.
          </p>
        </section>

        {/* ── Divider ── */}
        <div className="content-col-narrow" style={{ height: "var(--divider-width)", background: "var(--color-border)" }} />

        {/* ── Prev / Next ── */}
        <ProjectPagination currentSlug="phonewagon" />

        {/* ── Divider ── */}
        <div className="content-col-narrow" style={{ height: "var(--divider-width)", background: "var(--color-border)" }} />

        {/* Footer */}
        <footer
          className="text-base content-col-narrow"
          style={{ paddingTop: "var(--header-pad)", paddingBottom: "var(--grid-margin)", color: "var(--color-text-muted)" }}
        >
          <a href="/work" className="hover:opacity-60 transition-opacity" style={{ color: "var(--color-text-muted)" }}>
            ← Back to work
          </a>
        </footer>

      </main>
    </>
  );
}
