import Image from "next/image";
import ScreenShowcase from "@/components/ScreenShowcase";
import Link from "next/link";
import styles from "../early-case-study.module.css";
import yirentalStyles from "./case-study.module.css";
import BackButton from "@/components/BackButton";
import ThemeToggle from "@/components/ThemeToggle";
import CaseStudyNav from "@/components/CaseStudyNav";
import ProjectPagination from "@/components/ProjectPagination";

const NAV_SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "role", label: "My role" },
  { id: "the-problem", label: "The Problem" },
  { id: "the-reframe", label: "The Reframe" },
  { id: "the-design", label: "The Design" },
  { id: "outcome", label: "Outcome" },
];

const images = {
  chooseSearchType: { src: "/work/yirental/choose-search-type.avif", width: 750, height: 1624, alt: "Choose a search type from six rental and community categories" },
  searchShortcut: { src: "/work/yirental/search-shortcut.avif", width: 750, height: 1624, alt: "Search shortcuts with recent searches, nearby listings, and suggested cities" },
  homepage: { src: "/work/yirental/homepage.avif", width: 750, height: 1624, alt: "Yirental homepage with Explore Seattle and rental categories" },
  defaultFilter: { src: "/work/yirental/default-filter.avif", width: 750, height: 1624, alt: "Rental listings with default search filters" },
  moreFilters: { src: "/work/yirental/more-filters.avif", width: 750, height: 1624, alt: "More filters for rental preferences" },
  previous: { src: "/work/yirental/previous-solution.avif", width: 1640, height: 1822, alt: "Previous rental search screens, three usability issues, and a 2.8 out of 5 satisfaction score" },
  intents: { src: "/work/yirental/search-intents.avif", width: 1532, height: 544, alt: "Exploratory renters browse to clarify their needs; navigational renters search for specific requirements" },
  score: { src: "/work/yirental/satisfaction-score.avif", width: 704, height: 510, alt: "Satisfaction increased from 2.8 to 4.7 out of 5, based on feedback from 136 participants" },
  web: { src: "/work/yirental/web.avif", width: 2320, height: 1059, alt: "Yirental web search with service categories, recent searches, and popular cities" },
};

function CaseImage({ name, eager = false }: { name: keyof typeof images; eager?: boolean }) {
  return (
    <Image
      {...images[name]}
      alt={images[name].alt}
      unoptimized
      loading={eager ? "eager" : "lazy"}
      style={{ display: "block", width: "100%", height: "auto" }}
    />
  );
}

