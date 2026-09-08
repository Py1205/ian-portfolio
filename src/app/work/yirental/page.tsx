import BackButton from "@/components/BackButton";
import ThemeToggle from "@/components/ThemeToggle";
import CaseStudyNav from "@/components/CaseStudyNav";
import ProjectPagination from "@/components/ProjectPagination";

const NAV_SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "the-problem", label: "The Problem" },
  { id: "the-reframe", label: "The Reframe" },
  { id: "the-design", label: "The Design" },
  { id: "outcome", label: "Outcome" },
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

export default function YirentalPage() {
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
          <p style={labelStyle}>Research-led redesign</p>
          <h1
            style={{
              fontSize: "var(--font-size-hero)",
              lineHeight: "var(--line-height-tight)",
              letterSpacing: "-0.02em",
              fontWeight: 500,
              color: "var(--color-text-strong)",
            }}
          >
            Reframing rental search around user intent.
          </h1>

          <p style={{ fontSize: "20px", lineHeight: 1.4, color: "var(--color-label)", paddingTop: "32px" }}>
            A falling satisfaction score pushed us to re-learn who we were designing for. We found two distinct search intents. That distinction shaped every design decision that came after.
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
              { label: "Role", value: "Product Designer (sole designer)" },
              { label: "Timeline", value: "Jun 2020 – Sep 2020" },
              { label: "Team", value: "PM, Developer, UX Researcher" },
              { label: "Skills", value: "User research, IA, interaction design, usability testing" },
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
          {imgPlaceholder("Hero image — final Yirental mobile search and filter screens side by side")}
        </div>

        {/* ── Divider ── */}
        <div className="content-col-narrow" style={{ height: "var(--divider-width)", background: "var(--color-border)" }} />

        {/* ── The Problem ── */}
        <section id="the-problem" className="content-col-narrow" style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}>
          <p style={labelStyle}>The Problem</p>
          <h2 style={sectionHeadingStyle}>The problem, in users&apos; words</h2>

          <p style={keyInsightStyle}>
            Satisfaction dropped to 2.8 / 5. Eighteen interviews later, we understood why.
          </p>

          <p style={bodyStyle}>
            As Yirental grew, satisfaction dropped to <strong>2.8 / 5</strong> (n=108). I ran 18 user interviews to understand why. Three compounding issues surfaced: a search flow that forced users to change location and service type in separate steps, filters too shallow for specific needs, and a UI dense enough to hide the listings themselves.
          </p>

          <div style={{ paddingTop: "32px" }}>
            {imgPlaceholder("Previous experience — two-phone screenshot with three numbered pain-point callouts. Caption: \"Three issues that compounded into a 2.8/5 satisfaction score.\"")}
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="content-col-narrow" style={{ height: "var(--divider-width)", background: "var(--color-border)" }} />

        {/* ── The Reframe ── */}
        <section id="the-reframe" className="content-col-narrow" style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}>
          <p style={labelStyle}>The Reframe</p>
          <h2 style={sectionHeadingStyle}>Exploratory and navigational: two intents on one screen</h2>

          <p style={bodyStyle}>
            We&apos;d been designing for &ldquo;a user searching.&rdquo; The 108-person survey showed us there were two of them, and they wanted almost opposite things from the same screen.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", paddingTop: "16px", paddingBottom: "16px" }}>
            <div style={{ padding: "24px", background: "var(--color-toggle-bg)", borderRadius: "var(--radius-sm)" }}>
              <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-text-muted)", paddingBottom: "10px" }}>
                Exploratory
              </p>
              <p style={{ fontSize: "16px", color: "var(--color-text)", lineHeight: 1.6 }}>
                Had a rough idea. Wanted to clarify it by browsing.
              </p>
            </div>
            <div style={{ padding: "24px", background: "var(--color-toggle-bg)", borderRadius: "var(--radius-sm)" }}>
              <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-text-muted)", paddingBottom: "10px" }}>
                Navigational
              </p>
              <p style={{ fontSize: "16px", color: "var(--color-text)", lineHeight: 1.6 }}>
                Knew exactly what they wanted. Needed to reach it fast.
              </p>
            </div>
          </div>

          <p style={bodyStyle}>
            The previous flow served neither: it was optimized for a single generic &ldquo;search,&rdquo; which meant every user paid a usability tax.
          </p>

          <p style={{ ...bodyStyle, paddingBottom: 0 }}>
            This split became the evaluation criterion for every subsequent design decision: <em>does this serve exploratory, navigational, or both?</em>
          </p>

          <div style={{ paddingTop: "32px" }}>
            {imgPlaceholder("Exploratory / Navigational — two-icon diagram with intent descriptions")}
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="content-col-narrow" style={{ height: "var(--divider-width)", background: "var(--color-border)" }} />

        {/* ── The Design ── */}
        <section id="the-design" className="content-col-narrow" style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}>
          <p style={labelStyle}>The Design</p>
          <h2 style={sectionHeadingStyle}>How the reframe showed up in the design</h2>

          <p style={bodyStyle}>
            Rather than walk through every screen, three decisions best illustrate how the intent framework drove the work.
          </p>

          <p style={subHeadingStyle}>Search flow</p>
          <p style={bodyStyle}>
            Replaced a single overloaded search bar with six entry paths. Exploratory users browse; navigational users tap straight into a category. Same surface, two valid paths.
          </p>

          <p style={subHeadingStyle}>Filters</p>
          <p style={bodyStyle}>
            Expanded from a handful of basics to 10+ categories and 40+ items, then ordered by frequency of use so navigational users reach their filter in seconds without overwhelming exploratory ones.
          </p>

          <p style={subHeadingStyle}>UI</p>
          <p style={bodyStyle}>
            Lowered information density across the flow, emphasized hierarchy, and replaced generic icons with a custom set aligned to the visual guideline.
          </p>

          <div style={{ paddingTop: "32px" }}>
            {imgPlaceholder("Final mobile search entry screen (\"Explore Seattle\") and final filter screen (\"More filters\") side by side. Caption: \"Two interfaces, two intents — one consistent system.\"")}
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="content-col-narrow" style={{ height: "var(--divider-width)", background: "var(--color-border)" }} />

        {/* ── Outcome ── */}
        <section id="outcome" className="content-col-narrow" style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}>
          <p style={labelStyle}>Outcome</p>
          <h2 style={sectionHeadingStyle}>Satisfaction 2.8 → 4.7</h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", paddingTop: "8px" }}>
            {[
              { number: "2.8 → 4.7", desc: "Satisfaction score, same survey instrument, three months post-launch (n=136)" },
              { number: "Nov 29, 2020", desc: "Shipped to production" },
            ].map(({ number, desc }) => (
              <div
                key={number}
                style={{ background: "var(--color-toggle-bg)", borderRadius: "var(--radius-sm)", padding: "28px 24px" }}
              >
                <p style={{ fontSize: "28px", fontWeight: 600, letterSpacing: "-0.02em", color: "var(--color-text-strong)", paddingBottom: "8px" }}>
                  {number}
                </p>
                <p style={{ fontSize: "14px", color: "var(--color-text-muted)", lineHeight: 1.5 }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>

          <p style={{ ...bodyStyle, paddingTop: "32px", paddingBottom: 0 }}>
            The redesign also informed the subsequent web app search experience, which I partnered with the web team to align.
          </p>
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
            Most of the design work in this project happened before any screens were drawn. This case study is about the reframe that made the rest of it possible.
          </p>
        </section>

        {/* ── Divider ── */}
        <div className="content-col-narrow" style={{ height: "var(--divider-width)", background: "var(--color-border)" }} />

        {/* ── Prev / Next ── */}
        <ProjectPagination currentSlug="yirental" />

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
