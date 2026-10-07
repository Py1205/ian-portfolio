import Image from "next/image";
import ScreenShowcase from "@/components/ScreenShowcase";
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

const images = {
  product: { src: "/work/phonewagon/product.avif", width: 2880, height: 1800, alt: "PhoneWagon inbox with conversations, calls, messages, and customer details" },
  libraries: { src: "/work/phonewagon/design-systems.avif", width: 4240, height: 2302, alt: "Foundation and Website design system libraries with shared colors and interface components" },
  anatomy: { src: "/work/phonewagon/message-anatomy.avif", width: 2318, height: 1058, alt: "Message anatomy showing the avatar, time and phone line, and main body" },
  shape: { src: "/work/phonewagon/shape-exploration.avif", width: 2330, height: 692, alt: "Three message shape explorations leading to a rounded bubble without a tail" },
  color: { src: "/work/phonewagon/color-exploration.avif", width: 2323, height: 1908, alt: "Message color comparison between the initial five groups and final three groups" },
};

function CaseImage({ name }: { name: keyof typeof images }) {
  return (
    <Image
      {...images[name]}
      alt={images[name].alt}
      unoptimized
      loading={name === "product" ? "eager" : "lazy"}
      style={{ display: "block", width: "100%", height: "auto" }}
    />
  );
}

function Diagram({ name }: { name: Exclude<keyof typeof images, "product"> }) {
  const maxWidths = { libraries: 760, anatomy: 680, shape: 720, color: 640 };
  return (
    <figure style={{ width: "100%", maxWidth: maxWidths[name], margin: "32px auto" }}>
      <CaseImage name={name} />
    </figure>
  );
}

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

        {/* Product cover */}
        <div className={styles.content}>
          <ScreenShowcase columns={1}>
            <CaseImage name="product" />
          </ScreenShowcase>
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

          <Diagram name="libraries" />
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

          <Diagram name="anatomy" />

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

          <Diagram name="shape" />

          {/* Color */}
          <h4>Reducing the number of color groups</h4>
          <p>
            The first version used five color groups to distinguish participant identities. Testing showed that users struggled to interpret those distinctions quickly, and the conversation looked busy.
          </p>

          <p>
            We reduced the palette to three groups. Avatars already identified participants, so color could focus on helping users follow the conversation and distinguish internal notes from customer-facing replies.
          </p>

          <Diagram name="color" />
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
