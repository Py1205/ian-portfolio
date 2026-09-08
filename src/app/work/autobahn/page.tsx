import BackButton from "@/components/BackButton";
import ThemeToggle from "@/components/ThemeToggle";
import Expandable from "@/components/Expandable";
import CaseStudyNav from "@/components/CaseStudyNav";
import ProjectPagination from "@/components/ProjectPagination";
import ScreenShowcase from "@/components/ScreenShowcase";

const NAV_SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "the-project", label: "The Project" },
  { id: "wallet", label: "Wallet" },
  { id: "transactions", label: "Transactions" },
  { id: "disputes", label: "Disputes" },
  { id: "outcomes", label: "Outcomes" },
  { id: "reflection", label: "Reflection" },
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

export default function AutobahnPage() {
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
          <p style={labelStyle}>Case Study</p>
          <h1
            style={{
              fontSize: "var(--font-size-hero)",
              lineHeight: "var(--line-height-tight)",
              letterSpacing: "-0.02em",
              fontWeight: 500,
              color: "var(--color-text-strong)",
            }}
          >
            Designing the banking app behind Uber Pro Card UK
          </h1>

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
              { label: "Role", value: "Senior Product Designer" },
              { label: "Timeline", value: "Feb 2025 – Apr 2025" },
              { label: "Team", value: "Product Managers, Engineers, Ops, Legal & Compliance, Uber UK" },
              { label: "Skills", value: "Information Architecture, Systems Thinking, Problem Reframing" },
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

        {/* Cover images */}
        <ScreenShowcase columns={3}>
          <img src="/work/autobahn/wallet.avif" alt="Autobahn wallet home screen" />
          <img src="/work/autobahn/transactions.avif" alt="Transaction details screen" />
          <img src="/work/autobahn/disputes.avif" alt="Dispute this transaction screen" />
        </ScreenShowcase>

        {/* ── Divider ── */}
        <div className="content-col-narrow" style={{ height: "var(--divider-width)", background: "var(--color-border)" }} />

        {/* ── The Project ── */}
        <section id="the-project" className="content-col-narrow" style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}>
          <p style={labelStyle}>The Project</p>
          <h2 style={sectionHeadingStyle}>Two companies, one app, three hundred thousand earners</h2>

          <p style={bodyStyle}>
            Uber wanted to give every UK driver and courier a real banking experience: instant payouts, a debit card, savings, cashback, the whole thing. Marqeta designed, built, and hosted the app. Uber put their brand on it and rolled it out to 300,000 earners.
          </p>
          <p style={bodyStyle}>
            It was also Marqeta&apos;s first real proof that we could ship a white-label platform. So every design decision had to do two jobs: work for the earner today, and hold up for customers we hadn&apos;t even signed yet.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", paddingTop: "32px" }}>
            <div>
              <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-text-muted)", paddingBottom: "10px" }}>
                What I owned
              </p>
              <p style={{ fontSize: "15px", color: "var(--color-text)", lineHeight: 1.6 }}>
                Wallet (Home), Transactions (list + details), Disputes (self-service), and Cashback/Rewards. The stuff earners actually open the app for.
              </p>
            </div>
            <div>
              <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-text-muted)", paddingBottom: "10px" }}>
                Constraints
              </p>
              <p style={{ fontSize: "15px", color: "var(--color-text)", lineHeight: 1.6 }}>
                Two apps connected via deep links and SSO. UK financial rules (PSD2). Uber&apos;s brand review. Product workshop in March, testing in May, launch in September.
              </p>
            </div>
          </div>
        </section>

        {/* ── Transition ── */}
        <section
          className="content-col-narrow"
          style={{
            padding: "48px",
            background: "var(--color-toggle-bg)",
            borderRadius: "var(--radius-sm)",
          }}
        >
          <p style={{ fontSize: "20px", fontWeight: 500, lineHeight: 1.6, color: "var(--color-text)", letterSpacing: "-0.01em" }}>
            When an Uber driver opens this app, they see a balance, some transactions, and a way to report a problem. They don&apos;t see the months of work underneath. Here are three stories about what it took to make it look that easy.
          </p>
        </section>

        {/* ── Divider ── */}
        <div className="content-col-narrow" style={{ height: "var(--divider-width)", background: "var(--color-border)" }} />

        {/* ── Story 1: Wallet ── */}
        <section id="wallet" className="content-col-narrow" style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}>
          <p style={labelStyle}>Story 1</p>
          <h2 style={sectionHeadingStyle}>Wallet: &quot;What is this product, actually?&quot;</h2>

          <p style={keyInsightStyle}>
            The home screen looks like a layout question. It&apos;s actually a question about how earners should think about the whole product.
          </p>

          <p style={bodyStyle}>
            The wallet is the first thing earners see, every time. Before drawing a single screen, I had to answer one question: how should they think about their money inside this app? The answer would shape the IA, the navigation, and how far the product could grow later.
          </p>

          {imgPlaceholder("Side-by-side comparison of Version 1a, Version 1b, and Version 2 — the three Wallet explorations")}

          <p style={{ ...subHeadingStyle, paddingTop: "32px" }}>Three directions explored</p>
          <p style={bodyStyle}>
            We tried three different structures. Each one said something different about what this app actually <em>is</em>.
          </p>

          <Expandable label="Read the details on each direction">
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div>
                <p style={{ fontSize: "16px", fontWeight: 500, color: "var(--color-text-strong)", paddingBottom: "8px" }}>Version 1a — Dual Accounts (tabs)</p>
                <p style={{ fontSize: "16px", color: "var(--color-text)", lineHeight: 1.7 }}>Current and Savings as two explicit accounts, switched with tabs. Card management on its own page. Familiar from any banking app, but earners have to figure out how the accounts and the card connect.</p>
              </div>
              <div>
                <p style={{ fontSize: "16px", fontWeight: 500, color: "var(--color-text-strong)", paddingBottom: "8px" }}>Version 1b — Dual Accounts (swipe)</p>
                <p style={{ fontSize: "16px", color: "var(--color-text)", lineHeight: 1.7 }}>Same idea, different gesture: swipe between accounts. Smoother in motion, but swipe can feel unclear. You&apos;re not sure where you are.</p>
              </div>
              <div>
                <p style={{ fontSize: "16px", fontWeight: 500, color: "var(--color-text-strong)", paddingBottom: "8px" }}>Version 2 — Card-centric Home</p>
                <p style={{ fontSize: "16px", color: "var(--color-text)", lineHeight: 1.7 }}>The card is the home screen. Balance, card art, and activity in one view. Simplest to grasp, but it boxes the product in. Once earners think of it as &quot;just a card,&quot; it&apos;s hard to grow into savings, credit, or anything bigger.</p>
              </div>
              <div>
                <p style={{ fontSize: "16px", fontWeight: 500, color: "var(--color-text-strong)", paddingBottom: "8px" }}>The direction we didn&apos;t ship</p>
                <p style={{ fontSize: "16px", color: "var(--color-text)", lineHeight: 1.7 }}>We also looked at hiding savings entirely, with one visible balance and funds split behind the scenes. Easiest for the user, but it felt opaque and the backend got complicated. We dropped it.</p>
              </div>
            </div>
          </Expandable>

          <p style={subHeadingStyle}>The decision</p>
          <p style={bodyStyle}>
            We went with 1a: dual accounts, explicit tabs. Three reasons. Uber&apos;s roadmap needed savings front and center as an engagement hook. Marqeta&apos;s architecture handled it cleanly. And tabs gave us an IA that could grow. Credit, business accounts, whatever comes next, all without restructuring the app.
          </p>
          <p style={{ ...bodyStyle, paddingBottom: 0 }}>
            This was a foundation decision. Transactions, cashback, navigation. All of it would follow from this one call.
          </p>

          <div style={{ paddingTop: "32px" }}>
            {imgPlaceholder("First-time user home — contextual action cards (\"Use your virtual card,\" \"Activate your physical card\")")}
          </div>

          <p style={subHeadingStyle}>A home screen that adapts</p>
          <p style={bodyStyle}>
            <strong>First-time users</strong> see a guided setup. Action cards on the home screen suggest the next step and reveal features one at a time. If the physical card sits unactivated for three days, the prompt gets louder. There&apos;s no separate onboarding flow. The home screen does the teaching.
          </p>
          <p style={bodyStyle}>
            <strong>Returning users</strong> see everything at once: balance, transfer shortcut, recent activity, cashback tile. All of it answers the question earners ask first: <em>how much do I have, and what just happened?</em>
          </p>

          <div style={{ paddingTop: "8px" }}>
            {imgPlaceholder("Returning user home — Current account with activity and cashback tile, Savings account with interest earned")}
          </div>

          <p style={subHeadingStyle}>Built for white-label reuse</p>
          <p style={{ ...bodyStyle, paddingBottom: 0 }}>
            The spec layer used local variables for theming. Colors, type, card art, account labels: all swappable without touching structure. Account switching worked with tap or swipe, configurable per deployment. Onboarding cards, cashback tiles, and action patterns were modular, toggleable per program. The goal was simple: feel like an Uber product to earners, stay a Marqeta product under the hood.
          </p>

          <div style={{ paddingTop: "32px" }}>
            {imgPlaceholder("Specs — local variables, account switching mechanics, onboarding logic, cashback tile states")}
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="content-col-narrow" style={{ height: "var(--divider-width)", background: "var(--color-border)" }} />

        {/* ── Story 2: Transactions ── */}
        <section id="transactions" className="content-col-narrow" style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}>
          <p style={labelStyle}>Story 2</p>
          <h2 style={sectionHeadingStyle}>Transactions: &quot;One list, forty scenarios&quot;</h2>

          <p style={keyInsightStyle}>
            The real work here was building a category system and a flexible template that could absorb forty-plus scenarios, including the ones we hadn&apos;t thought of yet. The detail screen was the easy part.
          </p>

          <p style={bodyStyle}>
            Every interaction with money lands in one list. Ride payouts, purchases, ATMs, cashback, transfers, fees. They&apos;re all &quot;transactions,&quot; but each one carries different information and different stakes. The design had to hold them together without flattening them or splintering into chaos.
          </p>

          <p style={subHeadingStyle}>Defining the taxonomy</p>
          <p style={bodyStyle}>
            Before any screens, I built the category system: about twenty types, each with its own icon. The set sat at the intersection of UK banking norms, what Uber&apos;s backend actually sends, what Marqeta categorizes, and what makes sense to an earner who doesn&apos;t speak finance. Uber-specific types (payouts, tips) get branded icons. Generic banking types (ATMs, transfers) stay neutral. Green for money in, black for money out.
          </p>

          {imgPlaceholder("Icon mapping — full taxonomy of ~20 transaction types with icons")}

          <p style={subHeadingStyle}>One template, many contexts</p>
          <p style={bodyStyle}>
            I designed a flexible detail template. Amount at the top. A lead visual (icon or merchant logo). A category label. An optional banner. Then structured metadata. The banner is where the magic is. One slot that holds totally different content depending on the transaction type, without changing the page underneath.
          </p>

          <div style={{ paddingTop: "8px", paddingBottom: "24px" }}>
            {imgPlaceholder("4–5 transaction details side by side — ride payout, fuel purchase with cashback, declined gambling transaction, remittance with deep link")}
          </div>

          <Expandable label="See how the template adapts across types">
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {[
                { title: "Ride payout", body: "The simplest case. Amount, Uber icon, date, source, type. The earner just wants to know they got paid." },
                { title: "Fuel purchase", body: "Merchant name, \"Fuel\" tag, and a banner pointing out it may qualify for cashback (with a link to the rewards summary). \"Dispute this transaction\" at the bottom. A routine purchase becomes a doorway into the rewards system." },
                { title: "Declined gambling transaction", body: "The banner turns into a warning explaining why it was declined (restricted merchant category), with a \"Learn more\" page behind it. The earner gets a push notification that deep-links straight to this detail. A confusing moment becomes a clear one, and that builds trust." },
                { title: "International remittance", body: "The banner says \"Having troubles?\" and deep-links to the Uber Driver app, where the full remittance details live. The detail page knows its own limits and points the earner where they actually need to go." },
              ].map(({ title, body }) => (
                <div key={title}>
                  <p style={{ fontSize: "16px", fontWeight: 500, color: "var(--color-text-strong)", paddingBottom: "8px" }}>{title}</p>
                  <p style={{ fontSize: "16px", color: "var(--color-text)", lineHeight: 1.7 }}>{body}</p>
                </div>
              ))}
            </div>
          </Expandable>

          <p style={subHeadingStyle}>Designed for evolution</p>
          <p style={bodyStyle}>
            For MVP, the lead visual is an icon. But the template was built so the same slot could fit a merchant logo or a map pin later, no layout change needed. Post-MVP, a purchase at Tesco shows the Tesco logo and a map pin. Richer, easier to scan, zero structural redesign.
          </p>

          {imgPlaceholder("MVP detail (icon) vs Post-MVP detail (merchant logo + map) — same template, richer data")}

          <p style={subHeadingStyle}>Forty-plus scenarios, one system</p>
          <p style={bodyStyle}>
            The final system covers over forty variants. Five payout types. Nine purchase states (pending, declined, refunded, disputed, restricted MCC, foreign currency). Seven ATM variants. Internal and external transfers. Open banking. Cashback with reversals. Interest. Remittances. All on the same template.
          </p>

          {imgPlaceholder("Full variant matrix — zoomed out to show the scale across Payouts, Purchases, ATM, Transfers, Cashback")}

          <p style={{ ...bodyStyle, paddingTop: "24px", paddingBottom: 0 }}>
            One system, forty scenarios, with room for the ones nobody had defined yet.
          </p>
        </section>

        {/* ── Divider ── */}
        <div className="content-col-narrow" style={{ height: "var(--divider-width)", background: "var(--color-border)" }} />

        {/* ── Story 3: Disputes ── */}
        <section id="disputes" className="content-col-narrow" style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}>
          <p style={labelStyle}>Story 3</p>
          <h2 style={sectionHeadingStyle}>Disputes: &quot;Reframing the problem&quot;</h2>

          <p style={keyInsightStyle}>
            The team&apos;s first instinct was a dynamic progress bar. The real fix was changing what we were trying to solve.
          </p>

          <p style={bodyStyle}>
            When something goes wrong with a transaction, earners need to report it from the app. Self-service, no phone call. The backend was already there in Marqeta&apos;s UXT SDK, but the questionnaire is dynamic and branching. Over sixteen flows. Content updated by Mastercard twice a year.
          </p>

          {imgPlaceholder("Disputes flow overview — entry point, primer, routing logic, branching paths, convergence at confirmation")}

          <p style={subHeadingStyle}>The progress bar that wasn&apos;t</p>
          <p style={bodyStyle}>
            The first instinct was a dynamic progress bar that would adjust as questions branched. We sat down with engineering, looked at the coordination cost, and realized two things. The work was expensive. And we were solving the wrong problem.
          </p>
          <p style={bodyStyle}>
            Earners aren&apos;t anxious about being on step 3 of 5. They&apos;re anxious about whether this takes thirty seconds or thirty minutes. So we set expectations instead of showing progress.
          </p>

          <p style={subHeadingStyle}>The Dispute Primer</p>
          <p style={bodyStyle}>
            Instead of real-time tracking, we built an entry page that sets expectations up front. Tap &quot;Dispute this transaction&quot; and you see: &quot;Something&apos;s not right? We&apos;re here to help.&quot; The page tells you it&apos;s a short questionnaire (usually quick, sometimes a few minutes) and what to have ready. Cheap to build, solves the psychological problem, works for all sixteen flows.
          </p>

          {imgPlaceholder("Dispute Primer — \"Something's not right?\" — followed by first questionnaire screen")}

          <p style={subHeadingStyle}>A scalable pattern, not sixteen designs</p>
          <p style={bodyStyle}>
            Sixteen-plus flows, content updated twice a year. Designing each one by hand would never hold up. Instead, I built a reusable set of form components: text inputs, radio groups, file uploaders, info cards, confirmation summaries. They compose in any order based on backend logic. New dispute types ship without new design. Content updates flow through existing patterns. And the same library works for future white-label customers on different card networks.
          </p>

          <Expandable label="See example flows compared">
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {[
                { title: "Fraudulent transaction", body: "The longest flow. Questionnaire, replacement card order, biometric verification, and resolution states for both won and lost disputes." },
                { title: "Incorrect amount", body: "A medium-length flow. Different branches of questions, document upload for receipts, resolution tracking." },
                { title: "ATM withdrawal", body: "Its own questionnaire path. ATM-specific details like location, amount expected vs received." },
                { title: "Non-network dispute", body: "The shortest path. It routes straight to a support contact page instead of the questionnaire. Not everything can be self-service." },
              ].map(({ title, body }) => (
                <div key={title}>
                  <p style={{ fontSize: "16px", fontWeight: 500, color: "var(--color-text-strong)", paddingBottom: "8px" }}>{title}</p>
                  <p style={{ fontSize: "16px", color: "var(--color-text)", lineHeight: 1.7 }}>{body}</p>
                </div>
              ))}
            </div>
          </Expandable>

          <div style={{ paddingTop: "32px" }}>
            {imgPlaceholder("3–4 dispute flows contrasted — showing different lengths and components but same pattern system")}
          </div>

          <p style={subHeadingStyle}>Closing the loop</p>
          <p style={{ ...bodyStyle, paddingBottom: 0 }}>
            Disputes loop back into the transaction system. File one, and the transaction detail picks up a &quot;Transaction disputed&quot; banner. Resolve it, and the outcome shows up there too. Same banner slot that holds cashback notices and MCC warnings. One pattern, doing multiple jobs across the app.
          </p>

          <div style={{ paddingTop: "32px" }}>
            {imgPlaceholder("Transaction detail with \"Transaction disputed\" → same transaction after \"Dispute complete\"")}
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="content-col-narrow" style={{ height: "var(--divider-width)", background: "var(--color-border)" }} />

        {/* ── Common Thread ── */}
        <section
          className="content-col-narrow"
          style={{ padding: "48px", background: "var(--color-toggle-bg)", borderRadius: "var(--radius-sm)" }}
        >
          <p style={{ ...labelStyle, paddingBottom: "24px" }}>The Common Thread</p>
          <p style={{ fontSize: "17px", color: "var(--color-text)", lineHeight: 1.7, paddingBottom: "16px" }}>
            Each of these looked like a UI problem on the surface, but they were all structural underneath. The wallet was a mental-model question. The transactions list was a taxonomy and a template system. The dispute flow was a scalable-pattern problem.
          </p>
          <p style={{ fontSize: "17px", color: "var(--color-text)", lineHeight: 1.7 }}>
            The thread running through all three: absorb the complexity early (in the IA, the taxonomy, the components) so the earner sees something simple, and the team gets something they can actually maintain.
          </p>
        </section>

        {/* ── Divider ── */}
        <div className="content-col-narrow" style={{ height: "var(--divider-width)", background: "var(--color-border)" }} />

        {/* ── Outcomes ── */}
        <section id="outcomes" className="content-col-narrow" style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}>
          <p style={labelStyle}>Outcomes</p>
          <h2 style={sectionHeadingStyle}>What shipped and what it proved</h2>

          <p style={bodyStyle}>
            Autobahn launched as Marqeta&apos;s first white-label app, serving Uber&apos;s UK earners. The patterns held up under real production traffic, and they were built to be reused.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", paddingTop: "8px" }}>
            {[
              { number: "1,036 TPS", desc: "Peak transaction throughput, UX patterns holding without reliability risk" },
              { number: "99.997%", desc: "Transaction success rate at peak traffic" },
              { number: "32% YoY", desc: "Transaction volume growth supported by the platform" },
              { number: "39% YoY", desc: "API TPS growth, white-label architecture scaling cleanly" },
            ].map(({ number, desc }) => (
              <div
                key={number}
                style={{ background: "var(--color-toggle-bg)", borderRadius: "var(--radius-sm)", padding: "28px 24px" }}
              >
                <p style={{ fontSize: "28px", fontWeight: 600, letterSpacing: "-0.02em", color: "var(--color-text-strong)", paddingBottom: "8px" }}>
                  {number}
                </p>
                <p style={{ fontSize: "14px", color: "var(--color-text-muted)", lineHeight: 1.5 }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>

          <p style={{ ...bodyStyle, paddingTop: "32px", paddingBottom: 0 }}>
            The numbers aside, the bigger thing this project proved was that Marqeta could deliver a full cardholder experience, not just plumbing, at a bar high enough for a partner like Uber. Those patterns became the foundation for how Marqeta does white-label work going forward.
          </p>
        </section>

        {/* ── Divider ── */}
        <div className="content-col-narrow" style={{ height: "var(--divider-width)", background: "var(--color-border)" }} />

        {/* ── Reflection ── */}
        <section id="reflection" className="content-col-narrow" style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}>
          <p style={labelStyle}>Reflection</p>
          <h2 style={sectionHeadingStyle}>What I&apos;d do differently</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {[
              {
                title: "Get into product framing earlier",
                body: "Some of the structural calls would've come out better if design had been in the room during initial scoping with Uber. Next time I'd push to be there from the first workshop.",
              },
              {
                title: "Share frameworks more broadly, sooner",
                body: "The taxonomy, the template, the component library. All of it was useful beyond my team. Sharing them earlier and more openly would've spread the impact and caught blind spots faster.",
              },
              {
                title: "Invest more in the long-horizon vision",
                body: "Most of my energy went into shipping the MVP well. Looking back, I wish I'd spent more time on the future state. Where is this product two or three quarters from now?",
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                style={{ paddingLeft: "20px", borderLeft: "2px solid var(--color-border-strong)" }}
              >
                <p style={{ fontSize: "16px", fontWeight: 500, color: "var(--color-text-strong)", paddingBottom: "6px" }}>{title}</p>
                <p style={{ fontSize: "16px", color: "var(--color-text)", lineHeight: 1.7 }}>{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="content-col-narrow" style={{ height: "var(--divider-width)", background: "var(--color-border)" }} />

        {/* ── Prev / Next ── */}
        <ProjectPagination currentSlug="autobahn" />

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
