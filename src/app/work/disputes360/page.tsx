import BackButton from "@/components/BackButton";
import ThemeToggle from "@/components/ThemeToggle";
import CaseStudyNav from "@/components/CaseStudyNav";
import ProjectPagination from "@/components/ProjectPagination";
import ScreenShowcase from "@/components/ScreenShowcase";

const NAV_SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "inheritance", label: "The Inheritance" },
  { id: "reframe", label: "Reframing" },
  { id: "agent-workflow", label: "Agent Workflow" },
  { id: "ai-layer", label: "AI as a System" },
  { id: "delivery", label: "Delivery Loop" },
  { id: "reflection", label: "Why this project" },
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
            I&apos;d owned design on Marqeta&apos;s disputes product since 2022. By 2025, it was clear the architecture underneath it had hit its ceiling. This case study is about the year that followed: leading design on its replacement, and what it meant to design how AI shows up inside regulated, agent-facing work.
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

        {/* ── Chapter 1: Inheritance ── */}
        <section id="inheritance" className="content-col-narrow" style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}>
          <p style={labelStyle}>Chapter 1</p>
          <h2 style={sectionHeadingStyle}>The inheritance</h2>

          <p style={keyInsightStyle}>
            For three years, I made Marqeta&apos;s disputes product better without fixing what was actually wrong with it. The improvements shipped: CSAT up from 2.4 to 4.3, over $1.5M saved in operational cost, Reg E compliance across three regions. But they all routed through the same monolithic application and the same five-tool sprawl that were the real problem. By 2025, replacing the architecture became a real conversation, and in July I began leading design on the rebuild.
          </p>

          <p style={bodyStyle}>
            The old world was MQD (the Marqeta Dashboard) plus the constellation of tools that kept dispute work moving: Salesforce for cardholder emails, spreadsheets for agent assignment, Looker for reporting, manual screenshots for audit packets. Five systems, held together by agent effort.
          </p>

          {imgPlaceholder("\"Before\" architecture diagram — MQD + Salesforce + spreadsheets + Looker + manual audit. Caption: \"Five disconnected systems, held together by manual action.\"")}

          <p style={{ ...bodyStyle, paddingTop: "32px" }}>
            We made the system better, release by release. The numbers said so. But every improvement was routed through a monolithic application on a two-week release cycle, every compliance gap traced back to a manual step that lived between tools, and every customer escalation about reporting ran into the same wall: the data was scattered across systems that didn&apos;t talk to each other.
          </p>
          <p style={{ ...bodyStyle, paddingBottom: 0 }}>
            The 2023 attempt to buy a third-party disputes platform had already been retired as unviable. No off-the-shelf tool could absorb Marqeta&apos;s network integrations, regulatory surface, and customer-specific program logic. The only path left was a rebuild.
          </p>
        </section>

        {/* ── Divider ── */}
        <div className="content-col-narrow" style={{ height: "var(--divider-width)", background: "var(--color-border)" }} />

        {/* ── Chapter 2: Reframe ── */}
        <section id="reframe" className="content-col-narrow" style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}>
          <p style={labelStyle}>Chapter 2</p>
          <h2 style={sectionHeadingStyle}>Reframing the problem</h2>

          <p style={keyInsightStyle}>
            The default framing of a rebuild is &ldquo;replace the old tool with a better tool.&rdquo; The framing I pushed for was different: <em>consolidation is the feature</em>. The old system&apos;s pain points traced back to the seams between five tools, not to any individual tool being bad. So the design move was to collapse the seams, not polish a surface.
          </p>

          <p style={bodyStyle}>
            Every time an agent copied case information from MQD into Salesforce to send an email, every time workforce assignment was loaded from a spreadsheet, every time an audit packet required manual screenshots from three systems: each seam was a chance for a compliance gap, a lost case, or an escalation.
          </p>
          <p style={bodyStyle}>
            One app, one data model, one surface where intake, investigation, communication, workforce management, reporting, and audit all live together. That framing shaped everything downstream: the feature set (not &ldquo;what did MQD have,&rdquo; but &ldquo;what did agents do outside MQD&rdquo;), the platform decisions (this became the first app in Marqeta&apos;s connected app ecosystem, with SSO, deployment, and design-system foundations that future apps would inherit), and the rollout (parity with MQD first, then layered expansion).
          </p>

          <div style={{ paddingTop: "24px", paddingBottom: "24px" }}>
            {imgPlaceholder("Transformation diagram — scattered five-box \"before\" collapsing into a unified Disputes360 \"after.\" Caption: \"The design move wasn't a better tool. It was collapsing five tools into one surface.\"")}
          </div>

          <p style={{ ...bodyStyle, paddingBottom: 0 }}>
            Consolidation was the strategy. But strategy is a claim about <em>what to do</em>. The harder question was <em>what to put in front of the agent</em>, because the whole premise would fail if the new app just displayed five tools&apos; worth of content on a single surface. A better tool is not automatically a better workplace.
          </p>
        </section>

        {/* ── Divider ── */}
        <div className="content-col-narrow" style={{ height: "var(--divider-width)", background: "var(--color-border)" }} />

        {/* ── Chapter 3: Agent Workflow ── */}
        <section id="agent-workflow" className="content-col-narrow" style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}>
          <p style={labelStyle}>Chapter 3</p>
          <h2 style={sectionHeadingStyle}>Designing for how agents actually work</h2>

          <p style={keyInsightStyle}>
            A dispute agent spends most of their day on one screen: the case detail view. My first instinct was to use a Gantt chart for the case timeline. Dispute cases have milestones, deadlines, dependencies, the exact information Gantt was built for. But when I tried it, the visual form was optimizing for the wrong question. Gantt points the eye forward, but a dispute agent&apos;s work lives backward. They&apos;re responding to things that just happened, not executing a plan. The final design is an event view: a reverse-chronological activity feed where the most recent event sits at the top.
          </p>

          <p style={bodyStyle}>
            A dispute has many time-bound milestones: intake, open, ready, submission, network response, chargeback creation, resolution. Each one has its own deadline rules driven by network regulations and Reg E requirements. Sketching a Gantt strip across the top of the case page felt natural: a horizontal timeline, milestones as segments, the current state highlighted, deadlines marked with color.
          </p>
          <p style={bodyStyle}>
            Three problems surfaced together when I tried to map the Visa lifecycle into it.
          </p>
          <p style={bodyStyle}>
            The future it showed wasn&apos;t real. A dispute isn&apos;t a workflow that runs to completion. A case might reach Open state and then be written off because the credit is too small to justify the submission cost, and all the downstream milestones never happen. Gantt displays a <em>plan</em>; dispute cases follow decisions, and most decisions close off most of the diagram. It flattened priority: Gantt presents every milestone with equal visual weight, but agents don&apos;t need to see the whole arc, they need to see the next thing. And it pointed the eye in the wrong direction. Gantt emphasizes <em>what will happen next</em>, but a dispute agent&apos;s work is largely to <em>respond</em>: to new documentation, to network decisions, to merchant evidence. The first question an agent asks when opening a case is not &ldquo;what&apos;s next on the plan,&rdquo; it&apos;s <strong>&ldquo;what&apos;s happened since I last saw this?&rdquo;</strong>
          </p>
          <p style={bodyStyle}>
            Gantt was optimizing for a question the agent wasn&apos;t asking.
          </p>

          {imgPlaceholder("The \"Gantt version that didn't ship\" — deliberately rough, hand-drawn feel, minimal color. Caption: \"The version I considered first. It made the work look like project management. It isn't.\"")}

          <p style={{ ...bodyStyle, paddingTop: "32px" }}>
            The case page uses an event view instead: a reverse-chronological activity feed where the most recent event always sits at the top and the case&apos;s full history accumulates below. Visually the pattern is closest to package-tracking UI, where the latest status is the first thing you see. The dispute version is denser. Each event can be a cardholder contact, a chargeback transition, a related transaction, a note, a milestone, a compliance deadline. Agents can filter the feed, collapse old days, and pull granular transaction data when they need it.
          </p>

          {imgPlaceholder("The case lifecycle page — case header, case details on the left, activity/event feed in the center with most recent event at top, filter controls visible, side panels for Point of Interaction data, merchant, user. Caption: \"The case page that ships. Most recent event always on top — because the agent's first question is 'what happened since I last looked.'\"")}

          <p style={{ ...bodyStyle, paddingTop: "32px" }}>
            The choice isn&apos;t aesthetic. <strong>Gantt assumes the agent&apos;s job is to execute a plan. Event view assumes the agent&apos;s job is to interpret state.</strong> Dispute work is the second question, and the screen should answer it in the first second of looking at it.
          </p>
          <p style={{ ...bodyStyle, paddingBottom: 0 }}>
            The event view is also what makes the consolidation from Chapter 2 <em>legible</em>. Instead of reassembling a case from five tools, the agent sees every event from every source, in time order, on one screen. The case arrives pre-assembled. And when the AI Agent eventually joins this screen, it lives in the same visual hierarchy as the feed, as one more thing that&apos;s &ldquo;happened&rdquo; to this case that the agent should consider.
          </p>
        </section>

        {/* ── Divider ── */}
        <div className="content-col-narrow" style={{ height: "var(--divider-width)", background: "var(--color-border)" }} />

        {/* ── Chapter 4: AI as a System ── */}
        <section id="ai-layer" className="content-col-narrow" style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}>
          <p style={labelStyle}>Chapter 4</p>
          <h2 style={sectionHeadingStyle}>Designing AI as a system, not a feature</h2>

          <p style={keyInsightStyle}>
            Most enterprise AI features are bolted on. A button appears next to a workflow, suggests something, and the user accepts or ignores. I wanted the AI in Disputes360 to be a layer of the system, not a feature of the product. That meant deciding where it intervenes (intake and decisioning, nowhere else), how it behaves (recommendation, never action), and what it shows (reasoning, not confidence scores). I want to be honest that &ldquo;recommendation, not action&rdquo; is partly a constraint of today&apos;s model and architecture, and partly a design position I&apos;d hold even as the constraints loosen.
          </p>

          <p style={subHeadingStyle}>Where the AI intervenes</p>
          <p style={bodyStyle}>
            The AI Agent shows up at two moments in the case lifecycle.
          </p>
          <p style={bodyStyle}>
            The first is <strong>intake.</strong> After a dispute is created, the AI reads customer-submitted documentation (receipts, shipping confirmations, merchant chats, return labels), extracts the attributes the selected reason code requires, and cross-references them against the agent&apos;s notes. It flags missing documents, contradictions between notes and evidence, and reason codes that the evidence no longer supports.
          </p>

          {imgPlaceholder("AI Agent document review interface")}

          <p style={{ ...bodyStyle, paddingTop: "32px" }}>
            The second is <strong>decisioning.</strong> When a case is ready for an action, the AI surfaces a recommendation at the top of the case with its reasoning exposed: <em>&ldquo;Based on PULSE network rules for reason code 4537, this case qualifies for network submission. Transaction details verified. Timeframe compliance: within 120-day filing requirement. No duplicate cases found. No merchant refunds issued.&rdquo;</em>
          </p>

          {imgPlaceholder("Guided decisioning recommendation card at the top of the case lifecycle view, with expanded reasoning")}

          <p style={{ ...bodyStyle, paddingTop: "32px", paddingBottom: 0 }}>
            Decisioning is also where the AI makes economic judgments: whether a case is worth submitting at all. If the provisional credit is small enough that pursuing the chargeback costs more than it can recover, the AI recommends write-off. I placed this in decisioning rather than intake deliberately. At intake, the agent is still gathering context, and a &ldquo;don&apos;t bother&rdquo; signal that early would pre-empt judgment before it could form. By decisioning, the agent has read the case and is about to commit. That&apos;s the right moment for an economic counter-argument to land.
          </p>

          <p style={subHeadingStyle}>The interaction model: recommendation as the current form</p>
          <p style={bodyStyle}>
            The AI doesn&apos;t act. It recommends. The agent decides, every time.
          </p>
          <p style={bodyStyle}>
            Part of this is constraint. The model isn&apos;t accurate enough to act unsupervised on work this regulated, and agent accountability is currently the backbone of compliance on every dispute. Moving that accountability onto a system requires product, legal, and regulatory alignment that isn&apos;t done yet.
          </p>
          <p style={{ ...bodyStyle, paddingBottom: 0 }}>
            But I don&apos;t want to frame this purely as a &ldquo;for now&rdquo; situation. In a workflow involving regulated money movement, cardholder rights, bank audits, and real financial loss on both sides of a wrong call, I think the agent&apos;s active role is worth preserving on its own merits, not only while the model catches up. AI will take on more automated work here over time; it should. But &ldquo;more&rdquo; is a direction to work toward, not a promised endpoint. <strong>Some of this work should still have a person in it</strong>, and part of my job as the designer was to keep that seat available.
          </p>

          <p style={subHeadingStyle}>Trust through explainability, and confidence as a routing signal</p>
          <p style={bodyStyle}>
            Every AI recommendation comes with its reasoning visible. Not buried behind a &ldquo;why?&rdquo; link. Not summarized into a confidence score. Shown, in full, at the moment of recommendation. Disputes work lives in a trust economy, and reasoning is what agents, compliance officers, and bank auditors can actually work with.
          </p>
          <p style={bodyStyle}>
            The confidence score (and there is one, on the backend) does different work. It routes. Recommendations below a defined benchmark don&apos;t reach the agent&apos;s screen at all. Above the benchmark, the recommendation appears, but the agent sees reasoning, not the number. An &ldquo;84% confident&rdquo; label is noise. It can&apos;t tell the agent <em>why</em>, and it adds a layer of calibration they have to do (&ldquo;is 84% enough?&rdquo;). Reasoning goes directly into the judgment the agent is already making.
          </p>
          <p style={bodyStyle}>
            This also means absence is a signal. When the AI has no recommendation on a case, the agent doesn&apos;t see a hesitant low-confidence suggestion. They see nothing, which, on this case, is the correct amount of AI.
          </p>
          <p style={{ ...bodyStyle, paddingBottom: 0 }}>
            None of these are the obvious choices for demo impact. They&apos;re the right choices if you optimize for the system actually being used, and trusted, five years from now.
          </p>
        </section>

        {/* ── Divider ── */}
        <div className="content-col-narrow" style={{ height: "var(--divider-width)", background: "var(--color-border)" }} />

        {/* ── Chapter 5: Delivery Loop ── */}
        <section id="delivery" className="content-col-narrow" style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}>
          <p style={labelStyle}>Chapter 5</p>
          <h2 style={sectionHeadingStyle}>Closing the loop between design and production</h2>

          <p style={keyInsightStyle}>
            Disputes360 was replacing a two-week release cycle with a platform that shipped multiple times a day. Design couldn&apos;t afford to be the slow step. I piloted three approaches to close the loop between design and production: AI-assisted visual QA, coded prototypes, and deliver-in-repo. One instinct applied three ways: shorten the distance between designed and shipped.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px", paddingTop: "8px", paddingBottom: "8px" }}>
            {[
              {
                title: "VQA (visual QA automation)",
                body: "An AI-assisted workflow that compares shipped UI against the source Figma, flags mismatches, and generates a pull request with the proposed fix for engineering review. What used to require a designer-engineer pairing session per ticket now runs in the background.",
              },
              {
                title: "Coded prototypes",
                body: "For complex flows, I shipped working React prototypes in the same codebase and component library engineering used. Translation loss at handoff disappeared; engineering reviewed interaction logic directly against the code they'd extend.",
              },
              {
                title: "Deliver-in-repo",
                body: "For component-level work, the design output was the code. Engineering merged my work into the feature branch directly.",
              },
            ].map(({ title, body }) => (
              <div key={title} style={{ paddingLeft: "20px", borderLeft: "2px solid var(--color-border-strong)" }}>
                <p style={{ fontSize: "16px", fontWeight: 500, color: "var(--color-text-strong)", paddingBottom: "6px" }}>{title}</p>
                <p style={{ fontSize: "16px", color: "var(--color-text)", lineHeight: 1.7 }}>{body}</p>
                <p style={{ ...metricPlaceholderStyle, fontSize: "13px", paddingTop: "6px" }}>[Metric to fill]</p>
              </div>
            ))}
          </div>

          <div style={{ paddingTop: "32px" }}>
            {imgPlaceholder("Simple diagram — traditional handoff (Figma → spec → dev → QA → fix) with latency marked at each arrow, vs. closed-loop handoff with latency collapsed. Caption: \"Three experiments, one instinct: shorten the distance between designed and shipped.\"")}
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="content-col-narrow" style={{ height: "var(--divider-width)", background: "var(--color-border)" }} />

        {/* ── Why this project ── */}
        <section
          id="reflection"
          className="content-col-narrow"
          style={{ padding: "48px", background: "var(--color-toggle-bg)", borderRadius: "var(--radius-sm)" }}
        >
          <p style={{ ...labelStyle, paddingBottom: "24px" }}>Why this project is in my portfolio</p>
          <p style={{ fontSize: "20px", fontWeight: 500, lineHeight: 1.6, color: "var(--color-text)", letterSpacing: "-0.01em", paddingBottom: "16px" }}>
            Most enterprise design case studies show a redesign: here was the old screen, here is the new one, here&apos;s why the new one is better. This case study is about something else. It&apos;s about the judgment to know when a system has hit its ceiling, the endurance to make the case for its replacement, and the design ownership to carry the replacement through while the definition of the work was still being shaped around me.
          </p>
          <p style={{ fontSize: "17px", color: "var(--color-text)", lineHeight: 1.7, paddingBottom: "24px" }}>
            Three years on MQD gave me the credibility to see the ceiling. Disputes360 is what I did with that credibility: both in what got shipped, and in how it got shipped.
          </p>
          <p style={{ fontSize: "17px", fontStyle: "italic", color: "var(--color-text-muted)", lineHeight: 1.7 }}>
            Disputes360 is the first app in Marqeta&apos;s connected app ecosystem. The design system, SSO, and composition patterns I built for it will be inherited by six other apps on the platform roadmap. The AI patterns and the delivery workflow will move with them. The case study is about one product. The work is about the pattern.
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