function Diagram({ name }: { name: "previous" | "intents" | "score" }) {
  const maxWidths = { previous: 640, intents: 640, score: 352 };

  return (
    <div style={{ width: "100%", maxWidth: maxWidths[name], margin: "0 auto" }}>
      <CaseImage name={name} />
    </div>
  );
}

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

      <main className={`page-grid ${styles.page}`}>

        {/* ── Hero ── */}
        <header id="overview" className={`${styles.content} ${styles.hero}`}>
          <h1>
            Yirental
          </h1>

          <p className={styles.intro}>
            Helping people browse rental listings and narrow their search.
          </p>

          <dl className={styles.meta}>
            <div><dt>Role</dt><dd>Product Designer (sole designer)</dd></div>
            <div><dt>Timeline</dt><dd>Jun 2020 – Sep 2020</dd></div>
            <div><dt>Team</dt><dd>PM, Developer, UX Researcher</dd></div>
            <div><dt>Skills</dt><dd>User research, IA, interaction design, usability testing</dd></div>
          </dl>
        </header>

        {/* Cover images */}
        <div className={styles.content}>
          <ScreenShowcase columns={3}>
            <CaseImage name="homepage" eager />
            <CaseImage name="defaultFilter" eager />
            <CaseImage name="moreFilters" eager />
          </ScreenShowcase>
        </div>

        <section id="role" className={`${styles.content} ${styles.section}`}>
          <h2>The product and my role</h2>
          <p>
            Yirental helps people search for rentals. As the product grew, users reported difficulty finding listings that matched their needs.
          </p>
          <p>
            I was the sole product designer on the mobile search redesign, working with a product manager, developer, and UX researcher. My work covered user research, search structure, filters, and the interface.
          </p>
        </section>

        {/* ── The Problem ── */}
        <section id="the-problem" className={`${styles.content} ${styles.section}`}>
          <h2 className={styles.chapter}><span className={styles.number}>01</span>The Problem</h2>
          <h3>Understanding where search fell short</h3>

          <p>
            A survey of 108 users recorded a satisfaction score of 2.8 out of 5. I conducted 18 user interviews to understand what made the search experience difficult.
          </p>

          <p>
            Three problems emerged. Users had to change location and service type in separate steps. The filters offered too few options for specific needs. Dense screens made the listings themselves harder to scan.
          </p>

          <div style={{ marginTop: "32px" }}><Diagram name="previous" /></div>
        </section>

        {/* ── The Reframe ── */}
        <section id="the-reframe" className={`${styles.content} ${styles.section}`}>
          <h2 className={styles.chapter}><span className={styles.number}>02</span>The Reframe</h2>
          <h3>Supporting people at different points in their search</h3>

          <p>
            The research pointed to two ways people approached search. Some had a rough idea of what they wanted and used browsing to refine it. Others arrived with specific requirements and wanted to narrow the results quickly.
          </p>

          <div className={styles.cards}>
            <div className={styles.card}>
              <p className={styles.cardTitle}>
                Browsing to decide
              </p>
              <p className={styles.cardBody}>
                Explore listings and categories to work out what fits.
              </p>
            </div>
            <div className={styles.card}>
              <p className={styles.cardTitle}>
                Searching with a clear need
              </p>
              <p className={styles.cardBody}>
                Go directly to a category and apply specific filters.
              </p>
            </div>
          </div>

          <p>
            The existing flow gave both groups the same starting point, with limited ways to browse or refine a search.
          </p>

          <p>
            I used these two search behaviors to guide the redesign: give people room to explore, while keeping categories and detailed filters easy to reach.
          </p>

          <div style={{ marginTop: "32px" }}><Diagram name="intents" /></div>
        </section>

        {/* ── The Design ── */}
        <section id="the-design" className={`${styles.content} ${styles.section}`}>
          <h2 className={styles.chapter}><span className={styles.number}>03</span>The Design</h2>
          <h3>Updating search, filters, and the listing interface</h3>

          <p>
            The redesign focused on three parts of the experience: how users start a search, how they narrow the results, and how they scan the listings.
          </p>

          <h4>Giving users more ways to start</h4>
          <p>
            I replaced the single search entry with six paths into the content. Users could browse to explore their options or go directly to a category when they knew what they wanted.
          </p>

          <h4>Making specific requirements easier to express</h4>
          <p>
            I expanded the filters to more than 10 categories and 40 options, then ordered them by frequency of use. This gave users more ways to describe what they needed while keeping common filters near the top.
          </p>

          <h4>Making listings easier to scan</h4>
          <p>
            I reduced information density and clarified the hierarchy across the search flow. I also replaced generic icons with a custom set that followed the visual guidelines. These changes gave the listings more room and made the surrounding controls more consistent.
          </p>

          <div style={{ marginTop: "32px" }}>
            <ScreenShowcase className={yirentalStyles.hifi}>
              <CaseImage name="homepage" />
              <CaseImage name="chooseSearchType" />
              <CaseImage name="searchShortcut" />
              <CaseImage name="moreFilters" />
            </ScreenShowcase>
          </div>
        </section>

        {/* ── Outcome ── */}
        <section id="outcome" className={`${styles.content} ${styles.section}`}>
          <h2>Shipped in November 2020</h2>

          <p>
            The redesigned search experience launched on November 29, 2020. Three months later, a follow-up survey using the same questionnaire recorded a satisfaction score of 4.7 out of 5 across 136 respondents, compared with 2.8 before the redesign.
          </p>

          <div style={{ margin: "32px 0" }}><Diagram name="score" /></div>

          <p>
            I also worked with the web team to carry the search approach into the web app.
          </p>

          <div style={{ marginTop: "32px" }}>
            <ScreenShowcase columns={1}>
              <CaseImage name="web" />
            </ScreenShowcase>
          </div>
        </section>

        {/* ── Prev / Next ── */}
        <ProjectPagination currentSlug="yirental" />

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
