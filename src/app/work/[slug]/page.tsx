import BackButton from "@/components/BackButton";
import ThemeToggle from "@/components/ThemeToggle";
import ProjectPagination from "@/components/ProjectPagination";
import { projects } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <>
      {/* Back button — top left, where "Ian Pan" sits on other pages */}
      <div className="fixed z-[300]" style={{ top: "var(--nav-top)", left: "var(--grid-margin)" }}>
        <BackButton />
      </div>

      {/* Theme toggle — fixed bottom left */}
      <div className="fixed z-[300]" style={{ bottom: "var(--nav-top)", left: "var(--grid-margin)" }}>
        <ThemeToggle />
      </div>

      <main className="page-grid content-col-narrow">
        {/* Hero */}
        <section
          className="content-col-narrow"
          style={{
            paddingTop: "var(--hero-top)",
            paddingBottom: "var(--section-gap)",
          }}
        >
          <p className="text-base" style={{ color: "var(--color-text-muted)", paddingBottom: "var(--grid-gap)" }}>
            {project.category}
          </p>
          <h1
            style={{
              fontSize: "var(--font-size-hero)",
              lineHeight: "var(--line-height-tight)",
              letterSpacing: "-0.02em",
              fontWeight: 500,
              color: "var(--color-text-strong)",
            }}
          >
            {project.title}
          </h1>
          <p
            className="pt-6"
            style={{ fontSize: "20px", color: "var(--color-text)", maxWidth: "560px" }}
          >
            {project.description}
          </p>
        </section>

        {/* Cover image */}
        <div
          className="content-col-narrow"
          style={{
            aspectRatio: "16 / 9",
            background: "var(--color-border-strong)",
            borderRadius: "var(--radius-sm)",
          }}
        />

        {/* Divider */}
        <div className="content-col-narrow" style={{ height: "var(--divider-width)", background: "var(--color-border)" }} />

        {/* Overview */}
        <section
          className="content-col-narrow"
          style={{
            paddingTop: "var(--section-gap)",
            paddingBottom: "var(--section-gap)",
          }}
        >
          <h2>Overview</h2>
          <p
            className="pt-4 leading-relaxed"
            style={{ fontSize: "20px", color: "var(--color-text)" }}
          >
            Coming soon.
          </p>
        </section>

        {/* Divider */}
        <div className="content-col-narrow" style={{ height: "var(--divider-width)", background: "var(--color-border)" }} />

        {/* Prev / Next */}
        <ProjectPagination currentSlug={slug} />

        {/* Divider */}
        <div className="content-col-narrow" style={{ height: "var(--divider-width)", background: "var(--color-border)" }} />

        {/* Footer */}
        <footer
          className="text-base content-col-narrow"
          style={{
            paddingTop: "var(--header-pad)",
            paddingBottom: "var(--grid-margin)",
            color: "var(--color-text-muted)",
          }}
        >
          <a
            href="/work"
            className="hover:opacity-60 transition-opacity"
            style={{ color: "var(--color-text-muted)" }}
          >
            ← Back to work
          </a>
        </footer>
      </main>
    </>
  );
}
