import Link from "next/link";
import styles from "../early-case-study.module.css";
import BackButton from "@/components/BackButton";
import ThemeToggle from "@/components/ThemeToggle";
import CaseStudyNav from "@/components/CaseStudyNav";
import ProjectPagination from "@/components/ProjectPagination";

const NAV_SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "role", label: "My role" },
  { id: "the-scope", label: "The Scope" },
  { id: "zooming-in", label: "Zooming In" },
  { id: "delivery", label: "Delivered" },
];

const imgPlaceholder = (caption: string) => (
  <figure className={styles.placeholder}>
    <span>Image placeholder</span>
    <figcaption>{caption}</figcaption>
  </figure>
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

      <main className={`page-grid ${styles.page}`}>

        {/* ── Hero ── */}
        <header id="overview" className={`${styles.content} ${styles.hero}`}>
          <h1>
            PhoneWagon
          </h1>

          <p className={styles.intro}>
            Building shared foundations and components for a call-tracking product.
          </p>

          <dl className={styles.meta}>
            <div><dt>Role</dt><dd>Product Designer</dd></div>
            <div><dt>Timeline</dt><dd>Nov 2020 – Feb 2021</dd></div>
            <div><dt>Team</dt><dd>1 PM, 2 Product Designers, 1 Developer</dd></div>
            <div><dt>Skills</dt><dd>Design systems, component architecture, interaction specs, documentation</dd></div>
          </dl>
        </header>

        {/* Cover placeholder */}
        <div className={styles.content}>
          {imgPlaceholder("Hero image — Foundation + Website library overview")}
        </div>

        <section id="role" className={`${styles.content} ${styles.section}`}>
          <h2>The product and my role</h2>
          <p>
            I worked on PhoneWagon’s design system from November 2020 to February 2021, alongside another product designer, a product manager, and a developer. The work covered an interface audit, shared visual foundations, reusable components, and usage documentation.
          </p>
        </section>

        {/* ── The Scope ── */}
        <section id="the-scope" className={`${styles.content} ${styles.section}`}>
          <h2 className={styles.chapter}><span className={styles.number}>01</span>The Scope</h2>
          <h3>Creating a shared set of components</h3>

          <p>
            PhoneWagon helps teams track calls and text messages tied to marketing campaigns. As the product grew, the interface accumulated redundant components and inconsistent patterns. The team lacked shared rules for when and how to use them.
          </p>

          <p>
            We reviewed the product’s core users and agreed on design principles, then inventoried the existing interface. The audit helped us identify overlapping components and patterns that needed consolidation.
          </p>

          <p>
            Over four months, we redesigned components against a shared foundation, documented how to use them, and released two libraries: Foundation and Website.
          </p>

          <div className={styles.cards}>
            <div className={styles.card}>
              <p className={styles.cardTitle}>
                Foundation
              </p>
              <p className={styles.cardBody}>
                Shared styles and assets for color, typography, spacing, icons, illustrations, and the logo.
              </p>
            </div>
            <div className={styles.card}>
              <p className={styles.cardTitle}>
                Website
              </p>
              <p className={styles.cardBody}>
                Reusable interface components, including buttons, avatars, badges, checkboxes, dropdowns, selects, tabs, and tables.
              </p>
            </div>
          </div>

          {imgPlaceholder("Library overview — Foundation + Website. Caption: \"Two shipped libraries, each with its own usage guidelines.\"")}
        </section>

        {/* ── Zooming In ── */}
        <section id="zooming-in" className={`${styles.content} ${styles.section}`}>
          <h2 className={styles.chapter}><span className={styles.number}>02</span>Zooming In</h2>
          <h3>Designing a message component for different kinds of activity</h3>

          <p>
            The chat message component shows how we worked through the details. A conversation could include customers and several teammates, alongside calls, texts, and other activity. The component needed to make those entries recognizable within a consistent layout.
          </p>

          {/* Anatomy */}
          <h4>A shared structure across five message types</h4>
          <p>
            The component covered five message types and more than 30 states. We organized it into three parts: an avatar, the time and phone line, and the main body.
          </p>

          <p>
            The avatar identifies the participant. The time and line information show when the activity happened and which phone line it came through. The body accommodates calls, messages, voicemail, browsing history, and search keywords.
          </p>

          <p>
            We specified a body width of 40–380px, with 16px internal padding and 24px external spacing. These rules gave the different message types a common layout.
          </p>

          {imgPlaceholder("Anatomy diagram — Avatar / Time and lines / Main body breakdown with explainer cards")}

          {/* Readability */}
          <h4>Defining the text size</h4>
          <p>
            The component specification used 14px text, with shared spacing rules across message types.
          </p>

          {/* Shape */}
          <h4>Refining the message shape</h4>
          <p>
            We explored message shapes over three rounds, gathering user feedback each time. Small corner radii felt flat alongside the rest of the interface. Larger, tailed bubbles felt playful but visually dated.
          </p>

          <p>
            The final design used a rounded bubble without a tail, with a smaller radius at the corner nearest the avatar. That corner kept a visual connection between the message and its sender.
          </p>

          {imgPlaceholder("Shape exploration — three-option comparison grid")}

          {/* Color */}
          <h4>Reducing the number of color groups</h4>
          <p>
            The first version used five color groups to distinguish participant identities. Testing showed that users struggled to interpret those distinctions quickly, and the conversation looked busy.
          </p>

          <p>
            We reduced the palette to three groups. Avatars already identified participants, so color could focus on helping users follow the conversation and distinguish internal notes from customer-facing replies.
          </p>

          {imgPlaceholder("Color iteration — 5 groups vs. 3 groups with reasoning cards")}
        </section>

        <section id="delivery" className={`${styles.content} ${styles.section}`}>
          <h2>Delivering the libraries</h2>
          <p>
            We released the Foundation and Website libraries with usage guidelines. The message component brought together the structure, spacing, shape, and color decisions described here as a reusable pattern for the product.
          </p>
        </section>

        {/* ── Prev / Next ── */}
        <ProjectPagination currentSlug="phonewagon" />

        {/* Footer */}
        <footer className={`${styles.content} ${styles.footer}`}>
          <Link href="/work" className="hover:opacity-60 transition-opacity" style={{ color: "var(--color-text-muted)" }}>
            ← Back to work
          </Link>
        </footer>

      </main>
    </>
  );
}
