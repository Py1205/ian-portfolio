import { projects, siteConfig, type Project } from "@/lib/data";
import ThemeToggle from "@/components/ThemeToggle";
import MobileHeader from "@/components/MobileHeader";
import Sidebar from "@/components/Sidebar";
import AutobahnThumbnail from "@/components/AutobahnThumbnail";
import Disputes360Thumbnail from "@/components/Disputes360Thumbnail";

function ProjectCard({ project }: { project: Project }) {
  return (
    <a href={project.href} className="group block">
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
        <p
          className="text-base leading-[1.5]"
          style={{ color: "var(--color-text-muted)", paddingTop: "8px" }}
        >
          {project.description}
        </p>
        <div className="flex gap-2 flex-wrap" style={{ paddingTop: "8px" }}>
          {project.tags.map((tag) => (
            <span key={tag} className="text-base" style={{ color: "var(--color-text-muted)" }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function Work() {
  const featured = projects.slice(0, 2);
  const other = projects.slice(2);

  return (
    <>
      {/* Theme toggle — fixed bottom left */}
      <div className="fixed z-[300]" style={{ bottom: "var(--nav-top)", left: "var(--grid-margin)" }}>
        <ThemeToggle />
      </div>

      <main className="page-grid content-col-narrow">
        <Sidebar activeHref="/work" />

        <MobileHeader activeHref="/work" />

        {/* Hero */}
        <section className="content-col" style={{ paddingTop: "var(--hero-top)", paddingBottom: "var(--section-gap)" }}>
          <h1
            style={{
              fontSize: "var(--font-size-hero)",
              lineHeight: "var(--line-height-tight)",
              letterSpacing: "-0.02em",
              fontWeight: 500,
              color: "var(--color-text-strong)",
            }}
          >
            Work
          </h1>
        </section>

        {/* Featured work */}
        <section className="content-col" style={{ paddingTop: "0", paddingBottom: "var(--section-gap)" }}>
          <h2 style={{ paddingBottom: "var(--grid-gap)" }}>Featured work</h2>
          <div
            style={{
              display: "grid",
              columnGap: "var(--grid-gap)",
              rowGap: "var(--section-gap)",
            }}
            className="work-grid"
          >
            {featured.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        {/* Other work */}
        <section className="content-col" style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}>
          <h2 style={{ paddingBottom: "var(--grid-gap)" }}>Other work</h2>
          <div
            style={{
              display: "grid",
              columnGap: "var(--grid-gap)",
              rowGap: "var(--section-gap)",
            }}
            className="work-grid"
          >
            {other.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="content-col" style={{ height: "var(--divider-width)", background: "var(--color-border)" }} />

        {/* Footer */}
        <footer
          className="text-base content-col"
          style={{ paddingTop: "var(--header-pad)", paddingBottom: "var(--grid-margin)", color: "var(--color-text-muted)" }}
        >
          © {new Date().getFullYear()} {siteConfig.name}
        </footer>
      </main>
    </>
  );
}
