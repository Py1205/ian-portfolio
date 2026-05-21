import BackButton from "@/components/BackButton";
import ThemeToggle from "@/components/ThemeToggle";
import CaseStudyNav from "@/components/CaseStudyNav";
import ProjectPagination from "@/components/ProjectPagination";
import ScreenShowcase from "@/components/ScreenShowcase";
import ScreenCarousel from "@/components/ScreenCarousel";

const otherScreens = [
  {
    src: "/work/disputes360/reporting.avif",
    alt: "Disputes360 reporting dashboard with KPI cards and charts",
    caption: "Reporting. The home dashboard agents and managers land on — KPI cards, dispute volume over time, win-rate breakdowns by reason code.",
  },
  {
    src: "/work/disputes360/table-view.avif",
    alt: "Disputes360 cases list table view with status pills",
    caption: "Cases list. The all-cases table where agents triage. Each row is a case, with state, dispute reason, and amount surfaced inline.",
  },
  {
    src: "/work/disputes360/filter.avif",
    alt: "Disputes360 filter panel with dispute state and reason facets",
    caption: "Filter. A faceted filter panel for slicing the cases list. Selected filters mirror to the right rail so agents can build and save complex views.",
  },
  {
    src: "/work/disputes360/email-template.avif",
    alt: "Disputes360 email templating with variable picker",
    caption: "Email templating. Configurable cardholder communications keyed to case events, with a variable picker for case fields like dispute amount and program name.",
  },
  {
    src: "/work/disputes360/bulk-upload.avif",
    alt: "Disputes360 bulk upload screen with drag-and-drop and file status",
    caption: "Bulk upload. Lets ops teams submit hundreds of disputes in one file, with templates per dispute type and a status table for tracking rejected entries.",
  },
];

const NAV_SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "inheritance", label: "The Inheritance" },
  { id: "product", label: "The Product" },
  { id: "ai-layer", label: "The AI Layer" },
  { id: "delivery", label: "Delivery Loop" },
  { id: "closing", label: "Closing" },
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

const metricPlaceholderStyle: React.CSSProperties = {
  fontStyle: "italic",
  color: "var(--color-text-muted)",
};

