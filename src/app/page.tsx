import { siteConfig, articles, projects } from "@/lib/data";
import ThemeToggle from "@/components/ThemeToggle";
import MobileHeader from "@/components/MobileHeader";
import Sidebar from "@/components/Sidebar";
import AutobahnThumbnail from "@/components/AutobahnThumbnail";
import Disputes360Thumbnail from "@/components/Disputes360Thumbnail";

export default function Home() {
  return (
    <>
    {/* Theme toggle — fixed bottom left */}
    <div className="fixed z-[300]" style={{ bottom: "var(--nav-top)", left: "var(--grid-margin)" }}>
      <ThemeToggle />
    </div>

    <main className="page-grid content-col-narrow">
      <Sidebar activeHref="/" />

      <MobileHeader activeHref="/" />

      {/* Hero */}
      <section
        className="content-col"
        style={{ paddingTop: "var(--hero-top)", paddingBottom: "var(--section-gap)" }}
      >
        <h1
          style={{
            fontSize: "var(--font-size-hero)",
            lineHeight: "var(--line-height-tight)",
            letterSpacing: "-0.02em",
            fontWeight: 500,
            color: "var(--color-text-strong)",
          }}
        >
          I&apos;m Ian. I design complex products. From concept to coded prototype.
        </h1>
        <p className="pt-10" style={{ fontSize: "20px", lineHeight: "1.4", color: "var(--color-label)" }}>
          Senior Product Designer focused on{" "}
          <span style={{ fontFamily: "var(--font-geist-pixel-square)", color: "var(--color-text-strong)" }}>B2B SaaS</span>
          {" "}and{" "}
          <span style={{ fontFamily: "var(--font-geist-pixel-square)", color: "var(--color-text-strong)" }}>AI products</span>
          .{" "}Currently at Marqeta in SF Bay Area.
        </p>
      </section>

      {/* Divider */}
      <div className="content-col" style={{ height: "var(--divider-width)", background: "var(--color-border)" }} />

      {/* Selected Work */}
      <section className="content-col" style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}>
        <h2>Selected work</h2>
        <div
          style={{
            display: "grid",
            columnGap: "var(--grid-gap)",
            rowGap: "var(--section-gap)",
            paddingTop: "var(--grid-gap)",
          }}
          className="work-grid"
        >
          {projects.slice(0, 2).map((project) => (
            <a key={project.title} href={project.href} className="group block">
              {project.slug === 'autobahn' ? (
                <AutobahnThumbnail />
              ) : project.slug === 'disputes360' ? (
                <Disputes360Thumbnail />
              ) : (
                <div
                  style={{
                    aspectRatio: "16 / 9",
                    background: "var(--color-border-strong)",
                    borderRadius: "var(--radius-sm)",
                  }}
                />
              )}
              <div style={{ paddingTop: "var(--grid-gap)" }}>
                <p className="card-title" style={{ fontSize: "18px" }}>
                  {project.title}
                </p>
                <p className="text-base leading-[1.5]" style={{ color: "var(--color-text-muted)", paddingTop: "8px" }}>
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
        <p style={{ paddingTop: "var(--section-gap)" }}>
          <a
            href="/work"
            className="text-base hover:opacity-60 transition-opacity"
            style={{ color: "var(--color-text-muted)" }}
          >
            View more ↗
          </a>
        </p>
      </section>

      {/* Divider */}
      <div className="content-col" style={{ height: "var(--divider-width)", background: "var(--color-border)" }} />

      {/* Design Philosophy */}
      <section className="content-col" style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}>
        <h2>Design philosophy</h2>
        <p className="pt-4 text-base leading-[1.5]" style={{ color: "var(--color-text)" }}>{siteConfig.philosophy}</p>
      </section>

      {/* Divider */}
      <div className="content-col" style={{ height: "var(--divider-width)", background: "var(--color-border)" }} />

      {/* Articles */}
      <section className="content-col" style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}>
        <h2>Articles</h2>
        <div className="pt-4">
          {articles.map((article, i) => (
            <a key={article.title} href={article.href} className="group block">
              {i > 0 && <div style={{ height: "1px", background: "var(--color-border-strong)" }} />}
              <div className="py-4">
                <span className="text-base leading-[1.5] group-hover:opacity-60 transition-opacity" style={{ color: "var(--color-text-strong)" }}>
                  {article.title}
                </span>
                <div className="pt-1 text-base" style={{ color: "var(--color-text-muted)" }}>{article.date}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="content-col" style={{ height: "var(--divider-width)", background: "var(--color-border)" }} />

      {/* Contact */}
      <section className="content-col" style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}>
        <h2>Contact me</h2>
        <p className="pt-4 text-base leading-[1.5]" style={{ color: "var(--color-text)" }}>{siteConfig.contact}</p>
        <p className="pt-5 text-base">
          <a
            href={`mailto:${siteConfig.email}`}
            className="underline hover:opacity-70 transition-opacity"
            style={{ color: "var(--color-text-strong)" }}
          >
            Email me ↗
          </a>
        </p>
      </section>

      {/* Divider */}
      <div className="content-col" style={{ height: "var(--divider-width)", background: "var(--color-border)" }} />

      {/* Footer */}
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
