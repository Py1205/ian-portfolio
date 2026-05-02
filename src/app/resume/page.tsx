import ThemeToggle from "@/components/ThemeToggle";
import MobileHeader from "@/components/MobileHeader";
import Sidebar from "@/components/Sidebar";
import { siteConfig } from "@/lib/data";
import Link from "next/link";

export const metadata = {
  title: "Resume — Ian Pan",
  description:
    "Resume of Ian Pan, Senior Product Designer with 4+ years at Marqeta specializing in B2B SaaS, fintech, and AI-powered product design.",
};

const labelStyle: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "var(--color-label)",
};

const sectionHeadingStyle: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "var(--color-label)",
  marginBottom: 24,
};

const roleHeadingStyle: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 600,
  color: "var(--color-text-strong)",
  marginBottom: 2,
};

const bodyStyle: React.CSSProperties = {
  fontSize: 15,
  lineHeight: 1.65,
  color: "var(--color-text)",
};

const metaStyle: React.CSSProperties = {
  fontSize: 13,
  color: "var(--color-label)",
  lineHeight: 1.5,
};

function Divider() {
  return (
    <div
      className="content-col"
      style={{ height: "0.5px", background: "var(--color-border)", margin: "40px 0" }}
    />
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul style={{ margin: "10px 0 0 0", padding: 0, listStyle: "none" }}>
      {items.map((item, i) => (
        <li
          key={i}
          style={{
            ...bodyStyle,
            paddingLeft: 16,
            position: "relative",
            marginBottom: 6,
          }}
        >
          <span
            style={{
              position: "absolute",
              left: 0,
              top: "0.55em",
              width: 4,
              height: 4,
              borderRadius: "50%",
              background: "var(--color-label)",
              display: "block",
            }}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

function ExperienceBlock({
  role,
  meta,
  summary,
  bullets,
}: {
  role: string;
  meta: string;
  summary?: string;
  bullets?: string[];
}) {
  return (
    <div style={{ marginBottom: 32 }}>
      <p style={roleHeadingStyle}>{role}</p>
      <p style={{ ...metaStyle, marginBottom: summary || bullets ? 10 : 0 }}>{meta}</p>
      {summary && <p style={bodyStyle}>{summary}</p>}
      {bullets && <BulletList items={bullets} />}
    </div>
  );
}

export default function Resume() {
  return (
    <>
      <div className="fixed z-[300]" style={{ bottom: "var(--nav-top)", left: "var(--grid-margin)" }}>
        <ThemeToggle />
      </div>

      <main className="page-grid">
        <Sidebar activeHref="/resume" />
        <MobileHeader activeHref="/resume" />

        {/* Header */}
        <section
          className="content-col"
          style={{ paddingTop: "var(--hero-top)", paddingBottom: "var(--section-gap)" }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
            <div>
              <h1
                style={{
                  fontSize: "var(--font-size-hero)",
                  lineHeight: "var(--line-height-tight)",
                  letterSpacing: "-0.02em",
                  fontWeight: 500,
                  color: "var(--color-text-strong)",
                  marginBottom: 8,
                }}
              >
                Ian Pan
              </h1>
              <p style={{ fontSize: 17, color: "var(--color-label)", fontWeight: 400 }}>
                Senior Product Designer
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4, paddingTop: 6 }}>
              <a href="mailto:ianp.ux@gmail.com" style={{ ...metaStyle, color: "var(--color-text)", textDecoration: "none" }}>
                ianp.ux@gmail.com
              </a>
              <a href="https://linkedin.com/in/ianpanux" target="_blank" rel="noopener noreferrer" style={{ ...metaStyle, color: "var(--color-text)", textDecoration: "none" }}>
                linkedin.com/in/ianpanux
              </a>
              <a href="#" style={{ ...metaStyle, color: "var(--color-text)", textDecoration: "none" }}>
                ianpans.com
              </a>
            </div>
          </div>

          {/* PDF download link */}
          <div style={{ marginTop: 32 }}>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 13,
                fontWeight: 500,
                color: "var(--color-text-strong)",
                border: "0.5px solid var(--color-border-strong)",
                borderRadius: 6,
                padding: "6px 12px",
                textDecoration: "none",
              }}
            >
              ↓ Download PDF
            </a>
          </div>
        </section>

        {/* Experience */}
        <section className="content-col" style={{ paddingBottom: "var(--section-gap)" }}>
          <p style={sectionHeadingStyle}>Experience</p>

          {/* Marqeta */}
          <div style={{ marginBottom: 48 }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: 16,
                alignItems: "start",
                marginBottom: 24,
              }}
            >
              <div>
                <p style={{ fontSize: 18, fontWeight: 600, color: "var(--color-text-strong)", marginBottom: 4 }}>
                  Marqeta
                </p>
                <p style={metaStyle}>
                  Senior Product Designer (Mar 2025) · Product Designer (Jan 2023) · Associate Product Designer (Aug 2021) · Intern (Jun 2021)
                </p>
              </div>
              <p style={{ ...metaStyle, whiteSpace: "nowrap" }}>Jun 2021 – Present</p>
            </div>

            <ExperienceBlock
              role="Disputes"
              meta="B2B SaaS · Fintech"
              summary="Owned the design of Marqeta's disputes product area for 3+ years — the system that enables customers to manage chargebacks, regulatory compliance, and case resolution. Led the product from its early feature releases through a full platform rebuild, driving error rates from 13.5% to <1% and saving over $1.5M through workflow automation."
              bullets={[
                "Sole designer for Disputes360 from Alpha through Phase 1, aligning regulatory (Reg E, PSD2), operational, and engineering constraints into one unified system.",
                "Reached ≥99% SLA adherence and grew weekly pageviews from 381 to 1,000+.",
                "Restructured case creation, lifecycle navigation, and transaction search to improve agent decision-making speed.",
                "Led the design of Disputes AI Agent, the first AI-powered feature deployed in a Marqeta product.",
                "Automated 80% of the Visa dispute transition process, saving over $1.5M.",
                "Led earlier feature releases including file management, US/EU/UK Reg-E compliance, network rules, and filter enhancements.",
                "Managed an external contractor on Disputes Reporting while maintaining system-level design alignment.",
              ]}
            />

            <ExperienceBlock
              role="White-Label App / Autobahn"
              meta="Fintech · Mobile · B2B2C"
              summary="Led end-to-end UX for Autobahn, Marqeta's white-label mobile app foundation launched for Uber UK — a B2B2C product enabling Marqeta's customers to offer branded banking experiences to their end users."
              bullets={[
                "Shaped reusable patterns across Wallets, Cashback, Transactions, and Disputes modules designed to scale across future customer deployments.",
                "Identified cross-module gaps early, reducing late-stage rework and improving engineering confidence ahead of launch.",
                "UX Toolkit patterns held at 1,036 TPS with 99.997% transaction success rate under real production load.",
              ]}
            />

            <ExperienceBlock
              role="AI Tooling & Process Innovation"
              meta="AI · Internal tooling"
              summary="Pioneered AI-assisted workflows within the design team, exploring how designers can directly contribute to front-end implementation using AI tools."
              bullets={[
                "Leading a VQV pilot where designers raise PRs for front-end fixes using AI assistants, significantly improving iteration speed.",
                "Advocating for broader AI workflow adoption across the design org.",
              ]}
            />

            <ExperienceBlock
              role="Business & Marketing Impact"
              meta="GTM · Sales support"
              summary="Contributed design work that directly supported Marqeta's go-to-market efforts and customer acquisition."
              bullets={[
                "Designed the Money 20/20 prototype, contributing to 500 booth scans, 260 MQLs, and 58% web traffic increase.",
                "Led initial design for the Southwest Airlines customer pitch, adapting existing flows for their program needs.",
                "Collaborated on Risk Vision — conducted 6 roadshows achieving alignment across CEO and leadership.",
              ]}
            />

            <ExperienceBlock
              role="Hiring, Mentorship & Design Culture"
              meta="Leadership · Culture"
              bullets={[
                "Participated in hiring panels and helped recruit multiple designers to the team.",
                "Mentored senior and mid-level designers, collaborating on projects and supporting their development.",
                "Initiated a company-wide design newsletter to promote design culture and increase design visibility internally.",
              ]}
            />
          </div>

          {/* Yirental */}
          <div style={{ marginBottom: 48 }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: 16,
                alignItems: "start",
                marginBottom: 16,
              }}
            >
              <div>
                <p style={{ fontSize: 18, fontWeight: 600, color: "var(--color-text-strong)", marginBottom: 4 }}>
                  Yirental
                </p>
                <p style={metaStyle}>Product Designer</p>
              </div>
              <p style={{ ...metaStyle, whiteSpace: "nowrap" }}>Feb 2020 – Jan 2021</p>
            </div>
            <p style={bodyStyle}>
              Spearheaded search experience redesign for an online house rental platform across app and web, launched Nov 2020.
            </p>
            <BulletList
              items={[
                "Led Listhub integration, collaborating with developers on API implementation and with marketing/sales to measure success.",
              ]}
            />
          </div>

          {/* PhoneWagon */}
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: 16,
                alignItems: "start",
                marginBottom: 16,
              }}
            >
              <div>
                <p style={{ fontSize: 18, fontWeight: 600, color: "var(--color-text-strong)", marginBottom: 4 }}>
                  PhoneWagon
                </p>
                <p style={metaStyle}>Product Design Intern</p>
              </div>
              <p style={{ ...metaStyle, whiteSpace: "nowrap" }}>Feb 2021 – May 2021</p>
            </div>
            <p style={bodyStyle}>
              Contributed to a cross-platform SaaS call-tracking application.
            </p>
            <BulletList
              items={[
                "Defined usage guidelines, interaction patterns, and visual specs for the design system.",
              ]}
            />
          </div>
        </section>

        <Divider />

        {/* Education */}
        <section className="content-col" style={{ paddingBottom: "var(--section-gap)" }}>
          <p style={sectionHeadingStyle}>Education</p>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 16, alignItems: "start" }}>
              <div>
                <p style={roleHeadingStyle}>Indiana University Bloomington</p>
                <p style={bodyStyle}>Master of Science in Human-Computer Interaction / Design</p>
              </div>
              <p style={{ ...metaStyle, whiteSpace: "nowrap" }}>Aug 2019 – May 2021</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 16, alignItems: "start" }}>
              <div>
                <p style={roleHeadingStyle}>Tianjin University</p>
                <p style={bodyStyle}>Bachelor of Engineering in Chemical Engineering and Technology</p>
              </div>
              <p style={{ ...metaStyle, whiteSpace: "nowrap" }}>Sep 2014 – Jul 2018</p>
            </div>
          </div>
        </section>

        <Divider />

        {/* Skills */}
        <section className="content-col" style={{ paddingBottom: "var(--section-gap)" }}>
          <p style={sectionHeadingStyle}>Skills</p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              {
                label: "Design & Build",
                items: "Product Design, Interaction Design, Visual Design, Design Systems, Prototyping",
              },
              {
                label: "Technical",
                items: "Cursor, HTML/CSS, Git, Jira",
              },
              {
                label: "Tools",
                items: "Figma, Protopie, Maze, Dovetail, Miro, Notion",
              },
            ].map(({ label, items }) => (
              <div key={label} style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: 16, alignItems: "start" }}>
                <p style={labelStyle}>{label}</p>
                <p style={bodyStyle}>{items}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="content-col" style={{ height: "0.5px", background: "var(--color-border)" }} />

        <footer
          className="text-base content-col"
          style={{ paddingTop: "var(--header-pad)", paddingBottom: "var(--grid-margin)", color: "var(--color-text-muted)" }}
        >
          © {new Date().getFullYear()} {siteConfig.name} · Designed & coded by me · Built with Claude Code
        </footer>
      </main>
    </>
  );
}
