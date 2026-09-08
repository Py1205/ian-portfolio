import ThemeToggle from "@/components/ThemeToggle";
import MobileHeader from "@/components/MobileHeader";
import Sidebar from "@/components/Sidebar";
import { siteConfig } from "@/lib/data";

export default function About() {
  return (
    <>
      <div className="fixed z-[300]" style={{ bottom: "var(--nav-top)", left: "var(--grid-margin)" }}>
        <ThemeToggle />
      </div>

      <main className="page-grid content-col-narrow">
        <Sidebar activeHref="/about" />

        <MobileHeader activeHref="/about" />

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
            About
          </h1>
        </section>

        <section className="content-col" style={{ paddingTop: "0", paddingBottom: "var(--section-gap)" }}>
          <p className="text-base leading-[1.5]" style={{ color: "var(--color-text-muted)" }}>
            Coming soon.
          </p>
        </section>

        <div className="content-col" style={{ height: "var(--divider-width)", background: "var(--color-border)" }} />

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