const imgPlaceholder = (caption: string) => (
  <ScreenShowcase columns={1}>
    <div
      style={{
        aspectRatio: "16 / 9",
        background: "var(--color-border-strong)",
        borderRadius: "10px",
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
  </ScreenShowcase>
);

export default function Disputes360Page() {
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
          <p style={labelStyle}>Enterprise platform · Disputes ops · AI-augmented · 2025 – present</p>
          <h1
            style={{
              fontSize: "var(--font-size-hero)",
              lineHeight: "var(--line-height-tight)",
              letterSpacing: "-0.02em",
              fontWeight: 500,
              color: "var(--color-text-strong)",
            }}
          >
            Disputes360: an AI-augmented platform built around the agent.
          </h1>

          <p style={{ fontSize: "20px", lineHeight: 1.4, color: "var(--color-label)", paddingTop: "32px" }}>
            I&apos;d owned design on Marqeta&apos;s disputes product for four years before I led design on its replacement. This case study is about what the new platform became, and how AI fits inside regulated, agent-facing work.
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
              { label: "Role", value: "Design lead, Disputes360" },
              { label: "Timeline", value: "Jul 2025 – present (Alpha Q4 2025, Rolling Beta Q1 2026, GA Mar 2026)" },
              { label: "Team", value: "Product, Engineering, Disputes Ops, Compliance" },
              { label: "Skills", value: "Platform strategy, systems thinking, AI interaction design" },
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

        {/* Cover image */}
        <ScreenShowcase columns={1}>
          <img src="/work/disputes360/hero.avif" alt="Disputes360 case lifecycle view with AI recommendation" />
        </ScreenShowcase>

        {/* ── Divider ── */}
        <div className="content-col-narrow" style={{ height: "var(--divider-width)", background: "var(--color-border)" }} />

        {/* ── Chapter 1: The Inheritance ── */}
        <section id="inheritance" className="content-col-narrow" style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}>
          <p style={labelStyle}>Chapter 1</p>
          <h2 style={sectionHeadingStyle}>The inheritance</h2>

          <p style={keyInsightStyle}>
            I owned design on Marqeta&apos;s disputes product for four years before I led design on its replacement. Four years of improvements made the old system better. None of them fixed what was actually broken about it.
          </p>

          <p style={bodyStyle}>
            The product ran inside the Marqeta Dashboard, the operations console agents used to manage cases across Visa, Mastercard, and Pulse. From 2021 to 2025, I shipped improvement after improvement: CSAT from 2.4 to 4.3, $1.5M in operational savings, Reg E across three regions. Real numbers, but the right size for incremental work.
          </p>
          <p style={bodyStyle}>
            The architecture was the ceiling. A monolithic app on a two-week release cycle, holding together five disconnected systems (MQD, Salesforce, spreadsheets, Looker, manual audit). Agents weren&apos;t using one tool. They were stitching five together with their own attention.
          </p>
          <p style={{ ...bodyStyle, paddingBottom: 0 }}>
            In 2023 the team tried to buy a replacement. Quavo couldn&apos;t handle Marqeta&apos;s network integrations, regional regulatory differences, or customer-specific logic. The buy path closed. By mid-2025 the company committed to build, and I started leading design on Disputes360 in July.
          </p>

          <div style={{ paddingTop: "32px" }}>
            <ScreenShowcase columns={1}>
              <img
                src="/work/disputes360/four-tools-in-one.svg"
                alt="Diagram showing four legacy tools — MQD case management, Salesforce communications, Looker reporting, and a workforce-management spreadsheet — consolidated into Disputes360"
                style={{ border: "none" }}
              />
            </ScreenShowcase>
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.5,
                color: "var(--color-text-muted)",
                paddingTop: "16px",
                textAlign: "center",
              }}
            >
              Four disconnected tools — case management, communications, reporting, and workforce management — consolidated into Disputes360.
            </p>
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="content-col-narrow" style={{ height: "var(--divider-width)", background: "var(--color-border)" }} />

        {/* ── Chapter 2: The Product I designed ── */}
        <section id="product" className="content-col-narrow" style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}>
          <p style={labelStyle}>Chapter 2</p>
          <h2 style={sectionHeadingStyle}>The product I designed</h2>

          <p style={keyInsightStyle}>
            The team set the direction (consolidate five tools into one platform). As sole designer on Disputes360, I led every surface of what consolidation became, from the sitemap to the case page to the AI integration. The center of gravity is the case page, where agents spend most of their day.
          </p>

          <div style={{ paddingTop: "8px" }}>
            <ScreenShowcase columns={1}>
              <img
                src="/work/disputes360/sitemap.avif"
                alt="Disputes360 sitemap showing the product's information architecture across Home, Intake, Cardholder Search, Views, and Settings"
              />
            </ScreenShowcase>
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.5,
                color: "var(--color-text-muted)",
                paddingTop: "16px",
                textAlign: "center",
              }}
            >
              The Disputes360 sitemap. Five top-level areas — Home, Intake, Cardholder Search, Views, and Settings — plus two global affordances (search and program filter) that persist across the product.
            </p>
          </div>

          <p style={{ ...bodyStyle, paddingTop: "32px" }}>
            The dispute lifecycle tab is the surface where an agent works one dispute. The AI banner sits at the top, summarizing the case state with a recommended action. Below it, a case management section and event tracker surface the case&apos;s history in reverse. A reference side panel runs alongside with transaction, cardholder, and card data.
          </p>

          <ScreenShowcase columns={1}>
            <img
              src="/work/disputes360/case-page.avif"
              alt="Disputes360 dispute lifecycle tab showing the AI recommendation banner, case management and event tracker, and reference side panel"
            />
          </ScreenShowcase>
          <p
            style={{
              fontSize: "14px",
              lineHeight: 1.5,
              color: "var(--color-text-muted)",
              paddingTop: "16px",
              textAlign: "center",
            }}
          >
            The dispute lifecycle tab. The AI recommendation banner sits above the case management and event tracker; a reference side panel runs alongside with transaction, cardholder, and card data.
          </p>

          <p style={{ ...bodyStyle, paddingTop: "32px", paddingBottom: 0 }}>
            Beyond the dispute lifecycle tab, I designed the reporting dashboard, the cases list and its filter system, email templating for cardholder communications, bulk upload for ops teams, and the supporting tabs on the case (documents, evidences, activity, transactions, raw). The product surface is wide. The dispute lifecycle tab is where AI integration meets agent judgment, which is where the design work goes deep.
          </p>

          <div style={{ paddingTop: "32px" }}>
            <ScreenCarousel slides={otherScreens} />
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="content-col-narrow" style={{ height: "var(--divider-width)", background: "var(--color-border)" }} />

        {/* ── Chapter 3: The AI layer ── */}
        <section id="ai-layer" className="content-col-narrow" style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}>
          <p style={labelStyle}>Chapter 3</p>
          <h2 style={sectionHeadingStyle}>The AI layer</h2>

          <p style={keyInsightStyle}>
            Every case in Disputes360 opens with a banner. The banner is what the AI thinks the agent should do. This chapter is about how the AI gets to that conclusion, and where I designed myself into it.
          </p>

          <p style={subHeadingStyle}>Banner: the AI&apos;s read of the case</p>
          <div style={{ paddingTop: "8px", paddingBottom: "8px" }}>
            <ScreenShowcase columns={2} className="banner-gallery">
              <img src="/work/disputes360/banner-ready.avif" alt="Ready to submit banner — confidence high, action: Submit to network" style={{ borderRadius: 0, border: "none" }} />
              <img src="/work/disputes360/banner-agent-review.avif" alt="Agent review needed banner — three attributes need review" style={{ borderRadius: 0, border: "none" }} />
              <img src="/work/disputes360/banner-reason-code.avif" alt="Reason code change recommended banner — suggests changing to 13.4 Not as Described" style={{ borderRadius: 0, border: "none" }} />
              <img src="/work/disputes360/banner-do-not-submit.avif" alt="Do not submit banner — transaction exceeds VISA 120-day limit, action: Acknowledge" style={{ borderRadius: 0, border: "none" }} />
            </ScreenShowcase>
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.5,
                color: "var(--color-text-muted)",
                paddingTop: "16px",
                textAlign: "center",
              }}
            >
              The four banner states: Ready to submit, Agent review needed, Reason code change recommended, and Do not submit.
            </p>
          </div>

          <p style={bodyStyle}>
            The AI features in Disputes360 shipped in Q1 2026. The goal is to make case decisions faster, more accurate, and more economical: fewer cases submitted that shouldn&apos;t be, more cases auto-processed that should be, <span style={metricPlaceholderStyle}>[placeholder for specific automation % and savings]</span>.
          </p>
          <p style={{ ...bodyStyle, paddingBottom: 0 }}>
            Agents open dozens of cases a day. The banner sits at the top of every case page, before any case detail. It tells the agent what the AI thinks (the state) and what to do next (an action button: Submit, Acknowledge, Review items, or Change the reason code).
          </p>

          <p style={subHeadingStyle}>Where the banner comes from</p>
          <p style={bodyStyle}>
            The banner doesn&apos;t come from one model. A few factors feed into it: program-level rules, some case context, and the AI&apos;s evaluation of evidence against the requirements of the reason code.
          </p>
          <p style={{ ...bodyStyle, paddingBottom: 0 }}>
            Evidence is the dominant factor. The rest of this chapter is about that part, because that&apos;s where most of the design work lives.
          </p>

          <p style={subHeadingStyle}>Evidence into judgment</p>
          <p style={bodyStyle}>
            The team had a working concept of what the AI should evaluate. Every reason code (Visa 13.1, 13.6, etc.) has a set of conditions that determine whether a dispute can win. The PRD called these attributes. It pointed at the right structure, but the attributes themselves weren&apos;t defined concretely enough for AI or humans to evaluate consistently. That part needed design.
          </p>
          <p style={bodyStyle}>
            I did three things to make the schema work.
          </p>
          <p style={bodyStyle}>
            First, I made each attribute specific. Not &ldquo;merchant met their obligation&rdquo; but &ldquo;return label was generated within the timeframe,&rdquo; &ldquo;credit was issued within the required window.&rdquo; Things AI can check against documents and a human can verify.
          </p>
          <p style={bodyStyle}>
            Second, I rewrote each attribute as a yes/no question. Attributes are the criteria for a successful dispute, so they need a binary answer the AI and the agent can both produce.
          </p>
          <p style={bodyStyle}>
            Third, I aligned the yes answer across all attributes to mean the same thing: this case is closer to being submittable. A yes is always good news. A no is always bad. Without this alignment, aggregating attribute states into a case-level recommendation gets messy fast.
          </p>

          <div style={{ paddingTop: "16px" }}>
            {imgPlaceholder("Concept diagram: reason code → attributes (as yes/no questions) → AI scanning documents → three-state evaluation → case-level banner state")}
          </div>

          <p style={{ ...bodyStyle, paddingTop: "32px" }}>
            With the schema set, the rest of the system follows. The AI evaluates each attribute against the case documents and returns one of three states:
          </p>
          <ul style={{ ...bodyStyle, paddingLeft: "24px", listStyleType: "disc" }}>
            <li><strong>Confirmed-yes:</strong> evidence supports the attribute</li>
            <li><strong>Confirmed-no:</strong> evidence contradicts it</li>
            <li><strong>Unconfirmed:</strong> evidence is missing, or sources disagree</li>
          </ul>
          <p style={{ ...bodyStyle, paddingTop: "16px" }}>
            The states aggregate into the four banner states. All yes goes to Ready to submit. A confirmed-no on a critical attribute goes to Do not submit. Any unconfirmed goes to Agent review needed: the AI doesn&apos;t know, so a human needs to look.
          </p>
          <p style={{ ...bodyStyle, paddingBottom: 0 }}>
            The fourth banner state is the one I want to call out. Reason code change recommended fires when the evidence is solid, just for a different reason code than the one the case was filed under. The AI isn&apos;t unsure. It&apos;s pointing out that the case was filed wrong. Most AI systems don&apos;t have a slot for this kind of correction. Adding one caught a class of cases that binary evaluation would have silently mishandled.
          </p>

          <p style={subHeadingStyle}>Where the agent sees all of this</p>
          <p style={bodyStyle}>
            When an agent wants to verify or override the banner, they open the document review surface. Documents on the left. AI reasoning in the middle. Attribute states with controls on the right.
          </p>

          <div style={{ paddingTop: "8px" }}>
            {imgPlaceholder("Document review screen, current version")}
          </div>

          <p style={{ ...bodyStyle, paddingTop: "32px" }}>
            Co-locating evidence, reasoning, and controls matters because an agent can&apos;t meaningfully challenge a judgment they can&apos;t see the basis for. If the AI says an attribute is unconfirmed, the agent needs to see the specific document and the specific gap, on the same screen, with the override one click away.
          </p>
          <p style={bodyStyle}>
            This surface went through five versions. Two changes are worth naming.
          </p>
          <p style={bodyStyle}>
            The first version of the panel tagged each attribute with one of three labels: Conflict, Uncertain, Missing. It looked thoughtful, but the labels just described different flavors of &ldquo;not yes.&rdquo; The agent&apos;s job was the same in all three cases: open the evidence, decide. I dropped the labels and kept one state, unconfirmed. Less to read, clearer ask.
          </p>
          <p style={bodyStyle}>
            A later version split the panel into two tabs, Summary and Attributes. I expected agents would want a high-level view before drilling in. They didn&apos;t. They wanted everything visible at once. I pulled the tabs out and let the panel scroll. The version that ships has more on screen than I would have argued for at the start, and it works better.
          </p>

          <div style={{ paddingTop: "8px" }}>
            {imgPlaceholder("Iteration comparison: V1 labeled panel vs. current, and V4 tabbed vs. V5 current")}
          </div>

          <p style={subHeadingStyle}>What&apos;s next</p>
          <p style={bodyStyle}>
            Right now every case still passes through an agent. The AI recommends; the agent confirms. That&apos;s the right place for the product to be while the model is being trained and trust is being built.
          </p>
          <p style={{ ...bodyStyle, paddingBottom: 0 }}>
            The direction is conditional automation. For cases where the AI is highly confident across all attributes and evidence is complete, the next version of the system will skip the recommendation and submit the case directly. The agent&apos;s role moves from reviewing every case to reviewing the cases where the system is unsure. The mechanics that make this possible (specific attributes, yes/no schema, three-state evaluation, multi-factor compilation) are already in place. The change is in how much of the loop the human stays in.
          </p>
        </section>

        {/* ── Divider ── */}
        <div className="content-col-narrow" style={{ height: "var(--divider-width)", background: "var(--color-border)" }} />

        {/* ── Chapter 4: Closing the loop ── */}
        <section id="delivery" className="content-col-narrow" style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}>
          <p style={labelStyle}>Chapter 4</p>
          <h2 style={sectionHeadingStyle}>Closing the loop between design and production</h2>

          <p style={keyInsightStyle}>
            The new platform deploys differently: smaller surface, faster cycles. Design couldn&apos;t be the slow step.
          </p>

          <p style={bodyStyle}>
            I ran three pilots inside Disputes360 to close the gap between design intent and shipped code.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px", paddingTop: "8px", paddingBottom: "8px" }}>
            {[
              {
                title: "VQA (visual QA automation)",
                body: "AI compares shipped UI against the Figma source, flags mismatches, and generates pull requests with corrections.",
              },
              {
                title: "Coded prototypes",
                body: "For complex flows, I prototype directly in React inside engineering's codebase. The conversation with engineering happens in code, not in interpretation.",
              },
              {
                title: "Deliver-in-repo",
                body: "For component-level work, the design artifact is a merged commit on the feature branch.",
              },
            ].map(({ title, body }) => (
              <div key={title} style={{ paddingLeft: "20px", borderLeft: "2px solid var(--color-border-strong)" }}>
                <p style={{ fontSize: "16px", fontWeight: 500, color: "var(--color-text-strong)", paddingBottom: "6px" }}>{title}</p>
                <p style={{ fontSize: "16px", color: "var(--color-text)", lineHeight: 1.7 }}>{body}</p>
              </div>
            ))}
          </div>

          <p style={{ ...bodyStyle, paddingTop: "16px", paddingBottom: 0 }}>
            These aren&apos;t three separate initiatives. They&apos;re the same instinct expressed three ways: shorten the distance between design intent and shipped code.
          </p>

          <p style={{ ...metricPlaceholderStyle, fontSize: "14px", paddingTop: "32px" }}>
            [Metrics to fill: design-to-PR cycle time reduction, PRs generated via VQA pilot, components shipped via in-repo workflow]
          </p>
        </section>

        {/* ── Divider ── */}
        <div className="content-col-narrow" style={{ height: "var(--divider-width)", background: "var(--color-border)" }} />

        {/* ── Closing ── */}
        <section
          id="closing"
          className="content-col-narrow"
          style={{ padding: "48px", background: "var(--color-toggle-bg)", borderRadius: "var(--radius-sm)" }}
        >
          <p style={{ ...labelStyle, paddingBottom: "24px" }}>Closing</p>
          <p style={{ fontSize: "20px", fontWeight: 500, lineHeight: 1.6, color: "var(--color-text)", letterSpacing: "-0.01em", paddingBottom: "16px" }}>
            For four years I made the old product better. Then I led the design of the platform replacing it. The judgment that mattered most wasn&apos;t about an interface. It was knowing when incremental improvement had run out.
          </p>
          <p style={{ fontSize: "17px", color: "var(--color-text)", lineHeight: 1.7 }}>
            Disputes360 is the first app in Marqeta&apos;s connected app ecosystem. The patterns I established here will be inherited by the next six apps. The work in this case study is one product. The work it enables is a platform.
          </p>
        </section>

        {/* ── Divider ── */}
        <div className="content-col-narrow" style={{ height: "var(--divider-width)", background: "var(--color-border)" }} />

        {/* ── Prev / Next ── */}
        <ProjectPagination currentSlug="disputes360" />

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
